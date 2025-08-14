import { _decorator, Component, Label, Sprite, SpriteFrame } from 'cc';
import { utils } from '../../common/utils';
import { GlobalData } from '../../manager/GlobalData';
const { ccclass, property } = _decorator;

export enum TeamType {
    self,     //队友
    other,    //对手
}

@ccclass('UserHead')
export class UserHead extends Component {
    //对手,队友
    @property(SpriteFrame)
    spTeamTypes: SpriteFrame[] = [];
    
    private tmpTeamType: Sprite = null;
    private tmpCnt: Label = null;

    
    setData(data: { head: string, name: string, score: number }) {
        if (data.head) {
            // let sp = this.node.getChildByName("headMask").getChildByName("picHead").getComponent(Sprite);
            // utils.loadRemoteSpriteframe(sp, data.head);
        }
        let txtName = this.node.getChildByName("txtName").getComponent(Label)
        if (data.name) {
            txtName.string = utils.clampNickname(data.name, 5);
        } else {
            txtName.string = "无名";
        }
        //淘汰赛没有积分
        if (GlobalData.cardInfo.gameType == GlobalData.gameType.kick) {
            this.node.getChildByName("picScoreBg").active = false;
        } else {
            this.node.getChildByName("picScoreBg").active = true;
            let txtScore = this.node.getChildByName("picScoreBg").getChildByName("txtScore").getComponent(Label);
            if (txtScore) {
                txtScore.string = data.score.toString();
            }
        }
        this.tmpTeamType = this.node.getChildByName("picTeamType")?.getComponent(Sprite);
        if (this.tmpTeamType) {
            this.tmpTeamType.node.active = false;
        }
    }
    hideCardBg() {
        this.tmpCnt = this.node.getChildByName("nodeCardCnt")?.getChildByName("txtCnt").getComponent(Label);
        if (this.tmpCnt) {
            this.tmpCnt.node.parent.active = false;
            this.tmpCnt.node.active = false;
        }
    }
    //对手|队友
    setTeamType(type: TeamType) {
        if (this.tmpTeamType && !this.tmpTeamType.node.active) {
            this.tmpTeamType.node.active = true;
        }
        if (this.tmpTeamType) {
            this.tmpTeamType.spriteFrame = this.spTeamTypes[type];
        }
    }
    //牌背
    showLeftCntBg(show: boolean) {
        if (this.tmpCnt && this.tmpCnt.node.parent.active != show) {
            this.tmpCnt.node.parent.active = show;
        }
    }
    //剩余的牌
    setLeftCnt(num: number) {
        this.showLeftCntBg(true);
        if (num < 0 && this.tmpCnt) {
            this.tmpCnt.string = "";
            return;
        }
        if (this.tmpCnt && !this.tmpCnt.node.active) {
            this.tmpCnt.node.active = true;
        }
        if (this.tmpCnt) {
            this.tmpCnt.string = num.toString();
        }
    }
}

