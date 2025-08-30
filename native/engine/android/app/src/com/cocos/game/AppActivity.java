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

import android.content.ClipData;
import android.content.ClipboardManager;
import android.content.Context;
import android.net.Uri;
import android.os.Bundle;
import android.content.Intent;
import android.content.res.Configuration;
import android.util.Log;

//import com.bytedance.sdk.openadsdk.TTAdConfig;
//import com.bytedance.sdk.openadsdk.TTAdSdk;
import com.cocos.service.SDKWrapper;
import com.cocos.lib.CocosActivity;

public class AppActivity extends CocosActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        instance = this;

        RegionDebug.logRegion(getApplicationContext());
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
