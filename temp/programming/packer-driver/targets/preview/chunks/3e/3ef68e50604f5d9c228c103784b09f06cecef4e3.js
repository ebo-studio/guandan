System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Component, Prefab, ProgressBar, resources, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, Loading;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "progressBar", _descriptor, this);

          _initializerDefineProperty(this, "joginGame", _descriptor2, this);

          this.preloadList = ['prefab', 'prefab/game', 'prefab/gameEndScore', 'prefab/gameEndScoreRank', 'prefab/room'];
          this.prefabNames = [];
          this.total = 0;
          this.finished = 0;
        }

        start() {
          // this.loadPrefabs().then(() => {
          //     // this.loadMainScene();
          // });
          resources.loadDir('prefab', Prefab, (err, assets) => {
            if (err) {
              console.error('加载预制体目录失败', err);
              return;
            }

            this.prefabNames = assets.map(assets => assets.name);
            this.total = this.prefabNames.length;
            this.loadPrefabsSequentially().then(() => {// this.loadMainScene();
            });
          });
        }

        loadPrefabsSequentially() {
          var _this = this;

          return _asyncToGenerator(function* () {
            for (var name of _this.prefabNames) {
              yield _this.loadOne("prefab/" + name);
              _this.finished++;

              _this.updateProgress();
            }
          })();
        }

        loadOne(path) {
          return new Promise(resolve => {
            resources.load(path, Prefab, (err, prefab) => {
              if (err) {
                console.warn("\u52A0\u8F7D\u5931\u8D25\uFF1A" + path, err);
              }

              resolve();
            });
          });
        }

        updateProgress(progress) {
          var p = progress != null ? progress : this.finished / (this.total + 1);
          this.progressBar.progress = p; // this.tipLabel.string = `加载中 ${Math.floor(p * 100)}%`;
          // this.tipLabel.string = `初始化中 ${Math.floor(p * 100)}%`;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "progressBar", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "joginGame", [_dec3], {
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
//# sourceMappingURL=3ef68e50604f5d9c228c103784b09f06cecef4e3.js.map