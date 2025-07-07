System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, PopWindow, UIManager, UIConfig, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, KeyBoardType, KeyBoardItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfPopWindow(extras) {
    _reporterNs.report("PopWindow", "../PopWindow", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIManager(extras) {
    _reporterNs.report("UIManager", "../../manager/UIManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIConfig(extras) {
    _reporterNs.report("UIConfig", "../../manager/UIConfig", _context.meta, extras);
  }

  _export("KeyBoardType", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      PopWindow = _unresolved_2.default;
    }, function (_unresolved_3) {
      UIManager = _unresolved_3.UIManager;
    }, function (_unresolved_4) {
      UIConfig = _unresolved_4.UIConfig;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "daa73Q4oe9ERrvQTVU7iB6K", "KeyBoardItem", undefined);

      __checkObsolete__(['_decorator', 'Label', 'TiledUserNodeData']);

      ({
        ccclass,
        property
      } = _decorator);

      (function (KeyBoardType) {
        KeyBoardType[KeyBoardType["joinRoom"] = 0] = "joinRoom";
        KeyBoardType[KeyBoardType["joinTeam"] = 1] = "joinTeam";
      })(KeyBoardType || _export("KeyBoardType", KeyBoardType = {}));

      _export("KeyBoardItem", KeyBoardItem = (_dec = ccclass('KeyBoardItem'), _dec2 = property(Label), _dec3 = property(Label), _dec(_class = (_class2 = class KeyBoardItem extends (_crd && PopWindow === void 0 ? (_reportPossibleCrUseOfPopWindow({
        error: Error()
      }), PopWindow) : PopWindow) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "txtTitle", _descriptor, this);

          _initializerDefineProperty(this, "txtNum", _descriptor2, this);

          this.listName = ["加入房间", "加入队伍"];
          this.callBack = null;
          this._tmpNum = "";
          this.tmpSpaceData = "";
        }

        //没空格(用于记录)
        get tmpNum() {
          return this._tmpNum;
        }

        set tmpNum(value) {
          this._tmpNum = value;

          if (value == "") {
            this.txtNum.string = "";
          } else {
            this.txtNum.string = "";
            var tmpStr = "";

            for (var i = 0; i < value.length; i++) {
              if (i == 0) {
                tmpStr += value[i];
              } else {
                tmpStr += "    " + value[i];
              }
            }

            this.txtNum.string = tmpStr;

            if (value.length == 6) {
              console.log("房间号: ", value);

              if (this.callBack) {
                this.callBack(value);
              }

              this.hide();
            }
          }
        }

        //有空格(用于显示)
        setData(obj) {
          this.callBack = obj.cb;
          this.txtTitle.string = this.listName[Number(obj.type)];
          this.resetNum();
        }

        onHide() {
          if (this.callBack) {
            this.callBack = null;
          }
        }

        onBtnClick(obj, datas) {
          var num = Number(datas);

          if (num < 100) {
            if (this.tmpNum.length >= 6) {
              (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
                error: Error()
              }), UIManager) : UIManager).Instace.showUI({
                path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
                  error: Error()
                }), UIConfig) : UIConfig).MessageHintKey,
                data: "长度不能超过6位!"
              });
              return;
            }

            this.tmpNum += num;
          } else {
            if (num == 100) {
              //重输入
              if (this.tmpNum == "") {
                return;
              }

              this.tmpNum = "";
            } else if (num == 101) {
              //删除
              if (this.tmpNum == "") {
                return;
              }

              this.tmpNum = this.tmpNum.substring(0, this.tmpNum.length - 1);
            }
          }
        }

        resetNum() {
          this.txtNum.string = "";
          this.tmpNum = "";
        }

        onBtnCloseClick() {
          this.hide();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "txtTitle", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "txtNum", [_dec3], {
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
//# sourceMappingURL=c7a140710912a230f9c6032867317d928603fe86.js.map