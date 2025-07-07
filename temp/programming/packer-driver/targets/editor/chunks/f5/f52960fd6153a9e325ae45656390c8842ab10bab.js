System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, SoundManager, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, GameTimer;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfSoundManager(extras) {
    _reporterNs.report("SoundManager", "../../manager/SoundManager", _context.meta, extras);
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
    }, function (_unresolved_2) {
      SoundManager = _unresolved_2.SoundManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3046f9JH8lB1pCTl2Gr0LKq", "GameTimer", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameTimer", GameTimer = (_dec = ccclass('GameTimer'), _dec2 = property(Label), _dec(_class = (_class2 = class GameTimer extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "txtTime", _descriptor, this);

          this.timeNum = 0;
          this.timeFunc = null;
          this.callBack = null;
        }

        runTime(num) {
          this.show();
          this.stopTime();
          this.timeNum = num;
          this.setTime(this.timeNum);

          this.timeFunc = () => {
            this.timeNum -= 1;
            this.setTime(this.timeNum);

            if (this.timeNum <= 3) {
              (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
                error: Error()
              }), SoundManager) : SoundManager).playSound("audio/sound/clock");
            }

            if (Number(this.txtTime.string) <= 0) {
              if (this.callBack) this.callBack();
              this.stopTime();
              this.hide();
            }
          };

          this.schedule(this.timeFunc, 1);
        }

        setTime(num) {
          this.txtTime.string = num.toString();
        }

        stopTime() {
          if (this.timeFunc != null) {
            this.unschedule(this.timeFunc);
            this.timeFunc = null;
          }
        }

        setFunc(callBack) {
          this.callBack = callBack;
        }

        show() {
          this.node.active = true;
        }

        hide() {
          this.node.active = false;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "txtTime", [_dec2], {
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
//# sourceMappingURL=f52960fd6153a9e325ae45656390c8842ab10bab.js.map