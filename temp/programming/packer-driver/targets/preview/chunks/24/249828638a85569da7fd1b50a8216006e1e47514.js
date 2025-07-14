System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, resources, Prefab, find, utils, UIConfig, _dec, _class, _class2, _crd, ccclass, property, UIManager;

  function _reportPossibleCrUseOfutils(extras) {
    _reporterNs.report("utils", "../common/utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPopWindow(extras) {
    _reporterNs.report("PopWindow", "../component/PopWindow", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIConfig(extras) {
    _reporterNs.report("UIConfig", "./UIConfig", _context.meta, extras);
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
      director = _cc.director;
      resources = _cc.resources;
      Prefab = _cc.Prefab;
      find = _cc.find;
    }, function (_unresolved_2) {
      utils = _unresolved_2.utils;
    }, function (_unresolved_3) {
      UIConfig = _unresolved_3.UIConfig;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9b60anYgMNNbII61NZYrKH9", "UIManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'director', 'resources', 'Prefab', 'find', '__private']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UIManager", UIManager = (_dec = ccclass('UIManager'), _dec(_class = (_class2 = class UIManager extends Component {
        constructor() {
          super(...arguments);
          this.uiMap = new Map();
        }

        onLoad() {
          (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
            error: Error()
          }), UIConfig) : UIConfig).init(); //常驻节点,播放音效

          director.addPersistRootNode(this.node);
          UIManager.Instace = this;
        } //显示


        showUI(obj) {
          var com = this.getUI(obj.path);

          if (com) {
            this.setTopSiblingIndex(com.node);
            if (obj.callBack) obj.callBack(com);
            com.show();
            com.setData(obj.data);
            return;
          }

          var info = (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
            error: Error()
          }), UIConfig) : UIConfig).getUIInfoByName(obj.path);
          resources.load(info.path, Prefab, (err, res) => {
            //这里再次验证的目的是,load需要时间,如果有段时间内有多次加载,会出现多个框
            var preCom = this.getUI(obj.path);

            if (preCom) {
              this.setTopSiblingIndex(preCom.node);
              if (obj.callBack) obj.callBack(preCom);
              preCom.show();
              preCom.setData(obj.data);
              return;
            }

            var com = (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
              error: Error()
            }), utils) : utils).addInstanceToRoot(res, find("Canvas"), info.comp);

            if (!com) {
              console.error("不存在路径: ", obj.path);
              return;
            }

            this.setTopSiblingIndex(com.node); //必须放到show前边

            if (obj.callBack) obj.callBack(com);
            com.show();
            com.setData(obj.data);
            this.uiMap.set(obj.path, com);
          });
        } //隐藏


        hideUI(uiName) {
          var com = this.getUI(uiName);

          if (com) {
            com.hide();
          }
        } //销毁


        destroyUI(uiName) {
          var com = this.getUI(uiName);

          if (com) {
            var _com = this.uiMap.get(uiName);

            _com.node && _com.node.destroy();
            this.uiMap.delete(uiName);
          }
        } //获取


        getUI(uiName) {
          var item = this.uiMap.get(uiName);
          return item;
        }

        getUICount() {
          return this.uiMap.size;
        } //销毁所有


        clearAllUI() {
          console.log("销毁所有--->");
          if (!UIManager.Instace) return;

          for (var key of this.uiMap.keys()) {
            var com = this.uiMap.get(key);

            if (com.name != "WaitItem<WaitItem>") {
              com.node && com.node.destroy();
              this.uiMap.delete(key);
            }
          }

          console.log("ui len--> ", this.uiMap.size);
        }

        test() {// UIManager.Instace.showUI({
          //     path: UIConfig.User, data: 123, callBack: (res: UserItem) => {
          //         res.show_callback = () => {
          //             console.log("show_callback ---->");
          //         };
          //         res.hide_callback = () => {
          //             console.log("hide_callback ---->");
          //         }
          //     }
          // });
          //UIManager.Instace.hideUI(UIConfig.User);
        }

        setTopSiblingIndex(node) {
          node.setSiblingIndex(node.getParent().children.length + 1);
        }

      }, _class2.Instace = null, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=249828638a85569da7fd1b50a8216006e1e47514.js.map