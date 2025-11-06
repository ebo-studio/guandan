
import { sys, _decorator, Component, Sprite, Label, lerp, assetManager, UITransform, Node } from "cc";
import { EDITOR } from "cc/env";
import { initData } from "./GameDefine";
import '../main/script/Main';
import "db://assets/main/script/Main";
import { _main, boot, initApeng } from "../main/script/Main";
// ✅ 如果你要访问 Main.ts 里的变量/方法（比如 _main 或 boot）


// 加载主包
// let isEnter = false;
// (function () {
//     if (EDITOR)
//         return
//     if (isEnter)
//         return
//     isEnter = true

//     let _wx = (window as any)["wx"]
//     if (_wx && _wx.startRenderDestroy)
//         _wx.startRenderDestroy()

//     console.log("load bundle main " + Date.now())
//     assetManager.loadBundle("main2")
// })();


// cc启动脚本
const { ccclass, property, menu } = _decorator;

const textStr = [
    "加载中",
    "加载中·",
    "加载中··",
    "加载中···",
]

const TARGET_APENG_SCENE = "Scene"; // ← 你的 apeng 目标场景名（按你工程来）


@ccclass("App")
@menu("App")
export class App extends Component {


    private spriteRatio: Sprite = null!
    private ratio = 0
    private sp: UITransform = null!
    private topText: Label = null!
    private textTime = 0
    private textIndex = 0
    private followRatio: Node = null!

    private ratioWidth = 0

    async start() {
        console.log("[App] start - 准备加载 main2.bundle");

        // ✅ 加载 main2.bundle
        assetManager.loadBundle("main2", (err, bundle) => {
            if (err) {
                console.error("❌ 加载 main2 失败:", err);
                return;
            }
            console.log("[App] start - 直接调用 Main.ts 的初始化逻辑");

            // ✅ 直接执行 Main.ts 的 boot()RaceAuditionItem
            if (typeof initApeng === "function") {
                // this._killSelfSafely();
                initApeng();
                // const ap = (window as any).apeng;
                // if (ap && ap._scene && ap._scene.EventType) {
                //     const onChanged = (url: string) => {
                //         // 这里如果你想任何 apeng 场景都销毁 App，就去掉判断
                //         if (!TARGET_APENG_SCENE || url === TARGET_APENG_SCENE) {
                //             console.log(`[App] 侦测到 apeng 场景切换成功: ${url} → 销毁 App`);
                //             // 及时解绑，避免回调野指针
                //             ap._scene.off(ap._scene.EventType.CHANG_SUCCESS, onChanged, this);
                //             this.scheduleOnce(() => {
                //                 console.log("[App] 延迟销毁触发");
                //                 this._killSelfSafely();
                //             }, 0);
                //         }
                //     };
                //     ap._scene.on(ap._scene.EventType.CHANG_SUCCESS, onChanged, this);
                // } else {
                //     // 如果拿不到事件（极端情况），延迟1帧也自杀，避免 App 留存
                //     console.warn("[App] 未能订阅 apeng 场景事件，采用兜底自清");
                //     this.scheduleOnce(() => this._killSelfSafely(), 0);
                // }
            } else {
                console.warn("⚠️ Main.ts 未导出 boot 函数，可能已自动执行初始化。");
            }
        });
    }

    async onLoad() {
        let loading = this.node.getChildByName("Loading")!
        let ratio = loading.getChildByName("Ratio")!

        this.topText = ratio.getChildByName("TopText")!.getComponent(Label)!
        this.topText.node.active = initData.showLoadingText

        let dec = loading.getChildByName("BottomDec")!
        if (initData.versionId && initData.showLoadingText) {
            dec.active = false
            dec.getComponentInChildren(Label)!.string = initData.versionId
        }
        else
            dec.active = false

        // loading.getChildByName("Age")!.active = initData.showLoadingText

        let Bg = ratio.getChildByName("Bg")!

        let Ratio = Bg.getChildByName("Ratio")!
        this.ratioWidth = Ratio.getComponent(UITransform)!.width
        this.spriteRatio = Ratio.getComponent(Sprite)!
        this.sp = this.spriteRatio.getComponent(UITransform)!

        this.followRatio = Bg.getChildByName("FollowRatio")!

        this.updateRatio()
    }

    private updateRatio() {
        if (!this.spriteRatio?.isValid) return;

        this.spriteRatio.fillRange = this.ratio;

        if (this.followRatio?.isValid) {
            this.followRatio.setPosition(this.ratioWidth * (this.ratio - 0.5), 0);
        }
    }

    protected update(dt: number): void {
        if (!this.enabled) return;

        this.ratio = lerp(this.ratio, 1, 0.005);
        this.updateRatio();

        if (this.topText?.isValid && initData.showLoadingText) {
            this.textTime += dt;
            if (this.textTime > 0.5) {
                this.textTime = 0;
                this.topText.string = textStr[this.textIndex % textStr.length];
                this.textIndex++;
            }
        }
    }

    onDestroy() {
        this.enabled = false;
    }

    private _killSelfSafely() {
        // 防止多次调用
        if (!this.node || !this.node.isValid) return;
        // 停掉自身调度与 update
        this.enabled = false;
        this.unscheduleAllCallbacks?.();
        // 从场景树移除并销毁
        this.node.removeFromParent();
        this.node.destroy();
    }


}

