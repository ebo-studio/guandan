System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCInteger, Component, Mask, UITransform, _dec, _dec2, _dec3, _class, _class2, _descriptor, _crd, ccclass, property, executeInEditMode, GraphicsMask;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      CCInteger = _cc.CCInteger;
      Component = _cc.Component;
      Mask = _cc.Mask;
      UITransform = _cc.UITransform;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "18b8cLEJIRMvKMr6aBjgZep", "GraphicsMask", undefined);

      __checkObsolete__(['_decorator', 'CCInteger', 'Component', 'Graphics', 'Mask', 'Node', 'UITransform']);

      ({
        ccclass,
        property,
        executeInEditMode
      } = _decorator);

      _export("GraphicsMask", GraphicsMask = (_dec = ccclass('GraphicsMask'), _dec2 = executeInEditMode(true), _dec3 = property({
        type: CCInteger
      }), _dec(_class = _dec2(_class = (_class2 = class GraphicsMask extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "radius", _descriptor, this);
        }

        start() {
          this.drawArc();
        }

        drawArc() {
          setTimeout(() => {
            var mask = this.node.getComponent(Mask);
            mask.type = Mask.Type.GRAPHICS_STENCIL;
            var uiTransform = this.getComponent(UITransform);
            var {
              width,
              height,
              anchorX,
              anchorY
            } = uiTransform;
            var graphics = mask.subComp;
            graphics.clear();
            var x = -width * anchorX;
            var y = -height * anchorY;
            graphics.roundRect(x, y, width, height, this.radius || 10);
            graphics.fill();
          }, 100);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "radius", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10;
        }
      })), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=eb07361feaa232bf6b53f6796043f9b40fb863b9.js.map