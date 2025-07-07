System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, Label, Sprite, color, tween, PopWindow, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, WaitItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfPopWindow(extras) {
    _reporterNs.report("PopWindow", "./PopWindow", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      Label = _cc.Label;
      Sprite = _cc.Sprite;
      color = _cc.color;
      tween = _cc.tween;
    }, function (_unresolved_2) {
      PopWindow = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8a7f7i6supDb4+ttUwx0r+7", "WaitItem", undefined);

      __checkObsolete__(['_decorator', 'Node', 'Label', 'Sprite', 'color', 'tween']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("WaitItem", WaitItem = (_dec = ccclass('WaitItem'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Label), _dec(_class = (_class2 = class WaitItem extends (_crd && PopWindow === void 0 ? (_reportPossibleCrUseOfPopWindow({
        error: Error()
      }), PopWindow) : PopWindow) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "picBg", _descriptor, this);

          _initializerDefineProperty(this, "picLoad", _descriptor2, this);

          _initializerDefineProperty(this, "txtDes", _descriptor3, this);
        }

        setData(data) {
          this.picBg.getComponent(Sprite).color = color(0, 0, 0, data.opacity * 255);
          this.picLoad.active = data.opacity != 0;

          if (data.opacity == 0) {
            this.txtDes.string = "";
          } else {
            this.txtDes.string = data.des;
          }

          if (this.picLoad) {
            tween(this.picLoad).by(2, {
              angle: -360
            }).repeatForever().start();
          }
        }

        show() {
          this.node.active = true;
        }

        hide() {
          this.node.active = false;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "picBg", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "picLoad", [_dec3], {
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
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=966d15a4566e065ff2565a00415bfcdf671ca6c6.js.map