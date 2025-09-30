import { _decorator, Node, Vec3, Quat } from 'cc';
import { UIManager } from '../manager/UIManager';
import { UIConfig } from '../manager/UIConfig';
const { ccclass } = _decorator;

@ccclass('DebugHook')
export class DebugHook {
    private static hooked = false;

    static enableAllHooks() {
        if (this.hooked) return;
        this.hooked = true;

        console.log("[DebugHook] ✅ 启用全套 Node API hook");

        // hook setPosition
        const oldSetPosition = Node.prototype.setPosition;
        (Node.prototype as any).setPosition = function (pos: Vec3 | number, y?: number, z?: number) {
            if (pos === null || pos === undefined) {
                const msg = `[DebugHook] ❌ setPosition(null) on Node=${this.name}\n${new Error().stack}`;
                console.error(msg, this);
                DebugHook.onSocketError(msg);
            }
            return oldSetPosition.apply(this, arguments as any);
        };

        // hook setWorldPosition
        const oldSetWorldPosition = Node.prototype.setWorldPosition;
        (Node.prototype as any).setWorldPosition = function (pos: Vec3 | number, y?: number, z?: number) {
            if (pos === null || pos === undefined) {
                const msg = `[DebugHook] ❌ setWorldPosition(null) on Node=${this.name}\n${new Error().stack}`;
                console.error(msg, this);
                DebugHook.onSocketError(msg);
            }
            return oldSetWorldPosition.apply(this, arguments as any);
        };

        // hook setScale
        const oldSetScale = Node.prototype.setScale;
        (Node.prototype as any).setScale = function (x: Vec3 | number, y?: number, z?: number) {
            if (x === null || x === undefined) {
                const msg = `[DebugHook] ❌ setScale(null) on Node=${this.name}\n${new Error().stack}`;
                console.error(msg, this);
                DebugHook.onSocketError(msg);
            }
            return oldSetScale.apply(this, arguments as any);
        };

        // hook setRotation
        const oldSetRotation = Node.prototype.setRotation;
        (Node.prototype as any).setRotation = function (quat: Quat) {
            if (quat === null || quat === undefined) {
                const msg = `[DebugHook] ❌ setRotation(null) on Node=${this.name}\n${new Error().stack}`;
                console.error(msg, this);
                DebugHook.onSocketError(msg);
            }
            return oldSetRotation.apply(this, arguments as any);
        };
    }

    static onSocketError(desc: string) {
        UIManager.Instace.showUI({
            path: UIConfig.MessageBoxCommonKey,
            data: {
                okName: "确定",
                cancleName: "取消",
                des: desc,
                okFunc: () => {
                    UIManager.Instace.clearAllUI();
                    // GameSocket.initAndConnect(); // 如果需要重连
                },
                cancleFunc: null
            }
        });
    }
}
