import { _decorator, Component, Node, sp, Vec3 } from 'cc';
import { GameDefine } from '../game/GameDefine';
import { GlobalData } from '../../manager/GlobalData';
const { ccclass, property } = _decorator;

@ccclass('CardAction')
export class CardAction extends Component {
    //炸弹
    @property(sp.Skeleton)
    zhaDan: sp.Skeleton = null;
    //刚板
    @property(sp.Skeleton)
    gangBan: sp.Skeleton = null;
    //木板
    @property(sp.Skeleton)
    muBan: sp.Skeleton = null;
    //三不带
    @property(sp.Skeleton)
    sanBuDai: sp.Skeleton = null;
    //三带一对
    @property(sp.Skeleton)
    sanDaiYiDui: sp.Skeleton = null;
    //顺子
    @property(sp.Skeleton)
    shunZi: sp.Skeleton = null;
    //同花顺
    @property(sp.Skeleton)
    tongHuaShun: sp.Skeleton = null;
     //王炸
     @property(sp.Skeleton)
     wanZha: sp.Skeleton = null;
    //接风
    @property(sp.Skeleton)
    jiefeng: sp.Skeleton = null;

    private zhaDanInitUpPos: Vec3 = null;
    private zhaDanInitDownPos: Vec3 = null;
    private tmpViewId: number = null;

    /**
     * 
     * @param len  炸弹时才有用
     */
    playAction(data: { viewId: number, cardType: number, cardNum: number }) {
        this.tmpViewId = data.viewId;
        let spAction: sp.Skeleton = null;
        let track: TrackEvent
        if (data.cardType == GameDefine.KIND_CARDS_3) { //三不带
            spAction = this.sanBuDai;
            track = spAction.setAnimation(0, "ani", false);
        }
        else if (data.cardType == GameDefine.KIND_CARDS_3_2) { //三带对
            spAction = this.sanDaiYiDui;
            track = spAction.setAnimation(0, "ani2_3dai2", false);
        }
        else if (data.cardType == GameDefine.KIND_CARDS_SHUNZI_2) { //木板
            spAction = this.muBan;
            track = spAction.setAnimation(0, "ani3_3ld", false);
        }
        else if (data.cardType == GameDefine.KIND_CARDS_SHUNZI_3) { //钢板
            spAction = this.gangBan;
            track = spAction.setAnimation(0, "ani4_gangban", false);
        }
        else if (data.cardType == GameDefine.KIND_CARDS_SHUNZI_1) { //顺子
            spAction = this.shunZi;
            track = spAction.setAnimation(0, "ani1_shunzi", false);
        }
        else if (data.cardType == GameDefine.KIND_CARDS_COLOR) { //同花顺
            spAction = this.tongHuaShun;
            track = spAction.setAnimation(0, "ani_ths", false);
        }
        else if (data.cardType == GameDefine.KIND_CARDS_BOMB_45) { //炸弹
            this.getInitPos();
            spAction = this.zhaDan;
            track = spAction.setAnimation(0, "ani_4zha", false);
            //炸弹有4张~8张,炸弹位置动态调整
            if (data.viewId == GlobalData.viewId.up) {
                let posX = this.zhaDanInitUpPos.x + 28 * (data.cardNum - 4) * 0.5;
                spAction.node.setPosition(posX, this.zhaDanInitUpPos.y, this.zhaDanInitUpPos.z);
            }
            else if (data.viewId == GlobalData.viewId.down) {
                let posX = this.zhaDanInitDownPos.x - 28 * (data.cardNum - 4) * 0.5;
                spAction.node.setPosition(posX, this.zhaDanInitDownPos.y, this.zhaDanInitDownPos.z);
            }
        }
        else if (data.cardType == GameDefine.KIND_CARDS_KING) { //天王炸
            spAction = this.wanZha;
            track = spAction.setAnimation(0, "ani_twzha", false);
        }
        else if (data.cardType == GameDefine.KIND_CARDS_Feng) {  //接风
            spAction = this.jiefeng;
            track = spAction.setAnimation(0, "ani_jiefeng", false);
        }
        spAction.node.active = true;
        // track = spAction.setAnimation(0, "ani", false);
        spAction.setTrackCompleteListener(track, (trackEntry) => {
            spAction.node.active = false;
        });
    }
    private getInitPos() {
        if (this.tmpViewId == GlobalData.viewId.up) {
            if (this.zhaDanInitUpPos == null) {
                this.zhaDanInitUpPos = this.zhaDan.node.getPosition();
            }
        }
        else if (this.tmpViewId == GlobalData.viewId.down) {
            if (this.zhaDanInitDownPos == null) {
                this.zhaDanInitDownPos = this.zhaDan.node.getPosition();
            }
        }
    }
}

