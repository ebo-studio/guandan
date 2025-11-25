import { GameSocket } from "./GameSocket";

export const HeartbeatManager = {
    isJsHeartRunning: false,
    isNativeHeartRunning: false,

    // JS 开心跳（幂等处理）
    startJsHeart() {
        if (this.isJsHeartRunning) return;
        console.log("JS Heart: START");

        GameSocket.sendPingOnce();
        GameSocket.startHeart(); // 你的原有逻辑

        this.isJsHeartRunning = true;
    },

    // JS 停止心跳（幂等处理）
    stopJsHeart() {
        if (!this.isJsHeartRunning) return;
        console.log("JS Heart: STOP");

        GameSocket.stopHeart();

        this.isJsHeartRunning = false;
    },

    // Native 开心跳（幂等）
    startNativeHeart() {
        if (this.isNativeHeartRunning) return;
        console.log("Native Heart: START");

        // @ts-ignore
        jsb.reflection.callStaticMethod(
            "com/cocos/game/AppActivity",
            "onStartNativeHeart",
            "()V"
        );

        this.isNativeHeartRunning = true;
    },

    // Native 停心跳（幂等）
    stopNativeHeart() {
        if (!this.isNativeHeartRunning) return;
        console.log("Native Heart: STOP");

        // @ts-ignore
        jsb.reflection.callStaticMethod(
            "com/cocos/game/AppActivity",
            "onStopNativeHeart",
            "()V"
        );

        this.isNativeHeartRunning = false;
    }
};
