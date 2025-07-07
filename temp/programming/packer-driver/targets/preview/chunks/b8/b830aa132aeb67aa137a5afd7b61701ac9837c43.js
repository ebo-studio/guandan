System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, RankScoreTeamSelfLine;

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
      Label = _cc.Label;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b6f39oA/wNJV62dk49rbwFw", "RankScoreTeamSelfLine", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RankScoreTeamSelfLine", RankScoreTeamSelfLine = (_dec = ccclass('RankScoreTeamSelfLine'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec(_class = (_class2 = class RankScoreTeamSelfLine extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "txtRank", _descriptor, this);

          _initializerDefineProperty(this, "txtScore", _descriptor2, this);

          _initializerDefineProperty(this, "txtName", _descriptor3, this);

          this.data = void 0;
        }

        setData(data) {
          this.data = data;
          this.txtRank.string = this.data.rank.toString();
          this.txtScore.string = this.data.score.toString();
          this.txtName.string = this.data.name;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "txtRank", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "txtScore", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "txtName", [_dec4], {
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
//# sourceMappingURL=b830aa132aeb67aa137a5afd7b61701ac9837c43.js.map