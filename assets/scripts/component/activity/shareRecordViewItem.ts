import { _decorator, instantiate, Node, Prefab, ScrollView, Vec3 } from "cc";
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
        this.updateRecord();
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
                    if(a.recordNode.active) {
                        for(let i = 0; i < data.length; i++) {
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

    onClose() {
        this.hide();
    }

}