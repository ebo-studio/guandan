import { _decorator, Component, Node } from 'cc';
import AVirtualScrollView from '../virtualScroll/AVirtualScrollView';
import { GlobalData } from '../../manager/GlobalData';
import { RankScorePersonSelfLine } from './RankScorePersonSelfLine';
const { ccclass, property } = _decorator;

@ccclass('RankScorePerson')
export class RankScorePerson extends Component {
    //滚动列表
    @property(AVirtualScrollView)
    public personScroll: AVirtualScrollView = null;
    //自己的
    @property(RankScorePersonSelfLine)
    rankScorePersonSelfLine: RankScorePersonSelfLine = null;
    //暂无提示
    @property(Node)
    nodeTip: Node = null;
    @property(Node)
    nodeSelfTip: Node = null;


    setData() {
        console.log("----------------> ", GlobalData.rankScorePersonInfo.list);
        this.nodeTip.active = GlobalData.rankScorePersonInfo.list.length == 0;
        this.personScroll.node.active = !this.nodeTip.active;
        if(this.personScroll.node.active){
            this.personScroll.refreshData(GlobalData.rankScorePersonInfo.list);
        }

        this.nodeSelfTip.active = GlobalData.rankScorePersonInfo.my == null;
        this.rankScorePersonSelfLine.node.active = !this.nodeSelfTip.active;
        if (this.rankScorePersonSelfLine.node.active) {
            this.rankScorePersonSelfLine.setData(GlobalData.rankScorePersonInfo.my);
        }
    }
}

