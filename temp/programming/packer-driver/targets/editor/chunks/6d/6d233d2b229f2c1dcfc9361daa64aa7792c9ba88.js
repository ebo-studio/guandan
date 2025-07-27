System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Component, director, ProgressBar, resources, GlobalData, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, Loading;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGlobalData(extras) {
    _reporterNs.report("GlobalData", "../manager/GlobalData", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Button = _cc.Button;
      Component = _cc.Component;
      director = _cc.director;
      ProgressBar = _cc.ProgressBar;
      resources = _cc.resources;
    }, function (_unresolved_2) {
      GlobalData = _unresolved_2.GlobalData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6739cXGj9xLkICRJ86TclZe", "Loading", undefined);

      __checkObsolete__(['_decorator', 'assert', 'Button', 'Component', 'director', 'error', 'Prefab', 'ProgressBar', 'resources']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Loading", Loading = (_dec = ccclass('Loading'), _dec2 = property(ProgressBar), _dec3 = property(Button), _dec(_class = (_class2 = class Loading extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "progressBar", _descriptor, this);

          _initializerDefineProperty(this, "joginGame", _descriptor2, this);

          this.preloadList = ['prefab', 'prefab/game', 'prefab/gameEndScore', 'prefab/gameEndScoreRank', 'prefab/room'];
          this.prefabNames = [];
          this.total = 0;
          this.finished = 0;
        }

        start() {
          director.preloadScene((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).sceneName.lobby, function () {//cc.log("Next scene preloaded");
          });
          this.loadAllPrefabs().then(() => {// this.loadMainScene();
          });
        }

        async loadAllPrefabs() {
          resources.loadDir('prefab', (completedCount, totalCount, item) => {
            console.log(completedCount, totalCount);
            let progress = parseFloat((completedCount / totalCount).toFixed(3));
            this.updateProgress(progress);
          }, (error, assets) => {});
        }

        updateProgress(progress) {
          if (progress > this.progressBar.progress) {
            this.progressBar.progress = progress;
          }

          if (progress >= 1) {
            this.progressBar.node.active = false;
            this.joginGame.node.active = true;
          } // this.progressBar.progress = p;
          // this.tipLabel.string = `加载中 ${Math.floor(p * 100)}%`;

        }

        startGame() {
          director.loadScene((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).sceneName.lobby);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "progressBar", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "joginGame", [_dec3], {
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
//# sourceMappingURL=6d233d2b229f2c1dcfc9361daa64aa7792c9ba88.js.map