import { _decorator, Component, Label } from 'cc';
import { SoundManager } from '../../manager/SoundManager';
import { LobbyUserHeadItem } from '../LobbyUserHeadItem';
import AItemRenderer from '../virtualScroll/AItemRenerer';
import { GameResultInfo, GlobalData } from '../../manager/GlobalData';
import { UIManager } from '../../manager/UIManager';
import { UIConfig } from '../../manager/UIConfig';
const { ccclass, property } = _decorator;

@ccclass('RankRaceAuditionLineItem')
export class RankRaceAuditionLineItem extends  AItemRenderer<GameResultInfo>  {
   
    @property(LobbyUserHeadItem)
    headItem: LobbyUserHeadItem = null;

    @property(Label)
    txtScore: Label = null;

    @property(Label)
    txtDes: Label = null;

    @property(Label)
    txtTime: Label = null;

    protected dataChanged(): void {
        this.headItem.setData({ head: this.data.head_img, name: "" });
        this.txtScore.string = this.data.score.toString();
        this.txtDes.string = this.data.game_title;
        this.txtTime.string = this.data.start_time;
    }

    onBtnDetailClick() {
        SoundManager.playClick();
        GlobalData.requestAuditionUpList(this.data.game_id, {
            success: () => {
                UIManager.Instace.showUI({ path: UIConfig.RankAuditionItemKey });
            }
        });
    }

}

