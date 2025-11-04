import { sys, native } from 'cc';
import { UIManager } from '../manager/UIManager';
import { UIConfig } from '../manager/UIConfig';
import { NetworkManager } from '../manager/NetworkManager';
import { SignInManager } from '../manager/SignInManager';

/**
 * ✅ 游戏启动时调用此函数自动检测更新
 */
export async function checkForUpdate(showTip: boolean = false) {
    if (sys.platform !== sys.Platform.ANDROID) {
        console.log("非 Android 平台，跳过更新检测");
        return;
    }

    const versionUrl = "https://lm6789.com/version.json"; // ✅ 服务器配置文件地址
    const localVersionCode = 23; // ✅ 当前版本号（与 build.gradle 保持一致）

    console.log("🔍 正在检测新版本...");

    try {
        const response = await fetch(versionUrl + "?t=" + Date.now());
        const data = await response.json();

        const remoteVersion = data.versionCode;
        const updateDesc = data.updateDesc || "发现新版本，建议立即更新！";
        const downloadUrl = data.downloadUrl || "https://lm6789.com/download.html";

        if (remoteVersion > localVersionCode) {
            console.log(`📢 发现新版本 v${remoteVersion}`);
            if (sys.os === sys.OS.ANDROID) {
                // @ts-ignore
                const versionCode = jsb.reflection.callStaticMethod(
                    "com/cocos/game/AppActivity",
                    "getVersionCode",
                    "()I"
                );
                // @ts-ignore
                const versionName = jsb.reflection.callStaticMethod(
                    "com/cocos/game/AppActivity",
                    "getVersionName",
                    "()Ljava/lang/String;"
                );
                console.log("Android VersionCode:", versionCode);
                console.log("Android VersionName:", versionName);
                if(versionCode <= 20) {
                    SignInManager.resetUserList();
                }
            }
            // showUpdateDialog(updateDesc, downloadUrl);
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
 * 弹出提示框
 */
function showUpdateFailDialog(message: string, url: string) {
    // if (confirm(`${message}\n\n是否前往下载最新版本？`)) {
    //     openUrl(url);
    // }
    UIManager.Instace.showUI({
        path: UIConfig.MessageBoxCommonKey,
        data: {
            okName: "前往",
            // cancleName: "取消",
            des: message,
            okFunc: () => {
                openGoldenUrl(url);
            },
            cancleFunc: null
        }
    });
}

let _progressUI: any = null;
/**
 * 打开官网或下载地址
 */
function openUrl(url: string) {
    if (sys.isNative && sys.platform === sys.Platform.ANDROID) {
        // native.reflection.callStaticMethod(
        //     "com/cocos/game/AppActivity",
        //     "openUpdateUrl",
        //     "(Ljava/lang/String;)V",
        //     url
        // );
        // 显示进度条 UI
        // _progressUI = UIManager.Instace.showUI({
        //     path: UIConfig.WaitItemKey,
        //     data: "正在下载更新: 0%"
        // });

        UIManager.Instace.showUI({ path: UIConfig.WaitItemKey, data: { opacity: 0.5, des: "正在下载更新: 0%" } });

        _progressUI = UIManager.Instace.getUI(UIConfig.WaitItemKey);

        (globalThis as any).onDownloadProgress = (p: number) => {
            console.log(`下载进度: ${p.toFixed(1)}%`);
            if (_progressUI && p <= 100) {
                _progressUI.updateMessage(`正在下载更新: ${p.toFixed(1)}%`);
            }
        };
        (globalThis as any).onDownloadCompleted = () => {
            console.log("下载完成，准备安装");
            if (_progressUI) {
                _progressUI.updateMessage("下载完成，正在准备安装...");
            }
        };
        (globalThis as any).onDownloadFailed = (msg: string) => {
            console.log("下载失败:", msg);
            UIManager.Instace.hideUI(UIConfig.WaitItemKey);
            showUpdateFailDialog('更新失败,请前往官网进行手动下载', 'https://lm6789.com/download.html')
        };

        (globalThis as any).onInstallCanceled = () => {
            console.warn("⚠️ 用户取消了安装");
            UIManager.Instace.showUI({
                path: UIConfig.MessageBoxCommonKey,
                data: {
                    des: "您取消了安装，请手动安装",
                    okName: "重新安装",
                    okFunc: () => {
                        // 重新打开安装界面
                        native.reflection.callStaticMethod(
                            "com/cocos/game/AppActivity",
                            "installApkAgain",
                            "()V"
                        );
                    }
                }
            });
        };

        // 调用原生方法开始下载
        native.reflection.callStaticMethod(
            "com/cocos/game/AppActivity",
            "downloadAndInstallApkWithProgress",
            "(Ljava/lang/String;)V",
            url
        );
    } else {
        window.open(url, "_blank");
    }
}

function openGoldenUrl(url: string) {
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

