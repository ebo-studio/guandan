import { _decorator, EditBox } from "cc";
import PopWindow from "../PopWindow";
import { UIManager } from "../../manager/UIManager";
import { UIConfig } from "../../manager/UIConfig";
import { UrlConfig } from "../../manager/UrlConfig";
import Http from "../../proto/Http";
import { GlobalData } from "../../manager/GlobalData";

const { ccclass, property } = _decorator;

@ccclass('exchangeViewItem')
export class exchangeViewItem extends PopWindow {

    @property(EditBox)
    public codeEditBox: EditBox = null;

    public setData(obj?: any): void {
        this.codeEditBox.string = '';
    }

    async onExChange() {
        const code = this.codeEditBox.string.trim();
        if (code == '') {
            UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: "请输入兑换码" });
            return;
        }
        else if (GlobalData.userInfo.score <= 0) {
            UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: "兑换失败" });
            return;
        }
        var commonUrl = UrlConfig.getTokenUrl();
        const timestampMs = Date.now()
        const postExChange = await Http.post(commonUrl + '/api/address/exchangeToken', {
            // address: '0x6E676cEa6FB903279Dc98871a8EE56C88F810441',
            address: code,
            integral: GlobalData.userInfo.score,
            time_str: timestampMs
        })
        console.log("JSON请求返回:", postExChange);
        if (postExChange.code == 1) {
            this.codeEditBox.string = '';
            GlobalData.userInfo.address = code;
            UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: postExChange.msg });
        }

    }

    onShowRecordView() {
        UIManager.Instace.showUI({path: UIConfig.exchangeRecordViewItemKey});
    }

    public onClose() {
        this.hide();
    }
}