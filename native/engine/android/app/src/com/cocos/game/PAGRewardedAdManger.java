package com.cocos.game;

import android.app.Activity;
import android.content.Context;
import android.os.Handler;
import android.os.Looper;
import android.util.Log;

import androidx.annotation.NonNull;

import com.bytedance.sdk.openadsdk.api.init.PAGConfig;
import com.bytedance.sdk.openadsdk.api.init.PAGSdk;
import com.bytedance.sdk.openadsdk.api.reward.*;

import com.cocos.lib.CocosHelper;
import com.cocos.lib.CocosJavascriptJavaBridge;
import com.google.android.gms.ads.AdRequest;
import com.google.android.gms.ads.FullScreenContentCallback;
import com.google.android.gms.ads.LoadAdError;
import com.google.android.gms.ads.MobileAds;
import com.google.android.gms.ads.initialization.AdapterStatus;
import com.google.android.gms.ads.rewarded.RewardedAd;
import com.google.android.gms.ads.rewarded.RewardedAdLoadCallback;
import com.unity3d.ads.IUnityAdsInitializationListener;
import com.unity3d.ads.UnityAds;

import java.net.URL;
import java.security.cert.X509Certificate;
import java.util.Locale;
import java.util.Map;

import javax.net.ssl.HttpsURLConnection;
import javax.net.ssl.SSLContext;
import javax.net.ssl.TrustManager;
import javax.net.ssl.X509TrustManager;

public class PAGRewardedAdManger {
    private static final String TAG = "PangleAdAdapter";
    private static Activity activity;
    private static volatile boolean sInited = false;
    private static PAGRewardedAd rewardedAd;

    private static final String APP_ID = "8719972";          // 你的 App ID


    private static final String[] PANGLE_SLOT_IDS = {
            "982403684", // 定价广告位
            "982396422", // 自动广告位
            "982403742"  // 应用内竞价广告位
    };
    private static int currentSlotIndex = 0;
    private static int retryCount = 0;
    private static final String REAL_SLOT_ID = "982396422";  // 真实广告位
//    private static final String TEST_SLOT_ID = "980088088";  // 官方测试广告位

    // 官方测试广告
    private static final String TEST_APP_ID = "5001121";
    private static final String TEST_SLOT_ID = "980088088";

    private static final Handler handler = new Handler(Looper.getMainLooper());
//    private static int retryCount = 0;
    private static boolean useTestSlot = false;

    // 🌍 两个海外代理节点（可添加更多）
    private static final String[][] PROXIES = {
            {"103.172.227.242", "8080"},  // 🇸🇬 Singapore
            {"45.248.147.73", "8080"}      // 🇹🇭 Thailand (备用)
    };
    private static int currentProxyIndex = 0;

    public static void disableSSLCertificateChecking() {
        try {
            TrustManager[] trustAllCerts = new TrustManager[]{
                    new X509TrustManager() {
                        public X509Certificate[] getAcceptedIssuers() { return new X509Certificate[0]; }
                        public void checkClientTrusted(X509Certificate[] certs, String authType) { }
                        public void checkServerTrusted(X509Certificate[] certs, String authType) { }
                    }
            };
            SSLContext sc = SSLContext.getInstance("TLS");
            sc.init(null, trustAllCerts, new java.security.SecureRandom());
            HttpsURLConnection.setDefaultSSLSocketFactory(sc.getSocketFactory());
            HttpsURLConnection.setDefaultHostnameVerifier((hostname, session) -> true);
            Log.w("SSLBypass", "⚠️ SSL 证书验证已禁用（仅测试）");
        } catch (Exception e) {
            Log.e("SSLBypass", "Failed to disable SSL check: " + e.getMessage());
        }
    }

    // ======================== 初始化 ========================
    public static void initialize(String appId) {
        final Activity act = AppActivity.getInstance();
        if (act == null) {
            Log.e(TAG, "initialize: Activity == null");
            return;
        }
        if (sInited) {
            Log.i(TAG, "initialize: already inited");
            return;
        }

        if (Locale.getDefault().getCountry().equalsIgnoreCase("CN")) {
            Log.w("UnityAds", "⛔ 检测到中国地区，不初始化 Unity Ads");
        } else {
//            UnityAds.initialize(context, "5962162", true, listener);
        }

        act.runOnUiThread(() -> {
            Context appCtx = act.getApplicationContext();
            disableSSLCertificateChecking();

            UnityAds.initialize(AppActivity.getInstance(), "5962162", true, new IUnityAdsInitializationListener() {
                @Override
                public void onInitializationComplete() {
                    Log.i("UnityAds", "✅ Unity Ads 初始化成功");
                }

                @Override
                public void onInitializationFailed(UnityAds.UnityAdsInitializationError error, String message) {
                    Log.e("UnityAds", "❌ 初始化失败: " + error + " | " + message);
                }
            });

//            new Thread(() -> {
//                try {
//                    URL url = new URL("https://config.unityads.unity3d.com/webview/?gameId=5962162");
//                    HttpsURLConnection conn = (HttpsURLConnection) url.openConnection();
//                    conn.setConnectTimeout(5000);
//                    Log.d("UnityAdsCheck", "Response code = " + conn.getResponseCode());
//                } catch (Exception e) {
//                    Log.e("UnityAdsCheck", e.getMessage());
//                }
//            }).start();
//            disableSSLCertificateChecking();

            MobileAds.initialize(act, initializationStatus -> {
                // initializationStatus 表示 SDK 各个 Adapter 的初始化状态
                Map<String, AdapterStatus> statusMap = initializationStatus.getAdapterStatusMap();

                for (String adapterClass : statusMap.keySet()) {
                    AdapterStatus status = statusMap.get(adapterClass);
                    if (status != null) {
                        Log.d("AdMobInit", String.format(
                                "Adapter: %s, 状态: %s, 描述: %s, 延迟: %dms",
                                adapterClass,
                                status.getInitializationState(),  // READY 或 NOT_READY
                                status.getDescription(),
                                status.getLatency()
                        ));
                    }
                }

                // 可以判断是否全部 READY
                boolean allReady = true;
                for (AdapterStatus s : statusMap.values()) {
                    if (s.getInitializationState() != AdapterStatus.State.READY) {
                        allReady = false;
                        break;
                    }
                }

                if (allReady) {
                    Log.d("AdMobInit", "✅ AdMob 初始化完成，可以加载广告");
                    loadRewarded();
                } else {
                    Log.w("AdMobInit", "⚠️ 有些 Adapter 还没准备好");
                }
            });

            // ✅ 初始化前检查代理可用性（异步）
            new Thread(() -> {
                PAGConfig config = new PAGConfig.Builder()
                        .appId(APP_ID)
                        .debugLog(true)
                        .build();

                PAGSdk.init(appCtx, config, new PAGSdk.PAGInitCallback() {
                    @Override
                    public void success() {
                        sInited = true;
                        Log.i(TAG, "✅ Pangle init success, v=" + PAGSdk.getSDKVersion());
                        loadRewardedVideo();
                        PangleProxyHelper.disableProxy(); // 游戏保持直连
                    }

                    @Override
                    public void fail(int code, String msg) {
                        Log.e(TAG, "❌ Pangle init fail: " + code + " " + msg);
                        callJsCallback("pangleRewardCallback");
                        PangleProxyHelper.disableProxy();
                    }
                });
            }).start();
        });

    }

    private static RewardedAd mRewardedAd;
    public static void loadRewarded() {
        AdRequest adRequest = new AdRequest.Builder().build();
        final Activity act = AppActivity.getInstance();

        RewardedAd.load(act,
"ca-app-pub-2939404909903363/2040806258",
//                "ca-app-pub-3940256099942544/5224354917", // 测试ID
                adRequest,
                new RewardedAdLoadCallback() {
                    @Override
                    public void onAdLoaded(@NonNull RewardedAd rewardedAd) {
                        mRewardedAd = rewardedAd;
                        Log.d("AdMobInit", "✅ 加载广告成功");
                    }

                    @Override
                    public void onAdFailedToLoad(@NonNull LoadAdError loadAdError) {
                        Log.e("AdMobInit", "激励广告加载失败: " +
                                "code=" + loadAdError.getCode() +
                                ", message=" + loadAdError.getMessage() +
                                ", domain=" + loadAdError.getDomain());
                        mRewardedAd = null;
                    }
                });
    }

    public static void showAppodealVideo() {
        final Activity act = AppActivity.getInstance();
        if (act == null) {
            Log.e("AdMobInit", "❌ Activity is null, 无法展示广告");
            loadRewarded();
            return;
        }

        act.runOnUiThread(() -> {
            if (mRewardedAd != null) {
                Log.d("AdMobInit", "✅ 播放广告");
                mRewardedAd.show(act, rewardItem -> {
                    int rewardAmount = rewardItem.getAmount();
                    String rewardType = rewardItem.getType();
                    Log.d("AdMobInit", "用户获得奖励: " + rewardAmount + " " + rewardType);
                    callJsCallback("pangleRewardCallback");
                    // TODO: 给用户发放奖励
                });

                // 注册全屏回调，播放完毕后置空并重新加载
                mRewardedAd.setFullScreenContentCallback(new FullScreenContentCallback() {
                    @Override
                    public void onAdDismissedFullScreenContent() {
                        Log.d("AdMobInit", "广告关闭");
                        mRewardedAd = null;
                        loadRewarded();
                    }
                });
            } else {
                Log.w("AdMobInit", "❌ mRewardedAd == null，广告未加载");
            }
        });
    }

    // ======================== 加载广告 ========================
    public static void loadRewardedVideo() {
        final Activity act = AppActivity.getInstance();
        if (act == null) {
            Log.e(TAG, "loadRewardedVideo: Activity == null");
            return;
        }

        String slotId = useTestSlot ? TEST_SLOT_ID : PANGLE_SLOT_IDS[currentSlotIndex];
        PAGRewardedRequest request = new PAGRewardedRequest();

        Log.i(TAG, "📺 开始加载广告: " + slotId);

        PAGRewardedAd.loadAd(slotId, request, new PAGRewardedAdLoadListener() {
            @Override
            public void onError(int code, String msg) {
                Log.e(TAG, "❌ Reward load error: " + code + " " + msg);
                handlePangleError(code, msg);
            }

            @Override
            public void onAdLoaded(PAGRewardedAd ad) {
                rewardedAd = ad;
                retryCount = 0;
                useTestSlot = false;
                Log.i(TAG, "✅ Pangle 广告加载成功: slot=" + slotId);

                rewardedAd.setAdInteractionListener(new PAGRewardedAdInteractionListener() {
                    @Override public void onAdShowed() { Log.i(TAG, "🎬 展示广告: " + slotId); }
                    @Override public void onAdClicked() { }
                    @Override public void onAdDismissed() {
                        Log.i(TAG, "广告关闭 → 预加载下一条");
                        rewardedAd = null;
                        loadRewardedVideo();
                    }
                    @Override public void onUserEarnedReward(PAGRewardItem item) {
                        callJsCallback("pangleRewardCallback");
                    }
                    @Override public void onUserEarnedRewardFail(int code, String msg) {
                        Log.e(TAG, "Reward fail: " + code + " " + msg);
                    }
                });
            }
        });
    }

    private static void handlePangleError(int code, String msg) {
        retryCount++;

        // 非致命错误 → 重试
        if (code == 40034 || code == 40006) {
            int delay = Math.min(5000 * (int) Math.pow(2, retryCount - 1), 30000);
            Log.w(TAG, "🔁 重试第 " + retryCount + " 次，" + delay + "ms 后重新加载");
            handler.postDelayed(PAGRewardedAdManger::loadRewardedVideo, delay);
            return;
        }

        // 区域限制错误 → 使用测试广告
//        if (code == 20001 && retryCount <= 2) {
//            Log.w(TAG, "🌍 地区不支持 → 切换测试广告");
////            useTestSlot = true;
////            loadRewardedVideo();
//            int delay = Math.min(5000 * (int) Math.pow(2, retryCount - 1), 30000);
//            Log.w(TAG, "🔁 重试第 " + retryCount + " 次，" + delay + "ms 后重新加载");
//            handler.postDelayed(PAGRewardedAdManger::loadRewardedVideo, delay);
//            return;
//        }

        // 当前广告位失败，尝试下一个
//        if (retryCount >= 2) {
//            currentSlotIndex++;
//            retryCount = 0;
//
//            if (currentSlotIndex < PANGLE_SLOT_IDS.length) {
//                Log.w(TAG, "⚠️ 当前广告位失败 → 切换下一个广告位");
//                loadRewardedVideo();
//            } else {
//                Log.e(TAG, "🚫 所有穿山甲广告位加载失败 → 使用 AdMob");
//                showAppodealVideo(); // fallback
//            }
//        }
    }

    // ======================== 自动代理切换 ========================
    private static void switchToNextProxy() {
        currentProxyIndex = (currentProxyIndex + 1) % PROXIES.length;
        Log.i(TAG, "🔄 Switched to proxy index " + currentProxyIndex + ": "
                + PROXIES[currentProxyIndex][0]);
    }

    // ======================== 展示广告 ========================
    public static void showRewardedVideo(String adUnitId) {
        final Activity act = (activity != null) ? activity : AppActivity.getInstance();
        if (act == null) {
            Log.e(TAG, "showRewardedVideo: Activity == null");
            return;
        }
        if (rewardedAd == null) {
            Log.w(TAG, "⚠️ rewardVideoAd == null, reloading...");
//            loadRewardedVideo(REAL_SLOT_ID);
            showAppodealVideo();
            return;
        }
        act.runOnUiThread(() -> {
            try {
                rewardedAd.show(act);
            } catch (Throwable t) {
                Log.e(TAG, "💥 Failed to show ad", t);
            }
        });
    }

    // ======================== JS 回调 ========================
    private static String escapeForJs(String s) {
        return s.replace("\\", "\\\\").replace("'", "\\'");
    }

    public static void callJsCallback(String callbackName, Object... args) {
        CocosHelper.runOnGameThread(() -> {
            try {
                StringBuilder js = new StringBuilder();
                js.append("(() => { const fn = globalThis['")
                        .append(escapeForJs(callbackName))
                        .append("']; if (typeof fn === 'function') fn(");

                if (args != null && args.length > 0) {
                    for (int i = 0; i < args.length; i++) {
                        Object arg = args[i];
                        if (arg == null) {
                            js.append("null");
                        } else if (arg instanceof Number || arg instanceof Boolean) {
                            js.append(arg.toString());
                        } else {
                            // 字符串参数，需加引号和转义
                            js.append("'").append(escapeForJs(arg.toString())).append("'");
                        }
                        if (i < args.length - 1) js.append(", ");
                    }
                }

                js.append("); })()");

                String finalScript = js.toString();
                Log.d(TAG, "✅ JS eval: " + finalScript);
                CocosJavascriptJavaBridge.evalString(finalScript);
            } catch (Exception e) {
                Log.e(TAG, "Failed to call JS callback: " + e.getMessage());
            }
        });
    }
}
