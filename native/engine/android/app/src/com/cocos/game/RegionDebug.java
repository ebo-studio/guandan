package com.cocos.game;

import android.content.Context;
import android.telephony.TelephonyManager;
import android.util.Log;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Locale;

public class RegionDebug {
    private static final String TAG = "RegionDebug";

    public static void logRegion(Context ctx) {
        TelephonyManager tm = (TelephonyManager) ctx.getSystemService(Context.TELEPHONY_SERVICE);
        String networkIso = (tm != null) ? tm.getNetworkCountryIso() : "";
        String simIso     = (tm != null) ? tm.getSimCountryIso()     : "";
        String localeIso  = Locale.getDefault().getCountry();

        Log.i(TAG, "Device region (network/sim/locale) = "
                + networkIso + "/" + simIso + "/" + localeIso);

        // 可选：打印公网IP对应国家（Pangle 基本按公网 IP 判定地区）
        new Thread(() -> {
            try {
                URL url = new URL("https://ifconfig.io/country_code"); // 返回如 "JP"、"US"
                HttpURLConnection conn = (HttpURLConnection) url.openConnection();
                conn.setConnectTimeout(4000);
                conn.setReadTimeout(4000);
                BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
                String code = br.readLine();
                Log.i(TAG, "Public-IP country (ifconfig.io) = " + code);
                br.close();
                conn.disconnect();
            } catch (Exception e) {
                Log.w(TAG, "Fetch public country failed: " + e);
            }
        }).start();
    }
}
