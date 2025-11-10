console.log("main run " + Date.now())


import "./apeng.js"

import { Asset, sys } from "cc"
import { EDITOR } from "cc/env"
import { TConfigFileName, ConfigFileName } from "../../app/Config"
import { initData } from "../../app/GameDefine"

import { LogicModule } from "./module/LogicModule"
import { GameTypeModule } from "./module/GameTypeModule.js"
import { ZJSdk } from "../../scripts/ZJSdk/ZJSdk"
import { SignInManager } from "../../scripts/manager/SignInManager"
import { GlobalData } from "../../scripts/manager/GlobalData"
import { UIManager } from "../../scripts/manager/UIManager"
import { UIConfig } from "../../scripts/manager/UIConfig"
import { PangleAdManager } from "../../scripts/common/PangleAdManager.js"
import { md5 } from "../../scripts/common/md5"
import { UrlConfig } from "../../scripts/manager/UrlConfig"


/**配置 */
export let _config_: apeng.ConfigHelper<TConfigFileName> = null!

export let _scene: apeng.SceneModule = null!
export let _ui: apeng.UIModule = null!
export let _audio: apeng.AudioModule = null!
export let _gm: apeng.GmModule = null!
export let _guide: apeng.GuideModule = null!
export let _language: apeng.LanguageModule = null!
export let _login: apeng.LoginModule = null!
export let _main: apeng.MainModule = null!
export let _platform: apeng.PlatformModule = null!
export let _privacy: apeng.PrivacyModule = null!
export let _resouces: apeng.ResoucesModule = null!
export let _timer: apeng.TimerModule = null!
export let _prop: apeng.PropModule = null!
export let _rank: apeng.RankModule = null!

export let _gameType: GameTypeModule = null!
export let _logic: LogicModule = null!

// if (!EDITOR) {
//     // 等待其他模块装载器加入
//     setTimeout(() => {
//         const { initCore, EInitCoreState } = apeng
//         // 初始化框架
//         initCore(initData, (state) => {
//             switch (state) {
//                 case EInitCoreState.init:
//                     _scene = apeng._scene
//                     _ui = apeng._ui
//                     _audio = apeng._audio
//                     _gm = apeng._gm
//                     _guide = apeng._guide
//                     _language = apeng._language
//                     _login = apeng._login
//                     _main = apeng._main
//                     _platform = apeng._platform
//                     _privacy = apeng._privacy
//                     _resouces = apeng._resouces
//                     _timer = apeng._timer
//                     _prop = apeng._prop
//                     _rank = apeng._rank

//                     _logic = moduleMgr.get(EModuleType.logic)
//                     _gameType = moduleMgr.get(EModuleType.gameType)
//                     break
//                 case EInitCoreState.config:
//                     _config_ = apeng._config_ as any
//                     break
//             }
//         })
//     })
// }

let inited = false;
export function boot() {
    if (inited) return;
    inited = true;
}

export function initApeng() {
    const { initCore, EInitCoreState, moduleMgr } = apeng;
    console.log("[Main] boot, calling apeng.initCore");

    initCore(initData, (state: number) => {
        console.log("[Main] apeng state =", state);
        switch (state) {
            case EInitCoreState.init:
                _scene = apeng._scene
                _ui = apeng._ui
                _audio = apeng._audio
                _gm = apeng._gm
                _guide = apeng._guide
                _language = apeng._language
                _login = apeng._login
                _main = apeng._main
                _main.showVideo = (report: string, complete: () => void, share?: boolean, shareFail?: () => void) => {
                    if (sys.os == sys.OS.ANDROID) {
                        _ui.Loading.wait(true)
                        SignInManager.getRemainingAds((data) => {
                            if (GlobalData.userInfo.ad_watch_count >= 30) {
                                _ui.Loading.wait(false)
                                _ui.dialogue(
                                    "当前看视频已达上限,是否扣除5积分获得道具",
                                    {
                                        text: "取消",
                                        onClick: () => {
                                            // _platform.instance.killGame()
                                        },
                                    },
                                    {
                                        text: "确认",
                                        color: "darkBlue",
                                        onClick: () => {
                                            if(GlobalData.userInfo.score < 5) {
                                                _ui.tip('积分不足');
                                                return;
                                            }
                                            const secretKey = "a0b6ecfc6aa8457cb10c7c798c46ac1e"; // 固定秘钥
                                            const userId = GlobalData.userInfo.user_id;             // 当前用户ID
                                            const time = Math.floor(Date.now() / 1000);             // 秒级时间戳
                                            const sign = md5(`${time}${userId}${secretKey}`);       // 签名生成

                                            const url = `${UrlConfig.getHttpUrl()}api/User/deductGold`;
                                            const postData = {
                                                token: GlobalData.loginInfo.token,
                                                userId: userId,
                                                time: time,
                                                sign: sign,
                                                amount: 500
                                            };

                                            GlobalData.postWithFetch(url, postData)
                                                .then(data => {
                                                    // UIManager.Instace.hideUI(UIConfig.WaitItemKey);
                                                    GlobalData.requestGetUserInfo({
                                                        success: () => {

                                                        }
                                                    });
                                                    complete?.();
                                                    _logic.emit(_logic.EventType.CHANGE_SCORE)
                                                })
                                                .catch(err => {
                                                    console.error('deductGold error:', err);

                                                });
                                        },
                                    },
                                )
                                // UIManager.Instace.hideUI(UIConfig.WaitItemKey);
                                // UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: "今日已达观看上限" });
                            }
                            else {
                                // UIManager.Instace.showUI({ path: UIConfig.WaitItemKey, data: { opacity: 0.5, des: "视频准备中,请稍后" } });
                                ZJSdk.loadRewardedAd('Prvav5lzty4e', GlobalData.userInfo.user_id.toString(), {
                                    onAdLoaded(msg) {
                                        // onRequestFinish()
                                        let ecpm = typeof msg === 'string' && msg.length > 0 ? JSON.parse(msg).ecpm : 0
                                        console.log(`激励广告加载成功, 价格为${ecpm}`);
                                        _ui.Loading.wait(false);
                                        // UIManager.Instace.hideUI(UIConfig.WaitItemKey);
                                        ZJSdk.showRewardedAd({
                                            onError(errCode: Number, errMsg: string) {
                                                console.log(`激励广告展示失败，错误码:${errCode}，错误信息:${errMsg}`);
                                                UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: "视频加载失败,请稍后重试" });
                                            },
                                            onAdShow() {
                                                console.log("激励广告展示");
                                            },
                                            onAdClick() {
                                                console.log("激励广告点击");
                                            },
                                            onAdClose() {
                                                console.log("激励广告关闭");
                                            }
                                        }, {
                                            onAdReward(extra) {
                                                complete?.();
                                                // SignInManager.addAdWatch((data) => {
                                                //     console.log(`测试屏蔽了没有`);
                                                // });
                                                // UIManager.Instace.showUI({ path: UIConfig.getItemKey, data: { "count": 10 } });
                                            },
                                        })
                                    }, onError(errCode, errMsg) {
                                        _ui.Loading.wait(false);
                                        _ui.tip('视频加载失败,请稍后重试');
                                        // UIManager.Instace.hideUI(UIConfig.WaitItemKey);
                                        // UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: "视频加载失败,请稍后重试" });
                                        // onRequestFinish()
                                        console.log(`激励广告加载失败，错误码:${errCode}，错误信息:${errMsg}`);
                                    }
                                });
                            }
                        });
                    }
                    else {
                        complete?.();
                    }

                    console.log(`[自定义 showVideo] ${report}`);
                    // 🔥 自定义逻辑：
                    // ZJSdk.loadRewardedAd('Pno79en81mh8', '123456', {
                    //     onAdLoaded() {
                    //         ZJSdk.showRewardedAd({
                    //             onAdReward() {
                    //                 complete?.();
                    //             }
                    //         });
                    //     }
                    // });

                };
                _platform = apeng._platform
                _privacy = apeng._privacy
                _resouces = apeng._resouces
                _timer = apeng._timer
                _prop = apeng._prop
                _rank = apeng._rank

                _logic = moduleMgr.get(EModuleType.logic)
                _gameType = moduleMgr.get(EModuleType.gameType)
                console.log("[Main] apeng init done, modules wired.");
                break;

            case EInitCoreState.config:
                _config_ = apeng._config_ as any
                console.log("[Main] config loaded.");
                break;

            default:
                console.log("[Main] other state:", state);
                break;
        }
    });
}

// ✅ 在编辑器预览 & 真机/浏览器，都执行 boot()
//    （用 setTimeout 仅仅是把时序放到微后面，避免和其它 loader 冲突）
if (EDITOR) {
    setTimeout(boot, 0);
} else {
    setTimeout(boot, 0);
}

/**业务模块 暂内置40个系统模块*/
export enum EModuleType {
    gameType = 40,
    logic,
}


export type IVector2 = apeng.IVector2
export type TVectorSet = apeng.TVectorSet
export type RandomSeed = apeng.RandomSeed
export type PropHelper = apeng.PropHelper
export type LevelHelper<T, S> = apeng.LevelHelper<T, S>
export type TResoucesUrl<T extends Asset> = apeng.TResoucesUrl<T>
export type IntervalTimeHelper = apeng.IntervalTimeHelper
export type DataLogicHelper<T> = apeng.DataLogicHelper<T>
export type SwitchSpriteCC = apeng.SwitchSpriteCC
export type SpriteLoaderCC = apeng.SpriteLoaderCC
export type ButtonCC = apeng.ButtonCC
export type SwitchChildrenCC = apeng.SwitchChildrenCC
export type ListCCByBaseItemCC = apeng.ListCCByBaseItemCC
export type Vector2 = apeng.Vector2
export type Vector3 = apeng.Vector3
export type Rectangle = apeng.Rectangle
export type IConfigBase = apeng.IConfigBase
export type IConfigItemBase = apeng.IConfigItemBase
export type CreatePrefabToEditorCC = apeng.CreatePrefabToEditorCC
export type CreatePrefabToEditorOnceCC = apeng.CreatePrefabToEditorOnceCC
export type AnimtorByTweenCC = apeng.AnimtorByTweenCC
export type IGMData = apeng.IGMData
export type BaseHollow = apeng.BaseHollow
export type IGuideClickUI = apeng.IGuideClickUI
export type IGuideMaskUI = apeng.IGuideMaskUI
export type IGuideMaskUIDrag = apeng.IGuideMaskUIDrag
export type IGuideFingerUI = apeng.IGuideFingerUI
export type IGuideClickUIFinger = apeng.IGuideClickUIFinger
export type IGuideDialogueUI = apeng.IGuideDialogueUI
export type IGuideMaskUIText = apeng.IGuideMaskUIText
export type NodeHollow = apeng.NodeHollow
export type RectHollow = apeng.RectHollow
export type CircleHollow = apeng.CircleHollow
export type PolygonHollow = apeng.PolygonHollow
export type ScaleAnim = apeng.ScaleAnim
export type IConfigPlatform = apeng.IConfigPlatform
export type IConfigLanguage = apeng.IConfigLanguage
export type IConfigProp = apeng.IConfigProp
export type IConfigProvinceItem = apeng.IConfigProvinceItem
export type IConfigCountryItem = apeng.IConfigCountryItem
export type AnimtorCC = apeng.AnimtorCC
export type PoolOnce<V> = apeng.PoolOnce<V>
export type ColliderGroup = apeng.ColliderGroup
export type LayoutCC = apeng.LayoutCC
export type LayoutCircleCC = apeng.LayoutCircleCC
export type BaseComponent = apeng.BaseComponent
export type EditorParseDataCC<T> = apeng.EditorParseDataCC<T>
export type Circle = apeng.Circle
export type SpriteFrameAnimCC = apeng.SpriteFrameAnimCC
export type P2World<T extends number> = apeng.P2World<T>
export type P2Group<T extends number> = apeng.P2Group<T>
export type P2ShapeEditorCC = apeng.P2ShapeEditorCC
export type P2ConstraintEditorCC = apeng.P2ConstraintEditorCC
export type P2Body = apeng.P2Body
export type Collider2DEditorCC = apeng.Collider2DEditorCC
export type Collider2DPoint = apeng.Collider2DPoint
export type Collider2DBox = apeng.Collider2DBox
export type Collider2DCircle = apeng.Collider2DCircle
export type Collider2DPolygon = apeng.Collider2DPolygon
export type Collider2DRoot = apeng.Collider2DRoot
export type StateMackine<T> = apeng.StateMackine<T>
export type Rotate360Anim = apeng.Rotate360Anim
export type IntervalAnim = apeng.IntervalAnim
export type Move = apeng.Move
export type ModuleMgr<T> = apeng.ModuleMgr<T>
export type IBaseModule = apeng.IBaseModule
export type BaseModule = apeng.BaseModule
export type BaseInstanceStorage = apeng.BaseInstanceStorage
export type EUILayer = apeng.EUILayer
export type IUIModule = apeng.IUIModule

export const {
    IntervalAnim,
    ModuleMgr,
    Rotate360Anim,
    Collider2DPoint,
    Collider2DBox,
    Collider2DCircle,
    Collider2DPolygon,
    Collider2DRoot,
    Collider2DEditorCC,
    P2ShapeEditorCC,
    P2ConstraintEditorCC,
    P2Group,
    P2World,
    SpriteFrameAnimCC,
    requireComponent,
    Circle,
    EditorParseDataCC,
    executeInEditMode,
    LayoutCircleCC,
    LayoutCC,
    JS,
    ColliderGroup,
    ScaleAnim,
    PoolOnce,
    NodeHollow,
    RectHollow,
    CircleHollow,
    PolygonHollow,
    EventHandlerCC,
    ccclass,
    property,
    BaseUI,
    MoveCC,
    LoadDir,
    EUILayer,
    moduleMgr,
    BaseModule,
    BaseModuleEvent,
    EBlockOnceAdType,
    EPlatformType,
    EBottomAdType,
    BaseScene,
    Vector2,
    Vector3,
    Rectangle,
    Polygon,
    BaseEntityMgr,
    EEntityState,
    Move,
    Maths,
    NodeHelper,
    PropHelper,
    PropsHelper,
    RandomSeed,
    StateMackine,
    CompleteCallBack,
    IntervalTimeHelper,
    LevelHelper,
    EUIState,
    Times,
    DataLogicHelper,
    BaseEntity,
    SwitchSpriteCC,
    SpriteLoaderCC,
    BaseComponent,
    ButtonCC,
    ELanguageType,
    SwitchChildrenCC,
    ListCCByBaseItemCC,
    winSize,
    winCenterPostion,
    Sets,
    Maps,
    EEaseType,
    TweenHelper,
    ETweenType,
    CreatePrefabToEditorCC,
    CreatePrefabToEditorOnceCC,
    AnimtorByTweenCC,
    MaxBoxCC,
    menu,
    BaseHollow,
    CGuideDefine,
} = apeng

