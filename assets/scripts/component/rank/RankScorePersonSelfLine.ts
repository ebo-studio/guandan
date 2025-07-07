import { _decorator, Component, Label, Node } from 'cc';
import { LobbyUserHeadItem } from '../LobbyUserHeadItem';
const { ccclass, property } = _decorator;

@ccclass('RankScorePersonSelfLine')
export class RankScorePersonSelfLine extends Component {
    //排名
    @property(Label)
    txtRank: Label = null;
    //分数
    @property(Label)
    txtScore: Label = null;
    //icon
    @property(LobbyUserHeadItem)
    userHead: LobbyUserHeadItem = null;

    private data: any;

    public setData(data: { rank: number, score: number, head: string, name: string }): void {
        this.data = data;
        this.txtRank.string = this.data.rank.toString();
        this.txtScore.string = this.data.score.toString();
        this.userHead.setData({ head: this.data.head, name: this.data.name });
    }
}

