System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, utils, SoundManager, platform, _crd;

  function _reportPossibleCrUseOfutils(extras) {
    _reporterNs.report("utils", "../common/utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundManager(extras) {
    _reporterNs.report("SoundManager", "../manager/SoundManager", _context.meta, extras);
  }

  _export("platform", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      utils = _unresolved_2.utils;
    }, function (_unresolved_3) {
      SoundManager = _unresolved_3.SoundManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "315dcZcKfFCB5coP09LYq1L", "platform", undefined);

      _export("platform", platform = class platform {
        static init() {
          if ((_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).is_browser()) {} // 设置


          var music_string = (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).getLocalStorage("Music");
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).enableMusic(!(music_string && music_string == "off"));
          var sound_string = (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).getLocalStorage("Sound");
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).enableSound(!(sound_string && sound_string == "off"));
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2b5f17e6c2db2f88ad13d7051d5efd9c96bb6e52.js.map