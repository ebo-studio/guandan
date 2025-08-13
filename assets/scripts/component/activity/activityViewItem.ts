import { _decorator } from "cc";
import PopWindow from "../PopWindow";
import { SoundManager } from "../../manager/SoundManager";
import { UIManager } from "../../manager/UIManager";
import { UIConfig } from "../../manager/UIConfig";

const { ccclass, property } = _decorator;

@ccclass('activityViewItem')
export class activityViewItem extends PopWindow {


    public setData(obj?: any): void {

    }

    /**
     * 前往签到
     */
    gotoSignIn() {
        SoundManager.playClick();
        UIManager.Instace.showUI({ path: UIConfig.signInViewItemKey });
        this.onClose();
    }


    /**
     * 前往邀请
     */
    gotoShareView() {
        SoundManager.playClick();
        UIManager.Instace.showUI({ path: UIConfig.shareViewItemKey});
        this.onClose();
    }

    onClose() {
        this.hide();
    }
}