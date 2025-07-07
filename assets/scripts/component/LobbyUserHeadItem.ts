import { _decorator, Component, Label, Sprite } from 'cc';
import { utils } from '../common/utils';
const { ccclass, property } = _decorator;

@ccclass('LobbyUserHeadItem')
export class LobbyUserHeadItem extends Component {

    setData(data: { head: string, name: string }) {
        if (data.head) {
            let sp = this.node.getChildByName("headMask").getChildByName("picHead").getComponent(Sprite);
            utils.loadRemoteSpriteframe(sp, data.head);
        }
        let txtName = this.node.getChildByName("txtName").getComponent(Label);
        if (data.name) {
            txtName.string = utils.clampNickname(data.name, 6);
        } else {
            txtName.string = "";
        }
    }
}

