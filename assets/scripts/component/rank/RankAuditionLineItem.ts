import { _decorator, Label, Sprite, SpriteFrame } from 'cc';
import AItemRenderer from '../virtualScroll/AItemRenerer';
import { LobbyUserHeadItem } from '../LobbyUserHeadItem';
const { ccclass, property } = _decorator;

@ccclass('RankAuditionLineItem')
export class RankAuditionLineItem extends AItemRenderer<any>  {
    //icon
    @property(LobbyUserHeadItem)
    userHead: LobbyUserHeadItem = null;
    //晋级|淘汰
    @property(SpriteFrame)
    sps: SpriteFrame[] = [];

    protected dataChanged(): void {
        this.userHead.setData({ head: this.data.head_img, name: this.data.nick_name });
        this.node.getChildByName("txtFrom").getComponent(Label).string = "单位:" + this.data.group_name;
        this.node.getChildByName("txtGameCnt").getComponent(Label).string = this.data.num + "局";
        this.node.getChildByName("txtScore").getComponent(Label).string = this.data.score + "";
        this.node.getChildByName("picType").getComponent(Sprite).spriteFrame = this.sps[this.data.is_up];
        this.node.getComponent(Sprite).enabled = (this.data.rank % 2 == 0);
    }
}

