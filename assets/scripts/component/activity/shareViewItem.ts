import { _decorator, sp } from 'cc';
import PopWindow from '../PopWindow';
import { SoundManager } from '../../manager/SoundManager';
import { PbManager } from '../../proto/PbManager';
import { GameSocket } from '../../manager/GameSocket';
import { GlobalData } from '../../manager/GlobalData';
const { ccclass, property } = _decorator;

@ccclass('shareViewItem')
export class shareViewItem extends PopWindow {

    @property(sp.Skeleton)
    public ani: sp.Skeleton = null;

    public setData(obj?: any): void {
        this.ani.node.active = true;
        this.ani.setAnimation(0, 'chusheng', false);
        this.ani.setCompleteListener(()=>{
            if(this.ani.animation == 'chusheng') {
                this.ani.setAnimation(0, 'loop', true);
            }
            
        })
    }

    public start(): void {
        // this.ani.node.active = true;
        // this.ani.setAnimation(0, 'chusheng', false);
        // this.ani.setCompleteListener(()=>{
        //     if(this.ani.animation == 'chusheng') {
        //         this.ani.setAnimation(0, 'loop', true);
        //     }
            
        // })
    }
    //关闭
    // onBtnCancelClick() {
    //     SoundManager.playClick();
    //     let sendBuffer = PbManager.instance.sendMsg(GlobalData.C2S_Event.CancelAuditionMatch, null);
    //     GameSocket.send(sendBuffer);
    //     this.hide();
    // }

    public OnCloseClicked() {
        this.ani.loop = false;
        // this.ani.node.active = false;
        // this.ani.setAnimation(0, 'chusheng', false);
        // SoundManager.playClick();
        this.hide();
    }
}

