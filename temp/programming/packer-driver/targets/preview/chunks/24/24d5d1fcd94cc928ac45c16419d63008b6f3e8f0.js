System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Sprite, SpriteFrame, AItemRenderer, LobbyUserHeadItem, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, RankAuditionLineItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAItemRenderer(extras) {
    _reporterNs.report("AItemRenderer", "../virtualScroll/AItemRenerer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLobbyUserHeadItem(extras) {
    _reporterNs.report("LobbyUserHeadItem", "../LobbyUserHeadItem", _context.meta, extras);
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
      LobbyUserHeadItem = _unresolved_3.LobbyUserHeadItem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0fc92ORL5ZNq6+ctorsf5A6", "RankAuditionLineItem", undefined);

      __checkObsolete__(['_decorator', 'Label', 'Sprite', 'SpriteFrame']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RankAuditionLineItem", RankAuditionLineItem = (_dec = ccclass('RankAuditionLineItem'), _dec2 = property(_crd && LobbyUserHeadItem === void 0 ? (_reportPossibleCrUseOfLobbyUserHeadItem({
        error: Error()
      }), LobbyUserHeadItem) : LobbyUserHeadItem), _dec3 = property(SpriteFrame), _dec(_class = (_class2 = class RankAuditionLineItem extends (_crd && AItemRenderer === void 0 ? (_reportPossibleCrUseOfAItemRenderer({
        error: Error()
      }), AItemRenderer) : AItemRenderer) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "userHead", _descriptor, this);

          _initializerDefineProperty(this, "sps", _descriptor2, this);
        }

        dataChanged() {
          this.userHead.setData({
            head: this.data.head_img,
            name: this.data.nick_name
          });
          this.node.getChildByName("txtFrom").getComponent(Label).string = "单位:" + this.data.group_name;
          this.node.getChildByName("txtGameCnt").getComponent(Label).string = this.data.num + "局";
          this.node.getChildByName("txtScore").getComponent(Label).string = this.data.score + "";
          this.node.getChildByName("picType").getComponent(Sprite).spriteFrame = this.sps[this.data.is_up];
          this.node.getComponent(Sprite).enabled = this.data.rank % 2 == 0;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "userHead", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "sps", [_dec3], {
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
//# sourceMappingURL=24d5d1fcd94cc928ac45c16419d63008b6f3e8f0.js.map