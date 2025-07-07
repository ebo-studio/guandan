import { _decorator, Component, Label, Node, tween } from 'cc';
import PopWindow from '../PopWindow';
import { SoundManager } from '../../manager/SoundManager';
import { LobbyUserHeadItem } from '../LobbyUserHeadItem';
import { utils } from '../../common/utils';
import { GlobalData } from '../../manager/GlobalData';
import { AppGlobal } from '../../AppGlobal';
const { ccclass, property } = _decorator;

@ccclass('TeamUpItem')
export class TeamUpItem extends PopWindow {
    //自己头像
    @property(LobbyUserHeadItem)
    selfHead: LobbyUserHeadItem = null;
    //队友头像
    @property(LobbyUserHeadItem)
    otherHead: LobbyUserHeadItem = null;
    //默认
    @property(Node)
    picDefault: Node = null;
    @property(Label)
    txtNum: Label = null;

    @property(Node)
    nodeClose: Node = null;

    private timeFunc: Function = null;
    private totalTime: number = 2;
    private addTime: number = 0;

    private tmpData: GameMsg.ScoreGame = null;
    public setData(obj?: any): void {
        this.tmpData = obj;
        this.selfHead.setData({ head: GlobalData.userInfo.head_img, name: "" });
        this.addTime = 0;
        this.setVisabel(false);
        this.startRandom();
    }

    private setVisabel(show: boolean) {
        this.otherHead.node.active = show;
        this.picDefault.active = !show;
        this.nodeClose.active = !show;
        if (show) {
            this.otherHead.setData({ head: this.tmpData.headImg, name: "" });
        }
    }
    //随机
    startRandom() {
        this.setNum("00");
        let that = this;
        this.timeFunc = function () {
            that.addTime += 0.1;
            if (that.addTime >= that.totalTime) {
                that.unschedule(that.timeFunc);
                that.setNum(that.tmpData.zu.toString());
                that.setVisabel(true);
                that.delayClose();
                return;
            }
            let tmpNum = utils.random(10, 99).toString();
            that.setNum(tmpNum);
        }
        this.schedule(this.timeFunc, 0.1);
    }

    setNum(num: string) {
        if (num.length == 2) {
            this.txtNum.string = num[0] + " " + num[1];
        } else {
            this.txtNum.string = num;
        }
    }

    private delayClose() {
        this.setVisabel(true);
        tween(this.node)
            .delay(1)
            .call(() => {
                this.hide();
                AppGlobal.instance.onScoreRoomId(this.tmpData.roomId);
            })
            .start();
    }

    onBtnCloseClcik() {
        SoundManager.playClick();
        this.hide();
    }
}

