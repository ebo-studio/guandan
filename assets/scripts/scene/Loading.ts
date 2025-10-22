import { _decorator, Animation, assert, Button, Component, director, EditBox, error, Label, Node, Prefab, ProgressBar, resources, Toggle, VideoClip, VideoPlayer } from "cc";
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

const { ccclass, property } = _decorator;

@ccclass('Loading')
export class Loading extends Component {

    @property(ProgressBar)
    progressBar: ProgressBar = null;

    // @property(Button)
    // phoneLoginBtn: Button = null;

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
            this.progressBar.node.active = false;
            const token = localStorage.getItem(GlobalData.TOKEN);
            if (token) {
                GlobalData.loginInfo.token = token;
                GlobalData.requestGetUserInfo({
                    success: () => {
                        GlobalData.userInfo.haveToken = true;
                        this.joginGame.node.active = true;
                        if (!SignInManager.getUserByName(GlobalData.userInfo.name)) {
                            let userInfodata: SignInManager.UserInfo = {
                                token: GlobalData.loginInfo.token,
                                name: GlobalData.userInfo.name,
                                ad_watch_count: 0,
                            };
                            SignInManager.addOrUpdateUser(userInfodata)
                        }
                        SignInManager.switchUser(GlobalData.loginInfo.token);

                        ZJSdk.initWithoutStart(new ZJConfig("Ij23wubre", GlobalData.userInfo.user_id.toString(), true));
                        ZJSdk.start({
                            onStartFailed(code, msg) {
                                console.log(`onStartFailed:${code}-${msg}`);
                                // toast(`初始化失败，错误码:${code}，错误信息:${msg}`)
                            }, onStartSuccess() {
                                console.log("onStartSuccess");                                                             
                                // toast("初始化成功")
                            }
                        })
                    },
                    fail: () => {
                        this.joginGame.node.active = false;
                        // this.phoneLoginBtn.node.active = true;
                        this.emailBtn.node.active = true;
                    }
                });
            }
            else {
                this.joginGame.node.active = false;
                // this.phoneLoginBtn.node.active = true;
                this.emailBtn.node.active = true;
            }

        }
        // this.progressBar.progress = p;
        // this.tipLabel.string = `加载中 ${Math.floor(p * 100)}%`;
    }

    private startGame() {
        // UIManager.Instace.showUI({ path: UIConfig.LoadItemKey, data: GlobalData.sceneName.lobby });
        director.loadScene(GlobalData.sceneName.lobby);
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
        let data = { account: phone, type: 1, code: code, inviterId: inviter };
        LoginGlobal.instance.requestLogin(data, {
            success: (data) => {
                console.log('登录成功:', data);
                UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: "登录成功" });
                if (data) {
                    GlobalData.loginInfo.token = data.token;
                    localStorage.setItem(GlobalData.TOKEN, data.token);
                }
                GlobalData.requestGetUserInfo({
                    success: () => {
                        clearInterval(this.timer);
                        GlobalData.userInfo.haveToken = true;
                        this.loginNode.active = false;
                        // this.phoneLoginBtn.node.active = false;
                        this.emailBtn.node.active = false;
                        this.joginGame.node.active = true;
                    }
                });
            }
        })
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
        let data = { account: email, type: 2, code: code, inviterId: inviter };
        LoginGlobal.instance.requestLogin(data, {
            success: (data) => {
                console.log('登录成功:', data);
                UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: "登录成功" });
                if (data) {
                    GlobalData.loginInfo.token = data.token;
                    localStorage.setItem(GlobalData.TOKEN, data.token);
                    if (!SignInManager.getUserByName(GlobalData.userInfo.name)) {
                        let userInfodata: SignInManager.UserInfo = {
                            token: data.token,
                            name: data.name,
                            ad_watch_count: 0,
                        };
                        SignInManager.addOrUpdateUser(userInfodata)
                    }
                }
                SignInManager.switchUser(GlobalData.loginInfo.token);
                GlobalData.requestGetUserInfo({
                    success: () => {
                        clearInterval(this.timer);
                        GlobalData.userInfo.haveToken = true;
                        ZJSdk.initWithoutStart(new ZJConfig("Ij23wubre", GlobalData.userInfo.user_id.toString(), true));
                        ZJSdk.start({
                            onStartFailed(code, msg) {
                                console.log(`onStartFailed:${code}-${msg}`);
                                // toast(`初始化失败，错误码:${code}，错误信息:${msg}`)
                            }, onStartSuccess() {
                                console.log("onStartSuccess");
                                // ZJSdk.loadSplashAd('Pcw05ytx6lhp', {
                                //     onAdLoaded(msg) {
                                //         // onRequestFinish()
                                //         let ecpm = typeof msg === 'string' && msg.length > 0 ? JSON.parse(msg).ecpm : 0
                                //         console.log(`开屏广告加载成功, 价格为${ecpm}`);
                                //     }, onError(errCode, errMsg) {
                                //         // onRequestFinish()
                                //         console.log(`开屏广告加载失败，错误码:${errCode}，错误信息:${errMsg}`);
                                //     }
                                // });
                                // ZJSdk.loadRewardedAd('Pno79en81mh8', GlobalData.userInfo.user_id.toString(), {
                                //     onAdLoaded(msg) {
                                //         // onRequestFinish()
                                //         let ecpm = typeof msg === 'string' && msg.length > 0 ? JSON.parse(msg).ecpm : 0
                                //         console.log(`激励广告加载成功, 价格为${ecpm}`);
                                //     }, onError(errCode, errMsg) {
                                //         // onRequestFinish()
                                //         console.log(`激励广告加载失败，错误码:${errCode}，错误信息:${errMsg}`);
                                //     }
                                // });
                                // toast("初始化成功")
                            }
                        })
                        this.loginNode.active = false;
                        // this.phoneLoginBtn.node.active = false;
                        this.emailBtn.node.active = false;
                        this.joginGame.node.active = true;
                    }
                });
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