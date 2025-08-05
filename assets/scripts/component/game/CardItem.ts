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
    //同花顺标识
    @property(Node)
    tonghua: Node = null;
    //六炸标识
    @property(Node)
    liuzha: Node = null;
    //五炸
    @property(Node)
    wuzha: Node = null;
    //四炸标识
    @property(Node)
    sizha: Node = null;
    @property(Node)
    wanzha: Node = null;
    @property(Node)
    shunzi: Node = null;
    @property(Node)
    sandaier: Node = null;
    @property(Node)
    liandui: Node = null;

    @property(Node)
    color_1:Node = null; //方块

    @property(Node)
    color_2: Node = null; //梅花

    @property(Node)
    color_3: Node = null; //红桃

    @property(Node)
    color_4: Node = null; //黑桃

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
    showTonghua(isShow:boolean) {
        this.tonghua.active = isShow;
    }
    showBomb(bombNumber: number) {
        this.liuzha.active = bombNumber == 6;
        this.wuzha.active = bombNumber == 5;
        this.sizha.active = bombNumber == 4;
    }
    showThreeTwo(isShow: boolean) {
        this.sandaier.active = isShow;
    }
    showShunzi(isShow: boolean) {
        this.shunzi.active = isShow;
    }
    showWangza(isShow: boolean){
        this.wanzha.active = isShow;
    }
    showliandui(isShow: boolean){
        this.liandui.active = isShow;
    }
    //逢人配
    showReplace(type: boolean) {
         this.nodeReplace.active = type;
    }

    showCardColor(color: number) {
        if(!this.nodeReplace.active) {
            this.color_1.active = color == 0;
            this.color_2.active = color == 1;
            this.color_3.active = color == 2;
            this.color_4.active = color == 3;
        }
        else {
            this.color_1.active = this.color_2.active = this.color_3.active = this.color_4.active = false;
        }
    }


    //value 0x23
    setValue(value: number, cardFrame: SpriteFrame) {
        this.cardValue = value;
        this.picCard.spriteFrame = cardFrame;
        let color = GameLogic.getCardColor(value);
        let size = value % 16;
        this.showReplace(color == GlobalData.cardInfo.unitCardColor && size == GlobalData.cardInfo.levelCard);
        this.showCardColor(color);
        this.setBack(false);
        this.showTonghua(false);
        this.showThreeTwo(false);
        this.showWangza(false);
        this.showShunzi(false);
        this.showliandui(false);
        this.showBomb(3);
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
        this.showTonghua(false);
        this.showThreeTwo(false);
        this.showWangza(false);
        this.showShunzi(false);
        this.showliandui(false);
        this.showBomb(3);
        this.color_1.active = this.color_2.active = this.color_3.active = this.color_4.active = false;
    }
}

