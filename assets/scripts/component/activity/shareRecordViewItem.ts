import { _decorator, instantiate, Node, Prefab, ScrollView, sys, Vec3 } from "cc";
import PopWindow from "../PopWindow";
import { UrlConfig } from "../../manager/UrlConfig";
import Http from "../../proto/Http";
import AVirtualScrollView from "../virtualScroll/AVirtualScrollView";
import { GlobalData, recordData } from "../../manager/GlobalData";
import { recordItem } from "./recordItem";
import { HttpConfig } from "../../manager/HttpConfig";
import { utils } from "../../common/utils";
import { shareTreeItem } from "./shareTreeItem";

const { ccclass, property } = _decorator;

@ccclass('shareRecordViewItem')
export class shareRecordViewItem extends PopWindow {

    @property(Node)
    nodataNode: Node = null;

    @property(Node)
    recordNode: Node = null;

    @property(ScrollView)
    scrollView: ScrollView = null;

    @property(Prefab)
    itemPrefab: Prefab = null;

    // private recordData: any;

    public setData(obj?: any): void {
        this.nodataNode.active = true;
        this.recordNode.active = false;
        let a = this;
        if (!sys.isNative) {
            this.updateRecord();
        }
        else {
            this.scrollView.content.removeAllChildren();
            const url = HttpConfig.getUrl(HttpConfig.QueryMyFirstInviter);
            this.postWithXHR(url, {
                token: GlobalData.loginInfo.token
            })
                .then(data => {
                    console.log('邀请数据>>', data)
                    if (Number(data?.code) === 200) {
                        a.nodataNode.active = data.data.length == 0;
                        a.recordNode.active = !a.nodataNode.active;
                        if (a.recordNode.active) {
                            for (let i = 0; i < data.data.length; i++) {
                                const nodeItem = instantiate(a.itemPrefab);
                                const item = nodeItem.getComponent(shareTreeItem);
                                item.setValue(data.data[i]);
                                a.scrollView.content.addChild(nodeItem);
                            }
                        }
                        //     var recordData = data.data.data;
                        //     this.nodataNode.active = recordData.length == 0;
                        //     this.recordNode.active = !this.nodataNode.active;
                        //     if (this.recordNode.active) {
                        //         for (let i = 0; i < recordData.length; i++) {
                        //             const recordinfo: recordData = { integral: recordData[i].integral, created_time: recordData[i].created_time, status: recordData[i].status };
                        //             const nodeItem = instantiate(this.itemPrefab);
                        //             // nodeItem.setPosition(new Vec3(0, 26, 0))
                        //             const item = nodeItem.getComponent(recordItem);
                        //             item.setValue(recordinfo);
                        //             this.scrollView.content.addChild(nodeItem);
                        //         }
                        //     }
                    } else {
                        console.error('接口非 200：', data);
                    }
                })
                .catch(err => console.error(err));
        }

    }

    async updateRecord() {
        this.scrollView.content.removeAllChildren();
        let a = this;
        var url = HttpConfig.getUrl(HttpConfig.QueryMyFirstInviter);
        let sendData = {
            token: GlobalData.loginInfo.token
        };
        utils.sendHttpRequest({
            url: url,
            method: 'POST',
            data: utils.toJson(sendData),
            success: function (data) {
                if (data) {
                    a.nodataNode.active = data.length == 0;
                    a.recordNode.active = !a.nodataNode.active;
                    if (a.recordNode.active) {
                        for (let i = 0; i < data.length; i++) {
                            const nodeItem = instantiate(a.itemPrefab);
                            const item = nodeItem.getComponent(shareTreeItem);
                            item.setValue(data[i]);
                            a.scrollView.content.addChild(nodeItem);
                        }
                    }
                    // console.log('邀请数据', data);

                }
            }
        })
    }

    postWithXHR(url: string, data: any): Promise<any> {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('POST', url, true);
            xhr.withCredentials = true; // ☆ 关键：带 Cookie
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.setRequestHeader('Accept', 'application/json');

            xhr.onreadystatechange = () => {
                if (xhr.readyState !== 4) return;
                const ct = xhr.getResponseHeader('content-type') || '';
                const body = xhr.responseText || '';
                console.log('status:', xhr.status, 'ct:', ct, 'body[0..200]:', body.slice(0, 200));
                if (/<!doctype|<html/i.test(body)) return reject(new Error('收到 HTML（登录/错误页）'));
                try {
                    const json = JSON.parse(body.replace(/^\uFEFF/, ''));
                    resolve(json);
                } catch (e) {
                    reject(new Error('非 JSON 响应：' + e));
                }
            };

            xhr.onerror = () => reject(new Error('网络错误'));
            xhr.send(JSON.stringify(data));
        });
    }

    onClose() {
        this.hide();
    }

}