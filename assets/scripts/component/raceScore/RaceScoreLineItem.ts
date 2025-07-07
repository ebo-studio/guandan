import { _decorator, Color, color, Label, LabelOutline, Node, Sprite } from 'cc';
import AItemRenderer from '../virtualScroll/AItemRenerer';
import { GlobalData, RaceScoreLineData, RaceTimeType } from '../../manager/GlobalData';
import { SoundManager } from '../../manager/SoundManager';
import { utils } from '../../common/utils';
const { ccclass, property } = _decorator;
//参与状态[1:报名,2:已报名,3:过期]
export enum RaceJoinState {
    do,      //未报名
    done,    //已报名
    pass
}

@ccclass('RaceScoreLineItem')
export class RaceScoreLineItem extends AItemRenderer<RaceScoreLineData>  {
    //描述
    @property(Label)
    txtDes: Label = null;
    //起止时间
    @property(Label)
    txtTime: Label = null;
    //参与人数
    @property(Label)
    txtCnt: Label = null;
    //满50开赛
    @property(Label)
    txtCntCondition: Label = null;
    //即将开赛节点(倒计时)
    @property(Node)
    nodeTimeCondition: Node = null;
    //时
    @property(Label)
    txtHour: Label = null;
    //分
    @property(Label)
    txtMin: Label = null;
    //报名
    @property(Node)
    nodeDo: Node = null;
    //已报名
    @property(Node)
    nodeDone: Node = null;
    //报名结束
    @property(Node)
    nodePass: Node = null;
    //已开赛
    @property(Node)
    nodeHaveStart: Node = null;
    //提示
    @property(Label)
    txtTip: Label = null;

    private tmpData: RaceScoreLineData = null;

    protected dataChanged() {
        this.tmpData = this.data;
        this.txtDes.string = this.data.gameTitle;
        this.txtTime.string = this.data.gameStartTime;
        // this.txtCntCondition.string = "满" + this.data.totalNum + "开赛";
        this.refreshCnt(this.data.currentNum);
        this.changeTimeState(this.data.timeState);
        this.updateTime(this.data.leftTime);
    }
    refreshCnt(cnt: number) {
        this.txtCnt.string = "参与人数:" + cnt + "/" + this.data.totalNum;
    }
    //先判断时间,再判断状态
    changeTimeState(state: RaceTimeType) {
        this.nodeDo.active = false;
        this.nodeDone.active = false;
        this.nodePass.active = false;
        this.nodeHaveStart.active = false;
        this.nodeTimeCondition.active = false;
        if (state == RaceTimeType.register) {
            this.changeState(this.data.state);
            this.showTimeCondition(true, true);
        }
        else if (state == RaceTimeType.wait) {
            this.nodeDone.active = this.data.state == RaceJoinState.done;
            this.nodePass.active = this.data.state == RaceJoinState.do;
            this.showTimeCondition(this.data.state == RaceJoinState.done, false);
        }
        else if (state == RaceTimeType.start) {
            this.nodeHaveStart.active = true;
        }
    }
    //报名
    changeState(state: RaceJoinState) {
        this.nodeDo.active = state == RaceJoinState.do;
        this.nodeDone.active = state == RaceJoinState.done;
        this.nodeDo.getComponent(Sprite).grayscale = this.tmpData.gameType != 1;
        let lab = this.nodeDo.children[0].getComponent(Label);
        let labOut = this.nodeDo.children[0].getComponent(LabelOutline);
        if (this.tmpData.gameType == 1) {
            lab.color = new Color(255, 255, 255, 255);
            labOut.color = new Color(43, 85, 153, 255);
        } else {
            lab.color = new Color(160, 151, 151, 255);
            labOut.color = new Color(32, 32, 32, 255);
        }
    }
    showTimeCondition(show: boolean, type: boolean) {
        this.nodeTimeCondition.active = show;
        this.txtTip.string = type ? "报名截止" : "即将开赛";
    }
    updateTime(leftTime: number) {
        if (this.nodeTimeCondition.active && leftTime >= 0) {
            let strTime = utils.getTimeDesc3(leftTime).split(':');
            this.txtHour.string = strTime[0];
            this.txtMin.string = strTime[1];
        }
    }
    //报名
    onBtnRegisterClick() {
        SoundManager.playClick();
        console.log('-------------报名');
        utils.send(GlobalData.localEvent.RaceScoreLine, this.tmpData);
    }
}

