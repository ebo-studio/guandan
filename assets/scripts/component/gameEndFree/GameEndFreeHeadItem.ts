import { _decorator, Component, Label, Sprite, SpriteFrame } from 'cc';
import { utils } from '../../common/utils';
const { ccclass, property } = _decorator;

@ccclass('GameEndFreeHeadItem')
export class GameEndFreeHeadItem extends Component {
    //排名
    @property(Sprite)
    picRank: Sprite = null;
    //积分
    @property(Label)
    txtScore: Label = null;
    //头游
    @property(SpriteFrame)
    sps: SpriteFrame[] = [];

    @property(Sprite)
    panel_shengli: Sprite = null;

    @property(Sprite)
    panel_shibai: Sprite = null;

    setData(data: { head: string, name: string, rank: number, score: number, isWin: boolean}, force: boolean = false) {
        if (data.head) {
            let sp = this.node.getChildByName("headMask").getChildByName("picHead").getComponent(Sprite);
            utils.loadRemoteSpriteframe(sp, data.head);
        }
        let txtName = this.node.getChildByName("txtName").getComponent(Label)
        if (data.name) {
            txtName.string = utils.clampNickname(data.name, 6);
        } else {
            txtName.string = "";
        }
        this.picRank.node.active = !force;
        if (!force) {
            this.picRank.spriteFrame = this.sps[data.rank - 1];
        }
        let tmpScore = Boolean(data.score) ? data.score : 0;
        if (force) {
            this.txtScore.string = tmpScore + "";
        }
        else {
            this.txtScore.string = "+" + tmpScore;
        }
        this.panel_shengli.node.active = data.isWin;
        this.panel_shibai.node.active = data.isWin;
    }
}

