System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Sprite, SpriteFrame, utils, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, GameEndKickHeadItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfutils(extras) {
    _reporterNs.report("utils", "../../common/utils", _context.meta, extras);
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
      Label = _cc.Label;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
    }, function (_unresolved_2) {
      utils = _unresolved_2.utils;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6f507BBX/hNDKoVWoUwO/+B", "GameEndKickHeadItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node', 'Sprite', 'SpriteFrame']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameEndKickHeadItem", GameEndKickHeadItem = (_dec = ccclass('GameEndKickHeadItem'), _dec2 = property(Sprite), _dec3 = property(Sprite), _dec4 = property(SpriteFrame), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(SpriteFrame), _dec(_class = (_class2 = class GameEndKickHeadItem extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "picRank", _descriptor, this);

          _initializerDefineProperty(this, "picRes", _descriptor2, this);

          _initializerDefineProperty(this, "spRes", _descriptor3, this);

          _initializerDefineProperty(this, "txtRes", _descriptor4, this);

          _initializerDefineProperty(this, "txtTime", _descriptor5, this);

          _initializerDefineProperty(this, "sps", _descriptor6, this);
        }

        setData(data, isWin, des) {
          if (data.headImg) {
            let sp = this.node.getChildByName("headMask").getChildByName("picHead").getComponent(Sprite);
            (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
              error: Error()
            }), utils) : utils).loadRemoteSpriteframe(sp, data.headImg);
          }

          let txtName = this.node.getChildByName("txtName").getComponent(Label);

          if (data.name) {
            txtName.string = (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
              error: Error()
            }), utils) : utils).clampNickname(data.name, 6);
          } else {
            txtName.string = "无名...";
          }

          this.txtRes.string = des;
          this.picRes.spriteFrame = this.spRes[Number(!isWin)]; // this.picRank.spriteFrame = this.sps[data.rank - 1];
          // this.txtTime.string=  utils.getTimeDesc(data.time);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "picRank", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "picRes", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "spRes", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "txtRes", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "txtTime", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "sps", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ba4c8ec40dcaf3e29c08a9dd8b5ac9c74dc70450.js.map