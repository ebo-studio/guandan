/****************************************************************************
Copyright (c) 2015-2016 Chukong Technologies Inc.
Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.

http://www.cocos2d-x.org

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
****************************************************************************/
package com.cocos.game;

import android.app.Activity;
import android.content.ClipData;
import android.content.ClipboardManager;
import android.content.Context;
import android.net.Uri;
import android.os.Bundle;
import android.content.Intent;
import android.content.res.Configuration;
import android.util.Log;
import android.view.WindowManager;

//import com.bytedance.sdk.openadsdk.TTAdConfig;
//import com.bytedance.sdk.openadsdk.TTAdSdk;
//import com.appodeal.ads.RewardedVideoCallbacks;
import androidx.annotation.NonNull;

import com.cocos.lib.CocosHelper;
import com.cocos.service.SDKWrapper;
import com.cocos.lib.CocosActivity;
import com.google.android.gms.ads.AdRequest;
import com.google.android.gms.ads.FullScreenContentCallback;
import com.google.android.gms.ads.LoadAdError;
import com.google.android.gms.ads.MobileAds;
import com.google.android.gms.ads.initialization.AdapterStatus;
import com.google.android.gms.ads.rewarded.RewardedAd;
import com.google.android.gms.ads.rewarded.RewardedAdLoadCallback;
//import com.appodeal.ads.Appodeal;
//import com.appodeal.ads.initializing.ApdInitializationCallback;
//import com.appodeal.ads.initializing.ApdInitializationError;

import java.util.List;
import java.util.Map;

public class AppActivity extends CocosActivity {

    private static final String APP_KEY = "0a79aed0f6a13ba4a25bcdaae33bfd844730730d8288e8c1";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        // 整个 Activity 常亮
        getWindow().addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
//        instance = this;
        RegionDebug.logRegion(getApplicationContext());

        MobileAds.initialize(this, initializationStatus -> {
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

//        int adTypes = Appodeal.REWARDED_VIDEO;
//        final Activity act = CocosHelper.getActivity();
//        Appodeal.setTesting(true);
//        Appodeal.initialize(
//                this,
//                APP_KEY,
//                adTypes,
//                new ApdInitializationCallback() {
//                    @Override
//                    public void onInitializationFinished(List<ApdInitializationError> errors) {
//                        if (errors == null || errors.isEmpty()) {
//                            // ✅ 初始化成功
//                            Log.d("Appodeal", "Appodeal SDK initialized successfully");
//                            Appodeal.cache(AppActivity.this, Appodeal.REWARDED_VIDEO);
//                        } else {
//                            // ⚠️ 初始化有问题
//                            for (ApdInitializationError error : errors) {
//                                Log.e("Appodeal", "Init error: ");
//                            }
//                        }
//                    }
//                }
//        );
//
//        Appodeal.setRewardedVideoCallbacks(new RewardedVideoCallbacks() {
//            @Override
//            public void onRewardedVideoLoaded(boolean isPrecache) {
//                Log.d("Appodeal", "Rewarded video loaded");
//            }
//
//            @Override
//            public void onRewardedVideoFailedToLoad() {
//                Log.e("Appodeal", "Rewarded video failed to load");
//            }
//
//            @Override
//            public void onRewardedVideoShowFailed() {   // ✅ 必须加这个，否则报错
//                Log.e("Appodeal", "Rewarded video show failed");
//            }
//
//            @Override
//            public void onRewardedVideoShown() {
//                Log.d("Appodeal", "Rewarded video shown");
//            }
//
//            @Override
//            public void onRewardedVideoFinished(double amount, String currency) {
//                Log.d("Appodeal", "Rewarded video finished, reward: " + amount + " " + currency);
////                runOnGLThread(() ->
////                        org.cocos2dx.lib.CocosJavascriptJavaBridge.evalString("globalThis.onRewarded('success')")
////                );
//            }
//
//            @Override
//            public void onRewardedVideoClosed(boolean finished) {
//                Log.d("Appodeal", "Rewarded video closed, finished=" + finished);
////                runOnGLThread(() ->
////                        org.cocos2dx.lib.CocosJavascriptJavaBridge.evalString("globalThis.onRewarded('closed')")
////                );
//            }
//
//            @Override
//            public void onRewardedVideoExpired() {
//                Log.w("Appodeal", "Rewarded video expired");
//            }
//
//            @Override
//            public void onRewardedVideoClicked() {
//                Log.d("Appodeal", "Rewarded video clicked");
//            }
//        });


//        PangleAdAdapter.initialize(this);
//        TTAdConfig config = new TTAdConfig.Builder()
//                .appId("5732877")
//                .appName("金蚂蚁")
//                .supportMultiProcess(false)
////                .useTextureView(true)
//                .debug(true)
//                .build();
//        TTAdSdk.init(this.getApplicationContext(), config);
//        TTAdSdk.start(new TTAdSdk.Callback() {
//            @Override
//            public void success() {
//                Log.d("CSJ", "初始化成功");
//                // 可以派发到 JS 层
//            }
//
//            @Override
//            public void fail(int code, String msg) {
//                Log.e("CSJ", "初始化失败: " + code + ", " + msg);
//            }
//        });

//        PAGC
////        PAGC
//        PAGConfig config = new PAGConfig.Builder()
//                .appId("8701814")      // 必填
//                .debugLog(true)                 // 调试期间建议开
//                // .setPAConsent(PAGConstant.PAGPAConsentType.PAG_CONSENT_ACCEPT) // 如需
//                // .setGDPRConsent(1)  // 欧盟合规示例：1 允许 / 0 拒绝
//                .build();
//
//        PAGSdk.init(this, config, new PAGSdk.PAGInitCallback() {
//            @Override public void success() { /* 可以开始加载广告 */ }
//            @Override public void fail(int code, String msg) { /* 打印日志 */ }
//        });


        // DO OTHER INITIALIZATION BELOW
        SDKWrapper.shared().init(this);

//        com.cocos.game.AdManager.get().setup(this);

    }

    private static RewardedAd mRewardedAd;
    public static void loadRewarded() {
        AdRequest adRequest = new AdRequest.Builder().build();
        final Activity act = CocosHelper.getActivity();

        RewardedAd.load(act,
                "ca-app-pub-3940256099942544/5224354917", // 测试ID
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
        final Activity act = CocosHelper.getActivity();
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

    public static void copyToClipboard(final String text) {
        AppActivity app = getInstance();
        if (app == null) {
            Log.e("CopyText", "Activity 未初始化");
            return;
        }

        app.runOnUiThread(() -> {
            try {
                ClipboardManager clipboard = (ClipboardManager) app.getSystemService(Context.CLIPBOARD_SERVICE);
                ClipData clip = ClipData.newPlainText("label", text);
                clipboard.setPrimaryClip(clip);
                Log.i("CopyText", "复制成功: " + text);
            } catch (Exception e) {
                Log.e("CopyText", "复制失败: " + e.getMessage());
            }
        });
    }

    public static AppActivity getInstance() {
        return instance;
    }


    public static void openURL(final String url) {
        // 通过 runOnUiThread 确保在主线程执行
        AppActivity app = AppActivity.getInstance(); // 替代 getAppContext()
        if (app == null) {
            Log.e("AppActivity", "Activity is null, cannot open URL");
            return;
        }

        app.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                try {
                    Intent intent = new Intent(Intent.ACTION_VIEW, Uri.parse(url));
                    app.startActivity(intent);
                } catch (Exception e) {
                    Log.e("AppActivity", "打开链接失败: " + e.getMessage());
                }
            }
        });
    }

    private static AppActivity instance;


    @Override
    protected void onResume() {
        super.onResume();
        SDKWrapper.shared().onResume();
    }

    @Override
    protected void onPause() {
        super.onPause();
        SDKWrapper.shared().onPause();
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        // Workaround in https://stackoverflow.com/questions/16283079/re-launch-of-activity-on-home-button-but-only-the-first-time/16447508
        if (!isTaskRoot()) {
            return;
        }
        SDKWrapper.shared().onDestroy();
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        SDKWrapper.shared().onActivityResult(requestCode, resultCode, data);
    }

    @Override
    protected void onNewIntent(Intent intent) {
        super.onNewIntent(intent);
        SDKWrapper.shared().onNewIntent(intent);
    }

    @Override
    protected void onRestart() {
        super.onRestart();
        SDKWrapper.shared().onRestart();
    }

    @Override
    protected void onStop() {
        super.onStop();
        SDKWrapper.shared().onStop();
    }

    @Override
    public void onBackPressed() {
        SDKWrapper.shared().onBackPressed();
        super.onBackPressed();
    }

    @Override
    public void onConfigurationChanged(Configuration newConfig) {
        SDKWrapper.shared().onConfigurationChanged(newConfig);
        super.onConfigurationChanged(newConfig);
    }

    @Override
    protected void onRestoreInstanceState(Bundle savedInstanceState) {
        SDKWrapper.shared().onRestoreInstanceState(savedInstanceState);
        super.onRestoreInstanceState(savedInstanceState);
    }

    @Override
    protected void onSaveInstanceState(Bundle outState) {
        SDKWrapper.shared().onSaveInstanceState(outState);
        super.onSaveInstanceState(outState);
    }

    @Override
    protected void onStart() {
        SDKWrapper.shared().onStart();
        super.onStart();
    }

//    @Override
    public void onADTick(Long millisUntilFinished) {

    }

//    @Override
    public void onADLoaded(Long expireTimestamp) {

    }

    @Override
    public void onLowMemory() {
        SDKWrapper.shared().onLowMemory();
        super.onLowMemory();
    }
}
