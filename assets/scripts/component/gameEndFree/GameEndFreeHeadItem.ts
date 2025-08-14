import { _decorator, Color, ColorKey, Component, Label, Sprite, SpriteFrame } from 'cc';
import { utils } from '../../common/utils';
import { GlobalData } from '../../manager/GlobalData';
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
    self_shengli: Sprite = null;

    @property(Sprite)
    self_shibai: Sprite = null;

    setData(data: { head: string, name: string, rank: number, score: number, isWin: boolean}, force: boolean = false) {
        // if (data.head) {
        //     let sp = this.node.getChildByName("headMask").getChildByName("picHead").getComponent(Sprite);
        //     utils.loadRemoteSpriteframe(sp, data.head);
        // }
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
        if(data.isWin) {
            if(data.name === GlobalData.userInfo.name) {
                this.self_shengli.node.active = true;
                this.self_shibai.node.active = false;
            }
            txtName.getComponent(Label).color = new Color(179, 92, 35, 255);
            this.txtScore.getComponent(Label).color = new Color(179, 92, 35, 255);
        }
        else {
            if(data.name === GlobalData.userInfo.name) {
                this.self_shengli.node.active = false;
                this.self_shibai.node.active = true;
            }
            txtName.getComponent(Label).color = new Color(47, 82, 164, 255);
            this.txtScore.getComponent(Label).color = new Color(47, 82, 164, 255);
        }
        // this.panel_shengli.node.active = data.isWin;
        // this.panel_shibai.node.active = data.isWin;
    }
}

