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
import { md5 } from '../../common/md5';
const { ccclass, property } = _decorator;

@ccclass('signInViewItem')
export class signInViewItem extends PopWindow {

    @property(Button)
    signInBtn: Button = null;

    @property(Button)
    alsignInBtn: Button = null;

    public setData(obj?: any): void {
        if (SignInManager.isTodaySigned) {
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

    async signInRequest() {
        try {
            const commonUrl = UrlConfig.getHttpUrl();

            const userId = GlobalData.userInfo.user_id; // 用户ID
            const secretKey = "a0b6ecfc6aa8457cb10c7c798c46ac1e";
            const time = Math.floor(Date.now() / 1000); // 秒级时间戳

            // 生成签名
            const sign = md5(`${time}${userId}${secretKey}`);

            // 请求参数
            const body = {
                token: GlobalData.loginInfo.token,
                userId: userId,
                time: time,
                sign: sign
            };

            const postExChange = await Http.post(commonUrl + "api/User/signIn", body);

            UIManager.Instace.hideUI(UIConfig.WaitItemKey);

            if (postExChange?.msg === "今日已签到") {
                // ✅ 正常已签到（提示即可，不报错）
                UIManager.Instace.showUI({
                    path: UIConfig.MessageHintKey,
                    data: "今日已签到"
                });
                // this.signInBtn.interactable = false;
                this.hide();
                return;
            } else if (postExChange?.msg === "今日已签到1") {
                // ❌ 异常返回，需要提示错误
                // UIManager.Instace.showUI({
                //     path: UIConfig.MessageHintKey,
                //     data: "签到状态异常，请稍后重试"
                // });
                return;
            }

            if (postExChange.code === 200) {
                UIManager.Instace.showUI({ path: UIConfig.getItemKey, data: { count: 10 } });
                SignInManager.signToday();
                // this.signInBtn.interactable = false;
                GlobalData.userInfo.score = postExChange.data.gold;
                this.hide();
            } else {
                UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: postExChange.msg });
            }
        } catch (error) {
            console.error("signInRequest Error:", error);
            UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: "签到失败，请稍后重试" });
        }
    }

    async OnCloseClicked() {
        // UIManager.Instace.showUI({ path: UIConfig.getItemKey, data: { "count": 10 } });
        // SignInManager.signToday();
        // // this.statusLabel.string = "签到成功 🎉";
        // this.signInBtn.interactable = false;
        // // SoundManager.playClick();
        // this.hide();
        UIManager.Instace.showUI({ path: UIConfig.WaitItemKey, data: { opacity: 0.5, des: "请求中..." } });
        if (!sys.isNative) {
            this.signInRequest();
        }
        else {
            this.signIn();
        }
    }

    async signIn() {
        const secretKey = "a0b6ecfc6aa8457cb10c7c798c46ac1e"; // 固定秘钥
        const userId = GlobalData.userInfo.user_id;             // 当前用户ID
        const time = Math.floor(Date.now() / 1000);             // 秒级时间戳
        const sign = md5(`${time}${userId}${secretKey}`);       // 签名生成

        const url = `${UrlConfig.getHttpUrl()}api/User/signIn`;
        const postData = {
            token: GlobalData.loginInfo.token,
            userId: userId,
            time: time,
            sign: sign
        };

        this.postWithFetch(url, postData)
            .then(data => {
                UIManager.Instace.hideUI(UIConfig.WaitItemKey);

                if (data?.msg === "今日已签到") {
                    // ✅ 正常已签到（提示即可，不报错）
                    UIManager.Instace.showUI({
                        path: UIConfig.MessageHintKey,
                        data: "今日已签到"
                    });
                    // this.signInBtn.interactable = false;
                    this.hide();
                    return;
                } else if (data?.msg === "今日已签到1") {
                    // ❌ 异常返回，需要提示错误
                    // UIManager.Instace.showUI({
                    //     path: UIConfig.MessageHintKey,
                    //     data: "签到状态异常，请稍后重试"
                    // });
                    return;
                }

                if (Number(data?.code) === 200) {
                    // 成功逻辑
                    UIManager.Instace.showUI({ path: UIConfig.getItemKey, data: { "count": 10 } });
                    SignInManager.signToday();
                    // this.signInBtn.interactable = false;
                    this.hide();

                    // 更新积分并广播事件
                    GlobalData.userInfo.score = data.data.gold;
                    utils.send(GlobalData.localEvent.UpdateScore);
                } else {
                    // 错误提示
                    UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: data.msg });
                }
            })
            .catch(err => {
                console.error('signIn error:', err);
                UIManager.Instace.showUI({
                    path: UIConfig.MessageHintKey,
                    data: "签到失败，请检查网络或稍后再试"
                });
            });
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

            if (/ <!doctype |<html/i.test(text))
                throw new Error('收到 HTML（登录/错误页）');

            return JSON.parse(text.replace(/^\uFEFF/, ''));
        } catch (err) {
            console.error('postWithFetch error:', err);
            throw err;
        }
    }
}

