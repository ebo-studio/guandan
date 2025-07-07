import { _decorator, Component, Node, Graphics } from 'cc';
import { AppGlobal } from './AppGlobal';
import { SoundManager } from './manager/SoundManager';
const { ccclass, property } = _decorator;

@ccclass('Test')
export class Test extends Component {

    start() {

    }

    public click(){
        // AppGlobal.instance.showMessageHint("xixixixixixix");
        //SoundManager.playSound("audio/sound/click",false);
    }

    public win() {
        // AppGlobal.instance.showMessageBox({
        //     okName: "",
        //     cancleName: "",
        //     des: "xixixix",
        //     okFunc: () => {
        //         console.log("ok");
        //     }, cancleFunc: () => {
        //         console.log("cancle");
        //     }
        // });
        //SoundManager.playMusic("audio/music/win",false);
    }
}

