import { _decorator, Label, Sprite } from 'cc';
import AItemRenderer from '../virtualScroll/AItemRenerer';
import { LobbyUserHeadItem } from '../LobbyUserHeadItem';
const { ccclass, property } = _decorator;

@ccclass('TeamLineItem')
export class TeamLineItem extends AItemRenderer<{ rank: number, score: number, head: string, name: string }> {
    //排名
    @property(Label)
    txtRank: Label = null;
    //分数
    @property(Label)
    txtScore: Label = null;
    //icon
    @property(LobbyUserHeadItem)
    userHead: LobbyUserHeadItem = null;

    protected dataChanged(): void {
        this.txtRank.string = this.data.rank.toString();
        this.txtScore.string = this.data.score.toString();
        this.userHead.setData({ head: this.data.head, name: this.data.name });
        this.node.getComponent(Sprite).enabled = (this.data.rank % 2 == 0);
    }
}

