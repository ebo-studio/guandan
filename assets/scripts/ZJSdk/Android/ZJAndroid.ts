import { _decorator, native } from 'cc';
import { ZJConfig } from '../ZJConfig';
import { ZJInteractionListener, ZJLoadListener, ZJRewardListener, ZJStartListener } from '../ZJSdk';
import { ZJCustomController } from '../ZJCustomController';
const { ccclass } = _decorator;

@ccclass('ZJAndroid')
export class ZJAndroid {

    private static instance: ZJAndroid

    private listeners: Map<AdType, {
        startListener?: ZJStartListener
        loadListener?: ZJLoadListener
        interactionListener?: ZJInteractionListener
        rewardListener?: ZJRewardListener
    }>

    static getInstance(): ZJAndroid {
        if (this.instance == null) {
            this.instance = new ZJAndroid()
        }
        return this.instance
    }

    constructor() {
        this.listeners = new Map()
        this.listeners.set(AdType.Start, {})
        this.listeners.set(AdType.Splash, {})
        this.listeners.set(AdType.Reward, {})
        this.listeners.set(AdType.Interstitial, {})
    }

    static helperClass = "com/zj/zjsdk/cocos/ZJHelper"

    getSdkVersion(): string {
        return native.reflection.callStaticMethod(ZJAndroid.helperClass, "getSdkVersion", "()Ljava/lang/String;")
    }

    initWithoutStart(config: ZJConfig): boolean {
        return native.reflection.callStaticMethod(ZJAndroid.helperClass, "initWithoutStart", "(Ljava/lang/String;)Z", JSON.stringify(config))
    }

    start(startListener: ZJStartListener): boolean {
        this.listeners.get(AdType.Start).startListener = startListener
        native.reflection.callStaticMethod(ZJAndroid.helperClass, "start", "()V")
        return true
    }

    setPersonalizedState(state: Number) {
        native.reflection.callStaticMethod(ZJAndroid.helperClass, "setPersonalizedState", "(I)V", state)
    }

    setProgrammaticState(state: Number) {
        native.reflection.callStaticMethod(ZJAndroid.helperClass, "setProgrammaticState", "(I)V", state)
    }

    onCustomControllerUpdate(config: ZJCustomController) {
        return native.reflection.callStaticMethod(ZJAndroid.helperClass, "onCustomControllerUpdate", "(Ljava/lang/String;)Z", JSON.stringify(config))
    }

    loadSplashAd(posId: string, loadListener: ZJLoadListener) {
        this.listeners.get(AdType.Splash).loadListener = loadListener
        native.reflection.callStaticMethod(ZJAndroid.helperClass, "loadSplashAd", "(Ljava/lang/String;)V", posId)
    }

    isSplashAdValid(): boolean {
        return native.reflection.callStaticMethod(ZJAndroid.helperClass, "isSplashAdValid", "()Z")
    }

    showSplashAd(interactionListener: ZJInteractionListener) {
        this.listeners.get(AdType.Splash).interactionListener = interactionListener
        if (!this.isSplashAdValid()) {
            this.onMessage(AdType.Splash, AdEvent.ShowError, ErrCode.AdInvalid, Consts.MSG_AD_INVALID)
            return
        }
        native.reflection.callStaticMethod(ZJAndroid.helperClass, "showSplashAd", "()V")
    }

    loadRewardedAd(posId: string, userId: string, isVolumeOn: boolean = true, extra: string, loadListener: ZJLoadListener) {
        this.listeners.get(AdType.Reward).loadListener = loadListener
        native.reflection.callStaticMethod(ZJAndroid.helperClass, "loadRewardedAd", "(Ljava/lang/String;Ljava/lang/String;ZLjava/lang/String;)V", posId, userId, isVolumeOn, extra)
    }

    isRewardedAdValid(): boolean {
        return native.reflection.callStaticMethod(ZJAndroid.helperClass, "isRewardedAdValid", "()Z")
    }

    showRewardedAd(interactionListener: ZJInteractionListener, rewardListener: ZJRewardListener) {
        this.listeners.get(AdType.Reward).interactionListener = interactionListener
        this.listeners.get(AdType.Reward).rewardListener = rewardListener
        if (!this.isRewardedAdValid()) {
            this.onMessage(AdType.Reward, AdEvent.ShowError, ErrCode.AdInvalid, Consts.MSG_AD_INVALID)
            return
        }
        native.reflection.callStaticMethod(ZJAndroid.helperClass, "showRewardedAd", "()V")
    }

    loadInterstitialAd(posId: string, isVolumeOn: boolean = true, loadListener: ZJLoadListener) {
        this.listeners.get(AdType.Interstitial).loadListener = loadListener
        native.reflection.callStaticMethod(ZJAndroid.helperClass, "loadInterstitialAd", "(Ljava/lang/String;Z)V", posId, isVolumeOn)
    }

    isInterstitialAdValid(): boolean {
        return native.reflection.callStaticMethod(ZJAndroid.helperClass, "isInterstitialAdValid", "()Z")
    }

    showInterstitialAd(interactionListener: ZJInteractionListener) {
        this.listeners.get(AdType.Interstitial).interactionListener = interactionListener
        if (!this.isInterstitialAdValid()) {
            this.onMessage(AdType.Interstitial, AdEvent.ShowError, ErrCode.AdInvalid, Consts.MSG_AD_INVALID)
            return
        }
        native.reflection.callStaticMethod(ZJAndroid.helperClass, "showInterstitialAd", "()V")
    }

    onMessage(typeCode: Number, eventCode: Number, code: Number, message: string) {
        let adType = typeCode as AdType
        let event = eventCode as AdEvent
        let listener = this.listeners.get(adType)
        if (!listener) {
            return
        }
        if (adType == AdType.Start) {
            if (code == ErrCode.OK) {
                listener.startListener?.onStartSuccess()
            } else {
                listener.startListener?.onStartFailed(code, message)
            }
            listener.startListener = undefined
            return
        }
        switch (event) {
            case AdEvent.LoadError:
                listener.loadListener?.onError(code, message)
                listener.loadListener = undefined
                break
            case AdEvent.LoadSuccess:
                listener.loadListener?.onAdLoaded(message)
                listener.loadListener = undefined
                break
            case AdEvent.ShowError:
                listener.interactionListener?.onError(code, message)
                listener.interactionListener = undefined
                break
            case AdEvent.Show:
                listener.interactionListener?.onAdShow()
                break
            case AdEvent.Click:
                listener.interactionListener?.onAdClick()
                break
            case AdEvent.Reward:
                listener.rewardListener?.onAdReward(JSON.parse(message))
                listener.rewardListener = undefined
                break
            case AdEvent.Close:
                listener.interactionListener?.onAdClose()
                listener.interactionListener = undefined
                break
        }
    }
}

/**
 * 广告类型
 */
enum AdType {
    // 启动SDK
    Start,
    // 开屏广告
    Splash,
    // 激励广告
    Reward,
    // 插屏广告
    Interstitial,
}

/**
 * 事件
 */
enum AdEvent {
    // 加载失败
    LoadError,
    // 加载成功
    LoadSuccess,
    // 展示失败
    ShowError,
    // 曝光
    Show,
    // 点击
    Click,
    // 发奖
    Reward,
    // 关闭
    Close,
}

/**
 * 错误码
 */
enum ErrCode {
    OK = 0,
    AdInvalid = -1,
}

class Consts {
    /* 错误信息 */
    static MSG_AD_INVALID = "广告无效，请重新加载"
}

// @ts-ignore
window.ZJAndroid = ZJAndroid