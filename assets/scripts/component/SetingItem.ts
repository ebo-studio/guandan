import { _decorator, director, native, Node, sys, Toggle } from 'cc';
import { utils } from '../common/utils';
import { SoundManager } from '../manager/SoundManager';
import PopWindow from './PopWindow';
import { UIManager } from '../manager/UIManager';
import { UIConfig } from '../manager/UIConfig';
import { GlobalData } from '../manager/GlobalData';
import { checkForUpdate } from '../common/UpdateChecker';
const { ccclass, property } = _decorator;

@ccclass('SetingItem')
export class SetingItem extends PopWindow {

    @property(Toggle)
    setToggle: Toggle = null;

    @property(Toggle)
    zhuoboToggle: Toggle = null;

    @property(Node)
    setNode: Node = null;

    @property(Node)
    zhuobuNode: Node = null;

    @property(Toggle)
    musicToggle: Toggle = null;
    @property(Toggle)
    soundToggle: Toggle = null;

    @property(Toggle)
    gameBgToggle1: Toggle = null;

    @property(Toggle)
    gameBgToggle2: Toggle = null;

    @property(Toggle)
    gameBgToggle3: Toggle = null;

    start() {

        this.onToggleChanged(this.setToggle);

        this.musicToggle.node.on('toggle', (toggle: Toggle) => {
            console.log(`toggle music ${toggle.isChecked}`);
            utils.setMusic(toggle.isChecked);
        }, this);

        this.soundToggle.node.on('toggle', (toggle: Toggle) => {
            console.log(`toggle sound ${toggle.isChecked}`);
            utils.setSound(toggle.isChecked);
        }, this);

        this.gameBgToggle1.node.on('toggle', (toggle: Toggle) => {
            utils.setGameBg('0');
        }, this);

        this.gameBgToggle2.node.on('toggle', (toggle: Toggle) => {
            utils.setGameBg('1');
        }, this);

        this.gameBgToggle3.node.on('toggle', (toggle: Toggle) => {
            utils.setGameBg('2');
        }, this);

        if (utils.getMusic()) {
            console.log(`GetMusic true`);
            this.musicToggle.isChecked = true;
        }
        else {
            console.log(`GetMusic false`);
            this.musicToggle.isChecked = false;
        }
        if (utils.getSound()) {
            console.log(`GetSound true`);
            this.soundToggle.isChecked = true;
        }
        else {
            console.log(`GetSound false`);
            this.soundToggle.isChecked = false;
        }
        let gameBgToggle = utils.getGameBg();
        if (gameBgToggle == '0') {
            this.gameBgToggle1.isChecked = true;
            this.gameBgToggle2.isChecked = false;
            this.gameBgToggle3.isChecked = false;
        }
        else if (gameBgToggle == '1') {
            this.gameBgToggle2.isChecked = true;
            this.gameBgToggle1.isChecked = false;
            this.gameBgToggle3.isChecked = false;
        }
        else {
            this.gameBgToggle3.isChecked = true;
            this.gameBgToggle2.isChecked = false;
            this.gameBgToggle1.isChecked = false;
        }
        // this.gameBgToggle1.isChecked = gameBgToggle == '0';
        // this.gameBgToggle2.isChecked = gameBgToggle == '1';
        // this.gameBgToggle3.isChecked = gameBgToggle == '2';
    }

    onToggleChanged(toggle: Toggle) {
        if (toggle === this.setToggle && toggle.isChecked) {
            this.setNode.active = true;
            this.zhuobuNode.active = false;
        } else if (toggle === this.zhuoboToggle && toggle.isChecked) {
            this.setNode.active = false;
            this.zhuobuNode.active = true;
        }
    }

    public OnCloseClicked() {
        SoundManager.playClick();
        this.hide();
    }

    public checkUpdate() {
        checkForUpdate(true);
    }

    onBtnSwitchUser() {
        SoundManager.playClick();
        UIManager.Instace.showUI({ path: UIConfig.LoginUserViewKey });
    }

    openAgreementUrl() {
        var url = 'https://lm6789.com/agreement.html';
        if (!sys.isNative) {
            // Web 环境：用 window.open 打开
            window.open(url, "_blank");
            return;
        }
        if (sys.os === sys.OS.ANDROID) {
            native.reflection.callStaticMethod(
                "com/cocos/game/AppActivity", // Java 类路径（包名+类名）
                "openURL",                             // 方法名
                "(Ljava/lang/String;)V",               // 方法签名
                url
            );
        }
        else if (sys.os == sys.OS.IOS) {
            native.reflection.callStaticMethod(
                "AppController",   // Objective-C 类名
                "openURL:",        // 方法名（冒号必须带）
                url
            );
        }
        else {
            window.open()
        }
    }

    openPrivacypolicyUrl() {
        var url = 'https://lm6789.com/privacypolicy.html';
        if (!sys.isNative) {
            // Web 环境：用 window.open 打开
            window.open(url, "_blank");
            return;
        }
        if (sys.os === sys.OS.ANDROID) {
            native.reflection.callStaticMethod(
                "com/cocos/game/AppActivity", // Java 类路径（包名+类名）
                "openURL",                             // 方法名
                "(Ljava/lang/String;)V",               // 方法签名
                url
            );
        }
        else if (sys.os == sys.OS.IOS) {
            native.reflection.callStaticMethod(
                "AppController",   // Objective-C 类名
                "openURL:",        // 方法名（冒号必须带）
                url
            );
        }
        else {
            window.open(url, '_blank');
        }
    }

    onLoginOut() {
        this.hide();
        SoundManager.playClick();
        UIManager.Instace.showUI({
            path: UIConfig.MessageBoxCommonKey,
            data: {
                okName: "确定",
                cancleName: "取消",
                des: "是否退出登录",
                okFunc: () => {
                    localStorage.removeItem(GlobalData.TOKEN);
                    utils.send(GlobalData.localEvent.LoginOut);
                    // UIManager.Instace.clearAllUI();
                    // director.loadScene(GlobalData.sceneName.loading);
                    // GlobalData.cardInfo.oneCard = false;
                    // GlobalData.cardInfo.sortCard = false;
                    // //逻辑退出
                    // let sendBuffer = PbManager.instance.sendMsg(GlobalData.C2S_Event.ExitGame, null);
                    // GameSocket.send(sendBuffer);
                    // //UI退出
                    // console.log("nzp add 返回大厅 1");
                    // UIManager.Instace.showUI({ path: UIConfig.LoadItemKey, data: GlobalData.sceneName.loading });
                },
                cancleFunc: () => {

                }
            }
        });
    }
}

