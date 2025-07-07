import { _decorator, Component, Node } from 'cc';
import AVirtualScrollView from '../virtualScroll/AVirtualScrollView';
import { RankScoreTeamSelfLine } from './RankScoreTeamSelfLine';
import { GlobalData, RankScoreTeamLineData } from '../../manager/GlobalData';
const { ccclass, property } = _decorator;

@ccclass('RankScoreTeam')
export class RankScoreTeam extends Component {
    //滚动列表
    @property(AVirtualScrollView)
    teamScroll: AVirtualScrollView = null;
    //自己的
    @property(RankScoreTeamSelfLine)
    rankScoreTeamSelfLine: RankScoreTeamSelfLine = null;
    //暂无提示
    @property(Node)
    nodeTip: Node = null;
    @property(Node)
    nodeSelfTip: Node = null;


    setData() {
        this.nodeTip.active = GlobalData.rankScoreTeamInfo.list.length == 0;
        this.teamScroll.node.active = !this.nodeTip.active;
        if (this.teamScroll.node.active) {
            this.teamScroll.refreshData(GlobalData.rankScoreTeamInfo.list);
        }

        this.nodeSelfTip.active = GlobalData.rankScoreTeamInfo.my == null;
        this.rankScoreTeamSelfLine.node.active = !this.nodeSelfTip.active;
        if (this.rankScoreTeamSelfLine.node.active) {
            this.rankScoreTeamSelfLine.setData(GlobalData.rankScoreTeamInfo.my);
        }
    }
}

