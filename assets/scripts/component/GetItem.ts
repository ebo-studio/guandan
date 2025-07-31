import { _decorator, Label, sp } from 'cc';
import PopWindow from './PopWindow';
const { ccclass, property } = _decorator;

@ccclass('GetItem')
export class GetItem extends PopWindow {

    @property(sp.Skeleton)
    public ani: sp.Skeleton = null;

    @property(Label)
    public propCount: Label = null;

    public setData(obj?: any): void {
        // console.log('奖励', obj);
        this.propCount.string = 'x' + obj.count;
        this.ani.node.active = true;
        this.ani.setAnimation(0, 'chusheng', false);
        this.ani.setCompleteListener(()=>{
            if(this.ani.animation == 'chusheng') {
                this.ani.setAnimation(0, 'loop', true);
            }
            
        })
    }

    public OnCloseClicked() {
        this.ani.loop = false;
        // this.ani.node.active = false;
        // this.ani.setAnimation(0, 'chusheng', false);
        // SoundManager.playClick();
        this.hide();
    }
}

