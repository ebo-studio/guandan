/****************************************************************************
 Copyright ...
 ****************************************************************************/
package com.cocos.game;

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
import androidx.core.content.FileProvider;

import com.alibaba.fastjson.JSON;
import com.alipay.face.api.ZIMCallback;
import com.alipay.face.api.ZIMFacade;
import com.alipay.face.api.ZIMFacadeBuilder;
import com.alipay.face.api.ZIMResponse;
import com.cocos.lib.CocosActivity;
import com.cocos.lib.CocosHelper;
import com.cocos.lib.CocosJavascriptJavaBridge;
import com.cocos.service.SDKWrapper;

import com.google.android.gms.ads.AdRequest;
import com.google.android.gms.ads.FullScreenContentCallback;
import com.google.android.gms.ads.LoadAdError;
import com.google.android.gms.ads.rewarded.RewardedAd;
import com.google.android.gms.ads.rewarded.RewardedAdLoadCallback;

import java.io.File;
import java.util.HashMap;
import java.util.Locale;

public class AppActivity extends CocosActivity {

    private static final String TAG = "goldenAnt";
    private static AppActivity instance;
    private static RewardedAd mRewardedAd;

//    private static final String TAG = "Updater";

    private static long downloadId = -1;
    private static boolean isChecking = false;
    private static boolean isGameActive = true;
    private static final Handler handler = new Handler(Looper.getMainLooper());
    private static File lastDownloadedApk = null;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        instance = this;

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



        // 初始化广告
//        loadRewarded();
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
                Log.i(TAG, "启动阿里云 ZIM 人脸检测本地测试");

                // ⚠️ 这里用“假 token”测试，不做服务端签名校验
                String fakeVerificationToken = "test-token-" + System.currentTimeMillis();

                // 创建 SDK 实例
                ZIMFacade zimFacade = ZIMFacadeBuilder.create(activity);

                // 配置参数
                HashMap<String, String> extParams = new HashMap<>();
                extParams.put(ZIMFacade.ZIM_EXT_PARAMS_KEY_USE_VIDEO,
                        ZIMFacade.ZIM_EXT_PARAMS_VAL_USE_VIDEO_TRUE);
                extParams.put(ZIMFacade.ZIM_EXT_PARAMS_KEY_FACE_PROGRESS_COLOR, "#FF0000");
                extParams.put(ZIMFacade.ZIM_EXT_PARAMS_KEY_SCREEN_ORIENTATION,
                        ZIMFacade.ZIM_EXT_PARAMS_VAL_SCREEN_LAND);

                // 调起 SDK
                zimFacade.verify(fakeVerificationToken, true, extParams, new ZIMCallback() {
                    @Override
                    public boolean response(final ZIMResponse response) {
                        Log.i(TAG, "ZIM 回调: " + JSON.toJSONString(response));
                        boolean success = response.code == 1000;
                        String msg = success ? "刷脸通过" :
                                "刷脸失败([" + response.code + "] " + response.reason + ")";
//                        sendResultToJS(success, msg);
                        callJsCallback("onZimTestResult", success, msg);
                        return true;
                    }
                });

            } catch (Exception e) {
                Log.e(TAG, "ZIM 启动异常: " + e.getMessage());
//                sendResultToJS(false, e.getMessage());
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
