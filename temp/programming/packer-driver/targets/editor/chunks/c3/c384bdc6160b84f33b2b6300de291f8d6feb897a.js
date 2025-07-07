System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, SoundManager, LobbyUserHeadItem, AItemRenderer, GlobalData, UIManager, UIConfig, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, RankRaceScoreLineItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfSoundManager(extras) {
    _reporterNs.report("SoundManager", "../../manager/SoundManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLobbyUserHeadItem(extras) {
    _reporterNs.report("LobbyUserHeadItem", "../LobbyUserHeadItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAItemRenderer(extras) {
    _reporterNs.report("AItemRenderer", "../virtualScroll/AItemRenerer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameResultInfo(extras) {
    _reporterNs.report("GameResultInfo", "../../manager/GlobalData", _context.meta, extras);
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
      Label = _cc.Label;
    }, function (_unresolved_2) {
      SoundManager = _unresolved_2.SoundManager;
    }, function (_unresolved_3) {
      LobbyUserHeadItem = _unresolved_3.LobbyUserHeadItem;
    }, function (_unresolved_4) {
      AItemRenderer = _unresolved_4.default;
    }, function (_unresolved_5) {
      GlobalData = _unresolved_5.GlobalData;
    }, function (_unresolved_6) {
      UIManager = _unresolved_6.UIManager;
    }, function (_unresolved_7) {
      UIConfig = _unresolved_7.UIConfig;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a7252wHQGxOgZ8Pz57cRy5/", "RankRaceScoreLineItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RankRaceScoreLineItem", RankRaceScoreLineItem = (_dec = ccclass('RankRaceScoreLineItem'), _dec2 = property(_crd && LobbyUserHeadItem === void 0 ? (_reportPossibleCrUseOfLobbyUserHeadItem({
        error: Error()
      }), LobbyUserHeadItem) : LobbyUserHeadItem), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec(_class = (_class2 = class RankRaceScoreLineItem extends (_crd && AItemRenderer === void 0 ? (_reportPossibleCrUseOfAItemRenderer({
        error: Error()
      }), AItemRenderer) : AItemRenderer) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "headItem", _descriptor, this);

          _initializerDefineProperty(this, "txtScore", _descriptor2, this);

          _initializerDefineProperty(this, "txtDes", _descriptor3, this);

          _initializerDefineProperty(this, "txtTime", _descriptor4, this);
        }

        dataChanged() {
          this.headItem.setData({
            head: this.data.head_img,
            name: ""
          });
          this.txtScore.string = this.data.score.toString();
          this.txtDes.string = this.data.game_title;
          this.txtTime.string = this.data.start_time;
        }

        onBtnDetailClick() {
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).playClick();
          (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).requestRankScoreData(this.data.game_id, () => {
            (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
              error: Error()
            }), UIManager) : UIManager).Instace.showUI({
              path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
                error: Error()
              }), UIConfig) : UIConfig).RankScoreItemKey
            });
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "headItem", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "txtScore", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "txtDes", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "txtTime", [_dec5], {
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
//# sourceMappingURL=c384bdc6160b84f33b2b6300de291f8d6feb897a.js.map