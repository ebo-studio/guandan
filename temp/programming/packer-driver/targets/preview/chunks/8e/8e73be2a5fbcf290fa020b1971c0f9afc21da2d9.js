System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, httprequest, _crd;

  _export("httprequest", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8f641ihwddCdqdlQkUcQeP6", "httprequest", undefined);

      _export("httprequest", httprequest = class httprequest {
        constructor() {
          this.checkTimeOut = void 0;
          this.timeOutTime = 15;
          this.timeEclipsed = 0;
          this.check_timeout_id = null;

          this.onReply = () => {};

          this.onError = () => {};

          this.onProgress = () => {};
        }

        send(url, method, data) {
          console.log("[HTTP REQ] url:" + url + " method:" + method + " data:" + data);
          var xhr = new XMLHttpRequest();
          var that = this;
          this.timeEclipsed = 0;
          this.check_timeout_id = setInterval(function () {
            that.timeEclipsed += 0.1;

            if (that.timeEclipsed > that.timeOutTime) {
              clearInterval(that.check_timeout_id);
              xhr.abort();
              console.log("[HTTP RESP TIMEOUT]");
              if (that.onError) that.onError("请求数据失败，请重试！");
            }

            if (that.onProgress) that.onProgress(Math.floor(that.timeOutTime - that.timeEclipsed));
          }, 100);

          xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
              var _response = xhr.responseText;

              if (xhr.status >= 200 && xhr.status < 400) {
                // success
                if (that.onReply) that.onReply(_response);
              } else {
                // fail
                if (that.onError) that.onError(_response);
              }

              clearInterval(that.check_timeout_id);
            }
          };

          var _method = method ? method : "GET";

          xhr.open(_method, url, true);
          xhr.setRequestHeader("Content-Type", "application/json");

          if (data) {
            xhr.send(data);
          } else {
            xhr.send();
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8e73be2a5fbcf290fa020b1971c0f9afc21da2d9.js.map