System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, Test;

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

      _cclegacy._RF.push({}, "4f76emyUxdOM54d7Gj4fuJZ", "Test", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Graphics']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Test", Test = (_dec = ccclass('Test'), _dec(_class = class Test extends Component {
        start() {}

        click() {// AppGlobal.instance.showMessageHint("xixixixixixix");
          //SoundManager.playSound("audio/sound/click",false);
        }

        win() {// AppGlobal.instance.showMessageBox({
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

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bc20899fe97061e697d1a6f08903ae737f649ccd.js.map