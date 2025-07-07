System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Color, Label, LabelOutline, Node, Sprite, AItemRenderer, GlobalData, RaceTimeType, SoundManager, utils, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _crd, ccclass, property, RaceJoinState, RaceScoreLineItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAItemRenderer(extras) {
    _reporterNs.report("AItemRenderer", "../virtualScroll/AItemRenerer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalData(extras) {
    _reporterNs.report("GlobalData", "../../manager/GlobalData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRaceScoreLineData(extras) {
    _reporterNs.report("RaceScoreLineData", "../../manager/GlobalData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRaceTimeType(extras) {
    _reporterNs.report("RaceTimeType", "../../manager/GlobalData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundManager(extras) {
    _reporterNs.report("SoundManager", "../../manager/SoundManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfutils(extras) {
    _reporterNs.report("utils", "../../common/utils", _context.meta, extras);
  }

  _export("RaceJoinState", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Color = _cc.Color;
      Label = _cc.Label;
      LabelOutline = _cc.LabelOutline;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      AItemRenderer = _unresolved_2.default;
    }, function (_unresolved_3) {
      GlobalData = _unresolved_3.GlobalData;
      RaceTimeType = _unresolved_3.RaceTimeType;
    }, function (_unresolved_4) {
      SoundManager = _unresolved_4.SoundManager;
    }, function (_unresolved_5) {
      utils = _unresolved_5.utils;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "19b06509GtKxJwdsyAYmylu", "RaceScoreLineItem", undefined);

      __checkObsolete__(['_decorator', 'Color', 'color', 'Label', 'LabelOutline', 'Node', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator); //参与状态[1:报名,2:已报名,3:过期]

      (function (RaceJoinState) {
        RaceJoinState[RaceJoinState["do"] = 0] = "do";
        RaceJoinState[RaceJoinState["done"] = 1] = "done";
        RaceJoinState[RaceJoinState["pass"] = 2] = "pass";
      })(RaceJoinState || _export("RaceJoinState", RaceJoinState = {}));

      _export("RaceScoreLineItem", RaceScoreLineItem = (_dec = ccclass('RaceScoreLineItem'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Node), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Label), _dec(_class = (_class2 = class RaceScoreLineItem extends (_crd && AItemRenderer === void 0 ? (_reportPossibleCrUseOfAItemRenderer({
        error: Error()
      }), AItemRenderer) : AItemRenderer) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "txtDes", _descriptor, this);

          _initializerDefineProperty(this, "txtTime", _descriptor2, this);

          _initializerDefineProperty(this, "txtCnt", _descriptor3, this);

          _initializerDefineProperty(this, "txtCntCondition", _descriptor4, this);

          _initializerDefineProperty(this, "nodeTimeCondition", _descriptor5, this);

          _initializerDefineProperty(this, "txtHour", _descriptor6, this);

          _initializerDefineProperty(this, "txtMin", _descriptor7, this);

          _initializerDefineProperty(this, "nodeDo", _descriptor8, this);

          _initializerDefineProperty(this, "nodeDone", _descriptor9, this);

          _initializerDefineProperty(this, "nodePass", _descriptor10, this);

          _initializerDefineProperty(this, "nodeHaveStart", _descriptor11, this);

          _initializerDefineProperty(this, "txtTip", _descriptor12, this);

          this.tmpData = null;
        }

        dataChanged() {
          this.tmpData = this.data;
          this.txtDes.string = this.data.gameTitle;
          this.txtTime.string = this.data.gameStartTime; // this.txtCntCondition.string = "满" + this.data.totalNum + "开赛";

          this.refreshCnt(this.data.currentNum);
          this.changeTimeState(this.data.timeState);
          this.updateTime(this.data.leftTime);
        }

        refreshCnt(cnt) {
          this.txtCnt.string = "参与人数:" + cnt + "/" + this.data.totalNum;
        } //先判断时间,再判断状态


        changeTimeState(state) {
          this.nodeDo.active = false;
          this.nodeDone.active = false;
          this.nodePass.active = false;
          this.nodeHaveStart.active = false;
          this.nodeTimeCondition.active = false;

          if (state == (_crd && RaceTimeType === void 0 ? (_reportPossibleCrUseOfRaceTimeType({
            error: Error()
          }), RaceTimeType) : RaceTimeType).register) {
            this.changeState(this.data.state);
            this.showTimeCondition(true, true);
          } else if (state == (_crd && RaceTimeType === void 0 ? (_reportPossibleCrUseOfRaceTimeType({
            error: Error()
          }), RaceTimeType) : RaceTimeType).wait) {
            this.nodeDone.active = this.data.state == RaceJoinState.done;
            this.nodePass.active = this.data.state == RaceJoinState.do;
            this.showTimeCondition(this.data.state == RaceJoinState.done, false);
          } else if (state == (_crd && RaceTimeType === void 0 ? (_reportPossibleCrUseOfRaceTimeType({
            error: Error()
          }), RaceTimeType) : RaceTimeType).start) {
            this.nodeHaveStart.active = true;
          }
        } //报名


        changeState(state) {
          this.nodeDo.active = state == RaceJoinState.do;
          this.nodeDone.active = state == RaceJoinState.done;
          this.nodeDo.getComponent(Sprite).grayscale = this.tmpData.gameType != 1;
          var lab = this.nodeDo.children[0].getComponent(Label);
          var labOut = this.nodeDo.children[0].getComponent(LabelOutline);

          if (this.tmpData.gameType == 1) {
            lab.color = new Color(255, 255, 255, 255);
            labOut.color = new Color(43, 85, 153, 255);
          } else {
            lab.color = new Color(160, 151, 151, 255);
            labOut.color = new Color(32, 32, 32, 255);
          }
        }

        showTimeCondition(show, type) {
          this.nodeTimeCondition.active = show;
          this.txtTip.string = type ? "报名截止" : "即将开赛";
        }

        updateTime(leftTime) {
          if (this.nodeTimeCondition.active && leftTime >= 0) {
            var strTime = (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
              error: Error()
            }), utils) : utils).getTimeDesc3(leftTime).split(':');
            this.txtHour.string = strTime[0];
            this.txtMin.string = strTime[1];
          }
        } //报名


        onBtnRegisterClick() {
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).playClick();
          console.log('-------------报名');
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).send((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.RaceScoreLine, this.tmpData);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "txtDes", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "txtTime", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "txtCnt", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "txtCntCondition", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "nodeTimeCondition", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "txtHour", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "txtMin", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "nodeDo", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "nodeDone", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "nodePass", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "nodeHaveStart", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "txtTip", [_dec13], {
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
//# sourceMappingURL=d0202704e7aa6ab5859063b39297956a652ff168.js.map