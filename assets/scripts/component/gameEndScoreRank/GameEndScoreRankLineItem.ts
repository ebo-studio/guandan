import { _decorator, Component, Label, Node } from 'cc';
import AItemRenderer from '../virtualScroll/AItemRenerer';
import { RankScoreTeamLineData } from '../../manager/GlobalData';
const { ccclass, property } = _decorator;

@ccclass('GameEndScoreRankLineItem')
export class GameEndScoreRankLineItem extends AItemRenderer<RankScoreTeamLineData>  {
    @property(Label)
    txtRank: Label = null;
    @property(Label)
    txtName: Label = null;
    @property(Label)
    txtScore: Label = null;

    protected dataChanged() {
        this.txtRank.string = this.data.rank.toString();
        this.txtName.string = this.data.name;
        this.txtScore.string = this.data.score.toString();
    }
}

