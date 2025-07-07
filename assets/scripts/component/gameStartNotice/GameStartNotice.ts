import { _decorator, Label } from 'cc';
import PopWindow from '../PopWindow';
import { SoundManager } from '../../manager/SoundManager';
import { utils } from '../../common/utils';
const { ccclass, property } = _decorator;

@ccclass('GameStartNotice')
export class GameStartNotice extends PopWindow {
    //倒计时
    @property(Label)
    txtTime: Label = null;

    private timeFunc: Function = null;
    private leftTime: number = 0;

    public setData(obj?: any): void {
        this.leftTime = Number(obj);
        this.timeDown();
    }

    timeDown() {
        if (this.timeFunc) {
            this.unschedule(this.timeFunc);
            this.timeFunc = null;
        }
        this.txtTime.node.active = true;
        this.setTime();
        let that = this;
        this.timeFunc = function () {
            that.leftTime -= 1;
            that.setTime();
            if (that.leftTime <= 0) {
                that.unschedule(that.timeFunc);
                that.hide();
            }
        }
        this.schedule(this.timeFunc, 1);
    }
    //时间
    setTime() {
        if (this.leftTime >= 0) {
            this.txtTime.string = utils.getTimeDesc(this.leftTime);
        }
    }
    //关闭
    onBtnCloseClick() {
        SoundManager.playClick();
        this.hide();
    }
}

