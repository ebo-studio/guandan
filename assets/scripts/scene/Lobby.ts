import { _decorator, Component, Label, native, sp } from 'cc';
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

    public static Instance: Lobby = null;
    onLoad() {
        Lobby.Instance = this;
        PangleAdManager.instance.initialize('8701814');
        // PangleAdManager.instance.loadRewardedVideo('982283195');
    }

    onClickShowAd() {
        // sendToNative('csj:reward:show');
        PangleAdManager.instance.showRewardedVideo('982283193', () =>{
            UIManager.Instace.showUI({ path: UIConfig.getItemKey, data: {"count": 10}});
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
        //第一次进大厅,拿到code后再请求
        if (GlobalData.userInfo.haveToken) {
            GlobalData.requestGetUserInfo({
                success: () => {
                    this.onFirstUpdate();
                }
            });
        }

        this.caishen.setAnimation(0, 'animation2', false);
        this.caishen.setCompleteListener(() => {
            if (this.caishen.animation == 'animation2') {
                this.caishen.setAnimation(0, 'animation1', true);
            }

        })
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
    //金币
    onUpdateScore() {
        this.txtScore.string = GlobalData.userInfo.score + "";
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
        UIManager.Instace.showUI({
            path: UIConfig.CreateRoomItemKey, data: () => {
                let baseInfo = GameMsg.Time.create({ time: GlobalData.createRoomInfo.time });
                let baseBuffer = GameMsg.Time.encode(baseInfo).finish();
                let sendBuffer = PbManager.instance.sendMsg(GlobalData.C2S_Event.CreateRoom, baseBuffer);
                GameSocket.send(sendBuffer);
            }
        });
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
        GlobalData.cardInfo.gameType = GlobalData.gameType.free;
        let sendBuffer = PbManager.instance.sendMsg(GlobalData.C2S_Event.FreeMatch, null);
        GameSocket.send(sendBuffer);

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



