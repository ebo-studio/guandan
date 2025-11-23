import { _decorator, instantiate, Prefab, ScrollView, UITransform } from "cc";
import PopWindow from "../PopWindow";
import { SignInManager } from "../../manager/SignInManager";
import { LoginUserItem } from "./LoginUserItem";
import { UIManager } from "../../manager/UIManager";
import { UIConfig } from "../../manager/UIConfig";
import { GlobalData } from "../../manager/GlobalData";
import { utils } from "../../common/utils";
import { GameSocket } from "../../manager/GameSocket";

const { ccclass, property } = _decorator;
@ccclass('LoginUserView')
export class LoginUserView extends PopWindow {
    @property(ScrollView)
    scrollView: ScrollView = null;

    @property(Prefab)
    itemPrefab: Prefab = null;

    public setData(obj?: any): void {
        this.scrollView.content.removeAllChildren();
        const data = SignInManager.getUserList();
        for (let i = 0; i < data.length; i++) {
            const nodeItem = instantiate(this.itemPrefab);
            const item = nodeItem.getComponent(LoginUserItem);
            item.setValue(data[i], (token: string, name: string) => this.onUserClicked(token, name));
            this.scrollView.content.addChild(nodeItem);
            this._items.push(item);
        }

        this.scheduleOnce(() => {
            this.updateContentHeight();
        });
    }

    updateContentHeight() {
        const contentTransform = this.scrollView.content.getComponent(UITransform)!;

        let totalHeight = 0;
        for (const item of this._items) {
            const t = item.node.getComponent(UITransform)!;
            totalHeight += t.height;
        }

        // 可选：加上间距
        const spacing = 10; // 你 ScrollView 的 Layout 里设置的 spacing
        totalHeight += (this._items.length - 1) * spacing;

        // ✅ 设置 content 的总高度
        contentTransform.height = totalHeight;
    }

    onClose() {
        this.hide();
    }

    private onSelectUser(token: string) {

    }

    private onUserClicked(token: string, name: string) {
        const currentToken = GlobalData.loginInfo.token;

        // ✅ 点击当前用户 → 不弹框，不做任何操作
        if (token === currentToken) {
            return;
        }
        UIManager.Instace.showUI({
            path: UIConfig.MessageBoxCommonKey,
            data: {
                okName: "确定",
                cancleName: "取消",
                des: `是否切换到${name}?`,
                okFunc: () => {
                    UIManager.Instace.showUI({ path: UIConfig.WaitItemKey, data: { opacity: 0.5, des: "切换用户中" } })
                    // this.onClickShowAd();
                    GlobalData.requestGetUserInfo({
                        success: () => {
                            GameSocket.closeSocket();  // ← 关键！先关闭以前的 socket

                            localStorage.setItem(GlobalData.TOKEN, token);
                            GlobalData.loginInfo.token = token;
                            SignInManager.switchUser(name);
                            GlobalData.userInfo.haveToken = true;
                            utils.send(GlobalData.localEvent.FirstUpdate);
                            this.updateSelection();
                            SignInManager.getRemainingAds((data) => {
                                // success: () => {
                                utils.send(GlobalData.localEvent.UpdateAdCount);
                                // }
                            })
                            // 7. 重新连接 WebSocket（需要你调用）
                            GameSocket.initAndConnect();
                        },
                        fail: () => {

                        }
                    }, false, token);
                },
                cancleFunc: () => {

                }
            }
        });
    }
    private _items: LoginUserItem[] = [];

    private updateSelection() {
        const currentToken = GlobalData.loginInfo.token;
        for (const item of this._items) {
            item.setSelected(item.getToken() === currentToken);
        }
    }
}