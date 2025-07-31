import { _decorator, Label, Node } from 'cc';
import PopWindow from './PopWindow';
import { SoundManager } from '../manager/SoundManager';
const { ccclass, property } = _decorator;

@ccclass('MessageBoxCommon')
export class MessageBoxCommon extends PopWindow {
    //描述
    @property(Label)
    texDes: Label = null!;
    //确定
    @property(Label)
    txtOk: Label = null!;
    //取消
    @property(Label)
    txtCancle: Label = null!;
    //取消
    @property(Node)
    nodeCancel: Node = null!;

    private okFunc: Function = null;
    private cancleFunc: Function = null;
    private autoClose: boolean = true;

    setData(data: { okName: string, cancleName: string, des: string, okFunc: Function, cancleFunc: Function }, autoClose: boolean = true) {
        this.txtOk.string = data.okName;
        this.txtCancle.string = data.cancleName;
        this.texDes.string = data.des;
        this.okFunc = data.okFunc;
        this.cancleFunc = data.cancleFunc;
        this.autoClose = autoClose;
        this.nodeCancel.active = Boolean(data.cancleFunc);
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
}

