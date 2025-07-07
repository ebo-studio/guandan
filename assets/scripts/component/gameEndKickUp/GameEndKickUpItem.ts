import { _decorator, Node } from 'cc';
import AVirtualScrollView from '../virtualScroll/AVirtualScrollView';
import PopWindow from '../PopWindow';
import { SoundManager } from '../../manager/SoundManager';
import { GlobalData } from '../../manager/GlobalData';
import { UIManager } from '../../manager/UIManager';
import { UIConfig } from '../../manager/UIConfig';
import { utils } from '../../common/utils';
const { ccclass, property } = _decorator;

@ccclass('GameEndKickUpItem')
export class GameEndKickUpItem extends PopWindow {
    //滚动列表
    @property(AVirtualScrollView)
    public personScroll: AVirtualScrollView = null;
    //暂无提示
    @property(Node)
    nodeTip: Node = null;


    setData() {
        let list = GlobalData.raceKickUpInfo.list;
        console.log("---> ", list);
        this.nodeTip.active = list.length == 0;
        this.personScroll.node.active = !this.nodeTip.active;
        if (this.personScroll.node.active) {
            this.personScroll.refreshData(list);
        }
    }
    //退出
    onBackClick() {
        SoundManager.playClick();
        if (utils.getSceneName() == GlobalData.sceneName.game) {
            console.log("nzp add 返回大厅 3");
            UIManager.Instace.showUI({ path: UIConfig.LoadItemKey, data: GlobalData.sceneName.lobby });
        }
        this.hide();
    }
}

