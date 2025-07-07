import { _decorator, Component, Node, Sprite, SpriteFrame } from 'cc';
import { GlobalData } from '../../manager/GlobalData';
import { GameLogic } from './GameLogic';
const { ccclass, property } = _decorator;

@ccclass('CardItem')
export class CardItem extends Component {
    //选中
    @property(Node)
    nodeMask: Node = null;
    //逢人配
    @property(Node)
    nodeReplace: Node = null;
    //牌色
    @property(Sprite)
    picCard: Sprite = null;
    //牌背
    @property(Node)
    picBack: Node = null;

    boolSelect: boolean = false
    boolMask: boolean = false
    cardValue: number = 0
    cardColor: number = 0
    cardSize: number = 0
    index: number = null;
    boolBottom: boolean = false;  //底部
    boolLastLine: boolean = false;    //最右边

    setMask(mask: boolean) {
        this.boolMask = mask;
        this.nodeMask.active = mask;
    }
    isMask() {
        return this.boolMask;
    }
    setSelect(select: boolean) {
        this.boolSelect = select;
    }
    isSelect() {
        return this.boolSelect;
    }
    //逢人配
    showReplace(type: boolean) {
         this.nodeReplace.active = type;
    }
    //value 0x23
    setValue(value: number, cardFrame: SpriteFrame) {
        this.cardValue = value;
        this.picCard.spriteFrame = cardFrame;
        let color = GameLogic.getCardColor(value);
        let size = value % 16;
        this.showReplace(color == GlobalData.cardInfo.unitCardColor && size == GlobalData.cardInfo.levelCard);
        this.setBack(false);
    }
    setIndex(idx: number) {
        this.index = idx;
        // console.log("idx--> ", idx);
    }
    getIndex() {
        return this.index;
    }
    getValue() {
        return this.cardValue;
    }
    //最底部的牌
    setBottom(type: boolean) {
        this.boolBottom = type;
    }
    getBottom() {
        return this.boolBottom;
    }
    setLastLine(type: boolean) {
        this.boolLastLine = type;
    }
    getLastLine() {
        return this.boolLastLine;
    }
    setBack(type: boolean) {
        this.picBack.active = type;
    }

    
    clear() {
        this.showReplace(false);
        this.setMask(false);
        this.setBack(false);
        this.boolSelect = false;
        this.boolMask = false;
        this.cardValue = 0;
        this.cardColor = 0;
        this.cardSize = 0;
        this.index = null;
    }
}

