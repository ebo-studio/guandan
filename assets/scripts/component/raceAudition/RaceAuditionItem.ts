import { _decorator, Node } from 'cc';
import PopWindow from '../PopWindow';
import AVirtualScrollView from '../virtualScroll/AVirtualScrollView';
import { GlobalData, RaceAuditionLineData } from '../../manager/GlobalData';
import { SoundManager } from '../../manager/SoundManager';
import { utils } from '../../common/utils';
import { RaceAuditionLineItem, RaceAuditionState } from './RaceAuditionLineItem';
import { PbManager } from '../../proto/PbManager';
import { GameSocket } from '../../manager/GameSocket';
const { ccclass, property } = _decorator;

@ccclass('RaceAuditionItem')
export class RaceAuditionItem extends PopWindow {
    //滚动列表
    @property(AVirtualScrollView)
    public personScroll: AVirtualScrollView = null;
    //暂无提示
    @property(Node)
    nodeTip: Node = null;

    private timeFunc: Function = null;

    protected start(): void {
        utils.on(GlobalData.localEvent.RaceAuditionLine, this, this.onRaceAuditionLine);
    }

    protected onDestroy(): void {
        utils.off(GlobalData.localEvent.RaceAuditionLine, this, this.onRaceAuditionLine);
    }
    setData() {
        // //测试
        // let tmpData = new RaceAuditionLineData();
        // tmpData.id = 101;
        // tmpData.gameTitle = "这是个比赛";
        // tmpData.registerEndTime = "2023-10-13 11:01:20"
        // tmpData.gameStartTime = "2023-10-13 11:01:00"
        // tmpData.end_timestamp = new Date(tmpData.registerEndTime).valueOf();
        // tmpData.start_timestamp = new Date(tmpData.gameStartTime).valueOf();
        // let startTime = tmpData.start_timestamp;
        // let endTime = tmpData.end_timestamp;
        // let nowTime = new Date().valueOf();
        // if (nowTime <= startTime) {
        //     tmpData.state = RaceAuditionState.pre;
        // }
        // else if (nowTime >= endTime) {//过了比赛时间
        //     tmpData.state = RaceAuditionState.pass;
        // } else {//在比赛时间
        //     tmpData.state = RaceAuditionState.now;
        // }
        // console.log("state--> ", tmpData.state);
        // GlobalData.raceAuditionDataInfo.list.push(tmpData);
        ////////////////////////////////

        this.nodeTip.active = GlobalData.raceAuditionDataInfo.list.length == 0;
        this.personScroll.node.active = !this.nodeTip.active;
        if (this.personScroll.node.active) {
            this.personScroll.refreshData(GlobalData.raceAuditionDataInfo.list);
            this.personScroll.setTouchItemCallback((data) => {
                console.log("data---> ", data);
            }, this);
        }
        this.startTime();
    }
    //倒计时显示条件
    // pre,   开始前   开始剩余倒计时
    // now,   开始了   结束剩余倒计时
    // pass,  开始后   没有倒计时(第二天才开始,没有必要显示)
    startTime() {
        this.stopTime();
        let listData = GlobalData.raceAuditionDataInfo.list;
        this.timeFunc = () => {
            for (let i = 0; i < listData.length; i++) {
                let item: RaceAuditionLineData = listData[i];
                //开始前   开始剩余倒计时
                if (item.state == RaceAuditionState.pre) {
                    let startTime = item.start_timestamp;
                    let nowTime = new Date().valueOf();
                    //开赛剩余时间
                    item.leftTime = Math.floor((startTime - nowTime) / 1000)
                    if (item.leftTime > 0) {
                        item.leftTime -= 1;
                        if (item.leftTime == 0) {
                            item.state = RaceAuditionState.now;
                            this.changeState(item);
                        }
                    }
                    // console.log("开始剩余倒计时: ",item.leftTime);
                }
                //开始了   结束剩余倒计时
                else if (item.state == RaceAuditionState.now) {
                    let startTime = item.end_timestamp;
                    let nowTime = new Date().valueOf();
                    //报名剩余时间
                    item.leftTime = Math.floor((startTime - nowTime) / 1000)
                    if (item.leftTime > 0) {
                        item.leftTime -= 1;
                        if (item.leftTime == 0) {
                            item.state = RaceAuditionState.pass;
                            this.changeState(item);
                        }
                    }
                    // console.log("结束剩余倒计时: ",item.leftTime);
                }
                //开始后   没有倒计时
                else if (item.state == RaceAuditionState.pass) {

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
    //状态
    changeState(data: RaceAuditionLineData) {
        let childs = this.personScroll.content.children;
        for (let i = 0; i < childs.length; i++) {
            let element = childs[i].getComponent(RaceAuditionLineItem);
            if (element && element.data.id == data.id) {
                element.changeState(data.state);
                break;
            }
        }
    }
    //匹配
    onRaceAuditionLine(data: RaceAuditionLineData) {
        GlobalData.cardInfo.gameType = GlobalData.gameType.audition;
        let baseInfo = GameMsg.Room.create({ roomId: data.id });
        let baseBuffer = GameMsg.Room.encode(baseInfo).finish();
        let sendBuffer = PbManager.instance.sendMsg(GlobalData.C2S_Event.AuditionMatch, baseBuffer);
        GameSocket.send(sendBuffer);
    }
    onBtnCloseClick() {
        SoundManager.playClick();
        this.hide();
    }
}

