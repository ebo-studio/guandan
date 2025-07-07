System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Node, AItemRenderer, GlobalData, SoundManager, utils, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, RaceAuditionState, ccclass, property, RaceAuditionLineItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAItemRenderer(extras) {
    _reporterNs.report("AItemRenderer", "../virtualScroll/AItemRenerer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalData(extras) {
    _reporterNs.report("GlobalData", "../../manager/GlobalData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRaceAuditionLineData(extras) {
    _reporterNs.report("RaceAuditionLineData", "../../manager/GlobalData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundManager(extras) {
    _reporterNs.report("SoundManager", "../../manager/SoundManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfutils(extras) {
    _reporterNs.report("utils", "../../common/utils", _context.meta, extras);
  }

  _export("RaceAuditionState", void 0);

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
    }, function (_unresolved_4) {
      SoundManager = _unresolved_4.SoundManager;
    }, function (_unresolved_5) {
      utils = _unresolved_5.utils;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "937d46jdwhEfbdziARQTBT+", "RaceAuditionLineItem", undefined);

      __checkObsolete__(['_decorator', 'Label', 'Node']);

      (function (RaceAuditionState) {
        RaceAuditionState[RaceAuditionState["pre"] = 0] = "pre";
        RaceAuditionState[RaceAuditionState["now"] = 1] = "now";
        RaceAuditionState[RaceAuditionState["pass"] = 2] = "pass";
        RaceAuditionState[RaceAuditionState["allDay"] = 3] = "allDay";
      })(RaceAuditionState || _export("RaceAuditionState", RaceAuditionState = {}));

      ({
        ccclass,
        property
      } = _decorator);

      _export("RaceAuditionLineItem", RaceAuditionLineItem = (_dec = ccclass('RaceAuditionLineItem'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Node), _dec6 = property(Node), _dec(_class = (_class2 = class RaceAuditionLineItem extends (_crd && AItemRenderer === void 0 ? (_reportPossibleCrUseOfAItemRenderer({
        error: Error()
      }), AItemRenderer) : AItemRenderer) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "txtDes", _descriptor, this);

          _initializerDefineProperty(this, "txtTimeBig", _descriptor2, this);

          _initializerDefineProperty(this, "txtTimeSmall", _descriptor3, this);

          _initializerDefineProperty(this, "nodeNow", _descriptor4, this);

          _initializerDefineProperty(this, "nodePass", _descriptor5, this);

          this.tmpData = null;
        }

        dataChanged() {
          this.tmpData = this.data;
          this.txtDes.string = this.data.gameTitle;
          this.txtTimeBig.string = "比赛时间: " + this.data.startTime + " - " + this.data.endTime;
          this.txtTimeSmall.string = "每天时间: " + this.data.startHour + " - " + this.data.endHour;
          this.changeState(this.data.state);
        } //报名


        changeState(state) {
          this.nodeNow.active = state == RaceAuditionState.now || state == RaceAuditionState.allDay;
          this.nodePass.active = !this.nodeNow.active;
        } //匹配


        onBtnRegisterClick() {
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).playClick();
          console.log('-------------匹配');
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).send((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.RaceAuditionLine, this.tmpData);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "txtDes", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "txtTimeBig", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "txtTimeSmall", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "nodeNow", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "nodePass", [_dec6], {
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
//# sourceMappingURL=d571e0b8ab83c774c0a3206b28fb40c7d7c5a4b5.js.map