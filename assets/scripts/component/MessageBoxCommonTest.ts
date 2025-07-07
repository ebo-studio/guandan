import { _decorator, Button, Color, Label, Node, Sprite } from 'cc';
import PopWindow from './PopWindow';
import { SoundManager } from '../manager/SoundManager';
const { ccclass, property } = _decorator;

@ccclass('MessageBoxCommonTest')
export class MessageBoxCommonTest extends PopWindow {
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

    @property(Node)
    public btnNode1: Node = null;
    @property(Node)
    public btnNode2: Node = null;

    private okFunc: Function = null;
    private cancleFunc: Function = null;
    private autoClose: boolean = true;

    private numCode: number = 0;

    setData(data: { okName: string, cancleName: string, des: string, okFunc: Function, cancleFunc: Function }, autoClose: boolean = true) {
        this.texDes.string = data.des;
        this.okFunc = data.okFunc;
        this.cancleFunc = data.cancleFunc;
        this.autoClose = autoClose;
        this.nodeCancel.active = Boolean(data.cancleFunc);
    }

    public onOkBtnClick() {
        SoundManager.playClick();
        if (this.okFunc) {
            this.okFunc(this.numCode);
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
    public onBtnCodeClick(touch, data) {
        this.numCode = Number(data);
        console.log('numCode-----> ', this.numCode);
        this.checkCode(this.numCode);
    }
    checkCode(num: number) {
        //重置
        for (let i = 0; i < this.btnNode1.children.length; i++) {
            const element = this.btnNode1.children[i];
            if (element.getComponent(Button)) {
                if (element.name == "Button" + num) {
                    element.getComponent(Sprite).color = new Color(255, 0, 0, 255);
                }
                else {
                    element.getComponent(Sprite).color = new Color(255, 255, 255, 255);
                }
            }
        }
        for (let i = 0; i < this.btnNode2.children.length; i++) {
            const element = this.btnNode2.children[i];
            if (element.getComponent(Button)) {
                if (element.name == "Button" + num) {
                    element.getComponent(Sprite).color = new Color(255, 0, 0, 255);
                }
                else {
                    element.getComponent(Sprite).color = new Color(255, 255, 255, 255);
                }
            }
        }
    }
    protected onDisable(): void {
        this.checkCode(0);
    }
}

