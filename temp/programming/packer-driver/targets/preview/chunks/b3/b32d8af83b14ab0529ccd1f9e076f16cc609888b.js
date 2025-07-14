System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Sprite, SpriteFrame, AItemRenderer, GlobalData, LobbyUserHeadItem, SoundManager, UIManager, UIConfig, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, RankRaceKickLineItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAItemRenderer(extras) {
    _reporterNs.report("AItemRenderer", "../virtualScroll/AItemRenerer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameResultInfo(extras) {
    _reporterNs.report("GameResultInfo", "../../manager/GlobalData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalData(extras) {
    _reporterNs.report("GlobalData", "../../manager/GlobalData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLobbyUserHeadItem(extras) {
    _reporterNs.report("LobbyUserHeadItem", "../LobbyUserHeadItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundManager(extras) {
    _reporterNs.report("SoundManager", "../../manager/SoundManager", _context.meta, extras);
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
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
    }, function (_unresolved_2) {
      AItemRenderer = _unresolved_2.default;
    }, function (_unresolved_3) {
      GlobalData = _unresolved_3.GlobalData;
    }, function (_unresolved_4) {
      LobbyUserHeadItem = _unresolved_4.LobbyUserHeadItem;
    }, function (_unresolved_5) {
      SoundManager = _unresolved_5.SoundManager;
    }, function (_unresolved_6) {
      UIManager = _unresolved_6.UIManager;
    }, function (_unresolved_7) {
      UIConfig = _unresolved_7.UIConfig;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e66e9b8/bZGx4tVien4uZmr", "RankRaceKickLineItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node', 'Sprite', 'SpriteFrame']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RankRaceKickLineItem", RankRaceKickLineItem = (_dec = ccclass('RankRaceKickLineItem'), _dec2 = property(_crd && LobbyUserHeadItem === void 0 ? (_reportPossibleCrUseOfLobbyUserHeadItem({
        error: Error()
      }), LobbyUserHeadItem) : LobbyUserHeadItem), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Sprite), _dec7 = property(SpriteFrame), _dec(_class = (_class2 = class RankRaceKickLineItem extends (_crd && AItemRenderer === void 0 ? (_reportPossibleCrUseOfAItemRenderer({
        error: Error()
      }), AItemRenderer) : AItemRenderer) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "headItem", _descriptor, this);

          _initializerDefineProperty(this, "txtScore", _descriptor2, this);

          _initializerDefineProperty(this, "txtDes", _descriptor3, this);

          _initializerDefineProperty(this, "txtTime", _descriptor4, this);

          _initializerDefineProperty(this, "resType", _descriptor5, this);

          _initializerDefineProperty(this, "sps", _descriptor6, this);

          this.desList = ["淘汰", "晋级"];
        }

        dataChanged() {
          this.headItem.setData({
            head: this.data.head_img,
            name: ""
          });
          this.txtDes.string = this.data.game_title;
          this.txtTime.string = this.data.start_time;
          this.resType.spriteFrame = this.sps[this.data.score];
          this.txtScore.string = this.desList[this.data.score];
        }

        onBtnDetailClick() {
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).playClick();
          (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).requestUpList(this.data.game_id, {
            success: () => {
              (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
                error: Error()
              }), UIManager) : UIManager).Instace.showUI({
                path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
                  error: Error()
                }), UIConfig) : UIConfig).RankKickItemKey
              });
            }
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "headItem", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "txtScore", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "txtDes", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "txtTime", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "resType", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "sps", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b32d8af83b14ab0529ccd1f9e076f16cc609888b.js.map