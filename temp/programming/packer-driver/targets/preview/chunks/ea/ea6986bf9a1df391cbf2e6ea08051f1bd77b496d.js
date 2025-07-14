System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Sprite, SpriteFrame, utils, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, GameEndAuditionHeadItem;

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

      _cclegacy._RF.push({}, "8a115V1PRNPAqiYZxrC53cH", "GameEndAuditionHeadItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Sprite', 'SpriteFrame']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameEndAuditionHeadItem", GameEndAuditionHeadItem = (_dec = ccclass('GameEndAuditionHeadItem'), _dec2 = property(Sprite), _dec3 = property(Label), _dec4 = property(SpriteFrame), _dec(_class = (_class2 = class GameEndAuditionHeadItem extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "picRank", _descriptor, this);

          _initializerDefineProperty(this, "txtScore", _descriptor2, this);

          _initializerDefineProperty(this, "sps", _descriptor3, this);
        }

        setData(data, force) {
          if (force === void 0) {
            force = false;
          }

          if (data.head) {
            var sp = this.node.getChildByName("headMask").getChildByName("picHead").getComponent(Sprite);
            (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
              error: Error()
            }), utils) : utils).loadRemoteSpriteframe(sp, data.head);
          }

          var txtName = this.node.getChildByName("txtName").getComponent(Label);

          if (data.name) {
            txtName.string = (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
              error: Error()
            }), utils) : utils).clampNickname(data.name, 6);
          } else {
            txtName.string = "";
          }

          this.picRank.node.active = !force;

          if (!force) {
            this.picRank.spriteFrame = this.sps[data.rank - 1];
          }

          var tmpScore = Boolean(data.score) ? data.score : 0;

          if (force) {
            this.txtScore.string = tmpScore + "";
          } else {
            this.txtScore.string = "+" + tmpScore;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "picRank", [_dec2], {
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "sps", [_dec4], {
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
//# sourceMappingURL=ea6986bf9a1df391cbf2e6ea08051f1bd77b496d.js.map