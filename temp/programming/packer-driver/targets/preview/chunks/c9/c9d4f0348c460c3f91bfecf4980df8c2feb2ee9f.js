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
          return "ws://121.41.170.43:8001";
        }

        _UrlConfig.getSocketUrl = getSocketUrl;

        function getHttpUrl() {
          return "http://card.zhongyigames.com/";
        }

        _UrlConfig.getHttpUrl = getHttpUrl;
      })(UrlConfig || _export("UrlConfig", UrlConfig = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c9d4f0348c460c3f91bfecf4980df8c2feb2ee9f.js.map