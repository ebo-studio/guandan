System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, PopWindow, SoundManager, utils, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, GameStartNotice;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfPopWindow(extras) {
    _reporterNs.report("PopWindow", "../PopWindow", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundManager(extras) {
    _reporterNs.report("SoundManager", "../../manager/SoundManager", _context.meta, extras);
  }

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
      Label = _cc.Label;
    }, function (_unresolved_2) {
      PopWindow = _unresolved_2.default;
    }, function (_unresolved_3) {
      SoundManager = _unresolved_3.SoundManager;
    }, function (_unresolved_4) {
      utils = _unresolved_4.utils;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5e40108uA9NSrJhzZIedqKu", "GameStartNotice", undefined);

      __checkObsolete__(['_decorator', 'Label']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameStartNotice", GameStartNotice = (_dec = ccclass('GameStartNotice'), _dec2 = property(Label), _dec(_class = (_class2 = class GameStartNotice extends (_crd && PopWindow === void 0 ? (_reportPossibleCrUseOfPopWindow({
        error: Error()
      }), PopWindow) : PopWindow) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "txtTime", _descriptor, this);

          this.timeFunc = null;
          this.leftTime = 0;
        }

        setData(obj) {
          this.leftTime = Number(obj);
          this.timeDown();
        }

        timeDown() {
          if (this.timeFunc) {
            this.unschedule(this.timeFunc);
            this.timeFunc = null;
          }

          this.txtTime.node.active = true;
          this.setTime();
          var that = this;

          this.timeFunc = function () {
            that.leftTime -= 1;
            that.setTime();

            if (that.leftTime <= 0) {
              that.unschedule(that.timeFunc);
              that.hide();
            }
          };

          this.schedule(this.timeFunc, 1);
        } //时间


        setTime() {
          if (this.leftTime >= 0) {
            this.txtTime.string = (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
              error: Error()
            }), utils) : utils).getTimeDesc(this.leftTime);
          }
        } //关闭


        onBtnCloseClick() {
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).playClick();
          this.hide();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "txtTime", [_dec2], {
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
//# sourceMappingURL=0a1dcfc6dbf5f98b962a7ff5c7a9140d1d6bc700.js.map