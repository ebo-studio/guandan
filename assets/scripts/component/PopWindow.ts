import { _decorator, Component, tween, Vec3, isValid } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('PopWindow')
export default class PopWindow extends Component {

    public show_callback: () => void = null;
    public hide_callback: () => void = null;

    protected onShow() { }
    protected onHide() { }

    public setData(obj?: any) {

    }

    public show() {
        this.node.active = true;
        //很奇怪0.1,适配会有问题,0没问题
        let that = this;
        this.node.scale = Vec3.ONE;
        // if (that.show_callback) {
        //     that.show_callback();
        // }
        // if (that.onShow) {
        //     that.onShow();
        // }
        this.node.scale = new Vec3(0, 0, 0);
        tween(this.node)
            .sequence(
                tween(this.node)
                    .to(0.1, { scale: new Vec3(1, 1, 1) }),
                tween(this.node)
                    .call(function () {
                        if (that.show_callback) {
                            that.show_callback();
                        }
                        if (that.onShow) {
                            that.onShow();
                        }
                    })
            )
            .start();
    }

    public hide() {
        if (isValid(this.node)) {
            let that = this;
            that.node.active = false;
            if (that.hide_callback) {
                that.hide_callback();
            }
            if (that.onHide) {
                that.onHide();
            }
            // tween(this.node)
            //     .sequence(
            //         tween(this.node)
            //             .to(0.1, { scale: new Vec3(0, 0, 0) }),
            //         tween(this.node)
            //             .call(function () {
            //                 that.node.active = false;
            //                 if (that.hide_callback) {
            //                     that.hide_callback();
            //                 }
            //                 if (that.onHide) {
            //                     that.onHide();
            //                 }
            //             })
            //     )
            //     .start();
        }
    }
}
