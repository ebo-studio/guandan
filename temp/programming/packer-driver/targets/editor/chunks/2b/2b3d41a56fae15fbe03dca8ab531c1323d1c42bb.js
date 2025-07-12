System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Component, instantiate, Node, Prefab, sp, Sprite, SpriteAtlas, SpriteFrame, tween, UITransform, v3, Vec2, Vec3, CardItem, GameTimer, utils, GameLogic, GameEndType, GlobalData, SoundManager, PbManager, GameSocket, UIManager, UIConfig, CardAction, GameDefine, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _crd, ccclass, property, CardLayer;

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

      __checkObsolete__(['_decorator', 'Button', 'Component', 'EventTouch', 'instantiate', 'Node', 'Prefab', 'sp', 'Sprite', 'SpriteAtlas', 'SpriteFrame', 'tween', 'UITransform', 'v3', 'Vec2', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("CardLayer", CardLayer = (_dec = ccclass('CardLayer'), _dec2 = property(Prefab), _dec3 = property(SpriteAtlas), _dec4 = property(Node), _dec5 = property(Button), _dec6 = property(Button), _dec7 = property(Button), _dec8 = property(Button), _dec9 = property(_crd && GameTimer === void 0 ? (_reportPossibleCrUseOfGameTimer({
        error: Error()
      }), GameTimer) : GameTimer), _dec10 = property(_crd && CardAction === void 0 ? (_reportPossibleCrUseOfCardAction({
        error: Error()
      }), CardAction) : CardAction), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(SpriteFrame), _dec14 = property(Sprite), _dec15 = property(Sprite), _dec16 = property(Sprite), _dec(_class = (_class2 = class CardLayer extends Component {
        constructor(...args) {
          super(...args);

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
          this.userHeadPos = [];
          this.halfWinHight = 0;
          this.canTouch = true;
          this.cardPosY = 0;
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


        init(reset = true) {
          this.halfWinHight = (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).getSceneSize(2).height;
          this.baseCardWidth = 84;
          this.baseCardHeight = 109; // if (GlobalData.cardInfo.cardDir) {
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
          //     this.cardsPosY = -this.halfWinHight + 88 + this.handCardsHeight * 0.5;
          // } else {

          this.cardsPosY = -this.halfWinHight + this.handCardsHeight * 0.5; // }
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
        }
        /**
         * 测试其他玩家出牌
         */


        testOtherOuts() {
          let tempCard0 = [0x0a, 0x0a, 0x1a, 0x1a, 0x0a, 0x0a, 0x1a, 0x1a];
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
          let tempCard = [0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d, 0x11, 0x12, 0x13, 0x14, 0x15, 0x16, 0x17, 0x18, 0x19, 0x1a, 0x1b, 0x1c, 0x1d, 0x2d];
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
          let cardList = [0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d, 0x01, 0x12, 0x13, 0x14, 0x15, 0x26, 0x17, 0x18, 0x19, 0x1a, 0x3b, 0x1c, 0x1d, // 0x2a,
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


        setHandCards(value, ani = false, isUp = false, isOneCard = false) {
          // console.log('初始手牌', value);
          this.delayShowCardDir();
          this.clearHandCards();
          this.handCardsValue = value;

          if (value.length == 0) {
            return;
          }

          let delayTime = 0.06;
          let that = this; //手牌有动画,动画过程不让点击

          if (ani) {
            this.setCanTouch(false);
          } // console.log("len---> ",value.length);


          let sameSizeList;

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
              }), GlobalData) : GlobalData).cardInfo.sortCard, (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                error: Error()
              }), GlobalData) : GlobalData).cardInfo.sortCard ? this.sorthandCardsValue : [], (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                error: Error()
              }), GlobalData) : GlobalData).cardInfo.sortCard ? this.prevSelected : []);
            }
          } // console.log("sameSizeList--> ",sameSizeList.length);


          this.initHandStartPosX_V(sameSizeList.length);
          let idx = 0;
          let tmpIdx = 0; // console.log("---> ",sameSizeList[0][0]);

          for (let i = 0; i < sameSizeList.length; i++) {
            const list = sameSizeList[i];

            if ((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).cardInfo.sortCard) {
              list.sort((a, b) => (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
                error: Error()
              }), GameLogic) : GameLogic).getCardSize(a) - (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
                error: Error()
              }), GameLogic) : GameLogic).getCardSize(b)); // 🔧 加这一行，组内升序排列（7在前）

              console.log("🧩 sameSizeList", JSON.stringify(sameSizeList));
            }

            let posX = this.getHandCardPosX_V(i);
            let isliuBomb = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
              error: Error()
            }), GameLogic) : GameLogic).isNBomb(list, 6);
            let iswuBomb = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
              error: Error()
            }), GameLogic) : GameLogic).isNBomb(list, 5);
            let isSameSuitStraight = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
              error: Error()
            }), GameLogic) : GameLogic).isSameSuitStraight(list);
            let issiBomb = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
              error: Error()
            }), GameLogic) : GameLogic).isNBomb(list, 4);
            let isThreeWithTwo = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
              error: Error()
            }), GameLogic) : GameLogic).isThreeWithTwo(list);
            let isStraight = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
              error: Error()
            }), GameLogic) : GameLogic).isStraight(list);
            let isliandui = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
              error: Error()
            }), GameLogic) : GameLogic).isLiandui(list);
            let isWangzha = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
              error: Error()
            }), GameLogic) : GameLogic).isWangzha(list);

            for (let j = list.length - 1; j >= 0; j--) {
              let valueSize = list[j]; // console.log("i----> ", i, valueSize);

              let card = this.getOneCard();
              card.node.setSiblingIndex(idx);
              let posY = this.getHandCardPosY_V(j);
              card.node.scale = new Vec3(this.handScale, this.handScale, this.handScale); //手牌位置

              let cardSps = this.getCardsSprite(valueSize);

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

              let moveFunc = function (posX, posY, tmpIdx) {
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
              this.handCards.push(card);
            }
          } // }

        } //贡牌位置


        getOutCardByViewId(viewId) {
          let posX = 0;
          let posY = 0;

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
          let tempCards = cardList;
          this.clearOutCards(viewid);

          if (viewid == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).viewId.self) {
            //出牌动作
            this.initOutStartPosX(tempCards.length);

            for (let k = 0; k < tempCards.length; k++) {
              let card = this.getOneCard();
              let posX = this.getOutPosX(k);
              card.setMask(false);
              card.node.setSiblingIndex(k);
              card.node.setScale(this.outScaleSelf, this.outScaleSelf, this.outScaleSelf);
              card.node.setPosition(posX, -45);
              let cardSps = this.getCardsSprite(tempCards[k]);

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
            let pos_Y = this.userHeadPos[viewid].y;

            for (let k = 0; k < tempCards.length; k++) {
              let card = this.getOneCard();
              let posX = this.getOutPosX(k, true);
              card.node.setSiblingIndex(k);
              card.node.setScale(this.outScaleOther, this.outScaleOther, this.outScaleOther);
              card.node.setPosition(posX, pos_Y - 120, 0);
              let cardSps = this.getCardsSprite(tempCards[k]);

              if (cardSps) {
                card.setValue(tempCards[k], cardSps);
                this.outCards[viewid].push(card);
              }
            }
          } else {
            let pos_Y = this.userHeadPos[viewid].y;
            let pos_X = this.userHeadPos[viewid].x;
            let startX = 0;

            if (viewid == 2) {
              //右边
              startX = pos_X - 160 - (count + 1) * this.outDistanceOther;
            } else {
              //左边
              startX = pos_X + 160;
            }

            for (let i = 0; i < count; i++) {
              let card = this.getOneCard();
              card.node.setSiblingIndex(i);
              card.node.setScale(this.outScaleOther, this.outScaleOther, this.outScaleOther);
              startX += this.outDistanceOther;
              card.node.setPosition(startX, pos_Y, 0);
              let cardSps = this.getCardsSprite(tempCards[i]);

              if (cardSps) {
                card.setValue(tempCards[i], cardSps);
                this.outCards[viewid].push(card);
              }
            }
          }
        } //出牌 因为有两副牌,牌值和牌色一样,无法单一通过牌值确定要出那张牌,会出现选的是左边的黑桃5,出的是右边的黑桃5
        //1: 自己出牌需要记录下标,通过下标和牌值确定唯一的牌
        //2: 系统出牌,只要出了就行


        onEventOutCards(jsonData) {
          let viewid = jsonData.viewid; //上轮玩家出过牌,这轮不出,清空已出牌

          if (jsonData.cardCount == 0) {
            this.clearOutCards(viewid);
            return;
          } //测试
          //this.showCardTypeActionByViewId({ viewId: jsonData.viewid, cardType: GameDefine.KIND_CARDS_BOMB_45, cardNum: jsonData.cards.length });


          this.clearOutCards(viewid);
          this.dealOutCards(viewid, jsonData.cards, jsonData.cardCount, jsonData.isAuto);
        } //处理出牌


        dealOutCards(viewid, cardList, count, isAuto = true) {
          //出牌排序
          // let tempCards = GameLogic.getSortCard(cardList);
          let that = this;
          let tempCards = cardList;

          if (viewid == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).viewId.self) {
            // console.log("handcards  --> ",utils.deepCopy(this.handCardsValue));
            // console.log("---> ", this.handCardsValue.length);
            //剩余手牌值
            let tmpInfo = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
              error: Error()
            }), GameLogic) : GameLogic).getRemainCardsByDelete(this.handCardsValue, tempCards, false, [], []);
            this.handCardsValue = tmpInfo.cards; // console.log("+++> ", this.handCardsValue.length);
            // console.log("handcards 2 --> ",utils.deepCopy(this.handCardsValue));

            if (isAuto) {
              // if (GlobalData.cardInfo.cardDir) {
              //     this.doHandCardPopDown();
              // } else {
              this.doHandCardPopDown_V(); // }
              //找到下标

              this.selectCardIndex = tmpInfo.idxs;

              if (this.selectCardIndex.length <= 1) {
                console.log("贡牌下标---> ", this.selectCardIndex[0]);
              }
            } // console.log("count--> ", tempCards);
            //出牌s


            for (let j = 0; j < count; j++) {
              for (const k in this.handCards) {
                if (this.handCards[k] && tempCards[j] == this.handCards[k].getValue() && this.selectCardIndex.indexOf(this.handCards[k].getIndex()) != -1) {
                  this.outCards[viewid].push(this.handCards[k]);
                  this.handCards.splice(Number(k), 1);
                  break;
                }
              }
            }

            console.log("出牌 cnt---> ", (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
              error: Error()
            }), utils) : utils).deepCopy(this.outCards[viewid].length)); //出牌动作

            this.initOutStartPosX(this.outCards[viewid].length);

            for (let k = 0; k < this.outCards[viewid].length; k++) {
              let posX = this.getOutPosX(k);
              let card = this.outCards[viewid][k];
              card.setMask(false);
              card.node.setSiblingIndex(k);
              card.node.setScale(this.outScaleSelf, this.outScaleSelf, this.outScaleSelf);
              tween(card.node).to(.15, {
                position: v3(posX, -45, 0)
              }).start();
            }

            this.setCanTouch(false); // if (GlobalData.cardInfo.cardDir) {
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
              this.handCardsValue = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
                error: Error()
              }), GameLogic) : GameLogic).sortCardsBySizeDown(this.handCardsValue, this.handCardsValue.length);
            }

            let sameSizeList;

            if ((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).cardInfo.oneCard) {
              this.groupedCards = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
                error: Error()
              }), GameLogic) : GameLogic).smartSortCards(this.handCardsValue);
              sameSizeList = this.groupedCards;
            } else {
              if ((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                error: Error()
              }), GlobalData) : GlobalData).cardInfo.sortCard) {
                this.groupedCards = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
                  error: Error()
                }), GameLogic) : GameLogic).removeOutCardsFromGrouped(this.groupedCards, tempCards);
                sameSizeList = this.groupedCards;
              } else {
                sameSizeList = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
                  error: Error()
                }), GameLogic) : GameLogic).getSameCardSizeList(this.handCardsValue, (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                  error: Error()
                }), GlobalData) : GlobalData).cardInfo.sortCard, (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                  error: Error()
                }), GlobalData) : GlobalData).cardInfo.sortCard ? this.sorthandCardsValue : [], (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                  error: Error()
                }), GlobalData) : GlobalData).cardInfo.sortCard ? this.prevSelected : []);
              }
            }

            this.initHandStartPosX_V(sameSizeList.length);
            let idx = 0;
            let useIdxList = [];
            this.setCanTouch(false);

            for (let i = 0; i < sameSizeList.length; i++) {
              const list = sameSizeList[i];
              let posX = this.getHandCardPosX_V(i);

              for (let j = list.length - 1; j >= 0; j--) {
                let valueSize = list[j];

                for (let n = 0; n < this.handCards.length; n++) {
                  let card = this.handCards[n];

                  if (card.getValue() == valueSize && useIdxList.indexOf(card.getIndex()) == -1) {
                    useIdxList.push(card.getIndex());
                    card.node.setSiblingIndex(idx);
                    let posY = this.getHandCardPosY_V(j);
                    card.node.scale = new Vec3(this.handScale, this.handScale, this.handScale);
                    card.setBottom(j == 0);
                    card.setLastLine(i == sameSizeList.length - 1);

                    let moveFunc = function (posX, posY, idx) {
                      tween(card.node).delay(0.2).to(0.1, {
                        position: v3(posX, posY, 0)
                      }).delay(0.2).call(() => {
                        //必须延迟执行,否则idx重复
                        card.setIndex(idx);

                        if (i == sameSizeList.length - 1 && j == 0) {
                          that.setCanTouch(true);
                        }
                      }).start();
                    };

                    moveFunc(posX, posY, idx);
                    idx++;
                    break;
                  }
                }
              }
            } // }

          } else if (viewid == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).viewId.opposite) {
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
              let cardSps = this.getCardsSprite(tempCards[k]);

              if (cardSps) {
                card.setValue(tempCards[k], cardSps);
                this.outCards[viewid].push(card);
              }

              let moveTime = 0.15;
              tween(card.node).parallel(tween().to(moveTime, {
                position: v3(posX, pos_Y - 120, 0)
              }), tween().to(moveTime, {
                scale: v3(this.outScaleOther, this.outScaleOther, this.outScaleOther)
              })).start();
            }
          } else {
            let pos_Y = this.userHeadPos[viewid].y;
            let pos_X = this.userHeadPos[viewid].x;
            let startX = 0;

            if (viewid == 2) {
              //右边
              startX = pos_X - 160 - (count + 1) * this.outDistanceOther;
            } else {
              //左边
              startX = pos_X + 160;
            }

            for (let i = 0; i < count; i++) {
              let card = this.getOneCard();
              card.node.setSiblingIndex(i);
              card.node.setScale(0, 0, 0);
              card.node.setPosition(pos_X, pos_Y, 0);
              startX += this.outDistanceOther;
              let cardSps = this.getCardsSprite(tempCards[i]);

              if (cardSps) {
                card.setValue(tempCards[i], cardSps);
                this.outCards[viewid].push(card);
                let moveTime = 0.15;
                tween(card.node).parallel(tween().to(moveTime, {
                  position: v3(startX, pos_Y, 0)
                }), tween().to(moveTime, {
                  scale: v3(this.outScaleOther, this.outScaleOther, this.outScaleOther)
                })).start();
              }
            }
          }
        } //游戏结束后,显示所有玩家手牌(左右两家,一排最多显示9张)


        showOtherHandCards(viewid, cardList, count) {
          let tempCards = cardList;

          if (viewid == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).viewId.opposite) {
            //出牌动作
            this.initOutStartPosX(tempCards.length, true);
            let pos_Y = this.userHeadPos[viewid].y;

            for (let k = 0; k < tempCards.length; k++) {
              let card = this.getOneCard();
              let posX = this.getOutPosX(k, true);
              card.node.setSiblingIndex(k);
              card.node.setScale(this.outScaleOther, this.outScaleOther, this.outScaleOther);
              card.node.setPosition(posX, pos_Y - 120, 0);
              let cardSps = this.getCardsSprite(tempCards[k]);

              if (cardSps) {
                card.setValue(tempCards[k], cardSps);
                this.outCards[viewid].push(card);
              }
            }
          } else {
            let pos_Y = this.userHeadPos[viewid].y;
            let pos_X = this.userHeadPos[viewid].x;
            let startX = 0;
            let tmpCnt = count;
            let lineCnt = 9;
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

            let tmpStartX = startX;

            for (let i = 0; i < count; i++) {
              let card = this.getOneCard();
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
        } //排序


        sortAllCards() {
          this.handCardsValue = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
            error: Error()
          }), GameLogic) : GameLogic).sortCardsBySizeDown(this.handCardsValue, this.handCardsValue.length);

          for (let i in this.handCards) {
            const item = this.handCards[i];
            if (!item) return;
            let cardSps = this.getCardsSprite(this.handCardsValue[i]);

            if (cardSps) {
              item.setValue(this.handCardsValue[i], cardSps); //断线情况,发牌时,可能玩家刚好出牌,牌面显示有问题,强制更新

              item.setBack(false); //nzp add

              item.setIndex(Number(i));
            }
          }
        } //获取牌值和牌色图片


        getCardsSprite(paramValue) {
          // console.log("--------牌值", paramValue)
          let color = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
            error: Error()
          }), GameLogic) : GameLogic).getCardColor(paramValue);
          let size = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
            error: Error()
          }), GameLogic) : GameLogic).getValueStr(paramValue);
          let cardName = "" + color + size;
          let cardSp = this.cardAtlas.getSpriteFrame(cardName);
          return cardSp;
        } //生成一张牌


        getOneCard() {
          let card = null;

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

          for (const i in this.outCards[viewid]) {
            const card = this.outCards[viewid][i];

            if (card) {
              this.recycleOneCard(card);
            }
          }

          this.outCards[viewid] = [];
        } //清理所有玩家出牌


        clearAllOutCards() {
          for (let i = 0; i < (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).MAXPLAYER; i++) {
            this.clearOutCards(i);
          }
        } //清理手牌


        clearHandCards() {
          for (let i in this.handCards) {
            const card = this.handCards[i];

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
        } //触摸开始


        onScreenTouchStart(event) {
          if (!this.getCanTouch()) {
            return;
          }

          if (this.handCards.length == 0) {
            return;
          }

          let touchPos = event.getUILocation();
          let isTouchCard = false;

          for (let i = this.handCards.length - 1; i >= 0; i--) {
            const card = this.handCards[i];

            if (card.node && card.node.getComponent(UITransform).getBoundingBoxToWorld().contains(touchPos)) {
              // if (GlobalData.cardInfo.cardDir) {
              //     card.setMask(true);
              // } else {
              if (card.isMask()) {
                card.setMask(false);
              } else {
                card.setMask(true);
              } // }


              isTouchCard = true;
              break;
            }
          } //连续点击


          if (!this.isClickTwo && !isTouchCard) {
            this.currentClickTime = Date.now();
            let intervalTime = this.currentClickTime - this.preClickTime;

            if (intervalTime < 300 && intervalTime > 50) {
              this.isClickTwo = true;
            }

            this.preClickTime = this.currentClickTime;
          }
        } //触摸滑动


        onScreenTouchMove(event) {
          if (!this.getCanTouch()) {
            return;
          }

          let movePos = event.getUILocation();
          let startPos = event.getUIStartLocation();
          let localStartPos = this.worldPos2LocationPos(startPos);
          let localMovePos = this.worldPos2LocationPos(movePos);
          let dis = Vec2.distance(localStartPos, localMovePos);
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

          for (let i = this.handCards.length - 1; i >= 0; i--) {
            const item = this.handCards[i].node;

            if (item != null) {
              let posXL = item.position.x - item.getComponent(UITransform).contentSize.width / 2 * this.handScale; //左边界点

              let posXR = item.position.x + item.getComponent(UITransform).contentSize.width / 2 * this.handScale; //右边界点

              let posY = item.position.y + item.getComponent(UITransform).contentSize.height / 2 * this.handScale; //上边界点

              let posyYB = item.position.y - item.getComponent(UITransform).contentSize.height / 2 * this.handScale; //下边界点

              let tmpPosXR = this.handCards[i].getLastLine() ? posXR : posXL + this.handDistance_V; //右边界点

              let tmpPosY = this.handCards[i].getBottom() ? posyYB : posY - this.cardDistance_V; //下边界点
              //向左 向上  当前点纵坐标>下边界点  当前点横坐标>右边界点   牌的上边界点>起始点纵坐标    牌的左边界点<起始点横坐标  

              let leftUp = localStartPos.x >= localMovePos.x && localMovePos.y >= localStartPos.y && localMovePos.y >= tmpPosY && localMovePos.x <= tmpPosXR && posY >= localStartPos.y && posXL <= localStartPos.x; //向左向下

              let leftDown = localStartPos.x >= localMovePos.x && localMovePos.y <= localStartPos.y && localMovePos.y <= posY && localMovePos.x <= tmpPosXR && tmpPosY <= localStartPos.y && posXL <= localStartPos.x; //向右向上

              let rightUp = localStartPos.x <= localMovePos.x && localMovePos.y >= localStartPos.y && localMovePos.y >= tmpPosY && localMovePos.x >= posXL && posY >= localStartPos.y && tmpPosXR >= localStartPos.x; //向右向下

              let rightDown = localStartPos.x <= localMovePos.x && localMovePos.y <= localStartPos.y && localMovePos.y <= posY && localMovePos.x >= posXL && tmpPosY <= localStartPos.y && tmpPosXR >= localStartPos.x;

              if (leftUp || leftDown || rightUp || rightDown) {
                this.handCards[i].setMask(true);
              } else {
                this.handCards[i].setMask(false);
              }
            }
          } //第一张


          for (let i = this.handCards.length - 1; i >= 0; i--) {
            const card = this.handCards[i];

            if (card.node && card.node.getComponent(UITransform).getBoundingBoxToWorld().contains(startPos)) {
              card.setMask(true);
              break;
            }
          } //最后一张


          for (let i = this.handCards.length - 1; i >= 0; i--) {
            const card = this.handCards[i];

            if (card.node && card.node.getComponent(UITransform).getBoundingBoxToWorld().contains(movePos)) {
              card.setMask(true);
              break;
            }
          } // }

        } //触摸结束


        onScreenTouchEnd(event) {
          if (!this.getCanTouch()) {
            return;
          }

          if (this.handCards.length == 0) {
            return;
          }

          let selectCards = []; // if (GlobalData.cardInfo.cardDir) {
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

          for (const key in this.handCards) {
            const item = this.handCards[key];

            if (item && item.isSelect()) {
              this.selectCardValue.push(item.getValue());
              this.selectCardIndex.push(item.getIndex());
            }
          }
        } //更新所有选中的牌


        updateSelectedCards_V() {
          //先清空
          this.selectCardValue = [];
          this.selectCardIndex = [];

          for (const key in this.handCards) {
            const item = this.handCards[key];

            if (item && item.isMask()) {
              this.selectCardValue.push(item.getValue());
              this.selectCardIndex.push(item.getIndex());
            }
          } // this.showCardDir(false);


          let isRecover = false;
          const selectedSet = new Set(this.selectCardValue); // for (let group of this.groupedCards) {
          //     if (group.some(card => selectedSet.has(card))) {
          //         // isRecover = true;
          //         isRecover = true;
          //         break;
          //     }
          // }

          for (let card of selectedSet) {
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
          }
        }

        checkClickTwo_V() {
          if (this.isClickTwo) {
            this.doHandCardPopDown_V();
            this.isClickTwo = false; //重置提示索引

            this.selectCardValue = [];
            this.selectCardIndex = [];
            this.hintIndex = 0;
          }
        } //当前选中的牌弹起


        doSelectCards(selectCards) {
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
        } //放下选中的牌


        doHandCardPopDown() {
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
        } //放下选中的牌


        doHandCardPopDown_V() {
          for (let i = 0; i < this.handCards.length; i++) {
            const item = this.handCards[i];

            if (item.isMask()) {
              item.setMask(false);
            }
          }

          this.selectCardValue = [];
          this.selectCardIndex = [];
        } //弹起提示的牌


        showChooseCard(value) {
          let copeValue = (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).deepCopy(value);
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
          let copeValue = (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).deepCopy(value);
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
          let size = (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
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
          let halfPos = (this.handCardsWidth + (count - 1) * this.handDistance_V) * 0.5;
          this.startHandPosX_V = -halfPos + this.handCardsWidth * 0.5;
        } //每行手牌初始位置


        initHandStartPosX() {
          this.initStartPosX(this.handCardsValue.length);
        } //手牌初始位置


        initStartPosX(count) {
          let halfPos = (this.handCardsWidth + (count - 1) * this.handDistance) * 0.5;
          this.startHandPosX = -halfPos + this.handCardsWidth * 0.5;
        } //自己出牌初始位置


        initOutStartPosX(count, isOppsite = false) {
          if (isOppsite) {
            let halfPos = (this.outCardsWidthOppsite + (count - 1) * this.outDistanceOther) * 0.5;
            this.startOutPosXOppiste = -halfPos + this.outCardsWidthOppsite * 0.5;
          } else {
            let halfPos = (this.outCardsWidth + (count - 1) * this.outDistanceSelf) * 0.5;
            this.startOutPosX = -halfPos + this.outCardsWidth * 0.5;
          }
        }

        getOutPosX(num, isOppsite = false) {
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
          let sendBuffer = (_crd && PbManager === void 0 ? (_reportPossibleCrUseOfPbManager({
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

          this.selectCardValue = this.hintCards[this.hintIndex]; // if (GlobalData.cardInfo.cardDir) {
          //     this.showChooseCard(this.selectCardValue);
          // } else {

          this.showChooseCard_V(this.selectCardValue); // }

          this.hintIndex++;

          if (this.hintIndex == this.hintCards.length) {
            this.hintIndex = 0;
          }
        } //出牌


        onBtnOut() {
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).playClick(); // console.log("this.selectCardValue.length--> ", this.selectCardValue.length);

          if (this.selectCardValue.length > 0) {
            let _cards = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
              error: Error()
            }), GameLogic) : GameLogic).convertCardListC2S(this.selectCardValue);

            console.log("cards---> ", _cards);
            let baseInfo = GameMsg.UserSendCard.create({
              cards: (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
                error: Error()
              }), utils) : utils).toJson(_cards)
            });
            let baseBuffer = GameMsg.UserSendCard.encode(baseInfo).finish();
            let sendBuffer = (_crd && PbManager === void 0 ? (_reportPossibleCrUseOfPbManager({
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
            let cards = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
              error: Error()
            }), GameLogic) : GameLogic).convertCardListC2S(this.selectCardValue)[0];
            let baseInfo = GameMsg.Gong.create({
              card: cards
            });
            let baseBuffer = GameMsg.Gong.encode(baseInfo).finish();
            let sendBuffer = (_crd && PbManager === void 0 ? (_reportPossibleCrUseOfPbManager({
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
          const selected = (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
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

          const cardType = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
            error: Error()
          }), GameLogic) : GameLogic).getCardType(selected);

          if (cardType === (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
            error: Error()
          }), GameDefine) : GameDefine).KIND_CARDS_ERROR) {
            const feijiType = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
              error: Error()
            }), GameLogic) : GameLogic).getCardTypeByFeiji(selected);

            if (feijiType === (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
              error: Error()
            }), GameDefine) : GameDefine).KIND_CARDS_ERROR) {
              const lianduiType = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
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
          } // ✅ 将新选中的牌追加进理牌列表（保持顺序，防止重复）


          for (let card of selected) {
            if (!this.sorthandCardsValue.includes(card)) {
              this.sorthandCardsValue.push(card);
            }
          } // ✅ 理牌处理


          console.log("🟡 当前传入 selected 是：", JSON.stringify(this.sorthandCardsValue));
          const selectedPoints = selected.map(card => (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
            error: Error()
          }), GameLogic) : GameLogic).getCardSize(card));
          console.log("🟡 当前传入的点数：", selectedPoints);
          const uniqueSelected = [...new Set(selected)];
          console.log("🟡 当前传入去重后的 selected：", uniqueSelected);
          this.groupedCards = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
            error: Error()
          }), GameLogic) : GameLogic).moveSelectedCardsToBack(this.handCardsValue, selected, this.prevSelected, // <== 关键：传入前次理牌
          this.groupedCards);
          console.log("✅ groupedCards", JSON.stringify(this.groupedCards));
          (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).cardInfo.sortCard = true; // ✅ 更新手牌

          this.handCardsValue = this.groupedCards.flat();
          this.setHandCards(this.handCardsValue); // ✅ 更新 prevSelected 为这次选中的

          this.prevSelected = (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).deepCopy(selected); // ✅ 清除选中状态

          this.selectCardValue = [];
          this.selectCardIndex = [];
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
        }

        onBtnOneCardDir() {
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).playClick();

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
            this.handCardsValue = this.groupedCards.flat();
            this.setHandCards(this.handCardsValue, false, false, true);
          }
        }

        smartSetHandCards(sortedCards) {
          this.delayShowCardDir();
          this.clearHandCards();
          this.handCardsValue = sortedCards; // 按照你自己理牌结果，每个组纵向一列

          const sameSizeList = [];
          let i = 0;

          while (i < sortedCards.length) {
            const group = [sortedCards[i]];
            const currRank = sortedCards[i] % 16; // 连续相同 rank 放一列

            for (let j = i + 1; j < sortedCards.length; j++) {
              const nextRank = sortedCards[j] % 16;

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
          let idx = 0;

          for (let i = 0; i < sameSizeList.length; i++) {
            const col = sameSizeList[i]; // 一列内的牌

            const posX = this.getHandCardPosX_V(i);

            for (let j = col.length - 1; j >= 0; j--) {
              const value = col[j];
              const card = this.getOneCard();
              card.node.setSiblingIndex(idx);
              const posY = this.getHandCardPosY_V(j);
              card.node.scale = new Vec3(this.handScale, this.handScale, this.handScale);
              const cardSps = this.getCardsSprite(value);

              if (cardSps) {
                card.setValue(value, cardSps);
              }

              card.node.setPosition(v3(posX, posY));
              card.setIndex(idx);
              card.setBottom(j === 0);
              card.setLastLine(i === sameSizeList.length - 1);
              this.handCards.push(card);
              idx++;
            }
          }
        } ////////////////头像////////////////


        setUserPosition(headPos) {
          this.userHeadPos = headPos;
        } //倒计时


        showTime(viewId, leftTime, updatePos = false) {
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
          for (let i = 0; i < this.gameTimers.length; i++) {
            this.gameTimers[i].hide();
          }
        } //更新自己倒计时位置


        updateBtnLayerPos(viewId, updatePos) {
          if (viewId == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).viewId.self) {
            //贡牌倒计时和贡牌重叠了,贡牌时动态调整位置
            let pos = this.btnLayer.getPosition();

            if (updatePos) {
              this.btnLayer.setPosition(pos.x, 60);
            } else {
              this.btnLayer.setPosition(pos.x, -50);
            }
          }
        } //隐藏所有动画


        hideAllCardTypeAction() {
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
          for (let i = 0; i < this.nodeTipNoOut.length; i++) {
            const e = this.nodeTipNoOut[i];
            e.active = false;
          }
        } ////////////////出牌,提示,不出////////////////


        showHandleBtn(isOut = false, isHint = false, isNoOut = false) {
          this.btnOut.node.active = isOut;
          this.btnHint.node.active = isHint;
          this.btnNoOut.node.active = isNoOut;
          this.btnDownCard.node.active = false;
        }
        /**
         * 上贡,回贡
         */


        showUpDownCardBtn(isDown = false) {
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
          }), GlobalData) : GlobalData).cardInfo.oneCard; // if (show) {
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
          let viewId = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
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
          this.showBtnLayer(true);
          this.showHandleBtn(Boolean(data.isSend), Boolean(data.isHit), Boolean(data.isNot));
          console.log("hint card--> ", data.hitCards);

          if (data.hitCards && data.hitCards.length > 0) {
            this.hintCards = [];

            for (let i = 0; i < data.hitCards.length; i++) {
              this.hintCards.push((_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
                error: Error()
              }), GameLogic) : GameLogic).convertCardListS2C(data.hitCards[i].card));
            } //剔除提示牌一样的数据 例如:两个黑桃8,只保留一个


            this.hintCards = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
              error: Error()
            }), GameLogic) : GameLogic).getOnlyValueList(this.hintCards); // console.log("this.hintCards---> ", this.hintCards);
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

          for (let i = 0; i < datas.list.length; i++) {
            const tmpInfo = datas.list[i];
            let viewId = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
              error: Error()
            }), GameLogic) : GameLogic).getUserViewIdById(tmpInfo.id);

            if (viewId != (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).viewId.self) {
              let cards = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
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
          let viewId = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
            error: Error()
          }), GameLogic) : GameLogic).getUserViewIdById(data.id); //1 出牌 0不出

          if (Boolean(data.isSend)) {
            let cards = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
              error: Error()
            }), GameLogic) : GameLogic).convertCardListS2C(data.cards); //sendType: 1自己出牌 2系统出牌

            this.dealReconectOutCards(viewId, cards, cards.length);
          } else {
            this.showNoOut(viewId, true);
          }
        } //出牌


        onOutCards(data) {
          let viewId = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
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
            let cards = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
              error: Error()
            }), GameLogic) : GameLogic).convertCardListS2C(data.cards); //sendType: 1自己出牌 2系统出牌

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
          let viewId = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
            error: Error()
          }), GameLogic) : GameLogic).getUserViewIdById(data.id);
          this.picWinTypes[viewId].active = true;
          this.picWinTypes[viewId].getComponent(Sprite).spriteFrame = this.spWinTypes[data.win - 1];
        } //新一轮


        onNewCircle() {
          (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).cardInfo.oneCard = false;
          (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).cardInfo.sortCard = false; // console.log("---->新一轮");

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
          const e = data;
          let fromViewId = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
            error: Error()
          }), GameLogic) : GameLogic).getUserViewIdById(e.fromId);
          let toViewId = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
            error: Error()
          }), GameLogic) : GameLogic).getUserViewIdById(e.toId);
          let toPos = this.getOutCardByViewId(toViewId);
          let scale = this.getOutCardScaleByViewId(toViewId);
          let cards = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
            error: Error()
          }), GameLogic) : GameLogic).convertCardListS2C([e.card]);
          this.onEventOutCards({
            viewid: fromViewId,
            cards: cards,
            cardCount: 1,
            isAuto: type
          });
          let moveTime = 1.5; //移动动画

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
            let user = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
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
            let user1 = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
              error: Error()
            }), GameLogic) : GameLogic).getUserDataById(data.one);
            let user2 = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
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
          console.log("---------> 上贡(UI) ", data);
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).Instace.showUI({
            path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
              error: Error()
            }), UIConfig) : UIConfig).MessageHintKey,
            data: "上贡中..."
          });

          for (let i = 0; i < data.list.length; i++) {
            const e = data.list[i];
            let fromViewId = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
              error: Error()
            }), GameLogic) : GameLogic).getUserViewIdById(e.fromId);
            let toViewId = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
              error: Error()
            }), GameLogic) : GameLogic).getUserViewIdById(e.toId);
            let toPos = this.getOutCardByViewId(toViewId);
            let scale = this.getOutCardScaleByViewId(toViewId);
            let cards = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
              error: Error()
            }), GameLogic) : GameLogic).convertCardListS2C([e.card]);
            this.onEventOutCards({
              viewid: fromViewId,
              cards: cards,
              cardCount: 1,
              isAuto: true
            });
            let moveTime = 1.5;
            console.log("fromViewId --> ", fromViewId, "贡 cards --> ", cards[0]);

            if (this.outCards[fromViewId][0] != null) {
              //移动动画
              tween(this.outCards[fromViewId][0].node).delay(1).parallel(tween().to(moveTime, {
                position: toPos
              }), tween().to(moveTime, {
                scale: v3(scale, scale, scale)
              })).delay(2.5).call(() => {
                this.clearOutCards(fromViewId);
              }).start();
            }
          }

          this.showBtnLayer(true);
          this.showTime((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).viewId.self, data.time, true);
        } //回贡人拿到了上贡的牌


        onReviceCard(data, type) {
          if (type) {
            console.log("---------> 回贡人拿到了上贡人的牌 ", data);
            let card = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
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

            let card = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
              error: Error()
            }), GameLogic) : GameLogic).convertCardListS2C([data.card])[0];
            (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).cardInfo.giveCard = card;
            this.setHandCards(this.handCardsValue.concat(card), false, true, (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
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
          let viewId = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
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
          for (let i = 0; i < this.picWinTypes.length; i++) {
            this.picWinTypes[i].active = false;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "cardItem", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "cardAtlas", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "btnLayer", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "btnNoOut", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "btnHint", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "btnOut", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "btnDownCard", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "gameTimers", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "cardActions", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "nodeTipNoOut", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "picWinTypes", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "spWinTypes", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "picCardDir", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "picHuifuDir", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "picOneCard", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2b3d41a56fae15fbe03dca8ab531c1323d1c42bb.js.map