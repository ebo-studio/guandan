System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, sp, GameDefine, GlobalData, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _crd, ccclass, property, CardAction;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameDefine(extras) {
    _reporterNs.report("GameDefine", "../game/GameDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalData(extras) {
    _reporterNs.report("GlobalData", "../../manager/GlobalData", _context.meta, extras);
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
      sp = _cc.sp;
    }, function (_unresolved_2) {
      GameDefine = _unresolved_2.GameDefine;
    }, function (_unresolved_3) {
      GlobalData = _unresolved_3.GlobalData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "092527PD/JFyYde3RGmHVu1", "CardAction", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'sp', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("CardAction", CardAction = (_dec = ccclass('CardAction'), _dec2 = property(sp.Skeleton), _dec3 = property(sp.Skeleton), _dec4 = property(sp.Skeleton), _dec5 = property(sp.Skeleton), _dec6 = property(sp.Skeleton), _dec7 = property(sp.Skeleton), _dec8 = property(sp.Skeleton), _dec9 = property(sp.Skeleton), _dec10 = property(sp.Skeleton), _dec(_class = (_class2 = class CardAction extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "zhaDan", _descriptor, this);

          _initializerDefineProperty(this, "gangBan", _descriptor2, this);

          _initializerDefineProperty(this, "muBan", _descriptor3, this);

          _initializerDefineProperty(this, "sanBuDai", _descriptor4, this);

          _initializerDefineProperty(this, "sanDaiYiDui", _descriptor5, this);

          _initializerDefineProperty(this, "shunZi", _descriptor6, this);

          _initializerDefineProperty(this, "tongHuaShun", _descriptor7, this);

          _initializerDefineProperty(this, "wanZha", _descriptor8, this);

          _initializerDefineProperty(this, "jiefeng", _descriptor9, this);

          this.zhaDanInitUpPos = null;
          this.zhaDanInitDownPos = null;
          this.tmpViewId = null;
        }

        /**
         * 
         * @param len  炸弹时才有用
         */
        playAction(data) {
          this.tmpViewId = data.viewId;
          var spAction = null;

          if (data.cardType == (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
            error: Error()
          }), GameDefine) : GameDefine).KIND_CARDS_3) {
            //三不带
            spAction = this.sanBuDai;
          } else if (data.cardType == (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
            error: Error()
          }), GameDefine) : GameDefine).KIND_CARDS_3_2) {
            //三带对
            spAction = this.sanDaiYiDui;
          } else if (data.cardType == (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
            error: Error()
          }), GameDefine) : GameDefine).KIND_CARDS_SHUNZI_2) {
            //木板
            spAction = this.muBan;
          } else if (data.cardType == (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
            error: Error()
          }), GameDefine) : GameDefine).KIND_CARDS_SHUNZI_3) {
            //钢板
            spAction = this.gangBan;
          } else if (data.cardType == (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
            error: Error()
          }), GameDefine) : GameDefine).KIND_CARDS_SHUNZI_1) {
            //顺子
            spAction = this.shunZi;
          } else if (data.cardType == (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
            error: Error()
          }), GameDefine) : GameDefine).KIND_CARDS_COLOR) {
            //同花顺
            spAction = this.tongHuaShun;
          } else if (data.cardType == (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
            error: Error()
          }), GameDefine) : GameDefine).KIND_CARDS_BOMB_45) {
            //炸弹
            this.getInitPos();
            spAction = this.zhaDan; //炸弹有4张~8张,炸弹位置动态调整

            if (data.viewId == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).viewId.up) {
              var posX = this.zhaDanInitUpPos.x + 28 * (data.cardNum - 4) * 0.5;
              spAction.node.setPosition(posX, this.zhaDanInitUpPos.y, this.zhaDanInitUpPos.z);
            } else if (data.viewId == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).viewId.down) {
              var _posX = this.zhaDanInitDownPos.x - 28 * (data.cardNum - 4) * 0.5;

              spAction.node.setPosition(_posX, this.zhaDanInitDownPos.y, this.zhaDanInitDownPos.z);
            }
          } else if (data.cardType == (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
            error: Error()
          }), GameDefine) : GameDefine).KIND_CARDS_KING) {
            //天王炸
            spAction = this.wanZha;
          } else if (data.cardType == (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
            error: Error()
          }), GameDefine) : GameDefine).KIND_CARDS_Feng) {
            //接风
            spAction = this.jiefeng;
          }

          spAction.node.active = true;
          var track = spAction.setAnimation(0, "ani", false);
          spAction.setTrackCompleteListener(track, trackEntry => {
            spAction.node.active = false;
          });
        }

        getInitPos() {
          if (this.tmpViewId == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).viewId.up) {
            if (this.zhaDanInitUpPos == null) {
              this.zhaDanInitUpPos = this.zhaDan.node.getPosition();
            }
          } else if (this.tmpViewId == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).viewId.down) {
            if (this.zhaDanInitDownPos == null) {
              this.zhaDanInitDownPos = this.zhaDan.node.getPosition();
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "zhaDan", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "gangBan", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "muBan", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "sanBuDai", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "sanDaiYiDui", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "shunZi", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "tongHuaShun", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "wanZha", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "jiefeng", [_dec10], {
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
//# sourceMappingURL=40e7d736fc743c8f157d2e691945068d4e1120e2.js.map