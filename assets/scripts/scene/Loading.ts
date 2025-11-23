import { _decorator, Animation, assert, Button, Component, director, EditBox, error, Label, Node, Prefab, ProgressBar, resources, sys, Toggle, VideoClip, VideoPlayer } from "cc";
import { GlobalData } from "../manager/GlobalData";
import { UIManager } from "../manager/UIManager";
import { UIConfig } from "../manager/UIConfig";
import { LoginGlobal } from "../LoginGlobal";
import { GameSocket } from "../manager/GameSocket";
import { utils } from "../common/utils";
import { ZJSdk } from "../ZJSdk/ZJSdk";
import { ZJConfig } from "../ZJSdk/ZJConfig";
import { ZJCustomController } from "../ZJSdk/ZJCustomController";
import { SignInManager } from "../manager/SignInManager";
import { checkForNotice } from "../common/UpdateNotice";
import { UrlConfig } from "../manager/UrlConfig";
import { checkForUpdate } from "../common/UpdateChecker";

const { ccclass, property } = _decorator;

@ccclass('Loading')
export class Loading extends Component {

    @property(ProgressBar)
    progressBar: ProgressBar = null;

    @property(Button)
    phoneLoginBtn: Button = null;

    @property(Button)
    emailBtn: Button = null;

    @property(Button)
    joginGame: Button = null;

    @property(Node)
    loginNode: Node = null;

    @property(Toggle)
    phoneToggle: Toggle = null;

    @property(Toggle)
    emailToggle: Toggle = null;


    /**手机登录相关 */
    @property(Node)
    phoneNode: Node = null;

    @property(EditBox)
    phoneEditBox: EditBox = null;

    @property(EditBox)
    phoneCodeEditBox: EditBox = null;

    @property(EditBox)
    phoneinviterEditBox: EditBox = null;

    @property(Button)
    phoneGetCodeBtn: Button = null;

    @property(Label)
    phoneGetLabel: Label = null;


    /**邮箱登陆相关 */
    @property(Node)
    emailNode: Node = null;

    @property(EditBox)
    emaiEditBox: EditBox = null;

    @property(EditBox)
    emailCodeEditBox: EditBox = null;

    @property(EditBox)
    emailinviterEditBox: EditBox = null;

    @property(Button)
    emailGetCodeBtn: Button = null;

    @property(Label)
    emailGetLabel: Label = null;

    // @property(Node)
    // startNode: Node = null;

    @property(Animation)
    startAni: Animation = null;

    private timer: number = null;

    private preloadList: string[] = [
        'prefab',
        'prefab/game',
        'prefab/gameEndScore',
        'prefab/gameEndScoreRank',
        'prefab/room'
    ];

    private prefabNames: string[] = [];
    private total = 0;
    private finished = 0;

    public static Instance: Loading = null;

    // private startAni: Animation = null;

    protected onLoad(): void {
        Loading.Instance = this;

        if (!GlobalData.userInfo.isLogin) {
            this.startAni.node.active = true;
            this.startAni.on(Animation.EventType.FINISHED, () => {
                // this.startNode.active = false;
                this.startAni.node.active = false;
                director.preloadScene(GlobalData.sceneName.lobby, function () {
                    //cc.log("Next scene preloaded");
                });
                this.loadAllPrefabs().then(() => {
                    // this.loadMainScene();
                });
                this.onToggleChanged(this.phoneToggle);
            }, this)
            // ZJSdk.initWithoutStart(new ZJConfig("I5xp4f7gk", '', true));
        }
        else {
            this.startAni.node.active = false;
            director.preloadScene(GlobalData.sceneName.lobby, function () {
                //cc.log("Next scene preloaded");
            });
            this.loadAllPrefabs().then(() => {
                // this.loadMainScene();
            });
            this.onToggleChanged(this.phoneToggle);
        }
        // let videoElement = document.createElement('video');
        // videoElement.src = cc.url.raw('resources/audio/start.mp4'); // 指定视频路径
        // videoElement.autoplay = true;
        // videoElement.loop = true;
        // videoElement.style.position = 'absolute';
        // videoElement.style.left = '0';
        // videoElement.style.top = '0';
        // videoElement.style.zIndex = '1000'; // 保证视频在最上层

        // document.body.appendChild(videoElement);


        // resources.load('audio/start', VideoClip, (err, clip) => {
        //     if (err) {
        //         console.error("加载视频失败：", err);
        //         return;
        //     }

        //     // 创建 VideoPlayer 节点
        //     let videoNode = new Node("VideoPlayer");
        //     let videoPlayer = videoNode.addComponent(VideoPlayer);

        //     // 设置视频播放
        //     videoPlayer.clip = clip;
        //     videoPlayer.play();

        //     // 设置视频播放参数
        //      director.getScene().addChild(videoPlayer.node.parent);
        //     // videoPlayer.node.setPosition(cc.v2(0, 0));
        //     // this.add
        // });

        // Loading.Instance = this;
    }


    // start() {

    //     director.preloadScene(GlobalData.sceneName.lobby, function () {
    //         //cc.log("Next scene preloaded");
    //     });
    //     this.loadAllPrefabs().then(() => {
    //         // this.loadMainScene();
    //     });
    //     // this.emailToggle.isChecked = false;
    //     // this.phoneToggle.isChecked = false; // 必须先置 false 再置 true
    //     // this.phoneToggle.isChecked = true;
    //     this.onToggleChanged(this.phoneToggle);
    //     // this.onToggleChanged(this.emailToggle)
    //     // this.phoneToggle.node.on('toggle', this.onToggleChanged, this);
    //     // this.emailToggle.node.on('toggle', this.onToggleChanged, this);
    // }

    private async loadAllPrefabs() {
        resources.loadDir('prefab', (completedCount, totalCount, item) => {
            // console.log(completedCount, totalCount)
            let progress = parseFloat(((completedCount) / (totalCount)).toFixed(3));
            this.updateProgress(progress);
        }, (error, assets) => {

        })
    }

    onBtnCloseLogin() {
        this.loginNode.active = false;
    }

    onToggleChanged(toggle: Toggle) {
        if (toggle === this.phoneToggle && toggle.isChecked) {
            this.phoneNode.active = true;
            this.emailNode.active = false;
        } else if (toggle === this.emailToggle && toggle.isChecked) {
            this.emailNode.active = true;
            this.phoneNode.active = false;
        }
    }

    private updateProgress(progress: number) {
        if (progress > this.progressBar.progress) {
            this.progressBar.progress = progress;
        }
        if (progress >= 1) {
            if (sys.os === sys.OS.ANDROID) {
                // @ts-ignore
                const versionCode = jsb.reflection.callStaticMethod(
                    "com/cocos/game/AppActivity",
                    "getVersionCode",
                    "()I"
                );
                // @ts-ignore
                const versionName = jsb.reflection.callStaticMethod(
                    "com/cocos/game/AppActivity",
                    "getVersionName",
                    "()Ljava/lang/String;"
                );
                console.log("Android VersionCode:", versionCode);
                console.log("Android VersionName:", versionName);
                // if(versionCode <= 20) {
                //     SignInManager.resetUserList();
                // }
            }
            checkForUpdate();
            // SignInManager.getRemainingAds((data) => {
            //     //请求观看广告次数
            // });
            // let data = { account: 13713594780, type: 1, code: code, inviterId: inviter, certifyId:  certifyIds};
            // checkForNotice();
            this.progressBar.node.active = false;
            const token = localStorage.getItem(GlobalData.TOKEN);
            if (token) {
                // GlobalData.loginInfo.token = token;
                GlobalData.requestGetUserInfo({
                    success: () => {
                        GlobalData.loginInfo.token = token;
                        GlobalData.userInfo.haveToken = true;
                        this.joginGame.node.active = true;
                        // if (!SignInManager.getUserByName(GlobalData.userInfo.name)) {
                        let userInfodata: SignInManager.UserInfo = {
                            token: GlobalData.loginInfo.token,
                            name: GlobalData.userInfo.name,
                            ad_watch_count: 0,
                        };
                        SignInManager.addOrUpdateUser(userInfodata)
                        // }
                        SignInManager.switchUser(GlobalData.userInfo.name);

                        // ZJSdk.initWithoutStart(new ZJConfig("Ij23wubre", GlobalData.userInfo.user_id.toString(), true));
                        // ZJSdk.start({
                        //     onStartFailed(code, msg) {
                        //         console.log(`onStartFailed:${code}-${msg}`);
                        //         // toast(`初始化失败，错误码:${code}，错误信息:${msg}`)
                        //     }, onStartSuccess() {
                        //         console.log("onStartSuccess");
                        //         // toast("初始化成功")
                        //     }
                        // })
                        const url = `${UrlConfig.getHttpUrl()}api/User/queryNotices`;
                        this.postWithFetch(url, { token: GlobalData.loginInfo.token }).then(data => {
                            // UIManager.Instace.hideUI(UIConfig.WaitItemKey);
                            GlobalData.userInfo.noticeData = [];
                            if (Number(data?.code) === 200) {
                                console.log('公告数据>>>', JSON.stringify(data));
                                for (let i = 0; i < data.data.length; i++) {
                                    GlobalData.userInfo.noticeData.push(data.data[i]);
                                    // if (data.data[i].title == '系统维护通知') {
                                    //     const localNotices = [data.data[i]];
                                    //     UIManager.Instace.showUI({ path: UIConfig.announceViewItemKey, data: localNotices });
                                    // }
                                }
                                UIManager.Instace.showUI({ path: UIConfig.announceViewItemKey, data: GlobalData.userInfo.noticeData });
                            }
                        })
                            .catch(err => console.error(err));

                    },
                    fail: () => {
                        this.joginGame.node.active = false;
                        this.phoneLoginBtn.node.active = true;
                        this.emailBtn.node.active = true;
                    }
                }, true, token);
            }
            else {
                this.joginGame.node.active = false;
                this.phoneLoginBtn.node.active = true;
                this.emailBtn.node.active = true;
            }

        }
        // this.progressBar.progress = p;
        // this.tipLabel.string = `加载中 ${Math.floor(p * 100)}%`;
    }

    async postWithFetch(url: string, data: any): Promise<any> {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const text = await response.text();
            console.log('status:', response.status, 'body:', text.slice(0, 200));

            if (/<!doctype|<html/i.test(text))
                throw new Error('收到 HTML（登录/错误页）');

            return JSON.parse(text.replace(/^\uFEFF/, ''));
        } catch (err) {
            console.error('postWithFetch error:', err);
            throw err;
        }
    }

    private startGame() {
        if (GlobalData.loginInfo.service) {
            UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: "停服中" });
            return;
        }
        // UIManager.Instace.showUI({ path: UIConfig.LoadItemKey, data: GlobalData.sceneName.lobby });
        director.loadScene(GlobalData.sceneName.lobby);
        // this.startZimLocalTest((success, certifyIds) => {
        //     if (success) {
        //         console.log("ZIM 本地测试成功:", success, certifyIds);
        //         let data = { account: 15815289337, type: 1, code: 1234, inviterId: '', certifyId: certifyIds };
        //         LoginGlobal.instance.requestLogin(data, {
        //             success: (data) => {

        //             },
        //             fail: (data) => {
        //                 let data1 = { account: 15815289337, type: 1, code: 1234, inviterId: '', certifyId: certifyIds };
        //                 LoginGlobal.instance.requestLogin(data1, {
        //                     success: (data) => {

        //                         // });
        //                     },
        //                     fail: (data) => {

        //                     }
        //                 })
        //             }
        //         })
        //     } else {
        //         UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: "登录失败" });
        //         // console.warn("ZIM 本地测试失败:", msg);
        //     }
        // });
    }

    showPhoneNode() {
        this.phoneToggle.isChecked = true;
        this.emailToggle.isChecked = false;
        // this.phoneToggle.isChecked = false; // 必须先置 false 再置 true
        this.onToggleChanged(this.phoneToggle);
        this.loginNode.active = true;
    }

    showEmailNode() {
        this.emailToggle.isChecked = true;
        this.phoneToggle.isChecked = false;
        // this.emailToggle.isChecked = false;


        // this.phoneToggle['_updateCheckMark'](); // ✅ 强制刷新勾选状态
        // this.emailToggle['_updateCheckMark']();
        // this.phoneToggle.update
        this.onToggleChanged(this.emailToggle);
        this.loginNode.active = true;
    }


    /**手机登录相关 */
    onPhoneLogin() {
        // this.startZimLocalTest();
        // return;
        const phone = this.phoneEditBox.string.trim();
        const code = this.phoneCodeEditBox.string.trim();
        const inviter = this.phoneinviterEditBox.string.trim();

        if (!this.validdatePhone(phone)) {
            UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: "请输入有效的手机号码" });
            return;
        }
        if (code.length === 0) {
            UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: "请输入验证码" });
            return;
        }

        let checkData = { account: phone, type: 1 }
        LoginGlobal.instance.requestCheckUserExists(checkData, {
            success: (data) => {
                if (data.exists) {
                    let data = { account: phone, type: 1, code: code, inviterId: inviter, certifyId: "" };
                    LoginGlobal.instance.requestLogin(data, {
                        success: (data) => {
                            console.log('登录成功:', data);
                            UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: "登录成功" });
                            if (data) {
                                GlobalData.loginInfo.token = data.token;
                                localStorage.setItem(GlobalData.TOKEN, data.token);
                                // if (!SignInManager.getUserByName(data.name)) {
                                let userInfodata: SignInManager.UserInfo = {
                                    token: data.token,
                                    name: data.name,
                                    ad_watch_count: 0,
                                };
                                SignInManager.addOrUpdateUser(userInfodata)
                                // }
                                SignInManager.switchUser(data.name);
                            }

                            GlobalData.requestGetUserInfo({
                                success: () => {
                                    clearInterval(this.timer);
                                    GlobalData.userInfo.haveToken = true;
                                    this.loginNode.active = false;
                                    this.phoneLoginBtn.node.active = false;
                                    this.emailBtn.node.active = false;
                                    this.joginGame.node.active = true;
                                    const url = `${UrlConfig.getHttpUrl()}api/User/queryNotices`;
                                    this.postWithFetch(url, { token: GlobalData.loginInfo.token }).then(data => {
                                        // UIManager.Instace.hideUI(UIConfig.WaitItemKey);
                                        GlobalData.userInfo.noticeData = [];
                                        if (Number(data?.code) === 200) {
                                            for (let i = 0; i < data.data.length; i++) {
                                                GlobalData.userInfo.noticeData.push(data.data[i]);
                                                // if (data.data[i].title == '系统维护通知') {
                                                //     const localNotices = [data.data[i]];

                                                // }
                                            }
                                            UIManager.Instace.showUI({ path: UIConfig.announceViewItemKey, data: GlobalData.userInfo.noticeData });
                                        }
                                    })
                                        .catch(err => console.error(err));
                                }
                            });
                        }
                    })
                }
                else {
                    this.startZimLocalTest((success, certifyIds) => {
                        if (success) {
                            console.log("ZIM 本地测试成功:", success, certifyIds);
                            let data = { account: phone, type: 1, code: code, inviterId: inviter, certifyId: certifyIds };
                            LoginGlobal.instance.requestLogin(data, {
                                success: (data) => {
                                    console.log('登录成功:', data);
                                    UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: "登录成功" });
                                    if (data) {
                                        GlobalData.loginInfo.token = data.token;
                                        localStorage.setItem(GlobalData.TOKEN, data.token);
                                        // if (!SignInManager.getUserByName(data.name)) {
                                        let userInfodata: SignInManager.UserInfo = {
                                            token: data.token,
                                            name: data.name,
                                            ad_watch_count: 0,
                                        };
                                        SignInManager.addOrUpdateUser(userInfodata)
                                        // }
                                        SignInManager.switchUser(data.name);
                                    }

                                    GlobalData.requestGetUserInfo({
                                        success: () => {
                                            clearInterval(this.timer);
                                            GlobalData.userInfo.haveToken = true;
                                            // ZJSdk.initWithoutStart(new ZJConfig("Ij23wubre", GlobalData.userInfo.user_id.toString(), true));
                                            // ZJSdk.start({
                                            //     onStartFailed(code, msg) {
                                            //         console.log(`onStartFailed:${code}-${msg}`);
                                            //         // toast(`初始化失败，错误码:${code}，错误信息:${msg}`)
                                            //     }, onStartSuccess() {
                                            //         console.log("onStartSuccess");

                                            //     }
                                            // })
                                            this.loginNode.active = false;
                                            this.phoneLoginBtn.node.active = false;
                                            this.emailBtn.node.active = false;
                                            this.joginGame.node.active = true;
                                            const url = `${UrlConfig.getHttpUrl()}api/User/queryNotices`;
                                            this.postWithFetch(url, { token: GlobalData.loginInfo.token }).then(data => {
                                                // UIManager.Instace.hideUI(UIConfig.WaitItemKey);
                                                GlobalData.userInfo.noticeData = [];
                                                if (Number(data?.code) === 200) {
                                                    for (let i = 0; i < data.data.length; i++) {
                                                        GlobalData.userInfo.noticeData.push(data.data[i]);
                                                        // if (data.data[i].title == '系统维护通知') {
                                                        //     const localNotices = [data.data[i]];

                                                        // }
                                                    }
                                                    UIManager.Instace.showUI({ path: UIConfig.announceViewItemKey, data: GlobalData.userInfo.noticeData });
                                                }
                                            })
                                                .catch(err => console.error(err));
                                        }
                                    });
                                }
                            })
                        } else {
                            UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: "登录失败" });
                            // console.warn("ZIM 本地测试失败:", msg);
                        }
                    });
                }

            }
        })



    }

    startZimLocalTest(callback?: (success: boolean, msg: string) => void) {
        if (!sys.isNative) return;

        (globalThis as any).onZimTestResult = function (success: boolean, certifyId: string) {
            console.log("ZIM 本地测试结果:", success, certifyId);
            if (callback) callback(success, certifyId);
            // 这里也可以继续触发UI提示
            // UIManager.Instance.showUI({ path: UIConfig.MessageHintKey, data: msg });
        };

        try {
            if (sys.os === sys.OS.ANDROID) {
                // @ts-ignore
                jsb.reflection.callStaticMethod(
                    'com/cocos/game/AppActivity',
                    'startLocalZimTest',
                    '()V',
                );
            } else if (sys.os === sys.OS.IOS) {
                // @ts-ignore
                // jsb.reflection.callStaticMethod('PangleAdapter', 'startLocalZimTest');
            }
        } catch (e) {
            console.error('[ZIM] 本地测试失败:', e);
            if (callback) callback(false, e.toString());
        }
    }

    onGetPhoneCode() {
        const phone = this.phoneEditBox.string.trim();
        if (!this.validdatePhone(phone)) {
            UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: "请输入有效的手机号码" });
            return;
        }

        let data = { account: phone, type: 1 }
        LoginGlobal.instance.requestSendCode(data, {
            success: (data) => {
                console.log('正在发送验证码:', data)
            }
        })

        this.startCooldown();
    }


    /**邮箱登陆相关 */

    onEmailLogin() {
        const email = this.emaiEditBox.string.trim();
        const code = this.emailCodeEditBox.string.trim();
        const inviter = this.emailinviterEditBox.string.trim();

        if (!this.validdateEmail(email)) {
            UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: "请输入有效的邮箱地址" });
            return;
        }

        if (code.length === 0) {
            UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: "请输入验证码" });
            return;
        }
        let checkData = { account: email, type: 2 }
        LoginGlobal.instance.requestCheckUserExists(checkData, {
            success: (data) => {
                if (data.exists) {
                    let logindata = { account: email, type: 2, code: code, inviterId: inviter, certifyId: "" };
                    LoginGlobal.instance.requestLogin(logindata, {
                        success: (data) => {
                            console.log('登录成功:', data);
                            UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: "登录成功" });
                            if (data) {
                                GlobalData.loginInfo.token = data.token;
                                localStorage.setItem(GlobalData.TOKEN, data.token);
                                // if (!SignInManager.getUserByName(data.name)) {
                                let userInfodata: SignInManager.UserInfo = {
                                    token: data.token,
                                    name: data.name,
                                    ad_watch_count: 0,
                                };
                                SignInManager.addOrUpdateUser(userInfodata)
                                // }
                                SignInManager.switchUser(data.name);
                            }

                            GlobalData.requestGetUserInfo({
                                success: () => {
                                    clearInterval(this.timer);
                                    GlobalData.userInfo.haveToken = true;
                                    this.loginNode.active = false;
                                    this.phoneLoginBtn.node.active = false;
                                    this.emailBtn.node.active = false;
                                    this.joginGame.node.active = true;
                                    const url = `${UrlConfig.getHttpUrl()}api/User/queryNotices`;
                                    this.postWithFetch(url, { token: GlobalData.loginInfo.token }).then(data => {
                                        // UIManager.Instace.hideUI(UIConfig.WaitItemKey);
                                        GlobalData.userInfo.noticeData = [];
                                        if (Number(data?.code) === 200) {
                                            for (let i = 0; i < data.data.length; i++) {
                                                GlobalData.userInfo.noticeData.push(data.data[i]);
                                            }
                                            UIManager.Instace.showUI({ path: UIConfig.announceViewItemKey, data: GlobalData.userInfo.noticeData });
                                        }
                                    })
                                        .catch(err => console.error(err));
                                }
                            });
                        }
                    })
                }
                else {
                    this.startZimLocalTest((success, certifyIds) => {
                        if (success) {
                            console.log("ZIM 本地测试成功:", success, certifyIds);
                            let data = { account: email, type: 2, code: code, inviterId: inviter, certifyId: certifyIds };
                            LoginGlobal.instance.requestLogin(data, {
                                success: (data) => {
                                    console.log('登录成功:', data);
                                    UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: "登录成功" });
                                    if (data) {
                                        GlobalData.loginInfo.token = data.token;
                                        localStorage.setItem(GlobalData.TOKEN, data.token);
                                        // if (!SignInManager.getUserByName(data.name)) {
                                        let userInfodata: SignInManager.UserInfo = {
                                            token: data.token,
                                            name: data.name,
                                            ad_watch_count: 0,
                                        };
                                        SignInManager.addOrUpdateUser(userInfodata)
                                        // }
                                        SignInManager.switchUser(data.name);
                                    }

                                    GlobalData.requestGetUserInfo({
                                        success: () => {
                                            clearInterval(this.timer);
                                            GlobalData.userInfo.haveToken = true;
                                            this.loginNode.active = false;
                                            this.phoneLoginBtn.node.active = false;
                                            this.emailBtn.node.active = false;
                                            this.joginGame.node.active = true;
                                            const url = `${UrlConfig.getHttpUrl()}api/User/queryNotices`;
                                            this.postWithFetch(url, { token: GlobalData.loginInfo.token }).then(data => {
                                                // UIManager.Instace.hideUI(UIConfig.WaitItemKey);
                                                GlobalData.userInfo.noticeData = [];
                                                if (Number(data?.code) === 200) {
                                                    for (let i = 0; i < data.data.length; i++) {
                                                        GlobalData.userInfo.noticeData.push(data.data[i]);
                                                    }
                                                    UIManager.Instace.showUI({ path: UIConfig.announceViewItemKey, data: GlobalData.userInfo.noticeData });
                                                }
                                            })
                                                .catch(err => console.error(err));
                                        }
                                    });
                                }
                            })
                        } else {
                            UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: "登录失败" });
                            // console.warn("ZIM 本地测试失败:", msg);
                        }
                    });
                }

            }
        })
    }

    onGetCode() {
        const email = this.emaiEditBox.string.trim();
        if (!this.validdateEmail(email)) {
            UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: "请输入有效的邮箱地址" });
            return;
        }

        let data = { account: email, type: 2 }
        LoginGlobal.instance.requestSendCode(data, {
            success: (data) => {
                console.log('正在发送验证码:', data)
            }
        })

        this.startCooldown();
    }

    startCooldown() {
        this.emailGetCodeBtn.interactable = false;
        this.phoneGetCodeBtn.interactable = false;
        let secondsLeft = 60;

        this.emailGetLabel.string = `${secondsLeft}s`;
        this.phoneGetLabel.string = `${secondsLeft}s`;

        this.timer = setInterval(() => {
            secondsLeft--;
            if (secondsLeft <= 0) {
                this.emailGetCodeBtn.interactable = true;
                this.emailGetLabel.string = '获取验证码';
                this.phoneGetCodeBtn.interactable = true;
                this.phoneGetLabel.string = '获取验证码';
                clearInterval(this.timer);
                return;
            }
            this.emailGetLabel.string = `${secondsLeft}s`;
            this.phoneGetLabel.string = `${secondsLeft}s`;
        }, 1000);
    }


    validdateEmail(email: string): boolean {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    validdatePhone(phone: string): boolean {
        return /^1\d{10}$/.test(phone); // 简单判断中国大陆手机号
    }

}