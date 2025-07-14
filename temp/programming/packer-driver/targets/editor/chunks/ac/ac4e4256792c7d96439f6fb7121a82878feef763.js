System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Color, Label, Node, Sprite, PopWindow, SoundManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, MessageBoxCommonTest;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfPopWindow(extras) {
    _reporterNs.report("PopWindow", "./PopWindow", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundManager(extras) {
    _reporterNs.report("SoundManager", "../manager/SoundManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Button = _cc.Button;
      Color = _cc.Color;
      Label = _cc.Label;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      PopWindow = _unresolved_2.default;
    }, function (_unresolved_3) {
      SoundManager = _unresolved_3.SoundManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a1a0bzuNg9CZarCq0fMdmjX", "MessageBoxCommonTest", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Color', 'Label', 'Node', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MessageBoxCommonTest", MessageBoxCommonTest = (_dec = ccclass('MessageBoxCommonTest'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec(_class = (_class2 = class MessageBoxCommonTest extends (_crd && PopWindow === void 0 ? (_reportPossibleCrUseOfPopWindow({
        error: Error()
      }), PopWindow) : PopWindow) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "texDes", _descriptor, this);

          _initializerDefineProperty(this, "txtOk", _descriptor2, this);

          _initializerDefineProperty(this, "txtCancle", _descriptor3, this);

          _initializerDefineProperty(this, "nodeCancel", _descriptor4, this);

          _initializerDefineProperty(this, "btnNode1", _descriptor5, this);

          _initializerDefineProperty(this, "btnNode2", _descriptor6, this);

          this.okFunc = null;
          this.cancleFunc = null;
          this.autoClose = true;
          this.numCode = 0;
        }

        setData(data, autoClose = true) {
          this.texDes.string = data.des;
          this.okFunc = data.okFunc;
          this.cancleFunc = data.cancleFunc;
          this.autoClose = autoClose;
          this.nodeCancel.active = Boolean(data.cancleFunc);
        }

        onOkBtnClick() {
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).playClick();

          if (this.okFunc) {
            this.okFunc(this.numCode);
          }

          if (this.autoClose) {
            this.hide();
          }
        }

        onCancleBtnClick() {
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).playClick();

          if (this.cancleFunc) {
            this.cancleFunc();
          }

          if (this.autoClose) {
            this.hide();
          }
        }

        onBtnCodeClick(touch, data) {
          this.numCode = Number(data);
          console.log('numCode-----> ', this.numCode);
          this.checkCode(this.numCode);
        }

        checkCode(num) {
          //重置
          for (let i = 0; i < this.btnNode1.children.length; i++) {
            const element = this.btnNode1.children[i];

            if (element.getComponent(Button)) {
              if (element.name == "Button" + num) {
                element.getComponent(Sprite).color = new Color(255, 0, 0, 255);
              } else {
                element.getComponent(Sprite).color = new Color(255, 255, 255, 255);
              }
            }
          }

          for (let i = 0; i < this.btnNode2.children.length; i++) {
            const element = this.btnNode2.children[i];

            if (element.getComponent(Button)) {
              if (element.name == "Button" + num) {
                element.getComponent(Sprite).color = new Color(255, 0, 0, 255);
              } else {
                element.getComponent(Sprite).color = new Color(255, 255, 255, 255);
              }
            }
          }
        }

        onDisable() {
          this.checkCode(0);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "texDes", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "txtOk", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "txtCancle", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "nodeCancel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "btnNode1", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "btnNode2", [_dec7], {
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
//# sourceMappingURL=ac4e4256792c7d96439f6fb7121a82878feef763.js.map