import { _decorator, Button, Color, Label, Sprite, sys } from 'cc';
import PopWindow from '../PopWindow';
import { SoundManager } from '../../manager/SoundManager';
import { PbManager } from '../../proto/PbManager';
import { GameSocket } from '../../manager/GameSocket';
import { GlobalData } from '../../manager/GlobalData';
import { UIManager } from '../../manager/UIManager';
import { UIConfig } from '../../manager/UIConfig';
import { SignInManager } from '../../manager/SignInManager';
import { UrlConfig } from '../../manager/UrlConfig';
import Http from '../../proto/Http';
import { utils } from '../../common/utils';
const { ccclass, property } = _decorator;

@ccclass('signInViewItem')
export class signInViewItem extends PopWindow {

    @property(Button)
    signInBtn: Button = null;

    @property(Button)
    alsignInBtn: Button = null;

    public setData(obj?: any): void {
        if (SignInManager.isTodaySigned()) {
            // this.signInLabel.string = '明天再来';
            // this.signInBtn.interactable = false;
            this.signInBtn.node.active = false;
            this.alsignInBtn.node.active = true;
        }
        else {
            this.signInBtn.node.active = true;
            this.alsignInBtn.node.active = false;
            // this.signInBtn.node.active = true;
        }
    }

    public onClick() {
        this.hide();
    }
    //关闭
    // onBtnCancelClick() {
    //     SoundManager.playClick();
    //     let sendBuffer = PbManager.instance.sendMsg(GlobalData.C2S_Event.CancelAuditionMatch, null);
    //     GameSocket.send(sendBuffer);
    //     this.hide();
    // }

    async OnCloseClicked() {
        // UIManager.Instace.showUI({ path: UIConfig.getItemKey, data: { "count": 10 } });
        // SignInManager.signToday();
        // // this.statusLabel.string = "签到成功 🎉";
        // this.signInBtn.interactable = false;
        // // SoundManager.playClick();
        // this.hide();
        UIManager.Instace.showUI({ path: UIConfig.WaitItemKey, data: { opacity: 0.5, des: "请求中..." } });
        if (!sys.isNative) {
            var commonUrl = UrlConfig.getHttpUrl();
            const postExChange = await Http.post(commonUrl + 'api/User/signIn', {token: GlobalData.loginInfo.token})
            UIManager.Instace.hideUI(UIConfig.WaitItemKey);
            // console.log("JSON请求返回:", postExChange);
            if (postExChange.code == 200) {
                UIManager.Instace.showUI({ path: UIConfig.getItemKey, data: { "count": 10 } });
                SignInManager.signToday();
                this.signInBtn.interactable = false;
                this.hide();
            }
            else {
                UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: "今日已签到" });
            }
        }
        else {
            const url = `${UrlConfig.getHttpUrl()}api/User/signIn`;
            this.postWithFetch(url, {token: GlobalData.loginInfo.token}).then(data => {
                UIManager.Instace.hideUI(UIConfig.WaitItemKey);
                if (Number(data?.code) === 200) {
                    UIManager.Instace.showUI({ path: UIConfig.getItemKey, data: { "count": 10 } });
                    SignInManager.signToday();
                    this.signInBtn.interactable = false;
                    this.hide();
                    GlobalData.userInfo.score = data.data.gold;
                    utils.send(GlobalData.localEvent.UpdateScore);

                } else {
                    UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: data.msg });
                    // console.error('接口非 200：', data);
                }
            })
                .catch(err => console.error(err));
        }
    }

    async postWithFetch(url: string, data: any): Promise<any> {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const text = await response.text();
            console.log('status:', response.status, 'body:', text.slice(0, 200));

            if (/<!doctype|<html/i.test(text))
                throw new Error('收到 HTML（登录/错误页）');

            return JSON.parse(text.replace(/^\uFEFF/, ''));
        } catch (err) {
            console.error('postWithFetch error:', err);
            throw err;
        }
    }
}

