System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BindJavascriptBridge, _crd, BindBridge;

  function _reportPossibleCrUseOfBindJavascriptBridge(extras) {
    _reporterNs.report("BindJavascriptBridge", "./BindJavascriptBridge", _context.meta, extras);
  }

  _export("BindBridge", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      BindJavascriptBridge = _unresolved_2.BindJavascriptBridge;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "01f29wBFyBOPaGejbiWWsux", "BindBridge", undefined);

      (function (_BindBridge) {
        function initBridge() {
          (_crd && BindJavascriptBridge === void 0 ? (_reportPossibleCrUseOfBindJavascriptBridge({
            error: Error()
          }), BindJavascriptBridge) : BindJavascriptBridge).initBridge();
        }

        _BindBridge.initBridge = initBridge;

        function getToken(data) {
          (_crd && BindJavascriptBridge === void 0 ? (_reportPossibleCrUseOfBindJavascriptBridge({
            error: Error()
          }), BindJavascriptBridge) : BindJavascriptBridge).callHandler("getToken", JSON.stringify(data), () => {
            console.log("getToken success");
          });
        }

        _BindBridge.getToken = getToken;

        function startGame(callback) {
          (_crd && BindJavascriptBridge === void 0 ? (_reportPossibleCrUseOfBindJavascriptBridge({
            error: Error()
          }), BindJavascriptBridge) : BindJavascriptBridge).registerHandler("startGame", data => {
            if (data != null) {
              callback(JSON.parse(data));
            }

            console.log("startGame success");
          });
        }

        _BindBridge.startGame = startGame;
      })(BindBridge || _export("BindBridge", BindBridge = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=cd7066aef6462731b6120685c653f5ef181754a3.js.map