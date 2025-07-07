System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, PostMessage;

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

      _cclegacy._RF.push({}, "d1d60eOTyNLjbzBuVUrIM+g", "PostMessage", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PostMessage", PostMessage = (_dec = ccclass('PostMessage'), _dec(_class = class PostMessage extends Component {
        addEvent() {
          //监听
          document.addEventListener("message", e => {
            console.log("调用了message方法");

            if (e.data == "start") {
              console.log("receive start succes");
            }
          }); //发送

          parent.postMessage("start");
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4ddcd61d8234e58d279f283802a54d91ec72e48e.js.map