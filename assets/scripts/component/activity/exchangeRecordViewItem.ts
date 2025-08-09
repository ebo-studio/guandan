import { _decorator, instantiate, Node, Prefab, ScrollView, Vec3 } from "cc";
import PopWindow from "../PopWindow";
import { UrlConfig } from "../../manager/UrlConfig";
import Http from "../../proto/Http";
import AVirtualScrollView from "../virtualScroll/AVirtualScrollView";
import { GlobalData, recordData } from "../../manager/GlobalData";
import { recordItem } from "./recordItem";

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

    // private recordData: any;

    public setData(obj?: any): void {
        this.nodataNode.active = true;
        this.recordNode.active = false;
        this.updateRecord();
    }

    async updateRecord() {
        this.scrollView.content.removeAllChildren();
        let a = this;
        var commonUrl = UrlConfig.getTokenUrl();
        const record = await Http.post(commonUrl + '/api/address/getAddressRecord', {
            // address: '0x6E676cEa6FB903279Dc98871a8EE56C88F810441',
            address: GlobalData.userInfo.address,
            page: 1,
            pageSize: 10
        })
        console.log("JSON请求返回:", record);
        if(record.code == 1) {
            var recordData = record.data.data;
            this.nodataNode.active = recordData.length == 0;
            this.recordNode.active = !this.nodataNode.active;
            if(this.recordNode.active) {
                for(let i = 0; i < recordData.length; i++) {
                    const recordinfo: recordData = {integral: recordData[i].integral, created_time: recordData[i].created_time, status: recordData[i].status};
                    const nodeItem = instantiate(this.itemPrefab);
                    // nodeItem.setPosition(new Vec3(0, 26, 0))
                    const item = nodeItem.getComponent(recordItem);
                    item.setValue(recordinfo);
                    this.scrollView.content.addChild(nodeItem);
                }
            }
        }
    }

    onClose() {
        this.hide();
    }

}