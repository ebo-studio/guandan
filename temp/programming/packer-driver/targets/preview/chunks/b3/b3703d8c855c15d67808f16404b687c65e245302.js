System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AudioClip, resources, AppGlobal, utils, _crd, SoundManager;

  function _reportPossibleCrUseOfAppGlobal(extras) {
    _reporterNs.report("AppGlobal", "../AppGlobal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfutils(extras) {
    _reporterNs.report("utils", "../common/utils", _context.meta, extras);
  }

  _export("SoundManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      AudioClip = _cc.AudioClip;
      resources = _cc.resources;
    }, function (_unresolved_2) {
      AppGlobal = _unresolved_2.AppGlobal;
    }, function (_unresolved_3) {
      utils = _unresolved_3.utils;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b362cbTXmNOu7DZTmMDhGRG", "SoundManager", undefined);

      __checkObsolete__(['AudioClip', 'resources']);

      (function (_SoundManager) {
        var soundEnabled = true;
        var musicEnabled = true;

        function enableSound(enable) {
          soundEnabled = enable;
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).setLocalStorage("Sound", enable ? "on" : "off");
        }

        _SoundManager.enableSound = enableSound;

        function enableMusic(enable) {
          musicEnabled = enable;
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).setLocalStorage("Music", enable ? "on" : "off");

          if (enable) {
            playMusic("audio/music/bgm");
          } else {
            stopMusic();
          }
        }

        _SoundManager.enableMusic = enableMusic;

        function playSound(path, loop, callback) {
          if (loop === void 0) {
            loop = false;
          }

          if (!soundEnabled) {
            return;
          }

          if (path == "audio/sound/click") {
            var _instance;

            (_instance = (_crd && AppGlobal === void 0 ? (_reportPossibleCrUseOfAppGlobal({
              error: Error()
            }), AppGlobal) : AppGlobal).instance) == null ? void 0 : _instance.playClickSound();
            return;
          }

          if (path == "audio/sound/clock") {
            var _instance2;

            (_instance2 = (_crd && AppGlobal === void 0 ? (_reportPossibleCrUseOfAppGlobal({
              error: Error()
            }), AppGlobal) : AppGlobal).instance) == null ? void 0 : _instance2.playClockSound();
            return;
          }

          resources.load(path, AudioClip, function (err, clip) {
            var _instance3;

            if (err) {
              console.log(err);
              return;
            } //send


            (_instance3 = (_crd && AppGlobal === void 0 ? (_reportPossibleCrUseOfAppGlobal({
              error: Error()
            }), AppGlobal) : AppGlobal).instance) == null ? void 0 : _instance3.playSound(clip, loop);
          });
        }

        _SoundManager.playSound = playSound;

        function playMusic(path, loop, callback) {
          if (loop === void 0) {
            loop = true;
          }

          if (!musicEnabled) {
            return;
          }

          resources.load(path, AudioClip, function (err, clip) {
            var _instance4;

            if (err) {
              console.log(err);
              return;
            }

            if (!musicEnabled) {
              return;
            }

            (_instance4 = (_crd && AppGlobal === void 0 ? (_reportPossibleCrUseOfAppGlobal({
              error: Error()
            }), AppGlobal) : AppGlobal).instance) == null ? void 0 : _instance4.playMusic(clip, loop);
          });
        }

        _SoundManager.playMusic = playMusic;

        function getSoundEnable() {
          return soundEnabled;
        }

        _SoundManager.getSoundEnable = getSoundEnable;

        function stopSound(id) {// audioEngine.stopEffect(id);
        }

        _SoundManager.stopSound = stopSound;

        function stopMusic() {
          var _instance5;

          (_instance5 = (_crd && AppGlobal === void 0 ? (_reportPossibleCrUseOfAppGlobal({
            error: Error()
          }), AppGlobal) : AppGlobal).instance) == null ? void 0 : _instance5.stopMusic();
        }

        _SoundManager.stopMusic = stopMusic;

        function playClick() {
          playSound('audio/sound/click', false);
        }

        _SoundManager.playClick = playClick;
      })(SoundManager || _export("SoundManager", SoundManager = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b3703d8c855c15d67808f16404b687c65e245302.js.map