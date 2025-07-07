import { _decorator, Label, Node } from 'cc';
import PopWindow from './PopWindow';
import { SoundManager } from '../manager/SoundManager';
const { ccclass, property } = _decorator;

@ccclass('CreateTeamItem')
export class CreateTeamItem extends PopWindow {

    private okFunc: Function = null;
    private cancleFunc: Function = null;
    private autoClose: boolean = true;

    setData(data: { okFunc: Function, cancleFunc: Function }, autoClose: boolean = true) {
        this.okFunc = data.okFunc;
        this.cancleFunc = data.cancleFunc;
        this.autoClose = autoClose;
    }

    public onOkBtnClick() {
        SoundManager.playClick();
        if (this.okFunc) {
            this.okFunc();
        }
        if(this.autoClose){
            this.hide();
        }
    }
    public onCancleBtnClick() {
        SoundManager.playClick();
        if (this.cancleFunc) {
            this.cancleFunc();
        }
        if(this.autoClose){
            this.hide();
        }
    }
    public onCloseBtnClick(){
        SoundManager.playClick();
        this.hide();
    }
}

