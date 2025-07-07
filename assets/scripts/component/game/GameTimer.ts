import { _decorator, Component, Label, Node } from 'cc';
import { SoundManager } from '../../manager/SoundManager';
const { ccclass, property } = _decorator;

@ccclass('GameTimer')
export class GameTimer extends Component {
    //倒计时
    @property(Label)
    txtTime: Label = null;

    private timeNum: number = 0
    private timeFunc: Function = null;
    private callBack: Function = null;

    runTime(num: number) {
        this.show();
        this.stopTime();
        this.timeNum = num;
        this.setTime(this.timeNum);
        this.timeFunc = () => {
            this.timeNum -= 1;
            this.setTime(this.timeNum);
            if (this.timeNum <= 3) {
                SoundManager.playSound("audio/sound/clock");
            }
            if (Number(this.txtTime.string) <= 0) {
                if (this.callBack) this.callBack();
                this.stopTime();
                this.hide();
            }
        }
        this.schedule(this.timeFunc, 1);
    }
    private setTime(num: number) {
        this.txtTime.string = num.toString();
    }
    stopTime() {
        if (this.timeFunc != null) {
            this.unschedule(this.timeFunc);
            this.timeFunc = null;
        }
    }
    setFunc(callBack: Function) {
        this.callBack = callBack;
    }
    show() {
        this.node.active = true;
    }
    hide() {
        this.node.active = false;
    }
}

