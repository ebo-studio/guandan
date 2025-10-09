/****************************************************************************
 Copyright ...
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

import androidx.annotation.NonNull;

import com.cocos.lib.CocosActivity;
import com.cocos.service.SDKWrapper;

import com.google.android.gms.ads.AdRequest;
import com.google.android.gms.ads.FullScreenContentCallback;
import com.google.android.gms.ads.LoadAdError;
import com.google.android.gms.ads.rewarded.RewardedAd;
import com.google.android.gms.ads.rewarded.RewardedAdLoadCallback;

public class AppActivity extends CocosActivity {

    private static final String TAG = "AppActivity";
    private static AppActivity instance;
    private static RewardedAd mRewardedAd;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        instance = this;

        // 保持屏幕常亮
        getWindow().addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);

        Log.d(TAG, "AppActivity created, instance registered");

        // 初始化 SDKWrapper（必要）
        SDKWrapper.shared().init(this);

        // 初始化广告
        loadRewarded();
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

    // ---------- SDKWrapper 生命周期同步 ----------
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
}
