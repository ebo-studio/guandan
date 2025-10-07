// PangleAdManager.ts
import { _decorator, Component, sys, game, Node } from 'cc';
const { ccclass, property } = _decorator;

enum AdType {
  BANNER = 0,
  INTERSTITIAL = 1,
  REWARDED = 2,
}

export enum AdPosition {
  TOP = 0,
  BOTTOM = 1,
  CENTER = 2,
}

@ccclass('PangleAdManager')
export class PangleAdManager extends Component {
  private static _instance: PangleAdManager | null = null;
  private _initialized = false;

  public static get instance(): PangleAdManager {
    if (!this._instance) {
      // 动态创建一个常驻节点承载该组件
      const node = new Node('PangleAdManager');
      game.addPersistRootNode(node);
      this._instance = node.addComponent(PangleAdManager);
    }
    return this._instance!;
  }

  /** 初始化 Pangle SDK */
  public initialize(appId: string): boolean {
    if (this._initialized) {
      console.log('[Pangle] already initialized');
      return true;
    }

    if (!sys.isNative) {
      console.warn('[Pangle] only supports native platforms');
      return false;
    }

    try {
      if (sys.os === sys.OS.ANDROID) {
        // 统一类名，并把签名改成只传一个字符串参数
        // @ts-ignore
        jsb.reflection.callStaticMethod(
          'com/cocos/game/PAGRewardedAdManger',
          'initialize',
          '(Ljava/lang/String;)V',
          appId
        );
        this._initialized = true;
        return true;
      } else if (sys.os === sys.OS.IOS) {
        // 选择器一参：+ (void)initialize:(NSString*)appId;
        // @ts-ignore
        jsb.reflection.callStaticMethod('PangleAdapter', 'initialize:', appId);
        this._initialized = true;
        return true;
      }
    } catch (e) {
      console.error('[Pangle] initialize failed:', e);
    }
    return false;
  }

  /** 预加载激励视频 */
  public loadRewardedVideo(adUnitId: string, onSuccess?: () => void, onFail?: (err?: any) => void) {
    if (!this._initialized) {
      console.error('[Pangle] SDK not initialized');
      onFail?.('SDK_NOT_INITIALIZED');
      return;
    }
    if (!sys.isNative) return;

    try {
      if (sys.os === sys.OS.ANDROID) {
        // @ts-ignore
        jsb.reflection.callStaticMethod(
          'com/cocos/game/PAGRewardedAdManger',
          'loadRewardedVideo',
          '(Ljava/lang/String;)V',
          adUnitId
        );
        onSuccess?.();
      } else if (sys.os === sys.OS.IOS) {
        // @ts-ignore
        jsb.reflection.callStaticMethod('PangleAdapter', 'loadRewardedVideoWithAdUnitId:', adUnitId);
        onSuccess?.();
      }
    } catch (e) {
      console.error('[Pangle] load rewarded failed:', e);
      onFail?.(e);
    }
  }

  /** 展示激励视频（通过全局回调接收奖励/关闭） */
  public showRewardedVideo(adUnitId: string, onReward?: () => void, onClose?: () => void) {
    if (!this._initialized) {
      console.error('[Pangle] SDK not initialized');
      return;
    }
    if (!sys.isNative) return;

    // 将回调挂到 globalThis，原生侧 evalString 再去调用
    (globalThis as any).pangleRewardCallback = onReward;
    (globalThis as any).pangleCloseCallback = onClose;

    try {
      if (sys.os === sys.OS.ANDROID) {
        // @ts-ignore
        jsb.reflection.callStaticMethod(
          'com/cocos/game/PAGRewardedAdManger',
          'showRewardedVideo',
          '(Ljava/lang/String;)V',
          adUnitId
        );
      } else if (sys.os === sys.OS.IOS) {
        // @ts-ignore
        jsb.reflection.callStaticMethod('PangleAdapter', 'showRewardedVideoWithAdUnitId:', adUnitId);
      }
    } catch (e) {
      console.error('[Pangle] show rewarded failed:', e);
    }
  }

  /** Banner */
  public loadBanner(adUnitId: string, position: AdPosition) {
    if (!this._initialized) return;
    if (!sys.isNative || sys.os !== sys.OS.ANDROID) return;
    try {
      // @ts-ignore
      jsb.reflection.callStaticMethod(
        'com/cocos/game/PangleAdAdapter',
        'loadBanner',
        '(Ljava/lang/String;I)V',
        adUnitId,
        position
      );
    } catch (e) {
      console.error('[Pangle] load banner failed:', e);
    }
  }

  public showBanner() {
    if (!this._initialized) return;
    if (!sys.isNative || sys.os !== sys.OS.ANDROID) return;
    try {
      // @ts-ignore
      jsb.reflection.callStaticMethod('com/cocos/panglead/PangleAdAdapter', 'showBanner', '()V');
    } catch (e) {
      console.error('[Pangle] show banner failed:', e);
    }
  }

  public hideBanner() {
    if (!this._initialized) return;
    if (!sys.isNative || sys.os !== sys.OS.ANDROID) return;
    try {
      // @ts-ignore
      jsb.reflection.callStaticMethod('com/cocos/panglead/PangleAdAdapter', 'hideBanner', '()V');
    } catch (e) {
      console.error('[Pangle] hide banner failed:', e);
    }
  }

  /** 插屏 */
  public loadInterstitial(adUnitId: string) {
    if (!this._initialized) return;
    if (!sys.isNative || sys.os !== sys.OS.ANDROID) return;
    try {
      // @ts-ignore
      jsb.reflection.callStaticMethod(
        'com/cocos/game/PangleAdAdapter',
        'loadInterstitial',
        '(Ljava/lang/String;)V',
        adUnitId
      );
    } catch (e) {
      console.error('[Pangle] load interstitial failed:', e);
    }
  }

  public showInterstitial(adUnitId: string) {
    if (!this._initialized) return;
    if (!sys.isNative || sys.os !== sys.OS.ANDROID) return;
    try {
      // @ts-ignore
      jsb.reflection.callStaticMethod(
        'com/cocos/game/PangleAdAdapter',
        'showInterstitial',
        '(Ljava/lang/String;)V',
        adUnitId
      );
    } catch (e) {
      console.error('[Pangle] show interstitial failed:', e);
    }
  }

  public isSupportAdType(_adType: AdType): boolean {
    return sys.isNative;
  }

  /** 展示激励视频（通过全局回调接收奖励/关闭） */
  public showAppodealVideo(onReward?: () => void, onClose?: () => void) {
    if (!this._initialized) {
      console.error('[Pangle] SDK not initialized');
      return;
    }
    if (!sys.isNative) return;

    // 将回调挂到 globalThis，原生侧 evalString 再去调用
    (globalThis as any).pangleRewardCallback = onReward;
    (globalThis as any).pangleCloseCallback = onClose;

    try {
      if (sys.os === sys.OS.ANDROID) {
        // @ts-ignore
        jsb.reflection.callStaticMethod(
          'com/cocos/game/PAGRewardedAdManger',
          'showAppodealVideo',
          '(Ljava/lang/String;)V',
        );
      } else if (sys.os === sys.OS.IOS) {
        // @ts-ignore
        jsb.reflection.callStaticMethod('PangleAdapter', 'showRewardedVideoWithAdUnitId:', adUnitId);
      }
    } catch (e) {
      console.error('[Pangle] show rewarded failed:', e);
    }
  }
}
