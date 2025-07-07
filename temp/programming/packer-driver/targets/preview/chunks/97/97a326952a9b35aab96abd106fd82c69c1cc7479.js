System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Vec3, tween, UIOpacity, PopWindow, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, MessageHint;

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
      Label = _cc.Label;
      Vec3 = _cc.Vec3;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
    }, function (_unresolved_2) {
      PopWindow = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "058e5lrNMtCLJMr30vx95pa", "MessageHint", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Vec3', 'tween', 'UIOpacity', 'Tween']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", MessageHint = (_dec = ccclass('MessageHint'), _dec2 = property(Label), _dec3 = property(Vec3), _dec(_class = (_class2 = class MessageHint extends (_crd && PopWindow === void 0 ? (_reportPossibleCrUseOfPopWindow({
        error: Error()
      }), PopWindow) : PopWindow) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "labelText", _descriptor, this);

          _initializerDefineProperty(this, "startPosition", _descriptor2, this);

          _initializerDefineProperty(this, "fadeInTime", _descriptor3, this);

          _initializerDefineProperty(this, "stayTime", _descriptor4, this);

          _initializerDefineProperty(this, "fadeOutTime", _descriptor5, this);
        }

        setData(text) {
          // Tween.stopAll();
          this.labelText.string = text;
          this.node.setPosition(this.startPosition);
          this.node.getComponent(UIOpacity).opacity = 0; //3.0 UIOpacity 必须单独使用, 不能放到sequence中(类型不同)

          tween(this.node.getComponent(UIOpacity)).to(this.fadeInTime, {
            opacity: 255
          }, {
            easing: 'quadOut'
          }).start();
          tween(this.node).to(this.fadeInTime, {
            position: new Vec3(0, 150, 0)
          }, {
            easing: 'quadOut'
          }).delay(this.stayTime).call(() => {
            tween(this.node.getComponent(UIOpacity)).to(this.fadeOutTime, {
              opacity: 0
            }, {
              easing: 'quadIn'
            }).call(() => {}).start();
          }).start();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "labelText", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "startPosition", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "fadeInTime", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "stayTime", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "fadeOutTime", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=97a326952a9b35aab96abd106fd82c69c1cc7479.js.map