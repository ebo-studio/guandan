import { _decorator, Button, Color, Label, Sprite } from 'cc';
import PopWindow from '../PopWindow';
import { SoundManager } from '../../manager/SoundManager';
import { PbManager } from '../../proto/PbManager';
import { GameSocket } from '../../manager/GameSocket';
import { GlobalData } from '../../manager/GlobalData';
import { UIManager } from '../../manager/UIManager';
import { UIConfig } from '../../manager/UIConfig';
import { SignInManager } from '../../manager/SignInManager';
const { ccclass, property } = _decorator;

@ccclass('signInViewItem')
export class signInViewItem extends PopWindow {

    @property(Button)
    signInBtn: Button = null;

    @property(Button)
    alsignInBtn: Button = null;

    public setData(obj?: any): void {
        if(SignInManager.isTodaySigned()) {
            // this.signInLabel.string = '明天再来';
            // this.signInBtn.interactable = false;
            this.signInBtn.node.active = false;
            this.alsignInBtn.node.active = true;
        }
        else {
            this.signInBtn.node.active = true;
            this.alsignInBtn.node.active = false;
            // this.signInBtn.node.active = true;
        }
    }

    public onClick() {
        this.hide();
    }
    //关闭
    // onBtnCancelClick() {
    //     SoundManager.playClick();
    //     let sendBuffer = PbManager.instance.sendMsg(GlobalData.C2S_Event.CancelAuditionMatch, null);
    //     GameSocket.send(sendBuffer);
    //     this.hide();
    // }

    public OnCloseClicked() {
        UIManager.Instace.showUI({ path: UIConfig.getItemKey, data: {"count": 10}});
        SignInManager.signToday();
        // this.statusLabel.string = "签到成功 🎉";
        this.signInBtn.interactable = false;
        // SoundManager.playClick();
        this.hide();
    }
}

