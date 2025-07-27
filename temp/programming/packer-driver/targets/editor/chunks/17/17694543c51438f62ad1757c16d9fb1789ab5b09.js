System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Component, Prefab, ProgressBar, resources, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, Loading;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Button = _cc.Button;
      Component = _cc.Component;
      Prefab = _cc.Prefab;
      ProgressBar = _cc.ProgressBar;
      resources = _cc.resources;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6739cXGj9xLkICRJ86TclZe", "Loading", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'Prefab', 'ProgressBar', 'resources']);

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
          this.totalSteps = 1;
          this.finishedSteps = 0;
        }

        start() {
          // this.loadPrefabs().then(() => {
          //     // this.loadMainScene();
          // });
          resources.loadDir('prefab', Prefab, (err, assets) => {
            if (!err) {
              console.log(`预制体加载完成，共 ${assets.length} 个`); // 继续加载 MainScene
              // director.loadScene('MainScene');
            }
          });
        }

        async loadPrefabs() {
          for (let path of this.preloadList) {
            await this.loadOnePrefab(path);
            this.finishedSteps++;
            this.updateProgress();
          }
        }

        loadOnePrefab(path) {
          return new Promise(resolve => {
            resources.load(path, Prefab, (err, prefab) => {
              if (err) {
                console.warn(`加载失败: ${path}`, err);
                resolve();
                return;
              } // resources.add; // 选用：缓存资源


              resolve();
            });
          });
        }

        updateProgress(p = this.finishedSteps / this.totalSteps) {
          this.progressBar.progress = p; // this.tipLabel.string = `初始化中 ${Math.floor(p * 100)}%`;
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
//# sourceMappingURL=17694543c51438f62ad1757c16d9fb1789ab5b09.js.map