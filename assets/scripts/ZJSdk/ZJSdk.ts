import { _decorator, Component, Node, sys } from 'cc';
import { ZJConfig } from './ZJConfig';
import { ZJAndroid } from './Android/ZJAndroid';
import { ZJCustomController } from './ZJCustomController';
import { ZJiOS } from './iOS/ZJiOS';
const { ccclass } = _decorator;

function isAndroid() {
    return sys.os == sys.OS.ANDROID;
}

function isIOS() {
    return sys.os == sys.OS.IOS
}

function adMethod(method: Function, listener: ZJLoadListener | ZJInteractionListener, ...args: any[]): void {
    if (sys.isNative) {
        if (isAndroid()) {
            method.apply(ZJAndroid.getInstance(), args)
            return
        }
        if (isIOS()) {
            method.apply(ZJiOS.getInstance(), args);
            return;
        }
    }
    listener.onError(0, "暂不支持")
}

function validMethod<T>(method: Function): T {
    if (sys.isNative) {
        if (isAndroid()) {
            return method?.apply(ZJAndroid.getInstance()) as T
        }
    }
    return false as T
}

@ccclass('ZJSdk')
export class ZJSdk {

    static getSdkVersion(): string {
        if (sys.isNative) {
            if (isAndroid()) {
                return ZJAndroid.getInstance().getSdkVersion()
            }
            if (isIOS()) {
                return ZJiOS.getInstance().getSdkVersion();
            }
        }
        return "unknown"
    }

    /**
     * 初始化，可以在用户同意隐私政策前调用
     * @param config 媒体ID 或 完整配置
     * @returns 是否调用成功
     */
    static initWithoutStart(config: string | ZJConfig): boolean {
        if (typeof config === 'string') {
            config = new ZJConfig(config)
        }
        if (sys.isNative) {
            if (isAndroid()) {
                return ZJAndroid.getInstance().initWithoutStart(config)
            }
            if (isIOS()) {
                return ZJiOS.getInstance().initWithoutStart(config.appId);
            }
        }
        return false
    }

    /**
     * 启动SDK，需要在用户同意隐私政策后调用
     * @returns 是否调用成功
     */
    static start(startListener: ZJStartListener): boolean {
        if (sys.isNative) {
            if (isAndroid()) {
                return ZJAndroid.getInstance().start(startListener)
            }
            if (isIOS()) {
                // ios直接初始化
                ZJiOS.getInstance().start(startListener);
            }
        }
        return false
    }

    /**
     * 个性化推荐广告配置
     * @param state 1->屏蔽个性化推荐广告 | 0、所有非1的值 -> 不屏蔽个性化推荐广告
     */
    static setPersonalizedState(state: Number) {
        if (sys.isNative) {
            if (isAndroid()) {
                ZJAndroid.getInstance().setPersonalizedState(state)
            }
            if (isIOS()) {
                ZJiOS.getInstance().setPersonalizedState(state);
            }
        }
    }

    /**
     * 程序化推荐广告配置
     * @param state 1->屏蔽程序化推荐广告 | 0、所有非1的值 -> 不屏蔽程序化推荐广告
     */
    static setProgrammaticState(state: Number) {
        if (sys.isNative) {
            if (isAndroid()) {
                ZJAndroid.getInstance().setProgrammaticState(state)
            }
            if (isIOS()) {
                ZJiOS.getInstance().setProgrammaticState(state);
            }
        }
    }

    /**
     * 隐私控制更新
     *
     * @param customController 
     */
    static onCustomControllerUpdate(customController: ZJCustomController): boolean {
        if (sys.isNative) {
            if (isAndroid()) {
                return ZJAndroid.getInstance().onCustomControllerUpdate(customController)
            }
        }
        return false
    }

    /**
     * 加载开屏广告
     * @param posId         广告位ID
     * @param loadListener  加载回调
     */
    static loadSplashAd(posId: string, loadListener: ZJLoadListener) {
        if (isAndroid()) {
            adMethod(ZJAndroid.getInstance().loadSplashAd, loadListener, posId, loadListener)
        }
        if (isIOS()) {
            adMethod(ZJiOS.getInstance().loadSplashAd, loadListener, posId, loadListener);
        }
    }

    /**
     * 校验开屏广告是否有效
     * @returns 是否有效，有效时可以调用show方法展示，无效时需要重新加载
     */
    static isSplashAdValid(): boolean {
        return validMethod(ZJAndroid.getInstance().isSplashAdValid)
    }

    /**
     * 展示开屏广告
     * @param interactionListener 交互回调
     */
    static showSplashAd(interactionListener: ZJInteractionListener) {
        if (isAndroid()) {
            adMethod(ZJAndroid.getInstance().showSplashAd, interactionListener, interactionListener)
        }
        if (isIOS()) {
            adMethod(ZJiOS.getInstance().showSplashAd, interactionListener, interactionListener)
        }
    }

    /**
     * 加载激励广告
     * @param posId         广告位ID
     * @param userId        用户ID
     * @param loadListener  加载回调
     * @param extra         透传信息
     * @param isVolumeOn    是否开启声音
     */
    static loadRewardedAd(posId: string, userId: string, loadListener: ZJLoadListener, isVolumeOn: boolean = true, extra: string = "") {
        if (isAndroid()) {
            adMethod(ZJAndroid.getInstance().loadRewardedAd, loadListener, posId, userId, isVolumeOn, extra, loadListener)
        }
        if (isIOS()) {
            adMethod(ZJiOS.getInstance().loadRewardedAd, loadListener, posId, userId, isVolumeOn, extra, loadListener)
        }
    }

    /**
     * 校验激励广告是否有效
     * @returns 是否有效，有效时可以调用show方法展示，无效时需要重新加载
     */
    static isRewardedAdValid(): boolean {
        return validMethod(ZJAndroid.getInstance().isRewardedAdValid)
    }

    /**
     * 展示激励广告
     * @param interactionListener 交互回调
     * @param rewardListener 奖励回调
     */
    static showRewardedAd(interactionListener: ZJInteractionListener, rewardListener: ZJRewardListener) {
        if (isAndroid()) {
            adMethod(ZJAndroid.getInstance().showRewardedAd, interactionListener, interactionListener, rewardListener)
        }
        if (isIOS()) {
            adMethod(ZJiOS.getInstance().showRewardedAd, interactionListener, interactionListener, rewardListener)
        }
    }

    /**
     * 加载插屏广告
     * @param posId         广告位ID
     * @param loadListener  加载回调
     * @param isVolumeOn    是否开启声音
     */
    static loadInterstitialAd(posId: string, loadListener: ZJLoadListener, isVolumeOn: boolean = true) {
        if (isAndroid()) {
            adMethod(ZJAndroid.getInstance().loadInterstitialAd, loadListener, posId, isVolumeOn, loadListener)
        }
        if (isIOS()) {
            adMethod(ZJiOS.getInstance().loadInterstitialAd, loadListener, posId, isVolumeOn, loadListener)
        }
    }

    /**
     * 校验插屏是否有效
     * @returns 是否有效，有效时可以调用show方法展示，无效时需要重新加载
     */
    static isInterstitialAdValid(): boolean {
        return validMethod(ZJAndroid.getInstance().isInterstitialAdValid)
    }

    /**
     * 展示插屏广告
     * @param interactionListener 交互回调
     */
    static showInterstitialAd(interactionListener: ZJInteractionListener) {
        if (isAndroid()) {
            adMethod(ZJAndroid.getInstance().showInterstitialAd, interactionListener, interactionListener)
        }
        if (isIOS()) {
            adMethod(ZJiOS.getInstance().showInterstitialAd, interactionListener, interactionListener)
        }
    }

}

/**
 * 启动回调
 */
export interface ZJStartListener {

    /**
     * 启动成功 
     */
    onStartSuccess(): void;

    /**
     * 启动失败
     * @param code  错误码
     * @param msg   错误信息
     */
    onStartFailed(code: Number, message: string): void;
}

/**
 * 加载回调
 * 
 * 
 */
export interface ZJLoadListener {

    /**
     * 加载成功
     */
    onAdLoaded: (msg: string) => void,

    /**
     * 加载失败
     * @param errCode 错误码
     * @param errMsg  错误信息 
     */
    onError: (errCode: Number, errMsg: string) => void
}

/**
 * 交互回调
 */
export interface ZJInteractionListener {

    /**
     * 展示失败
     * @param errCode 错误码
     * @param errMsg  错误信息
     */
    onError: (errCode: Number, errMsg: string) => void,

    /**
     * 展示成功
     * 只回调一次
     */
    onAdShow: () => void,

    /**
     * 广告点击
     * 会多次回调
     */
    onAdClick: () => void,

    /**
     * 广告关闭
     */
    onAdClose: () => void

}

/**
 * 发奖回调
 */
export interface ZJRewardListener {

    /**
     * 广告发奖
     */
    onAdReward: (extra: any) => void,

}