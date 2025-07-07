import { _decorator, Sprite, SpriteFrame } from 'cc';
import AItemRenderer from '../virtualScroll/AItemRenerer';
import { LobbyUserHeadItem } from '../LobbyUserHeadItem';
const { ccclass, property } = _decorator;

@ccclass('RankKickLineItem')
export class RankKickLineItem extends AItemRenderer<any>  {
    //时间
    @property(Sprite)
    picType: Sprite = null;
    @property(SpriteFrame)
    sps: SpriteFrame[] = [];
    //icon
    @property(LobbyUserHeadItem)
    userHead: LobbyUserHeadItem = null;

    protected dataChanged(): void {
        this.picType.spriteFrame = this.sps[this.data.score];
        this.userHead.setData({ head: this.data.head_img, name: this.data.nick_name });
        this.node.getComponent(Sprite).enabled = (this.data.rank % 2 == 0);
    }
}

