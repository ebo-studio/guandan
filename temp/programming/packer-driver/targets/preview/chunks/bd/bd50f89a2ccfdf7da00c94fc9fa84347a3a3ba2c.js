System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, Start;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2b158cbsgFMDIPb3bvRJSUu", "Start", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Start", Start = (_dec = ccclass('Start'), _dec2 = property(Node), _dec(_class = (_class2 = class Start extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "btnLogin", _descriptor, this);

          this.loginSuccess = false;
        }

        onLoad() {}

        start() {} //登录


        onBtnLogin() {// UIManager.Instace.showUI({
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
        } //请求登录


        onLogin() {// GlobalData.requestLogin({
          //     success: () => {
          //         AppGlobal.instance.showLoadItem(GlobalData.sceneName.lobby);
          //     }
          // });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "btnLogin", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bd50f89a2ccfdf7da00c94fc9fa84347a3a3ba2c.js.map