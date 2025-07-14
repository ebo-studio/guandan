System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Sprite, SpriteFrame, utils, GlobalData, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, TeamType, UserHead;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfutils(extras) {
    _reporterNs.report("utils", "../../common/utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalData(extras) {
    _reporterNs.report("GlobalData", "../../manager/GlobalData", _context.meta, extras);
  }

  _export("TeamType", void 0);

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
      SpriteFrame = _cc.SpriteFrame;
    }, function (_unresolved_2) {
      utils = _unresolved_2.utils;
    }, function (_unresolved_3) {
      GlobalData = _unresolved_3.GlobalData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "64b63kaHlNIS6s/Fzaz25Er", "UserHead", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Sprite', 'SpriteFrame']);

      ({
        ccclass,
        property
      } = _decorator);

      (function (TeamType) {
        TeamType[TeamType["self"] = 0] = "self";
        TeamType[TeamType["other"] = 1] = "other";
      })(TeamType || _export("TeamType", TeamType = {}));

      _export("UserHead", UserHead = (_dec = ccclass('UserHead'), _dec2 = property(SpriteFrame), _dec(_class = (_class2 = class UserHead extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "spTeamTypes", _descriptor, this);

          this.tmpTeamType = null;
          this.tmpCnt = null;
        }

        setData(data) {
          var _this$node$getChildBy;

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
            }), utils) : utils).clampNickname(data.name, 5);
          } else {
            txtName.string = "无名";
          } //淘汰赛没有积分


          if ((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).cardInfo.gameType == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).gameType.kick) {
            this.node.getChildByName("picScoreBg").active = false;
          } else {
            this.node.getChildByName("picScoreBg").active = true;
            let txtScore = this.node.getChildByName("picScoreBg").getChildByName("txtScore").getComponent(Label);

            if (txtScore) {
              txtScore.string = data.score.toString();
            }
          }

          this.tmpTeamType = (_this$node$getChildBy = this.node.getChildByName("picTeamType")) == null ? void 0 : _this$node$getChildBy.getComponent(Sprite);

          if (this.tmpTeamType) {
            this.tmpTeamType.node.active = false;
          }
        }

        hideCardBg() {
          var _this$node$getChildBy2;

          this.tmpCnt = (_this$node$getChildBy2 = this.node.getChildByName("nodeCardCnt")) == null ? void 0 : _this$node$getChildBy2.getChildByName("txtCnt").getComponent(Label);

          if (this.tmpCnt) {
            this.tmpCnt.node.parent.active = false;
            this.tmpCnt.node.active = false;
          }
        } //对手|队友


        setTeamType(type) {
          if (this.tmpTeamType && !this.tmpTeamType.node.active) {
            this.tmpTeamType.node.active = true;
          }

          if (this.tmpTeamType) {
            this.tmpTeamType.spriteFrame = this.spTeamTypes[type];
          }
        } //牌背


        showLeftCntBg(show) {
          if (this.tmpCnt && this.tmpCnt.node.parent.active != show) {
            this.tmpCnt.node.parent.active = show;
          }
        } //剩余的牌


        setLeftCnt(num) {
          this.showLeftCntBg(true);

          if (num < 0 && this.tmpCnt) {
            this.tmpCnt.string = "";
            return;
          }

          if (this.tmpCnt && !this.tmpCnt.node.active) {
            this.tmpCnt.node.active = true;
          }

          if (this.tmpCnt) {
            this.tmpCnt.string = num.toString();
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "spTeamTypes", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1244dc28410897fa5fda9b11ef97e3dec9692176.js.map