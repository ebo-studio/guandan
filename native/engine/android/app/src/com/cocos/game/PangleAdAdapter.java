//package com.cocos.game;
//
//import android.app.Activity;
//import android.content.Context;
//import android.content.pm.ApplicationInfo;
//import android.content.pm.PackageManager;
//import android.os.Bundle;
//import android.util.Log;
//import android.view.ViewGroup;
//import android.widget.FrameLayout;
//
//import com.bytedance.sdk.openadsdk.AdSlot;
//import com.bytedance.sdk.openadsdk.TTAdConstant;
//import com.bytedance.sdk.openadsdk.TTAdManager;
//import com.bytedance.sdk.openadsdk.TTAdNative;
//import com.bytedance.sdk.openadsdk.TTAdSdk;
//import com.bytedance.sdk.openadsdk.TTFullScreenVideoAd;
//import com.bytedance.sdk.openadsdk.TTRewardVideoAd;
//import com.bytedance.sdk.openadsdk.TTAdConfig;
//import com.bytedance.sdk.openadsdk.api.
//import com.bytedance.sdk.openadsdk.TTNativeExpressAd;
//import com.cocos.lib.CocosHelper;
//import com.cocos.lib.CocosJavascriptJavaBridge;
//
//public class PangleAdAdapter {
//    private static Activity activity;
//    private static TTAdManager ttAdManager;
//    private static TTAdNative ttAdNative;
//
//    private static TTRewardVideoAd rewardVideoAd;
//    private static TTFullScreenVideoAd interstitialAd;
//    private static TTNativeExpressAd bannerAd;
//    private static FrameLayout bannerContainer;
//
//    private static String currentRewardAdId;
//    private static String currentInterstitialAdId;
//    private static String currentBannerAdId;
//
//    private static final String TAG = "PangleAdAdapter";
//
//    private static volatile boolean sInited = false;
//    private static TTAdManager sAdManager;
//    private static TTAdNative  sAdNative;
//
//    /** JS 反射找的就是这个签名：(Ljava/lang/String;)V */
//    public static void initialize(String appId) {
//        final Activity act = CocosHelper.getActivity();
//        if (act == null) {
//            Log.e(TAG, "initialize: Activity == null");
//            return;
//        }
//        if (sInited) {
//            Log.i(TAG, "initialize: already inited");
//            return;
//        }
//
//        // 在 UI 线程初始化 SDK
//        act.runOnUiThread(() -> {
//            Context appCtx = act.getApplicationContext();
//
//            TTAdConfig config = new TTAdConfig.Builder()
//                    .appId("5732877")                                 // ← 从 JS 传进来的
//                    .appName("金蚂蚁")                  // 用包里真实应用名
//                    .supportMultiProcess(false)
//                    .debug(isDebug(appCtx))
//                    .build();
//
//            TTAdSdk.init(appCtx, config);
//            try {
//                boolean initCalled = TTAdSdk.init(appCtx, config);
//                Log.i(TAG, "TTAdSdk.init called=" + initCalled);
//            } catch (Throwable t) {
//                Log.e(TAG, "TTAdSdk.init error", t);
//            }
//
//            TTAdSdk.start(new TTAdSdk.Callback() {
//                @Override public void success() {
//                    Log.i(TAG, "TTAdSdk.start success");
//                    sAdManager = TTAdSdk.getAdManager();
//                    sAdNative  = sAdManager.createAdNative(appCtx);
//                    // 和你现有字段对齐
//                    ttAdManager = sAdManager;
//                    ttAdNative  = sAdNative;
//                    sInited = true;
//                    // （可选）这里通知 JS：已初始化
//                    // CocosHelper.runOnGameThread(() -> safeEval("globalThis.Pangle_onInit && Pangle_onInit(true)"));
//                }
//                @Override public void fail(int code, String msg) {
//                    Log.e(TAG, "TTAdSdk.start fail: " + code + ", " + msg);
//                    // CocosHelper.runOnGameThread(() -> safeEval("globalThis.Pangle_onInit && Pangle_onInit(false)"));
//                }
//            });
//
////            TTAdSdk.init(appCtx, config, new TTAdSdk.InitCallback() {
////                @Override public void success() {
////                    Log.i(TAG, "Pangle init success");
////                    sAdManager = TTAdSdk.getAdManager();
////                    sAdNative  = sAdManager.createAdNative(appCtx);
////                    sInited = true;
////                    // 如果要通知 JS 初始化结果，可这样回调（可删）
////                    CocosHelper.runOnGameThread(() -> safeEval(
////                            "if(globalThis.Pangle&&typeof Pangle.onInit==='function'){Pangle.onInit(true)}"
////                    ));
////                }
////                @Override public void fail(int code, String msg) {
////                    Log.e(TAG, "Pangle init fail: " + code + ", " + msg);
////                    CocosHelper.runOnGameThread(() -> safeEval(
////                            "if(globalThis.Pangle&&typeof Pangle.onInit==='function'){Pangle.onInit(false)}"
////                    ));
////                }
////            });
//        });
//    }
//
//    // —— 兼容旧调用（可选）：以前如果从 JS 传了 Activity，就转到新接口 ——
//    public static void initialize(Activity ctx, String appId) { initialize(appId); }
//    public static void initialize(Activity ctx) { /* 不建议使用；避免误用 */ }
//
//    private static boolean isDebug(Context ctx) {
//        try {
//            return (ctx.getApplicationInfo().flags & ApplicationInfo.FLAG_DEBUGGABLE) != 0;
//        } catch (Exception e) { return false; }
//    }
//
//    private static String getAppName(Context ctx) {
//        try {
//            PackageManager pm = ctx.getPackageManager();
//            ApplicationInfo ai = pm.getApplicationInfo(ctx.getPackageName(), 0);
//            return pm.getApplicationLabel(ai).toString();
//        } catch (Exception e) { return "App"; }
//    }
//
//    private static void safeEval(String js) {
//        try { CocosJavascriptJavaBridge.evalString(js); } catch (Exception ignore) {}
//    }
//
////    public static void initialize(Activity ctx) {
////        activity = ctx;
////
////        TTAdConfig config = new TTAdConfig.Builder()
////                .appId("5732877")
////                .appName("金蚂蚁")
////                .supportMultiProcess(false)
//////                .useTextureView(true)
////                .debug(true)
////                .build();
////
////        TTAdSdk.init(ctx, config);
////    }
//
//    // 加载激励视频广告
//// 加载激励视频广告
//public static void loadRewardedVideo(String adUnitId) {
////    if (!sInited) {
////        Log.e(TAG, "loadRewardedVideo: SDK not initialized");
////        return;
////    }
//    if (adUnitId == null || adUnitId.length() == 0) {
//        Log.e(TAG, "loadRewardedVideo: empty adUnitId");
//        return;
//    }
//
//    currentRewardAdId = adUnitId;
//
//    final Activity act = (activity != null) ? activity : CocosHelper.getActivity();
//    if (act == null) {
//        Log.e(TAG, "loadRewardedVideo: Activity == null");
//        return;
//    }
//
//    act.runOnUiThread(() -> {
//        try {
//            // 兜底：如果还没拿到 ttAdNative，这里再取一次
//            if (ttAdNative == null) {
//                TTAdManager m = TTAdSdk.getAdManager();
//                if (m != null) {
//                    ttAdNative = m.createAdNative(act.getApplicationContext());
//                }
//            }
//            if (ttAdNative == null) {
//                Log.e(TAG, "loadRewardedVideo: ttAdNative == null (SDK not ready)");
//                return;
//            }
//
//            AdSlot adSlot = new AdSlot.Builder()
//                    .setCodeId(adUnitId)                 // ★ 广告位ID（不是 AppID）
//                    .setSupportDeepLink(true)
//                    .setAdCount(1)
//                    .setOrientation(TTAdConstant.VERTICAL)
//                    .build();
//
//            ttAdNative.loadRewardVideoAd(adSlot, new TTAdNative.RewardVideoAdListener() {
//                @Override
//                public void onError(int code, String message) {
//                    Log.e(TAG, "Reward load error: " + code + ", " + message + " (unit=" + adUnitId + ")");
//                }
//
//                @Override
//                public void onRewardVideoAdLoad(TTRewardVideoAd ad) {
//                    Log.d(TAG, "Reward video loaded: " + adUnitId);
//                    rewardVideoAd = ad;
//
//                    ad.setRewardAdInteractionListener(new TTRewardVideoAd.RewardAdInteractionListener() {
//                        @Override public void onAdShow() { Log.d(TAG, "Reward video shown"); }
//                        @Override public void onAdVideoBarClick() { Log.d(TAG, "Reward video clicked"); }
//                        @Override public void onAdClose() {
//                            Log.d(TAG, "Reward video closed");
//                            // 调用JavaScript回调
//                            callJsCallback("pangleCloseCallback");
//                        }
//                        @Override public void onVideoComplete() { Log.d(TAG, "Reward video completed"); }
//                        @Override public void onVideoError() { Log.e(TAG, "Reward video error"); }
//                        @Override public void onRewardVerify(boolean verify, int amount, String name, int ec, String emsg) {
//                            // 这里是“奖励到账（客户端校验）”
//                            if (verify) {
//                                callJsCallback("pangleRewardCallback");
//                            }
//                        }
//                        @Override public void onRewardArrived(boolean isRewardValid, int amount, Bundle extra) {
//                            Log.d(TAG, "reward_onArrived valid=" + isRewardValid + " amount=" + amount);
//                        }
//                        @Override public void onSkippedVideo() { }
//                    });
//                }
//
//                @Override public void onRewardVideoCached() {
//                    Log.d(TAG, "Reward video cached: " + adUnitId);
//                }
//                @Override public void onRewardVideoCached(TTRewardVideoAd ad) {
//                    Log.d(TAG, "Reward video cached ok: " + adUnitId);
//                }
//            });
//        } catch (Throwable t) {
//            Log.e(TAG, "loadRewardedVideo fatal (unit=" + adUnitId + ")", t);
//        }
//    });
//}
//
//    // 显示激励视频广告
//    public static void showRewardedVideo(String adUnitId) {
//        final Activity act = (activity != null) ? activity : CocosHelper.getActivity();
//        if (act == null) {
//            Log.e("PangleAdAdapter", "showRewardedVideo: Activity == null (did you call initialize()?)");
//            return;
//        }
//        if (rewardVideoAd == null) {
//            Log.e("PangleAdAdapter", "showRewardedVideo: rewardVideoAd == null (call loadRewardedVideo() first)");
//            return;
//        }
//        if (currentRewardAdId == null || !currentRewardAdId.equals(adUnitId)) {
//            Log.e("PangleAdAdapter", "showRewardedVideo: adUnitId mismatch. expected=" +
//                    currentRewardAdId + " got=" + adUnitId);
//            return;
//        }
//
//        act.runOnUiThread(new Runnable() {
//            @Override
//            public void run() {
//                try {
//                    // 兼容不同 SDK 版本
//                    try { rewardVideoAd.showRewardVideoAd(act); }
//                    catch (Throwable ignore) { rewardVideoAd.showRewardVideoAd(act); }
//                } catch (Throwable t) {
//                    Log.e("PangleAdAdapter", "showRewardedVideo fatal", t);
//                }
//            }
//        });
//    }
//
//    // 调用JavaScript回调
//    public static void callJsCallback(String callbackName) {
//        // 注意：广告 SDK 回调通常在 UI 线程，这里切到 Cocos 的 GameThread 执行 JS
//        CocosHelper.runOnGameThread(() -> {
//            try {
//                // 为了安全，先从 globalThis 取函数再判断是否可调用
//                String script =
//                        "(() => {" +
//                                "  const fn = globalThis['" + escapeForJs(callbackName) + "'];" +
//                                "  if (typeof fn === 'function') { fn(); }" +
//                                "})()";
//                CocosJavascriptJavaBridge.evalString(script);
//            } catch (Exception e) {
//                Log.e("PangleAdAdapter", "Failed to call JS callback: " + e.getMessage());
////                Log.e('PangleAdAdapter', "Failed to call JS callback: " + e.getMessage());
//            }
//        });
//    }
//
//    // 如果 callbackName 来源不完全可控，建议做下简单转义或白名单校验
//    private static String escapeForJs(String s) {
//        return s.replace("\\", "\\\\").replace("'", "\\'");
//    }
//}
