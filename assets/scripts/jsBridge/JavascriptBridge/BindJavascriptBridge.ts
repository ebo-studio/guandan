export module BindJavascriptBridge {
    const u = navigator.userAgent;

    export const isAndroid = () => {
        return u.indexOf("Android") > -1 || u.indexOf("Adr") > -1;
    };

    export const isIOS = () => {
        return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    };


    function setupWebViewJavascriptBridge(callback: Function) {
        //Android使用
        if (isAndroid()) {
            //判断是否支持WebViewJavascriptBridge
            //@ts-ignore
            if (window.WebViewJavascriptBridge) {
                //@ts-ignore
                callback(window.WebViewJavascriptBridge);
            } else {
                // 不支持就给他注册这个事件
                document.addEventListener(
                    "WebViewJavascriptBridgeReady",
                    function () {
                        //@ts-ignore
                        callback(window.WebViewJavascriptBridge);
                    },
                    false
                );
            }
            sessionStorage.phoneType = "android";
        }

        //iOS使用
        if (isIOS()) {
            //@ts-ignore
            if (window.WebViewJavascriptBridge) {
                //@ts-ignore
                return callback(window.WebViewJavascriptBridge);
            }
            //@ts-ignore
            if (window.WVJBCallbacks) {
                //@ts-ignore
                return window.WVJBCallbacks.push(callback);
            }
            //@ts-ignore
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
    export function initBridge() {
        //@ts-ignore
        setupWebViewJavascriptBridge(function (bridge: Bridge) {
            if (isAndroid()) {
                //初始化
                bridge.init(function (message: string, responseCallback: Function) {
                    const data = {
                        "Javascript Responds": "Wee!"
                    };
                    responseCallback(data);
                });
            }
        });
    }
    //封装一个函数，每次调用原生方法走这里
    // js调APP方法 （参数分别为:app提供的方法名  传给app的数据  回调）
    export function callHandler(name: string, data: any, callback: Function) {
        //@ts-ignore
        setupWebViewJavascriptBridge(function (bridge: Bridge) {
            bridge.callHandler(name, data, callback); // 这里相当于window.WebViewJavascriptBridge.callHandler(这个是跟原生约定的方法)
        });
    }
    // APP调js方法 （参数分别为:js提供的方法名  回调）
    export function registerHandler(name, callback) {
        setupWebViewJavascriptBridge(function (bridge) {
            bridge.registerHandler(name, function (data, responseCallback) {
                callback(data, responseCallback)
            })
        })
    }
}

