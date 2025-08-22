import { _decorator, Component, Event, Node, Sprite, SpriteAtlas } from "cc";
import { utils } from "../../common/utils";
import { GlobalData } from "../../manager/GlobalData";

const { ccclass, property } = _decorator

@ccclass('ChatItem')
export class ChatItem extends Component {
    @property(SpriteAtlas)
    itemAtlas: SpriteAtlas = null;

    @property(Sprite)
    chatItem: Sprite = null;

    @property(Sprite)
    line: Sprite = null;

    @property(Sprite)
    line_su: Sprite = null;

    private index: number = 0;

    protected onLoad(): void {
        this.node.on(Node.EventType.TOUCH_END, this.onTouchEndHandler, this);
    }


    setValue(value: number) {
        this.index = value;
        this.chatItem.spriteFrame = this.itemAtlas.getSpriteFrame(value + '(1)');
        if(value % 3 == 0) {
            this.line_su.node.active = false;
        }
        else {
            this.line_su.node.active = true;
        }
    }

    onTouchEndHandler() {
        utils.send(GlobalData.localEvent.SendChatAni, this.index);
        // console.log('点击表情');
    }
}