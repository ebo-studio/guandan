import { _decorator, Component, Label, Node, Sprite, SpriteFrame } from 'cc';
import { utils } from '../../common/utils';
const { ccclass, property } = _decorator;

@ccclass('GameEndKickHeadItem')
export class GameEndKickHeadItem extends Component {
    //排名
    @property(Sprite)
    picRank: Sprite = null;
    //结果
    @property(Sprite)
    picRes: Sprite = null;
    //胜利|失败
    @property(SpriteFrame)
    spRes: SpriteFrame[] = [];
    //结果
    @property(Label)
    txtRes: Label = null;
    //用时
    @property(Label)
    txtTime: Label = null;
    //头游
    @property(SpriteFrame)
    sps: SpriteFrame[] = [];



    setData(data: GameMsg.IResUser, isWin: boolean, des: string) {
        if (data.headImg) {
            let sp = this.node.getChildByName("headMask").getChildByName("picHead").getComponent(Sprite);
            utils.loadRemoteSpriteframe(sp, data.headImg);
        }
        let txtName = this.node.getChildByName("txtName").getComponent(Label)
        if (data.name) {
            txtName.string = utils.clampNickname(data.name, 6);
        } else {
            txtName.string = "无名...";
        }
        this.txtRes.string = des;
        this.picRes.spriteFrame = this.spRes[Number(!isWin)];

        // this.picRank.spriteFrame = this.sps[data.rank - 1];
        // this.txtTime.string=  utils.getTimeDesc(data.time);
    }
}

