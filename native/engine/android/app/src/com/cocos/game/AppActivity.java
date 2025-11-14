/****************************************************************************
 Copyright ...
 ****************************************************************************/
package com.cocos.game;

import android.Manifest;
import android.app.Activity;
import android.app.DownloadManager;
import android.content.ClipData;
import android.content.ClipboardManager;
import android.content.Context;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.content.res.Resources;
import android.database.Cursor;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.content.Intent;
import android.content.res.Configuration;
import android.os.Environment;
import android.os.Handler;
import android.os.Looper;
import android.telephony.TelephonyManager;
import android.util.Log;
import android.view.WindowManager;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.core.content.FileProvider;

//import com.alibaba.fastjson.JSON;
//import com.alibaba.fastjson.JSONObject;
import com.alipay.face.api.ZIMCallback;
import com.alipay.face.api.ZIMFacade;
import com.alipay.face.api.ZIMFacadeBuilder;
import com.alipay.face.api.ZIMResponse;
import com.alipay.face.api.ZIMFacade;
import com.bytedance.sdk.openadsdk.AdSlot;
import com.bytedance.sdk.openadsdk.TTAdConfig;
import com.bytedance.sdk.openadsdk.TTAdConstant;
import com.bytedance.sdk.openadsdk.TTAdNative;
import com.bytedance.sdk.openadsdk.TTAdSdk;
import com.bytedance.sdk.openadsdk.TTFullScreenVideoAd;
import com.bytedance.sdk.openadsdk.TTRewardVideoAd;
import com.cocos.lib.CocosActivity;
import com.cocos.lib.CocosHelper;
import com.cocos.lib.CocosJavascriptJavaBridge;
import com.cocos.service.SDKWrapper;

import com.google.android.gms.ads.AdRequest;
import com.google.android.gms.ads.FullScreenContentCallback;
import com.google.android.gms.ads.LoadAdError;
import com.google.android.gms.ads.rewarded.RewardedAd;
import com.google.android.gms.ads.rewarded.RewardedAdLoadCallback;
import com.kwad.sdk.api.KsAdSDK;
import com.kwad.sdk.api.KsInitCallback;
import com.kwad.sdk.api.KsInterstitialAd;
import com.kwad.sdk.api.KsLoadManager;
import com.kwad.sdk.api.KsRewardVideoAd;
import com.kwad.sdk.api.KsScene;
import com.kwad.sdk.api.SdkConfig;
import com.qq.e.ads.interstitial2.UnifiedInterstitialAD;
import com.qq.e.ads.interstitial2.UnifiedInterstitialADListener;
import com.qq.e.ads.rewardvideo.RewardVideoAD;
import com.qq.e.ads.rewardvideo.RewardVideoADListener;
import com.qq.e.ads.rewardvideo.ServerSideVerificationOptions;
import com.qq.e.comm.managers.GDTAdSdk;
import com.qq.e.comm.managers.setting.GlobalSetting;
import com.qq.e.comm.util.AdError;
//import com.bytedance.sdk.openadsdk.tt

import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.File;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

public class AppActivity extends CocosActivity {

    private static final String TAG = "ZIM";
    private static final String SKD_TAG = "KSSDK";
    private static AppActivity instance;
    private static RewardedAd mRewardedAd;

    private static KsRewardVideoAd mKsRewardVideoAd;
    private KsInterstitialAd mKsInterstitialAd;
    private long interstitialPosId = 29730000005L; // ← 你自己的插屏广告ID（long）

//    private static final String TAG = "Updater";

    private static long downloadId = -1;
    private static boolean isChecking = false;
    private static boolean isGameActive = true;
    private static final Handler handler = new Handler(Looper.getMainLooper());
    private static File lastDownloadedApk = null;

    private RewardVideoAD gdtRewardVideoAD;
    private String gdtRewardPosId = "8203029168845782";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        instance = this;

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            if (checkSelfPermission(Manifest.permission.READ_PHONE_STATE)
                    != PackageManager.PERMISSION_GRANTED) {
                requestPermissions(new String[]{Manifest.permission.READ_PHONE_STATE}, 1001);
            }
        }

//        Locale locale = new Locale("en", "US");
//        Locale.setDefault(locale);
//        Configuration config = this.getResources().getConfiguration();
//        config.setLocale(locale);
//        this.getResources().updateConfiguration(config, this.getResources().getDisplayMetrics());
        TelephonyManager tm = (TelephonyManager)getSystemService(Context.TELEPHONY_SERVICE);
        Log.d("UnityAds", "Network Country ISO = " + tm.getNetworkCountryIso());
        Log.d("UnityAds", "SIM Country ISO = " + tm.getSimCountryIso());
        Log.d("UnityAds", "Locale = " + Locale.getDefault().getCountry());


        // 保持屏幕常亮
        getWindow().addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);

        Log.d(TAG, "AppActivity created, instance registered");

        // 初始化 SDKWrapper（必要）
        SDKWrapper.shared().init(this);
        ZIMFacade.install(this);

        initKSSDK(this);

        KsAdSDK.start();

        initGDT();

        initTTAdSkd(this);

        // 初始化广告
//        loadRewarded();
    }

    //快手视频相关
    public static void initKSSDK(Context appContext) {
        KsAdSDK.init(appContext, new SdkConfig.Builder()
                .appId("2973000001")
                .showNotification(true)
                .debug(true)
                .setInitCallback(new KsInitCallback() {
                    @Override
                    public void onSuccess() {
                        Log.i(SKD_TAG, "init success time: " + (System.currentTimeMillis()));
                    }

                    @Override
                    public void onFail(int code, String msg) {
                        Log.i(SKD_TAG, "init fail code:" + code + "--msg:" + msg);
                    }
                }).setStartCallback(new KsInitCallback() {
                    @Override
                    public void onSuccess() {
                        Log.i(SKD_TAG, "start success");
//                        ToastUtil.showToast(appContext, "SDK启动成功");
                    }

                    @Override
                    public void onFail(int code, String msg) {
                        Log.i(SKD_TAG, "start fail msg: " + msg);
//                        ToastUtil.showToast(appContext, "SDK启动失败：" + msg);
                    }
                })
                .build()
        );
    }

    public static void setKsRewardVideoId(String id) {
        try {
            long parsedId = Long.parseLong(id);
            if (instance != null) {
                instance.ksRewardVideoId = parsedId;
                Log.d(SKD_TAG, "【收到 TS 激励视频广告ID】" + parsedId);
            }
        } catch (Exception e) {
            Log.e(SKD_TAG, "激励视频广告ID解析失败: " + id);
        }
    }

    // 广告位 ID
    private long ksRewardVideoId  = 0L;

    // JSB 入口，让 Cocos 调用
    public static void showKsRewardVideo() {
        if (instance != null) {
            instance.loadAndShowRewardAd();
        }
    }

    private String ksUserId = "0";   // 默认值
    public static void setKsUserId(String uid) {
        if (instance != null) {
            instance.ksUserId = uid;
            Log.d(SKD_TAG, "【收到 Cocos UID】" + uid);
        }
    }

    // 加载 + 显示激励视频
    private void loadAndShowRewardAd() {
        long posIdToUse = 29730000007L; // fallback
        KsScene.Builder builder = new KsScene.Builder(posIdToUse);
        KsScene scene = builder.build();
        Log.d(SKD_TAG, "【KS】【加载开始】广告位ID = " + posIdToUse);
        // ====== 服务端回调参数 ======
        if (ksUserId != null && !ksUserId.isEmpty() && !ksUserId.equals("0")) {
            Map<String, String> rewardCallbackExtraData = new HashMap<>();
            rewardCallbackExtraData.put("thirdUserId", ksUserId);
            builder.rewardCallbackExtraData(rewardCallbackExtraData);

            Log.d(SKD_TAG, "已写入 thirdUserId=" + ksUserId);
        } else {
            Log.d(SKD_TAG, "未设置 UID → 不写入 rewardCallbackExtraData");
        }

        KsAdSDK.getLoadManager().loadRewardVideoAd(scene, new KsLoadManager.RewardVideoAdListener() {
            @Override
            public void onError(int code, String msg) {
                Log.e(SKD_TAG, "激励视频广告请求失败: " + code + ", msg=" + msg);
                callJsCallback("onKsRewardFail");
            }

            @Override
            public void onRewardVideoResult(@Nullable List<KsRewardVideoAd> adList) {
//                Log.d(SKD_TAG, "激励视频数据请求成功（不含资源）");
            }

            @Override
            public void onRewardVideoAdLoad(@Nullable List<KsRewardVideoAd> adList) {
                if (adList != null && !adList.isEmpty()) {
                    mKsRewardVideoAd = adList.get(0);
//                    Log.d(SKD_TAG, "激励视频资源已缓存");

                    setupRewardVideoListener();
                    showRewardVideoAd();
                }
            }
        });
    }

    // 播放激励视频
    private void showRewardVideoAd() {
        if (mKsRewardVideoAd != null) {
            mKsRewardVideoAd.showRewardVideoAd(AppActivity.this, null);
        } else {
            Log.w(SKD_TAG, "广告未缓存，重新加载");
            loadAndShowRewardAd();
        }
    }

    // 设置激励视频监听器（你 SDK 的完整版本）
    private void setupRewardVideoListener() {

        mKsRewardVideoAd.setRewardAdInteractionListener(new KsRewardVideoAd.RewardAdInteractionListener() {

            @Override
            public void onAdClicked() {

                Log.d(SKD_TAG, "激励视频点击");
            }

            @Override
            public void onPageDismiss() {

                Log.d(SKD_TAG, "激励视频关闭");
//                callJsCallback("onAdClose");
            }

            @Override
            public void onVideoPlayError(int code, int extra) {
                callJsCallback("onAdClose");
                Log.e(SKD_TAG, "激励视频播放错误 code=" + code + ", extra=" + extra);
            }

            @Override
            public void onVideoPlayStart() {
                Log.d(SKD_TAG, "激励视频播放开始");
            }

            @Override
            public void onVideoPlayEnd() {
                Log.d(SKD_TAG, "激励视频播放结束");
            }

            // ========================== 主奖励 ==========================
            // 新版：Map 参数奖励回调
            @Override
            public void onRewardVerify(Map<String, Object> rewardInfo) {
                Log.d(SKD_TAG, "激励视频奖励（Map）回调: " + rewardInfo);
                callJsCallback("onKsRewarded");
            }

            // 老版：无参奖励回调
            @Override
            public void onRewardVerify() {
                Log.d(SKD_TAG, "激励视频完整观看，触发主奖励");
                callJsCallback("onKsRewarded");

//                AppActivity.this.runOnGLThread(() -> {
//                    CocosJavascriptBridge.evalString("window.onKsRewarded && window.onKsRewarded()");
//                });
            }

            // ========================== 阶段奖励 ==========================
            @Override
            public void onRewardStepVerify(int taskType, int currentTaskStatus) {
                Log.d(SKD_TAG, "阶段奖励: taskType=" + taskType + ", status=" + currentTaskStatus);
            }

            // ========================== 额外奖励 ==========================
            @Override
            public void onExtraRewardVerify(int type) {
                Log.d(SKD_TAG, "额外奖励触发 type=" + type);

//                AppActivity.this.runOnGLThread(() -> {
//                    CocosJavascriptBridge.evalString(
//                            "window.onKsExtraReward && window.onKsExtraReward(" + type + ")"
//                    );
//                });
            }

            // ========================== 跳过时长 ==========================
            @Override
            public void onVideoSkipToEnd(long playTime) {
                Log.w(SKD_TAG, "用户滑动跳过到结尾 playTime=" + playTime);
            }
        });
    }

    public static void showKsInterstitial() {
        if (instance != null) {
            instance.loadAndShowInterstitial();
        }
    }

    private void loadAndShowInterstitial() {
        KsScene scene = new KsScene.Builder(interstitialPosId).build();

        KsAdSDK.getLoadManager().loadInterstitialAd(scene, new KsLoadManager.InterstitialAdListener() {

            @Override
            public void onError(int code, String msg) {
                Log.e(SKD_TAG, "插屏广告加载失败: " + code + ", " + msg);
                callJsCallback("onKsInterstitialFail");

                // 如果你需要 TS 端失败回调，可以这样：
//                AppActivity.this.runOnGLThread(() -> {
//                    CocosJavascriptBridge.evalString(
//                            "window.onKsInterstitialFail && window.onKsInterstitialFail('" + msg + "')"
//                    );
//                });
            }

            @Override
            public void onRequestResult(int requestResult) {
                Log.d(SKD_TAG, "插屏广告数据请求成功（不含资源）");
            }

            @Override
            public void onInterstitialAdLoad(@Nullable List<KsInterstitialAd> adList) {
                if (adList != null && !adList.isEmpty()) {
                    mKsInterstitialAd = adList.get(0);
                    Log.d(SKD_TAG, "插屏广告缓存成功");

                    setupInterstitialListener();
                    showInterstitialAd();
                }
            }
        });
    }

    private void setupInterstitialListener() {

        mKsInterstitialAd.setAdInteractionListener(new KsInterstitialAd.AdInteractionListener() {
            @Override
            public void onAdClicked() {
                Log.d(SKD_TAG, "插屏广告点击");
            }

            @Override
            public void onAdShow() {
                Log.d(SKD_TAG, "插屏广告展示");
            }

            @Override
            public void onAdClosed() {
                Log.d(SKD_TAG, "插屏广告关闭");
            }

//            @Override
//            public void onRenderFail() {
//                Log.e(SKD_TAG, "插屏广告渲染失败");
//            }

            @Override
            public void onPageDismiss() {
                Log.d(SKD_TAG, "插屏广告页面消失");
            }

            @Override
            public void onVideoPlayError(int code, int extra) {
                Log.e(SKD_TAG, "插屏视频播放失败 code=" + code + " extra=" + extra);
            }

            @Override
            public void onVideoPlayStart() {
                Log.d(SKD_TAG, "插屏视频播放开始");
            }

            @Override
            public void onVideoPlayEnd() {
                Log.d(SKD_TAG, "插屏视频播放结束");
            }

            @Override
            public void onSkippedAd() {
                Log.w(SKD_TAG, "插屏广告被跳过（用户跳过）");
            }
        });
    }

    private void showInterstitialAd() {
        if (mKsInterstitialAd != null) {
            mKsInterstitialAd.showInterstitialAd(AppActivity.this, null);
        } else {
            Log.w(SKD_TAG, "插屏未缓存，重新加载");
            loadAndShowInterstitial();
        }
    }

    //----   优量汇-----//
    private void initGDT() {
        final AppActivity act = AppActivity.getInstance();
        GDTAdSdk.initWithoutStart(act, "1211829064");
        GDTAdSdk.start(new GDTAdSdk.OnStartListener() {
            @Override
            public void onStartSuccess() {
                Log.i(SKD_TAG, "GDT ADK SUCCESS ");
            }

            @Override
            public void onStartFailed(Exception e) {
                Log.i(SKD_TAG, "GDT ADK Failed ");
            }
        });
    }

    public static void showGDTRewardVideo() {
        if (instance != null) {
            instance.loadAndShowGDTReward();
        }
    }

//    private String gdtInterstitialPosId = "0";   // 默认值
    public static void setInterstitialPosId(String PosId) {
        if (instance != null) {
            instance.gdtRewardPosId = PosId;
//            Log.d(SKD_TAG, "【收到 Cocos UID】" + uid);
        }
    }

    private void loadAndShowGDTReward() {
        final AppActivity act = AppActivity.getInstance();
        gdtRewardVideoAD = new RewardVideoAD(act, gdtRewardPosId, new RewardVideoADListener() {
            @Override
            public void onADLoad() {
                Log.d("GDT", "优量汇激励加载成功");
            }

            @Override
            public void onVideoCached() {
                Log.d("GDT", "优量汇激励缓存完成");
                gdtRewardVideoAD.showAD(AppActivity.this);
            }

            @Override
            public void onADShow() {

            }

            @Override
            public void onADExpose() {

            }

            @Override
            public void onReward(Map<String, Object> map) {
                callJsCallback("onGDTRewarded");
            }

            @Override
            public void onADClick() {

            }

            @Override
            public void onVideoComplete() {

            }

            @Override
            public void onADClose() {
//                callJsCallback("onAdClose");
            }

            @Override
            public void onError(AdError adError) {
                callJsCallback("onGDTAdFail");
            }
        });

        ServerSideVerificationOptions.Builder builder = new ServerSideVerificationOptions.Builder();

        if(ksUserId != null && !ksUserId.equals("") && !ksUserId.equals("0")) {
            builder.setUserId(ksUserId);
            builder.setCustomData("userid=" + ksUserId);
            Log.d("GDT", "已写入激励服务端回调参数：userId=" + ksUserId);

        }else {
            Log.d("GDT", "未设置用户ID → 不启用服务器验证参数");
        }
        gdtRewardVideoAD.setServerSideVerificationOptions(builder.build());

        gdtRewardVideoAD.loadAD();
    }

    public static void showGDTInterstitial() {
        if (instance != null) {
            instance.loadAndShowGDTFullInterstitial();
        }
    }
    private void loadAndShowGDTFullInterstitial() {

        UnifiedInterstitialAD iad = getGDTFullInterstitialAD();

        // 设置视频配置（可选）
//        iad.setVideoOption(VideoOptionHelper.getVideoOption());

        Log.d("GDT-FULL", "开始加载全屏插屏广告");
        iad.loadFullScreenAD();   // ⭐ 必须使用全屏插屏的加载接口
    }

    private UnifiedInterstitialAD gdtFullInterstitialAD;
    private String gdtInterstitialPosId = "2223523109573886";
    // 创建广告对象（包含服务端回调参数）
    private UnifiedInterstitialAD getGDTFullInterstitialAD() {

        if (gdtFullInterstitialAD == null) {
            gdtFullInterstitialAD = new UnifiedInterstitialAD(
                    this,
                    gdtInterstitialPosId,
                    new UnifiedInterstitialADListener() {

                        @Override
                        public void onADReceive() {
                            Log.d("GDT-FULL", "全屏插屏加载成功");
//                            gdtFullInterstitialAD.setMediaListener(mediaListener);
//                            gdtFullInterstitialAD.setRewardListener(rewardListener);
                        }

                        @Override
                        public void onRenderSuccess() {
                            Log.d("GDT-FULL", "全屏插屏渲染成功 → 准备展示");
                            gdtFullInterstitialAD.showFullScreenAD(AppActivity.this);
                        }

                        @Override
                        public void onRenderFail() {
                            Log.e("GDT-FULL", "渲染失败");
                            callJsCallback("onGDTInterstitialFail");
                        }

                        @Override
                        public void onNoAD(AdError adError) {
                            Log.e("GDT-FULL", "加载失败：" + adError.getErrorMsg());
                            callJsCallback("onGDTInterstitialFail");
                        }

                        @Override
                        public void onADExposure() {
                            Log.d("GDT-FULL", "全屏插屏曝光");
                        }

                        @Override
                        public void onADClicked() {
                            Log.d("GDT-FULL", "全屏插屏点击");
                        }

                        @Override
                        public void onADClosed() {
                            Log.d("GDT-FULL", "全屏插屏关闭");
                            callJsCallback("onGDTInterstitialClosed");
                        }

                        @Override public void onVideoCached() {}
                        @Override public void onADOpened() {}
                        @Override public void onADLeftApplication() {}
                    }
            );
        }

        return gdtFullInterstitialAD;
    }

    //-------------------------穿山甲------------------------------//
    public static void initTTAdSkd(Context context) {
        TTAdConfig config = new TTAdConfig.Builder()
                    .appId("5754219")                                 // ← 从 JS 传进来的
                    .appName("金蚂蚁")                  // 用包里真实应用名
                    .supportMultiProcess(false)
                    .build();
        TTAdSdk.init(context, config);

        TTAdSdk.start(new TTAdSdk.Callback() {
            @Override
            public void success() {
                Log.i("Pangle", "TTAdSdk ADK SUCCESS ");
            }

            @Override
            public void fail(int i, String s) {

            }
        });
    }

    public static boolean pangleUseServerCallback = false;

    private TTRewardVideoAd pangleRewardAd;
    public static void showPangleRewardVideo(String userId, String rewardName) {
        if (instance != null) {
            instance.loadAndShowPangleReward(userId);
        }
    }

    private void loadAndShowPangleReward(String uid) {
        final AppActivity act = AppActivity.getInstance();

        AdSlot.Builder builder = new AdSlot.Builder()
                .setCodeId("972774918")
                .setRewardName("奖励")
                .setRewardAmount(10);

        if(ksUserId != null && !ksUserId.isEmpty() && !uid.equals("0")) {
            pangleUseServerCallback = true;

            builder.setUserID(ksUserId);
            JSONObject obj = new JSONObject();
            try {
                obj.put("user_id", uid);
            } catch (Exception e) {
                e.printStackTrace();
            }
            builder.setMediaExtra(obj.toString());

            Log.d("Pangle", "Pangle 激励：使用 S2S 回调 uid=" + uid);
        }else {

            pangleUseServerCallback = false;

            Log.d("Pangle", "Pangle 激励：走普通客户端回调（未设置 uid）");
        }

        AdSlot adSlot = builder.build();

        TTAdSdk.getAdManager().createAdNative(act).loadRewardVideoAd(adSlot, new TTAdNative.RewardVideoAdListener() {
            @Override
            public void onError(int code, String msg) {
                Log.e("Pangle", "激励视频加载失败：" + code + ", " + msg);
                callJsCallback("onPangleRewardFail");
            }

            @Override
            public void onRewardVideoAdLoad(TTRewardVideoAd ttRewardVideoAd) {
                Log.d("Pangle", "激励视频素材成功加载");
                pangleRewardAd = ttRewardVideoAd;

                bindRewardListener();

                // 提示：穿山甲允许素材加载成功后“马上展示”
                pangleRewardAd.showRewardVideoAd(AppActivity.this);
            }

            @Override
            public void onRewardVideoCached() {

            }

            @Override
            public void onRewardVideoCached(TTRewardVideoAd ttRewardVideoAd) {

            }
        });
    }

    private void bindRewardListener() {
        pangleRewardAd.setRewardAdInteractionListener(new TTRewardVideoAd.RewardAdInteractionListener() {
            @Override
            public void onAdShow() {

            }

            @Override
            public void onAdVideoBarClick() {

            }

            @Override
            public void onAdClose() {

            }

            @Override
            public void onVideoComplete() {

            }

            @Override
            public void onVideoError() {

            }

            @Override
            public void onRewardVerify(boolean b, int i, String s, int i1, String s1) {
                if(!pangleUseServerCallback) {
                    Log.d("Pangle", "普通激励发放成功");
                    callJsCallback("onPangleRewarded");
                }

            }

            @Override
            public void onRewardArrived(boolean b, int i, Bundle bundle) {
                if(pangleUseServerCallback) {
                    Log.d("Pangle", "Pangle S2S奖励成功：onRewardArrived");
                    callJsCallback("onPangleRewarded");
                }
            }

            @Override
            public void onSkippedVideo() {

            }
        });
    }

    private TTFullScreenVideoAd pangleInterstitialAd;
    public static void showPangleInterstitial() {
//        if (pangleInterstitialAd != null) {
//            Log.d("Pangle", "▶️ 展示插屏广告");
//            pangleInterstitialAd.showFullScreenVideoAd(this);
//        } else {
//            Log.w("Pangle", "⚠ 插屏广告对象为空，重新加载");
//            loadAndShowPangleInterstitial();
//        }
        Log.d("Pangle", "▶️ 展示插屏广告");
        if (instance != null) {

            instance.loadAndShowPangleInterstitial();
        }
    }

    public void loadAndShowPangleInterstitial() {
        final AppActivity act = AppActivity.getInstance();
        AdSlot adSlot = new AdSlot.Builder()
                .setCodeId("972826563")
                .setOrientation(TTAdConstant.HORIZONTAL)
                .build();

        TTAdSdk.getAdManager().createAdNative(act)
                .loadFullScreenVideoAd(adSlot, new TTAdNative.FullScreenVideoAdListener() {
                    @Override
                    public void onError(int i, String s) {
                        Log.e("Pangle", "❌ 插屏加载失败：" + i + ", msg=" + s);
                    }

                    @Override
                    public void onFullScreenVideoAdLoad(TTFullScreenVideoAd ttFullScreenVideoAd) {
                        Log.d("Pangle", "📥 插屏广告素材加载成功");
                        pangleInterstitialAd = ttFullScreenVideoAd;

                        bindPangleInterstitialListener();
                    }

                    @Override
                    public void onFullScreenVideoCached() {
                        Log.d("Pangle", "InterstitialFull onFullScreenVideoCached");
                    }

                    @Override
                    public void onFullScreenVideoCached(TTFullScreenVideoAd ttFullScreenVideoAd) {
                        Log.d("Pangle", "InterstitialFull onFullScreenVideoCached");
                        // 建议在该回调后进行广告展示
                        pangleInterstitialAd = ttFullScreenVideoAd;

                        bindPangleInterstitialListener();
                    }
                });
    }

    private void bindPangleInterstitialListener() {
        final AppActivity act = AppActivity.getInstance();
        pangleInterstitialAd.setFullScreenVideoAdInteractionListener(new TTFullScreenVideoAd.FullScreenVideoAdInteractionListener() {
            @Override
            public void onAdShow() {

            }

            @Override
            public void onAdVideoBarClick() {

            }

            @Override
            public void onAdClose() {

            }

            @Override
            public void onVideoComplete() {

            }

            @Override
            public void onSkippedVideo() {

            }
        });
        pangleInterstitialAd.showFullScreenVideoAd(act);
//        showPangleInterstitial();
    }



    /** ✅ 获取当前实例 */
    public static AppActivity getInstance() {
        return instance;
    }

    /** ✅ 加载激励广告 */
    public static void loadRewarded() {
        final AppActivity act = AppActivity.getInstance();
        if (act == null) {
            Log.e("AdMobInit", "❌ AppActivity instance is null, cannot load ad");
            return;
        }

        AdRequest adRequest = new AdRequest.Builder().build();
        RewardedAd.load(
                act,
                "ca-app-pub-3940256099942544/5224354917", // 测试ID
                adRequest,
                new RewardedAdLoadCallback() {
                    @Override
                    public void onAdLoaded(@NonNull RewardedAd rewardedAd) {
                        mRewardedAd = rewardedAd;
                        Log.d("AdMobInit", "✅ 激励广告加载成功");
                    }

                    @Override
                    public void onAdFailedToLoad(@NonNull LoadAdError loadAdError) {
                        Log.e("AdMobInit", "❌ 激励广告加载失败: " +
                                "code=" + loadAdError.getCode() +
                                ", message=" + loadAdError.getMessage());
                        mRewardedAd = null;
                    }
                });
    }

    /** ✅ 展示激励广告 */
    public static void showRewarded() {
        final AppActivity act = AppActivity.getInstance();
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
                    Log.d("AdMobInit", "🎁 用户获得奖励: " + rewardAmount + " " + rewardType);
                    // TODO: 通知 Cocos 层发放奖励
                });

                mRewardedAd.setFullScreenContentCallback(new FullScreenContentCallback() {
                    @Override
                    public void onAdDismissedFullScreenContent() {
                        Log.d("AdMobInit", "广告关闭，重新加载");
                        mRewardedAd = null;
                        loadRewarded();
                    }
                });
            } else {
                Log.w("AdMobInit", "⚠️ mRewardedAd == null，广告未加载");
            }
        });
    }

    /** ✅ 复制到剪贴板 */
    public static void copyToClipboard(final String text) {
        final AppActivity app = AppActivity.getInstance();
        if (app == null) {
            Log.e("CopyText", "Activity 未初始化");
            return;
        }

        app.runOnUiThread(() -> {
            try {
                ClipboardManager clipboard =
                        (ClipboardManager) app.getSystemService(Context.CLIPBOARD_SERVICE);
                ClipData clip = ClipData.newPlainText("label", text);
                clipboard.setPrimaryClip(clip);
                Log.i("CopyText", "复制成功: " + text);
            } catch (Exception e) {
                Log.e("CopyText", "复制失败: " + e.getMessage());
            }
        });
    }

    /** ✅ 打开外部链接 */
    public static void openURL(final String url) {
        final AppActivity app = AppActivity.getInstance();
        if (app == null) {
            Log.e("AppActivity", "❌ Activity is null, cannot open URL");
            return;
        }

        app.runOnUiThread(() -> {
            try {
                Intent intent = new Intent(Intent.ACTION_VIEW, Uri.parse(url));
                app.startActivity(intent);
            } catch (Exception e) {
                Log.e("AppActivity", "打开链接失败: " + e.getMessage());
            }
        });
    }

    public static void openUpdateUrl(String url) {
        Activity activity = AppActivity.getInstance();
        activity.runOnUiThread(() -> {
            try {
                Intent intent = new Intent(Intent.ACTION_VIEW, Uri.parse(url));
                intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                activity.startActivity(intent);
//                Log.i(TAG, "已打开下载页面: " + url);
            } catch (Exception e) {
//                Log.e(TAG, "打开浏览器失败: " + e.getMessage());
            }
        });
    }

    // ---------- SDKWrapper 生命周期同步 ----------
    @Override
    protected void onResume() {
        super.onResume();
        SDKWrapper.shared().onResume();
        isGameActive = true;
        Log.i(TAG, "▶️ 游戏恢复前台，允许 JS 回调");
    }

    @Override
    protected void onPause() {
        super.onPause();
        isGameActive = false;
        SDKWrapper.shared().onPause();
        Log.i(TAG, "⏸️ 游戏进入后台，暂停 JS 回调");
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        SDKWrapper.shared().onDestroy();
        isChecking = false;
        Log.i(TAG, "💀 Activity 销毁，停止轮询线程");
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
    protected void onStart() {
        SDKWrapper.shared().onStart();
        super.onStart();
    }

    @Override
    protected void onStop() {
        SDKWrapper.shared().onStop();
        super.onStop();
    }

    @Override
    protected void onRestart() {
        super.onRestart();
        SDKWrapper.shared().onRestart();
    }

    @Override
    public void onConfigurationChanged(@NonNull Configuration newConfig) {
        SDKWrapper.shared().onConfigurationChanged(newConfig);
        super.onConfigurationChanged(newConfig);
    }

    @Override
    public void onLowMemory() {
        SDKWrapper.shared().onLowMemory();
        super.onLowMemory();
    }

    public static boolean isGameActive() {
        return isGameActive;
    }

    // ======================== JS 回调 ========================
    private static String escapeForJs(String s) {
        return s.replace("\\", "\\\\").replace("'", "\\'");
    }

    public static void callJsCallback(String callbackName, Object... args) {
//        if (!isGameActive()) {
//            Log.w(TAG, "⚠️ App 在后台，忽略 JS 回调: " + callbackName);
//            return;
//        }

        CocosHelper.runOnGameThread(() -> {
            try {
                StringBuilder js = new StringBuilder();
                js.append("(() => { const fn = globalThis['")
                        .append(escapeForJs(callbackName))
                        .append("']; if (typeof fn === 'function') fn(");

                if (args != null && args.length > 0) {
                    for (int i = 0; i < args.length; i++) {
                        Object arg = args[i];
                        if (arg == null) js.append("null");
                        else if (arg instanceof Number || arg instanceof Boolean) js.append(arg.toString());
                        else js.append("'").append(escapeForJs(arg.toString())).append("'");
                        if (i < args.length - 1) js.append(", ");
                    }
                }

                js.append("); })()");
                String finalScript = js.toString();
//                Log.d(TAG, "✅ JS eval: " + finalScript);
                CocosJavascriptJavaBridge.evalString(finalScript);
            } catch (Exception e) {
                Log.e(TAG, "Failed to call JS callback: " + e.getMessage());
            }
        });
    }

    // ====== 人脸识别 =======
    public static void startLocalZimTest() {
        AppActivity activity = AppActivity.getInstance();
        activity.runOnUiThread(() -> {
            try {
                Log.i(TAG, "启动阿里云 ZIM 实人认证");

                // 1️⃣ 从 SDK 获取 MetaInfo
//                String metaInfo = ZIMFacade.getMetaInfos(activity);
                ZIMFacade zim = ZIMFacadeBuilder.create(activity);
                String metaInfo = "";
                try {
                    metaInfo = zim.getMetaInfos(activity);
                    Log.i(TAG, "MetaInfo 收集成功: " + metaInfo);
                } catch (Exception e) {
                    Log.e(TAG, "获取 MetaInfo 失败: " + e.getMessage());
                }

                final String finalMetaInfo = metaInfo;

                // 2️⃣ 调用后端，获取真正的 verifyToken
                new Thread(() -> {
                    try {
                        URL url = new URL("https://gdapi.7919.cn/api/Login/initFaceVerify");
                        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
                        conn.setRequestMethod("POST");
                        conn.setRequestProperty("Content-Type", "application/json");
                        conn.setDoOutput(true);

                        JSONObject body = new JSONObject();
                        body.put("metaInfo", finalMetaInfo);
                        body.put("returnUrl", "");

                        OutputStream os = conn.getOutputStream();
                        os.write(body.toString().getBytes());
                        os.close();

                        BufferedReader reader = new BufferedReader(new InputStreamReader(conn.getInputStream()));
                        StringBuilder sb = new StringBuilder();
                        String line;
                        while ((line = reader.readLine()) != null) sb.append(line);
                        reader.close();

                        JSONObject resp = new JSONObject(sb.toString());
//                        Log.e(TAG, "后端响应原始内容: " + sb.toString());

//                        if (!resp.has("data")) {
//                            runOnUiThread(() ->
//                                    Toast.makeText(MainActivity.this, "后端响应缺少 data: " + sb.toString(), Toast.LENGTH_LONG).show());
//                            return;
//                        }
//                        JSONObject data = resp.getJSONObject("data");
                        JSONObject data = resp.getJSONObject("data");
                        String certifyId = data.getString("certifyId");
                        Log.i(TAG, "服务端返回 certifyId: " + certifyId);

                        activity.runOnUiThread(() -> startZimSdk(certifyId));

                    } catch (Exception e) {
                        Log.e(TAG, "后端请求失败: " + e.getMessage());
                    }
                }).start();

            } catch (Exception e) {
                Log.e(TAG, "ZIM 启动异常: " + e.getMessage());
            }
        });
    }

    private static void startZimSdk(String token) {
        AppActivity activity = AppActivity.getInstance();
        ZIMFacade zimFacade = ZIMFacadeBuilder.create(activity);

        HashMap<String, String> extParams = new HashMap<>();
        extParams.put(ZIMFacade.ZIM_EXT_PARAMS_KEY_USE_VIDEO,
                ZIMFacade.ZIM_EXT_PARAMS_VAL_USE_VIDEO_TRUE);
        extParams.put(ZIMFacade.ZIM_EXT_PARAMS_KEY_FACE_PROGRESS_COLOR, "#FF0000");
//        extParams.put(ZIMFacade.ZIM_EXT_PARAMS_KEY_SCREEN_ORIENTATION,
//                ZIMFacade.ZIM_EXT_PARAMS_VAL_SCREEN_LAND); // 横屏刷脸
        extParams.put(ZIMFacade.ZIM_EXT_PARAMS_KEY_SCREEN_ORIENTATION,
                ZIMFacade.ZIM_EXT_PARAMS_VAL_SCREEN_PORT);

//        zimFacade.verify(token, true, extParams, new ZIMCallback() {
//            @Override
//            public boolean response(ZIMResponse response) {
//                boolean success = response.code == 1000;
//                String msg = success ? "刷脸通过" : "刷脸失败([" + response.code + "] " + response.reason + ")";
//                callJsCallback("onZimTestResult", success, msg);
//                return true;
//            }
//        });

        zimFacade.verify(token, true, extParams, new ZIMCallback() {
            @Override
            public boolean response(ZIMResponse response) {
                try {
                    // 打印完整对象
                    org.json.JSONObject json = new org.json.JSONObject();
                    json.put("code", response.code);
                    json.put("reason", response.reason);
//                    json.put("retCodeSub", response.retCodeSub);
                    json.put("retMessageSub", response.retMessageSub);
//                    json.put("verifyId", response.verifyId);
                    json.put("deviceToken", response.deviceToken);

                    Log.i(TAG, "🧩 ZIM 回调完整数据: " + json.toString());

                    boolean success = response.code == 1000;
                    String msg = success ? "✅ 实人认证成功"
                            : "❌ 实人认证失败(" + response.code + " - " + response.reason + ")";
//                    callJsCallback("onZimTestResult", success, token);
                    // ⚡ 主线程安全执行 JS 回调
                    activity.runOnUiThread(() -> {
                        try {
                            callJsCallback("onZimTestResult", success, token);
                            Log.i(TAG, "📩 执行 JS 回调: " + success);
//                            Cocos2dxJavascriptJavaBridge.evalString(jsCode);
                        } catch (Exception e) {
                            Log.e(TAG, "⚠️ 执行 JS 回调出错: " + e.getMessage());
                        }
                    });

                } catch (Exception e) {
                    Log.e(TAG, "打印 ZIM 回调异常: " + e.getMessage());
                }
                return true;
            }
        });
    }

    // ======================== 下载入口 ========================
    public static void downloadAndInstallApkWithProgress(String url) {
        AppActivity activity = AppActivity.getInstance();
        Log.i(TAG, "开始下载: " + url);

        String fileName = "goldenAnt_update.apk";
        File apkFile = new File(activity.getExternalFilesDir(Environment.DIRECTORY_DOWNLOADS), fileName);
        if (apkFile.exists()) apkFile.delete();
        lastDownloadedApk = apkFile;

        // 创建下载任务
        DownloadManager.Request request = new DownloadManager.Request(Uri.parse(url));
        request.setTitle("金蚂蚁更新中");
        request.setDescription("正在下载最新版本...");
        request.setDestinationUri(Uri.fromFile(apkFile));
        request.setNotificationVisibility(DownloadManager.Request.VISIBILITY_VISIBLE_NOTIFY_COMPLETED);

        DownloadManager manager = (DownloadManager) activity.getSystemService(Context.DOWNLOAD_SERVICE);
        downloadId = manager.enqueue(request);

        // 启动后台线程轮询进度
        isChecking = true;
        new Thread(() -> checkProgress(activity, manager, apkFile)).start();
    }

    // ======================== 查询下载进度 ========================
    private static void checkProgress(Context context, DownloadManager manager, File apkFile) {
        DownloadManager.Query query = new DownloadManager.Query();
        query.setFilterById(downloadId);

        while (isChecking) {
            Cursor cursor = null;
            try {
                cursor = manager.query(query);
                if (cursor != null && cursor.moveToFirst()) {
                    int statusIndex = cursor.getColumnIndex(DownloadManager.COLUMN_STATUS);
                    int downloadedIndex = cursor.getColumnIndex(DownloadManager.COLUMN_BYTES_DOWNLOADED_SO_FAR);
                    int totalIndex = cursor.getColumnIndex(DownloadManager.COLUMN_TOTAL_SIZE_BYTES);

                    // ✅ 防止 ROM 缺列
                    if (statusIndex == -1 || downloadedIndex == -1 || totalIndex == -1) {
                        Log.w(TAG, "⚠️ ROM 缺少 DownloadManager 字段，等待下一次查询");
                        Thread.sleep(1000);
                        continue;
                    }

                    int status = cursor.getInt(statusIndex);
                    long downloaded = cursor.getLong(downloadedIndex);
                    long total = cursor.getLong(totalIndex);

                    if (total > 0) {
                        float progress = (downloaded * 100f / total);
                        callJsCallback("onDownloadProgress", progress);
                    }

                    if (status == DownloadManager.STATUS_SUCCESSFUL) {
                        callJsCallback("onDownloadCompleted");
                        handler.postDelayed(() -> installApk(context, apkFile), 1500);
                        isChecking = false;
                        break;
                    } else if (status == DownloadManager.STATUS_FAILED) {
                        callJsCallback("onDownloadFailed", "下载失败");
                        isChecking = false;
                        break;
                    }
                }
            } catch (Exception e) {
                Log.w(TAG, "查询进度异常: " + e.getMessage());
            } finally {
                if (cursor != null) cursor.close();
            }

            try { Thread.sleep(500); } catch (InterruptedException ignored) {}
        }
    }

    // ======================== 安装 APK ========================
    private static void installApk(Context context, File apkFile) {
        try {
            if (!apkFile.exists()) {
                callJsCallback("onDownloadFailed", "APK 文件不存在");
                return;
            }

            Uri apkUri = FileProvider.getUriForFile(
                    context,
                    context.getPackageName() + ".fileprovider",
                    apkFile
            );

            Intent intent = new Intent(Intent.ACTION_VIEW);
            intent.setDataAndType(apkUri, "application/vnd.android.package-archive");
            intent.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION);
            intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);

            // 🚀 启动安装器
            context.startActivity(intent);
            Log.i(TAG, "🚀 启动安装器成功: " + apkFile.getAbsolutePath());

            // 🕐 启动后台检测线程（轮询包是否安装成功）
            new Thread(() -> {
                String packageName = context.getPackageName(); // 你也可以改成固定包名
                boolean installed = false;
                int checkCount = 0;

                while (checkCount < 30) { // 最多检查 30 秒
                    if (isPackageInstalled(context, packageName)) {
                        installed = true;
                        break;
                    }
                    try {
                        Thread.sleep(1000);
                    } catch (InterruptedException ignored) {}
                    checkCount++;
                }

                if (installed) {
                    Log.i(TAG, "✅ 安装成功");
                    callJsCallback("onInstallSuccess");
                } else {
                    Log.w(TAG, "❌ 用户关闭安装或安装失败");
                    callJsCallback("onInstallCanceled");
                }
            }).start();

        } catch (Exception e) {
            Log.e(TAG, "安装失败", e);
            callJsCallback("onDownloadFailed", "安装失败");
        }
    }

    private static boolean isPackageInstalled(Context context, String packageName) {
        try {
            context.getPackageManager().getPackageInfo(packageName, 0);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    public static void installApkAgain() {
        if (lastDownloadedApk != null && lastDownloadedApk.exists()) {
            installApk(AppActivity.getInstance(), lastDownloadedApk);
        } else {
            callJsCallback("onInstallCanceled", "安装包不存在");
        }
    }

    public static int getVersionCode() {
        try {
            PackageManager pm = AppActivity.getInstance().getPackageManager();
            PackageInfo info = pm.getPackageInfo(AppActivity.getInstance().getPackageName(), 0);
            return info.versionCode;
        } catch (Exception e) {
            e.printStackTrace();
            return -1;
        }
    }

    public static String getVersionName() {
        try {
            PackageManager pm = AppActivity.getInstance().getPackageManager();
            PackageInfo info = pm.getPackageInfo(AppActivity.getInstance().getPackageName(), 0);
            return info.versionName;
        } catch (Exception e) {
            e.printStackTrace();
            return "";
        }
    }
}
