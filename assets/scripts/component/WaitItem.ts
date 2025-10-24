import { _decorator, Node, Label, Sprite, color, tween, Tween } from 'cc';
import PopWindow from './PopWindow';
const { ccclass, property } = _decorator;

@ccclass('WaitItem')
export class WaitItem extends PopWindow {
    @property(Node)
    picBg: Node = null!;

    @property(Node)
    picLoad: Node = null!;

    @property(Label)
    txtDes: Label = null!;

    private _rotateTween: Tween<Node> | null = null;

    setData(data: { opacity: number; des: string }) {
        if (!this.picBg || !this.picLoad || !this.txtDes) {
            console.warn('WaitItem 节点未完整绑定');
            return;
        }

        const alpha = Math.min(Math.max(data.opacity * 255, 0), 255);
        this.picBg.getComponent(Sprite)!.color = color(0, 0, 0, alpha);

        this.picLoad.active = data.opacity !== 0;
        this.txtDes.string = data.opacity === 0 ? '' : data.des;

        // 停止旧动画，防止重复叠加
        if (this._rotateTween) this._rotateTween.stop();
        if (this.picLoad.active) {
            this._rotateTween = tween(this.picLoad)
                .by(2, { angle: -360 })
                .repeatForever()
                .start();
        }
    }

    updateMessage(des: string) {
        this.txtDes.string = des;
    }

    show() {
        if (this.node) this.node.active = true;
    }

    hide() {
        if (this.node) this.node.active = false;
    }
}
