System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, UrlConfig;

  _export("UrlConfig", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5c2e2u5RApLi4vzMsFFnbrb", "UrlConfig", undefined);

      (function (_UrlConfig) {
        function getSocketUrl() {
          return "ws://18.167.55.115/ws";
        }

        _UrlConfig.getSocketUrl = getSocketUrl;

        function getHttpUrl() {
          return "http://18.167.55.115/";
        }

        _UrlConfig.getHttpUrl = getHttpUrl;
      })(UrlConfig || _export("UrlConfig", UrlConfig = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ca6a6a96dbaad5e56a62ca229daa52ea67788549.js.map