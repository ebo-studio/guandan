System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Node, Sprite, SpriteFrame, PopWindow, SoundManager, GameEndKickHeadItem, GameEndType, GlobalData, UIManager, UIConfig, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _crd, ccclass, property, GameEndKickItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfPopWindow(extras) {
    _reporterNs.report("PopWindow", "../PopWindow", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundManager(extras) {
    _reporterNs.report("SoundManager", "../../manager/SoundManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEndKickHeadItem(extras) {
    _reporterNs.report("GameEndKickHeadItem", "./GameEndKickHeadItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEndType(extras) {
    _reporterNs.report("GameEndType", "../../manager/GlobalData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalData(extras) {
    _reporterNs.report("GlobalData", "../../manager/GlobalData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIManager(extras) {
    _reporterNs.report("UIManager", "../../manager/UIManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIConfig(extras) {
    _reporterNs.report("UIConfig", "../../manager/UIConfig", _context.meta, extras);
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
      GameEndKickHeadItem = _unresolved_4.GameEndKickHeadItem;
    }, function (_unresolved_5) {
      GameEndType = _unresolved_5.GameEndType;
      GlobalData = _unresolved_5.GlobalData;
    }, function (_unresolved_6) {
      UIManager = _unresolved_6.UIManager;
    }, function (_unresolved_7) {
      UIConfig = _unresolved_7.UIConfig;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "391e5DUR2RIyYHZsCZONh7x", "GameEndKickItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node', 'Sprite', 'SpriteFrame']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameEndKickItem", GameEndKickItem = (_dec = ccclass('GameEndKickItem'), _dec2 = property(Sprite), _dec3 = property(SpriteFrame), _dec4 = property(Sprite), _dec5 = property(SpriteFrame), _dec6 = property(Sprite), _dec7 = property(SpriteFrame), _dec8 = property(SpriteFrame), _dec9 = property(_crd && GameEndKickHeadItem === void 0 ? (_reportPossibleCrUseOfGameEndKickHeadItem({
        error: Error()
      }), GameEndKickHeadItem) : GameEndKickHeadItem), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Label), _dec(_class = (_class2 = class GameEndKickItem extends (_crd && PopWindow === void 0 ? (_reportPossibleCrUseOfPopWindow({
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

          _initializerDefineProperty(this, "spsTitle2", _descriptor7, this);

          _initializerDefineProperty(this, "headItems", _descriptor8, this);

          _initializerDefineProperty(this, "nodeBack", _descriptor9, this);

          _initializerDefineProperty(this, "nodeOk", _descriptor10, this);

          _initializerDefineProperty(this, "nodeTip", _descriptor11, this);

          _initializerDefineProperty(this, "txtTime", _descriptor12, this);

          this.resList1 = ["淘汰", "晋级"];
          this.resList2 = ["失败", "胜利"];
          this.timeFunc = null;
          this.leftTime = 0;
          this.tmpData = null;
        }

        setData(obj) {
          let data = obj;
          this.tmpData = data;
          let resData = this.checkRes(data);
          console.log("resData----> ", resData);
          let iswin = Number(!resData.isWin);

          for (let i = 0; i < resData.list.length; i++) {
            let res = resData.list[i].res;
            let des = ""; //胜利|失败

            if (data.type == (_crd && GameEndType === void 0 ? (_reportPossibleCrUseOfGameEndType({
              error: Error()
            }), GameEndType) : GameEndType).kick_1) {
              des = this.resList2[res];
            } else {
              des = this.resList1[res];
            }

            this.headItems[i].setData(resData.list[i], Boolean(res), des);
          }

          this.picLight.spriteFrame = this.spsLight[iswin];
          this.picBg.spriteFrame = this.spsBg[iswin];

          if (data.type == (_crd && GameEndType === void 0 ? (_reportPossibleCrUseOfGameEndType({
            error: Error()
          }), GameEndType) : GameEndType).kick_1) {
            this.picTitle.spriteFrame = this.spsTitle[iswin];
          } else {
            this.picTitle.spriteFrame = this.spsTitle2[iswin];
          }

          this.nodeBack.active = false;
          this.nodeOk.active = false;
          this.nodeTip.active = false;
          this.txtTime.node.active = false;

          if (data.type == (_crd && GameEndType === void 0 ? (_reportPossibleCrUseOfGameEndType({
            error: Error()
          }), GameEndType) : GameEndType).kick_1) {
            this.leftTime = data.time;
            this.timeDown();
          } else if (data.type == (_crd && GameEndType === void 0 ? (_reportPossibleCrUseOfGameEndType({
            error: Error()
          }), GameEndType) : GameEndType).kick_2) {
            if (resData.isWin) {
              this.nodeTip.active = true;
              this.nodeOk.active = true;
            } else {
              this.nodeBack.active = true;
            }
          } else if (data.type == (_crd && GameEndType === void 0 ? (_reportPossibleCrUseOfGameEndType({
            error: Error()
          }), GameEndType) : GameEndType).kick_3) {
            if (!resData.isWin) {
              this.nodeOk.active = true;
            }
          }
        }

        checkRes(data) {
          let isWin = false;
          let listMy = [];
          let listOther = [];

          for (let i = 0; i < data.list.length; i++) {
            const item = data.list[i];

            if (item.res == 1) {
              if (item.id == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                error: Error()
              }), GlobalData) : GlobalData).userInfo.user_id) {
                isWin = true;
              }

              listMy.push(item);
            } else {
              listOther.push(item);
            }
          }

          let resList = [];

          if (isWin) {
            resList = listMy.concat(listOther);
          } else {
            resList = listOther.concat(listMy);
          }

          return {
            isWin: isWin,
            list: resList
          };
        }

        timeDown() {
          if (this.timeFunc) {
            this.unschedule(this.timeFunc);
            this.timeFunc = null;
          }

          this.txtTime.node.active = true;
          this.setTime();
          let that = this;

          this.timeFunc = function () {
            that.leftTime -= 1;
            that.setTime();

            if (that.leftTime <= 0) {
              that.unschedule(that.timeFunc);
            }
          };

          this.schedule(this.timeFunc, 1);
        }

        setTime() {
          if (this.leftTime >= 0) {
            this.txtTime.string = this.leftTime + "s 后继续游戏";
            this.txtTime.fontSize = 36;
          }
        } //返回大厅


        onBackBtnClick() {
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).playClick();
          console.log("nzp add 返回大厅 5");
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).Instace.showUI({
            path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
              error: Error()
            }), UIConfig) : UIConfig).LoadItemKey,
            data: (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).sceneName.lobby
          });
          this.hide();
        }

        onOkBtnClick() {
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).playClick();
          console.log("销毁所有 3--->");
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).Instace.clearAllUI();
          console.log("nzp add 返回大厅 4");
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).Instace.showUI({
            path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
              error: Error()
            }), UIConfig) : UIConfig).LoadItemKey,
            data: (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).sceneName.lobby
          });
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
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "spsTitle2", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "headItems", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "nodeBack", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "nodeOk", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "nodeTip", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "txtTime", [_dec13], {
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
//# sourceMappingURL=93fb31e35c6720352a03543efbaef9f166d4fa28.js.map