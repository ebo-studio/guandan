System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Sprite, GlobalData, GameLogic, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _crd, ccclass, property, CardItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGlobalData(extras) {
    _reporterNs.report("GlobalData", "../../manager/GlobalData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameLogic(extras) {
    _reporterNs.report("GameLogic", "./GameLogic", _context.meta, extras);
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
      Node = _cc.Node;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      GlobalData = _unresolved_2.GlobalData;
    }, function (_unresolved_3) {
      GameLogic = _unresolved_3.GameLogic;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "833e2N/yMFGaJ83XWg82IYN", "CardItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Sprite', 'SpriteFrame']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("CardItem", CardItem = (_dec = ccclass('CardItem'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Sprite), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Node), _dec(_class = (_class2 = class CardItem extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "nodeMask", _descriptor, this);

          _initializerDefineProperty(this, "nodeReplace", _descriptor2, this);

          _initializerDefineProperty(this, "picCard", _descriptor3, this);

          _initializerDefineProperty(this, "picBack", _descriptor4, this);

          _initializerDefineProperty(this, "tonghua", _descriptor5, this);

          _initializerDefineProperty(this, "liuzha", _descriptor6, this);

          _initializerDefineProperty(this, "wuzha", _descriptor7, this);

          _initializerDefineProperty(this, "sizha", _descriptor8, this);

          _initializerDefineProperty(this, "wanzha", _descriptor9, this);

          _initializerDefineProperty(this, "shunzi", _descriptor10, this);

          _initializerDefineProperty(this, "sandaier", _descriptor11, this);

          _initializerDefineProperty(this, "liandui", _descriptor12, this);

          this.boolSelect = false;
          this.boolMask = false;
          this.cardValue = 0;
          this.cardColor = 0;
          this.cardSize = 0;
          this.index = null;
          this.boolBottom = false;
          this.boolLastLine = false;
        }

        //最右边
        setMask(mask) {
          this.boolMask = mask;
          this.nodeMask.active = mask;
        }

        isMask() {
          return this.boolMask;
        }

        setSelect(select) {
          this.boolSelect = select;
        }

        isSelect() {
          return this.boolSelect;
        }

        showTonghua(isShow) {
          this.tonghua.active = isShow;
        }

        showBomb(bombNumber) {
          this.liuzha.active = bombNumber == 6;
          this.wuzha.active = bombNumber == 5;
          this.sizha.active = bombNumber == 4;
        }

        showThreeTwo(isShow) {
          this.sandaier.active = isShow;
        }

        showShunzi(isShow) {
          this.shunzi.active = isShow;
        }

        showWangza(isShow) {
          this.wanzha.active = isShow;
        }

        showliandui(isShow) {
          this.liandui.active = isShow;
        } //逢人配


        showReplace(type) {
          this.nodeReplace.active = type;
        } //value 0x23


        setValue(value, cardFrame) {
          this.cardValue = value;
          this.picCard.spriteFrame = cardFrame;
          let color = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
            error: Error()
          }), GameLogic) : GameLogic).getCardColor(value);
          let size = value % 16;
          this.showReplace(color == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).cardInfo.unitCardColor && size == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).cardInfo.levelCard);
          this.setBack(false);
          this.showTonghua(false);
          this.showThreeTwo(false);
          this.showWangza(false);
          this.showShunzi(false);
          this.showliandui(false);
          this.showBomb(3);
        }

        setIndex(idx) {
          this.index = idx; // console.log("idx--> ", idx);
        }

        getIndex() {
          return this.index;
        }

        getValue() {
          return this.cardValue;
        } //最底部的牌


        setBottom(type) {
          this.boolBottom = type;
        }

        getBottom() {
          return this.boolBottom;
        }

        setLastLine(type) {
          this.boolLastLine = type;
        }

        getLastLine() {
          return this.boolLastLine;
        }

        setBack(type) {
          this.picBack.active = type;
        }

        clear() {
          this.showReplace(false);
          this.setMask(false);
          this.setBack(false);
          this.boolSelect = false;
          this.boolMask = false;
          this.cardValue = 0;
          this.cardColor = 0;
          this.cardSize = 0;
          this.index = null;
          this.showTonghua(false);
          this.showThreeTwo(false);
          this.showWangza(false);
          this.showShunzi(false);
          this.showliandui(false);
          this.showBomb(3);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nodeMask", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nodeReplace", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "picCard", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "picBack", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "tonghua", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "liuzha", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "wuzha", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "sizha", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "wanzha", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "shunzi", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "sandaier", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "liandui", [_dec13], {
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
//# sourceMappingURL=f09da42dc2efda0007a810837c8bc337322ef8f5.js.map