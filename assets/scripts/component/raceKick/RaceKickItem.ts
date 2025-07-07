import { _decorator, Label, Node } from 'cc';
import PopWindow from '../PopWindow';
import AVirtualScrollView from '../virtualScroll/AVirtualScrollView';
import { GlobalData, RaceKickLineData, RaceKickTeamInfo, RaceTimeType } from '../../manager/GlobalData';
import { SoundManager } from '../../manager/SoundManager';
import { utils } from '../../common/utils';
import { RaceJoinState } from '../raceScore/RaceScoreLineItem';
import { RaceKickBtnType, RaceKickLineItem } from './RaceKickLineItem';
import { LobbyUserHeadItem } from '../LobbyUserHeadItem';
import { UIManager } from '../../manager/UIManager';
import { UIConfig } from '../../manager/UIConfig';
import { KeyBoardType } from '../room/KeyBoardItem';
import { PbManager } from '../../proto/PbManager';
import { GameSocket } from '../../manager/GameSocket';
const { ccclass, property } = _decorator;

@ccclass('RaceKickItem')
export class RaceKickItem extends PopWindow {
    //滚动列表
    @property(AVirtualScrollView)
    public personScroll: AVirtualScrollView = null;
    //暂无提示
    @property(Node)
    nodeTip: Node = null;

    //左侧
    @property(Node)
    nodeTeamInfo: Node = null;
    //暂无
    @property(Node)
    nodeTeamTip: Node = null;
    @property(LobbyUserHeadItem)
    headItems: LobbyUserHeadItem[] = [];
    //队长
    @property(Node)
    nodeLeaders: Node[] = [];
    //队伍ID
    @property(Label)
    txtTeamId: Label = null;
    // @property(Node)
    // nodeJoin: Node = null;

    private timeFunc: Function = null;
    private teamId: number = null;
    private zuId: number = null;

    protected start(): void {
        utils.on(GlobalData.localEvent.RaceKickLine, this, this.onRaceKickLine);
        utils.on(GlobalData.localEvent.KickGameInfo, this, this.onKickGameInfo);
        utils.on(GlobalData.localEvent.LookKickGameInfo, this, this.onLookKickGameInfo);
    }
    protected onDestroy(): void {
        utils.off(GlobalData.localEvent.RaceKickLine, this, this.onRaceKickLine);
        utils.off(GlobalData.localEvent.KickGameInfo, this, this.onKickGameInfo);
        utils.off(GlobalData.localEvent.LookKickGameInfo, this, this.onLookKickGameInfo);
    }
    setData() {
        this.nodeTip.active = GlobalData.raceKickDataInfo.list.length == 0;
        this.personScroll.node.active = !this.nodeTip.active;
        if (this.personScroll.node.active) {
            this.personScroll.refreshData(GlobalData.raceKickDataInfo.list);
            this.personScroll.setTouchItemCallback((data) => {
                console.log("data---> ", data);
            }, this);
            //默认选中一个
            this.onRaceKickLine({ type: RaceKickBtnType.look, data: GlobalData.raceKickDataInfo.list[0] });
        } else {
            this.updateTeamInfo(null);
        }
        this.startTime();
    }
    //倒计时显示条件
    //1: 现在时间 < 报名结束时间 已报名
    //2: 现在时间< 游戏开始时间  已报名
    startTime() {
        this.stopTime();
        let listData = GlobalData.raceKickDataInfo.list;
        this.timeFunc = () => {
            for (let i = 0; i < listData.length; i++) {
                let item: RaceKickLineData = listData[i];
                //已报名,显示开赛倒计时
                if ((item.timeState == RaceTimeType.register || item.timeState == RaceTimeType.wait) && item.state == RaceJoinState.done) {
                    let startTime = item.start_timestamp;//new Date(item.gameStartTime).valueOf();
                    let nowTime = new Date().valueOf();
                    //开赛剩余时间
                    item.leftTime = Math.floor((startTime - nowTime) / 1000)
                    if (item.leftTime > 0) {
                        item.leftTime -= 1;
                        if (item.leftTime == 0) {
                            item.timeState = RaceTimeType.start;
                            this.changeState(item, true, false, true);
                        }
                        this.changeState(item, false, true);
                    }
                }
                //未报名,显示报名倒计时
                else if (item.timeState == RaceTimeType.register && item.state == RaceJoinState.do) {
                    let startTime = item.end_timestamp; //new Date(item.registerEndTime).valueOf();
                    let nowTime = new Date().valueOf();
                    //报名剩余时间
                    item.leftTime = Math.floor((startTime - nowTime) / 1000)
                    if (item.leftTime > 0) {
                        item.leftTime -= 1;
                        if (item.leftTime == 0) {
                            item.timeState = RaceTimeType.wait;
                            this.changeState(item, true, false, true);
                        }
                        this.changeState(item, false, true);
                    }
                }
                //未报名,已到报名截止时间(不显示,但是走倒计时)
                else if (item.timeState == RaceTimeType.wait && item.state == RaceJoinState.do) {
                    let startTime = item.start_timestamp; //new Date(item.gameStartTime).valueOf();
                    let nowTime = new Date().valueOf();
                    //剩余时间
                    item.leftTime = Math.floor((startTime - nowTime) / 1000)
                    if (item.leftTime > 0) {
                        item.leftTime -= 1;
                        if (item.leftTime == 0) {
                            item.timeState = RaceTimeType.start;
                            this.changeState(item, true, false, true);
                        }
                        this.changeState(item, false, true);
                    }
                }
            }
        }
        this.schedule(this.timeFunc, 1);
    }
    stopTime() {
        if (this.timeFunc) {
            this.unschedule(this.timeFunc);
            this.timeFunc = null;
        }
    }
    //报名
    onRaceKickLine(info: { type: RaceKickBtnType, data: RaceKickLineData }) {
        console.log("RaceKickLineData--> ", info.data);
        this.teamId = info.data.id;
        //报名
        if (info.type == RaceKickBtnType.register) {
            UIManager.Instace.showUI({
                path: UIConfig.CreateTeamItemKey,
                data: {
                    okFunc: () => {//创建队伍
                        GlobalData.requestCreateOutGameZu(
                            info.data.id, {
                            success: (datas) => {
                                UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: "创建队伍成功" });
                                //左侧更新
                                this.updateTeamInfo(datas);
                                //逻辑
                                this.updateRigesterState(info.data);
                            }
                        });
                    },
                    cancleFunc: () => {//加入队伍
                        UIManager.Instace.showUI({
                            path: UIConfig.KeyBoardItemKey,
                            data: {
                                type: KeyBoardType.joinTeam,
                                cb: (num: number) => {
                                    console.log("num--> ", num);
                                    GlobalData.requestAddOutGameZu(num, {
                                        success: (data) => {
                                            info.data.currentNum = data.user_num;
                                            UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: "加入队伍成功" });
                                            //逻辑
                                            this.updateRigesterState(info.data);
                                            //左侧
                                            this.requestTeamInfo(info.data.id);
                                        }
                                    });
                                }
                            }
                        });
                    }
                }
            });
        }
        //查询
        else if (info.type == RaceKickBtnType.look) {
            this.requestTeamInfo(info.data.id);
        }
    }
    //报名状态更新
    updateRigesterState(data: RaceKickLineData) {
        //逻辑
        let listData: RaceKickLineData[] = GlobalData.raceKickDataInfo.list;
        for (let i = 0; i < listData.length; i++) {
            let item = listData[i];
            if (item.id == data.id) {
                //报名状态
                item.state = RaceJoinState.done;
                //时间状态
                item.timeState = RaceTimeType.wait;
                this.changeState(data, true, false, true);
                break;
            }
        }
    }
    //状态
    changeState(data: RaceKickLineData, updateState: boolean = true, updateTime: boolean = false, updateTimeState: boolean = false) {
        let childs = this.personScroll.content.children;
        for (let i = 0; i < childs.length; i++) {
            let element = childs[i]?.getComponent(RaceKickLineItem);
            if (element && element.data.id == data.id) {
                if (updateTimeState) {
                    element.changeTimeState(data.timeState);
                }
                if (updateState) {
                    element.changeState(data.state);
                }
                if (updateTime) {
                    element.updateTime(data.leftTime);
                }
                break;
            }
        }
    }
    //队伍详情
    requestTeamInfo(id: number) {
        GlobalData.requestGameUserList(id, {
            success: (datas) => {
                console.log("队伍详情---> ", datas);
                this.updateTeamInfo(datas);
            }
        });
    }
    updateTeamInfo(datas: any) {
        if (datas && datas.zu_id && datas.list && datas.list.length > 0) {
            this.zuId = datas.zu_id;
            this.nodeTeamTip.active = false;
            this.nodeTeamInfo.active = true;
            this.txtTeamId.string = "队伍 : " + datas.zu_id;
            for (let i = 0; i < this.headItems.length; i++) {
                this.headItems[i].node.active = false;
                this.nodeLeaders[i].active = true;
            }
            //队长在前
            for (let index = 0; index < datas.list.length; index++) {
                const element: RaceKickTeamInfo = datas.list[index];
                if (element.captain) {
                    this.headItems[0].node.active = true;
                    this.headItems[0].setData({ head: element.head_img, name: element.name });
                    this.nodeLeaders[0].active = true;
                } else {
                    this.headItems[1].node.active = true;
                    this.headItems[1].setData({ head: element.head_img, name: element.name });
                    this.nodeLeaders[1].active = false;
                }
            }
        }
        else {
            this.nodeTeamTip.active = true;
            this.nodeTeamInfo.active = false;
        }
    }
    onKickGameInfo(data: GameMsg.OutGame) {
        let desLun = "当前进行第" + data.lun + "轮比赛\n";
        let desZhuo = "还有" + data.game + "桌比赛中";
        UIManager.Instace.showUI({
            path: UIConfig.MessageBoxCommonKey,
            data: {
                okName: "确定",
                cancleName: "取消",
                des: desLun + desZhuo,
                okFunc: () => {

                },
                cancleFunc: null
            }
        });
    }
    onLookKickGameInfo(id: number) {
        let baseInfo = GameMsg.OutGame.create({ gameId: id });
        let baseBuffer = GameMsg.OutGame.encode(baseInfo).finish();
        let sendBuffer = PbManager.instance.sendMsg(GlobalData.C2S_Event.OutGame, baseBuffer);
        GameSocket.send(sendBuffer);
        console.log("onLookKickGameInfo 1111");
    }
    onBtnCloseClick() {
        SoundManager.playClick();
        this.hide();
    }
    onBtnDismassClick() {
        SoundManager.playClick();
        UIManager.Instace.showUI({
            path: UIConfig.MessageBoxCommonKey,
            data: {
                okName: "确定",
                cancleName: "取消",
                des: "是否退出队伍?",
                okFunc: () => {
                    GlobalData.requestDismass(this.teamId, this.zuId, {
                        success: () => {
                            GlobalData.requestOutGameList({
                                success: () => {
                                    this.setData();
                                }
                            });
                        }
                    });
                },
                cancleFunc: ()=>{

                }
            }
        });
    }

}

