import { _decorator, Component, Label } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('RankScoreTeamSelfLine')
export class RankScoreTeamSelfLine extends Component {
    //排名
    @property(Label)
    txtRank: Label = null;
    //分数
    @property(Label)
    txtScore: Label = null;
    //昵称
    @property(Label)
    txtName: Label = null;

    private data: any;

    public setData(data: { rank: number, score: number, head: string, name: string }): void {
        this.data = data;
        this.txtRank.string = this.data.rank.toString();
        this.txtScore.string = this.data.score.toString();
        this.txtName.string = this.data.name;
    }
}

