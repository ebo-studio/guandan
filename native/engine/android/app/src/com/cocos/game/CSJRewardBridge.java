package com.cocos.game;

import android.app.Activity;
import android.os.Bundle;
import android.util.Log;

import com.bytedance.sdk.openadsdk.AdSlot;
import com.bytedance.sdk.openadsdk.TTAdConstant;
import com.bytedance.sdk.openadsdk.TTAdNative;
import com.bytedance.sdk.openadsdk.TTAdSdk;
import com.bytedance.sdk.openadsdk.TTRewardVideoAd;

import com.cocos.lib.CocosHelper;
import com.cocos.lib.JsbBridgeWrapper;

public class CSJRewardBridge {
    private static TTRewardVideoAd sRewardAd;

    // 加载激励视频
    public static void load(final Activity act, final String codeId, final String userId, final boolean vertical) {
        TTAdNative adNative = TTAdSdk.getAdManager().createAdNative(act);
        AdSlot slot = new AdSlot.Builder()
                .setCodeId(codeId)
                .setUserID(userId == null ? "" : userId)
                .setOrientation(vertical ? TTAdConstant.VERTICAL : TTAdConstant.HORIZONTAL)
                .build();

        adNative.loadRewardVideoAd(slot, new TTAdNative.RewardVideoAdListener() {
            @Override
            public void onError(int code, String msg) {
                dispatch("reward_onLoadError", code + ":" + msg);
            }

            @Override
            public void onRewardVideoAdLoad(TTRewardVideoAd ad) {
                sRewardAd = ad;
                hookRewardCallbacks(ad);
                dispatch("reward_onLoaded", "ok");
            }

            @Override
            public void onRewardVideoCached() {
                Log.d("CSJUnitTest", "reward video cached" );
            }

            // ⚠️ 7.1.0.5 要实现这个签名
            @Override
            public void onRewardVideoCached(TTRewardVideoAd ad) {
                dispatch("reward_onCached", "ok");
            }
        });
    }

    // 展示激励视频
    public static void show(final Activity act) {
        if (sRewardAd != null) {
            sRewardAd.showRewardVideoAd(act);
            sRewardAd = null; // 用完置空，避免重复 show
        } else {
            dispatch("reward_onShowFailed", "not_ready");
        }
    }

    private static void hookRewardCallbacks(TTRewardVideoAd ad) {
        ad.setRewardAdInteractionListener(new TTRewardVideoAd.RewardAdInteractionListener() {
            @Override public void onAdShow()             { dispatch("reward_onShown", ""); }
            @Override public void onAdVideoBarClick()    { dispatch("reward_onClick", ""); }
            @Override public void onAdClose()            { dispatch("reward_onClose", ""); }
            @Override public void onVideoComplete()      { dispatch("reward_onComplete", ""); }
            @Override public void onVideoError()         { dispatch("reward_onVideoError", ""); }
            @Override public void onSkippedVideo()         { dispatch("reward_onVideoError", ""); }
            @Override public void onRewardVerify(boolean verify, int amount, String name, int ec, String emsg) {
                // 客户端奖励回调（也可走服务端 S2S）
                dispatch("reward_onVerify", (verify ? "1" : "0") + "|" + amount + "|" + (name == null ? "" : name));
            }
            @Override public void onRewardArrived(boolean isRewardValid, int amount, Bundle extra) {
                // 有的版本会回调到这里
                dispatch("reward_onArrived", (isRewardValid ? "1" : "0") + "|" + amount);
            }
        });
    }

    private static void dispatch(final String event, final String payload) {
        CocosHelper.runOnGameThread(() ->
                JsbBridgeWrapper.getInstance().dispatchEventToScript(event, payload)
        );
    }
}
