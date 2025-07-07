import { _decorator, Node, Label, Sprite, color, tween } from 'cc';
import PopWindow from './PopWindow';
const { ccclass, property } = _decorator;

@ccclass('WaitItem')
export class WaitItem extends PopWindow {
    //背景
    @property(Node)
    picBg: Node = null!;
    //背景
    @property(Node)
    picLoad: Node = null!;
    //文本
    @property(Label)
    txtDes: Label = null!;

    setData(data: { opacity: number, des: string }) {
        this.picBg.getComponent(Sprite).color = color(0, 0, 0, data.opacity * 255);
        this.picLoad.active = data.opacity != 0;
        if (data.opacity == 0) {
            this.txtDes.string = "";
        } else {
            this.txtDes.string = data.des;
        }
        if (this.picLoad) {
            tween(this.picLoad)
                .by(2, { angle: -360 }).repeatForever()
                .start();
        }
    }
    show() {
        this.node.active = true;
    }
    hide() {
        this.node.active = false;
    }
}

