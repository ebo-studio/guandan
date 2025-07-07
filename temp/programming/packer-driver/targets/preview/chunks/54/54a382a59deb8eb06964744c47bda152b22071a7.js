System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, AVirtualScrollView, GlobalData, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, RankRaceScoreItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAVirtualScrollView(extras) {
    _reporterNs.report("AVirtualScrollView", "../virtualScroll/AVirtualScrollView", _context.meta, extras);
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
      Node = _cc.Node;
    }, function (_unresolved_2) {
      AVirtualScrollView = _unresolved_2.default;
    }, function (_unresolved_3) {
      GlobalData = _unresolved_3.GlobalData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "88c21v9VMZC8r2DLNY2w6Aj", "RankRaceScoreItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RankRaceScoreItem", RankRaceScoreItem = (_dec = ccclass('RankRaceScoreItem'), _dec2 = property(_crd && AVirtualScrollView === void 0 ? (_reportPossibleCrUseOfAVirtualScrollView({
        error: Error()
      }), AVirtualScrollView) : AVirtualScrollView), _dec3 = property(Node), _dec(_class = (_class2 = class RankRaceScoreItem extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "personScroll", _descriptor, this);

          _initializerDefineProperty(this, "nodeTip", _descriptor2, this);
        }

        setData() {
          this.nodeTip.active = (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).gameResultInfo.scoreList.length == 0;
          this.personScroll.node.active = !this.nodeTip.active;

          if (this.personScroll.node.active) {
            this.personScroll.refreshData((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).gameResultInfo.scoreList);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "personScroll", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nodeTip", [_dec3], {
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
//# sourceMappingURL=54a382a59deb8eb06964744c47bda152b22071a7.js.map