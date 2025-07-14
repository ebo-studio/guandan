System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, TestProto;

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

      _cclegacy._RF.push({}, "9faf7psrnlLEIxD4thp4KlL", "TestProto", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'TextAsset']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TestProto", TestProto = (_dec = ccclass('TestProto'), _dec(_class = class TestProto extends Component {
        start() {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=90c8ac7ee1ac16904f1c7b57f131f4430ac1e8e9.js.map