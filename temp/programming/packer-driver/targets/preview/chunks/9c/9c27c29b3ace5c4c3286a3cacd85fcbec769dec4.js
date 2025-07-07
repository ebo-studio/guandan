System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _class2, _crd, ccclass, property, PbManager;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1a13cbxXoRKRI7jk5KWUpkX", "PbManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'TextAsset']);

      ({
        ccclass,
        property
      } = _decorator); //只做消息的decode和encode,不处理逻辑

      _export("PbManager", PbManager = (_dec = ccclass('PbManager'), _dec(_class = (_class2 = class PbManager extends Component {
        onLoad() {
          PbManager.instance = this;
        }

        start() {// let userInfo = GameMsg.UserInfo.create({ name: "123", age: 10, gold: 10001, stuff: { id: 1001, count: 4000 } });
          // let buffer = GameMsg.UserInfo.encode(userInfo).finish();
          // console.log("buffer ", buffer);
          // let sendBuf = this.sendMsg(10, buffer);
          // let recBuf = this.reciveMsg(sendBuf);
          // console.log("recBuf ", recBuf);
          // if (recBuf.id == 10) {
          //     let recData = GameMsg.UserInfo.decode(buffer);
          //     console.log("recData ", recData);
          // }
        } //发送


        sendMsg(id, buf) {
          if (buf == null || buf.length == 0) {
            //send
            var _sendBuf = new ArrayBuffer(2);

            var _dv = new DataView(_sendBuf); //加入协议号


            _dv.setUint16(0, id);

            var _uint8Buf = new Uint8Array(_sendBuf);

            _uint8Buf.set([], 2);

            return _sendBuf;
          } //send


          var sendBuf = new ArrayBuffer(buf.length + 2);
          var dv = new DataView(sendBuf); //加入协议号

          dv.setUint16(0, id);
          var uint8Buf = new Uint8Array(sendBuf);
          uint8Buf.set(buf, 2);
          return sendBuf;
        } //接收


        reciveMsg(recBuf) {
          var recDv = new DataView(recBuf); //提取协议号

          var recId = recDv.getUint16(0);
          var leftBuf = new Uint8Array(recBuf.slice(2));
          return {
            id: recId,
            msg: leftBuf
          };
        }

      }, _class2.instance = null, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9c27c29b3ace5c4c3286a3cacd85fcbec769dec4.js.map