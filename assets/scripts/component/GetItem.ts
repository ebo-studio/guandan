import { _decorator, Label, sp, sys } from 'cc';
import PopWindow from './PopWindow';
import Http from '../proto/Http';
import { UrlConfig } from '../manager/UrlConfig';
import { GlobalData } from '../manager/GlobalData';
import { utils } from '../common/utils';
const { ccclass, property } = _decorator;

@ccclass('GetItem')
export class GetItem extends PopWindow {

    @property(sp.Skeleton)
    public ani: sp.Skeleton = null;

    @property(Label)
    public propCount: Label = null;

    private count: number;

    public setData(obj?: any): void {
        // console.log('奖励', obj);
        this.count = obj.count;
        this.propCount.string = 'x' + obj.count;
        this.ani.node.active = true;
        this.ani.setAnimation(0, 'chusheng', false);
        this.ani.setCompleteListener(() => {
            if (this.ani.animation == 'chusheng') {
                this.ani.setAnimation(0, 'loop', true);

            }
        });
        // if (!sys.isNative) {
        //     this.updateScore();
        // } else {
        //     const url = `${UrlConfig.getHttpUrl()}api/Open/changeScore`;
        //     this.postWithFetch(url, {
        //         user_id: GlobalData.userInfo.user_id,
        //         score_type: '1',
        //         score: String(this.count),
        //     })
        //         .then(data => {
        //             console.log('返回啥:', data.code);
        //             if (Number(data?.code) === 200) {
        //                 GlobalData.userInfo.score = data.data;
        //                 utils.send(GlobalData.localEvent.UpdateScore);
        //             } else {
        //                 console.error('接口非 200：', data);
        //             }
        //         })
        //         .catch(err => console.error(err));
        // }

    }

    async updateScore() {

        // const url = `${UrlConfig.getHttpUrl()}api/Open/changeScore`;
        // const payload = {
        //     user_id: GlobalData.userInfo.user_id,
        //     score_type: '1',
        //     score: this.count,
        // };

        // try {
        //     const res = await fetch(url, {
        //         method: 'POST',
        //         // 若服务端要表单，把下面两行换成注释后的版本
        //         headers: { 'Content-Type': 'application/json' },
        //         body: JSON.stringify(payload),

        //         // 若需要带 cookie（会话登录）
        //         credentials: 'include', // 原生端也尽量带上
        //         redirect: 'follow',
        //     });

        //     const text = await res.text();               // 先拿原始文本，便于排错
        //     let data: any;
        //     try { data = JSON.parse(text); }
        //     catch { console.warn('非 JSON 响应：', text); throw new Error('Response is not JSON'); }

        //     console.log('HTTP 状态:', res.status, res.statusText);
        //     console.log('原始响应文本:', text);
        //     console.log('解析后的对象:', data);

        //     if (data && Number(data.code) === 200) {
        //         GlobalData.userInfo.score = data.data;
        //         utils.send(GlobalData.localEvent.UpdateScore);
        //         console.log('JSON 请求返回积分:', data.data);
        //     } else {
        //         console.error('接口返回非 200：', data);
        //     }
        // } catch (err) {
        //     console.error('请求失败或被拦截：', err);
        // }
        var commonUrl = UrlConfig.getHttpUrl();
        const test = await Http.post(commonUrl + 'api/Open/changeScore', {
            user_id: GlobalData.userInfo.user_id,
            score_type: '1',
            score: this.count.toString()
        })
        if (test.code == 200) {
            GlobalData.userInfo.score = test.data;
            utils.send(GlobalData.localEvent.UpdateScore);
        }
        console.log("JSON请求返回积分:", test.data);
        // //JSON请求返回积分: undefined
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

    public OnCloseClicked() {
        this.ani.loop = false;
        // this.ani.node.active = false;
        // this.ani.setAnimation(0, 'chusheng', false);
        // SoundManager.playClick();
        this.hide();
    }
}

