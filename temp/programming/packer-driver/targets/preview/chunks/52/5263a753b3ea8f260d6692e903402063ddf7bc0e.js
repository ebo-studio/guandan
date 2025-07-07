System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Node, tween, PopWindow, SoundManager, LobbyUserHeadItem, utils, GlobalData, AppGlobal, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, TeamUpItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfPopWindow(extras) {
    _reporterNs.report("PopWindow", "../PopWindow", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundManager(extras) {
    _reporterNs.report("SoundManager", "../../manager/SoundManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLobbyUserHeadItem(extras) {
    _reporterNs.report("LobbyUserHeadItem", "../LobbyUserHeadItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfutils(extras) {
    _reporterNs.report("utils", "../../common/utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalData(extras) {
    _reporterNs.report("GlobalData", "../../manager/GlobalData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAppGlobal(extras) {
    _reporterNs.report("AppGlobal", "../../AppGlobal", _context.meta, extras);
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
      tween = _cc.tween;
    }, function (_unresolved_2) {
      PopWindow = _unresolved_2.default;
    }, function (_unresolved_3) {
      SoundManager = _unresolved_3.SoundManager;
    }, function (_unresolved_4) {
      LobbyUserHeadItem = _unresolved_4.LobbyUserHeadItem;
    }, function (_unresolved_5) {
      utils = _unresolved_5.utils;
    }, function (_unresolved_6) {
      GlobalData = _unresolved_6.GlobalData;
    }, function (_unresolved_7) {
      AppGlobal = _unresolved_7.AppGlobal;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "37ace/1U5BAS4t2JbvM0Ho6", "TeamUpItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node', 'tween']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TeamUpItem", TeamUpItem = (_dec = ccclass('TeamUpItem'), _dec2 = property(_crd && LobbyUserHeadItem === void 0 ? (_reportPossibleCrUseOfLobbyUserHeadItem({
        error: Error()
      }), LobbyUserHeadItem) : LobbyUserHeadItem), _dec3 = property(_crd && LobbyUserHeadItem === void 0 ? (_reportPossibleCrUseOfLobbyUserHeadItem({
        error: Error()
      }), LobbyUserHeadItem) : LobbyUserHeadItem), _dec4 = property(Node), _dec5 = property(Label), _dec6 = property(Node), _dec(_class = (_class2 = class TeamUpItem extends (_crd && PopWindow === void 0 ? (_reportPossibleCrUseOfPopWindow({
        error: Error()
      }), PopWindow) : PopWindow) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "selfHead", _descriptor, this);

          _initializerDefineProperty(this, "otherHead", _descriptor2, this);

          _initializerDefineProperty(this, "picDefault", _descriptor3, this);

          _initializerDefineProperty(this, "txtNum", _descriptor4, this);

          _initializerDefineProperty(this, "nodeClose", _descriptor5, this);

          this.timeFunc = null;
          this.totalTime = 2;
          this.addTime = 0;
          this.tmpData = null;
        }

        setData(obj) {
          this.tmpData = obj;
          this.selfHead.setData({
            head: (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).userInfo.head_img,
            name: ""
          });
          this.addTime = 0;
          this.setVisabel(false);
          this.startRandom();
        }

        setVisabel(show) {
          this.otherHead.node.active = show;
          this.picDefault.active = !show;
          this.nodeClose.active = !show;

          if (show) {
            this.otherHead.setData({
              head: this.tmpData.headImg,
              name: ""
            });
          }
        } //随机


        startRandom() {
          this.setNum("00");
          var that = this;

          this.timeFunc = function () {
            that.addTime += 0.1;

            if (that.addTime >= that.totalTime) {
              that.unschedule(that.timeFunc);
              that.setNum(that.tmpData.zu.toString());
              that.setVisabel(true);
              that.delayClose();
              return;
            }

            var tmpNum = (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
              error: Error()
            }), utils) : utils).random(10, 99).toString();
            that.setNum(tmpNum);
          };

          this.schedule(this.timeFunc, 0.1);
        }

        setNum(num) {
          if (num.length == 2) {
            this.txtNum.string = num[0] + " " + num[1];
          } else {
            this.txtNum.string = num;
          }
        }

        delayClose() {
          this.setVisabel(true);
          tween(this.node).delay(1).call(() => {
            this.hide();
            (_crd && AppGlobal === void 0 ? (_reportPossibleCrUseOfAppGlobal({
              error: Error()
            }), AppGlobal) : AppGlobal).instance.onScoreRoomId(this.tmpData.roomId);
          }).start();
        }

        onBtnCloseClcik() {
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).playClick();
          this.hide();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "selfHead", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "otherHead", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "picDefault", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "txtNum", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "nodeClose", [_dec6], {
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
//# sourceMappingURL=5263a753b3ea8f260d6692e903402063ddf7bc0e.js.map