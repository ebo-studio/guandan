import { _decorator, Button, Component, EventTouch, instantiate, Node, Prefab, sp, Sprite, SpriteAtlas, SpriteFrame, tween, UITransform, v3, Vec2, Vec3, EventHandler, Layout, Label, Font, Mask, rect, BlockInputEvents, Size, Color, ScrollView, Animation } from 'cc';
import { CardItem } from './CardItem';
import { GameTimer } from './GameTimer';
import { utils } from '../../common/utils';
import { GameLogic } from './GameLogic';
import { GameEndType, GlobalData } from '../../manager/GlobalData';
import { SoundManager } from '../../manager/SoundManager';
import { PbManager } from '../../proto/PbManager';
import { GameSocket } from '../../manager/GameSocket';
import { UIManager } from '../../manager/UIManager';
import { UIConfig } from '../../manager/UIConfig';
import { CardAction } from '../cardAction/CardAction';
import { PokerLogic } from './PokerLogic';
import { GameDefine } from './GameDefine';

const { ccclass, property } = _decorator;

@ccclass('CardLayer')
export class CardLayer extends Component {
    //牌
    @property(Prefab)
    cardItem: Prefab = null;
    //图集
    @property(SpriteAtlas)
    cardAtlas: SpriteAtlas = null;
    //按钮层
    @property(Node)
    btnLayer: Node = null
    //不出
    @property(Button)
    btnNoOut: Button = null;
    //提示
    @property(Button)
    btnHint: Button = null;
    //出牌
    @property(Button)
    btnOut: Button = null;
    //回贡
    @property(Button)
    btnDownCard: Button = null;
    //倒计时
    @property(GameTimer)
    gameTimers: GameTimer[] = [];
    //出牌动画
    @property(CardAction)
    cardActions: CardAction[] = [];
    //不出提示
    @property(Node)
    nodeTipNoOut: Node[] = [];
    //头游末游
    @property(Node)
    picWinTypes: Node[] = [];
    @property(SpriteFrame)
    spWinTypes: SpriteFrame[] = [];
    //横排/纵排
    @property(Sprite)
    picCardDir: Sprite = null;
    @property(Sprite)
    picHuifuDir: Sprite = null;
    @property(Sprite)
    chatBtn: Sprite = null;
    // @property(SpriteFrame)
    // spCardDirs: SpriteFrame[] = [];
    @property(Sprite)
    picOneCard: Sprite = null;

    @property(Node)
    tonghuashunPic: Node = null;

    @property(Node)
    heitao: Node = null;

    @property(Node)
    fangkuai: Node = null;

    @property(Node)
    meihua: Node = null;

    @property(Node)
    hongtao: Node = null;

    @property(Node)
    chatNode: Node = null;

    @property(ScrollView)
    chatList: ScrollView;

    @property(Prefab)
    chatItemPrefab: Prefab = null;

    @property(Node)
    chatAniNode: Node = null;


    private chatAni: Animation = null;

    private baseCardWidth: number = 0       //牌面原始宽度
    private baseCardHeight: number = 0      //牌面原始高度
    private handCardsWidth: number = 0      //手牌宽度
    private handCardsHeight: number = 0     //手牌高度
    private outCardsWidth: number = 0       //自己出牌大小
    private outCardsWidthOppsite: number = 0//对家出牌大小
    private handDistance: number = 0        //手牌间距(横排横向)
    private handDistance_V: number = 0      //手牌间距(纵排横向)
    private cardDistance_V: number = 49     //手牌间距(纵排纵向)
    private handCardPool: CardItem[] = []   //回收的牌
    private handCardsValue: number[] = []   //手牌值
    private sorthandCardsValue: number[] = []   //理牌后手牌值
    private groupedCards: number[][] = [];
    private prevSelected: number[][] = []
    private leftLocks: number[] = [];
    private rightLocks: number[] = [];
    private prevSelectedIndex: number[] = [];
    private handCards: CardItem[] = []      //手牌
    private handScale: number = 1           //手牌缩放
    private startHandPosX: number = 0       //手牌X起始位置(横)
    private startHandPosX_V: number = 0     //手牌X起始位置(纵)
    private startOutPosX: number = 0        //出牌X起始位置
    private startOutPosXOppiste: number = 0 //对家出牌X起始位置
    private outScaleSelf: number = 1        //自己出牌缩放
    private allSmallCardScale: number = 1.1   //小牌缩放
    private outDistanceSelf: number = 0     //出牌间距
    private cardsPosY: number = 0           //只有一行居中
    private cardPopUpHight: number = 0      //弹起高度
    private selectCardValue: number[] = []  //所有选中的牌值
    private selectCardIndex: number[] = []; //选中的下标
    ///////连续点击/////////
    private isClickTwo: boolean = false     //连点两次
    private preClickTime: number = 0        //上次点击时间
    private currentClickTime: number = 0    //当前点击时间

    private outScaleOther: number = 0.5           //其他玩家出牌大小
    private outDistanceOther: number = 0          //出牌间距
    private outCards: CardItem[][] = [[], [], []]   //出牌
    //////////当前牌局信息///////
    private hintCards: number[][] = []       //提示
    private hintIndex: number = 0            //提示下标
    private breakTripleIndex: number = 0;
    private breakPairIndex: number = 0;
    private breakBombIndex: number = 0;
    /////////位置/////////
    private userHeadPos: Vec3[] = []      //玩家头像位置
    /////////其他/////////
    private halfWinHight: number = 0;        //半高
    private canTouch: boolean = true;        //可点击
    /////////手牌高度/////////
    private cardPosY: number = 0;

    //理牌数据
    private collect_cards: object[][] = []       //理牌列表
    private isOrganize: boolean = false;    //是否开始一键理牌

    private btnLabel: string = '理牌';

    private tong_suit_combs: object[][] = [[], [], [], []];
    private tong_hua_select_idx: number[] = [0, 0, 0, 0];


    private cur_select_cards: CardItem[] = [];

    is_game_start: boolean = false;
    private isGong: boolean = false;        //是否贡牌环节

    start() {
        this.addEventListeners();

        utils.on(GlobalData.localEvent.StartHandCard, this, this.onStartHandCard);
        utils.on(GlobalData.localEvent.OutCardTime, this, this.onOutCardTime);
        utils.on(GlobalData.localEvent.HandleBtn, this, this.onHandleBtn);
        utils.on(GlobalData.localEvent.OutCards, this, this.onOutCards);
        utils.on(GlobalData.localEvent.GameFinishCards, this, this.onGameFinishCards);
        utils.on(GlobalData.localEvent.ReconnectOutCard, this, this.onReconnectOutCard);
        utils.on(GlobalData.localEvent.GameFinish, this, this.onGameFinish);
        utils.on(GlobalData.localEvent.UserWin, this, this.onUserWin);
        utils.on(GlobalData.localEvent.NewCircle, this, this.onNewCircle);
        utils.on(GlobalData.localEvent.DownCard, this, this.onDownCard);
        utils.on(GlobalData.localEvent.NoCard, this, this.onNoCard);
        utils.on(GlobalData.localEvent.UpCard, this, this.onUpCard);
        utils.on(GlobalData.localEvent.ReviceCard, this, this.onReviceCard);
        utils.on(GlobalData.localEvent.ReviceCardFinish, this, this.onReviceCardFinish);
        utils.on(GlobalData.localEvent.ReviceCardSuccess, this, this.onReviceCardSuccess);
        utils.on(GlobalData.localEvent.AgainGame, this, this.onAgainGame);
        utils.on(GlobalData.localEvent.GameRestart, this, this.onGameRestart);
        utils.on(GlobalData.localEvent.KickFreeUp, this, this.onKickFreeUp);
        utils.on(GlobalData.localEvent.HaveWindy, this, this.onHaveWindy);
        utils.on(GlobalData.localEvent.ReviceBtn, this, this.onReviceBtn);
        // utils.on(GlobalData.localEvent.AiTipList, this, this.onAiTipList);
        // utils.on(GlobalData.localEvent.GetBackCardList, this, this.onGetBackCardList);
        // utils.on(GlobalData.localEvent.StartUpGong, this, this.onStartUpGong);
        // utils.on(GlobalData.localEvent.UpGongList, this, this.onUpGongList);
        // utils.on(GlobalData.localEvent.UpGongSuccess, this, this.onUpGongSuccess);
        // utils.on(GlobalData.localEvent.MatchGameOver, this, this.onMatchGameOver);
        // utils.on(GlobalData.localEvent.FirstPlayUser, this, this.onFirstPlayUser);
        // utils.on(GlobalData.localEvent.waitUserSelectCard, this, this.onWaitUserSelectCard);
        // utils.on(GlobalData.localEvent.GetNewbieRoomWord, this, this.onGetNewbieRoomWord);
        // utils.on(GlobalData.localEvent.AITipOpen, this, this.onAITipOpen);
        utils.on(GlobalData.localEvent.SendChatAni, this, this.sendChatAni);
        utils.on(GlobalData.localEvent.Organize, this, this.onOrganize);
    }
    onDestroy() {
        utils.off(GlobalData.localEvent.StartHandCard, this, this.onStartHandCard);
        utils.off(GlobalData.localEvent.OutCardTime, this, this.onOutCardTime);
        utils.off(GlobalData.localEvent.HandleBtn, this, this.onHandleBtn);
        utils.off(GlobalData.localEvent.OutCards, this, this.onOutCards);
        utils.off(GlobalData.localEvent.GameFinishCards, this, this.onGameFinishCards);
        utils.off(GlobalData.localEvent.ReconnectOutCard, this, this.onReconnectOutCard);
        utils.off(GlobalData.localEvent.GameFinish, this, this.onGameFinish);
        utils.off(GlobalData.localEvent.UserWin, this, this.onUserWin);
        utils.off(GlobalData.localEvent.NewCircle, this, this.onNewCircle);
        utils.off(GlobalData.localEvent.DownCard, this, this.onDownCard);
        utils.off(GlobalData.localEvent.NoCard, this, this.onNoCard);
        utils.off(GlobalData.localEvent.UpCard, this, this.onUpCard);
        utils.off(GlobalData.localEvent.ReviceCard, this, this.onReviceCard);
        utils.off(GlobalData.localEvent.ReviceCardFinish, this, this.onReviceCardFinish);
        utils.off(GlobalData.localEvent.ReviceCardSuccess, this, this.onReviceCardSuccess);
        utils.off(GlobalData.localEvent.AgainGame, this, this.onAgainGame);
        utils.off(GlobalData.localEvent.GameRestart, this, this.onGameRestart);
        utils.off(GlobalData.localEvent.KickFreeUp, this, this.onKickFreeUp);
        utils.off(GlobalData.localEvent.HaveWindy, this, this.onHaveWindy);
        utils.off(GlobalData.localEvent.ReviceBtn, this, this.onReviceBtn);
        // utils.off(GlobalData.localEvent.AiTipList, this, this.onAiTipList);
        // utils.off(GlobalData.localEvent.GetBackCardList, this, this.onGetBackCardList);
        // utils.off(GlobalData.localEvent.StartUpGong, this, this.onStartUpGong);
        // utils.off(GlobalData.localEvent.UpGongList, this, this.onUpGongList);
        // utils.off(GlobalData.localEvent.UpGongSuccess, this, this.onUpGongSuccess);
        // utils.off(GlobalData.localEvent.MatchGameOver, this, this.onMatchGameOver);
        // utils.off(GlobalData.localEvent.FirstPlayUser, this, this.onFirstPlayUser);
        // utils.off(GlobalData.localEvent.waitUserSelectCard, this, this.onWaitUserSelectCard);
        // utils.off(GlobalData.localEvent.GetNewbieRoomWord, this, this.onGetNewbieRoomWord);
        // utils.off(GlobalData.localEvent.AITipOpen, this, this.onAITipOpen);
        utils.off(GlobalData.localEvent.Organize, this, this.onOrganize);
        utils.off(GlobalData.localEvent.SendChatAni, this, this.sendChatAni);
    }
    //初始化配置
    init(reset: Boolean = true) {
        GlobalData.cardInfo.cardDir = false;
        this.halfWinHight = utils.getSceneSize(2).height;
        this.baseCardWidth = 84;
        this.baseCardHeight = 109;
        // if (GlobalData.cardInfo.cardDir) {
        //   this.handScale = 1.5;
        // } else {
        //纵向牌不能铺满,需要缩小点
        this.handScale = 1.3;
        // }

        //弹起高度
        this.cardPopUpHight = 20;
        //自己手牌(横)
        this.handDistance = this.baseCardWidth * 0.36 * this.handScale;
        this.handCardsWidth = this.baseCardWidth * this.handScale;
        this.handCardsHeight = this.baseCardHeight * this.handScale;
        //手牌位置高度 88是底部遮罩高度
        // if (GlobalData.cardInfo.cardDir) {
        this.cardsPosY = -this.halfWinHight + 58 + this.handCardsHeight * 0.5;
        // } else {
        //   //6为抬高一点点，不和底部遮罩重叠
        //   this.cardsPosY = -this.halfWinHight + 6 + this.handCardsHeight * 0.5;
        // }
        //自己手牌(纵)
        this.handDistance_V = this.baseCardWidth * 0.8 * this.handScale;
        //自己出牌
        this.outScaleSelf = 1.1;
        this.outDistanceSelf = this.baseCardWidth * 0.35 * this.outScaleSelf;
        this.outCardsWidth = this.baseCardWidth * this.outScaleSelf;

        //其他玩家
        this.outScaleOther = 1.1;
        this.outDistanceOther = this.handDistance * this.outScaleOther * 0.75;
        this.outCardsWidthOppsite = this.baseCardWidth * this.outScaleOther;
        if (reset) {
            this.reStart();
        }
        // this.maskNode.active = false;
        // if (this.newbieCardTipNode && this.newbieCardTipNode.node) {
        //   this.newbieCardTipNode.node.destroy();
        // }
        // if (this.newbieButtonTipNode && this.newbieButtonTipNode.node) {
        //   this.newbieButtonTipNode.node.destroy();
        // }
        // const btnout = this.btnOut.getComponent(Button);
        // const btnNoOut = this.btnNoOut.getComponent(Button);
        // if (GlobalData.cardInfo.gameType == 97) {
        //   btnout.transition = Button.Transition.NONE;
        //   btnNoOut.transition = Button.Transition.NONE;
        //   this.tipBtnType = 0;
        // } else {
        //   this.tipBtnType = 3;
        //   btnout.transition = Button.Transition.SCALE;
        //   btnNoOut.transition = Button.Transition.SCALE;
        //   btnout.zoomScale = 0.95;
        //   btnNoOut.zoomScale = 0.95;
        // }
        // // 测试
        // this.testSelfHandCard();
        // this.testOtherOuts();
        // this.testAllOtherHandCards();
    }


    private reStart() {
        //隐藏btn
        this.showBtnLayer(false);
        this.showHandleBtn();
        this.showCardDir(false);
        this.showUpDownCardBtn();
        this.hideAllNoOut();
        this.hideAllWinType();
        this.clearAllOutCards();
        this.hideAllTime();
        this.hideAllCardTypeAction();
        this.clearHandCards();
        this.hintIndex = 0;
        this.hintCards = [];
        this.collect_cards = [];
        for (let i: number = 0; i < 15; i++) {
            this.collect_cards.push([]);
        }
    }

    showChatView() {
        if (!this.isShowChatView) {
            this.chatNode.active = true;
            this.isShowChatView = true;
        }
        else {
            this.chatNode.active = false;
            this.isShowChatView = false;
        }
    }

    sendChatAni(data: any) {
        let a = this;
        this.chatAniNode.active = true;
        this.chatAni = this.chatAniNode.getComponent(Animation);
        const state = this.chatAni.getState('chat_' + data);
        state.repeatCount = 3;
        this.chatAni.once(Animation.EventType.FINISHED, () => {
            a.chatAniNode.active = false;
        }, this);
        this.chatAni.play('chat_' + data);
        this.showChatView();
    }

    private isShowChatView: boolean = false;

    /**
     * 测试其他玩家出牌
     */
    private testOtherOuts() {
        let tempCard0 = [0x0a, 0x0a, 0x1a, 0x1a, 0x0a, 0x0a, 0x1a, 0x1a];
        this.onEventOutCards({ viewid: GlobalData.viewId.down, cards: tempCard0, cardCount: tempCard0.length, isAuto: false });
        this.onEventOutCards({ viewid: GlobalData.viewId.up, cards: tempCard0, cardCount: tempCard0.length, isAuto: false });
        this.onEventOutCards({ viewid: GlobalData.viewId.opposite, cards: tempCard0, cardCount: tempCard0.length, isAuto: false });

        // setTimeout(() => {
        //     let tempCard0 = [0x01, 0x01, 0x11, 0x11];
        //     this.onEventOutCards({ viewid: GlobalData.viewId.down, cards: tempCard0, cardCount: tempCard0.length, isAuto: false });
        // }, 100);
        // setTimeout(() => {
        //     let tempCard0 = [0x01, 0x01, 0x11, 0x11, 0x21, 0x21];
        //     this.onEventOutCards({ viewid: GlobalData.viewId.down, cards: tempCard0, cardCount: tempCard0.length, isAuto: false });
        // }, 2500);
        // setTimeout(() => {
        //     let tempCard0 = [0x01, 0x01, 0x11, 0x11, 0x21, 0x21, 0x21, 0x21];
        //     this.onEventOutCards({ viewid: GlobalData.viewId.down, cards: tempCard0, cardCount: tempCard0.length, isAuto: false });
        // }, 4500);

        // setTimeout(() => {
        //     let tempCard0 = [0x01, 0x01, 0x11, 0x11,0x01, 0x01, 0x11, 0x11];
        //     this.onEventOutCards({ viewid: GlobalData.viewId.down, cards: tempCard0, cardCount: tempCard0.length, isAuto: false });
        // }, 500);


        //this.onEventOutCards({ viewid: GlobalData.viewId.opposite, cards: tempCard0, cardCount: tempCard0.length, isAuto: false });
        //let tempCard1 = [0x03, 0x04, 0x13, 0x14, 0x23, 0x24, 0x06, 0x07, 0x16, 0x17];
        //let tempCard2 = [0x03, 0x04, 0x13, 0x14, 0x23, 0x24, 0x06, 0x07, 0x16, 0x17,];
        //let tempCard3 = [0x02, 0x03, 0x04, 0x05, 0x06, 0x06];
        //this.onEventOutCards({ viewid: GlobalData.viewId.self, cards: cards, cardCount: cards.length, isAuto: true });

    }
    private testAllOtherHandCards() {
        let tempCard = [
            0x01, 0x02, 0x03, 0x04, 0x05,
            0x06, 0x07, 0x08, 0x09,
            0x0a,
            0x0b, 0x0c, 0x0d,
            0x11, 0x12, 0x13, 0x14, 0x15, 0x16, 0x17, 0x18, 0x19, 0x1a, 0x1b, 0x1c, 0x1d,
            0x2d
        ];
        this.showOtherHandCards(GlobalData.viewId.up, tempCard, tempCard.length);
        this.showOtherHandCards(GlobalData.viewId.down, tempCard, tempCard.length);
        this.showOtherHandCards(GlobalData.viewId.opposite, tempCard, tempCard.length);
        this.setHandCards(tempCard);
    }
    /**
     * 测试自己手牌
     */
    private testSelfHandCard() {
        // this.handCardsValue = [
        //     0x01,0x02,0x03,0x04,0x05,0x06,0x07,0x08,0x09,0x0a,0x0b,0x0c,0x0d,  //方
        //     0x11,0x12,0x13,0x14,0x15,0x16,0x17,0x18,0x19,0x0a,0x1b,0x1c,0x1d,  //梅
        //     0x21,0x22,0x23,0x24,0x25,0x26,0x27,0x28,0x29,0x2a,0x2b,0x2c,0x2d,  //红
        //     0x31,0x32,0x33,0x34,0x35,0x36,0x37,0x38,0x39,0x3a,0x3b,0x3c,0x3d,  //黑
        //     0x4e,0x4f  //  小王,大王
        // ]
        // let cardList = [0x21,0x21,0x21,0x21,0x21,0x21,0x21,0x21,0x21,0x21,0x21,0x21,0x21];
        let cardList = [
            0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d,
            0x01, 0x12, 0x13, 0x14, 0x15, 0x26, 0x17, 0x18, 0x19, 0x1a, 0x3b, 0x1c, 0x1d,
            // 0x2a,
            // 0x3a,
            // 0x11, 0x12,
            // 0x11, 0x12,
            // 0x21, 0x22,
            // 0x21, 0x22,
            // 0x31, 0x32,
            // 0x31, 0x32,
            // 0x4e, 0x4f,
            0x4e, 0x4f
        ];
        // let cardList1 = [
        //     22,24,144,93,111,64,63,43,123,122,133,62,114,54,94,114,121,33,165,22,133,41,81,102,124,94,74
        // ];
        // let cardList = GameLogic.convertCardListS2C(cardList1);
        console.log("GlobalData.cardInfo.cardDir---> ", GlobalData.cardInfo.cardDir);
        this.setHandCards(cardList, true);
        this.showBtnLayer(true);
        this.showHandleBtn(true, true);
        // this.delayShowCardDir();
        this.hintCards = [[0x01, 0x01], [0x01, 0x02], [0x01, 0x01, 0x11, 0x11], [0x4e, 0x4e]];
    }
    //手牌
    private setHandCards(value: number[], ani: boolean = false, isUp: boolean = false) {
        this.is_game_start = true;
        // if (!ani && this.isOrganize) {
        //   this.btnLabel == '恢复'
        //   this.onBtnCardCollect();
        //   return
        // }
        // if (GlobalData.cardInfo.gameType == 97) {
        //   this.btnCardCollect.node.active = false;
        //   this.btnCardCollect2.node.active = false;
        //   this.nodeSameSuit.active = false;
        //   this.setCanTouch(false);
        // } else {
        setTimeout(() => {
            this.picOneCard.node.active = true;
            if (this.isOrganize) {
                this.picHuifuDir.node.active = true;
                this.picCardDir.node.active = false;
                this.btnLabel = '恢复'
                this.onBtnCardCollect();
            }
            else {
                if (this.btnLabel == '恢复') {
                    this.picHuifuDir.node.active = true;
                    this.picCardDir.node.active = false;
                }
                else {
                    this.picHuifuDir.node.active = false;
                    this.picCardDir.node.active = true;
                }
            }
            // this.btnCardCollect.node.active = true;
            // this.btnCardCollect2.node.active = true;
        }, 1000);
        //   this.nodeSameSuit.active = true;
        // }
        // this.btnCardCollect.node.active = true;
        // this.nodeSameSuit.active = true;
        this.delayShowCardDir();
        this.clearHandCards();
        this.handCardsValue = value;
        let is_exist_collects: boolean = false;
        for (let i: number = 14; i >= 0; i--) {
            if (this.collect_cards[i].length > 0) {
                is_exist_collects = true;
                break;
            }
        }
        if (value.length == 0 && !is_exist_collects) {
            return;
        }
        let delayTime = 0.06;
        let that = this;
        //手牌有动画,动画过程不让点击
        if (ani) {
            this.setCanTouch(false);
        }
        if (GlobalData.cardInfo.cardDir) {
            if (!ani) {
                this.handCardsValue = GameLogic.sortCardsBySizeDown(this.handCardsValue, this.handCardsValue.length);
            }
            this.initHandStartPosX();
            let posY = this.getHandCardPosY();
            this.cardPosY = posY;
            // console.log("this.handCardsValue ", this.handCardsValue);

            for (let i = 0; i < this.handCardsValue.length; i++) {
                // console.log("i-------> ", i);
                let card = this.getOneCard();
                if (!card) {
                    console.log('!!!!!!!!!!card :>> ',);
                    return;
                }
                card.node.setSiblingIndex(i);
                let posX = this.getHandCardPosX(i);
                card.node.scale = new Vec3(this.handScale, this.handScale, this.handScale);
                //手牌位置
                let cardSps = this.getCardsSprite(this.handCardsValue[i]);
                if (cardSps) {
                    card.setValue(this.handCardsValue[i], cardSps);
                }
                //有发牌动画,最后一张显示背面
                if (ani) {
                    if (i == this.handCardsValue.length - 1) {
                        card.setBack(true);
                    }
                }
                //动画
                let moveFunc = function (posX, posY) {
                    if (ani) {
                        card.node.setPosition(v3(0, 500, 0))
                        tween(card.node)
                            .delay(i * delayTime)
                            .call(() => {
                                if (i == that.handCardsValue.length - 1) {
                                    card.setBack(false);
                                    that.setCanTouch(true);
                                }
                            })
                            .to(0.1, { position: v3(posX, posY, 0) })
                            .call(() => {
                                if (i == that.handCardsValue.length - 1) {
                                    that.sortAllCards();
                                    console.log("牌发完了---> ", utils.deepCopy(that.handCardsValue));
                                }
                            })
                            .start();

                    } else {
                        if (isUp && that.handCardsValue[i] == GlobalData.cardInfo.giveCard) {
                            isUp = false; //牌值可能有两张一样的,提示一张就行
                            card.node.setPosition(v3(posX, posY + that.cardPopUpHight));
                            tween(card.node)
                                .sequence(
                                    tween().delay(0.2),
                                    tween().to(0.15, { position: v3(posX, posY, 0) })
                                )
                                .start();
                        } else {
                            card.node.setPosition(v3(posX, posY));
                        }
                        card.setIndex(i);
                    }
                }
                moveFunc(posX, posY);
                this.handCards.push(card);
            }
        } else {
            this.handCardsValue = GameLogic.sortCardsBySizeDown(this.handCardsValue, this.handCardsValue.length);
            // console.log("len---> ",value.length);
            let comb_list1: object[] = [];
            for (let i: number = 14; i >= 7; i--) {
                if (this.collect_cards[i].length > 0) {
                    for (let j: number = 0; j < this.collect_cards[i].length; j++) {
                        let comb_cards = this.collect_cards[i][j];
                        comb_list1.push(comb_cards);
                    }
                }
            }

            let comb_list2: object[] = [];
            for (let i: number = 6; i >= 0; i--) {
                if (this.collect_cards[i].length > 0) {
                    for (let j: number = 0; j < this.collect_cards[i].length; j++) {
                        let comb_cards = this.collect_cards[i][j];
                        comb_list2.push(comb_cards);
                    }
                }
            }


            let sameSizeList = GameLogic.getSameCardSizeList(value);
            let len0: number = sameSizeList.length;

            let combs_cards_lists1: number[][] = [];
            for (let i: number = 0; i < comb_list1.length; i++) {
                combs_cards_lists1.push(comb_list1[i]["cards"]);
            }

            let combs_cards_lists2: number[][] = [];
            for (let i: number = 0; i < comb_list2.length; i++) {
                combs_cards_lists2.push(comb_list2[i]["cards"]);
            }


            sameSizeList = combs_cards_lists1.concat(sameSizeList);
            sameSizeList = sameSizeList.concat(combs_cards_lists2);
            // console.log("sameSizeList--> ",sameSizeList.length);
            this.initHandStartPosX_V(sameSizeList.length);

            let len1: number = comb_list1.length;
            let len2: number = comb_list2.length;

            let idx: number = 0;
            let tmpIdx: number = 0;
            // console.log("---> ",sameSizeList[0][0]);
            for (let i = 0; i < sameSizeList.length; i++) {

                const list = sameSizeList[i];
                let posX = this.getHandCardPosX_V(i);
                for (let j = list.length - 1; j >= 0; j--) {
                    let valueSize = list[j];
                    // console.log("i----> ", i, valueSize);
                    let card = this.getOneCard()
                    card.node.setSiblingIndex(idx);
                    let posY = this.getHandCardPosY_V(j);
                    card.node.scale = new Vec3(this.handScale, this.handScale, this.handScale);
                    //手牌位置
                    let cardSps = this.getCardsSprite(valueSize);
                    if (cardSps) {
                        card.setValue(valueSize, cardSps);
                    }
                    if (ani) {
                        if (i == sameSizeList.length - 1 && j == 0) {
                            card.setBack(true);
                            tmpIdx = idx;
                        }
                    }
                    let moveFunc = function (posX: number, posY: number, tmpIdx: number) {
                        if (ani) {
                            card.node.setPosition(v3(0, 0, 0))
                            tween(card.node)
                                .delay(i * delayTime)
                                .call(() => {
                                    if (tmpIdx == idx - 1) {
                                        card.setBack(false);
                                        that.setCanTouch(true);
                                    }
                                })
                                .to(0.1, { position: v3(posX, posY, 0) })
                                .start();
                        } else {
                            card.node.setPosition(v3(posX, posY));
                        }
                    }
                    moveFunc(posX, posY, idx);
                    card.setIndex(idx);
                    card.setBottom(j == 0);
                    card.setLastLine(i == sameSizeList.length - 1);


                    //card.showNodeCollect(i < len1 || i > sameSizeList.length - len2);

                    if (j == 0 && (i < len1 || i >= sameSizeList.length - len2)) {
                        // card.showNodeCollect(true);
                        if (i < len1) {
                            let typeName = PokerLogic.comb_type_name[Number(comb_list1[i]["type"])];
                            if (typeName == '六炸') {
                                card.showBomb(6);
                            }
                            else if (typeName == '五炸') {
                                card.showBomb(5);
                            }
                            else if (typeName == '同花顺') {
                                card.showTonghua(true);
                            }
                            else if (typeName == '四炸') {
                                card.showBomb(4);
                            }
                            else if (typeName == '三带对') {
                                card.showThreeTwo(true);
                            }
                            else if (typeName == '顺子') {
                                card.showShunzi(true);
                            }
                            else if (typeName == '三连对') {
                                card.showliandui(true);
                            }
                            else if (typeName == '天王炸') {
                                card.showWangza(true);
                            }
                            //   card.combTypeLable.string = PokerLogic.comb_type_name[Number(comb_list1[i]["type"])];
                            //   card.bgSprite.spriteFrame = card.bgSpriteFrames[1];
                        }

                        if (i >= sameSizeList.length - len2) {
                            let comb_type: number = Number(comb_list2[i - len0 - len1]["type"]);
                            if (this.isOrganize && (comb_type == PokerLogic.TYPE.dan_zhang || comb_type == PokerLogic.TYPE.yi_dui || comb_type == PokerLogic.TYPE.san_zhang)) {
                                // card.bgSprite.spriteFrame = null;
                                // card.combTypeLable.string = "";
                            } else {
                                let typeName = PokerLogic.comb_type_name[comb_type];
                                if (typeName == '六炸') {
                                    card.showBomb(6);
                                }
                                else if (typeName == '五炸') {
                                    card.showBomb(5);
                                }
                                else if (typeName == '同花顺') {
                                    card.showTonghua(true);
                                }
                                else if (typeName == '四炸') {
                                    card.showBomb(4);
                                }
                                else if (typeName == '三带对') {
                                    card.showThreeTwo(true);
                                }
                                else if (typeName == '顺子') {
                                    card.showShunzi(true);
                                }
                                else if (typeName == '三连对') {
                                    card.showliandui(true);
                                }
                                else if (typeName == '天王炸') {
                                    card.showWangza(true);
                                }
                                // card.bgSprite.spriteFrame = card.bgSpriteFrames[0];
                                // card.combTypeLable.string = PokerLogic.comb_type_name[comb_type];
                            }
                        }
                    } else {
                        // card.showNodeCollect(false);
                    }



                    idx++;
                    this.handCards.push(card);
                }
            }
        }
    }
    //贡牌位置
    getOutCardByViewId(viewId: number) {
        let posX: number = 0;
        let posY: number = 0;
        if (viewId == GlobalData.viewId.self) {
            this.initOutStartPosX(1);
            posX = this.getOutPosX(0);
            posY = -40;
        }
        else if (viewId == GlobalData.viewId.opposite) {
            this.initOutStartPosX(1, true);
            posX = this.getOutPosX(0, true);
            posY = this.userHeadPos[viewId].y - 180;
        }
        else if (viewId == GlobalData.viewId.up) {
            posX = this.userHeadPos[viewId].x + 160 + this.outDistanceOther;
            posY = this.userHeadPos[viewId].y - 60;
        }
        else if (viewId == GlobalData.viewId.down) {
            posX = this.userHeadPos[viewId].x - 160 - this.outDistanceOther;
            posY = this.userHeadPos[viewId].y - 60;
        }
        return v3(posX, posY, 0)
    }
    //贡牌大小
    getOutCardScaleByViewId(viewId: number) {
        if (viewId == GlobalData.viewId.self) {
            return this.outScaleSelf;
        }
        else if (viewId == GlobalData.viewId.opposite) {
            return this.outScaleOther;
        }
        else if (viewId == GlobalData.viewId.up) {
            return this.outScaleOther;
        }
        else if (viewId == GlobalData.viewId.down) {
            return this.outScaleOther;
        }
    }
    //处理出牌
    private dealReconectOutCards(viewid: number, cardList: number[], count: number) {
        let tempCards = cardList;
        this.clearOutCards(viewid);
        if (viewid == GlobalData.viewId.self) {
            //出牌动作
            this.initOutStartPosX(tempCards.length);
            for (let k = 0; k < tempCards.length; k++) {
                let card = this.getOneCard();
                let posX = this.getOutPosX(k);
                card.setMask(false);
                card.node.setSiblingIndex(k);
                card.node.setScale(this.allSmallCardScale, this.allSmallCardScale, this.allSmallCardScale);
                card.node.setPosition(posX, -45);
                let cardSps = this.getCardsSprite(tempCards[k], true);
                if (cardSps) {
                    card.setValue(tempCards[k], cardSps);
                    this.outCards[viewid].push(card);
                }
            }
        } else if (viewid == GlobalData.viewId.opposite) {
            //出牌动作
            this.initOutStartPosX(tempCards.length, true);
            let pos_Y = this.userHeadPos[viewid].y;
            for (let k = 0; k < tempCards.length; k++) {
                let card = this.getOneCard()
                let posX = this.getOutPosX(k, true);
                card.node.setSiblingIndex(k);
                card.node.setScale(this.allSmallCardScale, this.allSmallCardScale, this.allSmallCardScale);
                card.node.setPosition(posX, pos_Y - 180, 0);
                let cardSps = this.getCardsSprite(tempCards[k], true);
                if (cardSps) {
                    card.setValue(tempCards[k], cardSps);
                    this.outCards[viewid].push(card);
                }
            }
        }
        else {
            let pos_Y = this.userHeadPos[viewid].y - 60;
            let pos_X = this.userHeadPos[viewid].x;
            let startX = 0;
            if (viewid == 2) {//右边
                startX = pos_X - 160 - (count + 1) * this.outDistanceOther;
            } else {//左边
                startX = pos_X + 160;
            }
            for (let i = 0; i < count; i++) {
                let card = this.getOneCard();
                card.node.setSiblingIndex(i);
                card.node.setScale(this.allSmallCardScale, this.allSmallCardScale, this.allSmallCardScale);
                startX += this.outDistanceOther;
                card.node.setPosition(startX, pos_Y, 0);
                let cardSps = this.getCardsSprite(tempCards[i], true);
                if (cardSps) {
                    card.setValue(tempCards[i], cardSps);
                    this.outCards[viewid].push(card);
                }
            }
        }
    }
    //出牌 因为有两副牌,牌值和牌色一样,无法单一通过牌值确定要出那张牌,会出现选的是左边的黑桃5,出的是右边的黑桃5
    //1: 自己出牌需要记录下标,通过下标和牌值确定唯一的牌
    //2: 系统出牌,只要出了就行
    private onEventOutCards(jsonData: { viewid: number, cards: number[], cardCount: number, isAuto: boolean }) {
        let viewid = jsonData.viewid;

        //上轮玩家出过牌,这轮不出,清空已出牌
        if (jsonData.cardCount == 0) {
            this.clearOutCards(viewid);
            return;
        }
        //测试
        //this.showCardTypeActionByViewId({ viewId: jsonData.viewid, cardType: GameDefine.KIND_CARDS_BOMB_45, cardNum: jsonData.cards.length });

        this.clearOutCards(viewid);
        this.dealOutCards(viewid, jsonData.cards, jsonData.cardCount, jsonData.isAuto);
    }

    //处理出牌
    private dealOutCards(viewid: number, cardList: number[], count: number, isAuto: boolean = true) {
        //出牌排序
        // let tempCards = GameLogic.getSortCard(cardList);
        let that = this;
        let tempCards = cardList;
        if (viewid == GlobalData.viewId.self) {
            //剩余手牌值
            if (this.isOrganize && isAuto) {
                for (let i: number = 0; i < this.handCards.length; i++) {
                    this.handCardsValue.push(this.handCards[i].getValue());
                }
                this.onBtnCardCollect();
            }
            console.log('this.handCardsValue :>> ', this.handCardsValue);
            let tmpInfo = GameLogic.getRemainCardsByDelete(this.handCardsValue, tempCards);
            this.handCardsValue = tmpInfo.cards;
            console.log('tmpInfo :>> ', tmpInfo);
            // console.log("+++> ", this.handCardsValue.length);
            // console.log("handcards 2 --> ",utils.deepCopy(this.handCardsValue));
            if (isAuto) {
                if (GlobalData.cardInfo.cardDir) {
                    this.doHandCardPopDown();
                } else {
                    this.doHandCardPopDown_V();
                }
                //找到下标
                this.selectCardIndex = tmpInfo.idxs;
                if (this.selectCardIndex.length <= 1) {
                    console.log("贡牌下标---> ", this.selectCardIndex[0]);
                }
            }
            // console.log("count--> ", tempCards);
            //出牌s
            for (let j = 0; j < count; j++) {
                for (const k in this.handCards) {
                    if (this.handCards[k] && tempCards[j] == this.handCards[k].getValue() && this.selectCardIndex.indexOf(this.handCards[k].getIndex()) != -1) {
                        // this.handCards[k].nodeCollect.active = false;
                        this.outCards[viewid].push(this.handCards[k]);
                        this.handCards.splice(Number(k), 1);
                        break;
                    }
                }
            }
            console.log("出牌 cnt---> ", utils.deepCopy(this.outCards[viewid].length));
            //出牌动作
            this.initOutStartPosX(this.outCards[viewid].length);
            for (let k = 0; k < this.outCards[viewid].length; k++) {
                let posX = this.getOutPosX(k);
                let card = this.outCards[viewid][k];
                card.setMask(false);
                card.node.setSiblingIndex(k);
                card.node.setScale(this.outScaleSelf, this.outScaleSelf, this.outScaleSelf);
                let moveTime = 0.15;
                tween(card.node)
                    .parallel(
                        tween().to(moveTime, { position: v3(posX, 80, 0) }),
                        tween().to(moveTime, { scale: v3(this.allSmallCardScale, this.allSmallCardScale, this.allSmallCardScale) })
                    )
                    // .to(moveTime, { position: v3(posX, -45, 0) })
                    .call(() => {
                        let cardSps = this.getCardsSprite(card.cardValue, true);
                        if (cardSps) {
                            card.setValue(card.cardValue, cardSps);
                        }
                    })
                    .start();
            }
            this.setCanTouch(false);
            if (GlobalData.cardInfo.cardDir) {
                //整理手牌
                let posY = this.getHandCardPosY();
                //实际起始位置
                this.initHandStartPosX();
                for (let j = 0; j < this.handCards.length; j++) {
                    let card = this.handCards[j];
                    card.node.scale = v3(this.handScale, this.handScale, this.handScale);
                    card.setIndex(j);
                    //手牌位置
                    let posX = this.getHandCardPosX(j);
                    let moveFunc = function (posX: number, tmpIdx: number) {
                        tween(card.node)
                            .delay(0.2)
                            .to(0.1, { position: v3(posX, posY, 0) })
                            .call(() => {
                                if (tmpIdx == that.handCards.length - 1) {
                                    that.setCanTouch(true);
                                }
                            })
                            .start();
                    }
                    moveFunc(posX, j);
                }
            } else {

                this.init(false);

                let sameSizeList: number[][] = [];
                let comb_list1: object[] = [];
                let comb_list2: object[] = [];

                let len0: number = 0;
                let len1: number = 0;
                let len2: number = 0;

                if (isAuto) {
                    this.collect_cards = [];
                    for (let i: number = 0; i < 15; i++) {
                        this.collect_cards.push([]);
                    }
                    this.handCardsValue = [];
                    for (let i: number = 0; i < this.handCards.length; i++) {
                        this.handCardsValue.push(this.handCards[i].getValue());
                    }

                    this.handCardsValue = GameLogic.sortCardsBySizeDown(this.handCardsValue, this.handCardsValue.length);
                    this.clearHandCards();
                    sameSizeList = GameLogic.getSameCardSizeList(this.handCardsValue);

                } else {
                    this.handCardsValue = this.delete_collect_cards(this.handCardsValue, cardList.length);

                    this.handCardsValue = GameLogic.sortCardsBySizeDown(this.handCardsValue, this.handCardsValue.length);

                    this.clearHandCards();


                    for (let i: number = 14; i >= 7; i--) {
                        if (this.collect_cards[i].length > 0) {
                            for (let j: number = 0; j < this.collect_cards[i].length; j++) {
                                let comb_cards = this.collect_cards[i][j];
                                comb_list1.push(comb_cards);
                            }
                        }
                    }


                    for (let i: number = 6; i >= 0; i--) {
                        if (this.collect_cards[i].length > 0) {
                            for (let j: number = 0; j < this.collect_cards[i].length; j++) {
                                let comb_cards = this.collect_cards[i][j];
                                comb_list2.push(comb_cards);
                            }
                        }
                    }


                    sameSizeList = GameLogic.getSameCardSizeList(this.handCardsValue);
                    len0 = sameSizeList.length;

                    let combs_cards_lists1: number[][] = [];
                    for (let i: number = 0; i < comb_list1.length; i++) {
                        combs_cards_lists1.push(comb_list1[i]["cards"]);
                    }

                    let combs_cards_lists2: number[][] = [];
                    for (let i: number = 0; i < comb_list2.length; i++) {
                        combs_cards_lists2.push(comb_list2[i]["cards"]);
                    }

                    len1 = comb_list1.length;
                    len2 = comb_list2.length;

                    sameSizeList = combs_cards_lists1.concat(sameSizeList);
                    sameSizeList = sameSizeList.concat(combs_cards_lists2);
                }


                // console.log("sameSizeList--> ",sameSizeList.length);
                this.initHandStartPosX_V(sameSizeList.length);

                let idx: number = 0;
                let tmpIdx: number = 0;
                // console.log("---> ",sameSizeList[0][0]);
                for (let i = 0; i < sameSizeList.length; i++) {
                    const list = sameSizeList[i];
                    let posX = this.getHandCardPosX_V(i);
                    for (let j = list.length - 1; j >= 0; j--) {
                        let valueSize = list[j];
                        // console.log("i----> ", i, valueSize);
                        let card = this.getOneCard()
                        card.node.setSiblingIndex(idx);
                        let posY = this.getHandCardPosY_V(j);
                        card.node.scale = new Vec3(this.handScale, this.handScale, this.handScale);
                        //手牌位置
                        let cardSps = this.getCardsSprite(valueSize);
                        if (cardSps) {
                            card.setValue(valueSize, cardSps);
                        }
                        let moveFunc = function (posX: number, posY: number, tmpIdx: number) {
                            card.node.setPosition(v3(posX, posY));
                            that.setCanTouch(true);
                        }
                        moveFunc(posX, posY, idx);
                        card.setIndex(idx);
                        card.setBottom(j == 0);
                        card.setLastLine(i == sameSizeList.length - 1);

                        if (j == 0 && (i < len1 || i >= sameSizeList.length - len2)) {
                            //   card.showNodeCollect(true);
                            if (i < len1) {
                                let typeName = PokerLogic.comb_type_name[Number(comb_list1[i]["type"])];
                                if (typeName == '六炸') {
                                    card.showBomb(6);
                                }
                                else if (typeName == '五炸') {
                                    card.showBomb(5);
                                }
                                else if (typeName == '同花顺') {
                                    card.showTonghua(true);
                                }
                                else if (typeName == '四炸') {
                                    card.showBomb(4);
                                }
                                else if (typeName == '三带对') {
                                    card.showThreeTwo(true);
                                }
                                else if (typeName == '顺子') {
                                    card.showShunzi(true);
                                }
                                else if (typeName == '三连对') {
                                    card.showliandui(true);
                                }
                                else if (typeName == '天王炸') {
                                    card.showWangza(true);
                                }
                                // card.combTypeLable.string = PokerLogic.comb_type_name[Number(comb_list1[i]["type"])];
                                // card.bgSprite.spriteFrame = card.bgSpriteFrames[1];
                            }

                            if (i >= sameSizeList.length - len2) {
                                let comb_type: number = Number(comb_list2[i - len0 - len1]["type"]);
                                if (this.isOrganize && (comb_type == PokerLogic.TYPE.dan_zhang || comb_type == PokerLogic.TYPE.yi_dui || comb_type == PokerLogic.TYPE.san_zhang)) {
                                    //   card.bgSprite.spriteFrame = null;
                                    //   card.combTypeLable.string = "";
                                } else {
                                    let typeName = PokerLogic.comb_type_name[comb_type];
                                    if (typeName == '六炸') {
                                        card.showBomb(6);
                                    }
                                    else if (typeName == '五炸') {
                                        card.showBomb(5);
                                    }
                                    else if (typeName == '同花顺') {
                                        card.showTonghua(true);
                                    }
                                    else if (typeName == '四炸') {
                                        card.showBomb(4);
                                    }
                                    else if (typeName == '三带对') {
                                        card.showThreeTwo(true);
                                    }
                                    else if (typeName == '顺子') {
                                        card.showShunzi(true);
                                    }
                                    else if (typeName == '三连对') {
                                        card.showliandui(true);
                                    }
                                    else if (typeName == '天王炸') {
                                        card.showWangza(true);
                                    }
                                    //   card.combTypeLable.string = PokerLogic.comb_type_name[comb_type];
                                    //   card.bgSprite.spriteFrame = card.bgSpriteFrames[0];
                                }
                            }
                        } else {
                            //   card.showNodeCollect(false);
                        }

                        idx++;
                        card.setMask(false);
                        this.handCards.push(card);
                    }
                }
            }
        } else if (viewid == GlobalData.viewId.opposite) {
            //出牌动作
            this.initOutStartPosX(tempCards.length, true);
            let pos_Y = this.userHeadPos[viewid].y;
            let pos_X = this.userHeadPos[viewid].x;
            for (let k = 0; k < tempCards.length; k++) {
                let card = this.getOneCard();
                let posX = this.getOutPosX(k, true);
                card.node.setSiblingIndex(k);
                card.node.setScale(0, 0, 0);
                card.node.setPosition(pos_X, pos_Y, 0);
                card.setMask(false);
                let cardSps = this.getCardsSprite(tempCards[k]);
                if (cardSps) {
                    card.setValue(tempCards[k], cardSps);
                    this.outCards[viewid].push(card);
                }
                let moveTime = 0.15;
                tween(card.node)
                    .parallel(
                        tween().to(moveTime, { position: v3(posX, pos_Y - 20, 0) }),
                        tween().to(moveTime, { scale: v3(this.outScaleOther, this.outScaleOther, this.outScaleOther) })
                        // tween().to(moveTime, { scale: v3(this.allSmallCardScale, this.allSmallCardScale, this.allSmallCardScale) })
                    )
                    .call(() => {
                        let cardSps = this.getCardsSprite(card.cardValue, true);
                        if (cardSps) {
                            card.setValue(card.cardValue, cardSps);
                        }
                    })
                    .start();
            }
        }
        else {
            let pos_Y = this.userHeadPos[viewid].y - 60;
            let pos_X = this.userHeadPos[viewid].x;
            let startX = 0;
            if (viewid == 2) {//右边
                startX = pos_X - 160 - (count + 1) * this.outDistanceOther;
            } else {//左边
                startX = pos_X + 160;
            }
            for (let i = 0; i < count; i++) {
                let card = this.getOneCard()
                card.node.setSiblingIndex(i);
                card.node.setScale(0, 0, 0);
                card.node.setPosition(pos_X, pos_Y, 0);
                card.setMask(false);
                startX += this.outDistanceOther;
                let cardSps = this.getCardsSprite(tempCards[i]);
                if (cardSps) {
                    card.setValue(tempCards[i], cardSps);
                    this.outCards[viewid].push(card);
                    let moveTime = 0.15;
                    tween(card.node)
                        .parallel(
                            tween().to(moveTime, { position: v3(startX, pos_Y, 0) }),
                            tween().to(moveTime, { scale: v3(this.outScaleOther, this.outScaleOther, this.outScaleOther) })
                            // tween().to(moveTime, { scale: v3(this.allSmallCardScale, this.allSmallCardScale, this.allSmallCardScale) })
                        )
                        .call(() => {
                            let cardSps = this.getCardsSprite(card.cardValue, true);
                            if (cardSps) {
                                card.setValue(card.cardValue, cardSps);
                            }
                        })
                        .start();
                }
            }
        }


        this.check_tonghua();
    }

    //游戏结束后,显示所有玩家手牌(左右两家,一排最多显示9张)
    private showOtherHandCards(viewid: number, cardList: number[], count: number) {
        let tempCards = cardList;
        if (viewid == GlobalData.viewId.opposite) {
            //出牌动作
            this.initOutStartPosX(tempCards.length, true);
            let pos_Y = this.userHeadPos[viewid].y;
            for (let k = 0; k < tempCards.length; k++) {
                let card = this.getOneCard();
                let posX = this.getOutPosX(k, true);
                card.node.setSiblingIndex(k);
                card.node.setScale(this.outScaleOther, this.outScaleOther, this.outScaleOther);
                card.node.setPosition(posX, pos_Y - 180, 0);
                let cardSps = this.getCardsSprite(tempCards[k]);
                if (cardSps) {
                    card.setValue(tempCards[k], cardSps);
                    this.outCards[viewid].push(card);
                }
            }
        }
        else {
            let pos_Y = this.userHeadPos[viewid].y - 60;
            let pos_X = this.userHeadPos[viewid].x;
            let startX = 0;
            let tmpCnt = count;
            let lineCnt = 9;
            tmpCnt = tmpCnt >= lineCnt ? lineCnt : tmpCnt;
            if (viewid == GlobalData.viewId.down) {//右边
                startX = pos_X - 160 - (tmpCnt + 1) * this.outDistanceOther;
            } else {//左边
                startX = pos_X + 160;
            }
            let tmpStartX = startX;
            for (let i = 0; i < count; i++) {
                let card = this.getOneCard()
                card.node.setSiblingIndex(i);
                card.node.setScale(this.outScaleOther, this.outScaleOther, this.outScaleOther);
                startX += this.outDistanceOther;
                card.node.setPosition(startX, pos_Y, 0);
                if (i == lineCnt - 1 || i == lineCnt * 2 - 1) {
                    startX = tmpStartX;
                    pos_Y -= 60;
                }
                let cardSps = this.getCardsSprite(tempCards[i]);
                if (cardSps) {
                    card.setValue(tempCards[i], cardSps);
                    this.outCards[viewid].push(card);
                }
            }
        }
    }
    //排序
    private sortAllCards() {
        this.handCardsValue = GameLogic.sortCardsBySizeDown(this.handCardsValue, this.handCardsValue.length);
        for (let i in this.handCards) {
            const item = this.handCards[i];
            if (!item) return;
            let cardSps = this.getCardsSprite(this.handCardsValue[i]);
            if (cardSps) {
                item.setValue(this.handCardsValue[i], cardSps);
                //断线情况,发牌时,可能玩家刚好出牌,牌面显示有问题,强制更新
                item.setBack(false);
                //nzp add
                item.setIndex(Number(i));
            }
        }
    }
    //获取牌值和牌色图片
    private getCardsSprite(paramValue: number, isSmall: boolean = false) {
        // console.log("--------牌值", paramValue)
        let color = GameLogic.getCardColor(paramValue);
        let size = GameLogic.getValueStr(paramValue);

        let cardName = "" + color + size;
        let cardSp
        // if (isSmall) {
        //   cardSp = this.cardAtlasSmall.getSpriteFrame(cardName);
        // } else {
        cardSp = this.cardAtlas.getSpriteFrame(cardName);
        // }
        return cardSp;
    }

    //生成一张牌
    private getOneCard() {
        let card: CardItem = null;
        if (this.handCardPool.length == 0) {
            card = instantiate(this.cardItem).getComponent(CardItem);
            this.node.addChild(card.node);
        } else {
            card = this.handCardPool[0];
            this.handCardPool.shift();
        }
        card.node.active = true;
        return card;
    }

    //生成一张小牌
    //   private getOneCardS() {
    //     let card: CardItemS = null;
    //     if (this.handCardPool.length == 0) {
    //       card = instantiate(this.cardItemS).getComponent(CardItemS);
    //       this.node.addChild(card.node);
    //     } else {
    //       card = this.handCardPool[0];
    //       this.handCardPool.shift();
    //     }
    //     card.node.active = true;
    //     return card;
    //   }
    //回收一张牌
    private recycleOneCard(paramCard: CardItem) {
        if (paramCard) {
            paramCard.node.setSiblingIndex(0);
            paramCard.clear()
            paramCard.node.active = false;
            this.handCardPool.push(paramCard);
        }
    }
    //清理玩家出牌
    public clearOutCards(viewid: number) {
        if (this.outCards[viewid] == null) {
            this.outCards[viewid] = [];
            return;
        }

        for (const i in this.outCards[viewid]) {
            const card = this.outCards[viewid][i];
            if (card) {
                this.recycleOneCard(card);
            }
        }
        this.outCards[viewid] = [];
    }
    //清理所有玩家出牌
    private clearAllOutCards() {
        for (let i = 0; i < GlobalData.MAXPLAYER; i++) {
            this.clearOutCards(i);
        }
    }
    //清理手牌
    private clearHandCards() {
        for (let i in this.handCards) {
            const card = this.handCards[i];
            if (card) {
                this.recycleOneCard(card);
            }
        }
        this.handCards = [];
    }
    //是否可点击
    private getCanTouch() {
        return this.canTouch;
    }
    private setCanTouch(type: boolean) {
        this.canTouch = type;
    }
    //*************    监听事件    ************
    private addEventListeners() {
        this.node.on(Node.EventType.TOUCH_START, this.onScreenTouchStart, this);
        this.node.on(Node.EventType.TOUCH_MOVE, this.onScreenTouchMove, this);
        this.node.on(Node.EventType.TOUCH_CANCEL, this.onScreenTouchEnd, this);
        this.node.on(Node.EventType.TOUCH_END, this.onScreenTouchEnd, this);
    }

    private handleCardTouch(card: CardItem) {
        const now = Date.now();
        const interval = now - this.preClickTime;
        this.preClickTime = now;

        if (interval > 50 && interval < 300) {
            // ✅ 双击：选中同一列
            this.isClickTwo = true;
            // this.selectColumnByY(card);
        } else {
            // ✅ 单击：切换该牌选中状态
            this.isClickTwo = false;
            if (GlobalData.cardInfo.cardDir) {
                card.setMask(true);
            } else {
                if (card.isMask()) {
                    card.setMask(false);
                } else if (!card.isDisable()) {
                    card.setMask(true);
                }
            }
        }
    }

    /**
     * 双击：选中同一列（相同 Y 坐标）的所有牌
     */
    private selectColumnByY(targetCard: CardItem) {
        const targetY = targetCard.node.worldPosition.y;

        for (const card of this.handCards) {
            if (Math.abs(card.node.worldPosition.y - targetY) < 2) {
                // 允许 2 像素误差，避免浮点问题
                if (!card.isDisable()) {
                    card.setMask(true);
                }
            } else {
                // 其他列的牌取消选中（可选）
                // card.setMask(false);
            }
        }
    }

    private handleTouchOutside() {
        if (GlobalData.cardInfo.gameType == 97) return;

        this.doHandCardPopDown_V();
        this.isClickTwo = false;

        this.selectCardValue = [];
        this.selectCardIndex = [];
        this.hintIndex = 0;
    }
    private lastClickTime: number = 0;  // 上一次点击时间
    private doubleClickThreshold: number = 300;  // 双击间隔时间阈值（单位：毫秒）
    private selectedCardIndexSet: Set<number> = new Set(); // 在类上维护

    //触摸开始
    private onScreenTouchStart(event: EventTouch) {
        // if (!this.getCanTouch()) {
        //     return;
        // }
        // if (this.handCards.length == 0) {
        //     return;
        // }
        // let touchPos = event.getUILocation();
        // let isTouchCard = false;
        // for (let i = this.handCards.length - 1; i >= 0; i--) {
        //     const card: CardItem = this.handCards[i];
        //     if (card.node && card.node.getComponent(UITransform).getBoundingBoxToWorld().contains(touchPos)) {
        //         // if (GlobalData.cardInfo.gameType == 97 || this.isGong) {
        //         //   if (this.sendCardGuide.indexOf(card.getValue()) == -1) {
        //         //     return;
        //         //   }
        //         // }
        //         if (GlobalData.cardInfo.cardDir) {
        //             card.setMask(true);
        //         } else {
        //             if (card.isMask()) {
        //                 card.setMask(false);
        //             } else {
        //                 if (!card.isDisable()) {
        //                     card.setMask(true);
        //                 }
        //             }
        //         }
        //         isTouchCard = true;
        //         break;
        //     }
        // }
        // //连续点击
        // if (!isTouchCard) {
        //     if (GlobalData.cardInfo.gameType == 97) {
        //         return
        //     }
        //     // this.currentClickTime = Date.now()
        //     // let intervalTime = this.currentClickTime - this.preClickTime;
        //     // if (intervalTime < 300 && intervalTime > 50) {
        //     //     this.isClickTwo = true;
        //     // }
        //     // this.preClickTime = this.currentClickTime;
        //     this.doHandCardPopDown_V();
        //     this.isClickTwo = false
        //     //重置提示索引
        //     this.selectCardValue = [];
        //     this.selectCardIndex = []
        //     this.hintIndex = 0;
        // }

        // if (!this.getCanTouch() || this.handCards.length === 0) return;

        // const touchPos = event.getUILocation();
        // let touchedCard: CardItem | null = null;

        // // 从最上层开始检测
        // for (let i = this.handCards.length - 1; i >= 0; i--) {
        //     const card = this.handCards[i];
        //     if (card.node?.getComponent(UITransform).getBoundingBoxToWorld().contains(touchPos)) {
        //         touchedCard = card;
        //         break;
        //     }
        // }

        // if (touchedCard) {
        //     this.handleCardTouch(touchedCard);
        // } else {
        //     this.handleTouchOutside();
        // }

        if (!this.getCanTouch()) return;
        if (this.handCards.length === 0) return;

        const touchPos = event.getUILocation();
        let isTouchCard = false;

        // 命中参数
        const xTolerance = 12; // 同列命中的水平容差（像素）
        // const yMax = 99999; // 如需限制纵向距离，可打开并在同列命中时附加判断

        const currentTime = Date.now();
        const timeDiff = currentTime - this.lastClickTime;

        if (timeDiff < this.doubleClickThreshold) {
            // 从上往下找最上层命中的那张牌
            for (let i = this.handCards.length - 1; i >= 0; i--) {
                const card: CardItem = this.handCards[i];
                if (!card?.node) continue;

                const trans = card.node.getComponent(UITransform);
                if (!trans) continue;

                const worldBB = trans.getBoundingBoxToWorld();

                // 盒内命中
                const boxHit = worldBB.contains(touchPos);

                // 同列命中（只比较 X 是否落入该牌水平范围，带容差）
                const inSameColumn =
                    touchPos.x >= (worldBB.x - xTolerance) &&
                    touchPos.x <= (worldBB.x + worldBB.width + xTolerance);

                const hit = boxHit || inSameColumn;
                if (!hit) continue;

                // —— 命中第 i 张牌 ——

                // 判断“是否已完整选中了 0..i 段，且 i+1..end 都未选”
                const hitBB = trans.getBoundingBoxToWorld();
                const cx = hitBB.x + hitBB.width * 0.5;
                const cy = hitBB.y + hitBB.height * 0.5;

                // 同列容差（按需调大/调小）：12px 或 牌宽的 25% 取更大
                const columnTolerance = Math.max(12, hitBB.width * 0.25);
                // 如果“上面”的方向与你布局相反，把 jcy >= cy 改为 jcy <= cy
                const sameColumnUpper: number[] = [];

                for (let j = 0; j < this.handCards.length; j++) {
                    const c = this.handCards[j];
                    if (!c?.node) continue;
                    const tr = c.node.getComponent(UITransform);
                    if (!tr) continue;

                    const bb = tr.getBoundingBoxToWorld();
                    const jcx = bb.x + bb.width * 0.5;
                    const jcy = bb.y + bb.height * 0.5;

                    const sameCol = Math.abs(jcx - cx) <= columnTolerance;
                    const isUpperOrSelf = jcy >= cy; // 若不想包含自己，改为 jcy > cy
                    if (sameCol && isUpperOrSelf) sameColumnUpper.push(j);
                }

                // 判断这批是否已全部选中（仅切换这一批，不动其他列）
                let allSelected = sameColumnUpper.length > 0;
                for (const j of sameColumnUpper) {
                    const c = this.handCards[j];
                    if (!c?.isMask?.()) { allSelected = false; break; }
                }

                // 如果已全选 -> 批量取消；否则 -> 批量选中
                if (allSelected) {
                    for (const j of sameColumnUpper) {
                        const c = this.handCards[j];
                        c.setMask(false);
                        this.selectedCardIndexSet.delete(j);
                    }
                } else {
                    // 如果你希望“本次选择会清空旧选择”，取消注释下面两行
                    // for (let k = 0; k < this.handCards.length; k++) this.handCards[k]?.setMask(false);
                    // this.selectedCardIndexSet.clear();

                    for (const j of sameColumnUpper) {
                        const c = this.handCards[j];
                        c.setMask(true);
                        this.selectedCardIndexSet.add(j);
                    }
                }

                isTouchCard = true;
                break;
            }
        }
        else {
            // 单击处理：记录当前点击时间，等待下一次点击
            this.lastClickTime = currentTime;
            for (let i = this.handCards.length - 1; i >= 0; i--) {
                const card: CardItem = this.handCards[i];
                if (card.node && card.node.getComponent(UITransform).getBoundingBoxToWorld().contains(touchPos)) {
                    // if (GlobalData.cardInfo.gameType == 97 || this.isGong) {
                    //   if (this.sendCardGuide.indexOf(card.getValue()) == -1) {
                    //     return;
                    //   }
                    // }
                    if (GlobalData.cardInfo.cardDir) {
                        card.setMask(true);
                    } else {
                        if (card.isMask()) {
                            card.setMask(false);
                        } else {
                            if (!card.isDisable()) {
                                card.setMask(true);
                            }
                        }
                    }
                    isTouchCard = true;
                    break;
                }
            }
        }
        if (!isTouchCard) {
            if (GlobalData.cardInfo.gameType == 97) {
                return
            }
            // this.currentClickTime = Date.now()
            // let intervalTime = this.currentClickTime - this.preClickTime;
            // if (intervalTime < 300 && intervalTime > 50) {
            //     this.isClickTwo = true;
            // }
            // this.preClickTime = this.currentClickTime;
            this.doHandCardPopDown_V();
            this.isClickTwo = false
            //重置提示索引
            this.selectCardValue = [];
            this.selectCardIndex = []
            this.hintIndex = 0;
        }
    }
    //触摸滑动
    private onScreenTouchMove(event: EventTouch) {
        // if (this.btnDownCard.node.active || this.btnUpCard.node.active) {
        //   return;
        // }
        if (!this.getCanTouch()) {
            return;
        }
        let movePos = event.getUILocation();
        let startPos = event.getUIStartLocation();

        let localStartPos = this.worldPos2LocationPos(startPos);
        let localMovePos = this.worldPos2LocationPos(movePos);
        let dis = Vec2.distance(localStartPos, localMovePos);
        if (dis < 6) return;
        // console.log("移动---------------------> ", dis);
        if (GlobalData.cardInfo.cardDir) {
            for (let i = this.handCards.length - 1; i >= 0; i--) {
                const item = this.handCards[i].node;
                if (item != null) {
                    let posX = item.position.x - item.getComponent(UITransform).contentSize.width / 2 * this.handScale;  //左边界点
                    let posY = item.position.y + item.getComponent(UITransform).contentSize.height / 2 * this.handScale; //上边界点
                    let posyYB = item.position.y - item.getComponent(UITransform).contentSize.height / 2 * this.handScale //下边界点
                    if (((posX >= localStartPos.x && posX <= localMovePos.x && startPos.x < movePos.x) //从左向右
                        || (posX <= localStartPos.x && posX >= localMovePos.x && startPos.x > movePos.x)) //从右向左
                        && (posyYB <= localStartPos.y && localStartPos.y <= posY && posyYB <= localMovePos.y && localMovePos.y <= posY)
                    ) {//起点和终点 位置在上边界和下边界之间
                        this.handCards[i].setMask(true);
                    }
                    else {
                        this.handCards[i].setMask(false);
                    }
                }
            }
            //第一张
            for (let i = this.handCards.length - 1; i >= 0; i--) {
                const card = this.handCards[i];
                if (card.node && card.node.getComponent(UITransform).getBoundingBoxToWorld().contains(startPos)) {
                    card.setMask(true);
                    break;
                }
            }
            //最后一张
            for (let i = this.handCards.length - 1; i >= 0; i--) {
                const card = this.handCards[i];
                if (card.node && card.node.getComponent(UITransform).getBoundingBoxToWorld().contains(movePos)) {
                    card.setMask(true);
                    break;
                }
            }
        } else {
            // console.log("value--> ",this.handCards[this.handCards.length - 1].getValue());
            //点击时,也会触发移动

            for (let i = this.handCards.length - 1; i >= 0; i--) {
                const item = this.handCards[i].node;
                if (item != null) {
                    let posXL = item.position.x - item.getComponent(UITransform).contentSize.width / 2 * this.handScale;   //左边界点
                    let posXR = item.position.x + item.getComponent(UITransform).contentSize.width / 2 * this.handScale;  //右边界点
                    let posY = item.position.y + item.getComponent(UITransform).contentSize.height / 2 * this.handScale;  //上边界点
                    let posyYB = item.position.y - item.getComponent(UITransform).contentSize.height / 2 * this.handScale //下边界点

                    let tmpPosXR = this.handCards[i].getLastLine() ? posXR : posXL + this.handDistance_V;  //右边界点
                    let tmpPosY = this.handCards[i].getBottom() ? posyYB : posY - this.cardDistance_V;     //下边界点

                    //向左 向上  当前点纵坐标>下边界点  当前点横坐标>右边界点   牌的上边界点>起始点纵坐标    牌的左边界点<起始点横坐标
                    let leftUp = (localStartPos.x >= localMovePos.x) && (localMovePos.y >= localStartPos.y) && (localMovePos.y >= tmpPosY) && (localMovePos.x <= tmpPosXR) && (posY >= localStartPos.y) && (posXL <= localStartPos.x);
                    //向左向下
                    let leftDown = (localStartPos.x >= localMovePos.x) && (localMovePos.y <= localStartPos.y) && (localMovePos.y <= posY) && (localMovePos.x <= tmpPosXR) && (tmpPosY <= localStartPos.y) && (posXL <= localStartPos.x);
                    //向右向上
                    let rightUp = (localStartPos.x <= localMovePos.x) && (localMovePos.y >= localStartPos.y) && (localMovePos.y >= tmpPosY) && (localMovePos.x >= posXL) && (posY >= localStartPos.y) && (tmpPosXR >= localStartPos.x);
                    //向右向下
                    let rightDown = (localStartPos.x <= localMovePos.x) && (localMovePos.y <= localStartPos.y) && (localMovePos.y <= posY) && (localMovePos.x >= posXL) && (tmpPosY <= localStartPos.y) && (tmpPosXR >= localStartPos.x);

                    if (leftUp || leftDown || rightUp || rightDown) {
                        if (GlobalData.cardInfo.gameType != 97) {
                            this.handCards[i].setMask(true);
                        }
                        // if (GlobalData.cardInfo.gameType == 97) {
                        //   if (this.sendCardGuide.indexOf(this.handCards[i].getValue()) >= 0
                        //     || [34, 17, 33, 49].indexOf(this.handCards[i].getValue()) >= 0
                        //     || [12, 28, 60, 5, 21].indexOf(this.handCards[i].getValue()) >= 0) {
                        //     this.handCards[i].setMask(true);
                        //   }
                        // }
                    } else {
                        if (GlobalData.cardInfo.gameType != 97) {
                            this.handCards[i].setMask(false);
                        }
                        // if (GlobalData.cardInfo.gameType == 97) {
                        //   if (this.sendCardGuide.indexOf(this.handCards[i].getValue()) >= 0
                        //     || [34, 17, 33, 49].indexOf(this.handCards[i].getValue()) >= 0
                        //     || [12, 28, 60, 5, 21].indexOf(this.handCards[i].getValue()) >= 0) {
                        //     this.handCards[i].setMask(false);
                        //   }
                        // }
                    }
                }
            }
            //第一张
            for (let i = this.handCards.length - 1; i >= 0; i--) {
                const card = this.handCards[i];
                if (card.node && card.node.getComponent(UITransform).getBoundingBoxToWorld().contains(startPos)) {
                    //   if (GlobalData.cardInfo.gameType == 97) {
                    //     if (this.sendCardGuide.indexOf(card.getValue()) >= 0) {
                    //       card.setMask(true);
                    //     }
                    //   } else {
                    card.setMask(true);
                    //   }
                    // card.setMask(true);
                    break;
                }
            }
            //最后一张
            for (let i = this.handCards.length - 1; i >= 0; i--) {
                const card = this.handCards[i];
                if (card.node && card.node.getComponent(UITransform).getBoundingBoxToWorld().contains(movePos)) {
                    //   if (GlobalData.cardInfo.gameType == 97) {
                    //     if (this.sendCardGuide.indexOf(card.getValue()) >= 0) {
                    //       card.setMask(true);
                    //     }
                    //   } else {
                    card.setMask(true);
                    //   }
                    // card.setMask(true);
                    break;
                }
            }

            if (this.cur_select_cards.length > 0 && GlobalData.cardInfo.gameType != 97) {
                let new_select_cards: CardItem[] = [];
                for (const key in this.handCards) {
                    const item = this.handCards[key];
                    if (item && item.isMask()) {
                        new_select_cards.push(item);
                    }
                }

                let overlap_cards: CardItem[] = [];
                for (let i: number = 0; i < new_select_cards.length; i++) {
                    for (let j: number = 0; j < this.cur_select_cards.length; j++) {
                        if (new_select_cards[i] === this.cur_select_cards[j]) {
                            overlap_cards.push(this.cur_select_cards[j]);
                        }
                    }
                }


                new_select_cards = new_select_cards.filter((v, ii, array) => {
                    let is_exist: boolean = false;
                    for (let i: number = 0; i < overlap_cards.length; i++) {
                        if (overlap_cards[i] === v) {
                            is_exist = true;
                            break;
                        }
                    }
                    return is_exist == false;
                });


                for (let i: number = 0; i < this.cur_select_cards.length; i++) {
                    let is_exist: boolean = false;
                    for (let j: number = 0; j < overlap_cards.length; j++) {
                        if (overlap_cards[j] === this.cur_select_cards[i]) {
                            is_exist = true;
                            break;
                        }
                    }
                    if (!is_exist) {
                        new_select_cards.push(this.cur_select_cards[i]);
                    }
                }


                for (let i: number = 0; i < new_select_cards.length; i++) {
                    new_select_cards[i].setMask(true);
                }

                for (let i: number = 0; i < overlap_cards.length; i++) {
                    overlap_cards[i].setMask(false);
                }
            }

            // for (let i = this.cur_select_cards.length - 1; i >= 0; i--) {
            //     this.cur_select_cards[i].setMask(true);
            // }
        }
    }
    //触摸结束
    private onScreenTouchEnd(event: EventTouch) {
        if (!this.getCanTouch()) {
            return;
        }
        if (this.handCards.length == 0) {
            return;
        }

        let selectCards: CardItem[] = [];
        if (GlobalData.cardInfo.cardDir) {
            for (let i = 0; i < this.handCards.length; i++) {
                const item = this.handCards[i];
                if (item && item.isMask()) {
                    selectCards.push(item);
                    item.setMask(false);
                }
            }
            this.doSelectCards(selectCards);
            //双击重置,不出牌
            if (this.isClickTwo) {
                this.checkClickTwo();
            } else {
                this.updateSelectedCards();
            }
        } else {
            //双击重置,不出牌
            if (this.isClickTwo) {
                this.checkClickTwo_V();
            } else {
                this.updateSelectedCards_V();
            }
        }

        this.cur_select_cards = [];
        for (const key in this.handCards) {
            const item = this.handCards[key];
            if (item && item.isMask()) {
                this.cur_select_cards.push(item);
            }
        }

        if (this.collect_cards.length > 0) {
            // let card_datas:number[] = [];
            // for (let i = this.handCards.length - 1; i >= 0; i--) {
            //     if (this.handCards[i].isMask()) {
            //         card_datas.push(this.handCards[i].cardValue);
            //     }
            // }

            // let comb_list:object[] = [];
            // if (card_datas.length > 0) {
            //     comb_list = PokerLogic.get_card_type(card_datas);
            // }

            // if (comb_list.length > 0) {
            //     this.btnLabel.string = "理牌";
            // } else {
            let exist_hand_idxs: number[] = [];
            for (let i: number = 0; i < this.handCards.length; i++) {
                if (!this.handCards[i].isMask()) {
                    exist_hand_idxs.push(this.handCards[i].getIndex());
                }
            }

            //let is_select_collect_card:boolean = false;

            let count_select: number = 0;

            let idx: number = 0;
            for (let i: number = 14; i >= 7; i--) {
                if (this.collect_cards[i].length > 0) {
                    for (let j: number = 0; j < this.collect_cards[i].length; j++) {
                        let comb_cards: number[] = this.collect_cards[i][j]["cards"];
                        let len = comb_cards.length;
                        let start_idx = idx;
                        for (let k: number = 0; k < len; k++) {
                            if (exist_hand_idxs.indexOf(start_idx + k) == -1) {
                                //this.collect_cards[i][j] = [];
                                // is_select_collect_card = true;
                                // break;
                                count_select++;
                            }
                        }
                        // if (is_select_collect_card) {
                        //     break;
                        // }

                        idx = idx + len;
                    }
                }
                // if (is_select_collect_card) {
                //     break;
                // }
            }

            //if (!is_select_collect_card) {
            idx = this.handCards.length - 1;
            for (let i: number = 0; i <= 6; i++) {
                if (this.collect_cards[i].length > 0) {
                    for (let j: number = 0; j < this.collect_cards[i].length; j++) {
                        let comb_cards: number[] = this.collect_cards[i][j]["cards"];
                        let len = comb_cards.length;
                        let start_idx = idx;
                        for (let k: number = len - 1; k >= 0; k--) {
                            if (exist_hand_idxs.indexOf(start_idx - k) == -1) {
                                // is_select_collect_card = true;
                                // break;
                                count_select++
                            }
                        }
                        // if (is_select_collect_card) {
                        //     break;
                        // }

                        idx = idx - len;
                    }
                }
                // if (is_select_collect_card) {
                //     break;
                // }
            }
            //}

            //console.log("claudis=======count_select========exist_hand_idxs=========>",{count_select:count_select,idx_count:this.cur_select_cards.length})

            if (count_select == this.cur_select_cards.length) {
                this.btnLabel = "恢复";
                this.picHuifuDir.node.active = true;
                this.picCardDir.node.active = false;
            } else {
                if (this.cur_select_cards.length > 0) {
                    this.btnLabel = "理牌";
                    this.picHuifuDir.node.active = false;
                    this.picCardDir.node.active = true;
                }
            }
            // }
        }

    }
    //更新所有选中的牌
    private updateSelectedCards() {
        //先清空
        this.selectCardValue = [];
        this.selectCardIndex = [];
        for (const key in this.handCards) {
            const item = this.handCards[key];
            if (item && item.isSelect()) {
                this.selectCardValue.push(item.getValue())
                this.selectCardIndex.push(item.getIndex());
            }
        }
    }
    //更新所有选中的牌
    private updateSelectedCards_V() {
        //先清空
        this.selectCardValue = [];
        this.selectCardIndex = [];
        for (const key in this.handCards) {
            const item = this.handCards[key];
            if (item && item.isMask()) {
                this.selectCardValue.push(item.getValue());
                this.selectCardIndex.push(item.getIndex());
            }
        }
        // console.log("this.selectCardValue---> ", this.selectCardValue);
        // console.log("this.selectCardIndex---> ", this.selectCardIndex);
    }
    //连续点击两次 双击
    private checkClickTwo() {
        if (this.isClickTwo) {
            this.doHandCardPopDown();
            this.isClickTwo = false
            //重置提示索引
            this.selectCardValue = [];
            this.selectCardIndex = [];
            this.hintIndex = 0;
        }
    }
    private checkClickTwo_V() {
        if (this.isClickTwo) {
            this.doHandCardPopDown_V();
            this.isClickTwo = false
            //重置提示索引
            this.selectCardValue = [];
            this.selectCardIndex = [];
            this.hintIndex = 0;
        }
    }
    //当前选中的牌弹起
    private doSelectCards(selectCards: CardItem[]) {
        for (let i = 0; i < selectCards.length; i++) {
            const item = selectCards[i];
            let pos = item.node.getPosition();
            if (item.isSelect()) {
                item.setSelect(false);
                if (pos.y >= this.cardPosY + this.cardPopUpHight - 5) {
                    item.node.setPosition(pos.x, pos.y - this.cardPopUpHight);
                }
            } else {
                item.setSelect(true);
                item.node.setPosition(pos.x, pos.y + this.cardPopUpHight);
            }
        }
    }
    //放下选中的牌
    private doHandCardPopDown() {
        for (let i = 0; i < this.handCards.length; i++) {
            const item = this.handCards[i];
            if (item.isSelect()) {
                item.setSelect(false);
                let pos = item.node.getPosition();
                if (pos.y >= this.cardPosY + this.cardPopUpHight - 5) {
                    item.node.setPosition(pos.x, pos.y - this.cardPopUpHight);
                }
            }
        }
        this.selectCardValue = [];
        this.selectCardIndex = [];
    }
    //放下选中的牌
    private doHandCardPopDown_V() {
        for (let i = 0; i < this.handCards.length; i++) {
            const item = this.handCards[i];
            if (item.isMask()) {
                item.setMask(false);
            }
        }
        this.selectCardValue = [];
        this.selectCardIndex = [];
    }
    //弹起提示的牌
    showChooseCard(value: number[]) {
        let copeValue: number[] = utils.deepCopy(value);
        if (value == null || value.length == 0) return;
        if (this.handCards.length != 0) {
            this.selectCardIndex = [];
            let posY = this.getHandCardPosY();
            for (const i in this.handCards) {
                const item = this.handCards[i];
                if (item) {
                    if (item.isSelect()) {
                        let isFind = false;
                        for (let j in copeValue) {
                            if (copeValue[j] && copeValue[j] == item.getValue()) {
                                copeValue.splice(Number(j), 1);
                                isFind = true;
                                break;
                            }
                        }
                        if (!isFind) {
                            item.node.setPosition(item.node.position.x, posY);
                            item.setSelect(false);
                            this.selectCardIndex.splice(this.selectCardIndex.indexOf(item.getIndex()), 1);
                        }
                    } else {
                        for (let j in copeValue) {
                            if (copeValue[j] && copeValue[j] == item.getValue() && this.selectCardIndex.indexOf(item.getIndex()) == -1) {
                                item.node.setPosition(item.node.position.x, posY + this.cardPopUpHight);
                                item.setSelect(true);
                                this.selectCardIndex.push(item.getIndex());
                                copeValue.splice(Number(j), 1);
                                break;
                            }
                        }
                        //7788 7  牌值牌色一样
                        if (copeValue.length == 0) {
                            break;
                        }
                    }
                }
            }
        }
    }
    //弹起提示的牌
    showChooseCard_V(value: number[]) {
        let copeValue: number[] = utils.deepCopy(value);
        if (value == null || value.length == 0) return;
        if (this.handCards.length != 0) {
            this.selectCardIndex = [];
            for (const i in this.handCards) {
                const item = this.handCards[i];
                if (item) {
                    if (item.isMask()) {
                        let isFind = false;
                        for (let j in copeValue) {
                            if (copeValue[j] && copeValue[j] == item.getValue()) {
                                isFind = true;
                                copeValue.splice(Number(j), 1);
                                break;
                            }
                        }
                        if (!isFind) {
                            this.selectCardIndex.splice(this.selectCardIndex.indexOf(item.getIndex()), 1);
                            item.setMask(false);
                        }
                    } else {
                        for (let j in copeValue) {
                            if (copeValue[j] && copeValue[j] == item.getValue() && this.selectCardIndex.indexOf(item.getIndex()) == -1) {
                                this.selectCardIndex.push(item.getIndex());
                                item.setMask(true);
                                copeValue.splice(Number(j), 1);
                                break;
                            }
                        }
                        //7788 7  牌值牌色一样
                        if (copeValue.length == 0) {
                            // console.log("this.selectCardIndex  ", this.selectCardIndex);
                            break;
                        }
                    }
                }
            }
        }
    }
    //anchor(0,0)--> anchor(0.5,0.5)
    private worldPos2LocationPos(paramPos: Vec2) {
        let size = utils.getSceneSize();
        return new Vec2(paramPos.x - size.width / 2 - this.node.position.x, paramPos.y - size.height / 2 - this.node.position.y);
    }
    //下表不同,手牌高度不同
    private getHandCardPosY() {
        return this.cardsPosY;
    }
    private getHandCardPosY_V(num: number) {
        return this.cardsPosY + (num) * this.cardDistance_V;
    }
    private getHandCardPosX(num: number) {
        return this.startHandPosX + num * this.handDistance;
    }
    private getHandCardPosX_V(num: number) {
        return this.startHandPosX_V + num * this.handDistance_V;
    }
    private initHandStartPosX_V(count: number) {
        let halfPos = (this.handCardsWidth + (count - 1) * this.handDistance_V) * 0.5;
        this.startHandPosX_V = -halfPos + this.handCardsWidth * 0.5;
    }
    //每行手牌初始位置
    private initHandStartPosX() {
        this.initStartPosX(this.handCardsValue.length);
    }
    //手牌初始位置
    private initStartPosX(count: number) {
        let halfPos = (this.handCardsWidth + (count - 1) * this.handDistance) * 0.5;
        this.startHandPosX = -halfPos + this.handCardsWidth * 0.5;
    }
    //自己出牌初始位置
    private initOutStartPosX(count: number, isOppsite: boolean = false) {
        if (isOppsite) {
            let halfPos = (this.outCardsWidthOppsite + (count - 1) * this.outDistanceOther) * 0.5;
            this.startOutPosXOppiste = -halfPos + this.outCardsWidthOppsite * 0.5;
        } else {
            let halfPos = (this.outCardsWidth + (count - 1) * this.outDistanceSelf) * 0.5;
            this.startOutPosX = -halfPos + this.outCardsWidth * 0.5;
        }
    }
    private getOutPosX(num: number, isOppsite: boolean = false) {
        if (isOppsite) {
            return this.startOutPosXOppiste + num * this.outDistanceOther;
        } else {
            return this.startOutPosX + num * this.outDistanceSelf;
        }
    }
    //不出
    onBtnNoOut() {
        // if (this.tipBtnType == 0 || (this.tipBtnType == 1 && GlobalData.cardInfo.gameType == 97)) {
        //   return;
        // };
        // if (GlobalData.cardInfo.gameType == 97) {
        //   this.tipBtnType = 0;
        // }
        SoundManager.playClick();
        this.hideAllTime();
        // if (GlobalData.cardInfo.gameType == 97) {
        //   // this.doHandCardPopDown_V();
        //   this.drawMaskOut([], {});
        //   this.setCanTouch(false);
        //   if (this.newbieCardTipNode && this.newbieCardTipNode.node) {
        //     this.newbieCardTipNode.node.destroy();
        //   }
        //   if (this.newbieButtonTipNode && this.newbieButtonTipNode.node) {
        //     this.newbieButtonTipNode.node.destroy();
        //   }
        //   this.maskNode.active = false;
        //   utils.send(GlobalData.localEvent.continuePCnewbieRoom, { type: 3 });
        //   return;
        // }
        // if (GlobalData.cardInfo.cardDir) {
        //   this.doHandCardPopDown();
        // } else {
        this.doHandCardPopDown_V();
        // }
        this.showHandleBtn();
        let sendBuffer = PbManager.instance.sendMsg(GlobalData.C2S_Event.NoOutCards, null);
        GameSocket.send(sendBuffer);
    }
    //提示
    onBtnHint() {
        SoundManager.playClick();
        // if (GlobalData.cardInfo.cardDir) {
        //   this.doHandCardPopDown();
        // } else {
        this.doHandCardPopDown_V();
        // }
        this.selectCardValue = [];
        if (this.hintCards.length == 0) {
            UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: "没有大过的牌" });
            return;
        }
        this.selectCardValue = this.hintCards[this.hintIndex];
        // if (GlobalData.cardInfo.cardDir) {
        //   this.showChooseCard(this.selectCardValue);
        // } else {
        this.showChooseCard_V(this.selectCardValue);
        // }
        this.hintIndex++;
        if (this.hintIndex == this.hintCards.length) {
            this.hintIndex = 0;
        }
    }
    //出牌
    onBtnOut() {
        // console.log('this.tipBtnType :>> ', this.tipBtnType);
        console.log('GlobalData.cardInfo.gameType :>> ', GlobalData.cardInfo.gameType);
        // if (this.tipBtnType == 0 || (this.tipBtnType == 2 && GlobalData.cardInfo.gameType == 97)) {
        //   return;
        // };
        // if (GlobalData.cardInfo.gameType == 97) {
        //   this.tipBtnType = 0;
        // }
        SoundManager.playClick();
        // setTimeout(() => {
        //   this.doHandCardPopDown_V();
        // }, 100);
        // console.log("this.selectCardValue.length--> ", this.selectCardValue.length);
        if (this.selectCardValue.length > 0) {
            //   if (GlobalData.cardInfo.gameType == 97) {
            //     this.maskNode.active = false;
            //     this.drawMaskOut([], {});
            //     this.setCanTouch(false);
            //     if (this.newbieCardTipNode && this.newbieCardTipNode.node) {
            //       this.newbieCardTipNode.node.destroy();
            //     }
            //     if (this.newbieButtonTipNode && this.newbieButtonTipNode.node) {
            //       this.newbieButtonTipNode.node.destroy();
            //     }
            //     utils.send(GlobalData.localEvent.continuePCnewbieRoom, { type: 3 });
            //     return;
            //   }
            let _cards = GameLogic.convertCardListC2S(this.selectCardValue);
            console.log("cards---> ", _cards);
            let baseInfo = GameMsg.UserSendCard.create({ cards: utils.toJson(_cards) });
            let baseBuffer = GameMsg.UserSendCard.encode(baseInfo).finish();
            let sendBuffer = PbManager.instance.sendMsg(GlobalData.C2S_Event.OutCards, baseBuffer);
            GameSocket.send(sendBuffer);
        }
        else {
            UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: "请选择要出的牌" });
        }

        this.cur_select_cards = [];
        //测试
        // this.onEventOutCards({ viewid: 1, cards: this.selectCardValue, cardCount: this.selectCardValue.length, isAuto: false });
        // //测试
        // let testList = [0x21, 0x21, 0x01, 0x01, 0x11, 0x11, 0x31, 0x31];
        // this.onEventOutCards({ viewid: 1, cards: testList, cardCount: testList.length, isAuto: true });
        // this.showBtnLayer(false);
    }
    //回贡
    onBtnDownCard() {
        SoundManager.playClick();
        if (this.selectCardValue.length == 0) {
            UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: "请选择还贡的牌" });
            return;
        }
        if (this.selectCardValue.length > 1) {
            UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: "只能选择一张牌还贡" });
            return;
        }
        if (this.selectCardValue.length == 1) {
            let cards = GameLogic.convertCardListC2S(this.selectCardValue)[0];
            let baseInfo = GameMsg.Gong.create({ card: cards });
            let baseBuffer = GameMsg.Gong.encode(baseInfo).finish();
            let sendBuffer = PbManager.instance.sendMsg(GlobalData.C2S_Event.RebackCard, baseBuffer);
            GameSocket.send(sendBuffer);
            //   if (GlobalData.cardInfo.gameType == 98) {
            //     let sendBuffer = PbManager.instance.sendMsg(GlobalData.C2S_Event.newbieContinueGame, null);
            //     GameSocket.send(sendBuffer);
            //   }
            this.isGong = false;
        }
    }
    //横排/纵排
    onBtnCardDir() {
        SoundManager.playClick();
        if (this.handCardsValue.length <= 0) {
            UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: "无手牌,不能切换!" });
            return;
        }

        // let des = GlobalData.cardInfo.cardDir ? "确定切换为纵排!" : "确定切换为横排!";
        // UIManager.Instace.showUI({
        //     path: UIConfig.MessageBoxCommonKey,
        //     data: {
        //         des: des,
        //         okFunc: () => {
        //             GlobalData.cardInfo.cardDir = !GlobalData.cardInfo.cardDir;
        //             this.showCardDir(true);
        //             this.init(false);
        //             this.setHandCards(this.handCardsValue);
        //         },
        //         cancleFunc: () => {

        //         }
        //     }
        // });

        GlobalData.cardInfo.cardDir = !GlobalData.cardInfo.cardDir;
        this.showCardDir(true);
        this.init(false);
        if (GlobalData.cardInfo.cardDir) {
            let all_datas: number[] = [];
            for (let i = this.handCards.length - 1; i >= 0; i--) {
                all_datas.push(this.handCards[i].cardValue);
            }

            this.setHandCards(all_datas);

        } else {
            let copy_values = utils.deepCopy(this.handCardsValue);

            let collect_all_cards: number[] = [];
            let i: number;
            for (i = 14; i >= 1; i--) {
                if (this.collect_cards[i].length > 0) {
                    let j: number;
                    for (j = 0; j < this.collect_cards[i].length; j++) {
                        let comb_cards: number[] = this.collect_cards[i][j]["cards"];
                        let k: number;
                        for (k = 0; k < comb_cards.length; k++) {
                            collect_all_cards.push(comb_cards[k]);
                        }
                    }
                }
            }

            collect_all_cards.forEach((v, ii, array) => {
                let i: number;
                for (i = 0; i < copy_values.length; i++) {
                    if (copy_values[i] == v) {
                        copy_values[i] = -1;
                        break;
                    }
                }
            });


            copy_values = copy_values.filter((v, ii, array) => {
                return v != -1;
            });

            this.setHandCards(copy_values);
        }

        // this.btnCardCollect.node.active = !GlobalData.cardInfo.cardDir
    }

    onBtnCardCollect() {
        if (!GlobalData.cardInfo.cardDir) {

            if (this.btnLabel === "恢复") {
                let card_datas: number[] = [];
                let all_datas: number[] = [];
                for (let i = this.handCards.length - 1; i >= 0; i--) {
                    if (this.handCards[i].isMask()) {
                        card_datas.push(this.handCards[i].cardValue);
                    }
                    all_datas.push(this.handCards[i].cardValue);
                }


                if (card_datas.length == 0 || this.isOrganize) {
                    this.collect_cards = [];
                    for (let i: number = 0; i < 15; i++) {
                        this.collect_cards.push([]);
                    }

                    let all_datas: number[] = [];
                    for (let i = this.handCards.length - 1; i >= 0; i--) {
                        all_datas.push(this.handCards[i].cardValue);
                    }

                    this.init(false);
                    this.setHandCards(all_datas);

                    this.btnLabel = "理牌";
                    this.isOrganize = false;
                    this.picCardDir.node.active = true;
                    this.picHuifuDir.node.active = false;
                } else {
                    this.delete_collect_cards(utils.deepCopy(all_datas), 0, true);

                    let collect_all_cards: number[] = [];
                    if (this.collect_cards.length > 0) {
                        for (let i: number = 14; i >= 0; i--) {
                            if (this.collect_cards[i].length > 0) {
                                for (let j: number = 0; j < this.collect_cards[i].length; j++) {
                                    let comb_cards: number[] = this.collect_cards[i][j]["cards"];
                                    for (let k: number = 0; k < comb_cards.length; k++) {
                                        collect_all_cards.push(comb_cards[k]);
                                    }
                                }
                            }
                        }
                    }

                    collect_all_cards.forEach((v, ii, array) => {
                        for (let i: number = 0; i < all_datas.length; i++) {
                            if (all_datas[i] == v) {
                                all_datas[i] = -1;
                                break;
                            }
                        }
                    });


                    all_datas = all_datas.filter((v, ii, array) => {
                        return v != -1;
                    });

                    this.init(false);
                    this.setHandCards(all_datas);

                    let exist_collects: boolean = false;
                    if (this.collect_cards.length > 0) {
                        for (let i: number = 14; i >= 0; i--) {
                            if (this.collect_cards[i].length > 0) {
                                exist_collects = true;
                                break;
                            }
                        }
                    }

                    if (exist_collects) {
                        this.btnLabel = "恢复";
                        this.picCardDir.node.active = false;
                        this.picHuifuDir.node.active = true;
                    } else {
                        this.btnLabel = "理牌";
                        this.picCardDir.node.active = true;
                        this.picHuifuDir.node.active = false;
                    }
                }

            } else {
                SoundManager.playClick();
                let card_datas: number[] = [];
                let all_datas: number[] = [];
                for (let i = this.handCards.length - 1; i >= 0; i--) {
                    if (this.handCards[i].isMask()) {
                        card_datas.push(this.handCards[i].cardValue);
                    }
                    all_datas.push(this.handCards[i].cardValue);
                }

                // console.log('card_datas :>> ', card_datas);

                if (card_datas.length > 0) {
                    let comb_list: object[] = PokerLogic.get_card_type(card_datas);
                    if (comb_list.length > 0) {
                        this.delete_collect_cards(utils.deepCopy(all_datas), 0, true);
                        let idx: number = comb_list[comb_list.length - 1]["type"];
                        this.collect_cards[idx].push(comb_list[comb_list.length - 1]);

                        PokerLogic.sort_combs(this.collect_cards[idx]);
                    } else {
                        return UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: "牌型错误！" });
                    }
                }
                else {
                    // if(UIManager.Instace.getUI(UIConfig.MessageHintKey) == null) {
                    //     console.log('我报错啦！！！！');
                    //     return
                    // }
                    UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: "请选择要理牌的牌组" });
                    return;
                }


                let collect_all_cards: number[] = [];
                if (this.collect_cards.length > 0) {
                    for (let i: number = 14; i >= 0; i--) {
                        if (this.collect_cards[i].length > 0) {
                            for (let j: number = 0; j < this.collect_cards[i].length; j++) {
                                let comb_cards: number[] = this.collect_cards[i][j]["cards"];
                                for (let k: number = 0; k < comb_cards.length; k++) {
                                    collect_all_cards.push(comb_cards[k]);
                                }
                            }
                        }
                    }
                }

                collect_all_cards.forEach((v, ii, array) => {
                    for (let i: number = 0; i < all_datas.length; i++) {
                        if (all_datas[i] == v) {
                            all_datas[i] = -1;
                            break;
                        }
                    }
                });


                all_datas = all_datas.filter((v, ii, array) => {
                    return v != -1;
                });

                this.init(false);
                this.setHandCards(all_datas);

                this.btnLabel = "恢复";
                this.picCardDir.node.active = false;
                this.picHuifuDir.node.active = true;
            }
        }

        this.cur_select_cards = [];
    }

    delete_collect_cards(card_datas: number[], out_count: number, is_mask: boolean = false) {
        if (this.collect_cards.length == 0) {
            return card_datas;
        }
        card_datas = [];
        let exist_hand_idxs: number[] = [];
        for (let i: number = 0; i < this.handCards.length; i++) {
            if (is_mask) {
                if (!this.handCards[i].isMask()) {
                    exist_hand_idxs.push(this.handCards[i].getIndex());
                }
            } else {
                exist_hand_idxs.push(this.handCards[i].getIndex());
            }

            card_datas.push(this.handCards[i].getValue());
        }

        //console.log("claudis----------this.collect_cards--1-->",this.collect_cards);
        //console.log("claudis--------exist_hand_idxs----------->",exist_hand_idxs);


        let idx: number = this.handCards.length + out_count - 1;

        //console.log("claudis---------------idx--------->",idx);

        for (let i: number = 0; i <= 6; i++) {
            if (this.collect_cards[i].length > 0) {
                for (let j: number = this.collect_cards[i].length - 1; j >= 0; j--) {
                    let comb_cards: number[] = this.collect_cards[i][j]["cards"];
                    let len = comb_cards.length;
                    let start_idx = idx;
                    for (let k: number = 0; k < len; k++) {
                        if (exist_hand_idxs.indexOf(start_idx - k) == -1) {
                            this.collect_cards[i][j] = [];
                            //console.log("claudis-----------小牌型删除--------->",{a:i,b:j,len:this.collect_cards[i].length});
                            break;
                        }
                    }

                    idx = idx - len;
                }
            }
        }


        idx = 0;
        for (let i: number = 14; i >= 7; i--) {
            if (this.collect_cards[i].length > 0) {
                for (let j: number = 0; j < this.collect_cards[i].length; j++) {
                    let comb_cards: number[] = this.collect_cards[i][j]["cards"];
                    let len = comb_cards.length;
                    let start_idx = idx;
                    for (let k: number = 0; k < len; k++) {
                        if (exist_hand_idxs.indexOf(start_idx + k) == -1) {
                            this.collect_cards[i][j] = [];
                            //console.log("claudis-----------大牌型删除--------->",{a:i,b:j});
                            break;
                        }
                    }

                    idx = idx + len;
                }
            }
        }

        for (let i: number = 14; i >= 0; i--) {
            if (this.collect_cards[i].length > 0) {
                this.collect_cards[i] = this.collect_cards[i].filter((item, index, array) => {
                    return item["cards"] !== undefined;
                });
            }
        }

        //console.log("claudis----------this.collect_cards--2-->",this.collect_cards);

        let collect_all_cards: number[] = [];
        let i: number;
        for (i = 14; i >= 0; i--) {
            if (this.collect_cards[i].length > 0) {
                let j: number;
                for (j = 0; j < this.collect_cards[i].length; j++) {
                    let comb_cards: number[] = this.collect_cards[i][j]["cards"];
                    let k: number;
                    for (k = 0; k < comb_cards.length; k++) {
                        collect_all_cards.push(comb_cards[k]);
                    }
                }
            }
        }

        collect_all_cards.forEach((v, ii, array) => {
            let i: number;
            for (i = 0; i < card_datas.length; i++) {
                if (card_datas[i] == v) {
                    card_datas[i] = -1;
                    break;
                }
            }
        });


        card_datas = card_datas.filter((v, ii, array) => {
            return v != -1;
        });

        //console.log("claudis----------card_datas---->",card_datas);

        return card_datas
    }


    ////////////////头像////////////////
    setUserPosition(headPos: Vec3[]) {
        this.userHeadPos = headPos;
    }
    //倒计时
    private showTime(viewId: number, leftTime: number, updatePos: boolean = false) {
        if (GlobalData.viewId.up < 0 || viewId > GlobalData.viewId.opposite) {
            console.error("view id error");
            return;
        }
        this.hideAllTime();
        if (leftTime <= 0) {
            return;
        }
        this.updateBtnLayerPos(viewId, updatePos);
        this.gameTimers[viewId].node.active = true;
        this.gameTimers[viewId].runTime(leftTime);
        this.gameTimers[viewId].setFunc(() => {

        });
    }
    //隐藏所有倒计时
    private hideAllTime() {
        for (let i = 0; i < this.gameTimers.length; i++) {
            this.gameTimers[i].hide();
        }
    }
    //更新自己倒计时位置
    private updateBtnLayerPos(viewId: number, updatePos: boolean) {
        if (viewId == GlobalData.viewId.self) {
            //贡牌倒计时和贡牌重叠了,贡牌时动态调整位置
            let pos = this.btnLayer.getPosition();
            if (updatePos) {
                this.btnLayer.setPosition(pos.x, 130);
            } else {
                this.btnLayer.setPosition(pos.x, 50);
            }
        }
    }
    //隐藏所有动画
    private hideAllCardTypeAction() {
        for (let i = 0; i < this.cardActions.length; i++) {
            const elements = this.cardActions[i];
            for (let j = 0; j < elements.node.children.length; j++) {
                const e = elements.node.children[j];
                if (e.getComponent(sp.Skeleton)) {
                    e.active = false;
                    e.getComponent(sp.Skeleton).loop = false;
                }
            }
            elements.node.active = false;
        }
    }
    //木板,钢板等动画
    private showCardTypeActionByViewId(data: { viewId: number, cardType: number, cardNum: number }) {
        if (data.cardType <= GameDefine.KIND_CARDS_2) {
            return;
        }
        this.cardActions[data.viewId].node.active = true;
        this.cardActions[data.viewId].playAction(data);
    }
    //不出提示
    private showNoOut(viewId: number, type: boolean) {
        if (this.nodeTipNoOut[viewId].active != type) {
            this.nodeTipNoOut[viewId].active = type;
        }
    }
    //隐藏所有不出提示
    private hideAllNoOut() {
        for (let i = 0; i < this.nodeTipNoOut.length; i++) {
            const e = this.nodeTipNoOut[i];
            e.active = false;
        }
    }
    ////////////////出牌,提示,不出////////////////
    private showHandleBtn(isOut: boolean = false, isHint: boolean = false, isNoOut: boolean = false) {
        this.btnOut.node.active = isOut;
        this.btnHint.node.active = isHint;
        this.btnNoOut.node.active = isNoOut;

        this.btnDownCard.node.active = false;
        // this.btnUpCard.node.active = false;
    }
    /**
     * 上贡,回贡
     */
    private showUpDownCardBtn(isDown: boolean = false, isUp: boolean = false) {
        this.btnOut.node.active = false;
        this.btnHint.node.active = false;
        this.btnNoOut.node.active = false;

        this.btnDownCard.node.active = isDown;
        // this.btnUpCard.node.active = isUp;
    }
    private showBtnLayer(show: boolean) {
        this.btnLayer.active = show;
        if (!show) {
            this.showHandleBtn();
        }

        if (show == false) {
            //   this.btnAiTips.node.active = false;
            //   this.btnCloseAiTips.node.active = false;
            //   this.layoutBtns.node.active = false;
            //   this.noSelectDesc.active = false;
            for (let i = 0; i < 2; i++) {
                // this.btnHouXuans[i].node.active = false;
            }
        }
    }
    private showCardDir(show: boolean) {
        // this.picCardDir.node.active = show;
        // if (show) {
        //     this.picCardDir.spriteFrame = this.spCardDirs[Number(GlobalData.cardInfo.cardDir)];
        // }
    }
    private delayShowCardDir() {
        // tween(this.picCardDir.node)
        //     .delay(2)
        //     .call(() => {
        //         this.showCardDir(true);
        //     })
        //     .start();
    }
    /////////////////////////////////////////////////////////////////////////
    ///////通信相关
    /////////////////////////////////////////////////////////////////////////

    //手牌
    onStartHandCard(data: GameMsg.Start) {
        // if (GlobalData.cardInfo.roomModeType == 6) {
        //   UIManager.Instace.hideUI(UIConfig.MatchCutdownBoxKey);
        // }
        // this.nodeModeSelect.active = false;
        GlobalData.cardInfo.levelCard = GlobalData.keyLevelCards[data.level];
        // console.log("onStartHandCard----> ", data);
        GlobalData.cardInfo.time = data.time;
        GlobalData.cardInfo.num = data.num;
        GlobalData.cardInfo.maxnum = data.maxnum;
        GlobalData.cardInfo.isMy = data.isMy == 1;
        GlobalData.cardInfo.curRate = data.num + "/" + data.maxnum;
        if (data.isError) {

        }
        // if (data.isOut >= 0) {
        //   this.playChooseAni(data.level);
        //   setTimeout(() => {
        //     this.setHandCards(GameLogic.convertCardListS2C(data.cards), data.isOut >= 0);
        //     utils.send(GlobalData.localEvent.LeftCardsBg, { showOther: true, showSelf: true, selfCnt: this.handCardsValue.length });
        //     utils.send(GlobalData.localEvent.KangGong, true, 0, 0);
        //   }, 1000);
        // } else {
        utils.send(GlobalData.localEvent.UpdateLevelCard, true);
        this.setHandCards(GameLogic.convertCardListS2C(data.cards), data.isOut >= 0);
        utils.send(GlobalData.localEvent.LeftCardsBg, { showOther: true, showSelf: true, selfCnt: this.handCardsValue.length });
        utils.send(GlobalData.localEvent.KangGong, true, 0, 0);
        // }

        this.check_tonghua();
    }

    //播放级牌动画
    playChooseAni(level: number) {
        // utils.send(GlobalData.localEvent.UpdateLevelCard, false);
        // this.SkeObjChooseSoket.getComponent(Sprite).spriteFrame = this.cardAtlas.getSpriteFrame('2' + this.getrandNumber());
        // this.SkeObjChoose.node.active = true;
        // this.SkeObjChooseSoket.active = true;
        // setTimeout(() => {
        //   this.SkeObjChooseSoket.getComponent(Sprite).spriteFrame = this.cardAtlas.getSpriteFrame('2' + this.getrandNumber());
        // }, 200);
        // setTimeout(() => {
        //   this.SkeObjChooseSoket.getComponent(Sprite).spriteFrame = this.cardAtlas.getSpriteFrame('2' + this.getrandNumber());
        // }, 400);
        // setTimeout(() => {
        //   this.SkeObjChooseSoket.getComponent(Sprite).spriteFrame = this.cardAtlas.getSpriteFrame('2' + this.getrandNumber(level));
        // }, 800);
        // this.SkeObjChoose.sockets = [{ path: 'root/bone2/bone_zheng', target: this.SkeObjChooseSoket }];
        // let track: TrackEvent = this.SkeObjChoose.setAnimation(0, "choose_rotate", false);
        // this.SkeObjChoose.setTrackCompleteListener(track, (trackEntry) => {
        //   this.SkeObjChoose.node.active = false;
        //   utils.send(GlobalData.localEvent.UpdateLevelCard, true);
        // });
    }
    getrandNumber(level?: number) {
        let randomNumber: number
        if (level) {
            randomNumber = level;
        } else {
            randomNumber = Math.floor(Math.random() * 13) + 1;
        }
        let result = '';
        if (randomNumber === 10) {
            result = 'a';
        } else if (randomNumber === 11) {
            result = 'b';
        } else if (randomNumber === 12) {
            result = 'c';
        } else if (randomNumber === 13) {
            result = 'd';
        } else {
            result = randomNumber.toString();
        }
        return result;
    }
    //出牌时间
    onOutCardTime(data: GameMsg.SendCard) {
        // console.log('onOutCardTime---> ', data);
        let viewId = GameLogic.getUserViewIdById(data.id);
        this.showBtnLayer(true);
        this.clearOutCards(viewId);
        this.showNoOut(viewId, false);
        if (GlobalData.cardInfo.gameType == 97 || GlobalData.cardInfo.gameType == 98) {
            if (data.id == GlobalData.userInfo.user_id) {
                return;
            }
        }
        this.showTime(viewId, data.time);
    }
    //按钮
    onHandleBtn(data: GameMsg.NextUser) {
        // console.log("onHandleBtn---> ", data);
        //每次重置提示
        this.tong_hua_select_idx = [0, 0, 0, 0];
        this.check_tonghua();
        this.hintIndex = 0;
        this.showBtnLayer(true);
        this.showHandleBtn(Boolean(data.isSend), Boolean(data.isHit), Boolean(data.isNot));
        // console.log("hint card--> ", data.hitCards);
        if (data.hitCards && data.hitCards.length > 0) {
            this.hintCards = [];
            for (let i = 0; i < data.hitCards.length; i++) {
                this.hintCards.push(GameLogic.convertCardListS2C(data.hitCards[i].card));
            }
            //剔除提示牌一样的数据 例如:两个黑桃8,只保留一个
            this.hintCards = GameLogic.getOnlyValueList(this.hintCards);

            // console.log("this.hintCards---> ", this.hintCards);
            // //测试
            // let testList = [];
            // for (let k = 0; k < this.hintCards.length; k++) {
            //     const element = this.hintCards[k];
            //     console.log("--->>>");
            //     let tmpList = [];
            //     for (let m = 0; m < element.length; m++) {
            //         const e = element[m];
            //         console.log(e.toString(16));
            //         tmpList.push(e.toString(16));
            //     }
            //     testList.push(tmpList);
            // }
            // console.log("testList-----> ", testList);

        } else {
            this.hintCards = [];
        }
    }
    //游戏结束给玩家剩余手牌
    onGameFinishCards(datas: GameMsg.UserCardsList) {
        console.log("游戏结束玩家剩余手牌--> ", datas);
        this.clearAllOutCards();
        this.hideAllTime();
        this.hideAllNoOut();
        this.showBtnLayer(false);
        //不包括自己的
        for (let i = 0; i < datas.list.length; i++) {
            const tmpInfo = datas.list[i];
            let viewId = GameLogic.getUserViewIdById(tmpInfo.id);
            if (viewId != GlobalData.viewId.self) {
                let cards = GameLogic.convertCardListS2C(tmpInfo.cards);
                this.showOtherHandCards(viewId, cards, cards.length);
            }
        }
    }
    //断线已出的牌
    onReconnectOutCard(data: GameMsg.SendCard) {
        // console.log("断线已出的牌---> ", data);
        let viewId = GameLogic.getUserViewIdById(data.id);
        //1 出牌 0不出
        if (Boolean(data.isSend)) {
            let cards = GameLogic.convertCardListS2C(data.cards);
            //sendType: 1自己出牌 2系统出牌
            this.dealReconectOutCards(viewId, cards, cards.length);
        } else {
            this.showNoOut(viewId, true);
        }
    }
    //出牌
    onOutCards(data: GameMsg.SendCard) {
        let viewId = GameLogic.getUserViewIdById(data.id);

        if (viewId == GlobalData.viewId.self) {
            this.showBtnLayer(false);
            // console.log("onOutCards--> ", data);
        } else {
            this.hideAllTime();
        }
        //1 出牌 0不出
        if (Boolean(data.isSend)) {
            let cards = GameLogic.convertCardListS2C(data.cards);
            //sendType: 1自己出牌 2系统出牌
            this.onEventOutCards({ viewid: viewId, cards: cards, cardCount: cards.length, isAuto: data.sendType == 2 });
            GameLogic.playCardTypeMusic(data.cardType, cards);
            this.showCardTypeActionByViewId({ viewId: viewId, cardType: data.cardType, cardNum: cards.length });
            //自己剩余牌数
            if (viewId == GlobalData.viewId.self) {
                this.selectCardValue = [];
                utils.send(GlobalData.localEvent.LeftCardsBg, { showOther: false, showSelf: true, selfCnt: this.handCardsValue.length });
            }
        } else {
            this.onEventOutCards({ viewid: viewId, cards: [], cardCount: 0, isAuto: data.sendType == 2 });
            if (viewId == GlobalData.viewId.self) {
                this.doHandCardPopDown();
            }
            this.showNoOut(viewId, true);
            GameLogic.playCardTypeMusic(100);
        }
    }
    //结算
    onGameFinish(data: GameMsg.WinList) {
        this.is_game_start = false;
        this.hideAllTime();
        console.log("data--> ", data);
        if (data.type == GameEndType.free) {
            UIManager.Instace.showUI({ path: UIConfig.GameEndFreeItemKey, data: data });
        }
        else if (data.type == GameEndType.audition) {
            UIManager.Instace.showUI({ path: UIConfig.GameEndAuditionItemKey, data: data });
        }
        else if (data.type == GameEndType.kick_1) {
            UIManager.Instace.showUI({ path: UIConfig.GameEndKickItemKey, data: data });
        }
        else if (data.type == GameEndType.kick_2) {
            UIManager.Instace.showUI({ path: UIConfig.GameEndKickItemKey, data: data });
            //三局两胜结束,隐藏进度和级牌
            utils.send(GlobalData.localEvent.UpdateLevelCard, false);
        }
        else if (data.type == GameEndType.kick_3) {
            UIManager.Instace.showUI({ path: UIConfig.GameEndKickItemKey, data: data });
        }
        else if (data.type == GameEndType.score_1 || data.type == GameEndType.score_2) {
            UIManager.Instace.showUI({ path: UIConfig.GameEndScoreItemKey, data: data });
        }
    }
    //有人赢了
    onUserWin(data: GameMsg.UserWin) {
        console.log("有人赢了--> ", data);
        setTimeout(() => {
            let viewId = GameLogic.getUserViewIdById(data.id);
            this.picWinTypes[viewId].active = true
            this.picWinTypes[viewId].getComponent(Sprite).spriteFrame = this.spWinTypes[data.win - 1];
            this.showCardTypeActionByViewId({ viewId: viewId, cardType: data.win + 1000, cardNum: null });
        }, 1500)
    }
    //首出动画
    //   onFirstPlayUser(data: GameMsg.FirstPlayUser) {
    //     console.log("首出--> ", data);
    //     let viewId = GameLogic.getUserViewIdById(data.firstId);
    //     this.showCardTypeActionByViewId({ viewId: viewId, cardType: GameDefine.KIND_CARDS_SHOUCHU, cardNum: null });
    //   }
    //新一轮
    onNewCircle() {
        // console.log("---->新一轮");
        this.hideAllNoOut();
        this.clearAllOutCards();
    }
    //回贡 type=>自动回贡
    onDownCard(data: GameMsg.Gong, type: boolean) {
        console.log("---------> 回贡 ", data, type);
        UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: "还贡中..." });
        const e = data;
        let fromViewId = GameLogic.getUserViewIdById(e.fromId);
        let toViewId = GameLogic.getUserViewIdById(e.toId);
        let toPos = this.getOutCardByViewId(toViewId);
        let scale = this.getOutCardScaleByViewId(toViewId);
        let cards = GameLogic.convertCardListS2C([e.card]);
        this.onEventOutCards({ viewid: fromViewId, cards: cards, cardCount: 1, isAuto: type });
        let moveTime = 1.5;
        try {
            //移动动画
            tween(this.outCards[fromViewId][0].node)
                .delay(1)
                .parallel(
                    tween().to(moveTime, { position: toPos }),
                    tween().to(moveTime, { scale: v3(scale, scale, scale) })
                )
                .delay(2.5)
                .call(() => {
                    this.clearOutCards(fromViewId);
                })
                .start();
        } catch (err) {

        }
    }
    //抗贡
    onNoCard(data: GameMsg.KongGong) {
        console.log("---------> 抗贡 ");
        if (data.one) {
            let user = GameLogic.getUserDataById(data.one);
            UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: user.name + "抗贡" });
            utils.send(GlobalData.localEvent.KangGong, false, user.id, null);
        }
        if (data.one && data.two) {
            let user1 = GameLogic.getUserDataById(data.one);
            let user2 = GameLogic.getUserDataById(data.two);
            UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: user1.name + user2.name + "抗贡" });
            utils.send(GlobalData.localEvent.KangGong, false, user1.id, user2.id);
        }
    }

    //上贡(UI)
    onUpCard(data: GameMsg.GongList) {
        console.log("---------> 上贡(UI) ", data);
        UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: "进贡中..." });
        for (let i = 0; i < data.list.length; i++) {
            const e = data.list[i];
            let fromViewId = GameLogic.getUserViewIdById(e.fromId);
            let toViewId = GameLogic.getUserViewIdById(e.toId);
            let toPos = this.getOutCardByViewId(toViewId);
            let scale = this.getOutCardScaleByViewId(toViewId);
            let cards = GameLogic.convertCardListS2C([e.card]);
            this.onEventOutCards({ viewid: fromViewId, cards: cards, cardCount: 1, isAuto: true });
            let moveTime = 1.5;

            console.log("fromViewId --> ", fromViewId, "贡 cards --> ", cards[0]);
            if (this.outCards[fromViewId][0] != null) {
                //移动动画
                tween(this.outCards[fromViewId][0].node)
                    .delay(1)
                    .parallel(
                        tween().to(moveTime, { position: toPos }),
                        tween().to(moveTime, { scale: v3(scale, scale, scale) })
                    )
                    .delay(2.5)
                    .call(() => {
                        this.clearOutCards(fromViewId);
                    })
                    .start();
            }
        }
        this.showBtnLayer(true);
        if (GlobalData.cardInfo.gameType == 97 || GlobalData.cardInfo.gameType == 98) {
            return;
        }
        this.showTime(GlobalData.viewId.self, data.time, true);
    }


    //回贡人拿到了上贡的牌
    onReviceCard(data: GameMsg.Gong, type: boolean) {
        if (type) {
            console.log("---------> 回贡人拿到了上贡人的牌 ", data);
            let card = GameLogic.convertCardListS2C([data.card])[0];
            GlobalData.cardInfo.giveCard = card;
            this.setHandCards(this.handCardsValue.concat(card), false, true);
            this.updateBtnLayerPos(GlobalData.viewId.self, true);
            this.showUpDownCardBtn(true);
        }
        else {
            console.log("---------> 上贡人拿到了回贡人的牌 ", data);
            //上贡人拿到了回贡人的牌
            let card = GameLogic.convertCardListS2C([data.card])[0];
            GlobalData.cardInfo.giveCard = card;
            this.setHandCards(this.handCardsValue.concat(card), false, true);
            this.showBtnLayer(false);
        }
    }
    onReviceBtn() {
        this.showUpDownCardBtn(true);
    }
    //回贡完成
    onReviceCardFinish() {
        this.hideAllTime();
        this.showBtnLayer(false);
        this.updateBtnLayerPos(GlobalData.viewId.self, true);
    }
    //接风
    onHaveWindy(data: GameMsg.UserWin) {
        let viewId = GameLogic.getUserViewIdById(data.id);
        this.showCardTypeActionByViewId({ viewId: viewId, cardType: GameDefine.KIND_CARDS_Feng, cardNum: null });
    }
    //回贡成功
    onReviceCardSuccess() {
        this.showUpDownCardBtn(false);
    }
    //再来一局
    onAgainGame(data: { type: number }) {
        if (data.type == GlobalData.gameType.free) {
            this.init();
        } else if (data.type == GlobalData.gameType.audition) {
            this.init();
        }
    }
    //新一轮游戏开始
    onGameRestart() {
        console.log("销毁所有 2--->");
        UIManager.Instace.clearAllUI();
        this.init();
    }
    //轮空通知
    onKickFreeUp() {
        this.init();
        //只保留自己和对家
        utils.send(GlobalData.localEvent.HideUpDownUserHead);
    }

    //隐藏 头游
    hideAllWinType() {
        for (let i = 0; i < this.picWinTypes.length; i++) {
            this.picWinTypes[i].active = false;
        }
    }

    //   onAiTipList(data: GameMsg.AiTipList) {
    //     //
    //     if (data && data.list.length == 1 && data.list[0].cards.length == 0) {
    //       //清空操作按钮组
    //       this.btnCloseAiTips.node.active = false;
    //       this.btnAiTips.node.active = false;
    //       for (let i = 0; i < 2; i++) {
    //         this.btnHouXuans[i].node.active = false;
    //       }
    //       return;
    //     }

    //     data.list.sort((a: GameMsg.AiTip, b: GameMsg.AiTip) => {
    //       return (a.winRate < b.winRate) ? 1 : -1;
    //     })

    //     for (let i = 0; i < 3; i++) {
    //       if (data.list[i] && data.list[i].cards.length > 0) {
    //         data.list[i].cards = GameLogic.convertCardListS2C(data.list[i].cards);
    //       }
    //     }

    //     this.aiListDatas = data;

    //     this.btnAiTips.node.active = true;
    //     this.noSelectDesc.getComponent(AISelectDesc).init(data);
    //     if (this.firstLoad) {
    //       this.firstLoad = false;
    //       this.onBtnAiTips();
    //     }
    //     // this.noSelectDesc.getComponent(AISelectDesc).firstLoadShowDesc();

    //     for (let i = 0; i < 2; i++) {
    //       this.btnHouXuans[i].node.active = false;
    //     }

    //     for (let i = 0; i < 2; i++) {
    //       const clickEventHandler = new EventHandler();
    //       clickEventHandler.target = this.node;
    //       clickEventHandler.component = 'CardLayer';
    //       clickEventHandler.handler = 'onHouXuanClick';
    //       clickEventHandler.customEventData = i.toString();

    //       this.btnHouXuans[i].clickEvents.push(clickEventHandler);
    //     }

    //   }

    onHouXuanClick(event: Event, customEventData: string) {
        // SoundManager.playClick();
        // let cards = [];
        // if (Number(customEventData) == 0) {
        //   SoundManager.playClick();
        //   cards = this.aiListDatas.list[1].cards;
        //   this.btnHouXuans[0].node.active = false;
        //   if (this.aiListDatas.list.length > 2) {
        //     this.btnHouXuans[1].node.active = true;
        //     this.btnCloseAiTips.node.active = false;
        //   } else {
        //     this.btnCloseAiTips.node.active = true;
        //   }
        // } else if (Number(customEventData) == 1) {
        //   SoundManager.playClick();
        //   cards = this.aiListDatas.list[2].cards;
        //   this.btnHouXuans[1].node.active = false;
        //   this.btnCloseAiTips.node.active = true;
        // }
        // if (cards.length > 0) {
        //   if (GlobalData.cardInfo.cardDir) {
        //     this.doHandCardPopDown();
        //   } else {
        //     this.doHandCardPopDown_V();
        //   }
        //   this.selectCardValue = cards;

        //   if (GlobalData.cardInfo.cardDir) {
        //     this.showChooseCard(cards);
        //   } else {
        //     this.showChooseCard_V(cards);
        //   }
        // } else {
        //   // let sendBuffer = PbManager.instance.sendMsg(GlobalData.C2S_Event.NoOutCards, null);
        //   // GameSocket.send(sendBuffer);
        // }
    }

    onBtnAiTips() {
        SoundManager.playClick();
        // this.noSelectDesc.getComponent(AISelectDesc).setInitialNode();
        // this.noSelectDesc.active = true;
        // this.btnAiTips.node.active = false;
        // this.btnCloseAiTips.node.active = true;
        // // this.layoutBtns.node.active = true;
        // this.btnHouXuans[0].node.active = true;
        // let cards = this.aiListDatas.list[0].cards;
        // if (cards.length > 0) {
        //   if (GlobalData.cardInfo.cardDir) {
        //     this.doHandCardPopDown();
        //   } else {
        //     this.doHandCardPopDown_V();
        //   }
        //   this.selectCardValue = cards;

        //   if (GlobalData.cardInfo.cardDir) {
        //     this.showChooseCard(cards);
        //   } else {
        //     this.showChooseCard_V(cards);
        //   }
        // }
    }

    onBtnCloseAiTips() {
        SoundManager.playClick();
        // this.btnAiTips.node.active = true;
        // this.btnCloseAiTips.node.active = false;
        // this.layoutBtns.node.active = false;
        // this.noSelectDesc.active = false;
        // if (GlobalData.cardInfo.cardDir) {
        //   this.doHandCardPopDown();
        // } else {
        //   this.doHandCardPopDown_V();
        // }
    }

    onBtnFlushStraightHint(event: Event, customEventData: string) {
        let idx: number = Number(customEventData);
        if (this.tong_suit_combs[idx].length > 0) {
            //   if (GlobalData.cardInfo.cardDir) {
            //     this.doHandCardPopDown();
            //   } else {
            this.doHandCardPopDown_V();
            //   }

            if (this.tong_hua_select_idx[idx] >= this.tong_suit_combs[idx].length) {
                this.tong_hua_select_idx[idx] = 0;
            }

            let cards: number[] = this.tong_suit_combs[idx][this.tong_hua_select_idx[idx]]["cards"]
            this.selectCardValue = cards;

            this.tong_hua_select_idx[idx] = this.tong_hua_select_idx[idx] + 1;

            //   if (GlobalData.cardInfo.cardDir) {
            //     this.showChooseCard(cards);
            //   } else {
            this.showChooseCard_V(cards);
            //   }
        }
    }

    public laizi_value: number;

    check_tonghua() {
        let card_datas: number[] = [];
        for (let i = this.handCards.length - 1; i >= 0; i--) {
            card_datas.push(this.handCards[i].cardValue);
        }

        // card_datas = [52,36,4,53,54,22,22,23,23,7,56,40,58,58,59,27,11,44,29,13,33,17,17,34,18,78,79];
        // PokerLogic.set_laizi([2*16 + 2]);

        //card_datas = [35,20,53,21,54,54,22,39,39,56,24,24,26,10,59,27,44,28,49,17,50,34,18,2,78,79]
        //card_datas = [3,36,37,37,21,21,55,7,7,56,26,10,43,43,27,44,44,28,61,45,49,49,33,1,34,2,79]
        //PokerLogic.set_laizi([2*16 + 2]);

        //card_datas = [50,51,18,52,4,53,54,55,55,39,23,7,41,58,42,42,60,28,12,45,45,29,49,33,59,59,79];
        //card_datas = [18, 2, 35, 19, 37, 21, 5, 5, 39, 23, 56, 56, 8, 57, 57, 27, 60, 28, 61, 29, 49, 33, 33, 36, 20, 4, 4];

        PokerLogic.set_laizi([this.laizi_value]);

        let combs = PokerLogic.get_card_type(card_datas, PokerLogic.TYPE.tong_hua_shun);


        this.tong_suit_combs = [[], [], [], []];
        if (combs.length > 0) {
            combs.forEach((v, idx, array) => {
                let cards: number[] = v["cards"];
                let card_value: number;
                for (let i: number = 0; i < cards.length; i++) {
                    if (!PokerLogic.check_is_laizi(cards[i])) {
                        card_value = cards[i];
                        break;
                    }
                }

                this.tong_suit_combs[PokerLogic.get_suit(card_value)].push(v);
            });
        }

        for (let i: number = 0; i < 4; i++) {
            if (this.tong_suit_combs[i].length == 0) {
                if (i == 0) {
                    this.fangkuai.active = false;
                }
                else if (i == 1) {
                    this.meihua.active = false;
                }
                else if (i == 2) {
                    this.hongtao.active = false;
                }
                else if (i == 3) {
                    this.heitao.active = false;
                }
                // this.spriteSuits[i].spriteFrame = this.spsGraySuits[i];
            } else {
                if (i == 0) {
                    this.fangkuai.active = true;
                }
                else if (i == 1) {
                    this.meihua.active = true;
                }
                else if (i == 2) {
                    this.hongtao.active = true;
                }
                else if (i == 3) {
                    this.heitao.active = true;
                }
                // this.spriteSuits[i].spriteFrame = this.spsNormalSuits[i];
            }
        }

        // for (let i: number = 0; i < 4; i++) {
        //   if (this.tong_suit_combs[i].length == 0) {
        //     this.spriteSuits[i].spriteFrame = this.spsGraySuits[i];
        //   } else {
        //     this.spriteSuits[i].spriteFrame = this.spsNormalSuits[i];
        //   }
        // }
    }

    // 回供| 上供置灰
    onGetBackCardList(data: GameMsg.Cards) {
        const dataList = GameLogic.convertCardListS2C(data.card);
        console.log('dataList :>> ', dataList);
        if (dataList.length > 0) {
            for (let i = 0; i < this.handCards.length; i++) {
                if (dataList.indexOf(this.handCards[i].getValue()) < 0) {
                    this.handCards[i].setDisabel(true);
                }
            }
        }
    }

    // 开始上供
    onStartUpGong(data: GameMsg.Time) {
        UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: "开始进贡..." });
        this.showBtnLayer(true);
        if (GlobalData.cardInfo.gameType == 97 || GlobalData.cardInfo.gameType == 98) {
            return;
        }
        this.showTime(GlobalData.viewId.self, data.time);
    }

    // 获取可上供列表
    onUpGongList(data: GameMsg.Cards) {
        console.log('data Cards:>> ', data);
        this.showUpDownCardBtn(false, true);
        this.onGetBackCardList(data);
    }

    // 上供
    onBtnUpGong() {
        SoundManager.playClick();
        let _cards = GameLogic.convertCardListC2S(this.selectCardValue);
        if (_cards) {
            if (_cards.length == 1) {
                console.log('_cards :>> ', _cards);
                let baseInfo = GameMsg.Gong.create({ card: _cards[0] });
                let baseBuffer = GameMsg.Gong.encode(baseInfo).finish();
                // let sendBuffer = PbManager.instance.sendMsg(GlobalData.C2S_Event.UpGong, baseBuffer);
                // GameSocket.send(sendBuffer);
            } else {
                UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: "请选择一张牌！" });
            }
        } else {
            UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: "请选择一张牌！" });
        }
    }

    //上供成功
    onUpGongSuccess() {
        this.showUpDownCardBtn(false, false);
        this.showBtnLayer(false);
        this.isGong = false;
        console.log('上供成功了 :>> ',);
    }

    //赛事结算
    //   onMatchGameOver(data: GameMsg.MatchGameOver) {
    //     if (data.isOver) {
    //       UIManager.Instace.showUI({ path: UIConfig.EndMatchKey, data: { matchId: data.matchId } });
    //     } else {
    //       if (data.scoreChange > 0) {
    //         this.matchScoreMove.font = this.fontAdd;
    //         this.matchScoreMove.string = '+' + data.scoreChange;
    //       } else {
    //         this.matchScoreMove.font = this.fontmin;
    //         this.matchScoreMove.string = '' + data.scoreChange;
    //       }
    //       this.matchScoreMove.node.setPosition(new Vec3(712, 177, 0));
    //       this.matchScoreMove.node.active = true;
    //       let targetPosition = this.userScoreMove.node.position;
    //       let newPosition = new Vec3(targetPosition.x + 150, targetPosition.y, targetPosition.z);
    //       tween(this.matchScoreMove.node)
    //         .to(1.5, { position: newPosition }, { easing: 'smooth' })
    //         .call(() => {
    //           this.matchScoreMove.node.active = false;
    //           this.animateNumber(this.userScoreMove, ~~(this.userScoreMove), data.scoreAfter);
    //           this.hideAllWinType();
    //         })
    //         .start();
    //       this.onGameRestart();
    //     }
    //   }
    //  start: number, end: number, duration: number
    animateNumber(label: Label, start: number, end: number,) {
        let sdk: any = {
            a: start,
        }

        tween(sdk).to(1, { a: end }, {
            progress: (start, end, current, time) => {
                label.string = Math.round(start + (end - start) * time) + '';
                return start + (end - start) * time;
            },
        }).call(() => {
        }).start();
    }

    //新手房

    //弹起提示的牌
    showChooseCardIndex(value: number[]) {
        let copeValue: number[] = utils.deepCopy(value);
        if (value == null || value.length == 0) return;
        if (this.handCards.length != 0) {
            this.selectCardIndex = [];
            for (const i in this.handCards) {
                const item = this.handCards[i];
                if (item) {
                    //   if (item.isSiblingIndex()) {
                    //     let isFind = false;
                    //     for (let j in copeValue) {
                    //       if (copeValue[j] && copeValue[j] == item.getValue()) {
                    //         isFind = true;
                    //         copeValue.splice(Number(j), 1);
                    //         break;
                    //       }
                    //     }
                    //     if (!isFind) {
                    //       this.selectCardIndex.splice(this.selectCardIndex.indexOf(item.getIndex()), 1);
                    //       item.setSetSiblingIndex(false);
                    //     }
                    //   } else {
                    //     for (let j in copeValue) {
                    //       if (copeValue[j] && copeValue[j] == item.getValue() && this.selectCardIndex.indexOf(item.getIndex()) == -1) {
                    //         this.selectCardIndex.push(item.getIndex());
                    //         item.setSetSiblingIndex(true);
                    //         copeValue.splice(Number(j), 1);
                    //         break;
                    //       }
                    //     }
                    //     //7788 7  牌值牌色一样
                    //     if (copeValue.length == 0) {
                    //       // console.log("this.selectCardIndex  ", this.selectCardIndex);
                    //       break;
                    //     }
                    //   }
                }
            }
        }

    }

    //放下选中的牌
    doHandCardPopDownIndex() {
        for (let i = 0; i < this.handCards.length; i++) {
            const item = this.handCards[i];
            //   if (item.isSiblingIndex()) {
            //     item.setSetSiblingIndex(false);
            //   }
        }
        this.selectCardValue = [];
        this.selectCardIndex = [];
    }

    onWaitUserSelectCard(item) {
        // console.log('object :>> ', item);
        // // this.newbieLayout.active = true;
        // // this.maskNode.active = true;
        // if (item.isGong) {
        //   this.isGong = true;
        // }
        // setTimeout(() => {

        //   //提示牌
        //   if (item.type == 1) {
        //     if (item.sendCard.length == 0) {
        //       return;
        //     };
        //     const cards = GameLogic.convertCardListS2C(item.sendCard);
        //     // this.sendCardGuide = cards; //存储选牌用
        //     if (cards.length > 0) {
        //       this.doHandCardPopDownIndex();
        //       // this.selectCardValue = cards;
        //       this.showChooseCardIndex(cards);
        //     };

        //     let rectArr = [];
        //     this.selectCardIndex.forEach(item => {
        //       for (let i in this.handCards) {
        //         if (item == this.handCards[i].getIndex()) {
        //           const cardItemS = this.handCards[i].getComponent(Sprite);
        //           const btnOutSWidth = cardItemS.node.getComponent(UITransform).width;
        //           const btnOutSHeight = cardItemS.node.getComponent(UITransform).height;
        //           const cardItemPosition = this.handCards[i].node.position;
        //           let width = btnOutSWidth * this.handScale;
        //           if (!this.handCards[i].getLastLine()) {
        //             width = btnOutSWidth * this.handScale - 20;
        //           }
        //           let obj = {
        //             x: cardItemPosition.x - 12 - btnOutSWidth / 2,
        //             y: cardItemPosition.y + 40 - btnOutSHeight / 2,
        //             width: width - 1,
        //             height: btnOutSHeight * this.handScale,
        //             radius: 16
        //           };
        //           rectArr.push(obj);
        //         }
        //       };
        //     });

        //     function getMaxYObj(rectArr) {
        //       if (rectArr.length === 0) return null; // 如果数组为空，则返回null

        //       let maxObj = rectArr[0]; // 初始化最大y值的对象为数组的第一个元素

        //       // 遍历数组，寻找具有最大y值的对象
        //       for (let i = 1; i < rectArr.length; i++) {
        //         if (rectArr[i].y > maxObj.y) {
        //           maxObj = rectArr[i]; // 更新最大y值的对象
        //         }
        //       }

        //       return maxObj; // 返回具有最大y值的对象
        //     }

        //     function areAllYValuesEqual(array) {
        //       if (array.length === 0) return true; // 空数组默认为全部相等
        //       const firstYValue = array[0].y;
        //       for (let i = 1; i < array.length; i++) {
        //         if (array[i].y !== firstYValue) {
        //           return false;
        //         }
        //       }
        //       return true;
        //     }

        //     const guideObj = JSON.parse(JSON.stringify(getMaxYObj(rectArr)));

        //     if (rectArr.length == 5 && areAllYValuesEqual(rectArr)) {
        //       guideObj.x += 170;
        //     }
        //     this.setCanTouch(true);

        //     this.drawMaskOut(rectArr, guideObj, item.text);

        //     this.selectCardIndex = [];
        //     this.intervalTime = setInterval(() => {
        //       if (utils.areTwoAraay(this.selectCardValue, cards) || utils.areTwoAraay(this.selectCardValue, [12, 28, 60, 5, 21]) || utils.areTwoAraay(this.selectCardValue, [34, 17, 33, 49])) {
        //         if (this.newbieCardTipNode && this.newbieCardTipNode.node) {
        //           this.newbieCardTipNode.node.destroy();
        //         };
        //         // this.maskNode.active = false;
        //         this.setCanTouch(false);
        //         clearInterval(this.intervalTime);
        //         // if (GlobalData.cardInfo.gameType == 97) {
        //         //   utils.send(GlobalData.localEvent.continuePCnewbieRoom, { type: 2 });
        //         // }
        //         // if (GlobalData.cardInfo.gameType == 98) {
        //         //   let sendBuffer = PbManager.instance.sendMsg(GlobalData.C2S_Event.newbieContinueGame, null);
        //         //   GameSocket.send(sendBuffer);
        //         // }
        //       }
        //     }, 50);
        //   } else { //提示操作按钮
        //     const btnLayerPositon = this.btnLayer.position;
        //     // this.tipBtnType = item.btnType;
        //     if (item.btnType == 1) {
        //       const btnOutS = this.btnOut.getComponent(Sprite);
        //       const btnOutSWidth = btnOutS.node.getComponent(UITransform).width;
        //       const btnOutSHeight = btnOutS.node.getComponent(UITransform).height;
        //       const btnOutSPositon = this.btnOut.node.position;
        //       const rectArr = [{
        //         x: btnOutSPositon.x - btnOutSWidth / 2,
        //         y: btnLayerPositon.y + 5 - btnOutSHeight / 2,
        //         width: btnOutSWidth,
        //         height: btnOutSHeight - 5,
        //         radius: 35
        //       }];
        //       this.drawMaskOut(rectArr, {}, item.text, rectArr[0]);
        //     } else if (item.btnType == 2) {
        //       const btnOutS = this.btnNoOut.getComponent(Sprite);
        //       const btnOutSWidth = btnOutS.node.getComponent(UITransform).width;
        //       const btnOutSHeight = btnOutS.node.getComponent(UITransform).height;
        //       const btnOutSPositon = this.btnNoOut.node.position;
        //       const rectArr = [{
        //         x: btnOutSPositon.x - btnOutSWidth / 2,
        //         y: btnLayerPositon.y + 5 - btnOutSHeight / 2,
        //         width: btnOutSWidth,
        //         height: btnOutSHeight - 5,
        //         radius: 35
        //       }];
        //       this.drawMaskOut(rectArr, {}, item.text, rectArr[0]);
        //     } else if (item.btnType == 3) {

        //       const btnOutS = this.btnDownCard.getComponent(Sprite);
        //       const btnOutSWidth = btnOutS.node.getComponent(UITransform).width;
        //       const btnOutSHeight = btnOutS.node.getComponent(UITransform).height;
        //       const btnOutSPositon = this.btnDownCard.node.position;

        //       // 如果断线重连处理上一步选中牌
        //       if (item.sendCard.length > 0) {
        //         const cards = GameLogic.convertCardListS2C(item.sendCard);
        //         this.selectCardValue = [];
        //         for (let i in this.handCards) {
        //           if (this.handCards[i].getValue() == cards[0]) {
        //             this.selectCardValue.push(cards[0]);
        //             this.handCards[i].setMask(true);
        //             break;
        //           }
        //         }
        //       }

        //       const rectArr = [{
        //         x: btnOutSPositon.x - btnOutSWidth / 2,
        //         y: btnLayerPositon.y + 5 - btnOutSHeight / 2,
        //         width: btnOutSWidth,
        //         height: btnOutSHeight - 5,
        //         radius: 35
        //       }];
        //       this.drawMaskOut(rectArr, {}, item.text, rectArr[0]);
        //     }
        //   };
        // }, 200);
    };

    drawMaskOut(rectArr: { x: number, y: number, width: number, height: number, radius: number }[], guideObj, guideString = '', guideButton = null) {
        // let mask: any = this.maskNode.getComponent(Mask);
        // let stencil = mask._graphics;
        // const rectArr1 = rectArr[0];
        // stencil.moveTo(16, 0);
        // stencil.lineTo(100, 0);
        // stencil.lineTo(100, 100);
        // // 绘制直线到左下角
        // stencil.lineTo(0, 100);

        // stencil.lineTo(0, 16);

        // stencil.arc(
        //   16, // 圆弧中心的 x 坐标
        //   16, // 圆弧中心的 y 坐标
        //   16, // 圆弧的半径
        //   90 , // 圆弧的起始角度
        //   180, // 圆弧的结束角度
        //   false // 顺时针绘制圆弧
        // );

        // stencil.arc(0, 0, 16, 0, Math.PI * 3, false);

        // stencil.fillColor = Color.RED; // 设置填充颜色

        // // 闭合路径
        // stencil.fill();
        // // stencil.close();
        // return
        // if (guideObj.y && guideString) {
        //   this.newbieCardTipNode = instantiate(this.newbieCardTip).getComponent(newbieCard);
        //   this.newbieCardTipNode.node.setPosition(v3(guideObj.x + 40, guideObj.y + 170, 0));
        //   this.newbieCardTipNode.setData(guideString);
        //   this.maskNode.addChild(this.newbieCardTipNode.node);
        // }
        // if (guideButton && guideString) {
        //   this.newbieButtonTipNode = instantiate(this.newbieButtonTip).getComponent(newbieButton);
        //   this.newbieButtonTipNode.node.setPosition(v3(guideButton.x + 180, guideButton.y - 30, 0));
        //   this.newbieButtonTipNode.setData(guideString);
        //   this.maskNode.addChild(this.newbieButtonTipNode.node);
        // }
        // if (rectArr.length > 0) {
        //   rectArr.forEach(item => {
        //     stencil.roundRect(item.x, item.y, item.width, item.height - 5, item.radius);
        //     stencil.fill();
        //   });
        //   stencil.close();
        // } else {
        //   stencil.clear();
        // };
    };

    onBtnClickModal() {
        console.log('123 :>> ', 123);
    }

    onGetNewbieRoomWord(data) {
        // console.log('onGetNewbieRoomWord :>> ', data);
        // UIManager.Instace.showUI({
        //   path: UIConfig.NewbieLayerWordKey,
        //   data: data.text
        // });
    }

    onAITipOpen() {
        // this.btnAiTipOpen.active = true;
    }

    onBtnClickCloseAITipLay() {
        // this.btnAiTipOpen.active = false;
    }

    /**
    * 一键理牌相关
    */
    onOrganize(data: GameMsg.Organize) {
        console.log('data :>> ', data);
        if (this.isOrganize) {
            this.onBtnCardCollect();
        }
        if (data.cards.length > 0) {
            this.isOrganize = true;
            data.cards.forEach(item => {
                this.onBtnCardCollect1(item.card);
            })
        }
        this.isOrganize = false;
    }


    setHandCards2() {
        this.clearHandCards()
    }





    bbbetHandCards2() {
        let val = [23, 31, 33, 41, 42, 64, 71, 73, 74, 74, 84, 102, 112, 122, 124, 132, 133, 142, 155, 165]
        this.setHandCards(val)
    }

    getOrganize() {
        if (!this.isOrganize) {
            if (this.btnLabel == '恢复') {
                UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: "没有理牌方案" });
                return;
            }
            else {
                let exist_collects: boolean = false;
                if (this.collect_cards.length > 0) {
                    for (let i: number = 14; i >= 0; i--) {
                        if (this.collect_cards[i].length > 0) {
                            exist_collects = true;
                            break;
                        }
                    }
                }
                if (exist_collects) {
                    UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: "没有理牌方案" });
                    return;
                }
            }
        }
        let buf = PbManager.instance.sendMsg(GlobalData.C2S_Event.Organize, null);
        GameSocket.send(buf);
    }

    onBtnCardCollect1(data) {

        SoundManager.playClick();
        let card_datas: number[] = GameLogic.convertCardListS2C(data);
        // console.log('card_datas :>> ', card_datas);
        let all_datas: number[] = [];
        for (let i = this.handCards.length - 1; i >= 0; i--) {
            // if (this.handCards[i].isMask()) {
            //   card_datas.push(this.handCards[i].cardValue);
            // }
            all_datas.push(this.handCards[i].cardValue);
        }

        if (card_datas.length > 0) {
            let comb_list: object[] = PokerLogic.get_card_type(card_datas);
            if (comb_list.length > 0) {
                this.delete_collect_cards(utils.deepCopy(all_datas), 0, true);
                let idx: number = comb_list[comb_list.length - 1]["type"];
                this.collect_cards[idx].push(comb_list[comb_list.length - 1]);

                // PokerLogic.sort_ccombs(this.collect_cards[idx]);
            } else {
                return UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: "牌型错误！" });
            }
        }


        let collect_all_cards: number[] = [];
        if (this.collect_cards.length > 0) {
            for (let i: number = 14; i >= 0; i--) {
                if (this.collect_cards[i].length > 0) {
                    for (let j: number = 0; j < this.collect_cards[i].length; j++) {
                        let comb_cards: number[] = this.collect_cards[i][j]["cards"];
                        for (let k: number = 0; k < comb_cards.length; k++) {
                            collect_all_cards.push(comb_cards[k]);
                        }
                    }
                }
            }
        }

        collect_all_cards.forEach((v, ii, array) => {
            for (let i: number = 0; i < all_datas.length; i++) {
                if (all_datas[i] == v) {
                    all_datas[i] = -1;
                    break;
                }
            }
        });


        all_datas = all_datas.filter((v, ii, array) => {
            return v != -1;
        });

        this.init(false);
        this.setHandCards(all_datas);

        this.btnLabel = "恢复";
        this.picCardDir.node.active = false;
        this.picHuifuDir.node.active = true;

        this.cur_select_cards = [];
    }
}
