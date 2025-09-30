import { _decorator, Component, director, isValid, Label, Node, Sprite, SpriteFrame, UITransform, Vec3, Widget } from 'cc';
import { SoundManager } from '../manager/SoundManager';
import { UIManager } from '../manager/UIManager';
import { UIConfig } from '../manager/UIConfig';
import { GlobalData } from '../manager/GlobalData';
import { TeamType, UserHead } from '../component/game/UserHead';
import { CardLayer } from '../component/game/CardLayer';
import { utils } from '../common/utils';
import { GameLogic } from '../component/game/GameLogic';
import { PbManager } from '../proto/PbManager';
import { GameSocket } from '../manager/GameSocket';
import { PokerLogic } from '../component/game/PokerLogic';
import { DebugHook } from '../debug/DebugHook';
const { ccclass, property } = _decorator;

@ccclass('Game')
export class Game extends Component {

    @property(Node)
    gameBg: Node = null;
    @property(SpriteFrame)
    gameBgType: SpriteFrame[] = [];
    //复制
    @property(Node)
    btnCopy: Node = null;
    //房间ID
    @property(Label)
    txtRoomId: Label = null;
    //下坐
    @property(Node)
    nodeSetDowns: Node[] = [];
    //抗贡
    @property(Node)
    nodeNoCards: Node[] = [];
    //本局打几
    @property(Label)
    txtCardLevel: Label = null;
    //本局谁打
    @property(Label)
    txtWhoPlay: Label = null;
    //本局时间(淘汰赛)
    @property(Label)
    txtCardTime: Label = null;
    //游戏进度(淘汰赛)
    @property(Label)
    txtGameRate: Label = null;
    //我剩几张
    @property(Node)
    nodeSelfCardCnt: Node = null;
    //我剩几张
    @property(Label)
    txtSelfCnt: Label = null;
    //头像(viewid)
    @property(UserHead)
    userHeads: UserHead[] = [];
    //牌层
    @property(CardLayer)
    cardLayer: CardLayer = null;
    //添加机器人
    @property(Node)
    btnAdd: Node = null;

    public static Instance: Game = null;

    private timeNum: number = 0
    private timeFunc: Function = null;

    private viewList: number[] = [0, 1, 2, 3];

    preLoad() {
        console.log("销毁所有 4--->");
        UIManager.Instace?.clearAllUI();
        // GlobalData.cardInfo.cardDir = false;
    }
    onLoad() {
        Game.Instance = this;
        this.preLoad();
        // DebugHook.enableAllHooks();
    }
    start() {
        utils.on(GlobalData.localEvent.UserList, this, this.onUserList);
        utils.on(GlobalData.localEvent.UpdateLevelCard, this, this.setCardLevel);
        utils.on(GlobalData.localEvent.LeftCards, this, this.onLeftCards);
        utils.on(GlobalData.localEvent.LeftCardsBg, this, this.onLeftCardsBg);
        utils.on(GlobalData.localEvent.HideUpDownUserHead, this, this.onHideUpDownUserHead);
        utils.on(GlobalData.localEvent.LeftCardCnt, this, this.onLeftCardCnt);
        utils.on(GlobalData.localEvent.ReEnterGame, this, this.onReEnterGame);
        utils.on(GlobalData.localEvent.KangGong, this, this.onKangGong);
        utils.on(GlobalData.localEvent.UpdateGameBg, this, this.onUpdateGameBg);

        this.init();
    }
    onDestroy() {
        console.log('游戏场景销毁');
        utils.off(GlobalData.localEvent.UserList, this, this.onUserList);
        utils.off(GlobalData.localEvent.UpdateLevelCard, this, this.setCardLevel);
        utils.off(GlobalData.localEvent.LeftCards, this, this.onLeftCards);
        utils.off(GlobalData.localEvent.LeftCardsBg, this, this.onLeftCardsBg);
        utils.off(GlobalData.localEvent.HideUpDownUserHead, this, this.onHideUpDownUserHead);
        utils.off(GlobalData.localEvent.LeftCardCnt, this, this.onLeftCardCnt);
        utils.off(GlobalData.localEvent.ReEnterGame, this, this.onReEnterGame);
        utils.off(GlobalData.localEvent.KangGong, this, this.onKangGong);
        utils.off(GlobalData.localEvent.UpdateGameBg, this, this.onUpdateGameBg);
    }

    onUpdateGameBg() {
        let gameBgStr = utils.getLocalStorage('gameBg');
        if (!gameBgStr) {
            gameBgStr = '0';
        }
        this.gameBg.getComponent(Sprite).spriteFrame = this.gameBgType[Number(gameBgStr)];
    }

    onKangGong(init: boolean, id1: number, id2: number) {
        if (init) {
            for (let i = 0; i < this.nodeNoCards.length; i++) {
                this.nodeNoCards[i].active = false;
            }
        } else {
            if (id1) {
                this.nodeNoCards[GameLogic.getUserViewIdById(id1)].active = true;
            }
            if (id2) {
                this.nodeNoCards[GameLogic.getUserViewIdById(id2)].active = true;
            }
        }
    }
    //重连进入游戏
    onReEnterGame() {
        console.log("重连进入游戏----->");
        this.preLoad();
        this.init();
    }
    //玩家列表
    onUserList(data: GameMsg.UserList) {
        console.log("玩家列表--> ", data);
        this.hideAllUserHead();
        GameLogic.initAllUsers(data.list);
        //必须先找到自己的
        for (let i = 0; i < data.list.length; i++) {
            const element = data.list[i];
            if (element.id == GlobalData.userInfo.user_id) {
                GameLogic.initSelfData(element);
                break;
            }
        }
        let tmpList: number[] = utils.deepCopy(this.viewList);
        for (let j = 0; j < data.list.length; j++) {
            const element = data.list[j];
            let viewId = GameLogic.switchChairIdToViewId(element.index);
            this.updateUserHeadByViewId(viewId, { head: element.headImg, name: element.name, score: element.gold });
            this.showSetDown(viewId, false);
            tmpList.splice(tmpList.indexOf(viewId), 1);
        }
        this.updateSetDown(tmpList);
        this.checkAddVisable();
    }
    checkAddVisable() {
        if (GlobalData.cardInfo.gameType == GlobalData.gameType.free) {
            if (GameLogic.getAllUsers().length >= 4) {
                this.btnAdd.active = false;
            } else {
                this.btnAdd.active = true;
            }
        }
        else {
            this.btnAdd.active = false;
        }
    }
    //初始化
    init() {
        let gameBgStr = utils.getLocalStorage('gameBg');
        if (!gameBgStr) {
            gameBgStr = '0';
        }
        this.gameBg.getComponent(Sprite).spriteFrame = this.gameBgType[Number(gameBgStr)];
        this.setCardLevel(false);
        this.setGameRate(false);
        this.setCardTime(false);
        this.setSelfCardCnt(false);
        this.initUserPosition();
        this.hideAllUserHead();
        this.initSetDown();
        this.initRoomId();
        this.cardLayer.init();
        this.initCardBg();
        this.checkAddVisable();
        this.onKangGong(true, 0, 0);
        this.startGame();
    }
    startGame() {
        console.log("通知服务开始游戏--->");
        let sendBuffer = PbManager.instance?.sendMsg(GlobalData.C2S_Event.ContinueGame, null);
        GameSocket.send(sendBuffer);
    }
    //下坐
    initSetDown() {
        for (let i = 0; i < this.nodeSetDowns.length; i++) {
            const element = this.nodeSetDowns[i];
            if (isValid(element)) {
                element.active = false;
            }
        }
    }
    //更新下坐
    updateSetDown(numList: number[]) {
        if (GlobalData.cardInfo.gameType == GlobalData.gameType.free) {
            for (let i = 0; i < numList.length; i++) {
                this.showSetDown(numList[i], true);
            }
        }
    }
    //显示下坐
    showSetDown(viewId: number, type: boolean) {
        if (this.nodeSetDowns[viewId]) {
            this.nodeSetDowns[viewId].active = type;
        }
    }
    //房间号,只有自由玩显示,其他UI上不显示,逻辑上是存在的
    initRoomId() {
        if (GlobalData.cardInfo.gameType == GlobalData.gameType.free) {
            this.showRoomId(true);
        } else {
            this.showRoomId(false);
        }
    }
    //头像位置
    initUserPosition() {
        let posList: Vec3[] = [];
        for (let i = 0; i < this.userHeads.length; i++) {
            const e = this.userHeads[i];
            if (i == GlobalData.viewId.up || i == GlobalData.viewId.down) {
                e.node.parent.getComponent(Widget).updateAlignment();
            }
            posList.push(this.node.getComponent(UITransform).convertToNodeSpaceAR(e.node.getComponent(UITransform).convertToWorldSpaceAR(Vec3.ZERO)));
        }
        this.cardLayer.setUserPosition(posList);
    }
    //隐藏头像(一般是玩家自己刚进来,用于初始化)
    hideAllUserHead() {
        for (let i = 0; i < this.userHeads.length; i++) {
            const head = this.userHeads[i];
            if (i == GlobalData.viewId.self) continue;
            head.node.active = false;
        }
    }
    //隐藏左右两家(轮空情况)
    hideUpDownUserHead() {
        for (let i = 0; i < this.userHeads.length; i++) {
            const head = this.userHeads[i];
            if (i == GlobalData.viewId.self || i == GlobalData.viewId.opposite) continue;
            head.node.active = false;
        }
    }
    //更新用户头像
    updateUserHeadByViewId(viewId: number, data: { head: string, name: string, score: number }) {
        this.userHeads[viewId].node.active = true;
        this.userHeads[viewId].setData(data);
        let type = viewId == GlobalData.viewId.opposite ? TeamType.self : TeamType.other;
        this.userHeads[viewId].setTeamType(type);
    }
    //房间号
    showRoomId(show: boolean) {
        this.txtRoomId.node.active = show;
        if (show) {
            this.txtRoomId.string = "房 间 号 : " + GlobalData.cardInfo.roomId;
        }
    }
    //本局打几
    setCardLevel(show: boolean) {
        this.txtCardLevel.node.parent.active = show;
        if (show) {
            let cardNum = GlobalData.cardInfo.levelCard;
            let key = GlobalData.keyCards[cardNum];
            PokerLogic.set_laizi([2 * 16 + Number(key)]);
            this.cardLayer.laizi_value = 2 * 16 + Number(key);
            this.txtCardLevel.string = key.toString();
            this.txtWhoPlay.string = GlobalData.cardInfo.isMy ? "我方打" : "对方打";
        }
        this.setGameRate(show);
        this.setCardTime(show);
    }
    //计时 (只有积分赛有计时)
    setCardTime(show: boolean) {
        if (GlobalData.cardInfo.gameType == GlobalData.gameType.score) {
            this.txtCardTime.node.parent.active = show;
            if (show) {
                this.startTime();
            }
        } else {
            this.txtCardTime.node.parent.active = false;
        }
    }
    //游戏进度
    setGameRate(show: boolean) {
        if (GlobalData.cardInfo.gameType == GlobalData.gameType.kick) {
            this.txtGameRate.node.parent.active = show;
            if (show) {
                this.txtGameRate.string = GlobalData.cardInfo.curRate;
            }
        } else {
            this.txtGameRate.node.parent.active = false;
        }
    }
    //计时
    private startTime() {
        this.stopTime();
        this.timeNum = GlobalData.cardInfo.time;
        this.setTime(this.timeNum);
        this.timeFunc = () => {
            this.timeNum -= 1;
            if (this.timeNum >= 0) {
                this.setTime(this.timeNum);
            } else {
                this.setTime(0);
                this.unschedule(this.timeFunc);
            }
        }
        this.schedule(this.timeFunc, 1);
    }
    private setTime(num: number) {
        this.txtCardTime.string = utils.getTimeDesc(num);
    }
    stopTime() {
        if (this.timeFunc != null) {
            this.unschedule(this.timeFunc);
            this.timeFunc = null;
        }
    }
    //我剩几张
    setSelfCardCnt(show: boolean, cardNum: number = 0) {
        this.nodeSelfCardCnt.active = false;
        if (show) {
            this.txtSelfCnt.string = cardNum.toString();
        }
    }
    //退出
    onBtnBackClick() {
        SoundManager.playClick();
        UIManager.Instace.showUI({
            path: UIConfig.MessageBoxCommonKey,
            data: {
                okName: "确定",
                cancleName: "取消",
                des: "游戏进行中,是否退出?",
                okFunc: () => {
                    GlobalData.cardInfo.oneCard = false;
                    GlobalData.cardInfo.sortCard = false;
                    //逻辑退出
                    let sendBuffer = PbManager.instance.sendMsg(GlobalData.C2S_Event.ExitGame, null);
                    GameSocket.send(sendBuffer);
                    //UI退出
                    console.log("nzp add 返回大厅 1");
                    UIManager.Instace.showUI({ path: UIConfig.LoadItemKey, data: GlobalData.sceneName.lobby });
                },
                cancleFunc: () => {

                }
            }
        });
    }
    //加人
    onBtnAddClick() {
        SoundManager.playClick();
        if (GameLogic.getAllUsers().length >= 4) {
            UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: "人已满,不能继续添加" });
            this.btnAdd.active = false;
            return;
        }
        let sendBuffer = PbManager.instance.sendMsg(GlobalData.C2S_Event.TestAddUser, null);
        GameSocket.send(sendBuffer);
    }
    //设置
    onBtnSetClick() {
        SoundManager.playClick();
        UIManager.Instace.showUI({ path: UIConfig.SettingItemKey });
    }
    //规则
    onBtnRuleClick() {
        SoundManager.playClick();
        UIManager.Instace.showUI({ path: UIConfig.RuleItemKey });
    }
    //分享
    onBtCopyClick() {
        SoundManager.playClick();
        utils.setClipboard(String(123457), (success: boolean) => {
            if (success) {
                UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: "已经复制到剪贴板" });
            } else {
                UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: "复制失败" });
            }
        });
    }
    //下坐 客户端(0,1,2,3) 服务(4,1,2,3)
    onBtSetDownClick(touch, index) {
        // console.log("SetDown data---> ", index);
        let tmpIdx: number = null;
        let selfIdx = GameLogic.getSelfData().index;
        if (index == 2) {
            tmpIdx = (selfIdx + 1) % 4;
        }
        else if (index == 3) {
            tmpIdx = (selfIdx + 2) % 4;
        }
        else if (index == 0) {
            tmpIdx = (selfIdx + 3) % 4;
        }

        if (tmpIdx == 0) { tmpIdx = 4; }
        SoundManager.playClick();
        UIManager.Instace.showUI({
            path: UIConfig.MessageBoxCommonKey,
            data: {
                okName: "确定",
                cancleName: "取消",
                des: "确定下坐吗?",
                okFunc: () => {
                    let baseInfo = GameMsg.User.create({ index: Number(tmpIdx) });
                    let baseBuffer = GameMsg.User.encode(baseInfo).finish();
                    let sendBuffer = PbManager.instance.sendMsg(GlobalData.C2S_Event.ChangeSeat, baseBuffer);
                    GameSocket.send(sendBuffer);
                },
                cancleFunc: () => {

                }
            }
        });
    }
    onLeftCardCnt(data: number[]) {
        // console.log("+++++++++++++ ",data);
        for (let i = 0; i < data.length; i++) {
            let viewId = GameLogic.getUserViewIdByIndex(i + 1);
            if (viewId == GlobalData.viewId.self) {
                continue;
            }
            this.userHeads[viewId].setLeftCnt(data[i]);
        }
    }
    //剩余牌
    onLeftCards(data: GameMsg.UserWin) {
        let viewId = GameLogic.getUserViewIdById(data.id);
        this.userHeads[viewId].setLeftCnt(data.win);
    }
    //发手牌显示牌背
    onLeftCardsBg(data: { showOther: boolean, showSelf: boolean, selfCnt: number }) {
        if (data.showOther) {
            for (let i = 0; i < 4; i++) {
                if (i == GlobalData.viewId.self) continue;
                this.userHeads[i].showLeftCntBg(true);
            }
        }
        if (data.showSelf != null) {
            this.setSelfCardCnt(data.showSelf, data.selfCnt);
        }
    }
    initCardBg() {
        for (let i = 0; i < 4; i++) {
            if (i == GlobalData.viewId.self) continue;
            this.userHeads[i].hideCardBg();
        }
    }
    //轮空
    onHideUpDownUserHead() {
        this.hideUpDownUserHead();
        this.userHeads[GlobalData.viewId.opposite].setLeftCnt(-1);
        this.setSelfCardCnt(false);
    }
    onEnable() {
        //    let data = GameLogic.convertCardListS2C(
        //         [
        //             21, 31, 41, 51, 61, 71, 81, 91, 101, 111, 121, 131, 141,  //红
        //             22, 32, 42, 52, 62, 72, 82, 92, 102, 112, 122, 132, 142,  //方
        //             23, 33, 43, 53, 63, 73, 83, 93, 103, 113, 123, 133, 143,  //梅
        //             24, 34, 44, 54, 64, 74, 84, 94, 104, 114, 124, 134, 144,  //黑
        //             155, 165
        //         ]);
        // GameLogic.convertCardListC2S(data);
    }
}
