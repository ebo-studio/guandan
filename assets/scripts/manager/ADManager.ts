import { sys } from "cc";
import { GlobalData } from "./GlobalData";
import { GameSocket } from "./GameSocket";
import { PbManager } from "../proto/PbManager";

export enum AdPlatform {
    KS = "ks",
    GDT = "gdt",
    PANGLE = 'pangel',
    BAIDU = 'baidu'
}

// =============================
// 每日次数限制器（新增）
// =============================
class DailyCounter {
    private maxCount = 60
    private key = "ad_limit_data";

    private data = {
        date: "",
        counts: {
            ks: 0,
            gdt: 0,
            pangel: 0,
            baidu: 0
        }
    };

    constructor() {
        this.load();
        this.checkReset();
    }

    private today() {
        const d = new Date();
        return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
    }

    private checkReset() {
        const t = this.today();
        if (this.data.date !== t) {
            this.data.date = t;
            this.data.counts = { ks: 0, gdt: 0, pangel: 0, baidu: 0 };
            this.save();
        }
    }

    private save() {
        sys.localStorage.setItem(this.key, JSON.stringify(this.data));
    }

    private load() {
        const raw = sys.localStorage.getItem(this.key);
        if (!raw) return;
        try {
            this.data = JSON.parse(raw);
        } catch { }
    }

    canPlay(platform: AdPlatform): boolean {
        this.checkReset();
        return this.data.counts[platform] < this.maxCount;
    }

    add(platform: AdPlatform) {
        this.checkReset();
        this.data.counts[platform]++;
        this.save();
    }

    remain(platform: AdPlatform) {
        this.checkReset();
        return this.maxCount - this.data.counts[platform];
    }

    pickPlatform(platforms: AdPlatform[]): AdPlatform | null {
        this.checkReset();

        const available = platforms.filter(p => this.canPlay(p));
        if (available.length === 0) return null;

        available.sort((a, b) => {
            return this.data.counts[a] - this.data.counts[b];
        });

        return available[0];
    }
}

export class ADManager {
    private static _inst: ADManager;
    public static get inst() {
        if (!this._inst) this._inst = new ADManager();
        return this._inst;
    }

    private counter = new DailyCounter();

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
    // ⭐ 冷却相关（新增字段）
    // =============================
    private failCount = {
        ks: 0,
        gdt: 0,
        pangel: 0,
        baidu: 0
    };

    private banUntil = {
        ks: 0,
        gdt: 0,
        pangel: 0,
        baidu: 0
    };

    // =============================
    // 激励视频
    // =============================

    private _rewardCallback: (() => void) | null = null;
    private _extraRewardCallback: ((type: number) => void) | null = null;
    private _failCallback: (() => void) | null = null;
    private _loadCompleteCallback: (() => void) | null = null;


    private rewardPlatforms: AdPlatform[] = [
        AdPlatform.GDT,
        AdPlatform.KS,
        AdPlatform.PANGLE,
        AdPlatform.BAIDU
    ];

    private tryPlatforms: AdPlatform[] = [];

    public showRewardVideo(callback?: () => void, failCallback?: () => void, loadCompleteCallback?: () => void, extraCallback?: (type: number) => void) {
        this._rewardCallback = callback || null;
        this._extraRewardCallback = extraCallback || null;
        this._failCallback = failCallback || null
        this._loadCompleteCallback = loadCompleteCallback || null;

        if (!this._isAndroidNative()) {
            this._rewardCallback?.();
            return;
        }

        // @ts-ignore
        // jsb.reflection.callStaticMethod("com/cocos/game/AppActivity", "showBaiduRewardVideo", "()V");
        // return;
        // jsb.reflection.callStaticMethod("com/cocos/game/AppActivity", "showKsRewardVideo", "()V");
        let allPlatforms: AdPlatform[] = [AdPlatform.GDT, AdPlatform.KS, AdPlatform.PANGLE];
        if (this.isSamsung) {
            console.warn("检测到三星手机 → 自动禁用百度广告");
            allPlatforms = [AdPlatform.GDT, AdPlatform.KS, AdPlatform.PANGLE]
        }
        else {
            allPlatforms = [AdPlatform.GDT, AdPlatform.KS, AdPlatform.PANGLE, AdPlatform.BAIDU];
        }

        const selected = this.counter.pickPlatform(allPlatforms);
        if (!selected) {
            this._failCallback?.();
            return;
        }

        console.log('今日选择播放平台=', selected);

        this.tryPlatforms = allPlatforms.filter(p => p !== selected).sort(() => Math.random() - 0.5);
        this.tryPlatforms.unshift(selected);

        console.log('本次尝试顺序', this.tryPlatforms);

        this._playNextPlatform();
    }

    private _playNextPlatform() {
        if (this.tryPlatforms.length === 0) {
            console.warn("所有广告平台都失败了");
            this._failCallback?.();
            return;
        }

        const platform = this.tryPlatforms.shift()!;
        console.log("尝试播放平台：", platform);

        // ⭐ 新增：冷却判断
        const now = Date.now();
        if (this.banUntil[platform] > now) {
            console.log(platform, "处于冷却中，跳过");
            this._playNextPlatform();
            return;
        }

        if (!this.counter.canPlay(platform)) {
            console.log("平台今日次数已满，跳过：", platform);
            this._playNextPlatform();
            return;
        }

        if (platform === AdPlatform.GDT) {
            // @ts-ignore
            jsb.reflection.callStaticMethod("com/cocos/game/AppActivity", "showGDTRewardVideo", "()V");
        }
        else if (platform === AdPlatform.KS) {
            // @ts-ignore
            jsb.reflection.callStaticMethod("com/cocos/game/AppActivity", "showKsRewardVideo", "()V");
        }
        else if (platform === AdPlatform.PANGLE) {
            // @ts-ignore
            jsb.reflection.callStaticMethod(
                "com/cocos/game/AppActivity",
                "showPangleRewardVideo",
                "(Ljava/lang/String;Ljava/lang/String;)V",
                GlobalData.userInfo.user_id,
                "reward"
            );
        }
        else if (platform === AdPlatform.BAIDU) {
            // @ts-ignore
            jsb.reflection.callStaticMethod("com/cocos/game/AppActivity", "showBaiduRewardVideo", "()V");
        }
    }

    /** 平台失败回到这个逻辑 */
    public onRewardVideoFailPlatform(platform: AdPlatform, msg: string) {
        console.log("平台失败：", platform, msg);

        // ⭐ 新增：失败次数统计
        this.failCount[platform]++;

        // ⭐ 同平台连续 3 次失败 → 冷却 3 分钟
        if (this.failCount[platform] >= 3) {
            this.banUntil[platform] = Date.now() + 3 * 60 * 1000;
            this.failCount[platform] = 0;
            console.log(`${platform} 连续失败，进入 3 分钟冷却`);
        }

        this._playNextPlatform();
    }

    private bindNativeCallbacks() {
        (window as any).onKsRewarded = () => {
            this.failCount.ks = 0;     // ⭐ 清零
            this.counter.add(AdPlatform.KS);
            this._rewardCallback?.();
        };

        (window as any).onKsRewardFail = () => {
            this.onRewardVideoFailPlatform(AdPlatform.KS, 'msg');
        };

        (window as any).onGDTRewarded = () => {
            this.failCount.gdt = 0;   // ⭐ 清零
            this.counter.add(AdPlatform.GDT);
            this._rewardCallback?.();
        };

        (window as any).onAdLoadComplete = () => {
            this._loadCompleteCallback?.();
        }

        (window as any).onGDTAdFail = (msg: string) => {
            this.onRewardVideoFailPlatform(AdPlatform.GDT, msg);
        };

        (window as any).onGDTInterstitialFail = (msg: string) => {
            this.onRewardFailPlatform(AdPlatform.GDT, msg);
        };

        (window as any).onKsInterstitialFail = () => {
            this.onRewardFailPlatform(AdPlatform.KS, '');
        }

        (window as any).onPangleInterstitialFail = () => {
            this.onRewardFailPlatform(AdPlatform.PANGLE, '');
        }

        (window as any).onPangleRewarded = () => {
            this.failCount.pangel = 0;  // ⭐ 清零
            this.counter.add(AdPlatform.PANGLE);
            this._rewardCallback?.();
        };

        (window as any).onPangleRewardFail = () => {
            this.onRewardVideoFailPlatform(AdPlatform.PANGLE, "fail");
        };

        (window as any).onBaiduReward = () => {
            this.failCount.baidu = 0;
            this.counter.add(AdPlatform.BAIDU);
            this._rewardCallback?.();
        };

        (window as any).onBaiduRewardFail = () => {
            // this._failCallback?.();
            this.onRewardVideoFailPlatform(AdPlatform.BAIDU, "fail");
        }

        (window as any).onBaiduInterstitialFail = () => {
            this.onRewardFailPlatform(AdPlatform.BAIDU, "");
        }

        (window as any).nativeHearBeat = () => {
            // try {
            //     if (typeof GameSocket.getIsConnect !== "function") {
            //         console.warn("GameSocket.getIsConnect 不是方法！");
            //         return;
            //     }

            //     if (!GameSocket.getIsConnect()) {
            //         console.log('HeartBeat: 游戏 socket 断了');
            //         return;
            //     }

            //     const buf = PbManager.instance.sendMsg(GlobalData.C2S_Event.Ping, null);
            //     GameSocket.send(buf);
            // } catch (e) {
            //     console.error("nativeHeartBeat ERROR:", e);
            // }
            // 只有在广告中，才用原生心跳兜底
            if (!GlobalData.userInfo.isAdshowing) return;
            console.log('HeartBeat', '原生心跳');
            GameSocket.sendPingOnce();
        }

        // (window as any).onAdClose = () => {
        //     // GameSocket.isAdshowing = false;
        //     GlobalData.userInfo.isAdshowing = false;
        //     // ⭐ 立刻补一次 Ping（非常关键！！）
        //     GameSocket.sendPingOnce();
        //     GameSocket.startHeart();
        // }

        // (window as any).onAdShow = () => {
        //     // GameSocket.isAdshowing = true;
        //     // GameSocket.startHeart();
        //     GlobalData.userInfo.isAdshowing = true;
        //     GameSocket.stopHeart();

        // }

        (window as any).onWindowonStart = () => {
            GlobalData.userInfo.isAdshowing = false;
            // ⭐ 立刻补一次 Ping（非常关键！！）
            GameSocket.sendPingOnce();
            GameSocket.startHeart();
        }

        (window as any).onWindowonStop = () => {
            GlobalData.userInfo.isAdshowing = true;
            GameSocket.stopHeart();
        }
    }

    // =============================
    // 插屏广告（保持原样，不改你任何逻辑）
    // =============================
    public showInterstitial() {
        if (!this._isAndroidNative()) {
            return;
        }
        try {
            // @ts-ignore
            // jsb.reflection.callStaticMethod("com/cocos/game/AppActivity", "showPangleInterstitial", "()V");
            // return
            const p = this.rewardPlatforms[0];

            if (p === AdPlatform.GDT) {
                // @ts-ignore
                jsb.reflection.callStaticMethod("com/cocos/game/AppActivity", "showGDTInterstitial", "()V");
            } else if (p === AdPlatform.KS) {
                // @ts-ignore
                jsb.reflection.callStaticMethod("com/cocos/game/AppActivity", "showKsInterstitial", "()V");
            } else if (p === AdPlatform.PANGLE) {
                // @ts-ignore
                jsb.reflection.callStaticMethod("com/cocos/game/AppActivity", "showPangleInterstitial", "()V");
            } else if (p === AdPlatform.BAIDU) {
                // @ts-ignore
                jsb.reflection.callStaticMethod("com/cocos/game/AppActivity", "showBaiduInterstitial", "()V");
            }
        } catch (e) {

        }
    }

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

        this.rewardPlatforms = this.rewardPlatforms.filter(p => p !== platform);

        this.showInterstitial();
    }

    // private isSamsungDevice(): boolean {
    //     if (!this._isAndroidNative()) return false;

    //     try {
    //         // @ts-ignore
    //         const info = jsb.device.getDeviceInfo();
    //         const brand = info?.brand?.toLowerCase() || "";
    //         return brand.includes("samsung");
    //     } catch (e) {
    //         return false;
    //     }
    // }

    private get isSamsung(): boolean {
        if (!sys.isNative || sys.os !== sys.OS.ANDROID) return false;

        try {
            // @ts-ignore
            const brand = jsb.reflection.callStaticMethod(
                "com/cocos/game/AppActivity",
                "getDeviceBrand",
                "()Ljava/lang/String;"
            );
            // @ts-ignore
            const model = jsb.reflection.callStaticMethod(
                "com/cocos/game/AppActivity",
                "getDeviceModel",
                "()Ljava/lang/String;"
            );

            const br = (brand || "").toLowerCase();
            const md = (model || "").toLowerCase();

            console.log("brand =", br, "model=", md);

            return br.includes("samsung") || md.startsWith("sm-");
        } catch (e) {
            return false;
        }
    }
}

export const ad = ADManager.inst;
