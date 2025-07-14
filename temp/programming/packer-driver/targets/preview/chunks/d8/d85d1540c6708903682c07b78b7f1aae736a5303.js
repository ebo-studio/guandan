System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ToggleContainer, _decorator, PopWindow, SoundManager, GlobalData, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, CreateRoomItem;

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
      ToggleContainer = _cc.ToggleContainer;
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

      _cclegacy._RF.push({}, "b2ca5n97ytMrJbrgwX6aRTk", "CreateRoomItem", undefined);

      __checkObsolete__(['ToggleContainer', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("CreateRoomItem", CreateRoomItem = (_dec = ccclass('CreateRoomItem'), _dec2 = property(ToggleContainer), _dec(_class = (_class2 = class CreateRoomItem extends (_crd && PopWindow === void 0 ? (_reportPossibleCrUseOfPopWindow({
        error: Error()
      }), PopWindow) : PopWindow) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "toggleContainer", _descriptor, this);

          this.callBack = null;
        }

        setData(obj) {
          this.callBack = obj; // let aa = this.toggleContainer.activeToggles();
          // console.log(aa[0].node.name);
        }

        onBtnCreateClick() {
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).playClick();
          var toggles = this.toggleContainer.activeToggles();
          var chooseToggle = toggles[0].node.name;
          var idx = chooseToggle.substring(chooseToggle.length - 1);
          console.log("创建房间--> ", idx);
          (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).createRoomInfo.time = (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).createRoomInfo.timeList[Number(idx) - 1];
          this.callBack && this.callBack();
          this.hide();
          this.clearFunc();
        }

        onBtnCloseClick() {
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).playClick();
          this.hide();
        } //退出时清空


        clearFunc() {
          this.callBack = null;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "toggleContainer", [_dec2], {
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
//# sourceMappingURL=d85d1540c6708903682c07b78b7f1aae736a5303.js.map