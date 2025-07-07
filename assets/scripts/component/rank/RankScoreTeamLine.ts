import { _decorator, Label, Sprite, SpriteFrame } from 'cc';
import AItemRenderer from '../virtualScroll/AItemRenerer';
const { ccclass, property } = _decorator;

@ccclass('RankScoreTeamLine')
export class RankScoreTeamLine extends AItemRenderer<{ rank: number, score: number, head: string, name: string }>  {
    //排名
    @property(Label)
    txtRank: Label = null;
    //分数
    @property(Label)
    txtScore: Label = null;
    //昵称
    @property(Label)
    txtName: Label = null;
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
        this.txtName.string = this.data.name.toString();
        this.node.getComponent(Sprite).enabled = (this.data.rank % 2 == 0);
    }
}

