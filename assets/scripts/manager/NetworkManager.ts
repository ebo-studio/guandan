import { sys } from "cc";

export module NetworkManager {
    export function checkProxy(callback?: (isProxy: boolean) => void) {
        if (!sys.isNative || typeof jsb === "undefined") {
            console.warn("非原生平台，不支持代理检测");
            callback?.(false);
            return;
        }

        // ✅ 注册全局回调（Java evalString 会执行这个）
        (globalThis as any).onProxyCheckResult = (isProxy: boolean) => {
            console.log("🌐 检测结果:", isProxy);
            callback?.(isProxy);
        };

        try {
            //@ts-ignore
            jsb.reflection.callStaticMethod(
                "com/cocos/game/NetworkUtil",
                "checkProxy",
                "()V"
            );
        } catch (e) {
            console.error("调用 Java 检测代理失败:", e);
            callback?.(false);
        }
    }
}
