System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Node, Sprite, SpriteFrame, PopWindow, SoundManager, GameEndFreeHeadItem, GameEndType, GlobalData, GameLogic, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _crd, ccclass, property, GameEndScoreItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfPopWindow(extras) {
    _reporterNs.report("PopWindow", "../PopWindow", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundManager(extras) {
    _reporterNs.report("SoundManager", "../../manager/SoundManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEndFreeHeadItem(extras) {
    _reporterNs.report("GameEndFreeHeadItem", "../gameEndFree/GameEndFreeHeadItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEndType(extras) {
    _reporterNs.report("GameEndType", "../../manager/GlobalData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalData(extras) {
    _reporterNs.report("GlobalData", "../../manager/GlobalData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameLogic(extras) {
    _reporterNs.report("GameLogic", "../game/GameLogic", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Label = _cc.Label;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
    }, function (_unresolved_2) {
      PopWindow = _unresolved_2.default;
    }, function (_unresolved_3) {
      SoundManager = _unresolved_3.SoundManager;
    }, function (_unresolved_4) {
      GameEndFreeHeadItem = _unresolved_4.GameEndFreeHeadItem;
    }, function (_unresolved_5) {
      GameEndType = _unresolved_5.GameEndType;
      GlobalData = _unresolved_5.GlobalData;
    }, function (_unresolved_6) {
      GameLogic = _unresolved_6.GameLogic;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4db9dhpZcFFYojirSRH1/gw", "GameEndScoreItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node', 'Sprite', 'SpriteFrame', 'tween']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameEndScoreItem", GameEndScoreItem = (_dec = ccclass('GameEndScoreItem'), _dec2 = property(Sprite), _dec3 = property(SpriteFrame), _dec4 = property(Sprite), _dec5 = property(SpriteFrame), _dec6 = property(Sprite), _dec7 = property(SpriteFrame), _dec8 = property(_crd && GameEndFreeHeadItem === void 0 ? (_reportPossibleCrUseOfGameEndFreeHeadItem({
        error: Error()
      }), GameEndFreeHeadItem) : GameEndFreeHeadItem), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Label), _dec(_class = (_class2 = class GameEndScoreItem extends (_crd && PopWindow === void 0 ? (_reportPossibleCrUseOfPopWindow({
        error: Error()
      }), PopWindow) : PopWindow) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "picLight", _descriptor, this);

          _initializerDefineProperty(this, "spsLight", _descriptor2, this);

          _initializerDefineProperty(this, "picBg", _descriptor3, this);

          _initializerDefineProperty(this, "spsBg", _descriptor4, this);

          _initializerDefineProperty(this, "picTitle", _descriptor5, this);

          _initializerDefineProperty(this, "spsTitle", _descriptor6, this);

          _initializerDefineProperty(this, "headItems", _descriptor7, this);

          _initializerDefineProperty(this, "nodeBack", _descriptor8, this);

          _initializerDefineProperty(this, "nodeOk", _descriptor9, this);

          _initializerDefineProperty(this, "txtTime", _descriptor10, this);

          this.timeFunc = null;
          this.leftTime = 0;
          this.tmpData = null;
        }

        setData(obj) {
          this.tmpData = obj;
          let data = obj;
          this.nodeOk.active = false;
          this.nodeBack.active = false;
          this.txtTime.string = "";
          this.picLight.node.active = data.type == (_crd && GameEndType === void 0 ? (_reportPossibleCrUseOfGameEndType({
            error: Error()
          }), GameEndType) : GameEndType).score_1;
          this.picTitle.node.active = data.type == (_crd && GameEndType === void 0 ? (_reportPossibleCrUseOfGameEndType({
            error: Error()
          }), GameEndType) : GameEndType).score_1;

          if (data.type == (_crd && GameEndType === void 0 ? (_reportPossibleCrUseOfGameEndType({
            error: Error()
          }), GameEndType) : GameEndType).score_1) {
            this.tmpData = data;
            let list = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
              error: Error()
            }), GameLogic) : GameLogic).checkResult(this.tmpData);
            let iswin = list.isWin ? 0 : 1;

            for (let i = 0; i < list.list.length; i++) {
              let item = list.list[i];
              let data = {
                rank: item.res,
                head: item.headImg,
                name: item.name,
                score: item.score
              };
              this.headItems[i].setData(data);
            }

            this.picLight.spriteFrame = this.spsLight[iswin];
            this.picBg.spriteFrame = this.spsBg[iswin];
            this.picTitle.spriteFrame = this.spsTitle[iswin];
            this.leftTime = data.time;
            this.timeDown();
          } else {
            for (let i = 0; i < this.tmpData.list.length; i++) {
              let item = this.tmpData.list[i];
              let viewId = (_crd && GameLogic === void 0 ? (_reportPossibleCrUseOfGameLogic({
                error: Error()
              }), GameLogic) : GameLogic).getUserViewIdById(item.id);
              let data = {
                rank: item.res,
                head: item.headImg,
                name: item.name,
                score: item.score
              };

              if (viewId == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                error: Error()
              }), GlobalData) : GlobalData).viewId.self) {
                this.headItems[0].setData(data, true);
              } else if (viewId == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                error: Error()
              }), GlobalData) : GlobalData).viewId.opposite) {
                this.headItems[1].setData(data, true);
              } else if (viewId == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                error: Error()
              }), GlobalData) : GlobalData).viewId.up) {
                this.headItems[2].setData(data, true);
              } else if (viewId == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                error: Error()
              }), GlobalData) : GlobalData).viewId.down) {
                this.headItems[3].setData(data, true);
              }
            }

            this.picBg.spriteFrame = this.spsBg[0]; // this.leftTime = 3;
            // this.timeDown();
            // tween(this.node)
            //     .delay(3)
            //     .call(() => {
            //         this.requestEndData();
            //     })
            //     .start();
          }
        }

        timeDown() {
          if (this.timeFunc) {
            this.unschedule(this.timeFunc);
            this.timeFunc = null;
          }

          this.setTime();
          let that = this;

          this.timeFunc = function () {
            that.leftTime -= 1;
            that.setTime();

            if (that.leftTime <= 0) {
              that.unschedule(that.timeFunc);
              that.onBackBtnClick();
            }
          };

          this.schedule(this.timeFunc, 1);
        }

        setTime() {
          if (this.leftTime >= 0) {
            if (this.tmpData.type == (_crd && GameEndType === void 0 ? (_reportPossibleCrUseOfGameEndType({
              error: Error()
            }), GameEndType) : GameEndType).score_1) {
              this.txtTime.string = this.leftTime + "s 后继续游戏";
            } else {
              this.txtTime.string = this.leftTime + "s 后弹出积分列表";
            }
          }
        } //返回大厅


        onBackBtnClick() {
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).playClick();
          this.hide();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "picLight", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "spsLight", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "picBg", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "spsBg", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "picTitle", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "spsTitle", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "headItems", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "nodeBack", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "nodeOk", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "txtTime", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=53aeaec2ec85b3fd487ceae1111576823ec0dbaa.js.map