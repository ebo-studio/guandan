import { _decorator, Button, EditBox, Label, sys } from "cc";
import PopWindow from "../PopWindow";
import { UIManager } from "../../manager/UIManager";
import { UIConfig } from "../../manager/UIConfig";
import { UrlConfig } from "../../manager/UrlConfig";
import Http from "../../proto/Http";
import { GlobalData } from "../../manager/GlobalData";
import { utils } from "../../common/utils";
import { md5 } from "../../common/md5";

const { ccclass, property } = _decorator;

@ccclass('exchangeViewItem')
export class exchangeViewItem extends PopWindow {

    @property(EditBox)
    public codeEditBox: EditBox = null;

    @property(Button)
    public btnExchange: Button = null;

    @property(Label)
    public exchangeLabel: Label = null;

    private isBack: boolean = true;

    public setData(obj?: any): void {
        this.codeEditBox.string = '';
    }

    async onExChange() {
        if (!this.isBack) {
            return;
        }
        const code = this.codeEditBox.string.trim();
        if (code == '') {
            UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: "请输入兑换码" });
            return;
        }
        // if (code == '0000') {
        //     UIManager.Instace.showUI({ path: UIConfig.getItemKey, data: { "count": 1000 } });
        //     return
        // }
        else if (GlobalData.userInfo.score <= 0) {
            UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: "兑换失败" });
            return;
        }

        this.isBack = false;
        this.btnExchange.interactable = false;
        this.exchangeLabel.string = '正在兑换';
        const timestampMs = Date.now()
        if (!sys.isNative) {
            var commonUrl = UrlConfig.getTokenUrl();
            const postExChange = await Http.post(commonUrl + 'api/address/exchangeToken', {
                sign: this.generateSignature({
                    address: code,
                    integral: GlobalData.userInfo.score,
                    time_str: timestampMs,
                    user_id: GlobalData.userInfo.user_id
                }),
                // address: '0x6E676cEa6FB903279Dc98871a8EE56C88F810441',
                address: code,
                integral: GlobalData.userInfo.score,
                time_str: timestampMs,
                user_id: GlobalData.userInfo.user_id

            })
            // console.log("JSON请求返回:", postExChange);
            if (postExChange.code == 1) {
                this.codeEditBox.string = '';
                GlobalData.userInfo.address = code;
                UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: postExChange.msg });
                this.updateScore(GlobalData.userInfo.score);
                this.isBack = true;
                this.btnExchange.interactable = true;
                this.exchangeLabel.string = '兑换';
            }
        }
        else {
            const url = `${UrlConfig.getTokenUrl()}api/address/exchangeToken`;
            this.postWithFetch(url, {
                sign: this.generateSignature({
                    address: code,
                    integral: GlobalData.userInfo.score,
                    time_str: timestampMs,
                    user_id: GlobalData.userInfo.user_id
                }),
                address: code,
                integral: GlobalData.userInfo.score,
                time_str: timestampMs,
                user_id: GlobalData.userInfo.user_id
            }).then(data => {
                if (Number(data?.code) === 1) {
                    this.codeEditBox.string = '';
                    GlobalData.userInfo.address = code;
                    UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: data.msg });
                    this.updateScore(GlobalData.userInfo.score);
                    this.isBack = true;
                    this.btnExchange.interactable = true;
                    this.exchangeLabel.string = '兑换';
                } else {
                    this.codeEditBox.string = '';
                    UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: data.msg });
                    this.isBack = true;
                    this.btnExchange.interactable = true;
                    this.exchangeLabel.string = '兑换';
                    // console.error('接口非 200：', data);
                }
            })
                .catch(err => console.error(err));
        }

    }

    generateSignature(params: any, secretKey: string = 'H9jK2lM6nB1vP8rQ3sT4xF0cD7yW5gZ'): string {
        const paramString = `${params.address}${params.integral}${params.time_str}${params.user_id}${secretKey}`;
        return md5(paramString); // 使用 MD5 对拼接字符串进行哈希
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

    // postWithXHR(url: string, data: any): Promise<any> {
    //     return new Promise((resolve, reject) => {
    //         const xhr = new XMLHttpRequest();
    //         xhr.open('POST', url, true);
    //         xhr.withCredentials = true; // ☆ 关键：带 Cookie
    //         xhr.setRequestHeader('Content-Type', 'application/json');
    //         xhr.setRequestHeader('Accept', 'application/json');

    //         xhr.onreadystatechange = () => {
    //             if (xhr.readyState !== 4) return;
    //             const ct = xhr.getResponseHeader('content-type') || '';
    //             const body = xhr.responseText || '';
    //             console.log('status:', xhr.status, 'ct:', ct, 'body[0..200]:', body.slice(0, 200));
    //             if (/<!doctype|<html/i.test(body)) return reject(new Error('收到 HTML（登录/错误页）'));
    //             try {
    //                 const json = JSON.parse(body.replace(/^\uFEFF/, ''));
    //                 resolve(json);
    //             } catch (e) {
    //                 reject(new Error('非 JSON 响应：' + e));
    //             }
    //         };

    //         xhr.onerror = () => reject(new Error('网络错误'));
    //         xhr.send(JSON.stringify(data));
    //     });
    // }

    async updateScore(socre: number) {
        if (!sys.isNative) {
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
        }
        else {
            const url = `${UrlConfig.getHttpUrl()}api/Open/changeScore`;
            this.postWithFetch(url, {
                user_id: GlobalData.userInfo.user_id,
                score_type: '2',
                score: socre,
            })
                .then(data => {
                    if (Number(data?.code) === 200) {
                        GlobalData.userInfo.score = data.data;
                        utils.send(GlobalData.localEvent.UpdateScore);
                    } else {
                        console.error('接口非 200：', data);
                    }
                })
                .catch(err => console.error(err));
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