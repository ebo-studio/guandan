package com.cocos.game;

import android.content.Context;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;
import android.os.Build;
import android.util.Log;

import com.cocos.lib.CocosHelper;
import com.cocos.lib.CocosJavascriptJavaBridge;

import java.net.InetSocketAddress;
import java.net.Proxy;
import java.net.ProxySelector;
import java.net.URI;
import java.util.List;

public class NetworkUtil {

    private static final String TAG = "NetworkUtil";

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

    // ======================== 代理检测核心 ========================
    private static boolean isUsingProxy(Context context) {
        try {
            String host;
            int port;

            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.ICE_CREAM_SANDWICH) {
                host = System.getProperty("http.proxyHost");
                String portStr = System.getProperty("http.proxyPort");
                port = Integer.parseInt(portStr != null ? portStr : "-1");
            } else {
                host = android.net.Proxy.getHost(context);
                port = android.net.Proxy.getPort(context);
            }

            if (host != null && port != -1) return true;

            ConnectivityManager cm = (ConnectivityManager) context.getSystemService(Context.CONNECTIVITY_SERVICE);
            if (cm != null) {
                NetworkInfo vpn = cm.getNetworkInfo(ConnectivityManager.TYPE_VPN);
                if (vpn != null && vpn.isConnected()) return true;
            }

            List<Proxy> proxyList = ProxySelector.getDefault().select(new URI("http://www.google.com"));
            for (Proxy proxy : proxyList) {
                if (proxy != null && proxy.type() != Proxy.Type.DIRECT) {
                    InetSocketAddress addr = (InetSocketAddress) proxy.address();
                    if (addr != null) return true;
                }
            }
        } catch (Exception e) {
            Log.e(TAG, "Proxy check error", e);
        }
        return false;
    }

    // ======================== 提供给 JS 调用 ========================
    public static void checkProxy() {
        Context context = AppActivity.getInstance(); // ✅ 最稳定的上下文获取方式
        new Thread(() -> {
            boolean usingProxy = isUsingProxy(context);
            Log.i(TAG, "Proxy status: " + usingProxy);

            // ✅ 回调 JS（使用你的方式）
            callJsCallback("onProxyCheckResult", usingProxy);
        }).start();
    }
}
