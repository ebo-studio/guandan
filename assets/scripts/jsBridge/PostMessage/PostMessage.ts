import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('PostMessage')
export class PostMessage extends Component {

    addEvent() {
        //监听
        document.addEventListener("message", (e: any) => {
            console.log("调用了message方法");
            if (e.data == "start") {
                console.log("receive start succes");
            }
        });

        //发送
        parent.postMessage("start");
    }
}

