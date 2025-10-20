import { _decorator, instantiate, Prefab, ScrollView } from "cc";
import PopWindow from "../PopWindow";
import { SignInManager } from "../../manager/SignInManager";
import { LoginUserItem } from "./LoginUserItem";
import { UIManager } from "../../manager/UIManager";
import { UIConfig } from "../../manager/UIConfig";
import { GlobalData } from "../../manager/GlobalData";
import { utils } from "../../common/utils";

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
                    // this.onClickShowAd();
                    localStorage.setItem(GlobalData.TOKEN, token);
                    GlobalData.loginInfo.token = token;
                    GlobalData.requestGetUserInfo({
                        success: () => {
                            SignInManager.switchUser(token);
                            GlobalData.userInfo.haveToken = true;
                            utils.send(GlobalData.localEvent.FirstUpdate);
                            this.updateSelection();
                        }
                    });
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