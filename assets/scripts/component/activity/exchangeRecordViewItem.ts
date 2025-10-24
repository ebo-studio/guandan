import { _decorator, instantiate, Node, Prefab, ScrollView, sys, UITransform, Vec3 } from "cc";
import PopWindow from "../PopWindow";
import { UrlConfig } from "../../manager/UrlConfig";
import Http from "../../proto/Http";
import AVirtualScrollView from "../virtualScroll/AVirtualScrollView";
import { GlobalData, recordData } from "../../manager/GlobalData";
import { recordItem } from "./recordItem";
import { utils } from "../../common/utils";

const { ccclass, property } = _decorator;

@ccclass('exchangeRecordViewItem')
export class exchangeRecordViewItem extends PopWindow {

    @property(Node)
    nodataNode: Node = null;

    @property(Node)
    recordNode: Node = null;

    @property(ScrollView)
    scrollView: ScrollView = null;

    @property(Prefab)
    itemPrefab: Prefab = null;

    private _items: recordItem[] = [];

    // private recordData: any;

    public setData(obj?: any): void {
        this.scrollView.content.removeAllChildren();
        this._items = [];
        this.nodataNode.active = true;
        this.recordNode.active = false;
        if (!sys.isNative) {
            this.updateRecord();
        }
        else {
            const url = `${UrlConfig.getTokenUrl()}api/address/getAddressRecord`;
            this.postWithFetch(url, {
                user_id: GlobalData.userInfo.user_id,
                page: 1,
                pageSize: 10
            })
                .then(data => {
                    if (Number(data?.code) === 1) {
                        var recordData = data.data.data;
                        this.nodataNode.active = recordData.length == 0;
                        this.recordNode.active = !this.nodataNode.active;
                        if (this.recordNode.active) {
                            for (let i = 0; i < recordData.length; i++) {
                                const recordinfo: recordData = { integral: recordData[i].integral, created_time: recordData[i].created_time, status: recordData[i].status };
                                const nodeItem = instantiate(this.itemPrefab);
                                // nodeItem.setPosition(new Vec3(0, 26, 0))
                                const item = nodeItem.getComponent(recordItem);
                                item.setValue(recordinfo);
                                this.scrollView.content.addChild(nodeItem);
                                this._items.push(item);

                                this.scheduleOnce(() => {
                                    this.updateContentHeight();
                                });
                            }
                        }
                    } else {
                        console.error('接口非 200：', data);
                    }
                })
                .catch(err => console.error(err));
        }

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

    async updateRecord() {
        this.scrollView.content.removeAllChildren();
        let a = this;
        var commonUrl = UrlConfig.getTokenUrl();
        const record = await Http.post(commonUrl + '/api/address/getAddressRecord', {
            // address: '0x6E676cEa6FB903279Dc98871a8EE56C88F810441',
            user_id: GlobalData.userInfo.user_id,
            page: 1,
            pageSize: 10
        })
        console.log("JSON请求返回:", record);
        if (record.code == 1) {
            var recordData = record.data.data;
            this.nodataNode.active = recordData.length == 0;
            this.recordNode.active = !this.nodataNode.active;
            if (this.recordNode.active) {
                for (let i = 0; i < recordData.length; i++) {
                    const recordinfo: recordData = { integral: recordData[i].integral, created_time: recordData[i].created_time, status: recordData[i].status };
                    const nodeItem = instantiate(this.itemPrefab);
                    // nodeItem.setPosition(new Vec3(0, 26, 0))
                    const item = nodeItem.getComponent(recordItem);
                    item.setValue(recordinfo);
                    this.scrollView.content.addChild(nodeItem);
                    this._items.push(item);
                    this.scheduleOnce(() => {
                        this.updateContentHeight();
                    });
                }
            }
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

    onClose() {
        this.hide();
    }

}