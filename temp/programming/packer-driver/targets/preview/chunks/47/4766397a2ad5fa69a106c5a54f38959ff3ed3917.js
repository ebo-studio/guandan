System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Component, instantiate, Node, Prefab, Rect, sp, Sprite, SpriteAtlas, SpriteFrame, tween, UITransform, v3, Vec2, Vec3, CardItem, GameTimer, utils, GameLogic, GameEndType, GlobalData, SoundManager, PbManager, GameSocket, UIManager, UIConfig, CardAction, GameDefine, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _crd, ccclass, property, CardLayer;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCardItem(extras) {
    _reporterNs.report("CardItem", "./CardItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameTimer(extras) {
    _reporterNs.report("GameTimer", "./GameTimer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfutils(extras) {
    _reporterNs.report("utils", "../../common/utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameLogic(extras) {
    _reporterNs.report("GameLogic", "./GameLogic", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEndType(extras) {
    _reporterNs.report("GameEndType", "../../manager/GlobalData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalData(extras) {
    _reporterNs.report("GlobalData", "../../manager/GlobalData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundManager(extras) {
    _reporterNs.report("SoundManager", "../../manager/SoundManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPbManager(extras) {
    _reporterNs.report("PbManager", "../../proto/PbManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameSocket(extras) {
    _reporterNs.report("GameSocket", "../../manager/GameSocket", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIManager(extras) {
    _reporterNs.report("UIManager", "../../manager/UIManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIConfig(extras) {
    _reporterNs.report("UIConfig", "../../manager/UIConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardAction(extras) {
    _reporterNs.report("CardAction", "../cardAction/CardAction", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameDefine(extras) {
    _reporterNs.report("GameDefine", "./GameDefine", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Button = _cc.Button;
      Component = _cc.Component;
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      Rect = _cc.Rect;
      sp = _cc.sp;
      Sprite = _cc.Sprite;
      SpriteAtlas = _cc.SpriteAtlas;
      SpriteFrame = _cc.SpriteFrame;
      tween = _cc.tween;
      UITransform = _cc.UITransform;
      v3 = _cc.v3;
      Vec2 = _cc.Vec2;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      CardItem = _unresolved_2.CardItem;
    }, function (_unresolved_3) {
      GameTimer = _unresolved_3.GameTimer;
    }, function (_unresolved_4) {
      utils = _unresolved_4.utils;
    }, function (_unresolved_5) {
      GameLogic = _unresolved_5.GameLogic;
    }, function (_unresolved_6) {
      GameEndType = _unresolved_6.GameEndType;
      GlobalData = _unresolved_6.GlobalData;
    }, function (_unresolved_7) {
      SoundManager = _unresolved_7.SoundManager;
    }, function (_unresolved_8) {
      PbManager = _unresolved_8.PbManager;
    }, function (_unresolved_9) {
      GameSocket = _unresolved_9.GameSocket;
    }, function (_unresolved_10) {
      UIManager = _unresolved_10.UIManager;
    }, function (_unresolved_11) {
      UIConfig = _unresolved_11.UIConfig;
    }, function (_unresolved_12) {
      CardAction = _unresolved_12.CardAction;
    }, function (_unresolved_13) {
      GameDefine = _unresolved_13.GameDefine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "00929sL+uBD8pfAUZMkSuii", "CardLayer", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'EventTouch', 'instantiate', 'Node', 'Prefab', 'Rect', 'sp', 'Sprite', 'SpriteAtlas', 'SpriteFrame', 'tween', 'UITransform', 'v3', 'Vec2', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("CardLayer", CardLayer = (_dec = ccclass('CardLayer'), _dec2 = property(Prefab), _dec3 = property(SpriteAtlas), _dec4 = property(Node), _dec5 = property(Button), _dec6 = property(Button), _dec7 = property(Button), _dec8 = property(Button), _dec9 = property(_crd && GameTimer === void 0 ? (_reportPossibleCrUseOfGameTimer({
        error: Error()
      }), GameTimer) : GameTimer), _dec10 = property(_crd && CardAction === void 0 ? (_reportPossibleCrUseOfCardAction({
        error: Error()
      }), CardAction) : CardAction), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(SpriteFrame), _dec14 = property(Sprite), _dec15 = property(Sprite), _dec16 = property(Sprite), _dec(_class = (_class2 = class CardLayer extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "cardItem", _descriptor, this);

          _initializerDefineProperty(this, "cardAtlas", _descriptor2, this);

          _initializerDefineProperty(this, "btnLayer", _descriptor3, this);

          _initializerDefineProperty(this, "btnNoOut", _descriptor4, this);

          _initializerDefineProperty(this, "btnHint", _descriptor5, this);

          _initializerDefineProperty(this, "btnOut", _descriptor6, this);

          _initializerDefineProperty(this, "btnDownCard", _descriptor7, this);

          _initializerDefineProperty(this, "gameTimers", _descriptor8, this);

          _initializerDefineProperty(this, "cardActions", _descriptor9, this);

          _initializerDefineProperty(this, "nodeTipNoOut", _descriptor10, this);

          _initializerDefineProperty(this, "picWinTypes", _descriptor11, this);

          _initializerDefineProperty(this, "spWinTypes", _descriptor12, this);

          _initializerDefineProperty(this, "picCardDir", _descriptor13, this);

          _initializerDefineProperty(this, "picHuifuDir", _descriptor14, this);

          _initializerDefineProperty(this, "picOneCard", _descriptor15, this);

          this.baseCardWidth = 0;
          this.baseCardHeight = 0;
          this.handCardsWidth = 0;
          this.handCardsHeight = 0;
          this.outCardsWidth = 0;
          this.outCardsWidthOppsite = 0;
          this.handDistance = 0;
          this.handDistance_V = 0;
          this.cardDistance_V = 49;
          this.handCardPool = [];
          this.handCardsValue = [];
          this.sorthandCardsValue = [];
          this.groupedCards = [];
          this.prevSelected = [];
          this.handCards = [];
          this.handScale = 1;
          this.startHandPosX = 0;
          this.startHandPosX_V = 0;
          this.startOutPosX = 0;
          this.startOutPosXOppiste = 0;
          this.outScaleSelf = 1;
          this.outDistanceSelf = 0;
          this.cardsPosY = 0;
          this.cardPopUpHight = 0;
          this.selectCardValue = [];
          this.selectCardIndex = [];
          this.isClickTwo = false;
          this.preClickTime = 0;
          this.currentClickTime = 0;
          this.outScaleOther = 0.5;
          this.outDistanceOther = 0;
          this.outCards = [[], [], []];
          this.hintCards = [];
          this.hintIndex = 0;
          this.breakTripleIndex = 0;
          this.breakPairIndex = 0;
          this.breakBombIndex = 0;
          this.userHeadPos = [];
          this.halfWinHight = 0;
          this.canTouch = true;
          this.cardPosY = 0;
          this.outCardList = [];
          this.selectedIndexSet = new Set();
          this.dragProcessedSet = new Set();
          this.dragMode = 'none';
          this.draggedSet = new Set();
          this.selectedCardIndexSet = new Set();
        }

        start() {
          this.addEventListeners();
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).on((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.StartHandCard, this, this.onStartHandCard);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).on((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.OutCardTime, this, this.onOutCardTime);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).on((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.HandleBtn, this, this.onHandleBtn);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).on((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.OutCards, this, this.onOutCards);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).on((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.GameFinishCards, this, this.onGameFinishCards);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).on((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.ReconnectOutCard, this, this.onReconnectOutCard);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).on((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.GameFinish, this, this.onGameFinish);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).on((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.UserWin, this, this.onUserWin);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).on((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.NewCircle, this, this.onNewCircle);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).on((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.DownCard, this, this.onDownCard);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).on((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.NoCard, this, this.onNoCard);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).on((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.UpCard, this, this.onUpCard);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).on((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.ReviceCard, this, this.onReviceCard);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).on((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.ReviceCardFinish, this, this.onReviceCardFinish);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).on((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.ReviceCardSuccess, this, this.onReviceCardSuccess);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).on((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.AgainGame, this, this.onAgainGame);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).on((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.GameRestart, this, this.onGameRestart);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).on((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.KickFreeUp, this, this.onKickFreeUp);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).on((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.HaveWindy, this, this.onHaveWindy);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).on((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.ReviceBtn, this, this.onReviceBtn);
        }

        onDestroy() {
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).off((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.StartHandCard, this, this.onStartHandCard);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).off((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.OutCardTime, this, this.onOutCardTime);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).off((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.HandleBtn, this, this.onHandleBtn);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).off((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.OutCards, this, this.onOutCards);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).off((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.GameFinishCards, this, this.onGameFinishCards);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).off((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.ReconnectOutCard, this, this.onReconnectOutCard);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).off((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.GameFinish, this, this.onGameFinish);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).off((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.UserWin, this, this.onUserWin);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).off((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.NewCircle, this, this.onNewCircle);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).off((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.DownCard, this, this.onDownCard);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).off((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.NoCard, this, this.onNoCard);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).off((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.UpCard, this, this.onUpCard);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).off((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.ReviceCard, this, this.onReviceCard);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).off((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.ReviceCardFinish, this, this.onReviceCardFinish);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).off((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.ReviceCardSuccess, this, this.onReviceCardSuccess);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).off((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.AgainGame, this, this.onAgainGame);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).off((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.GameRestart, this, this.onGameRestart);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).off((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.KickFreeUp, this, this.onKickFreeUp);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).off((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.HaveWindy, this, this.onHaveWindy);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).off((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.ReviceBtn, this, this.onReviceBtn);
        } //初始化配置


        init(reset) {
          if (reset === void 0) {
            reset = true;
          }

          this.halfWinHight = (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).getSceneSize(2).height;
          this.baseCardWidth = 84;
          this.baseCardHeight = 109;
          (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).cardInfo.oneCard = false;
          (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).cardInfo.sortCard = false; // if (GlobalData.cardInfo.cardDir) {
          //     this.handScale = 1.5;
          // } else {
          //纵向牌不能铺满,需要缩小点

          this.handScale = 1.3; // }
          //弹起高度

          this.cardPopUpHight = 20; //自己手牌(横)

          this.handDistance = this.baseCardWidth * 0.36 * this.handScale;
          this.handCardsWidth = this.baseCardWidth * this.handScale;
          this.handCardsHeight = this.baseCardHeight * this.handScale; //手牌位置高度 88是底部遮罩高度
          // if (GlobalData.cardInfo.cardDir) {

          this.cardsPosY = -this.halfWinHight + 88 + this.handCardsHeight * 0.5; // } else {
          // this.cardsPosY = -this.halfWinHight + this.handCardsHeight * 0.5;
          // }
          //自己手牌(纵)

          this.handDistance_V = this.baseCardWidth * 0.8 * this.handScale; //自己出牌

          this.outScaleSelf = 1.1;
          this.outDistanceSelf = this.baseCardWidth * 0.35 * this.outScaleSelf;
          this.outCardsWidth = this.baseCardWidth * this.outScaleSelf; //其他玩家

          this.outScaleOther = 1.1;
          this.outDistanceOther = this.handDistance * this.outScaleOther * 0.75;
          this.outCardsWidthOppsite = this.baseCardWidth * this.outScaleOther;

          if (reset) {
            this.reStart();
          } // // 测试
          // this.testSelfHandCard();
          // this.testOtherOuts();
          // this.testAllOtherHandCards();

        }

        reStart() {
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
          (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).cardInfo.oneCard = false;
          (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).cardInfo.sortCard = false;
        }
        /**
         * 测试其他玩家出牌
         */


        testOtherOuts() {
          var tempCard0 = [0x0a, 0x0a, 0x1a, 0x1a, 0x0a, 0x0a, 0x1a, 0x1a];
          this.onEventOutCards({
            viewid: (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).viewId.down,
            cards: tempCard0,
            cardCount: tempCard0.length,
            isAuto: false
          });
          this.onEventOutCards({
            viewid: (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).viewId.up,
            cards: tempCard0,
            cardCount: tempCard0.length,
            isAuto: false
          });
          this.onEventOutCards({
            viewid: (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).viewId.opposite,
            cards: tempCard0,
            cardCount: tempCard0.length,
            isAuto: false
          }); // setTimeout(() => {
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

        testAllOtherHandCards() {
          var tempCard = [0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d, 0x11, 0x12, 0x13, 0x14, 0x15, 0x16, 0x17, 0x18, 0x19, 0x1a, 0x1b, 0x1c, 0x1d, 0x2d];
          this.showOtherHandCards((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).viewId.up, tempCard, tempCard.length);
          this.showOtherHandCards((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).viewId.down, tempCard, tempCard.length);
          this.showOtherHandCards((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).viewId.opposite, tempCard, tempCard.length);
          this.setHandCards(tempCard);
        }
        /**
         * 测试自己手牌
         */


        testSelfHandCard() {
          // this.handCardsValue = [
          //     0x01,0x02,0x03,0x04,0x05,0x06,0x07,0x08,0x09,0x0a,0x0b,0x0c,0x0d,  //方
          //     0x11,0x12,0x13,0x14,0x15,0x16,0x17,0x18,0x19,0x0a,0x1b,0x1c,0x1d,  //梅
          //     0x21,0x22,0x23,0x24,0x25,0x26,0x27,0x28,0x29,0x2a,0x2b,0x2c,0x2d,  //红
          //     0x31,0x32,0x33,0x34,0x35,0x36,0x37,0x38,0x39,0x3a,0x3b,0x3c,0x3d,  //黑
          //     0x4e,0x4f  //  小王,大王
          // ]
          // let cardList = [0x21,0x21,0x21,0x21,0x21,0x21,0x21,0x21,0x21,0x21,0x21,0x21,0x21];
          var cardList = [0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d, 0x01, 0x12, 0x13, 0x14, 0x15, 0x26, 0x17, 0x18, 0x19, 0x1a, 0x3b, 0x1c, 0x1d, // 0x2a,
          // 0x3a,
          // 0x11, 0x12,
          // 0x11, 0x12,
          // 0x21, 0x22,
          // 0x21, 0x22,
          // 0x31, 0x32,
          // 0x31, 0x32,
          // 0x4e, 0x4f,
          0x4e, 0x4f]; // let cardList1 = [
          //     22,24,144,93,111,64,63,43,123,122,133,62,114,54,94,114,121,33,165,22,133,41,81,102,124,94,74
          // ];
          // let cardList = GameLogic.convertCardListS2C(cardList1);
          // console.log("GlobalData.cardInfo.cardDir---> ", GlobalData.cardInfo.cardDir);

          this.setHandCards(cardList, true);
          this.showBtnLayer(true);
          this.showHandleBtn(true, true); // this.delayShowCardDir();

          this.hintCards = [[0x01, 0x01], [0x01, 0x02], [0x01, 0x01, 0x11, 0x11], [0x4e, 0x4e]];
        } //手牌


        setHandCards(value, ani, isUp, isOneCard) {
          var _this = this;

          if (ani === void 0) {
            ani = false;
          }

          if (isUp === void 0) {
            isUp = false;
          }

          if (isOneCard === void 0) {
            isOneCard = false;
          }

          // console.log('初始手牌', value);
          this.delayShowCardDir();
          this.clearHandCards();
          this.handCardsValue = value;

          if (value.length == 0) {
            return;
          }

          var delayTime = 0.06;
          var that = this; //手牌有动画,动画过程不让点击

          if (ani) {
            this.setCanTouch(false);
          } // console.log("len---> ",value.length);


          var sameSizeList;

          if (isOneCard) {
            sameSizeList = this.groupedCards;
          } else {
            // sameSizeList = this.groupedCards;
            if ((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).cardInfo.sortCard) {
              sameSizeList = this.groupedCards;
            } else {
              this.handCardsValue = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
                error: Error()
              }), GameLogic) : GameLogic).sortCardsBySizeDown(this.handCardsValue, this.handCardsValue.length);
              sameSizeList = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
                error: Error()
              }), GameLogic) : GameLogic).getSameCardSizeList(value, (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                error: Error()
              }), GlobalData) : GlobalData).cardInfo.sortCard);
            }
          } // console.log("sameSizeList--> ",sameSizeList.length);


          this.initHandStartPosX_V(sameSizeList.length);
          var idx = 0;
          var tmpIdx = 0; // console.log("---> ",sameSizeList[0][0]);

          var _loop = function _loop(i) {
            var list = sameSizeList[i];

            if ((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).cardInfo.sortCard || (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).cardInfo.oneCard) {
              list.sort((a, b) => (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
                error: Error()
              }), GameLogic) : GameLogic).getCardSize(b) - (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
                error: Error()
              }), GameLogic) : GameLogic).getCardSize(a)); // 🔧 加这一行，组内升序排列（7在前）

              console.log("🧩 sameSizeList", JSON.stringify(sameSizeList));
            }

            var posX = _this.getHandCardPosX_V(i);

            var isliuBomb = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
              error: Error()
            }), GameLogic) : GameLogic).isNBomb(list, 6);
            var iswuBomb = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
              error: Error()
            }), GameLogic) : GameLogic).isNBomb(list, 5);
            var isSameSuitStraight = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
              error: Error()
            }), GameLogic) : GameLogic).isSameSuitStraight(list);
            var issiBomb = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
              error: Error()
            }), GameLogic) : GameLogic).isNBomb(list, 4);
            var isThreeWithTwo = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
              error: Error()
            }), GameLogic) : GameLogic).isThreeWithTwo(list);
            var isStraight = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
              error: Error()
            }), GameLogic) : GameLogic).isStraight(list);
            var isliandui = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
              error: Error()
            }), GameLogic) : GameLogic).isLiandui(list);
            var isWangzha = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
              error: Error()
            }), GameLogic) : GameLogic).isWangzha(list);

            var _loop2 = function _loop2(j) {
              var valueSize = list[j]; // console.log("i----> ", i, valueSize);

              var card = _this.getOneCard();

              card.node.setSiblingIndex(idx);

              var posY = _this.getHandCardPosY_V(j);

              card.node.scale = new Vec3(_this.handScale, _this.handScale, _this.handScale); //手牌位置

              var cardSps = _this.getCardsSprite(valueSize);

              if (cardSps) {
                card.setValue(valueSize, cardSps);

                if (isliuBomb) {
                  card.showBomb(6);
                } else if (iswuBomb) {
                  card.showBomb(5);
                } else if (isSameSuitStraight) {
                  card.showTonghua(true);
                } else if (issiBomb) {
                  card.showBomb(4);
                } else if (isThreeWithTwo) {
                  card.showThreeTwo(true);
                } else if (isStraight) {
                  card.showShunzi(true);
                } else if (isliandui) {
                  card.showliandui(true);
                } else if (isWangzha) {
                  card.showWangza(true);
                }
              }

              if (ani) {
                if (i == sameSizeList.length - 1 && j == 0) {
                  card.setBack(true);
                  tmpIdx = idx;
                }
              }

              var moveFunc = function moveFunc(posX, posY, tmpIdx) {
                if (ani) {
                  card.node.setPosition(v3(0, 0, 0));
                  tween(card.node).delay(i * delayTime).call(() => {
                    if (tmpIdx == idx - 1) {
                      card.setBack(false);
                      that.setCanTouch(true);
                    }
                  }).to(0.1, {
                    position: v3(posX, posY, 0)
                  }).start();
                } else {
                  card.node.setPosition(v3(posX, posY));
                }
              };

              moveFunc(posX, posY, idx);
              card.setIndex(idx);
              card.setBottom(j == 0);
              card.setLastLine(i == sameSizeList.length - 1);
              idx++;

              _this.handCards.push(card);
            };

            for (var j = list.length - 1; j >= 0; j--) {
              _loop2(j);
            }
          };

          for (var i = 0; i < sameSizeList.length; i++) {
            _loop(i);
          } // }

        } //贡牌位置


        getOutCardByViewId(viewId) {
          var posX = 0;
          var posY = 0;

          if (viewId == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).viewId.self) {
            this.initOutStartPosX(1);
            posX = this.getOutPosX(0);
            posY = -40;
          } else if (viewId == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).viewId.opposite) {
            this.initOutStartPosX(1, true);
            posX = this.getOutPosX(0, true);
            posY = this.userHeadPos[viewId].y - 120;
          } else if (viewId == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).viewId.up) {
            posX = this.userHeadPos[viewId].x + 160 + this.outDistanceOther;
            posY = this.userHeadPos[viewId].y;
          } else if (viewId == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).viewId.down) {
            posX = this.userHeadPos[viewId].x - 160 - this.outDistanceOther;
            posY = this.userHeadPos[viewId].y;
          }

          return v3(posX, posY, 0);
        } //贡牌大小


        getOutCardScaleByViewId(viewId) {
          if (viewId == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).viewId.self) {
            return this.outScaleSelf;
          } else if (viewId == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).viewId.opposite) {
            return this.outScaleOther;
          } else if (viewId == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).viewId.up) {
            return this.outScaleOther;
          } else if (viewId == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).viewId.down) {
            return this.outScaleOther;
          }
        } //处理出牌


        dealReconectOutCards(viewid, cardList, count) {
          var tempCards = cardList;
          this.clearOutCards(viewid);

          if (viewid == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).viewId.self) {
            //出牌动作
            this.initOutStartPosX(tempCards.length);

            for (var k = 0; k < tempCards.length; k++) {
              var card = this.getOneCard();
              var posX = this.getOutPosX(k);
              card.setMask(false);
              card.node.setSiblingIndex(k);
              card.node.setScale(this.outScaleSelf, this.outScaleSelf, this.outScaleSelf);
              card.node.setPosition(posX, -45);
              var cardSps = this.getCardsSprite(tempCards[k]);

              if (cardSps) {
                card.setValue(tempCards[k], cardSps);
                this.outCards[viewid].push(card);
              }
            }
          } else if (viewid == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).viewId.opposite) {
            //出牌动作
            this.initOutStartPosX(tempCards.length, true);
            var pos_Y = this.userHeadPos[viewid].y;

            for (var _k = 0; _k < tempCards.length; _k++) {
              var _card = this.getOneCard();

              var _posX = this.getOutPosX(_k, true);

              _card.node.setSiblingIndex(_k);

              _card.node.setScale(this.outScaleOther, this.outScaleOther, this.outScaleOther);

              _card.node.setPosition(_posX, pos_Y - 120, 0);

              var _cardSps = this.getCardsSprite(tempCards[_k]);

              if (_cardSps) {
                _card.setValue(tempCards[_k], _cardSps);

                this.outCards[viewid].push(_card);
              }
            }
          } else {
            var _pos_Y = this.userHeadPos[viewid].y;
            var pos_X = this.userHeadPos[viewid].x;
            var startX = 0;

            if (viewid == 2) {
              //右边
              startX = pos_X - 160 - (count + 1) * this.outDistanceOther;
            } else {
              //左边
              startX = pos_X + 160;
            }

            for (var i = 0; i < count; i++) {
              var _card2 = this.getOneCard();

              _card2.node.setSiblingIndex(i);

              _card2.node.setScale(this.outScaleOther, this.outScaleOther, this.outScaleOther);

              startX += this.outDistanceOther;

              _card2.node.setPosition(startX, _pos_Y, 0);

              var _cardSps2 = this.getCardsSprite(tempCards[i]);

              if (_cardSps2) {
                _card2.setValue(tempCards[i], _cardSps2);

                this.outCards[viewid].push(_card2);
              }
            }
          }
        } //出牌 因为有两副牌,牌值和牌色一样,无法单一通过牌值确定要出那张牌,会出现选的是左边的黑桃5,出的是右边的黑桃5
        //1: 自己出牌需要记录下标,通过下标和牌值确定唯一的牌
        //2: 系统出牌,只要出了就行


        onEventOutCards(jsonData) {
          var viewid = jsonData.viewid; //上轮玩家出过牌,这轮不出,清空已出牌

          if (jsonData.cardCount == 0) {
            this.clearOutCards(viewid);
            return;
          } //测试
          //this.showCardTypeActionByViewId({ viewId: jsonData.viewid, cardType: GameDefine.KIND_CARDS_BOMB_45, cardNum: jsonData.cards.length });


          this.clearOutCards(viewid);
          this.dealOutCards(viewid, jsonData.cards, jsonData.cardCount, jsonData.isAuto);
        }

        //处理出牌
        dealOutCards(viewid, cardList, count, isAuto) {
          var _this2 = this;

          if (isAuto === void 0) {
            isAuto = true;
          }

          //出牌排序
          // let tempCards = GameLogic.getSortCard(cardList);
          var that = this;
          var tempCards = cardList;

          if (viewid == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).viewId.self) {
            (function () {
              // console.log("handcards  --> ",utils.deepCopy(this.handCardsValue));
              // console.log("---> ", this.handCardsValue.length);
              //剩余手牌值
              var tmpInfo = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
                error: Error()
              }), GameLogic) : GameLogic).getRemainCardsByDelete(_this2.handCardsValue, tempCards, false, [], []);
              _this2.handCardsValue = tmpInfo.cards; // console.log("+++> ", this.handCardsValue.length);
              // console.log("handcards 2 --> ",utils.deepCopy(this.handCardsValue));

              if (isAuto) {
                // if (GlobalData.cardInfo.cardDir) {
                //     this.doHandCardPopDown();
                // } else {
                _this2.doHandCardPopDown_V(); // }
                //找到下标


                _this2.selectCardIndex = tmpInfo.idxs;

                if (_this2.selectCardIndex.length <= 1) {
                  console.log("贡牌下标---> ", _this2.selectCardIndex[0]);
                }
              } // console.log("count--> ", tempCards);
              //出牌s
              // if (GlobalData.cardInfo.oneCard || GlobalData.cardInfo.sortCard) {
              //     const outIndexes = new Set(this.selectCardIndex);
              //     for (let i = this.handCards.length - 1; i >= 0; i--) {
              //         const card = this.handCards[i];
              //         if (outIndexes.has(card.getIndex())) {
              //             this.outCards[viewid].push(card);
              //             this.handCards.splice(i, 1);
              //         }
              //     }
              // }
              // else {


              for (var j = 0; j < count; j++) {
                for (var k in _this2.handCards) {
                  if (_this2.handCards[k] && tempCards[j] == _this2.handCards[k].getValue() && _this2.selectCardIndex.indexOf(_this2.handCards[k].getIndex()) != -1) {
                    _this2.outCards[viewid].push(_this2.handCards[k]);

                    _this2.handCards.splice(Number(k), 1);

                    break;
                  }
                }
              } // }
              // console.log("出牌 cnt---> ", utils.deepCopy(this.outCards[viewid].length));


              (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
                error: Error()
              }), GameLogic) : GameLogic).printCardList(tempCards); //出牌动作

              _this2.initOutStartPosX(_this2.outCards[viewid].length);

              for (var _k2 = 0; _k2 < _this2.outCards[viewid].length; _k2++) {
                var posX = _this2.getOutPosX(_k2);

                var card = _this2.outCards[viewid][_k2];
                card.setMask(false);
                card.node.setSiblingIndex(_k2);
                card.node.setScale(_this2.outScaleSelf, _this2.outScaleSelf, _this2.outScaleSelf);
                tween(card.node).to(.15, {
                  position: v3(posX, 80, 0)
                }).start();
              }

              _this2.setCanTouch(false); // if (GlobalData.cardInfo.cardDir) {
              //     //整理手牌
              //     let posY = this.getHandCardPosY();
              //     //实际起始位置
              //     this.initHandStartPosX();
              //     for (let j = 0; j < this.handCards.length; j++) {
              //         let card = this.handCards[j];
              //         card.node.scale = v3(this.handScale, this.handScale, this.handScale);
              //         card.setIndex(j);
              //         //手牌位置
              //         let posX = this.getHandCardPosX(j);
              //         let moveFunc = function (posX: number, tmpIdx: number) {
              //             tween(card.node)
              //                 .delay(0.2)
              //                 .to(0.1, { position: v3(posX, posY, 0) })
              //                 .call(() => {
              //                     if (tmpIdx == that.handCards.length - 1) {
              //                         that.setCanTouch(true);
              //                     }
              //                 })
              //                 .start();
              //         }
              //         moveFunc(posX, j);
              //     }
              // } else {
              // this.handCardsValue = GameLogic.sortCardsBySizeDown(this.handCardsValue, this.handCardsValue.length);


              if (!(_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                error: Error()
              }), GlobalData) : GlobalData).cardInfo.sortCard && !(_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                error: Error()
              }), GlobalData) : GlobalData).cardInfo.oneCard) {
                _this2.handCardsValue = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
                  error: Error()
                }), GameLogic) : GameLogic).sortCardsBySizeDown(_this2.handCardsValue, _this2.handCardsValue.length);
              }

              var sameSizeList;
              console.log("出牌前 groupedCards: ", (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
                error: Error()
              }), utils) : utils).deepCopy(_this2.groupedCards));
              console.log("出牌牌值: ", tempCards);

              if ((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                error: Error()
              }), GlobalData) : GlobalData).cardInfo.oneCard) {
                if (isAuto) {
                  _this2.groupedCards = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
                    error: Error()
                  }), GameLogic) : GameLogic).smartSortCards(_this2.handCardsValue);
                } else {
                  _this2.groupedCards = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
                    error: Error()
                  }), GameLogic) : GameLogic).removeOutCardsFromGrouped(that.groupedCards, tempCards);
                } // this.groupedCards = GameLogic.smartSortCards(this.handCardsValue);
                // this.groupedCards = GameLogic.smartSortCards(this.handCardsValue);


                sameSizeList = _this2.groupedCards;
              } else {
                if ((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                  error: Error()
                }), GlobalData) : GlobalData).cardInfo.sortCard) {
                  if (isAuto) {
                    sameSizeList = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
                      error: Error()
                    }), GameLogic) : GameLogic).getSameCardSizeList(_this2.handCardsValue, (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                      error: Error()
                    }), GlobalData) : GlobalData).cardInfo.sortCard);
                    (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                      error: Error()
                    }), GlobalData) : GlobalData).cardInfo.sortCard = false;
                  } else {
                    _this2.groupedCards = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
                      error: Error()
                    }), GameLogic) : GameLogic).removeOutCardsFromGrouped(_this2.groupedCards, tempCards);
                    sameSizeList = _this2.groupedCards;
                  }
                } else {
                  sameSizeList = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
                    error: Error()
                  }), GameLogic) : GameLogic).getSameCardSizeList(_this2.handCardsValue, (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                    error: Error()
                  }), GlobalData) : GlobalData).cardInfo.sortCard);
                }
              }

              _this2.initHandStartPosX_V(sameSizeList.length);

              var idx = 0;
              var useIdxList = [];

              _this2.setCanTouch(false);

              var _loop3 = function _loop3(i) {
                var list = sameSizeList[i];

                var posX = _this2.getHandCardPosX_V(i);

                var _loop4 = function _loop4(_j) {
                  var valueSize = list[_j];

                  var _loop5 = function _loop5(n) {
                    var card = _this2.handCards[n];

                    if (card.getValue() == valueSize && useIdxList.indexOf(card.getIndex()) == -1) {
                      useIdxList.push(card.getIndex());
                      card.node.setSiblingIndex(idx);

                      var posY = _this2.getHandCardPosY_V(_j);

                      card.node.scale = new Vec3(_this2.handScale, _this2.handScale, _this2.handScale);
                      card.setBottom(_j == 0);
                      card.setLastLine(i == sameSizeList.length - 1);

                      var moveFunc = function moveFunc(posX, posY, idx) {
                        tween(card.node).delay(0.2).to(0.1, {
                          position: v3(posX, posY, 0)
                        }).delay(0.2).call(() => {
                          //必须延迟执行,否则idx重复
                          card.setIndex(idx);

                          if (i == sameSizeList.length - 1 && _j == 0) {
                            that.setCanTouch(true);
                          }
                        }).start();
                      };

                      moveFunc(posX, posY, idx);
                      idx++;
                      return "break";
                    }
                  };

                  for (var n = 0; n < _this2.handCards.length; n++) {
                    var _ret = _loop5(n);

                    if (_ret === "break") break;
                  }
                };

                for (var _j = list.length - 1; _j >= 0; _j--) {
                  _loop4(_j);
                }
              };

              for (var i = 0; i < sameSizeList.length; i++) {
                _loop3(i);
              } // }

            })();
          } else if (viewid == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).viewId.opposite) {
            this.outCardList = [];
            this.outCardList = cardList;

            if ((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).cardInfo.oneCard || (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).cardInfo.sortCard) {
              var hintList = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
                error: Error()
              }), GameLogic) : GameLogic).getHintCards(this.outCardList, this.groupedCards); // this.hintCards = hintList;
            } else {
              var _hintList = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
                error: Error()
              }), GameLogic) : GameLogic).getHintCards(this.outCardList, (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
                error: Error()
              }), GameLogic) : GameLogic).getSameCardSizeList(this.handCardsValue)); // this.hintCards = hintList;

            } // const hintList = GameLogic.getHintCards(this.outCardList, this.groupedCards);
            // this.hintCards = hintList;
            //出牌动作


            this.initOutStartPosX(tempCards.length, true);
            var pos_Y = this.userHeadPos[viewid].y;
            var pos_X = this.userHeadPos[viewid].x;

            for (var k = 0; k < tempCards.length; k++) {
              var card = this.getOneCard();
              var posX = this.getOutPosX(k, true);
              card.node.setSiblingIndex(k);
              card.node.setScale(0, 0, 0);
              card.node.setPosition(pos_X, pos_Y, 0);
              var cardSps = this.getCardsSprite(tempCards[k]);

              if (cardSps) {
                card.setValue(tempCards[k], cardSps);
                this.outCards[viewid].push(card);
              }

              var moveTime = 0.15;
              tween(card.node).parallel(tween().to(moveTime, {
                position: v3(posX, pos_Y - 20, 0)
              }), tween().to(moveTime, {
                scale: v3(this.outScaleOther, this.outScaleOther, this.outScaleOther)
              })).start();
            }
          } else {
            this.outCardList = [];
            this.outCardList = cardList;

            if ((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).cardInfo.oneCard || (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).cardInfo.sortCard) {
              var _hintList2 = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
                error: Error()
              }), GameLogic) : GameLogic).getHintCards(this.outCardList, this.groupedCards); // this.hintCards = hintList;

            } else {
              var _hintList3 = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
                error: Error()
              }), GameLogic) : GameLogic).getHintCards(this.outCardList, (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
                error: Error()
              }), GameLogic) : GameLogic).getSameCardSizeList(this.handCardsValue)); // this.hintCards = hintList;

            }

            var _pos_Y2 = this.userHeadPos[viewid].y;
            var _pos_X = this.userHeadPos[viewid].x;
            var startX = 0;

            if (viewid == 2) {
              //右边
              startX = _pos_X - 160 - (count + 1) * this.outDistanceOther;
            } else {
              //左边
              startX = _pos_X + 160;
            }

            for (var i = 0; i < count; i++) {
              var _card3 = this.getOneCard();

              _card3.node.setSiblingIndex(i);

              _card3.node.setScale(0, 0, 0);

              _card3.node.setPosition(_pos_X, _pos_Y2, 0);

              startX += this.outDistanceOther;

              var _cardSps3 = this.getCardsSprite(tempCards[i]);

              if (_cardSps3) {
                _card3.setValue(tempCards[i], _cardSps3);

                this.outCards[viewid].push(_card3);
                var _moveTime = 0.15;
                tween(_card3.node).parallel(tween().to(_moveTime, {
                  position: v3(startX, _pos_Y2, 0)
                }), tween().to(_moveTime, {
                  scale: v3(this.outScaleOther, this.outScaleOther, this.outScaleOther)
                })).start();
              }
            }
          }
        } //游戏结束后,显示所有玩家手牌(左右两家,一排最多显示9张)


        showOtherHandCards(viewid, cardList, count) {
          var tempCards = cardList;

          if (viewid == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).viewId.opposite) {
            //出牌动作
            this.initOutStartPosX(tempCards.length, true);
            var pos_Y = this.userHeadPos[viewid].y;

            for (var k = 0; k < tempCards.length; k++) {
              var card = this.getOneCard();
              var posX = this.getOutPosX(k, true);
              card.node.setSiblingIndex(k);
              card.node.setScale(this.outScaleOther, this.outScaleOther, this.outScaleOther);
              card.node.setPosition(posX, pos_Y - 120, 0);
              var cardSps = this.getCardsSprite(tempCards[k]);

              if (cardSps) {
                card.setValue(tempCards[k], cardSps);
                this.outCards[viewid].push(card);
              }
            }
          } else {
            var _pos_Y3 = this.userHeadPos[viewid].y;
            var pos_X = this.userHeadPos[viewid].x;
            var startX = 0;
            var tmpCnt = count;
            var lineCnt = 9;
            tmpCnt = tmpCnt >= lineCnt ? lineCnt : tmpCnt;

            if (viewid == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).viewId.down) {
              //右边
              startX = pos_X - 160 - (tmpCnt + 1) * this.outDistanceOther;
            } else {
              //左边
              startX = pos_X + 160;
            }

            var tmpStartX = startX;

            for (var i = 0; i < count; i++) {
              var _card4 = this.getOneCard();

              _card4.node.setSiblingIndex(i);

              _card4.node.setScale(this.outScaleOther, this.outScaleOther, this.outScaleOther);

              startX += this.outDistanceOther;

              _card4.node.setPosition(startX, _pos_Y3, 0);

              if (i == lineCnt - 1 || i == lineCnt * 2 - 1) {
                startX = tmpStartX;
                _pos_Y3 -= 60;
              }

              var _cardSps4 = this.getCardsSprite(tempCards[i]);

              if (_cardSps4) {
                _card4.setValue(tempCards[i], _cardSps4);

                this.outCards[viewid].push(_card4);
              }
            }
          }
        } //排序


        sortAllCards() {
          this.handCardsValue = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
            error: Error()
          }), GameLogic) : GameLogic).sortCardsBySizeDown(this.handCardsValue, this.handCardsValue.length);

          for (var i in this.handCards) {
            var item = this.handCards[i];
            if (!item) return;
            var cardSps = this.getCardsSprite(this.handCardsValue[i]);

            if (cardSps) {
              item.setValue(this.handCardsValue[i], cardSps); //断线情况,发牌时,可能玩家刚好出牌,牌面显示有问题,强制更新

              item.setBack(false); //nzp add

              item.setIndex(Number(i));
            }
          }
        } //获取牌值和牌色图片


        getCardsSprite(paramValue) {
          // console.log("--------牌值", paramValue)
          var color = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
            error: Error()
          }), GameLogic) : GameLogic).getCardColor(paramValue);
          var size = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
            error: Error()
          }), GameLogic) : GameLogic).getValueStr(paramValue);
          var cardName = "" + color + size;
          var cardSp = this.cardAtlas.getSpriteFrame(cardName);
          return cardSp;
        } //生成一张牌


        getOneCard() {
          var card = null;

          if (this.handCardPool.length == 0) {
            card = instantiate(this.cardItem).getComponent(_crd && CardItem === void 0 ? (_reportPossibleCrUseOfCardItem({
              error: Error()
            }), CardItem) : CardItem);
            this.node.addChild(card.node);
          } else {
            card = this.handCardPool[0];
            this.handCardPool.shift();
          }

          card.node.active = true;
          return card;
        } //回收一张牌


        recycleOneCard(paramCard) {
          if (paramCard) {
            paramCard.node.setSiblingIndex(0);
            paramCard.clear();
            paramCard.node.active = false;
            this.handCardPool.push(paramCard);
          }
        } //清理玩家出牌


        clearOutCards(viewid) {
          if (this.outCards[viewid] == null) {
            this.outCards[viewid] = [];
            return;
          }

          for (var i in this.outCards[viewid]) {
            var card = this.outCards[viewid][i];

            if (card) {
              this.recycleOneCard(card);
            }
          }

          this.outCards[viewid] = [];
        } //清理所有玩家出牌


        clearAllOutCards() {
          for (var i = 0; i < (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).MAXPLAYER; i++) {
            this.clearOutCards(i);
          }
        } //清理手牌


        clearHandCards() {
          for (var i in this.handCards) {
            var card = this.handCards[i];

            if (card) {
              this.recycleOneCard(card);
            }
          }

          this.handCards = [];
        } //是否可点击


        getCanTouch() {
          return this.canTouch;
        }

        setCanTouch(type) {
          this.canTouch = type;
        } //*************    监听事件    ************


        addEventListeners() {
          this.node.on(Node.EventType.TOUCH_START, this.onScreenTouchStart, this);
          this.node.on(Node.EventType.TOUCH_MOVE, this.onScreenTouchMove, this);
          this.node.on(Node.EventType.TOUCH_CANCEL, this.onScreenTouchEnd, this);
          this.node.on(Node.EventType.TOUCH_END, this.onScreenTouchEnd, this);
        }

        getLocalPos(event) {
          var globalPos = event.getUILocation(); // Vec2

          var globalVec3 = new Vec3(globalPos.x, globalPos.y, 0); // 转成 Vec3

          var uiTransform = this.node.getComponent(UITransform);
          var localVec3 = uiTransform.convertToNodeSpaceAR(globalVec3); // Vec3 in local

          return new Vec2(localVec3.x, localVec3.y); // 返回 Vec2 更方便使用
        } //触摸开始


        onScreenTouchStart(event) {
          if (!this.getCanTouch()) {
            return;
          }

          if (this.handCards.length == 0) {
            return;
          } // this.dragMode = 'none';
          // this.draggedSet.clear();
          // this.startPos = this.getLocalPos(event);
          // ✅ 判断当前点击区域是否是“旧区域”（选中过的）
          // const pos = this.getLocalPos(event);
          // for (let i = 0; i < this.handCards.length; i++) {
          //     const card = this.handCards[i];
          //     const rect = this.getCardRect(card);
          //     if (this.selectedIndexSet.has(i) && this.isPointInRect(pos, rect)) {
          //         this.selectedCardIndexSet.delete(i);
          //         break;
          //     }
          // }


          var touchPos = event.getUILocation();
          var isTouchCard = false;

          for (var i = this.handCards.length - 1; i >= 0; i--) {
            var card = this.handCards[i];

            if (card.node && card.node.getComponent(UITransform).getBoundingBoxToWorld().contains(touchPos)) {
              // if (GlobalData.cardInfo.cardDir) {
              //     card.setMask(true);
              // } else {
              if (card.isMask()) {
                card.setMask(false);
                this.selectedCardIndexSet.delete(i);
              } else {
                card.setMask(true);
              } // }


              isTouchCard = true;
              break;
            }
          } //连续点击


          if (!this.isClickTwo && !isTouchCard) {
            this.currentClickTime = Date.now();
            var intervalTime = this.currentClickTime - this.preClickTime;

            if (intervalTime < 300 && intervalTime > 50) {
              this.isClickTwo = true;
            }

            this.preClickTime = this.currentClickTime;
          }
        }

        // 在类上维护
        onScreenTouchMove(event) {
          if (!this.getCanTouch()) {
            return;
          }

          var movePos = event.getUILocation();
          var startPos = event.getUIStartLocation();
          var localStartPos = this.worldPos2LocationPos(startPos);
          var localMovePos = this.worldPos2LocationPos(movePos);
          var dis = Vec2.distance(localStartPos, localMovePos);
          if (dis < 6) return; // console.log("移动---------------------> ", dis);
          // if (GlobalData.cardInfo.cardDir) {
          //     for (let i = this.handCards.length - 1; i >= 0; i--) {
          //         const item = this.handCards[i].node;
          //         if (item != null) {
          //             let posX = item.position.x - item.getComponent(UITransform).contentSize.width / 2 * this.handScale;  //左边界点
          //             let posY = item.position.y + item.getComponent(UITransform).contentSize.height / 2 * this.handScale; //上边界点
          //             let posyYB = item.position.y - item.getComponent(UITransform).contentSize.height / 2 * this.handScale //下边界点
          //             if (((posX >= localStartPos.x && posX <= localMovePos.x && startPos.x < movePos.x) //从左向右
          //                 || (posX <= localStartPos.x && posX >= localMovePos.x && startPos.x > movePos.x)) //从右向左
          //                 && (posyYB <= localStartPos.y && localStartPos.y <= posY && posyYB <= localMovePos.y && localMovePos.y <= posY)
          //             ) {//起点和终点 位置在上边界和下边界之间
          //                 this.handCards[i].setMask(true);
          //             }
          //             else {
          //                 this.handCards[i].setMask(false);
          //             }
          //         }
          //     }
          //     //第一张
          //     for (let i = this.handCards.length - 1; i >= 0; i--) {
          //         const card = this.handCards[i];
          //         if (card.node && card.node.getComponent(UITransform).getBoundingBoxToWorld().contains(startPos)) {
          //             card.setMask(true);
          //             break;
          //         }
          //     }
          //     //最后一张
          //     for (let i = this.handCards.length - 1; i >= 0; i--) {
          //         const card = this.handCards[i];
          //         if (card.node && card.node.getComponent(UITransform).getBoundingBoxToWorld().contains(movePos)) {
          //             card.setMask(true);
          //             break;
          //         }
          //     }
          // } else {
          // console.log("value--> ",this.handCards[this.handCards.length - 1].getValue());
          //点击时,也会触发移动
          // const selectedSet = new Set<number>();

          for (var i = this.handCards.length - 1; i >= 0; i--) {
            var item = this.handCards[i].node;

            if (item != null) {
              var posXL = item.position.x - item.getComponent(UITransform).contentSize.width / 2 * this.handScale; //左边界点

              var posXR = item.position.x + item.getComponent(UITransform).contentSize.width / 2 * this.handScale; //右边界点

              var posY = item.position.y + item.getComponent(UITransform).contentSize.height / 2 * this.handScale; //上边界点

              var posyYB = item.position.y - item.getComponent(UITransform).contentSize.height / 2 * this.handScale; //下边界点

              var tmpPosXR = this.handCards[i].getLastLine() ? posXR : posXL + this.handDistance_V; //右边界点

              var tmpPosY = this.handCards[i].getBottom() ? posyYB : posY - this.cardDistance_V; //下边界点
              //向左 向上  当前点纵坐标>下边界点  当前点横坐标>右边界点   牌的上边界点>起始点纵坐标    牌的左边界点<起始点横坐标  

              var leftUp = localStartPos.x >= localMovePos.x && localMovePos.y >= localStartPos.y && localMovePos.y >= tmpPosY && localMovePos.x <= tmpPosXR && posY >= localStartPos.y && posXL <= localStartPos.x; //向左向下

              var leftDown = localStartPos.x >= localMovePos.x && localMovePos.y <= localStartPos.y && localMovePos.y <= posY && localMovePos.x <= tmpPosXR && tmpPosY <= localStartPos.y && posXL <= localStartPos.x; //向右向上

              var rightUp = localStartPos.x <= localMovePos.x && localMovePos.y >= localStartPos.y && localMovePos.y >= tmpPosY && localMovePos.x >= posXL && posY >= localStartPos.y && tmpPosXR >= localStartPos.x; //向右向下

              var rightDown = localStartPos.x <= localMovePos.x && localMovePos.y <= localStartPos.y && localMovePos.y <= posY && localMovePos.x >= posXL && tmpPosY <= localStartPos.y && tmpPosXR >= localStartPos.x;

              if (leftUp || leftDown || rightUp || rightDown) {
                // this.draggedSet.add(i);
                this.handCards[i].setMask(true); // // ✅ 确定拖动模式（第一次触碰时）
                // if (this.dragMode === 'none') {
                //     this.dragMode = this.selectedIndexSet.has(i) ? 'remove' : 'add';
                // }
                // // ✅ 执行选中/取消逻辑
                // if (this.dragMode === 'add') {
                //     this.handCards[i].setMask(true);
                //     this.selectedIndexSet.add(i);
                // } else if (this.dragMode === 'remove') {
                //     this.handCards[i].setMask(false);
                //     this.selectedIndexSet.delete(i);
                // }
                // this.handCards[i].setMask(true);
                // this.selectedCardIndexSet.add(i);
              } else {
                var card = this.handCards[i]; // const rect = this.getCardRect(card);

                if (this.isPointInRect(localMovePos, card.node)) {
                  this.selectedCardIndexSet.delete(i);
                  this.handCards[i].setMask(false); // console.log('在点上');
                } else {
                  if (this.selectedCardIndexSet.has(i)) {
                    this.handCards[i].setMask(true);
                  } else {
                    this.handCards[i].setMask(false);
                  }
                } // if(!this.handCards[i].isSelect) {
                // this.handCards[i].setMask(false);
                // }
                // else {
                // }
                // this.selectedCardIndexSet.delete(i);
                // this.handCards[i].setMask(false);

              }
            }
          } // this.selectedCardIndexSet.forEach(i => {
          //     this.handCards[i].setMask(true);
          // });
          //第一张


          for (var _i = this.handCards.length - 1; _i >= 0; _i--) {
            var _card5 = this.handCards[_i];

            if (_card5.node && _card5.node.getComponent(UITransform).getBoundingBoxToWorld().contains(startPos)) {
              _card5.setMask(true);

              break;
            }
          } //最后一张


          for (var _i2 = this.handCards.length - 1; _i2 >= 0; _i2--) {
            var _card6 = this.handCards[_i2];

            if (_card6.node && _card6.node.getComponent(UITransform).getBoundingBoxToWorld().contains(movePos)) {
              _card6.setMask(true);

              break;
            }
          } // }

        }

        getCardRect(card) {
          var node = card.node;
          var size = node.getComponent(UITransform).contentSize;
          var halfW = size.width * 0.5 * this.handScale;
          var halfH = size.height * 0.5 * this.handScale;
          var pos = node.position;
          var left = pos.x - halfW;
          var right = card.getLastLine() ? pos.x + halfW : left + this.handDistance_V;
          var top = pos.y + halfH;
          var bottom = card.getBottom() ? pos.y - halfH : top - this.cardDistance_V;
          return {
            left,
            right,
            top,
            bottom
          };
        }

        isPointInRect(localMovePos, card) {
          var transform = card.getComponent(UITransform);
          var size = transform.contentSize;
          var pos = card.position;
          var halfW = size.width * 0.5;
          var halfH = size.height * 0.5; // 卡牌在父节点下的边界

          var rect = new Rect(pos.x - halfW, pos.y - halfH, size.width, size.height);
          return rect.contains(localMovePos);
        } //触摸结束


        onScreenTouchEnd(event) {
          if (!this.getCanTouch()) {
            return;
          }

          if (this.handCards.length == 0) {
            return;
          }

          for (var i = 0; i < this.handCards.length; i++) {
            var card = this.handCards[i];

            if (card.isMask()) {
              this.selectedCardIndexSet.add(i);
            }
          }

          this.dragMode = 'none';
          this.draggedSet.clear();
          var selectCards = []; // if (GlobalData.cardInfo.cardDir) {
          //     for (let i = 0; i < this.handCards.length; i++) {
          //         const item = this.handCards[i];
          //         if (item && item.isMask()) {
          //             selectCards.push(item);
          //             item.setMask(false);
          //         }
          //     }
          //     this.doSelectCards(selectCards);
          //     //双击重置,不出牌
          //     if (this.isClickTwo) {
          //         this.checkClickTwo();
          //     } else {
          //         this.updateSelectedCards();
          //     }
          // } else {
          //双击重置,不出牌

          if (this.isClickTwo) {
            this.checkClickTwo_V();
          } else {
            this.updateSelectedCards_V();
          } // }

        } //更新所有选中的牌


        updateSelectedCards() {
          //先清空
          this.selectCardValue = [];
          this.selectCardIndex = [];

          for (var key in this.handCards) {
            var item = this.handCards[key];

            if (item && item.isSelect()) {
              this.selectCardValue.push(item.getValue());
              this.selectCardIndex.push(item.getIndex());
            }
          }
        } //更新所有选中的牌


        updateSelectedCards_V() {
          //先清空
          this.selectCardValue = [];
          this.selectCardIndex = []; // this.selectedCardIndexSet.clear();

          for (var key in this.handCards) {
            var item = this.handCards[key];

            if (item && item.isMask()) {
              this.selectCardValue.push(item.getValue());
              this.selectCardIndex.push(item.getIndex());
            }
          } // this.showCardDir(false);


          var isRecover = false;
          var selectedSet = new Set(this.selectCardValue); // for (let group of this.groupedCards) {
          //     if (group.some(card => selectedSet.has(card))) {
          //         // isRecover = true;
          //         isRecover = true;
          //         break;
          //     }
          // }

          for (var card of selectedSet) {
            if (this.sorthandCardsValue.includes(card)) {
              isRecover = true;
              break;
            }
          }

          if ((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).cardInfo.oneCard) {
            this.picCardDir.node.active = false;
            this.picHuifuDir.node.active = true;
          } else {
            this.picCardDir.node.active = !isRecover;
            this.picHuifuDir.node.active = isRecover;
          } // GlobalData.cardInfo.cardDir = isRecover;
          // this.showCardDir(true);
          // console.log("this.selectCardValue---> ", this.selectCardValue);
          // console.log("this.selectCardIndex---> ", this.selectCardIndex);

        } //连续点击两次 双击


        checkClickTwo() {
          if (this.isClickTwo) {
            this.doHandCardPopDown();
            this.isClickTwo = false; //重置提示索引

            this.selectCardValue = [];
            this.selectCardIndex = [];
            this.hintIndex = 0;
            this.breakPairIndex = 0;
            this.breakTripleIndex = 0;
            this.breakBombIndex = 0;
          }
        }

        checkClickTwo_V() {
          if (this.isClickTwo) {
            this.doHandCardPopDown_V();
            this.isClickTwo = false; //重置提示索引

            this.selectCardValue = [];
            this.selectCardIndex = [];
            this.hintIndex = 0;
            this.breakPairIndex = 0;
            this.breakTripleIndex = 0;
            this.breakBombIndex = 0;
            this.selectedCardIndexSet.clear();
          }
        } //当前选中的牌弹起


        doSelectCards(selectCards) {
          for (var i = 0; i < selectCards.length; i++) {
            var item = selectCards[i];
            var pos = item.node.getPosition();

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
        } //放下选中的牌


        doHandCardPopDown() {
          for (var i = 0; i < this.handCards.length; i++) {
            var item = this.handCards[i];

            if (item.isSelect()) {
              item.setSelect(false);
              var pos = item.node.getPosition();

              if (pos.y >= this.cardPosY + this.cardPopUpHight - 5) {
                item.node.setPosition(pos.x, pos.y - this.cardPopUpHight);
              }
            }
          }

          this.selectCardValue = [];
          this.selectCardIndex = [];
          this.selectedCardIndexSet.clear();
        } //放下选中的牌


        doHandCardPopDown_V() {
          for (var i = 0; i < this.handCards.length; i++) {
            var item = this.handCards[i];

            if (item.isMask()) {
              item.setMask(false);
            }
          }

          this.selectCardValue = [];
          this.selectCardIndex = [];
          this.selectedCardIndexSet.clear();
        } //弹起提示的牌


        showChooseCard(value) {
          var copeValue = (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).deepCopy(value);
          if (value == null || value.length == 0) return;

          if (this.handCards.length != 0) {
            this.selectCardIndex = [];
            var posY = this.getHandCardPosY();

            for (var i in this.handCards) {
              var item = this.handCards[i];

              if (item) {
                if (item.isSelect()) {
                  var isFind = false;

                  for (var j in copeValue) {
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
                  for (var _j2 in copeValue) {
                    if (copeValue[_j2] && copeValue[_j2] == item.getValue() && this.selectCardIndex.indexOf(item.getIndex()) == -1) {
                      item.node.setPosition(item.node.position.x, posY + this.cardPopUpHight);
                      item.setSelect(true);
                      this.selectCardIndex.push(item.getIndex());
                      copeValue.splice(Number(_j2), 1);
                      break;
                    }
                  } //7788 7  牌值牌色一样


                  if (copeValue.length == 0) {
                    break;
                  }
                }
              }
            }
          }
        } //弹起提示的牌


        showChooseCard_V(value) {
          var copeValue = (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).deepCopy(value);
          if (value == null || value.length == 0) return;

          if (this.handCards.length != 0) {
            this.selectCardIndex = [];

            for (var i in this.handCards) {
              var item = this.handCards[i];

              if (item) {
                if (item.isMask()) {
                  var isFind = false;

                  for (var j in copeValue) {
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
                  for (var _j3 in copeValue) {
                    if (copeValue[_j3] && copeValue[_j3] == item.getValue() && this.selectCardIndex.indexOf(item.getIndex()) == -1) {
                      this.selectCardIndex.push(item.getIndex());
                      item.setMask(true);
                      copeValue.splice(Number(_j3), 1);
                      break;
                    }
                  } //7788 7  牌值牌色一样


                  if (copeValue.length == 0) {
                    // console.log("this.selectCardIndex  ", this.selectCardIndex);
                    break;
                  }
                }
              }
            }
          }
        } //anchor(0,0)--> anchor(0.5,0.5)


        worldPos2LocationPos(paramPos) {
          var size = (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).getSceneSize();
          return new Vec2(paramPos.x - size.width / 2 - this.node.position.x, paramPos.y - size.height / 2 - this.node.position.y);
        } //下表不同,手牌高度不同


        getHandCardPosY() {
          return this.cardsPosY;
        }

        getHandCardPosY_V(num) {
          return this.cardsPosY + num * this.cardDistance_V;
        }

        getHandCardPosX(num) {
          return this.startHandPosX + num * this.handDistance;
        }

        getHandCardPosX_V(num) {
          return this.startHandPosX_V + num * this.handDistance_V;
        }

        initHandStartPosX_V(count) {
          var halfPos = (this.handCardsWidth + (count - 1) * this.handDistance_V) * 0.5;
          this.startHandPosX_V = -halfPos + this.handCardsWidth * 0.5;
        } //每行手牌初始位置


        initHandStartPosX() {
          this.initStartPosX(this.handCardsValue.length);
        } //手牌初始位置


        initStartPosX(count) {
          var halfPos = (this.handCardsWidth + (count - 1) * this.handDistance) * 0.5;
          this.startHandPosX = -halfPos + this.handCardsWidth * 0.5;
        } //自己出牌初始位置


        initOutStartPosX(count, isOppsite) {
          if (isOppsite === void 0) {
            isOppsite = false;
          }

          if (isOppsite) {
            var halfPos = (this.outCardsWidthOppsite + (count - 1) * this.outDistanceOther) * 0.5;
            this.startOutPosXOppiste = -halfPos + this.outCardsWidthOppsite * 0.5;
          } else {
            var _halfPos = (this.outCardsWidth + (count - 1) * this.outDistanceSelf) * 0.5;

            this.startOutPosX = -_halfPos + this.outCardsWidth * 0.5;
          }
        }

        getOutPosX(num, isOppsite) {
          if (isOppsite === void 0) {
            isOppsite = false;
          }

          if (isOppsite) {
            return this.startOutPosXOppiste + num * this.outDistanceOther;
          } else {
            return this.startOutPosX + num * this.outDistanceSelf;
          }
        } //不出


        onBtnNoOut() {
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).playClick();
          this.hideAllTime(); // if (GlobalData.cardInfo.cardDir) {
          //     this.doHandCardPopDown();
          // } else {

          this.doHandCardPopDown_V(); // }

          this.showHandleBtn();
          var sendBuffer = (_crd && PbManager === void 0 ? (_reportPossibleCrUseOfPbManager({
            error: Error()
          }), PbManager) : PbManager).instance.sendMsg((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).C2S_Event.NoOutCards, null);
          (_crd && GameSocket === void 0 ? (_reportPossibleCrUseOfGameSocket({
            error: Error()
          }), GameSocket) : GameSocket).send(sendBuffer);
        } //提示


        onBtnHint() {
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).playClick(); // if (GlobalData.cardInfo.cardDir) {
          //     this.doHandCardPopDown();
          // } else {

          this.doHandCardPopDown_V(); // }

          this.selectCardValue = [];
          this.selectedCardIndexSet.clear();

          if (this.hintCards.length == 0) {
            (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
              error: Error()
            }), UIManager) : UIManager).Instace.showUI({
              path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
                error: Error()
              }), UIConfig) : UIConfig).MessageHintKey,
              data: "没有大过的牌"
            });
            return;
          }

          if ((this.outCardList.length == 1 || this.outCardList.length == 3) && ((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).cardInfo.oneCard || (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).cardInfo.sortCard)) {
            var netHint = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
              error: Error()
            }), GameLogic) : GameLogic).getHintCards(this.outCardList, this.groupedCards);

            if (netHint.length == 0) {
              (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
                error: Error()
              }), UIManager) : UIManager).Instace.showUI({
                path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
                  error: Error()
                }), UIConfig) : UIConfig).MessageHintKey,
                data: "没有大过的牌"
              });
              return;
            }

            this.selectCardValue = netHint[this.hintIndex];
            this.hintIndex++;

            if (this.hintIndex == netHint.length) {
              this.hintIndex = 0;
            } // const grouped = this.groupedCards;
            // let found = false;
            // // 排序后的 hint 列表，不影响原始数据
            // const sortedHints = [...this.hintCards].sort((a, b) => a.length - b.length);
            // function isSameArray(a: number[], b: number[]): boolean {
            //     if (a.length !== b.length) return false;
            //     for (let i = 0; i < a.length; i++) {
            //         if (a[i] !== b[i]) return false;
            //     }
            //     return true;
            // }
            // const totalHints = sortedHints.length;
            // for (let i = 0; i < totalHints; i++) {
            //     const index = (this.hintIndex + i) % totalHints;
            //     const hint = sortedHints[index];
            //     for (let group of grouped) {
            //         if (isSameArray(hint, group)) {
            //             this.selectCardValue = hint;
            //             this.hintIndex = (index + 1) % totalHints;
            //             found = true;
            //             break;
            //         }
            //     }
            //     if (found) break;
            // }
            // // ✅ 第二阶段：拆对子（仅当 hint 是单张）
            // const hintRaw = this.hintCards[this.hintIndex]; // 原始 hint（不排序）
            // if (!found && hintRaw?.length === 1) {
            //     const hintCard = hintRaw[0];
            //     const hintSize = GameLogic.getCardSize(hintCard);
            //     const pairs = grouped
            //         .filter(g => g.length === 2 && GameLogic.getCardSize(g[0]) >= hintSize)
            //         .sort((a, b) => GameLogic.getCardSize(a[0]) - GameLogic.getCardSize(b[0]));
            //     if (pairs.length > 0) {
            //         const pairGroup = pairs[this.breakPairIndex % pairs.length];
            //         this.selectCardValue = [pairGroup[0]];
            //         this.breakPairIndex++;
            //         found = true;
            //     }
            // }
            // // // ✅ 4. 拆炸弹、五炸、六炸
            // if (!found) {
            //     const bombs = grouped.filter(g => g.length >= 4);
            //     if (bombs.length > 0) {
            //         const bomb = bombs[this.breakBombIndex % bombs.length];
            //         this.selectCardValue = [bomb[0]];
            //         this.breakBombIndex++;
            //         found = true;
            //     }
            // }
            // if (this.hintIndex >= this.hintCards.length) {
            //     this.hintIndex = 0;
            // }

          } else {
            if (this.outCardList.length == 1) {
              var sameSizeList = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
                error: Error()
              }), GameLogic) : GameLogic).getSameCardSizeList(this.handCardsValue);

              var _netHint = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
                error: Error()
              }), GameLogic) : GameLogic).getHintCards(this.outCardList, this.hintCards);

              if (_netHint.length == 0) {
                (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
                  error: Error()
                }), UIManager) : UIManager).Instace.showUI({
                  path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
                    error: Error()
                  }), UIConfig) : UIConfig).MessageHintKey,
                  data: "没有大过的牌"
                });
                return;
              }

              this.selectCardValue = _netHint[this.hintIndex];
              this.hintIndex++;

              if (this.hintIndex == _netHint.length) {
                this.hintIndex = 0;
              }
            } else {
              this.selectCardValue = this.hintCards[this.hintIndex];
              this.hintIndex++;

              if (this.hintIndex == this.hintCards.length) {
                this.hintIndex = 0;
              }
            }
          }

          this.showChooseCard_V(this.selectCardValue); // }
        } //出牌


        onBtnOut() {
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).playClick(); // console.log("this.selectCardValue.length--> ", this.selectCardValue.length);

          if (this.selectCardValue.length > 0) {
            var _cards = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
              error: Error()
            }), GameLogic) : GameLogic).convertCardListC2S(this.selectCardValue);

            console.log("cards---> ", _cards);
            var baseInfo = GameMsg.UserSendCard.create({
              cards: (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
                error: Error()
              }), utils) : utils).toJson(_cards)
            });
            var baseBuffer = GameMsg.UserSendCard.encode(baseInfo).finish();
            var sendBuffer = (_crd && PbManager === void 0 ? (_reportPossibleCrUseOfPbManager({
              error: Error()
            }), PbManager) : PbManager).instance.sendMsg((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).C2S_Event.OutCards, baseBuffer);
            (_crd && GameSocket === void 0 ? (_reportPossibleCrUseOfGameSocket({
              error: Error()
            }), GameSocket) : GameSocket).send(sendBuffer);
          } else {
            (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
              error: Error()
            }), UIManager) : UIManager).Instace.showUI({
              path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
                error: Error()
              }), UIConfig) : UIConfig).MessageHintKey,
              data: "请选择要出的牌"
            });
          } //测试
          // this.onEventOutCards({ viewid: 1, cards: this.selectCardValue, cardCount: this.selectCardValue.length, isAuto: false });
          // //测试
          // let testList = [0x21, 0x21, 0x01, 0x01, 0x11, 0x11, 0x31, 0x31];
          // this.onEventOutCards({ viewid: 1, cards: testList, cardCount: testList.length, isAuto: true });
          // this.showBtnLayer(false);

        } //回贡


        onBtnDownCard() {
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).playClick();

          if (this.selectCardValue.length == 0) {
            (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
              error: Error()
            }), UIManager) : UIManager).Instace.showUI({
              path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
                error: Error()
              }), UIConfig) : UIConfig).MessageHintKey,
              data: "请选择回贡的牌"
            });
            return;
          }

          if (this.selectCardValue.length > 1) {
            (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
              error: Error()
            }), UIManager) : UIManager).Instace.showUI({
              path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
                error: Error()
              }), UIConfig) : UIConfig).MessageHintKey,
              data: "只能选择一张牌回贡"
            });
            return;
          }

          if (this.selectCardValue.length == 1) {
            var cards = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
              error: Error()
            }), GameLogic) : GameLogic).convertCardListC2S(this.selectCardValue)[0];
            var baseInfo = GameMsg.Gong.create({
              card: cards
            });
            var baseBuffer = GameMsg.Gong.encode(baseInfo).finish();
            var sendBuffer = (_crd && PbManager === void 0 ? (_reportPossibleCrUseOfPbManager({
              error: Error()
            }), PbManager) : PbManager).instance.sendMsg((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).C2S_Event.RebackCard, baseBuffer);
            (_crd && GameSocket === void 0 ? (_reportPossibleCrUseOfGameSocket({
              error: Error()
            }), GameSocket) : GameSocket).send(sendBuffer);
          }
        } //横排/纵排


        onBtnCardDir() {
          //新优化部分
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).playClick();
          var selected = (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).deepCopy(this.selectCardValue);

          if (!selected || selected.length === 0) {
            (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
              error: Error()
            }), UIManager) : UIManager).Instace.showUI({
              path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
                error: Error()
              }), UIConfig) : UIConfig).MessageHintKey,
              data: "请选择要理牌的牌组"
            });
            return;
          }

          var cardType = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
            error: Error()
          }), GameLogic) : GameLogic).getCardType(selected);

          if (cardType === (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
            error: Error()
          }), GameDefine) : GameDefine).KIND_CARDS_ERROR) {
            var feijiType = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
              error: Error()
            }), GameLogic) : GameLogic).getCardTypeByFeiji(selected);

            if (feijiType === (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
              error: Error()
            }), GameDefine) : GameDefine).KIND_CARDS_ERROR) {
              var lianduiType = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
                error: Error()
              }), GameLogic) : GameLogic).getCardTypeByLiandui(selected);

              if (lianduiType === (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
                error: Error()
              }), GameDefine) : GameDefine).KIND_CARDS_ERROR) {
                (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
                  error: Error()
                }), UIManager) : UIManager).Instace.showUI({
                  path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
                    error: Error()
                  }), UIConfig) : UIConfig).MessageHintKey,
                  data: "不是合法的牌型"
                });
                return;
              }
            }
          }

          if (this.outCardList.length != 0) {
            var hintList = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
              error: Error()
            }), GameLogic) : GameLogic).getHintCards(this.outCardList, this.groupedCards); // this.hintCards = hintList;
          } // ✅ 将新选中的牌追加进理牌列表（保持顺序，防止重复）


          for (var card of selected) {
            if (!this.sorthandCardsValue.includes(card)) {
              this.sorthandCardsValue.push(card);
            }
          } // ✅ 理牌处理


          console.log("🟡 当前传入 selected 是：", JSON.stringify(this.sorthandCardsValue));
          var selectedPoints = selected.map(card => (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
            error: Error()
          }), GameLogic) : GameLogic).getCardSize(card));
          console.log("🟡 当前传入的点数：", selectedPoints);
          var uniqueSelected = [...new Set(selected)];
          console.log("🟡 当前传入去重后的 selected：", uniqueSelected);
          this.groupedCards = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
            error: Error()
          }), GameLogic) : GameLogic).moveSelectedCardsToBack(this.handCardsValue, selected, this.prevSelected, // <== 关键：传入前次理牌
          this.groupedCards);
          console.log("✅ groupedCards", JSON.stringify(this.groupedCards));
          (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).cardInfo.sortCard = true;
          this.picHuifuDir.node.active = true;
          this.picCardDir.node.active = false; // ✅ 更新手牌

          this.handCardsValue = this.groupedCards.flat(); // 👉 保证 handCards 顺序与 handCardsValue 一致

          var newHandCards = [];
          var used = new Array(this.handCards.length).fill(false);

          for (var i = 0; i < this.handCardsValue.length; i++) {
            var value = this.handCardsValue[i];

            for (var j = 0; j < this.handCards.length; j++) {
              if (!used[j] && this.handCards[j].getValue() === value) {
                used[j] = true;
                this.handCards[j].setIndex(i); // 重设 index

                newHandCards.push(this.handCards[j]);
                break;
              }
            }
          }

          this.handCards = newHandCards; // ⚠️ 顺序彻底

          this.setHandCards(this.handCardsValue); // ✅ 更新 prevSelected 为这次选中的

          this.prevSelected = (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).deepCopy(selected); // ✅ 清除选中状态

          this.selectCardValue = [];
          this.selectCardIndex = [];
          this.selectedCardIndexSet.clear();
        }

        onBtnHuiFu() {
          // 清除理牌记录
          (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).cardInfo.oneCard = false;
          this.sorthandCardsValue = [];
          this.groupedCards = [];
          (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).cardInfo.sortCard = false;
          this.setHandCards(this.handCardsValue); // 清除选中

          this.selectCardValue = [];
          this.selectCardIndex = [];
          this.prevSelected = [];
          this.selectedCardIndexSet.clear();
          this.picHuifuDir.node.active = false;
          this.picCardDir.node.active = true;
        }

        onBtnOneCardDir() {
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).playClick();
          this.selectedCardIndexSet.clear();

          if ((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).cardInfo.oneCard) {
            // 清除理牌记录
            (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).cardInfo.oneCard = false;
            this.sorthandCardsValue = [];
            this.groupedCards = [];
            (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).cardInfo.sortCard = false;
            this.setHandCards(this.handCardsValue); // 清除选中

            this.selectCardValue = [];
            this.selectCardIndex = [];
            this.prevSelected = [];
          } else {
            if (this.handCardsValue.length <= 0) {
              (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
                error: Error()
              }), UIManager) : UIManager).Instace.showUI({
                path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
                  error: Error()
                }), UIConfig) : UIConfig).MessageHintKey,
                data: "无手牌,不能切换!"
              });
              return;
            }

            if (!(_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
              error: Error()
            }), GameLogic) : GameLogic).hasNaturalFormedGroups(this.handCardsValue)) {
              (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
                error: Error()
              }), UIManager) : UIManager).Instace.showUI({
                path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
                  error: Error()
                }), UIConfig) : UIConfig).MessageHintKey,
                data: "没有理牌方案"
              });
              return;
            }

            if (this.outCardList.length != 0) {
              var hintList = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
                error: Error()
              }), GameLogic) : GameLogic).getHintCards(this.outCardList, this.groupedCards); // this.hintCards = hintList;
            }

            (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).cardInfo.oneCard = true;
            this.picHuifuDir.node.active = true;
            this.picCardDir.node.active = false;
            console.log("🟡 当前传入 handCardsValue 是：", JSON.stringify(this.handCardsValue)); // this.groupedCards = GameLogic.autoSortCards(this.handCardsValue);

            this.groupedCards = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
              error: Error()
            }), GameLogic) : GameLogic).smartSortCards(this.handCardsValue);
            console.log("✅ groupedCards", JSON.stringify(this.groupedCards));
            this.handCardsValue = this.groupedCards.flat(); // 👉 保证 handCards 顺序与 handCardsValue 一致

            var newHandCards = [];
            var used = new Array(this.handCards.length).fill(false);

            for (var i = 0; i < this.handCardsValue.length; i++) {
              var value = this.handCardsValue[i];

              for (var j = 0; j < this.handCards.length; j++) {
                if (!used[j] && this.handCards[j].getValue() === value) {
                  used[j] = true;
                  this.handCards[j].setIndex(i); // 重设 index

                  newHandCards.push(this.handCards[j]);
                  break;
                }
              }
            }

            this.handCards = newHandCards; // ⚠️ 顺序彻底同步

            this.setHandCards(this.handCardsValue, false, false, true);
          }
        }

        smartSetHandCards(sortedCards) {
          this.delayShowCardDir();
          this.clearHandCards();
          this.handCardsValue = sortedCards; // 按照你自己理牌结果，每个组纵向一列

          var sameSizeList = [];
          var i = 0;

          while (i < sortedCards.length) {
            var group = [sortedCards[i]];
            var currRank = sortedCards[i] % 16; // 连续相同 rank 放一列

            for (var j = i + 1; j < sortedCards.length; j++) {
              var nextRank = sortedCards[j] % 16;

              if (nextRank === currRank) {
                group.push(sortedCards[j]);
              } else {
                break;
              }
            }

            sameSizeList.push(group);
            i += group.length;
          }

          this.initHandStartPosX_V(sameSizeList.length);
          var idx = 0;

          for (var _i3 = 0; _i3 < sameSizeList.length; _i3++) {
            var col = sameSizeList[_i3]; // 一列内的牌

            var posX = this.getHandCardPosX_V(_i3);

            for (var _j4 = col.length - 1; _j4 >= 0; _j4--) {
              var value = col[_j4];
              var card = this.getOneCard();
              card.node.setSiblingIndex(idx);
              var posY = this.getHandCardPosY_V(_j4);
              card.node.scale = new Vec3(this.handScale, this.handScale, this.handScale);
              var cardSps = this.getCardsSprite(value);

              if (cardSps) {
                card.setValue(value, cardSps);
              }

              card.node.setPosition(v3(posX, posY));
              card.setIndex(idx);
              card.setBottom(_j4 === 0);
              card.setLastLine(_i3 === sameSizeList.length - 1);
              this.handCards.push(card);
              idx++;
            }
          }
        } ////////////////头像////////////////


        setUserPosition(headPos) {
          this.userHeadPos = headPos;
        } //倒计时


        showTime(viewId, leftTime, updatePos) {
          if (updatePos === void 0) {
            updatePos = false;
          }

          if ((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).viewId.up < 0 || viewId > (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).viewId.opposite) {
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
          this.gameTimers[viewId].setFunc(() => {});
        } //隐藏所有倒计时


        hideAllTime() {
          for (var i = 0; i < this.gameTimers.length; i++) {
            this.gameTimers[i].hide();
          }
        } //更新自己倒计时位置


        updateBtnLayerPos(viewId, updatePos) {
          if (viewId == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).viewId.self) {
            //贡牌倒计时和贡牌重叠了,贡牌时动态调整位置
            var pos = this.btnLayer.getPosition();

            if (updatePos) {
              this.btnLayer.setPosition(pos.x, 60);
            } else {
              this.btnLayer.setPosition(pos.x, -50);
            }
          }
        } //隐藏所有动画


        hideAllCardTypeAction() {
          for (var i = 0; i < this.cardActions.length; i++) {
            var elements = this.cardActions[i];

            for (var j = 0; j < elements.node.children.length; j++) {
              var e = elements.node.children[j];

              if (e.getComponent(sp.Skeleton)) {
                e.active = false;
                e.getComponent(sp.Skeleton).loop = false;
              }
            }

            elements.node.active = false;
          }
        } //木板,钢板等动画


        showCardTypeActionByViewId(data) {
          if (data.cardType <= (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
            error: Error()
          }), GameDefine) : GameDefine).KIND_CARDS_2) {
            return;
          }

          this.cardActions[data.viewId].node.active = true;
          this.cardActions[data.viewId].playAction(data);
        } //不出提示


        showNoOut(viewId, type) {
          if (this.nodeTipNoOut[viewId].active != type) {
            this.nodeTipNoOut[viewId].active = type;
          }
        } //隐藏所有不出提示


        hideAllNoOut() {
          for (var i = 0; i < this.nodeTipNoOut.length; i++) {
            var e = this.nodeTipNoOut[i];
            e.active = false;
          }
        } ////////////////出牌,提示,不出////////////////


        showHandleBtn(isOut, isHint, isNoOut) {
          if (isOut === void 0) {
            isOut = false;
          }

          if (isHint === void 0) {
            isHint = false;
          }

          if (isNoOut === void 0) {
            isNoOut = false;
          }

          this.btnOut.node.active = isOut;
          this.btnHint.node.active = isHint;
          this.btnNoOut.node.active = isNoOut;
          this.btnDownCard.node.active = false;
        }
        /**
         * 上贡,回贡
         */


        showUpDownCardBtn(isDown) {
          if (isDown === void 0) {
            isDown = false;
          }

          this.btnOut.node.active = false;
          this.btnHint.node.active = false;
          this.btnNoOut.node.active = false;
          this.btnDownCard.node.active = isDown;
        }

        showBtnLayer(show) {
          this.btnLayer.active = show;

          if (!show) {
            this.showHandleBtn();
          }
        }

        showCardDir(show) {
          this.picCardDir.node.active = show;
          this.picOneCard.node.active = show;
          this.picHuifuDir.node.active = (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).cardInfo.oneCard;

          if (show) {
            // if (GlobalData.cardInfo.sortCard) {
            //     this.picCardDir.node.active = false;
            //     this.picHuifuDir.node.active = true;
            // }
            // else {
            if ((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).cardInfo.oneCard) {
              this.picCardDir.node.active = false;
              this.picHuifuDir.node.active = true;
            } else {
              this.picCardDir.node.active = true;
              this.picHuifuDir.node.active = false;
            } // }

          } // if (show) {
          //     this.picCardDir.spriteFrame = this.spCardDirs[Number(!GlobalData.cardInfo.cardDir)];
          // }

        }

        delayShowCardDir() {
          tween(this.picCardDir.node).delay(2).call(() => {
            this.showCardDir(true);
          }).start();
        } /////////////////////////////////////////////////////////////////////////
        ///////通信相关
        /////////////////////////////////////////////////////////////////////////
        //手牌


        onStartHandCard(data) {
          (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).cardInfo.levelCard = (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).keyLevelCards[data.level];
          console.log("onStartHandCard----> ", data);
          (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).cardInfo.time = data.time;
          (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).cardInfo.num = data.num;
          (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).cardInfo.maxnum = data.maxnum;
          (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).cardInfo.isMy = data.isMy == 1;
          (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).cardInfo.curRate = data.num + "/" + data.maxnum;
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).send((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.UpdateLevelCard, true);
          this.setHandCards((_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
            error: Error()
          }), GameLogic) : GameLogic).convertCardListS2C(data.cards), data.isOut >= 0, false, (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).cardInfo.oneCard);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).send((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.LeftCardsBg, {
            showOther: true,
            showSelf: true,
            selfCnt: this.handCardsValue.length
          });
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).send((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.KangGong, true, 0, 0);
        } //出牌时间


        onOutCardTime(data) {
          // console.log('onOutCardTime---> ', data);
          var viewId = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
            error: Error()
          }), GameLogic) : GameLogic).getUserViewIdById(data.id);
          this.showBtnLayer(true);
          this.clearOutCards(viewId);
          this.showNoOut(viewId, false);
          this.showTime(viewId, data.time);
        } //按钮


        onHandleBtn(data) {
          // console.log("onHandleBtn---> ", data);
          //每次重置提示
          this.hintIndex = 0;
          this.breakPairIndex = 0;
          this.breakTripleIndex = 0;
          this.breakBombIndex = 0;
          this.showBtnLayer(true);
          this.showHandleBtn(Boolean(data.isSend), Boolean(data.isHit), Boolean(data.isNot));

          if (data.hitCards && data.hitCards.length > 0) {
            // if (!GlobalData.cardInfo.oneCard) {
            this.hintCards = [];
            var hintCards = [];

            for (var i = 0; i < data.hitCards.length; i++) {
              var sameSizeList = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
                error: Error()
              }), GameLogic) : GameLogic).convertCardListS2C(data.hitCards[i].card);
              var handcardsValue = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
                error: Error()
              }), GameLogic) : GameLogic).sortCardsBySizeDown(sameSizeList, sameSizeList.length);
              var hintCard = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
                error: Error()
              }), GameLogic) : GameLogic).getSameCardSizeList(handcardsValue, false);
              hintCards.push(hintCard.flat()); // var sameSizeList = GameLogic.sortCardsBySizeDown(this.handCardsValue, this.handCardsValue.length);
              // sameSizeList = GameLogic.getSameCardSizeList(value);
              // hintCards.push(GameLogic.convertCardListS2C(data.hitCards[i].card));
            }

            (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
              error: Error()
            }), GameLogic) : GameLogic).printCardDetails(hintCards, true);
            this.hintCards = hintCards; // if (this.outCardList.length != 0) {
            //     if (GlobalData.cardInfo.oneCard || GlobalData.cardInfo.sortCard) {
            //         const hintList = GameLogic.getHintCards(this.outCardList, this.groupedCards);
            //         this.hintCards = hintList;
            //     }
            //     else {
            //         const hintList = GameLogic.getHintCards(this.outCardList, GameLogic.getSameCardSizeList(this.handCardsValue));
            //         this.hintCards = hintList;
            //     }
            // }
            //剔除提示牌一样的数据 例如:两个黑桃8,只保留一个

            this.hintCards = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
              error: Error()
            }), GameLogic) : GameLogic).getOnlyValueList(this.hintCards); //     console.log('服务器发过来的>>>', this.hintCards);
            // }
            // else {
            // const hintList: number[][] = [];
            // // 从右往左找散牌（length === 1）
            // for (let i = this.groupedCards.length - 1; i >= 0; i--) {
            //     const group = this.groupedCards[i];
            //     if (group.length === 1) {
            //         hintList.push(group);
            //     }
            // }
            // // 再从右往左找对子（不拆三条）
            // for (let i = this.groupedCards.length - 1; i >= 0; i--) {
            //     const group = this.groupedCards[i];
            //     if (group.length === 2) {
            //         hintList.push([group[0]]);
            //     }
            // }
            // this.hintCards = hintList;
            // this.hintCards = GameLogic.getOnlyValueList(this.hintCards);
            // console.log('自己排的>>>', this.hintCards);
            // }
            // this.hintCards.sort((a, b) => {
            //     // 单张优先
            //     if (a.length === 1 && b.length > 1) return -1;
            //     if (a.length > 1 && b.length === 1) return 1;
            //     // 点数小的优先
            //     const aSize = GameLogic.getCardSize(a[0]);
            //     const bSize = GameLogic.getCardSize(b[0]);
            //     return aSize - bSize;
            // });
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
        } //游戏结束给玩家剩余手牌


        onGameFinishCards(datas) {
          console.log("游戏结束玩家剩余手牌--> ", datas);
          this.clearAllOutCards();
          this.hideAllTime();
          this.hideAllNoOut();
          this.showBtnLayer(false);
          (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).cardInfo.oneCard = false;
          (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).cardInfo.sortCard = false; //不包括自己的

          for (var i = 0; i < datas.list.length; i++) {
            var tmpInfo = datas.list[i];
            var viewId = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
              error: Error()
            }), GameLogic) : GameLogic).getUserViewIdById(tmpInfo.id);

            if (viewId != (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).viewId.self) {
              var cards = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
                error: Error()
              }), GameLogic) : GameLogic).convertCardListS2C(tmpInfo.cards);
              this.showOtherHandCards(viewId, cards, cards.length);
            }
          }
        } //断线已出的牌


        onReconnectOutCard(data) {
          console.log("断线已出的牌---> ", data);
          (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).cardInfo.oneCard = false;
          (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).cardInfo.sortCard = false;
          var viewId = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
            error: Error()
          }), GameLogic) : GameLogic).getUserViewIdById(data.id); //1 出牌 0不出

          if (Boolean(data.isSend)) {
            var cards = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
              error: Error()
            }), GameLogic) : GameLogic).convertCardListS2C(data.cards); //sendType: 1自己出牌 2系统出牌

            this.dealReconectOutCards(viewId, cards, cards.length);
          } else {
            this.showNoOut(viewId, true);
          }
        } //出牌


        onOutCards(data) {
          var viewId = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
            error: Error()
          }), GameLogic) : GameLogic).getUserViewIdById(data.id);

          if (viewId == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).viewId.self) {
            this.showBtnLayer(false); // console.log("onOutCards--> ", data);
          } else {
            this.hideAllTime();
          } //1 出牌 0不出


          if (Boolean(data.isSend)) {
            var cards = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
              error: Error()
            }), GameLogic) : GameLogic).convertCardListS2C(data.cards);

            if (viewId == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).viewId.self) {
              if (this.outCardList.length != 0 && this.hintCards.length != 0) {
                //对方出牌了,并有提示牌
                if (data.sendType == 2) {
                  //系统出牌
                  var grouped = this.groupedCards;
                  var found = false;

                  function isSameArray(a, b) {
                    if (a.length !== b.length) return false;

                    for (var i = 0; i < a.length; i++) {
                      if (a[i] !== b[i]) return false;
                    }

                    return true;
                  }

                  var totalHints = this.hintCards.length;

                  for (var i = 0; i < totalHints; i++) {
                    // const index = (this.hintIndex + i) % totalHints;
                    var hint = this.hintCards[i];

                    for (var group of grouped) {
                      if (isSameArray(hint, group)) {
                        cards = hint; // this.selectCardValue = hint;
                        // this.hintIndex = (index + 1) % totalHints; // 下一次从这里继续

                        found = true;
                        break;
                      }
                    }

                    if (found) break;
                  }
                }
              } else {
                if (this.outCardList.length == 0 && this.groupedCards.length != 0) {
                  if ((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                    error: Error()
                  }), GlobalData) : GlobalData).cardInfo.oneCard || (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                    error: Error()
                  }), GlobalData) : GlobalData).cardInfo.sortCard) {
                    cards = this.groupedCards[this.groupedCards.length - 1];
                  }
                }
              }
            } // if (viewId == GlobalData.viewId.self && this.outCardList.length != 0) {
            //     if (GlobalData.cardInfo.oneCard || GlobalData.cardInfo.sortCard) {
            //         // if (data.sendType == 2) { //系统出牌
            //         //     this.handCardsValue = GameLogic.sortCardsBySizeDown(this.handCardsValue, this.handCardsValue.length);
            //         //     const hintList = GameLogic.getHintCards(this.outCardList, GameLogic.getSameCardSizeList(this.handCardsValue));
            //         //     if (hintList.length != 0) {
            //         //         cards = hintList[0];
            //         //     }
            //         // }
            //         // else {
            //         const hintList = GameLogic.getHintCards(this.outCardList, this.groupedCards);
            //         if (hintList.length != 0) {
            //             cards = hintList[0];
            //         }
            //         // }
            //     }
            //     else {
            //         // if (data.sendType == 2) {
            //         this.handCardsValue = GameLogic.sortCardsBySizeDown(this.handCardsValue, this.handCardsValue.length);
            //         const hintList = GameLogic.getHintCards(this.outCardList, GameLogic.getSameCardSizeList(this.handCardsValue));
            //         if (hintList.length != 0) {
            //             cards = hintList[0];
            //         }
            //         // }
            //     }
            // }
            // else {
            //     if (viewId == GlobalData.viewId.self) {
            //         if(this.groupedCards.length != 0) {
            //             cards = this.groupedCards[this.groupedCards.length - 1];
            //         }
            //         else {
            //             cards = GameLogic.getSameCardSizeList(this.handCardsValue)[0];
            //         }
            //     }
            // }
            //sendType: 1自己出牌 2系统出牌


            this.onEventOutCards({
              viewid: viewId,
              cards: cards,
              cardCount: cards.length,
              isAuto: data.sendType == 2
            });
            (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
              error: Error()
            }), GameLogic) : GameLogic).playCardTypeMusic(data.cardType, cards);
            this.showCardTypeActionByViewId({
              viewId: viewId,
              cardType: data.cardType,
              cardNum: cards.length
            }); //自己剩余牌数

            if (viewId == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).viewId.self) {
              this.selectCardValue = [];
              (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
                error: Error()
              }), utils) : utils).send((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                error: Error()
              }), GlobalData) : GlobalData).localEvent.LeftCardsBg, {
                showOther: false,
                showSelf: true,
                selfCnt: this.handCardsValue.length
              });
            }
          } else {
            this.onEventOutCards({
              viewid: viewId,
              cards: [],
              cardCount: 0,
              isAuto: data.sendType == 2
            });

            if (viewId == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).viewId.self) {
              this.doHandCardPopDown();
            }

            this.showNoOut(viewId, true);
            (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
              error: Error()
            }), GameLogic) : GameLogic).playCardTypeMusic(100);
          }
        } //结算


        onGameFinish(data) {
          this.hideAllTime();
          console.log("data--> ", data);

          if (data.type == (_crd && GameEndType === void 0 ? (_reportPossibleCrUseOfGameEndType({
            error: Error()
          }), GameEndType) : GameEndType).free) {
            (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
              error: Error()
            }), UIManager) : UIManager).Instace.showUI({
              path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
                error: Error()
              }), UIConfig) : UIConfig).GameEndFreeItemKey,
              data: data
            });
          } else if (data.type == (_crd && GameEndType === void 0 ? (_reportPossibleCrUseOfGameEndType({
            error: Error()
          }), GameEndType) : GameEndType).audition) {
            (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
              error: Error()
            }), UIManager) : UIManager).Instace.showUI({
              path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
                error: Error()
              }), UIConfig) : UIConfig).GameEndAuditionItemKey,
              data: data
            });
          } else if (data.type == (_crd && GameEndType === void 0 ? (_reportPossibleCrUseOfGameEndType({
            error: Error()
          }), GameEndType) : GameEndType).kick_1) {
            (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
              error: Error()
            }), UIManager) : UIManager).Instace.showUI({
              path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
                error: Error()
              }), UIConfig) : UIConfig).GameEndKickItemKey,
              data: data
            });
          } else if (data.type == (_crd && GameEndType === void 0 ? (_reportPossibleCrUseOfGameEndType({
            error: Error()
          }), GameEndType) : GameEndType).kick_2) {
            (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
              error: Error()
            }), UIManager) : UIManager).Instace.showUI({
              path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
                error: Error()
              }), UIConfig) : UIConfig).GameEndKickItemKey,
              data: data
            }); //三局两胜结束,隐藏进度和级牌

            (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
              error: Error()
            }), utils) : utils).send((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).localEvent.UpdateLevelCard, false);
          } else if (data.type == (_crd && GameEndType === void 0 ? (_reportPossibleCrUseOfGameEndType({
            error: Error()
          }), GameEndType) : GameEndType).kick_3) {
            (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
              error: Error()
            }), UIManager) : UIManager).Instace.showUI({
              path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
                error: Error()
              }), UIConfig) : UIConfig).GameEndKickItemKey,
              data: data
            });
          } else if (data.type == (_crd && GameEndType === void 0 ? (_reportPossibleCrUseOfGameEndType({
            error: Error()
          }), GameEndType) : GameEndType).score_1 || data.type == (_crd && GameEndType === void 0 ? (_reportPossibleCrUseOfGameEndType({
            error: Error()
          }), GameEndType) : GameEndType).score_2) {
            (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
              error: Error()
            }), UIManager) : UIManager).Instace.showUI({
              path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
                error: Error()
              }), UIConfig) : UIConfig).GameEndScoreItemKey,
              data: data
            });
          }
        } //有人赢了


        onUserWin(data) {
          console.log("有人赢了--> ", data);
          var viewId = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
            error: Error()
          }), GameLogic) : GameLogic).getUserViewIdById(data.id);
          this.picWinTypes[viewId].active = true;
          this.picWinTypes[viewId].getComponent(Sprite).spriteFrame = this.spWinTypes[data.win - 1];
        } //新一轮


        onNewCircle() {
          // GlobalData.cardInfo.oneCard = false;
          // GlobalData.cardInfo.sortCard = false;
          // console.log("---->新一轮");
          this.hideAllNoOut();
          this.clearAllOutCards();
        } //回贡 type=>自动回贡


        onDownCard(data, type) {
          console.log("---------> 回贡 ", data);
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).Instace.showUI({
            path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
              error: Error()
            }), UIConfig) : UIConfig).MessageHintKey,
            data: "回贡中..."
          });
          var e = data;
          var fromViewId = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
            error: Error()
          }), GameLogic) : GameLogic).getUserViewIdById(e.fromId);
          var toViewId = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
            error: Error()
          }), GameLogic) : GameLogic).getUserViewIdById(e.toId);
          var toPos = this.getOutCardByViewId(toViewId);
          var scale = this.getOutCardScaleByViewId(toViewId);
          var cards = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
            error: Error()
          }), GameLogic) : GameLogic).convertCardListS2C([e.card]);
          this.onEventOutCards({
            viewid: fromViewId,
            cards: cards,
            cardCount: 1,
            isAuto: type
          });
          var moveTime = 1.5; //移动动画

          tween(this.outCards[fromViewId][0].node).delay(1).parallel(tween().to(moveTime, {
            position: toPos
          }), tween().to(moveTime, {
            scale: v3(scale, scale, scale)
          })).delay(2.5).call(() => {
            this.clearOutCards(fromViewId);
          }).start();
        } //抗贡


        onNoCard(data) {
          console.log("---------> 抗贡 ");

          if (data.one) {
            var user = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
              error: Error()
            }), GameLogic) : GameLogic).getUserDataById(data.one);
            (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
              error: Error()
            }), UIManager) : UIManager).Instace.showUI({
              path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
                error: Error()
              }), UIConfig) : UIConfig).MessageHintKey,
              data: user.name + "抗贡"
            });
            (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
              error: Error()
            }), utils) : utils).send((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).localEvent.KangGong, false, user.id, null);
          }

          if (data.one && data.two) {
            var user1 = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
              error: Error()
            }), GameLogic) : GameLogic).getUserDataById(data.one);
            var user2 = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
              error: Error()
            }), GameLogic) : GameLogic).getUserDataById(data.two);
            (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
              error: Error()
            }), UIManager) : UIManager).Instace.showUI({
              path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
                error: Error()
              }), UIConfig) : UIConfig).MessageHintKey,
              data: user1.name + user2.name + "抗贡"
            });
            (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
              error: Error()
            }), utils) : utils).send((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).localEvent.KangGong, false, user1.id, user2.id);
          }
        } //上贡(UI)


        onUpCard(data) {
          var _this3 = this;

          console.log("---------> 上贡(UI) ", data);
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).Instace.showUI({
            path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
              error: Error()
            }), UIConfig) : UIConfig).MessageHintKey,
            data: "上贡中..."
          });

          var _loop6 = function _loop6(i) {
            var e = data.list[i];
            var fromViewId = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
              error: Error()
            }), GameLogic) : GameLogic).getUserViewIdById(e.fromId);
            var toViewId = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
              error: Error()
            }), GameLogic) : GameLogic).getUserViewIdById(e.toId);

            var toPos = _this3.getOutCardByViewId(toViewId);

            var scale = _this3.getOutCardScaleByViewId(toViewId);

            var cards = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
              error: Error()
            }), GameLogic) : GameLogic).convertCardListS2C([e.card]);

            _this3.onEventOutCards({
              viewid: fromViewId,
              cards: cards,
              cardCount: 1,
              isAuto: true
            });

            var moveTime = 1.5;
            console.log("fromViewId --> ", fromViewId, "贡 cards --> ", cards[0]);

            if (_this3.outCards[fromViewId][0] != null) {
              //移动动画
              tween(_this3.outCards[fromViewId][0].node).delay(1).parallel(tween().to(moveTime, {
                position: toPos
              }), tween().to(moveTime, {
                scale: v3(scale, scale, scale)
              })).delay(2.5).call(() => {
                _this3.clearOutCards(fromViewId);
              }).start();
            }
          };

          for (var i = 0; i < data.list.length; i++) {
            _loop6(i);
          }

          this.showBtnLayer(true);
          this.showTime((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).viewId.self, data.time, true);
        } //回贡人拿到了上贡的牌


        onReviceCard(data, type) {
          if (type) {
            console.log("---------> 回贡人拿到了上贡人的牌 ", data);
            var card = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
              error: Error()
            }), GameLogic) : GameLogic).convertCardListS2C([data.card])[0];
            (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).cardInfo.giveCard = card;
            this.setHandCards(this.handCardsValue.concat(card), false, true, (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).cardInfo.oneCard);
            this.updateBtnLayerPos((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).viewId.self, true);
            this.showUpDownCardBtn(true);
          } else {
            console.log("---------> 上贡人拿到了回贡人的牌 ", data); //上贡人拿到了回贡人的牌

            var _card7 = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
              error: Error()
            }), GameLogic) : GameLogic).convertCardListS2C([data.card])[0];
            (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).cardInfo.giveCard = _card7;
            this.setHandCards(this.handCardsValue.concat(_card7), false, true, (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).cardInfo.oneCard);
            this.showBtnLayer(false);
          }
        }

        onReviceBtn() {
          this.showUpDownCardBtn(true);
        } //回贡完成


        onReviceCardFinish() {
          this.hideAllTime();
          this.showBtnLayer(false);
          this.updateBtnLayerPos((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).viewId.self, true);
        } //接风


        onHaveWindy(data) {
          var viewId = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
            error: Error()
          }), GameLogic) : GameLogic).getUserViewIdById(data.id);
          this.showCardTypeActionByViewId({
            viewId: viewId,
            cardType: (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
              error: Error()
            }), GameDefine) : GameDefine).KIND_CARDS_Feng,
            cardNum: null
          });
        } //回贡成功


        onReviceCardSuccess() {
          this.showUpDownCardBtn(false);
        } //再来一局


        onAgainGame(data) {
          if (data.type == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).gameType.free) {
            this.init();
          } else if (data.type == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).gameType.audition) {
            this.init();
          }
        } //新一轮游戏开始


        onGameRestart() {
          console.log("销毁所有 2--->");
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).Instace.clearAllUI();
          this.init();
        } //轮空通知


        onKickFreeUp() {
          this.init(); //只保留自己和对家

          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).send((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.HideUpDownUserHead);
        } //隐藏 头游


        hideAllWinType() {
          for (var i = 0; i < this.picWinTypes.length; i++) {
            this.picWinTypes[i].active = false;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "cardItem", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "cardAtlas", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "btnLayer", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "btnNoOut", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "btnHint", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "btnOut", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "btnDownCard", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "gameTimers", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "cardActions", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "nodeTipNoOut", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "picWinTypes", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "spWinTypes", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "picCardDir", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "picHuifuDir", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "picOneCard", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4766397a2ad5fa69a106c5a54f38959ff3ed3917.js.map