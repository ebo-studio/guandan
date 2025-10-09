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

import java.util.Map;

public class PAGRewardedAdManger {
    private static final String TAG = "PangleAdAdapter";
    private static Activity activity;
    private static volatile boolean sInited = false;
    private static PAGRewardedAd rewardedAd;

    private static final String APP_ID = "8719972";          // 你的 App ID
    private static final String REAL_SLOT_ID = "982396422";  // 真实广告位
//    private static final String TEST_SLOT_ID = "980088088";  // 官方测试广告位

    // 官方测试广告
    private static final String TEST_APP_ID = "5001121";
    private static final String TEST_SLOT_ID = "980088088";

    private static final Handler handler = new Handler(Looper.getMainLooper());
    private static int retryCount = 0;
    private static boolean useTestSlot = false;

    // 🌍 两个海外代理节点（可添加更多）
    private static final String[][] PROXIES = {
            {"103.172.227.242", "8080"},  // 🇸🇬 Singapore
            {"45.248.147.73", "8080"}      // 🇹🇭 Thailand (备用)
    };
    private static int currentProxyIndex = 0;

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

        act.runOnUiThread(() -> {
            Context appCtx = act.getApplicationContext();

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
//                if (!PangleProxyHelper.isProxyReachable(PROXIES[currentProxyIndex][0],
//                        Integer.parseInt(PROXIES[currentProxyIndex][1]))) {
//                    Log.w(TAG, "🚫 Proxy not reachable, switching to next...");
//                    switchToNextProxy();
//                }

                // ✅ 启用当前可用代理
//                String host = PROXIES[currentProxyIndex][0];
//                int port = Integer.parseInt(PROXIES[currentProxyIndex][1]);
//                PangleProxyHelper.enableProxy(host, port, "", "");

                // 初始化 SDK
//                PAGSdk.setTestMode(true);  // ✅ 必须在 init() 之前调用！
                PAGConfig config = new PAGConfig.Builder()
                        .appId(APP_ID)
                        .debugLog(true)
                        .build();

                PAGSdk.init(appCtx, config, new PAGSdk.PAGInitCallback() {
                    @Override
                    public void success() {
                        sInited = true;
                        Log.i(TAG, "✅ Pangle init success, v=" + PAGSdk.getSDKVersion());
                        loadRewardedVideo(REAL_SLOT_ID);
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
    public static void loadRewardedVideo(String adUnitId) {
        final Activity act = AppActivity.getInstance();
        PAGRewardedRequest request = new PAGRewardedRequest();

        PAGRewardedAd.loadAd(adUnitId, request, new PAGRewardedAdLoadListener() {
            @Override
            public void onError(int code, String msg) {
                Log.e(TAG, "Reward load error. code=" + code + " msg=" + msg);
//                handleError(act, code, msg);
            }

            @Override
            public void onAdLoaded(PAGRewardedAd ad) {
                rewardedAd = ad;
                retryCount = 0;
                useTestSlot = false;
                Log.i(TAG, "🎉 Reward loaded OK for slot=" + adUnitId);

                rewardedAd.setAdInteractionListener(new PAGRewardedAdInteractionListener() {
                    @Override public void onAdShowed() { }
                    @Override public void onAdClicked() { }
                    @Override public void onAdDismissed() {
                        Log.d(TAG, "广告关闭 → 自动预加载下一条");
                        rewardedAd = null;
                        loadRewardedVideo(REAL_SLOT_ID);
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

    // ======================== 错误处理逻辑 ========================
    private static void handleError(Activity act, int code, String msg) {
        if (code == 20001) {
//            callJsCallback("pangleRewardErrorCallback", code, msg);
//            Log.w(TAG, "🌏 Region not supported → switching to test slot");
//            PAGConfig config = new PAGConfig.Builder()
//                    .appId(TEST_APP_ID)
//                    .debugLog(true)
//                    .build();
//
//            PAGSdk.init(act, config, new PAGSdk.PAGInitCallback() {
//                @Override
//                public void success() {
//                    Log.i(TAG, "✅ [REAL MODE] Pangle init success, version=" + PAGSdk.getSDKVersion());
//                    loadRewardedVideo(TEST_SLOT_ID);
//                }
//
//                @Override
//                public void fail(int code, String msg) {
//                    Log.e(TAG, "❌ [REAL MODE] Pangle init failed: " + code + " " + msg);
//                }
//            });
//            return;
        }
        // ✅ 检测地区限制错误
//        if (code == 20001 && msg.toLowerCase().contains("region")) {
//            Log.w(TAG, "🌏 Region not supported, enabling proxy retry...");
//            switchToNextProxy(); // 切换代理节点
//            String host = PROXIES[currentProxyIndex][0];
//            int port = Integer.parseInt(PROXIES[currentProxyIndex][1]);
//            PangleProxyHelper.enableProxy(host, port, "", "");
//            handler.postDelayed(() -> {
//                loadRewardedVideo(REAL_SLOT_ID);
//                PangleProxyHelper.disableProxy();
//            }, 3000);
//            return;
//        }

        // ✅ 可重试错误
        if (code == 20001 || code == 40034 || code == 40006) {
            retryCount++;
            int delay = Math.min(5000 * (int) Math.pow(2, retryCount - 1), 30000);
            Log.i(TAG, "🔁 Scheduling retry in " + delay + "ms (attempt " + retryCount + ")");

            handler.postDelayed(() -> {
                if (retryCount >= 3 && !useTestSlot) {
                    Log.w(TAG, "🚨 Too many retries, switching to TEST slot");
                    useTestSlot = true;
//                    loadRewardedVideo(TEST_SLOT_ID);
                } else {
                    loadRewardedVideo(useTestSlot ? TEST_SLOT_ID : REAL_SLOT_ID);
                }
            }, delay);
        } else {
            Log.e(TAG, "❌ Non-retriable error: " + code + " " + msg);
        }
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
