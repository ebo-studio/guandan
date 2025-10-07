package com.cocos.game;

import android.app.Activity;
import android.content.Context;
import android.util.Log;

//import com.appodeal.ads.Appodeal;
//import com.appodeal.ads.initializing.ApdInitializationCallback;
//import com.appodeal.ads.initializing.ApdInitializationError;
import com.bytedance.sdk.openadsdk.api.init.PAGConfig;
import com.bytedance.sdk.openadsdk.api.init.PAGSdk;
import com.bytedance.sdk.openadsdk.api.reward.PAGRewardItem;
import com.bytedance.sdk.openadsdk.api.reward.PAGRewardedAd;
import com.bytedance.sdk.openadsdk.api.reward.PAGRewardedAdInteractionListener;
import com.bytedance.sdk.openadsdk.api.reward.PAGRewardedAdLoadListener;
import com.bytedance.sdk.openadsdk.api.reward.PAGRewardedRequest;
import com.cocos.lib.CocosHelper;
import com.cocos.lib.CocosJavascriptJavaBridge;

import java.util.List;

public class PAGRewardedAdManger {
    private static Activity activity;
    private static final String TAG = "PangleAdAdapter";
    private static volatile boolean sInited = false;
    private static PAGRewardedAd rewardedAd;
    private static final String APP_KEY = "0a79aed0f6a13ba4a25bcdaae33bfd844730730d8288e8c1";

    public static void initialize(String appId) {
        final Activity act = CocosHelper.getActivity();
        if (act == null) {
            Log.e(TAG, "initialize: Activity == null");
            return;
        }
        if (sInited) {
            Log.i(TAG, "initialize: already inited");
            return;
        }

        // 在 UI 线程初始化 SDK
        act.runOnUiThread(() -> {
            Context appCtx = act.getApplicationContext();
            PAGConfig config = new PAGConfig.Builder()
                .appId("8719972")
                .debugLog(true)                  // 调试阶段可开日志，上线请关
                // .setGDPRConsent(0/1)           // GDPR 同意状态（需要时设置）
                // .setPAConsent(0/1)             // 个性化广告同意（7.1.0.4+）
                // .setDoNotSell(0/1)             // CCPA（旧接口在 7.1+ 有调整）
                .build();

        PAGSdk.init(act.getApplicationContext(), config, new PAGSdk.PAGInitCallback() {
            @Override public void success() {
                Log.i(TAG, "Pangle init success, v=" + PAGSdk.getSDKVersion());
                loadRewardedVideo("982396422");
                // 已初始化，可以请求广告或拿 bidding token（建议放后台线程）
            }
            @Override public void fail(int code, String msg) {
                callJsCallback("pangleRewardCallback");
                // 记录初始化失败原因
            }
        });


//            TTAdSdk.init(appCtx, config, new TTAdSdk.InitCallback() {
//                @Override public void success() {
//                    Log.i(TAG, "Pangle init success");
//                    sAdManager = TTAdSdk.getAdManager();
//                    sAdNative  = sAdManager.createAdNative(appCtx);
//                    sInited = true;
//                    // 如果要通知 JS 初始化结果，可这样回调（可删）
//                    CocosHelper.runOnGameThread(() -> safeEval(
//                            "if(globalThis.Pangle&&typeof Pangle.onInit==='function'){Pangle.onInit(true)}"
//                    ));
//                }
//                @Override public void fail(int code, String msg) {
//                    Log.e(TAG, "Pangle init fail: " + code + ", " + msg);
//                    CocosHelper.runOnGameThread(() -> safeEval(
//                            "if(globalThis.Pangle&&typeof Pangle.onInit==='function'){Pangle.onInit(false)}"
//                    ));
//                }
//            });
        });
    }

//    public static void initialize(String appId) {
//        final Activity act = CocosHelper.getActivity();
//        PAGConfig config = new PAGConfig.Builder()
//                .appId("8701814")
//                .debugLog(true)                  // 调试阶段可开日志，上线请关
//                // .setGDPRConsent(0/1)           // GDPR 同意状态（需要时设置）
//                // .setPAConsent(0/1)             // 个性化广告同意（7.1.0.4+）
//                // .setDoNotSell(0/1)             // CCPA（旧接口在 7.1+ 有调整）
//                .build();
//
//        PAGSdk.init(act.getApplicationContext(), config, new PAGSdk.PAGInitCallback() {
//            @Override public void success() {
//                Log.i(TAG, "Pangle init success, v=" + PAGSdk.getSDKVersion());
//                loadRewardedVideo("982283193");
//                // 已初始化，可以请求广告或拿 bidding token（建议放后台线程）
//            }
//            @Override public void fail(int code, String msg) {
//                // 记录初始化失败原因
//            }
//        });
//    }
//
    private static String escapeForJs(String s) {
        return s.replace("\\", "\\\\").replace("'", "\\'");
    }

    public static void loadRewardedVideo(String adUnitId) {
        PAGRewardedRequest request = new PAGRewardedRequest();
        PAGRewardedAd.loadAd(adUnitId, request, new PAGRewardedAdLoadListener() {
            @Override public void onError(int code, String msg) {
                Log.e(TAG, "Reward load error. code="+code+" msg="+msg);
            }

            @Override public void onAdLoaded(PAGRewardedAd ad) {
                rewardedAd = ad;

                rewardedAd.setAdInteractionListener(new PAGRewardedAdInteractionListener() {
                    @Override public void onAdShowed()    { }
                    @Override public void onAdClicked()   { }
                    @Override public void onAdDismissed() {
                        Log.d("PangleAdAdapter", "广告关闭");
                        // ⚡ 播放结束后清空，准备下次 load
                        rewardedAd = null;
                        loadRewardedVideo(adUnitId); // 自动预加载下一条
                    }
                    @Override public void onUserEarnedReward(PAGRewardItem item) {
                        callJsCallback("pangleRewardCallback");
//                        String payload = (item==null) ? "null" :
//                                "{\"name\":\""+safe(item.getRewardName())+"\",\"amount\":"+item.getRewardAmount()+"}";
////                        sendToScript("reward_earned", payload);
                    }
                    @Override public void onUserEarnedRewardFail(int code, String msg) {
                        // 奖励失败（可记录）
                    }
                });

//                sendToScript("reward_loaded", null);
                Log.i(TAG, "Reward loaded OK for slot=" + adUnitId);

                // 若之前有人请求 show，则在加载成功后尝试展示
            }
        });
    }

    public static void showRewardedVideo(String adUnitId) {
        final Activity act = (activity != null) ? activity : CocosHelper.getActivity();
        if (act == null) {
            Log.e("PangleAdAdapter", "showRewardedVideo: Activity == null (did you call initialize()?)");
            return;
        }
        if (rewardedAd == null) {
            Log.e("PangleAdAdapter", "showRewardedVideo: rewardVideoAd == null (call loadRewardedVideo() first)");
            loadRewardedVideo("982396422");
            return;
        }
//
        act.runOnUiThread(new Runnable() {
//            @Override
            public void run() {
                try {
                    // 兼容不同 SDK 版本
                    try { rewardedAd.show(act); }
                    catch (Throwable ignore) { rewardedAd.show(act); }
                } catch (Throwable t) {
                    Log.e("PangleAdAdapter", "showRewardedVideo fatal", t);
                }
            }
        });
    }

    private static String safe(String s) {
        if (s == null) return "";
        return s.replace("\\", "\\\\").replace("\"", "\\\"");
    }

    public static void callJsCallback(String callbackName) {
        // 注意：广告 SDK 回调通常在 UI 线程，这里切到 Cocos 的 GameThread 执行 JS
        CocosHelper.runOnGameThread(() -> {
            try {
                // 为了安全，先从 globalThis 取函数再判断是否可调用
                String script =
                        "(() => {" +
                                "  const fn = globalThis['" + escapeForJs(callbackName) + "'];" +
                                "  if (typeof fn === 'function') { fn(); }" +
                                "})()";
                CocosJavascriptJavaBridge.evalString(script);
            } catch (Exception e) {
                Log.e("PangleAdAdapter", "Failed to call JS callback: " + e.getMessage());
//                Log.e('PangleAdAdapter', "Failed to call JS callback: " + e.getMessage());
            }
        });
    }

}
