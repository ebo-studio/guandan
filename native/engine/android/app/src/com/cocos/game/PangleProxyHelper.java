package com.cocos.game;

import java.io.IOException;
import java.net.*;
import java.util.concurrent.*;
import android.util.Log;

public class PangleProxyHelper {
    private static final String TAG = "PangleProxyHelper";

    public static void enableProxy(String host, int port, String user, String pass) {
        System.setProperty("http.proxyHost", host);
        System.setProperty("http.proxyPort", String.valueOf(port));
        System.setProperty("https.proxyHost", host);
        System.setProperty("https.proxyPort", String.valueOf(port));

        if (user != null && !user.isEmpty()) {
            Authenticator.setDefault(new Authenticator() {
                @Override
                protected PasswordAuthentication getPasswordAuthentication() {
                    return new PasswordAuthentication(user, pass.toCharArray());
                }
            });
        }
        Log.i(TAG, "✅ Proxy enabled: " + host + ":" + port);
    }

    public static void disableProxy() {
        System.clearProperty("http.proxyHost");
        System.clearProperty("http.proxyPort");
        System.clearProperty("https.proxyHost");
        System.clearProperty("https.proxyPort");
        Authenticator.setDefault(null);
        Log.i(TAG, "🧹 Proxy disabled");
    }

    // ✅ 检测代理是否能访问 pangleglobal.com
    public static boolean isProxyReachable(String host, int port) {
        ExecutorService executor = Executors.newSingleThreadExecutor();
        Future<Boolean> future = executor.submit(() -> {
            try {
                Proxy proxy = new Proxy(Proxy.Type.HTTP, new InetSocketAddress(host, port));
                URL url = new URL("https://www.pangleglobal.com");
                HttpURLConnection conn = (HttpURLConnection) url.openConnection(proxy);
                conn.setConnectTimeout(2000);
                conn.setReadTimeout(2000);
                conn.setRequestMethod("HEAD");
                int responseCode = conn.getResponseCode();
                conn.disconnect();
                Log.i(TAG, "🌐 Proxy check " + host + ":" + port + " → " + responseCode);
                return responseCode == 200 || responseCode == 301 || responseCode == 302;
            } catch (IOException e) {
                return false;
            }
        });
        try {
            boolean result = future.get(3, TimeUnit.SECONDS);
            executor.shutdownNow();
            return result;
        } catch (Exception e) {
            executor.shutdownNow();
            return false;
        }
    }
}
