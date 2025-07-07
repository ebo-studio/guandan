System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Sprite, GlobalData, GameLogic, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, CardItem;

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

      _export("CardItem", CardItem = (_dec = ccclass('CardItem'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Sprite), _dec5 = property(Node), _dec(_class = (_class2 = class CardItem extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "nodeMask", _descriptor, this);

          _initializerDefineProperty(this, "nodeReplace", _descriptor2, this);

          _initializerDefineProperty(this, "picCard", _descriptor3, this);

          _initializerDefineProperty(this, "picBack", _descriptor4, this);

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
        } //逢人配


        showReplace(type) {
          this.nodeReplace.active = type;
        } //value 0x23


        setValue(value, cardFrame) {
          this.cardValue = value;
          this.picCard.spriteFrame = cardFrame;
          var color = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
            error: Error()
          }), GameLogic) : GameLogic).getCardColor(value);
          var size = value % 16;
          this.showReplace(color == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).cardInfo.unitCardColor && size == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).cardInfo.levelCard);
          this.setBack(false);
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
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nodeMask", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nodeReplace", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "picCard", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "picBack", [_dec5], {
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
//# sourceMappingURL=662dc1ce8ff7dc8d4fbf4889d758a1571eeecde2.js.map