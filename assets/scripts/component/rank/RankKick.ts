import { _decorator, Node } from 'cc';
import AVirtualScrollView from '../virtualScroll/AVirtualScrollView';
import { GlobalData } from '../../manager/GlobalData';
import PopWindow from '../PopWindow';
import { SoundManager } from '../../manager/SoundManager';
const { ccclass, property } = _decorator;

@ccclass('RankKick')
export class RankKick extends PopWindow {
    //滚动列表
    @property(AVirtualScrollView)
    public personScroll: AVirtualScrollView = null;
    //暂无提示
    @property(Node)
    nodeTip: Node = null;


    setData() {
        this.nodeTip.active = GlobalData.raceKickUpInfo.list.length == 0;
        this.personScroll.node.active = !this.nodeTip.active;
        if (this.personScroll.node.active) {
            this.personScroll.refreshData(GlobalData.raceKickUpInfo.list);
        }
    }

    onBtnCloseClick() {
        SoundManager.playClick();
        this.hide();
    }
}

