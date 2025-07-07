System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, PopWindow, SoundManager, _dec, _class, _crd, ccclass, property, RuleItem;

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
    }, function (_unresolved_2) {
      PopWindow = _unresolved_2.default;
    }, function (_unresolved_3) {
      SoundManager = _unresolved_3.SoundManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "40c22O+gWJKBoedijrttp7i", "RuleItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RuleItem", RuleItem = (_dec = ccclass('RuleItem'), _dec(_class = class RuleItem extends (_crd && PopWindow === void 0 ? (_reportPossibleCrUseOfPopWindow({
        error: Error()
      }), PopWindow) : PopWindow) {
        setData(obj) {}

        onBtnCloseClick() {
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).playClick();
          this.hide();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=279ea61c4ee625e40328fc620dd862cb1a498f81.js.map