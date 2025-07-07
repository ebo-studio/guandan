System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Toggle, SoundManager, RankScorePerson, RankScoreTeam, PopWindow, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, RankScoreType, RankScore;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfSoundManager(extras) {
    _reporterNs.report("SoundManager", "../../manager/SoundManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRankScorePerson(extras) {
    _reporterNs.report("RankScorePerson", "./RankScorePerson", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRankScoreTeam(extras) {
    _reporterNs.report("RankScoreTeam", "./RankScoreTeam", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPopWindow(extras) {
    _reporterNs.report("PopWindow", "../PopWindow", _context.meta, extras);
  }

  _export("RankScoreType", void 0);

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
      RankScorePerson = _unresolved_3.RankScorePerson;
    }, function (_unresolved_4) {
      RankScoreTeam = _unresolved_4.RankScoreTeam;
    }, function (_unresolved_5) {
      PopWindow = _unresolved_5.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2275daFAttITagTtaEmhWZG", "RankScore", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Toggle']);

      ({
        ccclass,
        property
      } = _decorator);

      (function (RankScoreType) {
        RankScoreType[RankScoreType["none"] = 0] = "none";
        RankScoreType[RankScoreType["person"] = 1] = "person";
        RankScoreType[RankScoreType["team"] = 2] = "team";
      })(RankScoreType || _export("RankScoreType", RankScoreType = {}));

      _export("RankScore", RankScore = (_dec = ccclass('RankScore'), _dec2 = property(Toggle), _dec3 = property(Toggle), _dec4 = property(_crd && RankScorePerson === void 0 ? (_reportPossibleCrUseOfRankScorePerson({
        error: Error()
      }), RankScorePerson) : RankScorePerson), _dec5 = property(_crd && RankScoreTeam === void 0 ? (_reportPossibleCrUseOfRankScoreTeam({
        error: Error()
      }), RankScoreTeam) : RankScoreTeam), _dec(_class = (_class2 = class RankScore extends (_crd && PopWindow === void 0 ? (_reportPossibleCrUseOfPopWindow({
        error: Error()
      }), PopWindow) : PopWindow) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "togglePerson", _descriptor, this);

          _initializerDefineProperty(this, "toggleTeam", _descriptor2, this);

          _initializerDefineProperty(this, "rankScorePerson", _descriptor3, this);

          _initializerDefineProperty(this, "rankScoreTeam", _descriptor4, this);

          this.tmpScoreType = RankScoreType.none;
        }

        setData(obj) {
          if (!obj) {
            this.tmpScoreType = RankScoreType.person;
          } else {
            this.tmpScoreType = obj;
          }

          this.changeToggle();
        } //切换


        changeToggle() {
          this.togglePerson.isChecked = this.tmpScoreType == RankScoreType.person;
          this.toggleTeam.isChecked = this.tmpScoreType == RankScoreType.team;
          this.rankScorePerson.node.active = this.tmpScoreType == RankScoreType.person;
          this.rankScoreTeam.node.active = this.tmpScoreType == RankScoreType.team;

          if (this.tmpScoreType == RankScoreType.person) {
            this.rankScorePerson.setData();
          } else if (this.tmpScoreType == RankScoreType.team) {
            this.rankScoreTeam.setData();
          }
        } //积分赛


        ontogglePersonClick() {
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).playClick();

          if (this.tmpScoreType != RankScoreType.person) {
            this.tmpScoreType = RankScoreType.person;
            this.changeToggle();
          }
        } //淘汰赛


        ontoggleTeamClick() {
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).playClick();

          if (this.tmpScoreType != RankScoreType.team) {
            this.tmpScoreType = RankScoreType.team;
            this.changeToggle();
          }
        }

        onBtnCloseClick() {
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).playClick();
          this.hide();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "togglePerson", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "toggleTeam", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "rankScorePerson", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "rankScoreTeam", [_dec5], {
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
//# sourceMappingURL=18c2f184ce899de2dca01eab478aafd1c15a3cd0.js.map