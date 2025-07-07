import { _decorator, Label, Node } from 'cc';
import AItemRenderer from '../virtualScroll/AItemRenerer';
import { GlobalData, RaceAuditionLineData } from '../../manager/GlobalData';
import { SoundManager } from '../../manager/SoundManager';
import { utils } from '../../common/utils';

export enum RaceAuditionState {
    pre,      //开始前   倒计时
    now,      //开始了   倒计时
    pass,     //开始后   没有倒计时
    allDay,   //全天
}
const { ccclass, property } = _decorator;
@ccclass('RaceAuditionLineItem')
export class RaceAuditionLineItem extends AItemRenderer<RaceAuditionLineData>  {
    //描述
    @property(Label)
    txtDes: Label = null;
    //起止时间
    @property(Label)
    txtTimeBig: Label = null;
    //具体时间
    @property(Label)
    txtTimeSmall: Label = null;
    //报名
    @property(Node)
    nodeNow: Node = null;
    //报名结束
    @property(Node)
    nodePass: Node = null;

    private tmpData: RaceAuditionLineData = null;

    protected dataChanged() {
        this.tmpData = this.data;
        this.txtDes.string = this.data.gameTitle;
        this.txtTimeBig.string = "比赛时间: " + this.data.startTime + " - " + this.data.endTime;
        this.txtTimeSmall.string = "每天时间: " + this.data.startHour + " - " + this.data.endHour;
        this.changeState(this.data.state);
    }
    //报名
    changeState(state: RaceAuditionState) {
        this.nodeNow.active = state == RaceAuditionState.now || state == RaceAuditionState.allDay;
        this.nodePass.active = !this.nodeNow.active;
    }
    //匹配
    onBtnRegisterClick() {
        SoundManager.playClick();
        console.log('-------------匹配');
        utils.send(GlobalData.localEvent.RaceAuditionLine, this.tmpData);
    }
}

