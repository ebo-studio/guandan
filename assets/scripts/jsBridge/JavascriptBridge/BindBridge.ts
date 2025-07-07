import { BindJavascriptBridge } from "./BindJavascriptBridge";

export module BindBridge {
    //初始化
    export function initBridge() {
        BindJavascriptBridge.initBridge();
    }
    //具体方法,js调用app
    export function getToken(data: object) {
        BindJavascriptBridge.callHandler(
            "getToken",
            JSON.stringify(data),
            () => {
                console.log("getToken success");
            }
        );
    }
    //具体方法,app调js
    export function startGame(callback: Function) {
        BindJavascriptBridge.registerHandler(
            "startGame",
            (data: any) => {
                if (data != null) {
                    callback(JSON.parse(data));
                }
                console.log("startGame success");
            }
        );
    }


}

