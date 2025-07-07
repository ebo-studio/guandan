System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Node, AItemRenderer, GlobalData, RaceTimeType, SoundManager, utils, RaceJoinState, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _crd, ccclass, property, RaceKickBtnType, RaceKickLineItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAItemRenderer(extras) {
    _reporterNs.report("AItemRenderer", "../virtualScroll/AItemRenerer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalData(extras) {
    _reporterNs.report("GlobalData", "../../manager/GlobalData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRaceKickLineData(extras) {
    _reporterNs.report("RaceKickLineData", "../../manager/GlobalData", _context.meta, extras);
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

  function _reportPossibleCrUseOfRaceJoinState(extras) {
    _reporterNs.report("RaceJoinState", "../raceScore/RaceScoreLineItem", _context.meta, extras);
  }

  _export("RaceKickBtnType", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Label = _cc.Label;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      AItemRenderer = _unresolved_2.default;
    }, function (_unresolved_3) {
      GlobalData = _unresolved_3.GlobalData;
      RaceTimeType = _unresolved_3.RaceTimeType;
    }, function (_unresolved_4) {
      SoundManager = _unresolved_4.SoundManager;
    }, function (_unresolved_5) {
      utils = _unresolved_5.utils;
    }, function (_unresolved_6) {
      RaceJoinState = _unresolved_6.RaceJoinState;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "90f8eUxXG1Gfq0qnqZvYdEQ", "RaceKickLineItem", undefined);

      __checkObsolete__(['_decorator', 'Label', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      (function (RaceKickBtnType) {
        RaceKickBtnType[RaceKickBtnType["register"] = 1] = "register";
        RaceKickBtnType[RaceKickBtnType["look"] = 2] = "look";
      })(RaceKickBtnType || _export("RaceKickBtnType", RaceKickBtnType = {}));

      _export("RaceKickLineItem", RaceKickLineItem = (_dec = ccclass('RaceKickLineItem'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Node), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Label), _dec(_class = (_class2 = class RaceKickLineItem extends (_crd && AItemRenderer === void 0 ? (_reportPossibleCrUseOfAItemRenderer({
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

          this.refreshCnt();
          this.changeTimeState(this.data.timeState);
          this.updateTime(this.data.leftTime);
        }

        refreshCnt() {
          this.txtCnt.string = "参与人数:" + this.data.currentNum + "/" + this.data.totalNum;
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
            this.nodeDone.active = this.data.state == (_crd && RaceJoinState === void 0 ? (_reportPossibleCrUseOfRaceJoinState({
              error: Error()
            }), RaceJoinState) : RaceJoinState).done;
            this.nodePass.active = this.data.state == (_crd && RaceJoinState === void 0 ? (_reportPossibleCrUseOfRaceJoinState({
              error: Error()
            }), RaceJoinState) : RaceJoinState).do;
            this.showTimeCondition(this.data.state == (_crd && RaceJoinState === void 0 ? (_reportPossibleCrUseOfRaceJoinState({
              error: Error()
            }), RaceJoinState) : RaceJoinState).done, false);
          } else if (state == (_crd && RaceTimeType === void 0 ? (_reportPossibleCrUseOfRaceTimeType({
            error: Error()
          }), RaceTimeType) : RaceTimeType).start) {
            this.nodeHaveStart.active = true;
          }
        } //报名


        changeState(state) {
          this.nodeDo.active = state == (_crd && RaceJoinState === void 0 ? (_reportPossibleCrUseOfRaceJoinState({
            error: Error()
          }), RaceJoinState) : RaceJoinState).do;
          this.nodeDone.active = state == (_crd && RaceJoinState === void 0 ? (_reportPossibleCrUseOfRaceJoinState({
            error: Error()
          }), RaceJoinState) : RaceJoinState).done;
          this.refreshCnt();
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
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).send((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.RaceKickLine, {
            type: RaceKickBtnType.register,
            data: this.tmpData
          });
        } //详情


        onBtnInfoClick() {
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).playClick();
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).send((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.RaceKickLine, {
            type: RaceKickBtnType.look,
            data: this.tmpData
          });
        } //比赛中


        onBtnGameInfo() {
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).playClick();
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).send((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.LookKickGameInfo, this.tmpData.id);
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
//# sourceMappingURL=b59c5e8ce4607a7811563dd3a7f3779a9e6d0e2e.js.map