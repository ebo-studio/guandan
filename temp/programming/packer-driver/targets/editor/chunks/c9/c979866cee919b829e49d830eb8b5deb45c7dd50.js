System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Vec3, isValid, _dec, _class, _crd, ccclass, property, PopWindow;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Vec3 = _cc.Vec3;
      isValid = _cc.isValid;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "74bddBNEDpLRohj+K7R/ydz", "PopWindow", undefined);

      __checkObsolete__(['_decorator', 'Component', 'tween', 'Vec3', 'isValid']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", PopWindow = (_dec = ccclass('PopWindow'), _dec(_class = class PopWindow extends Component {
        constructor(...args) {
          super(...args);
          this.show_callback = null;
          this.hide_callback = null;
        }

        onShow() {}

        onHide() {}

        setData(obj) {}

        show() {
          this.node.active = true; //很奇怪0.1,适配会有问题,0没问题

          let that = this;
          this.node.scale = Vec3.ONE;

          if (that.show_callback) {
            that.show_callback();
          }

          if (that.onShow) {
            that.onShow();
          } // this.node.scale = new Vec3(0, 0, 0);
          // tween(this.node)
          //     .sequence(
          //         tween(this.node)
          //             .to(0.1, { scale: new Vec3(1, 1, 1) }),
          //         tween(this.node)
          //             .call(function () {
          //                 if (that.show_callback) {
          //                     that.show_callback();
          //                 }
          //                 if (that.onShow) {
          //                     that.onShow();
          //                 }
          //             })
          //     )
          //     .start();

        }

        hide() {
          if (isValid(this.node)) {
            let that = this;
            that.node.active = false;

            if (that.hide_callback) {
              that.hide_callback();
            }

            if (that.onHide) {
              that.onHide();
            } // tween(this.node)
            //     .sequence(
            //         tween(this.node)
            //             .to(0.1, { scale: new Vec3(0, 0, 0) }),
            //         tween(this.node)
            //             .call(function () {
            //                 that.node.active = false;
            //                 if (that.hide_callback) {
            //                     that.hide_callback();
            //                 }
            //                 if (that.onHide) {
            //                     that.onHide();
            //                 }
            //             })
            //     )
            //     .start();

          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c979866cee919b829e49d830eb8b5deb45c7dd50.js.map