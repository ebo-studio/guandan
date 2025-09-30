import { _decorator, Component, Label, Vec3, tween, UIOpacity, Tween } from 'cc';
import PopWindow from './PopWindow';
const { ccclass, property } = _decorator;

@ccclass('MessageHint')
export class MessageHint extends PopWindow {

    @property(Label)
    labelText: Label = null;
    @property({ type: Vec3 })
    startPosition: Vec3 = new Vec3(0, -50, 0);
    @property
    fadeInTime: number = 0.5;
    @property
    stayTime: number = 1;
    @property
    fadeOutTime: number = 0.5;


    public setData(text: string) {
        // Tween.stopAll();
        this.labelText.string = text;
        if (this.startPosition) {
            this.node.setPosition(this.startPosition);
        } else {
            console.log("MessageHint.startPosition 未赋值，使用默认 (0,0,0)");
            this.node.setPosition(new Vec3(0, 0, 0));
        }
        this.node.getComponent(UIOpacity).opacity = 0;

        //3.0 UIOpacity 必须单独使用, 不能放到sequence中(类型不同)
        tween(this.node.getComponent(UIOpacity))
            .to(this.fadeInTime, { opacity: 255 }, { easing: 'quadOut' })
            .start()

        tween(this.node)
            .to(this.fadeInTime, { position: new Vec3(0, 150, 0) }, { easing: 'quadOut' })
            .delay(this.stayTime)
            .call(() => {
                tween(this.node.getComponent(UIOpacity))
                    .to(this.fadeOutTime, { opacity: 0 }, { easing: 'quadIn' })
                    .call(() => {
                    })
                    .start()
            })
            .start();
    }
}
