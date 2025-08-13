import { _decorator, Component, Label, Sprite } from 'cc';
import { utils } from '../common/utils';
import { GlobalData } from '../manager/GlobalData';
const { ccclass, property } = _decorator;

@ccclass('LobbyUserHeadItem')
export class LobbyUserHeadItem extends Component {

    setData(data: { head: string, name: string }) {
        if (data.head) {
            let sp = this.node.getChildByName("headMask").getChildByName("picHead").getComponent(Sprite);
            // utils.loadRemoteSpriteframe(sp, data.head);
        }
        let txtName = this.node.getChildByName("txtName").getComponent(Label);
        if (data.name) {
            txtName.string = utils.clampNickname(data.name, 6);
        } else {
            txtName.string = "";
        }
        let txtUserId = this.node.getChildByName("txtUserId").getComponent(Label);
        txtUserId.string = '账号:' + GlobalData.userInfo.user_id;

        let vip = this.node.getChildByName('vip').getComponent(Sprite);
        if(vip) {
            vip.node.active = GlobalData.userInfo.is_vip == 1;
        }
    }
}

