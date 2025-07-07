import { _decorator, Component, Node } from 'cc';
import { AppGlobal } from '../AppGlobal';
import { GlobalData } from '../manager/GlobalData';
import { SoundManager } from '../manager/SoundManager';
const { ccclass, property } = _decorator;

@ccclass('Start')
export class Start extends Component {
    //登录
    @property(Node)
    btnLogin: Node = null!;

    private loginSuccess: boolean = false;

    onLoad() {
      
    }

    start() {
       
    }
    //登录
    onBtnLogin() {

        // UIManager.Instace.showUI({
        //     path: UIConfig.MessageBoxCommonKey,
        //     data: {
        //         okName: "嘻嘻",
        //         cancleName: "呵呵",
        //         des: "好的",
        //         okFunc: () => {
        //             console.log("okfunc");
        //         },
        //         cancleFunc: () => {
        //             console.log("cancleFunc");
        //         }
        //     },
        //     callBack: () => {
        //         console.log("callBack");
        //     }
        // });

        // UIManager.Instace.showUI({path:UIConfig.SettingItemKey});
        // UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: "xxxxxxxxxxx" });
        // UIManager.Instace.showUI({ path: UIConfig.LoadItemKey, data: GlobalData.sceneName.lobby });

        // UIManager.Instace.showUI({ path: UIConfig.RankItemKey });

        // SoundManager.playClick();
        // this.onLogin();
    }
    //请求登录
    onLogin(){
        // GlobalData.requestLogin({
        //     success: () => {
        //         AppGlobal.instance.showLoadItem(GlobalData.sceneName.lobby);
        //     }
        // });
    }
}

