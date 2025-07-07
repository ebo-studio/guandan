import { _decorator, Component, Node } from 'cc';
import AVirtualScrollView from '../virtualScroll/AVirtualScrollView';
import { GlobalData } from '../../manager/GlobalData';
const { ccclass, property } = _decorator;

@ccclass('GameEndScoreRankTeam')
export class GameEndScoreRankTeam extends Component {
    //滚动列表
    @property(AVirtualScrollView)
    public personScroll: AVirtualScrollView = null;
    //暂无提示
    @property(Node)
    nodeTip: Node = null;


    setData() {
        let list = GlobalData.rankScoreTeamInfo.list;
        this.nodeTip.active = list.length == 0;
        this.personScroll.node.active = !this.nodeTip.active;
        if (this.personScroll.node.active) {
            this.personScroll.refreshData(list);
        }
    }
}

