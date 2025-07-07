import { Label, _decorator } from 'cc';
import PopWindow from '../PopWindow';
import { SoundManager } from '../../manager/SoundManager';
import { PbManager } from '../../proto/PbManager';
import { GameSocket } from '../../manager/GameSocket';
import { GlobalData } from '../../manager/GlobalData';
const { ccclass, property } = _decorator;

@ccclass('FreeMatchItem')
export class FreeMatchItem extends PopWindow {
    @property(Label)
    txtCnt: Label = null;
    
    public setData(obj?: any): void {
        let data: GameMsg.Match = obj;
        let des1 = "当前自由玩在线人数: " + data.num;
        let des2 = "\n匹配中人数: " + data.match;
        this.txtCnt.string = des1 + des2;
    }
    //关闭
    onBtnCancelClick() {
        SoundManager.playClick();
        let sendBuffer = PbManager.instance.sendMsg(GlobalData.C2S_Event.CancelFreeMatch, null);
        GameSocket.send(sendBuffer);
        this.hide();
    }
  
}

