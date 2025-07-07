System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, PopWindow, SoundManager, _dec, _class, _crd, ccclass, property, CreateTeamItem;

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

      _cclegacy._RF.push({}, "196474bqJhLl5FTenssn9rq", "CreateTeamItem", undefined);

      __checkObsolete__(['_decorator', 'Label', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("CreateTeamItem", CreateTeamItem = (_dec = ccclass('CreateTeamItem'), _dec(_class = class CreateTeamItem extends (_crd && PopWindow === void 0 ? (_reportPossibleCrUseOfPopWindow({
        error: Error()
      }), PopWindow) : PopWindow) {
        constructor(...args) {
          super(...args);
          this.okFunc = null;
          this.cancleFunc = null;
          this.autoClose = true;
        }

        setData(data, autoClose = true) {
          this.okFunc = data.okFunc;
          this.cancleFunc = data.cancleFunc;
          this.autoClose = autoClose;
        }

        onOkBtnClick() {
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).playClick();

          if (this.okFunc) {
            this.okFunc();
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

        onCloseBtnClick() {
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
//# sourceMappingURL=0bd888da854dcc4d896a59f91b8c9e329c7541d8.js.map