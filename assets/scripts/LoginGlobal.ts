import { _decorator, Component, director } from "cc";
import { platform } from "./platform/platform";
import { HttpConfig } from "./manager/HttpConfig";
import { UIManager } from "./manager/UIManager";
import { UIConfig } from "./manager/UIConfig";
import { utils } from "./common/utils";

const { ccclass, property } = _decorator;

@ccclass('LoginGlobal')
export class LoginGlobal extends Component {

    public static instance: LoginGlobal = null;

    onLoad(): void {
        director.addPersistRootNode(this.node);
        LoginGlobal.instance = this;
        platform.init();
        HttpConfig.init();
    }

    requestCheckUserExists(data: any, cb: { success: Function, fail?: Function }) {
        var url = HttpConfig.getUrl(HttpConfig.checkUserExists);
        let sendData = {
            account: data.account,
            type: data.type,
        }
        UIManager.Instace.showUI({
            path: UIConfig.WaitItemKey, data: { opacity: 0.5, des: "加载中..." }, callBack: () => {
                utils.sendHttpRequest({
                    url: url,
                    method: "POST",
                    data: utils.toJson(sendData),
                    success: function (data) {
                        console.log('checkUserExists', JSON.stringify(data));
                        // if(data.code == 200) {
                        if (cb.success) {
                            cb.success(data)
                        }
                        // }
                    },
                    fail: function (data) {
                        UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: data });
                        if (cb.fail) cb.fail();
                    },
                    complete: function () {
                        UIManager.Instace.hideUI(UIConfig.WaitItemKey);
                    }
                });
            }
        });
    }

    requestLogin(data: any, cb: { success: Function, fail?: Function }) {
        var url = HttpConfig.getUrl(HttpConfig.Login);
        let sendData = {
            account: data.account,
            type: data.type,
            code: data.code,
            inviterId: data.inviterId,
            certifyId: data.certifyId,
        }
        UIManager.Instace.showUI({
            path: UIConfig.WaitItemKey, data: { opacity: 0.5, des: "加载中..." }, callBack: () => {
                utils.sendHttpRequest({
                    url: url,
                    method: "POST",
                    data: utils.toJson(sendData),
                    success: function (data) {
                        // console.log("Login success", data);
                        if (data) {
                            // loginInfo.token = data.token;
                        }
                        if (cb.success) cb.success(data);
                    },
                    fail: function (data) {
                        console.log("Login fail ", data);
                        UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: data });
                        if (cb.fail) cb.fail();
                    },
                    complete: function () {
                        UIManager.Instace.hideUI(UIConfig.WaitItemKey);
                    }
                });
            }
        });
    }

    requestSendCode(data: any, cb: { success: Function, fail?: Function }) {
        var url = HttpConfig.getUrl(HttpConfig.SendCode);
        let sendData = {
            account: data.account,
            type: data.type
        }
        UIManager.Instace.showUI({
            path: UIConfig.WaitItemKey, data: { opacity: 0.5, des: "加载中..." }, callBack: () => {
                utils.sendHttpRequest({
                    url: url,
                    method: "POST",
                    data: utils.toJson(sendData),
                    success: function (data) {
                        // console.log("Login success", data);
                        if (data) {
                            // loginInfo.token = data.token;
                        }
                        if (cb.success) cb.success(data);
                    },
                    fail: function (data) {
                        console.log("Login fail ", data);
                        UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: data });
                        if (cb.fail) cb.fail();
                    },
                    complete: function () {
                        UIManager.Instace.hideUI(UIConfig.WaitItemKey);
                    }
                });
            }
        });
    }
}