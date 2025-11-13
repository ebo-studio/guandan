import { sys } from "cc";
import { GlobalData } from "./GlobalData";

export enum AdPlatform {
    KS = "ks",     // 快手
    GDT = "gdt",   // 优量汇 (Tencent GDT)
}

export class ADManager {
    private static _inst: ADManager;
    public static get inst() {
        if (!this._inst) this._inst = new ADManager();
        return this._inst;
    }

    private constructor() {
        this.bindNativeCallbacks();
    }

    private _rewardVideoId: string = "";

    public setRewardVideoId(id: string | number) {
        this._rewardVideoId = String(id);

        if (this._isAndroidNative()) {
            try {
                // @ts-ignore
                jsb.reflection.callStaticMethod(
                    "com/cocos/game/AppActivity",
                    "setKsRewardVideoId",
                    "(Ljava/lang/String;)V",
                    String(id)
                );
            } catch (e) {
                console.error("【AD】设置激励视频广告ID失败：", e);
            }
        }
    }

    public setGDTRewardVideoId(id: string | number) {
        this._rewardVideoId = String(id);

        if (this._isAndroidNative()) {
            try {
                // @ts-ignore
                jsb.reflection.callStaticMethod(
                    "com/cocos/game/AppActivity",
                    "setInterstitialPosId",
                    "(Ljava/lang/String;)V",
                    String(id)
                );
            } catch (e) {
                console.error("【AD】设置激励视频广告ID失败：", e);
            }
        }
    }

    // =============================
    // 激励视频
    // =============================

    private _rewardCallback: (() => void) | null = null;
    private _extraRewardCallback: ((type: number) => void) | null = null;
    private _failCallback: (() => void) | null = null;

    private rewardPlatforms: AdPlatform[] = [
        AdPlatform.GDT,
        AdPlatform.KS,
    ];

    /**
     * 播放激励视频
     * @param callback 看完主奖励回调
     * @param extraCallback 额外奖励回调
     */
    public showRewardVideo(callback?: () => void, failCallback?: () => void, extraCallback?: (type: number) => void) {
        this._rewardCallback = callback || null;
        this._extraRewardCallback = extraCallback || null;
        this._failCallback = failCallback || null

        if (!this._isAndroidNative()) {
            this._rewardCallback?.();
            return;
        }

        try {
            //@ts-ignore
            // jsb.reflection.callStaticMethod("com/cocos/game/AppActivity", "showKsRewardVideo", "()V");
            // jsb.reflection.callStaticMethod(
            //     "com/cocos/game/AppActivity",
            //     "showPangleRewardVideo",
            //     "(Ljava/lang/String;Ljava/lang/String;)V",
            //     GlobalData.userInfo.user_id, 'rewardName'
            // );

            // const p = AdPlatform.GDT; // 取第一个平台

            // if (p === AdPlatform.GDT) {
                // @ts-ignore
                jsb.reflection.callStaticMethod("com/cocos/game/AppActivity", "showGDTRewardVideo", "()V");
            // } else if (p === AdPlatform.KS) {
                // // @ts-ignore
                // jsb.reflection.callStaticMethod("com/cocos/game/AppActivity", "showKsRewardVideo", "()V");
            // }
            // // @ts-ignore
            // jsb.reflection.callStaticMethod(
            //     "com/cocos/game/AppActivity",
            //     "showKsRewardVideo",
            //     "()V"
            // );
        } catch (e) {
        }
    }

    private bindNativeCallbacks() {
        // 主奖励
        (window as any).onKsRewarded = () => {
            this._rewardCallback?.();
        };

        (window as any).onKsRewardFail = () => {
            this._failCallback?.();
        };

        (window as any).onGDTRewarded = () => {
            this._rewardCallback?.();
        };

        (window as any).onGDTAdFail = (msg: string) => {
            // this.onRewardFailPlatform(AdPlatform.GDT, msg);
            this._failCallback?.();
        };

        (window as any).onGDTInterstitialFail = (msg: string) => {
            // this.onRewardFailPlatform(AdPlatform.GDT, msg);
            // this._failCallback?.();
            this.onRewardFailPlatform(AdPlatform.GDT, msg);
        };

        (window as any).onPangleRewarded = () => {
            console.log("【Pangle】激励视频观看完成");
            this._rewardCallback?.();
        };

        (window as any).onPangleRewardFail = () => {
            this._failCallback?.();
        };
    }

    // =============================
    // 插屏广告（如果你之后要加）
    // =============================

    public showInterstitial() {
        if (!this._isAndroidNative()) {
            return;
        }
        try {
            const p = this.rewardPlatforms[0]; // 取第一个平台

            if (p === AdPlatform.GDT) {
                // @ts-ignore
                jsb.reflection.callStaticMethod("com/cocos/game/AppActivity", "showGDTInterstitial", "()V");
            } else if (p === AdPlatform.KS) {
                // @ts-ignore
                jsb.reflection.callStaticMethod("com/cocos/game/AppActivity", "showKsInterstitial", "()V");
            }
        } catch (e) {

        }
    }
    // =============================
    // 环境检测
    // =============================

    private _isAndroidNative(): boolean {
        return sys.isNative && sys.os === sys.OS.ANDROID;
    }

    public setUserId(uid: string | number) {
        if (!this._isAndroidNative()) return;

        try {
            // @ts-ignore
            jsb.reflection.callStaticMethod(
                "com/cocos/game/AppActivity",
                "setKsUserId",
                "(Ljava/lang/String;)V",
                String(uid)
            );
        } catch (e) {
        }
    }

    /** TS 接收平台失败 → 切换下一个平台 */
    public onRewardFailPlatform(platform: AdPlatform, msg: string) {
        console.log("平台失败：", platform, msg);

        // 移除失败的平台
        this.rewardPlatforms = this.rewardPlatforms.filter(p => p !== platform);

        // if (this.rewardPlatforms.length === 0) {
        //     console.log("全部平台失败");
        //     this._failCallback?.(msg);
        //     return;
        // }

        // // 使用下一个平台重试
        this.showInterstitial();
    }
}

export const ad = ADManager.inst;
