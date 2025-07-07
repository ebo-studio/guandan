import { _decorator,Node } from 'cc';
import AVirtualScrollView from '../virtualScroll/AVirtualScrollView';
import PopWindow from '../PopWindow';
import { GlobalData } from '../../manager/GlobalData';
const { ccclass, property } = _decorator;

@ccclass('TeamItem')
export class TeamItem extends PopWindow {
    //滚动列表
    @property(AVirtualScrollView)
    public teamScroll: AVirtualScrollView = null;
    //暂无
    @property(Node)
    nodeTip: Node = null;

    setData() {
        // var dataL: { rank: number, score: number, head: string, name: string }[] = [];
        // for (var i = 0; i < 30; i++) {
        //     let tmp = { rank: i + 1, score: 10, head: "", name: "嘻" + i }
        //     // dataL.push(tmp);
        //     GlobalData.teamInfo.list.push(tmp);
        // }

        this.nodeTip.active = GlobalData.teamInfo.list.length == 0;
        this.teamScroll.node.active = !this.nodeTip.active;

        if (this.teamScroll.node.active) {
            this.teamScroll.refreshData(GlobalData.teamInfo.list);
            this.teamScroll.setTouchItemCallback((data) => {
                console.log("data---> ", data);
            }, this);
        }
    }

    onBtnClick(){
        this.hide();
    }
}

