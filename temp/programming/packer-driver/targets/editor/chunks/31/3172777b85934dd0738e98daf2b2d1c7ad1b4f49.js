System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Label, _decorator, PopWindow, SoundManager, GlobalData, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, FreeUpItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfPopWindow(extras) {
    _reporterNs.report("PopWindow", "../PopWindow", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundManager(extras) {
    _reporterNs.report("SoundManager", "../../manager/SoundManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalData(extras) {
    _reporterNs.report("GlobalData", "../../manager/GlobalData", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Label = _cc.Label;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      PopWindow = _unresolved_2.default;
    }, function (_unresolved_3) {
      SoundManager = _unresolved_3.SoundManager;
    }, function (_unresolved_4) {
      GlobalData = _unresolved_4.GlobalData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fc6e1zQmzJKaboYkB3oBzXY", "FreeUpItem", undefined);

      __checkObsolete__(['Label', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("FreeUpItem", FreeUpItem = (_dec = ccclass('FreeUpItem'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec(_class = (_class2 = class FreeUpItem extends (_crd && PopWindow === void 0 ? (_reportPossibleCrUseOfPopWindow({
        error: Error()
      }), PopWindow) : PopWindow) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "txtTitle", _descriptor, this);

          _initializerDefineProperty(this, "txtDes", _descriptor2, this);

          _initializerDefineProperty(this, "txtScore", _descriptor3, this);
        }

        setData(obj) {
          let data = obj;

          if (data.type == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).gameType.kick) {
            this.txtTitle.string = "淘汰赛";
            this.txtDes.string = "本轮你已轮空,耐心等待下轮开启";
            this.txtScore.string = "";
          } else if (data.type == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).gameType.score) {
            this.txtTitle.string = "积分赛";
            this.txtDes.string = "本轮你已轮空,游戏已结束";
            this.txtScore.string = "本轮得分:" + data.score;
          }
        } //关闭


        onBtnCloseClick() {
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).playClick();
          this.hide();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "txtTitle", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "txtDes", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "txtScore", [_dec4], {
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
//# sourceMappingURL=3172777b85934dd0738e98daf2b2d1c7ad1b4f49.js.map