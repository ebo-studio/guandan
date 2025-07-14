System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Toggle, SoundManager, PopWindow, RankRaceKickItem, RankRaceScoreItem, RankRaceAuditionItem, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, RaceType, RankRaceItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfSoundManager(extras) {
    _reporterNs.report("SoundManager", "../../manager/SoundManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPopWindow(extras) {
    _reporterNs.report("PopWindow", "../PopWindow", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRankRaceKickItem(extras) {
    _reporterNs.report("RankRaceKickItem", "./RankRaceKickItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRankRaceScoreItem(extras) {
    _reporterNs.report("RankRaceScoreItem", "./RankRaceScoreItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRankRaceAuditionItem(extras) {
    _reporterNs.report("RankRaceAuditionItem", "./RankRaceAuditionItem", _context.meta, extras);
  }

  _export("RaceType", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Toggle = _cc.Toggle;
    }, function (_unresolved_2) {
      SoundManager = _unresolved_2.SoundManager;
    }, function (_unresolved_3) {
      PopWindow = _unresolved_3.default;
    }, function (_unresolved_4) {
      RankRaceKickItem = _unresolved_4.RankRaceKickItem;
    }, function (_unresolved_5) {
      RankRaceScoreItem = _unresolved_5.RankRaceScoreItem;
    }, function (_unresolved_6) {
      RankRaceAuditionItem = _unresolved_6.RankRaceAuditionItem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7875eGMuyZJLryOf0ZS7b2f", "RankRaceItem", undefined);

      __checkObsolete__(['_decorator', 'Toggle']);

      ({
        ccclass,
        property
      } = _decorator);

      (function (RaceType) {
        RaceType[RaceType["none"] = 0] = "none";
        RaceType[RaceType["score"] = 1] = "score";
        RaceType[RaceType["clearOut"] = 2] = "clearOut";
        RaceType[RaceType["audition"] = 3] = "audition";
      })(RaceType || _export("RaceType", RaceType = {}));

      _export("RankRaceItem", RankRaceItem = (_dec = ccclass('RankRaceItem'), _dec2 = property(Toggle), _dec3 = property(Toggle), _dec4 = property(Toggle), _dec5 = property(_crd && RankRaceScoreItem === void 0 ? (_reportPossibleCrUseOfRankRaceScoreItem({
        error: Error()
      }), RankRaceScoreItem) : RankRaceScoreItem), _dec6 = property(_crd && RankRaceKickItem === void 0 ? (_reportPossibleCrUseOfRankRaceKickItem({
        error: Error()
      }), RankRaceKickItem) : RankRaceKickItem), _dec7 = property(_crd && RankRaceAuditionItem === void 0 ? (_reportPossibleCrUseOfRankRaceAuditionItem({
        error: Error()
      }), RankRaceAuditionItem) : RankRaceAuditionItem), _dec(_class = (_class2 = class RankRaceItem extends (_crd && PopWindow === void 0 ? (_reportPossibleCrUseOfPopWindow({
        error: Error()
      }), PopWindow) : PopWindow) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "toggleScore", _descriptor, this);

          _initializerDefineProperty(this, "toggleKickOut", _descriptor2, this);

          _initializerDefineProperty(this, "toggleAudition", _descriptor3, this);

          _initializerDefineProperty(this, "rankScore", _descriptor4, this);

          _initializerDefineProperty(this, "rankKick", _descriptor5, this);

          _initializerDefineProperty(this, "rankAudition", _descriptor6, this);

          this.tmpRaceType = RaceType.none;
        }

        setData(obj) {
          if (!obj) {
            this.tmpRaceType = RaceType.score;
          } else {
            this.tmpRaceType = obj;
          }

          this.changeToggle();
        } //切换


        changeToggle() {
          this.toggleScore.isChecked = this.tmpRaceType == RaceType.score;
          this.toggleKickOut.isChecked = this.tmpRaceType == RaceType.clearOut;
          this.toggleAudition.isChecked = this.tmpRaceType == RaceType.audition;
          this.rankScore.node.active = this.tmpRaceType == RaceType.score;
          this.rankKick.node.active = this.tmpRaceType == RaceType.clearOut;
          this.rankAudition.node.active = this.tmpRaceType == RaceType.audition;

          if (this.tmpRaceType == RaceType.score) {
            this.rankScore.setData();
          } else if (this.tmpRaceType == RaceType.clearOut) {
            this.rankKick.setData();
          } else if (this.tmpRaceType == RaceType.audition) {
            this.rankAudition.setData();
          }
        } //积分赛


        onToggleScoreClick() {
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).playClick();

          if (this.tmpRaceType != RaceType.score) {
            this.tmpRaceType = RaceType.score;
            this.changeToggle();
          }
        } //淘汰赛


        onToggleClearOutClick() {
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).playClick();

          if (this.tmpRaceType != RaceType.clearOut) {
            this.tmpRaceType = RaceType.clearOut;
            this.changeToggle();
          }
        } //海选赛


        onToggleAuditionClick() {
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).playClick();

          if (this.tmpRaceType != RaceType.audition) {
            this.tmpRaceType = RaceType.audition;
            this.changeToggle();
          }
        }

        onBtnCloseClick() {
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).playClick();
          this.hide();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "toggleScore", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "toggleKickOut", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "toggleAudition", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "rankScore", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "rankKick", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "rankAudition", [_dec7], {
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
//# sourceMappingURL=90888b5a3a1382222e39532ee1bbb670a83f66c2.js.map