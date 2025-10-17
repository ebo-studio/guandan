import { _decorator, log, native} from 'cc';
import { ZJStartListener, ZJLoadListener, ZJInteractionListener, ZJRewardListener } from '../ZJSdk';
const { ccclass, property } = _decorator;

@ccclass('ZJiOS')
export class ZJiOS {

    private static instance: ZJiOS;
    public initSDKStatus: boolean = false;

    private listeners: Map<AdType, {
        startListener?: ZJStartListener
        loadListener?: ZJLoadListener
        interactionListener?: ZJInteractionListener
        rewardListener?: ZJRewardListener
    }>

    static getInstance(): ZJiOS {
        if (this.instance == null) {
            this.instance = new ZJiOS()
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

    getSdkVersion(): string {
        return native.reflection.callStaticMethod("ZJiOSHelper", "getSdkVersion:", "");
    }

    initWithoutStart(appId: string): boolean {
        return native.reflection.callStaticMethod("ZJiOSHelper", "initWithoutStart:", appId); 
    }

    start(startListener: ZJStartListener): boolean {
        this.listeners.get(AdType.Start).startListener = startListener;
        return native.reflection.callStaticMethod("ZJiOSHelper", "start:", "");
    }

    setPersonalizedState(state: Number) {
        native.reflection.callStaticMethod("ZJiOSHelper", "persionalizedState:", state.toString());
    }

    setProgrammaticState(state: Number) {
        native.reflection.callStaticMethod("ZJiOSHelper", "programmaticRecommend:", state.toString());
    }

    loadSplashAd(posId: string, loadListener: ZJLoadListener) {
        this.listeners.get(AdType.Splash).loadListener = loadListener
        native.reflection.callStaticMethod("ZJiOSHelper", "loadSplashAd:", posId)
    }

    showSplashAd(interactionListener: ZJInteractionListener) {
        this.listeners.get(AdType.Splash).interactionListener = interactionListener;
        native.reflection.callStaticMethod("ZJiOSHelper", "showSplashAd:", "")
    }

    loadRewardedAd(posId: string, userId: string, isVolumeOn: boolean = true, extra: string, loadListener: ZJLoadListener) {
        this.listeners.get(AdType.Reward).loadListener = loadListener
        native.reflection.callStaticMethod("ZJiOSHelper", "loadRewardedAd:userId:videoMuted:extra:", posId, userId, isVolumeOn, extra);
    }


    showRewardedAd(interactionListener: ZJInteractionListener, rewardListener: ZJRewardListener) {
        this.listeners.get(AdType.Reward).interactionListener = interactionListener
        this.listeners.get(AdType.Reward).rewardListener = rewardListener
        native.reflection.callStaticMethod("ZJiOSHelper", "showRewardedAd:", "")
    }

    loadInterstitialAd(posId: string, isVolumeOn: boolean = true, loadListener: ZJLoadListener) {
        this.listeners.get(AdType.Interstitial).loadListener = loadListener
        native.reflection.callStaticMethod("ZJiOSHelper", "loadInterstitialAd:mutedIfCan:", posId, isVolumeOn)
    }

    showInterstitialAd(interactionListener: ZJInteractionListener) {
        this.listeners.get(AdType.Interstitial).interactionListener = interactionListener;
        native.reflection.callStaticMethod("ZJiOSHelper", "showInterstitialAd:", "")
    }

    // 全局原生调用JS
    onMessage(typeCode: Number, eventCode: Number, code: Number, message: string) {
    message = JSON.stringify(message);
    let adType = typeCode as AdType
        let event = eventCode as AdEvent
        let listener = this.listeners.get(adType)
        if (!listener) {
            return
        }
        if (adType == AdType.Start) {
            if (code == ErrCode.OK) {
                ZJiOS.getInstance().initSDKStatus = true;
                listener.startListener?.onStartSuccess()
            } else {
                ZJiOS.getInstance().initSDKStatus = false;
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
                listener.loadListener?.onAdLoaded("")
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

(window as any).ZJiOS = ZJiOS;


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