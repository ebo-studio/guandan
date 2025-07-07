import { _decorator, Component, TextAsset } from 'cc';
const { ccclass, property } = _decorator;
//只做消息的decode和encode,不处理逻辑
@ccclass('PbManager')
export class PbManager extends Component {
    
    public static instance: PbManager = null;
    
    onLoad(){
        PbManager.instance = this;
    }
    start() {
        // let userInfo = GameMsg.UserInfo.create({ name: "123", age: 10, gold: 10001, stuff: { id: 1001, count: 4000 } });
        // let buffer = GameMsg.UserInfo.encode(userInfo).finish();
        // console.log("buffer ", buffer);
        // let sendBuf = this.sendMsg(10, buffer);

        // let recBuf = this.reciveMsg(sendBuf);
        // console.log("recBuf ", recBuf);
        // if (recBuf.id == 10) {
        //     let recData = GameMsg.UserInfo.decode(buffer);
        //     console.log("recData ", recData);
        // }
    }
    //发送
    sendMsg(id: number, buf: Uint8Array) {
        if (buf == null || buf.length == 0) {
            //send
            let sendBuf = new ArrayBuffer(2);
            let dv = new DataView(sendBuf);
            //加入协议号
            dv.setUint16(0, id);
            let uint8Buf = new Uint8Array(sendBuf);
            uint8Buf.set([], 2);
            return sendBuf;
        }
        //send
        let sendBuf = new ArrayBuffer(buf.length + 2);
        let dv = new DataView(sendBuf);
        //加入协议号
        dv.setUint16(0, id);
        let uint8Buf = new Uint8Array(sendBuf);
        uint8Buf.set(buf, 2);
        return sendBuf;
    }
    //接收
    reciveMsg(recBuf: ArrayBuffer) {
        let recDv = new DataView(recBuf);
        //提取协议号
        let recId = recDv.getUint16(0);
        let leftBuf = new Uint8Array(recBuf.slice(2));
        return { id: recId, msg: leftBuf };
    }
}

