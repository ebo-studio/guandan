System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Prefab, Vec2, Layout, ScrollView, UITransform, instantiate, AItemRenderer, _dec, _class, _class2, _descriptor, _crd, ccclass, property, AVirtualScrollView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAItemRenderer(extras) {
    _reporterNs.report("AItemRenderer", "./AItemRenerer", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Prefab = _cc.Prefab;
      Vec2 = _cc.Vec2;
      Layout = _cc.Layout;
      ScrollView = _cc.ScrollView;
      UITransform = _cc.UITransform;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      AItemRenderer = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c4bd5zR8ZVJ+KlEOk609lOS", "AVirtualScrollView", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab', 'Vec2', 'Layout', 'ScrollView', 'Rect', 'UITransform', 'instantiate', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator); //注意

      /**
       * 虚拟滚动视图 扩展ScrollView
       * 渲染预制体必需挂载 AItemRenderer子类
       * @author slf
       */

      _export("default", AVirtualScrollView = (_dec = property({
        type: Prefab,
        serializable: true,
        displayName: "渲染预制体"
      }), ccclass(_class = (_class2 = class AVirtualScrollView extends ScrollView {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "itemRenderer", _descriptor, this);

          this.callback = void 0;
          this.cbThis = void 0;
          this.verticalCount = void 0;
          this.horizontalCount = void 0;
          this.itemW = void 0;
          this.itemH = void 0;
          this.interval = void 0;
          this.itemPool = void 0;
          this.itemList = void 0;
          this.itemRendererList = void 0;
          this.dataList = void 0;
          this.startPos = void 0;
          this.contentLayout = void 0;
          this.forcedRefresh = void 0;
          this.refresh = void 0;
          this._uiTransform = void 0;
        }

        onLoad() {
          this.itemList = [];
          this.itemPool = [];
          this.itemRendererList = [];
          this.contentLayout = this.content.getComponent(Layout);
          this.contentLayout.enabled = false;
          this._uiTransform = this.node.getComponent(UITransform); //起始位置

          var itemNode = this.itemRenderer.data.getComponent(UITransform);
          this.startPos = new Vec2(itemNode.width * itemNode.anchorX + this.contentLayout.paddingLeft, -(itemNode.height * itemNode.anchorY + this.contentLayout.paddingTop)); //预制体宽高

          this.itemW = itemNode.width + this.contentLayout.spacingX;
          this.itemH = itemNode.height + this.contentLayout.spacingY; //垂直、水平最大预制体数量

          this.horizontalCount = Math.ceil(this._uiTransform.width / this.itemW) + 1;
          this.verticalCount = Math.ceil(this._uiTransform.height / this.itemH) + 1; // console.log('this.horizontalCount--> ', this.horizontalCount);

          if (this.contentLayout.type == Layout.Type.GRID) {
            if (this.contentLayout.startAxis == Layout.AxisDirection.HORIZONTAL) {
              this.horizontalCount = Math.floor(this._uiTransform.width / this.itemW);
            } else {
              this.verticalCount = Math.floor(this._uiTransform.height / this.itemH);
            }
          }
        }

        onDestroy() {
          this.dataList = null;
          this.itemList = null;
          this.itemRendererList = null;
          clearInterval(this.interval);
        }
        /**利用ScrollView本身方法 来标记滑动中 */


        _setContentPosition(position) {
          super['_setContentPosition'](position);
          this.refresh = true;
        }
        /**
        * 设置列表 子项点击回调
        * 回调会携带当前子项的 data
        * @param cb 回调
        * @param cbT 作用域
        */


        setTouchItemCallback(cb, cbT) {
          this.callback = cb;
          this.cbThis = cbT;
        }
        /**选中数据 */


        onItemTap(data) {
          //可以接受到数据
          this.callback && this.callback.call(this.cbThis, data);
        }
        /**
         * 刷新数据
         * @param data 数据源 单项|队列
         */


        refreshData(data) {
          if (Array.isArray(data)) {
            this.dataList = data;
          } else {
            this.dataList = [data];
          }

          if (this.interval) {
            clearInterval(this.interval);
          }

          this.addItem();
          this.refreshContentSize();
          this.forcedRefresh = true;
          this.refresh = true;
          this.interval = setInterval(this.refreshItem.bind(this), 1000 / 10);
        }
        /**添加预制体 */


        addItem() {
          var len = 0;

          switch (this.contentLayout.type) {
            case Layout.Type.HORIZONTAL:
              len = this.horizontalCount;
              break;

            case Layout.Type.VERTICAL:
              len = this.verticalCount;
              break;

            case Layout.Type.GRID:
              len = this.horizontalCount * this.verticalCount;
              break;
          }

          len = Math.min(len, this.dataList.length);
          var itemListLen = this.itemList.length;

          if (itemListLen < len) {
            var itemRenderer = null;

            for (var i = itemListLen; i < len; i++) {
              var child = this.itemPool.length > 0 ? this.itemPool.shift() : instantiate(this.itemRenderer);
              this.content.addChild(child);
              this.itemList.push(child);
              itemRenderer = child.getComponent(_crd && AItemRenderer === void 0 ? (_reportPossibleCrUseOfAItemRenderer({
                error: Error()
              }), AItemRenderer) : AItemRenderer);
              this.itemRendererList.push(itemRenderer);

              if (itemRenderer.isClick) {
                itemRenderer.setTouchCallback(this.onItemTap, this);
              }
            }
          } else {
            var cL = this.content.children.length;
            var item;

            while (cL > len) {
              item = this.itemList[cL - 1];
              this.content.removeChild(item);
              this.itemList.splice(cL - 1, 1);
              this.itemRendererList.splice(cL - 1, 1);
              this.itemPool.push(item);
              cL = this.content.children.length;
            }
          }
        }
        /**根据数据数量 改变content宽高 */


        refreshContentSize() {
          var layout = this.contentLayout;
          var dataListLen = this.dataList.length;

          switch (this.contentLayout.type) {
            case Layout.Type.VERTICAL:
              this.content.getComponent(UITransform).height = layout.paddingTop + dataListLen * this.itemH + layout.paddingBottom - this.contentLayout.spacingY;
              this.scrollToTop(0.01);
              break;

            case Layout.Type.HORIZONTAL:
              this.content.getComponent(UITransform).width = layout.paddingLeft + dataListLen * this.itemW + layout.paddingRight - this.contentLayout.spacingX;
              this.scrollToRight(0.01);
              break;

            case Layout.Type.GRID:
              if (this.contentLayout.startAxis == Layout.AxisDirection.HORIZONTAL) {
                this.content.getComponent(UITransform).height = layout.paddingTop + Math.ceil(dataListLen / this.horizontalCount) * this.itemH + layout.paddingBottom;
              } else if (this.contentLayout.startAxis == Layout.AxisDirection.VERTICAL) {
                this.content.getComponent(UITransform).width = layout.paddingLeft + Math.ceil(dataListLen / this.verticalCount) * this.itemW + layout.paddingRight;
              }

              break;
          }
        }
        /**刷新预制体位置 和 数据填充 */


        refreshItem() {
          if (!this.refresh) {
            return;
          }

          switch (this.contentLayout.type) {
            case Layout.Type.HORIZONTAL:
              this.refreshHorizontal();
              break;

            case Layout.Type.VERTICAL:
              this.refreshVertical();
              break;

            case Layout.Type.GRID:
              this.refreshGrid();
              break;
          }

          this.refresh = false;
          this.forcedRefresh = false;
        }
        /**刷新水平 */


        refreshHorizontal() {
          // console.log('this.getContentPosition() ');
          var start = Math.floor(Math.abs(this._contentPos.x) / this.itemW);

          if (start < 0 || this._contentPos.x > 0) {
            //超出边界处理
            start = 0;
          }

          var end = start + this.horizontalCount;

          if (end > this.dataList.length) {
            //超出边界处理
            end = this.dataList.length;
            start = Math.max(end - this.horizontalCount, 0);
          }

          var tempV = 0;
          var itemListLen = this.itemList.length;
          var item, pos, idx;

          for (var i = 0; i < itemListLen; i++) {
            idx = (start + i) % itemListLen;
            item = this.itemList[idx];
            pos = item.getPosition();
            tempV = this.startPos.x + (start + i) * this.itemW;

            if (pos.x != tempV || this.forcedRefresh) {
              // console.log("修改的数据="+(start+i))
              pos.x = tempV;
              item.position = pos;
              this.itemRendererList[idx].data = this.dataList[start + i];
            }
          }
        }
        /**刷新垂直 */


        refreshVertical() {
          var start = Math.floor(Math.abs(this._contentPos.y) / this.itemH);

          if (start < 0 || this._contentPos.y < 0) {
            start = 0;
          }

          var end = start + this.verticalCount;

          if (end > this.dataList.length) {
            end = this.dataList.length;
            start = Math.max(end - this.verticalCount, 0);
          }

          var tempV = 0;
          var itemListLen = this.itemList.length;
          var item, pos, idx;

          for (var i = 0; i < itemListLen; i++) {
            idx = (start + i) % itemListLen;
            item = this.itemList[idx];
            pos = item.getPosition();
            tempV = this.startPos.y + -(start + i) * this.itemH;

            if (pos.y != tempV || this.forcedRefresh) {
              // console.log("修改的数据="+(start+i))
              pos.y = tempV;
              item.position = pos;
              this.itemRendererList[idx].data = this.dataList[start + i];
            }
          }
        }
        /**刷新网格 */


        refreshGrid() {
          //是否垂直方向 添加网格
          var isVDirection = this.contentLayout.startAxis == Layout.AxisDirection.VERTICAL; //_contentPos

          var start = Math.floor(Math.abs(this._contentPos.y) / this.itemH) * this.horizontalCount;

          if (isVDirection) {
            start = Math.floor(Math.abs(this._contentPos.x) / this.itemW) * this.verticalCount;

            if (this._contentPos.x > 0) {
              start = 0;
            }
          } else if (this._contentPos.y < 0) {
            start = 0;
          } // let start = Math.floor(Math.abs(this.getContentPosition().y)/this.itemH) * this.horizontalCount;
          // if(isVDirection){
          //     start = Math.floor(Math.abs(this.getContentPosition().x)/this.itemW) * this.verticalCount;
          //     if(this.getContentPosition().x > 0){
          //         start = 0;
          //     }
          // }else if(this.getContentPosition().y < 0){
          //     start = 0;
          // }


          if (start < 0) {
            start = 0;
          }

          var end = start + this.horizontalCount * this.verticalCount;

          if (end > this.dataList.length) {
            end = this.dataList.length;
            start = Math.max(end - this.horizontalCount * this.verticalCount, 0);
          }

          var tempX = 0;
          var tempY = 0;
          var itemListLen = this.itemList.length;
          var item, pos, idx;

          for (var i = 0; i < itemListLen; i++) {
            idx = (start + i) % itemListLen;
            item = this.itemList[idx];
            pos = item.getPosition();

            if (isVDirection) {
              tempX = this.startPos.x + Math.floor((start + i) / this.verticalCount) * this.itemW;
              tempY = this.startPos.y + -((start + i) % this.verticalCount) * this.itemH;
            } else {
              tempX = this.startPos.x + (start + i) % this.horizontalCount * this.itemW;
              tempY = this.startPos.y + -Math.floor((start + i) / this.horizontalCount) * this.itemH;
            }

            if (pos.y != tempY || pos.x != tempX || this.forcedRefresh) {
              // console.log("修改的数据=" + (start + i))
              pos.x = tempX;
              pos.y = tempY;
              item.position = pos;
              this.itemRendererList[idx].data = this.dataList[start + i];
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "itemRenderer", [_dec], {
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
//# sourceMappingURL=417089dfc664bb043b9c4e3a6d5e9ff427721294.js.map