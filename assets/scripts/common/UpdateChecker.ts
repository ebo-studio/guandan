import { sys, native } from 'cc';
import { UIManager } from '../manager/UIManager';
import { UIConfig } from '../manager/UIConfig';
import { NetworkManager } from '../manager/NetworkManager';

/**
 * ✅ 游戏启动时调用此函数自动检测更新
 */
export async function checkForUpdate(showTip: boolean = false) {
    if (sys.platform !== sys.Platform.ANDROID) {
        console.log("非 Android 平台，跳过更新检测");
        return;
    }

    const versionUrl = "https://lm6789.com/version.json"; // ✅ 服务器配置文件地址
    const localVersionCode = 12; // ✅ 当前版本号（与 build.gradle 保持一致）

    console.log("🔍 正在检测新版本...");

    try {
        const response = await fetch(versionUrl + "?t=" + Date.now());
        const data = await response.json();

        const remoteVersion = data.versionCode;
        const updateDesc = data.updateDesc || "发现新版本，建议立即更新！";
        const downloadUrl = data.downloadUrl || "https://lm6789.com/download.html";

        if (remoteVersion > localVersionCode) {
            console.log(`📢 发现新版本 v${remoteVersion}`);
            showUpdateDialog(updateDesc, downloadUrl);
        } else {
            if (showTip) {
                UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: "当前已是最新版本" });
            }
            else {
                NetworkManager.checkProxy((isProxy) => {
                    if (isProxy) {
                        UIManager.Instace.showUI({
                            path: UIConfig.MessageBoxCommonKey,
                            data: {
                                okName: "确定",
                                cancleName: "取消",
                                des: "检测到您正在使用 VPN 或代理网络\n为了更顺畅的体验,建议请先关闭代理",
                                okFunc: () => {

                                },
                                cancleFunc: () => {

                                }
                            }
                        });
                        console.warn("⚠️ 检测到代理 / VPN");
                    } else {
                        console.log("✅ 网络环境正常");
                    }
                });
            }
            console.log("✅ 当前已是最新版本");
        }
    } catch (err) {
        console.error("❌ 检查更新失败:", err);
    }
}

/**
 * 弹出提示框
 */
function showUpdateDialog(message: string, url: string) {
    // if (confirm(`${message}\n\n是否前往下载最新版本？`)) {
    //     openUrl(url);
    // }
    UIManager.Instace.showUI({
        path: UIConfig.MessageBoxCommonKey,
        data: {
            okName: "确定",
            // cancleName: "取消",
            des: message,
            okFunc: () => {
                openUrl(url);
            },
            cancleFunc: null
        }
    });
}

/**
 * 打开官网或下载地址
 */
function openUrl(url: string) {
    if (sys.isNative && sys.platform === sys.Platform.ANDROID) {
        native.reflection.callStaticMethod(
            "com/cocos/game/AppActivity",
            "openUpdateUrl",
            "(Ljava/lang/String;)V",
            url
        );
    } else {
        window.open(url, "_blank");
    }
}
