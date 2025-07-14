System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, AItemRenderer;

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

      _cclegacy._RF.push({}, "02c79nHE2JF0a6bdo+Q8Xo+", "AItemRenerer", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 单项渲染基类 T数据结构
       * @author slf
       *  */

      _export("default", AItemRenderer = (_dec = ccclass('AItemRenderer'), _dec2 = property({
        displayName: "是否添加点击事件"
      }), _dec(_class = (_class2 = class AItemRenderer extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "isClick", _descriptor, this);

          this.callback = void 0;
          this.cbThis = void 0;
          this._data = void 0;
        }

        //数据结构
        get data() {
          return this._data;
        }

        set data(v) {
          this._data = v;
          this.dataChanged();
        }
        /**数据发生变化 子类重写*/


        dataChanged() {}
        /**刷新数据 */


        refreshData() {
          this.dataChanged();
        }
        /**销毁 */


        onDestroy() {
          this._data = null;
        }
        /**
         * 设置点击回调
         * @param cb 回调函数
         * @param cbT 回调作用域
         */


        setTouchCallback(cb, cbT) {
          this.callback = cb;
          this.cbThis = cbT;

          if (this.node) {
            if (this.node.hasEventListener(Node.EventType.TOUCH_END)) {
              this.node.off(Node.EventType.TOUCH_END, this.onClickCallback, this);
            }

            this.node.on(Node.EventType.TOUCH_END, this.onClickCallback, this);
          }
        }
        /**
         * 预制体点击回调 会携带data
         * @param e 
         */


        onClickCallback(e) {
          this.callback && this.callback.call(this.cbThis, this.data);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "isClick", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=693b7a034fb3ff45ab0aec965dcf01b2f152dfa0.js.map