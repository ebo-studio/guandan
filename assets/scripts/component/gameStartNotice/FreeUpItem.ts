import { Label, _decorator } from 'cc';
import PopWindow from '../PopWindow';
import { SoundManager } from '../../manager/SoundManager';
import { GlobalData } from '../../manager/GlobalData';
const { ccclass, property } = _decorator;

@ccclass('FreeUpItem')
export class FreeUpItem extends PopWindow {
    //标题
    @property(Label)
    txtTitle: Label = null;
    //描述
    @property(Label)
    txtDes: Label = null;
    //得分
    @property(Label)
    txtScore: Label = null;

    public setData(obj?: any): void {
        let data: { type: number, score: number } = obj;
        if (data.type == GlobalData.gameType.kick) {
            this.txtTitle.string = "淘汰赛";
            this.txtDes.string = "本轮你已轮空,耐心等待下轮开启";
            this.txtScore.string = "";
        }
        else if (data.type == GlobalData.gameType.score) {
            this.txtTitle.string = "积分赛";
            this.txtDes.string = "本轮你已轮空,游戏已结束";
            this.txtScore.string = "本轮得分:" + data.score;
        }
    }
    //关闭
    onBtnCloseClick() {
        SoundManager.playClick();
        this.hide();
    }
}

