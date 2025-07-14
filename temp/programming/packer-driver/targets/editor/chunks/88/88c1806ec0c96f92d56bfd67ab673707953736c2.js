System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, BindJavascriptBridge;

  _export("BindJavascriptBridge", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "35b63xbEBBEZo+i5oaZWCZO", "BindJavascriptBridge", undefined);

      (function (_BindJavascriptBridge) {
        const u = navigator.userAgent;

        const isAndroid = _BindJavascriptBridge.isAndroid = () => {
          return u.indexOf("Android") > -1 || u.indexOf("Adr") > -1;
        };

        const isIOS = _BindJavascriptBridge.isIOS = () => {
          return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
        };

        function setupWebViewJavascriptBridge(callback) {
          //Android使用
          if (isAndroid()) {
            //判断是否支持WebViewJavascriptBridge
            //@ts-ignore
            if (window.WebViewJavascriptBridge) {
              //@ts-ignore
              callback(window.WebViewJavascriptBridge);
            } else {
              // 不支持就给他注册这个事件
              document.addEventListener("WebViewJavascriptBridgeReady", function () {
                //@ts-ignore
                callback(window.WebViewJavascriptBridge);
              }, false);
            }

            sessionStorage.phoneType = "android";
          } //iOS使用


          if (isIOS()) {
            //@ts-ignore
            if (window.WebViewJavascriptBridge) {
              //@ts-ignore
              return callback(window.WebViewJavascriptBridge);
            } //@ts-ignore


            if (window.WVJBCallbacks) {
              //@ts-ignore
              return window.WVJBCallbacks.push(callback);
            } //@ts-ignore


            window.WVJBCallbacks = [callback];
            const WVJBIframe = document.createElement("iframe");
            WVJBIframe.style.display = "none";
            WVJBIframe.src = "wvjbscheme://__BRIDGE_LOADED__";
            document.documentElement.appendChild(WVJBIframe);
            setTimeout(function () {
              document.documentElement.removeChild(WVJBIframe);
            }, 0);
            sessionStorage.phoneType = "ios";
          }
        }

        function initBridge() {
          //@ts-ignore
          setupWebViewJavascriptBridge(function (bridge) {
            if (isAndroid()) {
              //初始化
              bridge.init(function (message, responseCallback) {
                const data = {
                  "Javascript Responds": "Wee!"
                };
                responseCallback(data);
              });
            }
          });
        }

        _BindJavascriptBridge.initBridge = initBridge;

        function callHandler(name, data, callback) {
          //@ts-ignore
          setupWebViewJavascriptBridge(function (bridge) {
            bridge.callHandler(name, data, callback); // 这里相当于window.WebViewJavascriptBridge.callHandler(这个是跟原生约定的方法)
          });
        }

        _BindJavascriptBridge.callHandler = callHandler;

        function registerHandler(name, callback) {
          setupWebViewJavascriptBridge(function (bridge) {
            bridge.registerHandler(name, function (data, responseCallback) {
              callback(data, responseCallback);
            });
          });
        }

        _BindJavascriptBridge.registerHandler = registerHandler;
      })(BindJavascriptBridge || _export("BindJavascriptBridge", BindJavascriptBridge = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=88c1806ec0c96f92d56bfd67ab673707953736c2.js.map