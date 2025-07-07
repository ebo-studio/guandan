import { _decorator, Component, Label, Node, Sprite, SpriteFrame } from 'cc';
import AItemRenderer from '../virtualScroll/AItemRenerer';
import { GameResultInfo, GlobalData } from '../../manager/GlobalData';
import { LobbyUserHeadItem } from '../LobbyUserHeadItem';
import { SoundManager } from '../../manager/SoundManager';
import { UIManager } from '../../manager/UIManager';
import { UIConfig } from '../../manager/UIConfig';
const { ccclass, property } = _decorator;

@ccclass('RankRaceKickLineItem')
export class RankRaceKickLineItem extends AItemRenderer<GameResultInfo>  {
    @property(LobbyUserHeadItem)
    headItem: LobbyUserHeadItem = null;

    @property(Label)
    txtScore: Label = null;

    @property(Label)
    txtDes: Label = null;

    @property(Label)
    txtTime: Label = null;

    @property(Sprite)
    resType: Sprite = null;
    @property(SpriteFrame)
    sps: SpriteFrame[] = [];


    private desList = ["淘汰", "晋级"];

    protected dataChanged(): void {
        this.headItem.setData({ head: this.data.head_img, name: "" });
        this.txtDes.string = this.data.game_title;
        this.txtTime.string = this.data.start_time;

        this.resType.spriteFrame = this.sps[this.data.score]
        this.txtScore.string = this.desList[this.data.score];
    }

    onBtnDetailClick() {
        SoundManager.playClick();
        GlobalData.requestUpList(this.data.game_id, {
            success: () => {
                UIManager.Instace.showUI({ path: UIConfig.RankKickItemKey });
            }
        });
    }
}

