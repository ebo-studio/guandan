import { _decorator, Label, Sprite, SpriteFrame } from 'cc';
import AItemRenderer from '../virtualScroll/AItemRenerer';
import { LobbyUserHeadItem } from '../LobbyUserHeadItem';
import { RankScorePersonLineData } from '../../manager/GlobalData';
const { ccclass, property } = _decorator;

@ccclass('RankScorePersonLine')
export class RankScorePersonLine extends AItemRenderer<RankScorePersonLineData>  {
    //排名
    @property(Label)
    txtRank: Label = null;
    //分数
    @property(Label)
    txtScore: Label = null;
    //icon
    @property(LobbyUserHeadItem)
    userHead: LobbyUserHeadItem = null;
    //前三名
    @property(Sprite)
    picSpecial: Sprite = null;
    @property(SpriteFrame)
    sps: SpriteFrame[] = []

    protected dataChanged(): void {
        this.picSpecial.node.active = this.data.rank <= 3;
        if (this.picSpecial.node.active) {
            this.picSpecial.spriteFrame = this.sps[this.data.rank - 1];
        }
        this.txtRank.string = this.data.rank.toString();
        this.txtScore.string = this.data.score.toString();
        this.userHead.setData({ head: this.data.head, name: this.data.name });
        this.node.getComponent(Sprite).enabled = (this.data.rank % 2 == 0);
    }
}

