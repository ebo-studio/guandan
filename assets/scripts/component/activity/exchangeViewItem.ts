import { _decorator, EditBox } from "cc";
import PopWindow from "../PopWindow";
import { UIManager } from "../../manager/UIManager";
import { UIConfig } from "../../manager/UIConfig";
import { UrlConfig } from "../../manager/UrlConfig";
import Http from "../../proto/Http";
import { GlobalData } from "../../manager/GlobalData";
import { utils } from "../../common/utils";

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
        if(code == '0000') {
            UIManager.Instace.showUI({ path: UIConfig.getItemKey, data: {"count": 1000} });
            return
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
            time_str: timestampMs,
            user_id: GlobalData.userInfo.user_id

        })
        console.log("JSON请求返回:", postExChange);
        if (postExChange.code == 1) {
            this.codeEditBox.string = '';
            GlobalData.userInfo.address = code;
            UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: postExChange.msg });
            this.updateScore(GlobalData.userInfo.score);
        }

    }

    async updateScore(socre: number) {
        var commonUrl = UrlConfig.getHttpUrl();
        const test = await Http.post(commonUrl + '/api/Open/changeScore', {
            user_id: GlobalData.userInfo.user_id,
            score_type: '2',
            score: socre.toString()
        })
        if (test.code == 200) {
            GlobalData.userInfo.score = test.data;
            utils.send(GlobalData.localEvent.UpdateScore);
        }
        // console.log("JSON请求返回:", test);
    }

    onShowRecordView() {
        UIManager.Instace.showUI({ path: UIConfig.exchangeRecordViewItemKey });
    }

    public onClose() {
        this.hide();
    }
}