import { _decorator, Component, Label, native, sp, sys, UI } from 'cc';
import { AppGlobal } from '../AppGlobal';
import { utils } from '../common/utils';
import { GlobalData } from '../manager/GlobalData';
import { SoundManager } from '../manager/SoundManager';
import { UIManager } from '../manager/UIManager';
import { UIConfig } from '../manager/UIConfig';
import { LobbyUserHeadItem } from '../component/LobbyUserHeadItem';
import { KeyBoardType } from '../component/room/KeyBoardItem';
import { GameSocket } from '../manager/GameSocket';
import { PbManager } from '../proto/PbManager';
import Http from '../proto/Http';
import { UrlConfig } from '../manager/UrlConfig';
import { PangleAdManager } from '../common/PangleAdManager';
import { ZJSdk } from '../ZJSdk/ZJSdk';
import { SignInManager } from '../manager/SignInManager';
import { checkForUpdate } from '../common/UpdateChecker';
import { ad } from '../manager/ADManager';
// import { PangleBridge } from '../common/PangleBridge';
// import { ethers } from "ethers";
const { ccclass, property } = _decorator;
declare const ethers: any;

@ccclass('Lobby')
export class Lobby extends Component {
    ////////////////////////////////////头像////////////////////////////////////
    // 头像
    @property(LobbyUserHeadItem)
    userHead: LobbyUserHeadItem = null;
    //昵称
    @property(Label)
    txtScore: Label = null!;

    @property(sp.Skeleton)
    caishen: sp.Skeleton = null;

    // private pangleBridge: PangleBridge;

    inChina: boolean = true;

    public static Instance: Lobby = null;
    onLoad() {
        Lobby.Instance = this;
        PangleAdManager.instance.initialize('8719972');
        // PangleAdManager.instance.loadRewardedVideo('982283195');

        (async () => {
            const inChina = await utils.isUserInChina();
            this.inChina = inChina;
            if (inChina) {
                console.log("🇨🇳 用户在中国境内");
                // 国内逻辑（比如用字节广告）
            } else {
                console.log("🌎 用户在海外");
                // 海外逻辑（比如用 Unity Ads、Google Ads）
            }
        })();
    }

    onClickShowAd() {
        UIManager.Instace.showUI({ path: UIConfig.WaitItemKey, data: { opacity: 0.5, des: "视频准备中,请稍后" } });
        SignInManager.getRemainingAds((data) => {
            // if (this.inChina) {
            if (GlobalData.userInfo.ad_watch_count >= 30) {
                UIManager.Instace.hideUI(UIConfig.WaitItemKey);
                UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: "今日已达观看上限" });
            }
            else {
                ad.setUserId(GlobalData.userInfo.user_id);
                ad.setRewardVideoId(29730000001);  // 动态设置广告ID
                ad.setGDTRewardVideoId("8203029168845782");
                ad.showRewardVideo(
                    () => {
                        UIManager.Instace.hideUI(UIConfig.WaitItemKey);
                        UIManager.Instace.showUI({ path: UIConfig.getItemKey, data: { "count": 10 } });
                        GlobalData.requestGetUserInfo({
                            success: () => {
                                this.onUpdateScore();
                            }
                        });

                    },
                    () => {
                        UIManager.Instace.hideUI(UIConfig.WaitItemKey);
                        UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: "视频加载失败,请稍后重试" });
                    },
                    () => {
                        UIManager.Instace.hideUI(UIConfig.WaitItemKey);
                        // UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: "中途退出,无法获得奖励" });
                    }
                )
                // ZJSdk.loadRewardedAd('Pno79en81mh8', GlobalData.userInfo.user_id.toString(), {
                //     onAdLoaded(msg) {
                //         // onRequestFinish()
                //         let ecpm = typeof msg === 'string' && msg.length > 0 ? JSON.parse(msg).ecpm : 0
                //         console.log(`激励广告加载成功, 价格为${ecpm}`);
                //         UIManager.Instace.hideUI(UIConfig.WaitItemKey);
                //         ZJSdk.showRewardedAd({
                //             onError(errCode: Number, errMsg: string) {
                //                 console.log(`激励广告展示失败，错误码:${errCode}，错误信息:${errMsg}`);
                //                 UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: "视频加载失败,请稍后重试" });
                //             },
                //             onAdShow() {
                //                 console.log("激励广告展示");
                //             },
                //             onAdClick() {
                //                 console.log("激励广告点击");
                //             },
                //             onAdClose() {
                //                 console.log("激励广告关闭");
                //             }
                //         }, {
                //             onAdReward(extra) {
                //                 // SignInManager.addAdWatch((data) => {
                //                 //     console.log(`测试屏蔽了没有`);
                //                 // });
                //                 UIManager.Instace.showUI({ path: UIConfig.getItemKey, data: { "count": 10 } });
                //             },
                //         })
                //     }, onError(errCode, errMsg) {
                //         UIManager.Instace.hideUI(UIConfig.WaitItemKey);
                //         UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: "视频加载失败,请稍后重试" });
                //         // onRequestFinish()
                //         console.log(`激励广告加载失败，错误码:${errCode}，错误信息:${errMsg}`);
                //     }
                // });
            }

            // }
            // else {
            //     if (GlobalData.userInfo.ad_watch_count >= 30) {
            //         UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: "今日已达观看上限" });
            //     }
            //     else {
            //         PangleAdManager.instance.showRewardedVideo('982396404', () => {
            //             // GlobalData.requestAddAdtchCount({
            //             //     success: () => {
            //             //         console.log(`今日已观看 ${GlobalData.userInfo.ad_watch_count} / 30 次`);
            //             //         // console.log(`激励广告发奖`);
            //             //         UIManager.Instace.showUI({ path: UIConfig.getItemKey, data: { "count": 10 } });
            //             //     }
            //             // })
            //             SignInManager.addAdWatch((data) => {
            //                 console.log(`今日已观看 ${GlobalData.userInfo.ad_watch_count} / 30 次`);
            //                 UIManager.Instace.showUI({ path: UIConfig.getItemKey, data: { "count": 10 } });
            //             });
            //             // UIManager.Instace.showUI({ path: UIConfig.getItemKey, data: { "count": 10 } });
            //         });
            //     }

            // }
        });
    }
    //首次登录更新
    onFirstUpdate() {
        this.userHead.setData({ head: GlobalData.userInfo.head_img, name: GlobalData.userInfo.name });
        this.onUpdateScore();
    }
    //初始化
    start() {
        utils.on(GlobalData.localEvent.UpdateScore, this, this.onUpdateScore);
        utils.on(GlobalData.localEvent.UserLogin, this, this.onUserLogin);
        utils.on(GlobalData.localEvent.FirstUpdate, this, this.onFirstUpdate);
        utils.on(GlobalData.localEvent.CreateRoom, this, this.onCreateRoom);
        utils.on(GlobalData.localEvent.FreeMatchStart, this, this.onFreeMatchStart);
        utils.on(GlobalData.localEvent.FreeMatchTimeOut, this, this.onFreeMatchTimeOut);
        utils.on(GlobalData.localEvent.AuditionMatchStart, this, this.onAuditionMatchStart);
        utils.on(GlobalData.localEvent.AuditionMatchTimeOut, this, this.onAuditionMatchTimeOut);
        utils.on(GlobalData.localEvent.LoginOut, this, this.loginOutGameHandler);
        AppGlobal.instance.errorCallBack = () => {

        }

        this.caishen.setAnimation(0, 'animation2', false);
        this.caishen.setCompleteListener(() => {
            if (this.caishen.animation == 'animation2') {
                this.caishen.setAnimation(0, 'animation1', true);
            }

        })
        //第一次进大厅,拿到code后再请求
        if (GlobalData.userInfo.haveToken) {
            GlobalData.requestGetUserInfo({
                success: () => {
                    this.onFirstUpdate();
                }
            });
            // GlobalData.requestGetAdtchInfo({
            //     success: () => {

            //     }
            // })
        }
        SignInManager.getRemainingAds();

    }
    onDestroy() {
        utils.off(GlobalData.localEvent.UpdateScore, this, this.onUpdateScore);
        utils.off(GlobalData.localEvent.UserLogin, this, this.onUserLogin);
        utils.off(GlobalData.localEvent.FirstUpdate, this, this.onFirstUpdate);
        utils.off(GlobalData.localEvent.CreateRoom, this, this.onCreateRoom);
        utils.off(GlobalData.localEvent.FreeMatchStart, this, this.onFreeMatchStart);
        utils.off(GlobalData.localEvent.FreeMatchTimeOut, this, this.onFreeMatchTimeOut);
        utils.off(GlobalData.localEvent.AuditionMatchStart, this, this.onAuditionMatchStart);
        utils.off(GlobalData.localEvent.AuditionMatchTimeOut, this, this.onAuditionMatchStart);
        utils.off(GlobalData.localEvent.LoginOut, this, this.loginOutGameHandler);
    }

    loginOutGameHandler() {
        UIManager.Instace.showUI({ path: UIConfig.LoadItemKey, data: GlobalData.sceneName.loading });
    }

    onGotoNoticeView() {
        UIManager.Instace.showUI({ path: UIConfig.announceViewItemKey });
    }

    //金币
    onUpdateScore() {
        console.log('更新积分>>>', GlobalData.userInfo.score);
        this.txtScore.string = (GlobalData.userInfo.score / 100).toFixed(1);
    }
    //登录
    onUserLogin(data: GameMsg.User) {
        console.log("data--> ", data);
    }
    //创建房间
    onCreateRoom(data: GameMsg.Room) {
        console.log("roomId----> ", data.roomId);
        AppGlobal.instance.onFreeRoomId(data.roomId);
    }
    //自由玩开始匹配
    onFreeMatchStart(data: GameMsg.Match) {
        UIManager.Instace.showUI({ path: UIConfig.FreeMatchItemKey, data: data });
    }
    //自由玩匹配超时
    onFreeMatchTimeOut() {
        UIManager.Instace.hideUI(UIConfig.FreeMatchItemKey);
        UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: "匹配超时!" });
    }
    //海选赛开始匹配
    onAuditionMatchStart(data: GameMsg.Match) {
        UIManager.Instace.showUI({ path: UIConfig.AuditionMatchItemKey, data: data });
    }
    //海选赛匹配超时
    onAuditionMatchTimeOut() {
        UIManager.Instace.hideUI(UIConfig.AuditionMatchItemKey);
        UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: "匹配超时!" });
    }
    //规则
    onBtnRuleClick() {
        SoundManager.playClick();
        UIManager.Instace.showUI({ path: UIConfig.RuleItemKey });
    }

    onBtnExchageClick() {
        SoundManager.playClick();
        UIManager.Instace.showUI({ path: UIConfig.exchangeViewItemKey });
    }

    onBtnKefuClick() {
        SoundManager.playClick();
        UIManager.Instace.showUI({
                path: UIConfig.MessageBoxCommonKey,
                data: {
                    okName: "确定",
                    // cancleName: "取消",
                    des: "客服联系邮箱\nchinahaibao@163.com",
                    okFunc: () => {
                        // this.onClickShowAd();
                    }
                    // cancleFunc: () => {

                    // }
                }
            });
    }
    //团队
    // onBtnTeamClick() {
    //     SoundManager.playClick();
    //     GlobalData.requestUserGroup({
    //         success: () => {
    //             UIManager.Instace.showUI({ path: UIConfig.TeamItemKey });
    //         }
    //     });
    // }
    //排名
    onBtnRankClick() {
        SoundManager.playClick();
        GlobalData.requestResultListTotal(() => {
            UIManager.Instace.showUI({ path: UIConfig.RankRaceItemKey });
        });
    }
    //设置
    onBtnSettingClick() {
        SoundManager.playClick();
        UIManager.Instace.showUI({ path: UIConfig.SettingItemKey });
    }
    //创建房间
    onBtnCreateRoomClick() {
        SoundManager.playClick();
        if ((GlobalData.userInfo.score / 100) < 30) {
            UIManager.Instace.showUI({
                path: UIConfig.MessageBoxCommonKey,
                data: {
                    okName: "观看",
                    cancleName: "取消",
                    des: "您的积分不足30,是否观看视频获得积分",
                    okFunc: () => {
                        this.onClickShowAd();
                    },
                    cancleFunc: () => {

                    }
                }
            });
        }
        else {
            UIManager.Instace.showUI({
                path: UIConfig.CreateRoomItemKey, data: () => {
                    let baseInfo = GameMsg.Time.create({ time: GlobalData.createRoomInfo.time });
                    let baseBuffer = GameMsg.Time.encode(baseInfo).finish();
                    let sendBuffer = PbManager.instance.sendMsg(GlobalData.C2S_Event.CreateRoom, baseBuffer);
                    GameSocket.send(sendBuffer);
                }
            });
        }

    }
    //加入房间
    async onBtnJoinRoomClick() {
        SoundManager.playClick();
        UIManager.Instace.showUI({
            path: UIConfig.KeyBoardItemKey,
            data: {
                type: KeyBoardType.joinRoom,
                cb: (roomId) => {
                    AppGlobal.instance.onFreeRoomId(roomId);
                }
            }
        });
    }
    //自由嗨完
    async onBtnRaceFreeClick() {
        if ((GlobalData.userInfo.score / 100) < 30) {
            UIManager.Instace.showUI({
                path: UIConfig.MessageBoxCommonKey,
                data: {
                    okName: "观看",
                    cancleName: "取消",
                    des: "您的积分不足30,是否观看视频获得积分",
                    okFunc: () => {
                        this.onClickShowAd();
                    },
                    cancleFunc: () => {

                    }
                }
            });
        }
        else {
            GlobalData.cardInfo.gameType = GlobalData.gameType.free;
            let sendBuffer = PbManager.instance.sendMsg(GlobalData.C2S_Event.FreeMatch, null);
            GameSocket.send(sendBuffer);
        }


    }
    //积分赛
    onBtnRaceScoreClick() {
        SoundManager.playClick();
        GlobalData.requestScoreGameList({
            success: () => {
                GlobalData.cardInfo.gameType = GlobalData.gameType.score;
                UIManager.Instace.showUI({ path: UIConfig.RaceScoreItemKey });
            }
        });
    }
    //淘汰赛
    onBtnRaceCleanOutClick() {
        SoundManager.playClick();
        GlobalData.requestOutGameList({
            success: () => {
                GlobalData.cardInfo.gameType = GlobalData.gameType.kick;
                UIManager.Instace.showUI({ path: UIConfig.RaceKickItemKey });
            }
        });
    }
    //海选赛
    onBtnRaceAuditionClick() {
        SoundManager.playClick();
        GlobalData.requestAuditionGameList({
            success: () => {
                GlobalData.cardInfo.gameType = GlobalData.gameType.audition;
                UIManager.Instace.showUI({ path: UIConfig.RaceAuditionItemKey });
            }
        });
    }
    //签到
    onBtnSignInClick() {
        SoundManager.playClick();
        UIManager.Instace.showUI({ path: UIConfig.signInViewItemKey });
    }

    onBtnShareClick() {
        SoundManager.playClick();
        UIManager.Instace.showUI({ path: UIConfig.shareViewItemKey });
    }

    onBtnAddGoldClick() {
        SoundManager.playClick();
        UIManager.Instace.showUI({ path: UIConfig.activityViewItemKey });
    }


    onEnable() {
        // let data = GameLogic.convertCardListS2C(
        //     [
        //         21, 31, 41, 51, 61, 71, 81, 91, 101, 111, 121, 131, 141,  //红
        //         22, 32, 42, 52, 62, 72, 82, 92, 102, 112, 122, 132, 142,  //方
        //         23, 33, 43, 53, 63, 73, 83, 93, 103, 113, 123, 133, 143,  //梅
        //         24, 34, 44, 54, 64, 74, 84, 94, 104, 114, 124, 134, 144,  //黑
        //         155, 165
        //     ]);
        // let data = [0x06, 0x16, 0x26, 0x36];
        // let list = GameLogic.convertCardListC2S(data);
        // console.log("list--> ", list);

        // let baseInfo = GameMsg.SendCard.create({ cards: [84] });
        // let baseBuffer = GameMsg.SendCard.encode(baseInfo).finish();

        // let res = GameMsg.SendCard.decode(baseBuffer);
        // console.log("res--> ",res);
        // console.log('baseBuffer--> ', baseBuffer);
        // GameLogic.playCardTypeMusic(GameDefine.KIND_CARDS_KING, [0x0d]);
    }
    testEnd() {
        let list = new GameMsg.WinList();
        list.type = 5;
        list.time = 10;



        let item2 = new GameMsg.ResUser();
        item2.headImg = "";
        item2.name = "22";
        item2.res = 1;
        item2.id = 5;
        item2.score = 102;

        let item3 = new GameMsg.ResUser();
        item3.headImg = "";
        item3.name = "33";
        item3.res = 3;
        item3.id = 6;
        item3.score = 103;

        let item4 = new GameMsg.ResUser();
        item4.headImg = "";
        item4.name = "44";
        item4.res = 0;
        item4.id = 7;
        item4.score = 104;

        let item1 = new GameMsg.ResUser();
        item1.headImg = "https://yq-0.obs.cn-east-3.myhuaweicloud.com/mall/image/20230426/1682479988636.png";
        item1.name = "11";
        item1.res = 2;
        item1.id = 4;
        item1.score = 101;

        list.list.push(item1);
        list.list.push(item2);
        list.list.push(item3);
        list.list.push(item4);

        UIManager.Instace.showUI({ path: UIConfig.GameEndScoreItemKey, data: list });
    }
}



