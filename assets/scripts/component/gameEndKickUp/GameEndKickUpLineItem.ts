import { _decorator, Label, Sprite, SpriteFrame } from 'cc';
import AItemRenderer from '../virtualScroll/AItemRenerer';
import { RaceKickUpInfo } from '../../manager/GlobalData';
import { utils } from '../../common/utils';
const { ccclass, property } = _decorator;

@ccclass('GameEndScoreRankLineItem')
export class GameEndKickUpLineItem extends AItemRenderer<RaceKickUpInfo>  {
    //昵称
    @property(Label)
    txtName: Label = null;
    //头像
    @property(Sprite)
    picHead: Sprite = null;
    //晋级
    @property(Sprite)
    picType: Sprite = null;
    @property(SpriteFrame)
    sps: SpriteFrame[] = [];

    protected dataChanged() {
        this.txtName.string = this.data.nick_name;
        this.picType.spriteFrame = this.sps[this.data.score];
        utils.loadRemoteSpriteframe(this.picHead, this.data.head_img);
    }
}

