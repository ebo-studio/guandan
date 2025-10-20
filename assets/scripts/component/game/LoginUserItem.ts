import { _decorator, Component, Label, Sprite } from "cc";
import { GlobalData } from "../../manager/GlobalData";

const { ccclass, property } = _decorator;
@ccclass('LoginUserItem')
export class LoginUserItem extends Component {

    @property(Label)
    userName: Label = null;

    @property(Label)
    current: Label = null;

    @property(Sprite)
    isSelect: Sprite = null;

    private _data: any = null;
    private _onClick: (token: string, name: string) => void = null;

    setValue(data: any, onSelected?: (token: string, name: string) => void) {
        this._data = data;
        this._onClick = onSelected;
        this.userName.string = data.name;

        const isCurrent = data.token === GlobalData.loginInfo.token;
        this.current.node.active = isCurrent;
        this.isSelect.node.active = isCurrent;
    }

    onClickItem() {
        if (this._onClick && this._data) {
            this._onClick(this._data.token, this._data.name);
        }
    }

    /** ✅ 设置当前项选中状态 */
    setSelected(selected: boolean) {
        this.current.node.active = selected;
        this.isSelect.node.active = selected;
    }

    /** ✅ 获取当前项的 token */
    getToken(): string {
        return this._data?.token ?? "";
    }
}
