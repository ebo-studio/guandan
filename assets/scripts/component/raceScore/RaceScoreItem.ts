import { _decorator, Node } from 'cc';
import PopWindow from '../PopWindow';
import AVirtualScrollView from '../virtualScroll/AVirtualScrollView';
import { GlobalData, RaceScoreLineData, RaceTimeType } from '../../manager/GlobalData';
import { SoundManager } from '../../manager/SoundManager';
import { utils } from '../../common/utils';
import { RaceJoinState, RaceScoreLineItem } from './RaceScoreLineItem';
import { UIManager } from '../../manager/UIManager';
import { UIConfig } from '../../manager/UIConfig';
const { ccclass, property } = _decorator;

@ccclass('RaceScoreItem')
export class RaceScoreItem extends PopWindow {
    //滚动列表
    @property(AVirtualScrollView)
    public personScroll: AVirtualScrollView = null;
    //暂无提示
    @property(Node)
    nodeTip: Node = null;

    private timeFunc: Function = null;

    protected start(): void {
        utils.on(GlobalData.localEvent.RaceScoreLine, this, this.onRaceScoreLine);
    }

    protected onDestroy(): void {
        utils.off(GlobalData.localEvent.RaceScoreLine, this, this.onRaceScoreLine);
    }
    setData() {
        this.nodeTip.active = GlobalData.raceScoreDataInfo.list.length == 0;
        this.personScroll.node.active = !this.nodeTip.active;
        if (this.personScroll.node.active) {
            this.personScroll.refreshData(GlobalData.raceScoreDataInfo.list);
            this.personScroll.setTouchItemCallback((data) => {
                console.log("data---> ", data);
            }, this);
        }
        this.startTime();
    }
    //倒计时显示条件
    //1: 现在时间 < 报名结束时间 已报名
    //2: 现在时间< 游戏开始时间  已报名
    startTime() {
        this.stopTime();
        let listData = GlobalData.raceScoreDataInfo.list;
        this.timeFunc = () => {
            for (let i = 0; i < listData.length; i++) {
                let item: RaceScoreLineData = listData[i];
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
                    let startTime = item.start_timestamp;//new Date(item.gameStartTime).valueOf();
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
    //积分
    onRaceScoreLine(data: RaceScoreLineData) {
        GlobalData.requestJoinGame(data.id, {
            success: (data1) => {
                UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: "报名成功" });
                let listData: RaceScoreLineData[] = GlobalData.raceScoreDataInfo.list;
                for (let i = 0; i < listData.length; i++) {
                    let item = listData[i];
                    if (item.id == data.id) {
                        data.currentNum = data1.user_num;
                        //报名状态
                        item.state = RaceJoinState.done;
                        //时间状态
                        item.timeState = RaceTimeType.wait;
                        this.changeState(data, true, false, true);
                        break;
                    }
                }
            }
        });
    }
    //状态
    changeState(data: RaceScoreLineData, updateState: boolean = true, updateTime: boolean = false, updateTimeState: boolean = false) {
        let childs = this.personScroll.content.children;
        for (let i = 0; i < childs.length; i++) {
            let element = childs[i].getComponent(RaceScoreLineItem);
            if (element && element.data.id == data.id) {
                if (updateTimeState) {
                    element.changeTimeState(data.timeState);
                }
                if (updateState) {
                    element.changeState(data.state);
                    element.refreshCnt(data.currentNum);
                }
                if (updateTime) {
                    element.updateTime(data.leftTime);
                }
                break;
            }
        }
    }
    onBtnCloseClick() {
        SoundManager.playClick();
        this.hide();
    }
}

