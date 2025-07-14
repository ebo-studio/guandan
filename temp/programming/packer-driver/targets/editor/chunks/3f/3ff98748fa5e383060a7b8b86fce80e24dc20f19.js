System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Sprite, utils, _dec, _class, _crd, ccclass, property, LobbyUserHeadItem;

  function _reportPossibleCrUseOfutils(extras) {
    _reporterNs.report("utils", "../common/utils", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Label = _cc.Label;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      utils = _unresolved_2.utils;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d0412YmW8lI2qImwS6KHj95", "LobbyUserHeadItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("LobbyUserHeadItem", LobbyUserHeadItem = (_dec = ccclass('LobbyUserHeadItem'), _dec(_class = class LobbyUserHeadItem extends Component {
        setData(data) {
          if (data.head) {
            let sp = this.node.getChildByName("headMask").getChildByName("picHead").getComponent(Sprite);
            (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
              error: Error()
            }), utils) : utils).loadRemoteSpriteframe(sp, data.head);
          }

          let txtName = this.node.getChildByName("txtName").getComponent(Label);

          if (data.name) {
            txtName.string = (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
              error: Error()
            }), utils) : utils).clampNickname(data.name, 6);
          } else {
            txtName.string = "";
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3ff98748fa5e383060a7b8b86fce80e24dc20f19.js.map