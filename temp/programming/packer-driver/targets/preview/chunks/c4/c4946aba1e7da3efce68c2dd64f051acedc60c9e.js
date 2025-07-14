System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, ProgressBar, director, PopWindow, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, LoadItem;

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
      ProgressBar = _cc.ProgressBar;
      director = _cc.director;
    }, function (_unresolved_2) {
      PopWindow = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9892cakTRpPC7HUoPO2w6rS", "LoadItem", undefined);

      __checkObsolete__(['_decorator', 'Label', 'ProgressBar', 'director', 'SceneAsset']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("LoadItem", LoadItem = (_dec = ccclass('LoadItem'), _dec2 = property(Label), _dec3 = property(ProgressBar), _dec(_class = (_class2 = class LoadItem extends (_crd && PopWindow === void 0 ? (_reportPossibleCrUseOfPopWindow({
        error: Error()
      }), PopWindow) : PopWindow) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "txtPro", _descriptor, this);

          _initializerDefineProperty(this, "proBar", _descriptor2, this);
        }

        setData(secneName) {
          this.setPro(0);
          director.preloadScene(secneName, (completedCount, totalCount, item) => {
            // console.log("completedCount ", completedCount);
            // console.log("totalCount ", totalCount);
            var ratio = completedCount / totalCount;
            this.setPro(ratio);
          }, (error, sceneAsset) => {
            director.loadScene(secneName); //这里清除会闪一下,放到进入 scene 的onload中清理
            // UIManager.Instace.clearAllUI();
            // console.log("sceneAsset ",sceneAsset);
          });
        }

        setPro(num) {
          //进度条不允许回退
          if (num * 100 > Number(this.txtPro.string)) {
            this.txtPro.string = Math.floor(num * 100).toString();
            this.proBar.progress = num;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "txtPro", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "proBar", [_dec3], {
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
//# sourceMappingURL=c4946aba1e7da3efce68c2dd64f051acedc60c9e.js.map