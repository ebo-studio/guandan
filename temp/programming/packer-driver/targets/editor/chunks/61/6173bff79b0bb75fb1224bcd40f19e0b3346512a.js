System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, AVirtualScrollView, RankScoreTeamSelfLine, GlobalData, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, RankScoreTeam;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAVirtualScrollView(extras) {
    _reporterNs.report("AVirtualScrollView", "../virtualScroll/AVirtualScrollView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRankScoreTeamSelfLine(extras) {
    _reporterNs.report("RankScoreTeamSelfLine", "./RankScoreTeamSelfLine", _context.meta, extras);
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
      RankScoreTeamSelfLine = _unresolved_3.RankScoreTeamSelfLine;
    }, function (_unresolved_4) {
      GlobalData = _unresolved_4.GlobalData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9e2f7von1dD5ZT1btMaiyVc", "RankScoreTeam", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RankScoreTeam", RankScoreTeam = (_dec = ccclass('RankScoreTeam'), _dec2 = property(_crd && AVirtualScrollView === void 0 ? (_reportPossibleCrUseOfAVirtualScrollView({
        error: Error()
      }), AVirtualScrollView) : AVirtualScrollView), _dec3 = property(_crd && RankScoreTeamSelfLine === void 0 ? (_reportPossibleCrUseOfRankScoreTeamSelfLine({
        error: Error()
      }), RankScoreTeamSelfLine) : RankScoreTeamSelfLine), _dec4 = property(Node), _dec5 = property(Node), _dec(_class = (_class2 = class RankScoreTeam extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "teamScroll", _descriptor, this);

          _initializerDefineProperty(this, "rankScoreTeamSelfLine", _descriptor2, this);

          _initializerDefineProperty(this, "nodeTip", _descriptor3, this);

          _initializerDefineProperty(this, "nodeSelfTip", _descriptor4, this);
        }

        setData() {
          this.nodeTip.active = (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).rankScoreTeamInfo.list.length == 0;
          this.teamScroll.node.active = !this.nodeTip.active;

          if (this.teamScroll.node.active) {
            this.teamScroll.refreshData((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).rankScoreTeamInfo.list);
          }

          this.nodeSelfTip.active = (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).rankScoreTeamInfo.my == null;
          this.rankScoreTeamSelfLine.node.active = !this.nodeSelfTip.active;

          if (this.rankScoreTeamSelfLine.node.active) {
            this.rankScoreTeamSelfLine.setData((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).rankScoreTeamInfo.my);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "teamScroll", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "rankScoreTeamSelfLine", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "nodeTip", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "nodeSelfTip", [_dec5], {
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
//# sourceMappingURL=6173bff79b0bb75fb1224bcd40f19e0b3346512a.js.map