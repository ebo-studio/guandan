System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, isValid, Label, Node, UITransform, Vec3, Widget, SoundManager, UIManager, UIConfig, GlobalData, TeamType, UserHead, CardLayer, utils, GameLogic, PbManager, GameSocket, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _class3, _crd, ccclass, property, Game;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfSoundManager(extras) {
    _reporterNs.report("SoundManager", "../manager/SoundManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIManager(extras) {
    _reporterNs.report("UIManager", "../manager/UIManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIConfig(extras) {
    _reporterNs.report("UIConfig", "../manager/UIConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalData(extras) {
    _reporterNs.report("GlobalData", "../manager/GlobalData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTeamType(extras) {
    _reporterNs.report("TeamType", "../component/game/UserHead", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUserHead(extras) {
    _reporterNs.report("UserHead", "../component/game/UserHead", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardLayer(extras) {
    _reporterNs.report("CardLayer", "../component/game/CardLayer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfutils(extras) {
    _reporterNs.report("utils", "../common/utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameLogic(extras) {
    _reporterNs.report("GameLogic", "../component/game/GameLogic", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPbManager(extras) {
    _reporterNs.report("PbManager", "../proto/PbManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameSocket(extras) {
    _reporterNs.report("GameSocket", "../manager/GameSocket", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      isValid = _cc.isValid;
      Label = _cc.Label;
      Node = _cc.Node;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
      Widget = _cc.Widget;
    }, function (_unresolved_2) {
      SoundManager = _unresolved_2.SoundManager;
    }, function (_unresolved_3) {
      UIManager = _unresolved_3.UIManager;
    }, function (_unresolved_4) {
      UIConfig = _unresolved_4.UIConfig;
    }, function (_unresolved_5) {
      GlobalData = _unresolved_5.GlobalData;
    }, function (_unresolved_6) {
      TeamType = _unresolved_6.TeamType;
      UserHead = _unresolved_6.UserHead;
    }, function (_unresolved_7) {
      CardLayer = _unresolved_7.CardLayer;
    }, function (_unresolved_8) {
      utils = _unresolved_8.utils;
    }, function (_unresolved_9) {
      GameLogic = _unresolved_9.GameLogic;
    }, function (_unresolved_10) {
      PbManager = _unresolved_10.PbManager;
    }, function (_unresolved_11) {
      GameSocket = _unresolved_11.GameSocket;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "02bb0k9Y3xIcICWPTWy90gh", "Game", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director', 'isValid', 'Label', 'Node', 'UITransform', 'Vec3', 'Widget']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Game", Game = (_dec = ccclass('Game'), _dec2 = property(Node), _dec3 = property(Label), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Node), _dec11 = property(Label), _dec12 = property(_crd && UserHead === void 0 ? (_reportPossibleCrUseOfUserHead({
        error: Error()
      }), UserHead) : UserHead), _dec13 = property(_crd && CardLayer === void 0 ? (_reportPossibleCrUseOfCardLayer({
        error: Error()
      }), CardLayer) : CardLayer), _dec14 = property(Node), _dec(_class = (_class2 = (_class3 = class Game extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "btnCopy", _descriptor, this);

          _initializerDefineProperty(this, "txtRoomId", _descriptor2, this);

          _initializerDefineProperty(this, "nodeSetDowns", _descriptor3, this);

          _initializerDefineProperty(this, "nodeNoCards", _descriptor4, this);

          _initializerDefineProperty(this, "txtCardLevel", _descriptor5, this);

          _initializerDefineProperty(this, "txtWhoPlay", _descriptor6, this);

          _initializerDefineProperty(this, "txtCardTime", _descriptor7, this);

          _initializerDefineProperty(this, "txtGameRate", _descriptor8, this);

          _initializerDefineProperty(this, "nodeSelfCardCnt", _descriptor9, this);

          _initializerDefineProperty(this, "txtSelfCnt", _descriptor10, this);

          _initializerDefineProperty(this, "userHeads", _descriptor11, this);

          _initializerDefineProperty(this, "cardLayer", _descriptor12, this);

          _initializerDefineProperty(this, "btnAdd", _descriptor13, this);

          this.timeNum = 0;
          this.timeFunc = null;
          this.viewList = [0, 1, 2, 3];
        }

        preLoad() {
          var _Instace;

          console.log("销毁所有 4--->");
          (_Instace = (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).Instace) == null ? void 0 : _Instace.clearAllUI(); // GlobalData.cardInfo.cardDir = false;
        }

        onLoad() {
          Game.Instance = this;
          this.preLoad();
        }

        start() {
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).on((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.UserList, this, this.onUserList);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).on((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.UpdateLevelCard, this, this.setCardLevel);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).on((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.LeftCards, this, this.onLeftCards);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).on((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.LeftCardsBg, this, this.onLeftCardsBg);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).on((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.HideUpDownUserHead, this, this.onHideUpDownUserHead);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).on((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.LeftCardCnt, this, this.onLeftCardCnt);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).on((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.ReEnterGame, this, this.onReEnterGame);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).on((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.KangGong, this, this.onKangGong);
          this.init();
        }

        onDestroy() {
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).off((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.UserList, this, this.onUserList);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).off((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.UpdateLevelCard, this, this.setCardLevel);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).off((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.LeftCards, this, this.onLeftCards);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).off((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.LeftCardsBg, this, this.onLeftCardsBg);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).off((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.HideUpDownUserHead, this, this.onHideUpDownUserHead);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).off((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.LeftCardCnt, this, this.onLeftCardCnt);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).off((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.ReEnterGame, this, this.onReEnterGame);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).off((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.KangGong, this, this.onKangGong);
        }

        onKangGong(init, id1, id2) {
          if (init) {
            for (let i = 0; i < this.nodeNoCards.length; i++) {
              this.nodeNoCards[i].active = false;
            }
          } else {
            if (id1) {
              this.nodeNoCards[(_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
                error: Error()
              }), GameLogic) : GameLogic).getUserViewIdById(id1)].active = true;
            }

            if (id2) {
              this.nodeNoCards[(_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
                error: Error()
              }), GameLogic) : GameLogic).getUserViewIdById(id2)].active = true;
            }
          }
        } //重连进入游戏


        onReEnterGame() {
          console.log("重连进入游戏----->");
          this.preLoad();
          this.init();
        } //玩家列表


        onUserList(data) {
          console.log("玩家列表--> ", data);
          this.hideAllUserHead();
          (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
            error: Error()
          }), GameLogic) : GameLogic).initAllUsers(data.list); //必须先找到自己的

          for (let i = 0; i < data.list.length; i++) {
            const element = data.list[i];

            if (element.id == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).userInfo.user_id) {
              (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
                error: Error()
              }), GameLogic) : GameLogic).initSelfData(element);
              break;
            }
          }

          let tmpList = (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).deepCopy(this.viewList);

          for (let j = 0; j < data.list.length; j++) {
            const element = data.list[j];
            let viewId = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
              error: Error()
            }), GameLogic) : GameLogic).switchChairIdToViewId(element.index);
            this.updateUserHeadByViewId(viewId, {
              head: element.headImg,
              name: element.name,
              score: element.gold
            });
            this.showSetDown(viewId, false);
            tmpList.splice(tmpList.indexOf(viewId), 1);
          }

          this.updateSetDown(tmpList);
          this.checkAddVisable();
        }

        checkAddVisable() {
          if ((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).cardInfo.gameType == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).gameType.free) {
            if ((_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
              error: Error()
            }), GameLogic) : GameLogic).getAllUsers().length >= 4) {
              this.btnAdd.active = false;
            } else {
              this.btnAdd.active = true;
            }
          } else {
            this.btnAdd.active = false;
          }
        } //初始化


        init() {
          this.setCardLevel(false);
          this.setGameRate(false);
          this.setCardTime(false);
          this.setSelfCardCnt(false);
          this.initUserPosition();
          this.hideAllUserHead();
          this.initSetDown();
          this.initRoomId();
          this.cardLayer.init();
          this.initCardBg();
          this.checkAddVisable();
          this.onKangGong(true, 0, 0);
          this.startGame();
        }

        startGame() {
          var _instance;

          console.log("通知服务开始游戏--->");
          let sendBuffer = (_instance = (_crd && PbManager === void 0 ? (_reportPossibleCrUseOfPbManager({
            error: Error()
          }), PbManager) : PbManager).instance) == null ? void 0 : _instance.sendMsg((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).C2S_Event.ContinueGame, null);
          (_crd && GameSocket === void 0 ? (_reportPossibleCrUseOfGameSocket({
            error: Error()
          }), GameSocket) : GameSocket).send(sendBuffer);
        } //下坐


        initSetDown() {
          for (let i = 0; i < this.nodeSetDowns.length; i++) {
            const element = this.nodeSetDowns[i];

            if (isValid(element)) {
              element.active = false;
            }
          }
        } //更新下坐


        updateSetDown(numList) {
          if ((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).cardInfo.gameType == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).gameType.free) {
            for (let i = 0; i < numList.length; i++) {
              this.showSetDown(numList[i], true);
            }
          }
        } //显示下坐


        showSetDown(viewId, type) {
          if (this.nodeSetDowns[viewId]) {
            this.nodeSetDowns[viewId].active = type;
          }
        } //房间号,只有自由玩显示,其他UI上不显示,逻辑上是存在的


        initRoomId() {
          if ((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).cardInfo.gameType == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).gameType.free) {
            this.showRoomId(true);
          } else {
            this.showRoomId(false);
          }
        } //头像位置


        initUserPosition() {
          let posList = [];

          for (let i = 0; i < this.userHeads.length; i++) {
            const e = this.userHeads[i];

            if (i == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).viewId.up || i == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).viewId.down) {
              e.node.parent.getComponent(Widget).updateAlignment();
            }

            posList.push(this.node.getComponent(UITransform).convertToNodeSpaceAR(e.node.getComponent(UITransform).convertToWorldSpaceAR(Vec3.ZERO)));
          }

          this.cardLayer.setUserPosition(posList);
        } //隐藏头像(一般是玩家自己刚进来,用于初始化)


        hideAllUserHead() {
          for (let i = 0; i < this.userHeads.length; i++) {
            const head = this.userHeads[i];
            if (i == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).viewId.self) continue;
            head.node.active = false;
          }
        } //隐藏左右两家(轮空情况)


        hideUpDownUserHead() {
          for (let i = 0; i < this.userHeads.length; i++) {
            const head = this.userHeads[i];
            if (i == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).viewId.self || i == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).viewId.opposite) continue;
            head.node.active = false;
          }
        } //更新用户头像


        updateUserHeadByViewId(viewId, data) {
          this.userHeads[viewId].node.active = true;
          this.userHeads[viewId].setData(data);
          let type = viewId == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).viewId.opposite ? (_crd && TeamType === void 0 ? (_reportPossibleCrUseOfTeamType({
            error: Error()
          }), TeamType) : TeamType).self : (_crd && TeamType === void 0 ? (_reportPossibleCrUseOfTeamType({
            error: Error()
          }), TeamType) : TeamType).other;
          this.userHeads[viewId].setTeamType(type);
        } //房间号


        showRoomId(show) {
          this.txtRoomId.node.active = show;

          if (show) {
            this.txtRoomId.string = "房 间 号 : " + (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).cardInfo.roomId;
          }
        } //本局打几


        setCardLevel(show) {
          this.txtCardLevel.node.parent.active = show;

          if (show) {
            let cardNum = (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).cardInfo.levelCard;
            let key = (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).keyCards[cardNum];
            this.txtCardLevel.string = key.toString();
            this.txtWhoPlay.string = (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).cardInfo.isMy ? "我方打" : "对方打";
          }

          this.setGameRate(show);
          this.setCardTime(show);
        } //计时 (只有积分赛有计时)


        setCardTime(show) {
          if ((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).cardInfo.gameType == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).gameType.score) {
            this.txtCardTime.node.parent.active = show;

            if (show) {
              this.startTime();
            }
          } else {
            this.txtCardTime.node.parent.active = false;
          }
        } //游戏进度


        setGameRate(show) {
          if ((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).cardInfo.gameType == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).gameType.kick) {
            this.txtGameRate.node.parent.active = show;

            if (show) {
              this.txtGameRate.string = (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                error: Error()
              }), GlobalData) : GlobalData).cardInfo.curRate;
            }
          } else {
            this.txtGameRate.node.parent.active = false;
          }
        } //计时


        startTime() {
          this.stopTime();
          this.timeNum = (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).cardInfo.time;
          this.setTime(this.timeNum);

          this.timeFunc = () => {
            this.timeNum -= 1;

            if (this.timeNum >= 0) {
              this.setTime(this.timeNum);
            } else {
              this.setTime(0);
              this.unschedule(this.timeFunc);
            }
          };

          this.schedule(this.timeFunc, 1);
        }

        setTime(num) {
          this.txtCardTime.string = (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).getTimeDesc(num);
        }

        stopTime() {
          if (this.timeFunc != null) {
            this.unschedule(this.timeFunc);
            this.timeFunc = null;
          }
        } //我剩几张


        setSelfCardCnt(show, cardNum = 0) {
          this.nodeSelfCardCnt.active = show;

          if (show) {
            this.txtSelfCnt.string = cardNum.toString();
          }
        } //退出


        onBtnBackClick() {
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).playClick();
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).Instace.showUI({
            path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
              error: Error()
            }), UIConfig) : UIConfig).MessageBoxCommonKey,
            data: {
              okName: "确定",
              cancleName: "取消",
              des: "游戏进行中,是否退出?",
              okFunc: () => {
                //逻辑退出
                let sendBuffer = (_crd && PbManager === void 0 ? (_reportPossibleCrUseOfPbManager({
                  error: Error()
                }), PbManager) : PbManager).instance.sendMsg((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                  error: Error()
                }), GlobalData) : GlobalData).C2S_Event.ExitGame, null);
                (_crd && GameSocket === void 0 ? (_reportPossibleCrUseOfGameSocket({
                  error: Error()
                }), GameSocket) : GameSocket).send(sendBuffer); //UI退出

                console.log("nzp add 返回大厅 1");
                (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
                  error: Error()
                }), UIManager) : UIManager).Instace.showUI({
                  path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
                    error: Error()
                  }), UIConfig) : UIConfig).LoadItemKey,
                  data: (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                    error: Error()
                  }), GlobalData) : GlobalData).sceneName.lobby
                });
              },
              cancleFunc: () => {}
            }
          });
        } //加人


        onBtnAddClick() {
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).playClick();

          if ((_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
            error: Error()
          }), GameLogic) : GameLogic).getAllUsers().length >= 4) {
            (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
              error: Error()
            }), UIManager) : UIManager).Instace.showUI({
              path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
                error: Error()
              }), UIConfig) : UIConfig).MessageHintKey,
              data: "人已满,不能继续添加"
            });
            this.btnAdd.active = false;
            return;
          }

          let sendBuffer = (_crd && PbManager === void 0 ? (_reportPossibleCrUseOfPbManager({
            error: Error()
          }), PbManager) : PbManager).instance.sendMsg((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).C2S_Event.TestAddUser, null);
          (_crd && GameSocket === void 0 ? (_reportPossibleCrUseOfGameSocket({
            error: Error()
          }), GameSocket) : GameSocket).send(sendBuffer);
        } //设置


        onBtnSetClick() {
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).playClick();
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).Instace.showUI({
            path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
              error: Error()
            }), UIConfig) : UIConfig).SettingItemKey
          });
        } //规则


        onBtnRuleClick() {
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).playClick();
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).Instace.showUI({
            path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
              error: Error()
            }), UIConfig) : UIConfig).RuleItemKey
          });
        } //分享


        onBtCopyClick() {
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).playClick();
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).setClipboard(String(123457), success => {
            if (success) {
              (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
                error: Error()
              }), UIManager) : UIManager).Instace.showUI({
                path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
                  error: Error()
                }), UIConfig) : UIConfig).MessageHintKey,
                data: "已经复制到剪贴板"
              });
            } else {
              (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
                error: Error()
              }), UIManager) : UIManager).Instace.showUI({
                path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
                  error: Error()
                }), UIConfig) : UIConfig).MessageHintKey,
                data: "复制失败"
              });
            }
          });
        } //下坐 客户端(0,1,2,3) 服务(4,1,2,3)


        onBtSetDownClick(touch, index) {
          // console.log("SetDown data---> ", index);
          let tmpIdx = null;
          let selfIdx = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
            error: Error()
          }), GameLogic) : GameLogic).getSelfData().index;

          if (index == 2) {
            tmpIdx = (selfIdx + 1) % 4;
          } else if (index == 3) {
            tmpIdx = (selfIdx + 2) % 4;
          } else if (index == 0) {
            tmpIdx = (selfIdx + 3) % 4;
          }

          if (tmpIdx == 0) {
            tmpIdx = 4;
          }

          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).playClick();
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).Instace.showUI({
            path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
              error: Error()
            }), UIConfig) : UIConfig).MessageBoxCommonKey,
            data: {
              okName: "确定",
              cancleName: "取消",
              des: "确定下坐吗?",
              okFunc: () => {
                let baseInfo = GameMsg.User.create({
                  index: Number(tmpIdx)
                });
                let baseBuffer = GameMsg.User.encode(baseInfo).finish();
                let sendBuffer = (_crd && PbManager === void 0 ? (_reportPossibleCrUseOfPbManager({
                  error: Error()
                }), PbManager) : PbManager).instance.sendMsg((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                  error: Error()
                }), GlobalData) : GlobalData).C2S_Event.ChangeSeat, baseBuffer);
                (_crd && GameSocket === void 0 ? (_reportPossibleCrUseOfGameSocket({
                  error: Error()
                }), GameSocket) : GameSocket).send(sendBuffer);
              },
              cancleFunc: () => {}
            }
          });
        }

        onLeftCardCnt(data) {
          // console.log("+++++++++++++ ",data);
          for (let i = 0; i < data.length; i++) {
            let viewId = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
              error: Error()
            }), GameLogic) : GameLogic).getUserViewIdByIndex(i + 1);

            if (viewId == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).viewId.self) {
              continue;
            }

            this.userHeads[viewId].setLeftCnt(data[i]);
          }
        } //剩余牌


        onLeftCards(data) {
          let viewId = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
            error: Error()
          }), GameLogic) : GameLogic).getUserViewIdById(data.id);
          this.userHeads[viewId].setLeftCnt(data.win);
        } //发手牌显示牌背


        onLeftCardsBg(data) {
          if (data.showOther) {
            for (let i = 0; i < 4; i++) {
              if (i == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                error: Error()
              }), GlobalData) : GlobalData).viewId.self) continue;
              this.userHeads[i].showLeftCntBg(true);
            }
          }

          if (data.showSelf != null) {
            this.setSelfCardCnt(data.showSelf, data.selfCnt);
          }
        }

        initCardBg() {
          for (let i = 0; i < 4; i++) {
            if (i == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).viewId.self) continue;
            this.userHeads[i].hideCardBg();
          }
        } //轮空


        onHideUpDownUserHead() {
          this.hideUpDownUserHead();
          this.userHeads[(_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).viewId.opposite].setLeftCnt(-1);
          this.setSelfCardCnt(false);
        }

        onEnable() {//    let data = GameLogic.convertCardListS2C(
          //         [
          //             21, 31, 41, 51, 61, 71, 81, 91, 101, 111, 121, 131, 141,  //红
          //             22, 32, 42, 52, 62, 72, 82, 92, 102, 112, 122, 132, 142,  //方
          //             23, 33, 43, 53, 63, 73, 83, 93, 103, 113, 123, 133, 143,  //梅
          //             24, 34, 44, 54, 64, 74, 84, 94, 104, 114, 124, 134, 144,  //黑
          //             155, 165
          //         ]);
          // GameLogic.convertCardListC2S(data);
        }

      }, _class3.Instance = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "btnCopy", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "txtRoomId", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "nodeSetDowns", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "nodeNoCards", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "txtCardLevel", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "txtWhoPlay", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "txtCardTime", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "txtGameRate", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "nodeSelfCardCnt", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "txtSelfCnt", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "userHeads", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "cardLayer", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "btnAdd", [_dec14], {
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
//# sourceMappingURL=2a87b3669e2e1c583fdc7e1088af1f0abc401271.js.map