package com.cocos.game;

import android.app.Activity;
import android.os.Bundle;
import android.util.Log;

import org.json.JSONObject;
import org.json.JSONException;

import com.bytedance.sdk.openadsdk.*;

import com.cocos.lib.CocosHelper;
import com.cocos.lib.JsbBridgeWrapper;

/**
 * 统一事件桥：JS 通过 onEvent 发送事件到原生；原生通过 dispatch 派发到 JS
 * 事件约定（JS->Native）：
 *  - csj:init         {appId:string, multi?:boolean, debug?:boolean}
 *  - csj:reward:load  {codeId:string, userId?:string, vertical?:boolean}
 *  - csj:reward:show  {}
 *
 * 事件约定（Native->JS）：
 *  - csj:init:ok / csj:init:fail:{code}:{msg}
 *  - csj:reward:loaded
 *  - csj:reward:cached
 *  - csj:reward:shown
 *  - csj:reward:click
 *  - csj:reward:close
 *  - csj:reward:complete
 *  - csj:reward:verify        payload: "1|amount|name"  (1=通过)
 *  - csj:reward:arrived       payload: "1|amount"
 *  - csj:reward:load_error    payload: "code:msg"
 *  - csj:reward:show_error    payload: "not_ready"
 */
public class CSJBridge {

    private static boolean sInited = false;
    private static TTRewardVideoAd sRewardAd;

    // ========= JS → Native =========
    public static void onEvent(String name, String payloadJson) {
        Activity act = CocosHelper.getActivity();
        if (act == null) {
            dispatch("csj:error", "no_activity");
            return;
        }
        JSONObject p = safeJson(payloadJson);

        try {
            switch (name) {
                case "csj:init": {
                    String appId = p.optString("appId", "");
                    boolean multi = p.optBoolean("multi", false);
                    boolean debug = p.optBoolean("debug", true);
                    doInit(act, appId, multi, debug);
                    break;
                }
                case "csj:reward:load": {
                    String codeId = p.optString("codeId", "");
                    String userId = p.optString("userId", "");
                    boolean vertical = p.optBoolean("vertical", true);
                    doLoadReward(act, codeId, userId, vertical);
                    break;
                }
                case "csj:reward:show": {
                    doShowReward(act);
                    break;
                }
                default:
                    dispatch("csj:error", "unknown_event:" + name);
                    break;
            }
        } catch (Throwable t) {
            dispatch("csj:error", "exception:" + t.getClass().getSimpleName());
        }
    }

    // ========= 初始化 =========
    private static void doInit(Activity act, String appId, boolean multiProcess, boolean debug) {
        if (sInited) { dispatch("csj:init:ok", "already"); return; }
        if (isEmpty(appId)) { dispatch("csj:init:fail", "param:appId_empty"); return; }

        TTAdConfig cfg = new TTAdConfig.Builder()
                .appId(appId)
                .appName(act.getApplicationInfo().loadLabel(act.getPackageManager()).toString())
                .supportMultiProcess(multiProcess)
                .debug(debug)
                .build();

        TTAdSdk.init(act.getApplicationContext(), cfg);

        if (multiProcess) {
            TTAdSdk.start(new TTAdSdk.Callback() {
                @Override public void success() { sInited = true; dispatch("csj:init:ok", "ok"); }
                @Override public void fail(int code, String msg) { dispatch("csj:init:fail", code + ":" + msg); }
            });
        } else {
            sInited = true;
            dispatch("csj:init:ok", "ok");
        }
    }

    // ========= 激励：加载 =========
    private static void doLoadReward(Activity act, String codeId, String userId, boolean vertical) {
        if (!sInited && !TTAdSdk.isInitSuccess()) {
            dispatch("csj:reward:load_error", "not_inited");
            return;
        }
        if (isEmpty(codeId)) {
            dispatch("csj:reward:load_error", "param:codeId_empty");
            return;
        }

        TTAdNative adNative = TTAdSdk.getAdManager().createAdNative(act);
        AdSlot slot = new AdSlot.Builder()
                .setCodeId(codeId)
                .setUserID(userId == null ? "" : userId)
                .setOrientation(vertical ? TTAdConstant.VERTICAL : TTAdConstant.HORIZONTAL)
                .build();

        adNative.loadRewardVideoAd(slot, new TTAdNative.RewardVideoAdListener() {
            @Override public void onError(int code, String msg) {
                dispatch("csj:reward:load_error", code + ":" + msg);
            }
            @Override public void onRewardVideoAdLoad(TTRewardVideoAd ad) {
                sRewardAd = ad;
                hookRewardCallbacks(ad);
                dispatch("csj:reward:loaded", "ok");
            }
            // 注意：不同版本签名不同，7.1.x 是带参；旧版是无参。
            @Override public void onRewardVideoCached(TTRewardVideoAd ad) {
                dispatch("csj:reward:cached", "ok");
            }

            @Override
            public void onRewardVideoCached() {
                Log.d("CSJUnitTest", "reward video cached" );
            }
        });
    }

    // ========= 激励：展示 =========
    private static void doShowReward(Activity act) {
        if (sRewardAd != null) {
            sRewardAd.showRewardVideoAd(act);
            sRewardAd = null; // 单次有效
        } else {
            dispatch("csj:reward:show_error", "not_ready");
        }
    }

    private static void hookRewardCallbacks(TTRewardVideoAd ad) {
        ad.setRewardAdInteractionListener(new TTRewardVideoAd.RewardAdInteractionListener() {
            @Override public void onAdShow()             { dispatch("csj:reward:shown", ""); }
            @Override public void onAdVideoBarClick()    { dispatch("csj:reward:click", ""); }
            @Override public void onAdClose()            { dispatch("csj:reward:close", ""); }
            @Override public void onVideoComplete()      { dispatch("csj:reward:complete", ""); }
            @Override public void onVideoError()         { dispatch("csj:reward:show_error", "video_error"); }
            @Override public void onSkippedVideo()         { dispatch("reward_onSkippedVideo", ""); }
            @Override public void onRewardVerify(boolean verify, int amount, String name, int ec, String emsg) {
                dispatch("csj:reward:verify", (verify ? "1" : "0") + "|" + amount + "|" + (name == null ? "" : name));
            }
            @Override public void onRewardArrived(boolean isRewardValid, int amount, Bundle extra) {
                dispatch("csj:reward:arrived", (isRewardValid ? "1" : "0") + "|" + amount);
            }
        });
    }

    // ========= 工具 =========
    private static void dispatch(final String event, final String payload) {
        android.util.Log.d("CSJBridge", event + " -> " + payload);
        CocosHelper.runOnGameThread(() ->
                JsbBridgeWrapper.getInstance().dispatchEventToScript(event, payload)
        );
    }
    private static boolean isEmpty(String s){ return s == null || s.trim().isEmpty(); }
    private static JSONObject safeJson(String json){
        try { return json == null ? new JSONObject() : new JSONObject(json); }
        catch (JSONException e) { return new JSONObject(); }
    }
}
