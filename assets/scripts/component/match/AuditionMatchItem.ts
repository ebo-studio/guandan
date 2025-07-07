import { _decorator } from 'cc';
import PopWindow from '../PopWindow';
import { SoundManager } from '../../manager/SoundManager';
import { PbManager } from '../../proto/PbManager';
import { GameSocket } from '../../manager/GameSocket';
import { GlobalData } from '../../manager/GlobalData';
const { ccclass, property } = _decorator;

@ccclass('AuditionMatchItem')
export class AuditionMatchItem extends PopWindow {
    public setData(obj?: any): void {
  
    }
    //关闭
    onBtnCancelClick() {
        SoundManager.playClick();
        let sendBuffer = PbManager.instance.sendMsg(GlobalData.C2S_Event.CancelAuditionMatch, null);
        GameSocket.send(sendBuffer);
        this.hide();
    }
}

