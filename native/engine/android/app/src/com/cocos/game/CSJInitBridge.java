package com.cocos.game;

import android.app.Activity;
import com.bytedance.sdk.openadsdk.TTAdConfig;
import com.bytedance.sdk.openadsdk.TTAdSdk;

// Cocos 3.6
import com.cocos.lib.CocosHelper;
import com.cocos.lib.JsbBridgeWrapper;

public class CSJInitBridge {
    private static boolean sInited = false;

    public static void init(final Activity act, final String appId, final boolean multiProcess, final boolean debug) {
        if (sInited) return;

        TTAdConfig cfg = new TTAdConfig.Builder()
                .appId(appId)
                .appName(act.getApplicationInfo().loadLabel(act.getPackageManager()).toString())
                .supportMultiProcess(multiProcess)
                .debug(debug)
                .build();

        TTAdSdk.init(act.getApplicationContext(), cfg);

        if (multiProcess) {
            TTAdSdk.start(new TTAdSdk.Callback() {
                @Override public void success() {
                    sInited = true;
                    dispatch("onCSJInit","ok");
                }
                @Override public void fail(int code, String msg) {
                    dispatch("onCSJInit","fail:"+code+":"+msg);
                }
            });
        } else {
            sInited = true;
            dispatch("onCSJInit","ok");
        }
    }

    private static void dispatch(final String event, final String payload) {
        android.util.Log.d("CSJBridge", "dispatch " + event + " -> " + payload);
        CocosHelper.runOnGameThread(() ->
                JsbBridgeWrapper.getInstance().dispatchEventToScript(event, payload)
        );
    }
}
