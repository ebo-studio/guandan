System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Toggle, RankScoreType, SoundManager, PopWindow, GameEndScoreRankPerson, GameEndScoreRankTeam, utils, GlobalData, UIManager, UIConfig, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, GameEndScoreRankItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfRankScoreType(extras) {
    _reporterNs.report("RankScoreType", "../rank/RankScore", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundManager(extras) {
    _reporterNs.report("SoundManager", "../../manager/SoundManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPopWindow(extras) {
    _reporterNs.report("PopWindow", "../PopWindow", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEndScoreRankPerson(extras) {
    _reporterNs.report("GameEndScoreRankPerson", "./GameEndScoreRankPerson", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEndScoreRankTeam(extras) {
    _reporterNs.report("GameEndScoreRankTeam", "./GameEndScoreRankTeam", _context.meta, extras);
  }

  function _reportPossibleCrUseOfutils(extras) {
    _reporterNs.report("utils", "../../common/utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalData(extras) {
    _reporterNs.report("GlobalData", "../../manager/GlobalData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIManager(extras) {
    _reporterNs.report("UIManager", "../../manager/UIManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIConfig(extras) {
    _reporterNs.report("UIConfig", "../../manager/UIConfig", _context.meta, extras);
  }

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
      RankScoreType = _unresolved_2.RankScoreType;
    }, function (_unresolved_3) {
      SoundManager = _unresolved_3.SoundManager;
    }, function (_unresolved_4) {
      PopWindow = _unresolved_4.default;
    }, function (_unresolved_5) {
      GameEndScoreRankPerson = _unresolved_5.GameEndScoreRankPerson;
    }, function (_unresolved_6) {
      GameEndScoreRankTeam = _unresolved_6.GameEndScoreRankTeam;
    }, function (_unresolved_7) {
      utils = _unresolved_7.utils;
    }, function (_unresolved_8) {
      GlobalData = _unresolved_8.GlobalData;
    }, function (_unresolved_9) {
      UIManager = _unresolved_9.UIManager;
    }, function (_unresolved_10) {
      UIConfig = _unresolved_10.UIConfig;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1a62aDXBFZMmKHC0miAfPYL", "GameEndScoreRankItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Toggle']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameEndScoreRankItem", GameEndScoreRankItem = (_dec = ccclass('GameEndScoreRankItem'), _dec2 = property(Toggle), _dec3 = property(Toggle), _dec4 = property(_crd && GameEndScoreRankPerson === void 0 ? (_reportPossibleCrUseOfGameEndScoreRankPerson({
        error: Error()
      }), GameEndScoreRankPerson) : GameEndScoreRankPerson), _dec5 = property(_crd && GameEndScoreRankTeam === void 0 ? (_reportPossibleCrUseOfGameEndScoreRankTeam({
        error: Error()
      }), GameEndScoreRankTeam) : GameEndScoreRankTeam), _dec(_class = (_class2 = class GameEndScoreRankItem extends (_crd && PopWindow === void 0 ? (_reportPossibleCrUseOfPopWindow({
        error: Error()
      }), PopWindow) : PopWindow) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "togglePerson", _descriptor, this);

          _initializerDefineProperty(this, "toggleTeam", _descriptor2, this);

          _initializerDefineProperty(this, "rankScorePerson", _descriptor3, this);

          _initializerDefineProperty(this, "rankScoreTeam", _descriptor4, this);

          this.tmpScoreType = (_crd && RankScoreType === void 0 ? (_reportPossibleCrUseOfRankScoreType({
            error: Error()
          }), RankScoreType) : RankScoreType).none;
        }

        setData(obj) {
          if (!obj) {
            this.tmpScoreType = (_crd && RankScoreType === void 0 ? (_reportPossibleCrUseOfRankScoreType({
              error: Error()
            }), RankScoreType) : RankScoreType).person;
          } else {
            this.tmpScoreType = obj;
          }

          this.changeToggle();
        } //切换


        changeToggle() {
          this.togglePerson.isChecked = this.tmpScoreType == (_crd && RankScoreType === void 0 ? (_reportPossibleCrUseOfRankScoreType({
            error: Error()
          }), RankScoreType) : RankScoreType).person;
          this.toggleTeam.isChecked = this.tmpScoreType == (_crd && RankScoreType === void 0 ? (_reportPossibleCrUseOfRankScoreType({
            error: Error()
          }), RankScoreType) : RankScoreType).team;
          this.rankScorePerson.node.active = this.tmpScoreType == (_crd && RankScoreType === void 0 ? (_reportPossibleCrUseOfRankScoreType({
            error: Error()
          }), RankScoreType) : RankScoreType).person;
          this.rankScoreTeam.node.active = this.tmpScoreType == (_crd && RankScoreType === void 0 ? (_reportPossibleCrUseOfRankScoreType({
            error: Error()
          }), RankScoreType) : RankScoreType).team;

          if (this.tmpScoreType == (_crd && RankScoreType === void 0 ? (_reportPossibleCrUseOfRankScoreType({
            error: Error()
          }), RankScoreType) : RankScoreType).person) {
            this.rankScorePerson.setData();
          } else if (this.tmpScoreType == (_crd && RankScoreType === void 0 ? (_reportPossibleCrUseOfRankScoreType({
            error: Error()
          }), RankScoreType) : RankScoreType).team) {
            this.rankScoreTeam.setData();
          }
        } //积分赛


        ontogglePersonClick() {
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).playClick();

          if (this.tmpScoreType != (_crd && RankScoreType === void 0 ? (_reportPossibleCrUseOfRankScoreType({
            error: Error()
          }), RankScoreType) : RankScoreType).person) {
            this.tmpScoreType = (_crd && RankScoreType === void 0 ? (_reportPossibleCrUseOfRankScoreType({
              error: Error()
            }), RankScoreType) : RankScoreType).person;
            this.changeToggle();
          }
        } //淘汰赛


        ontoggleTeamClick() {
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).playClick();

          if (this.tmpScoreType != (_crd && RankScoreType === void 0 ? (_reportPossibleCrUseOfRankScoreType({
            error: Error()
          }), RankScoreType) : RankScoreType).team) {
            this.tmpScoreType = (_crd && RankScoreType === void 0 ? (_reportPossibleCrUseOfRankScoreType({
              error: Error()
            }), RankScoreType) : RankScoreType).team;
            this.changeToggle();
          }
        } //退出


        onBackBtnClick() {
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).playClick();

          if ((_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).getSceneName() == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).sceneName.game) {
            console.log("nzp add 返回大厅 2");
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
          }

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
//# sourceMappingURL=7122e3ac1a5ee539bc9012f585c9b1049cc1f464.js.map