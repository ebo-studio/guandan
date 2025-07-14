System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, PopWindow, AVirtualScrollView, GlobalData, RaceTimeType, SoundManager, utils, RaceJoinState, RaceScoreLineItem, UIManager, UIConfig, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, RaceScoreItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfPopWindow(extras) {
    _reporterNs.report("PopWindow", "../PopWindow", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAVirtualScrollView(extras) {
    _reporterNs.report("AVirtualScrollView", "../virtualScroll/AVirtualScrollView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalData(extras) {
    _reporterNs.report("GlobalData", "../../manager/GlobalData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRaceScoreLineData(extras) {
    _reporterNs.report("RaceScoreLineData", "../../manager/GlobalData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRaceTimeType(extras) {
    _reporterNs.report("RaceTimeType", "../../manager/GlobalData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundManager(extras) {
    _reporterNs.report("SoundManager", "../../manager/SoundManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfutils(extras) {
    _reporterNs.report("utils", "../../common/utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRaceJoinState(extras) {
    _reporterNs.report("RaceJoinState", "./RaceScoreLineItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRaceScoreLineItem(extras) {
    _reporterNs.report("RaceScoreLineItem", "./RaceScoreLineItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIManager(extras) {
    _reporterNs.report("UIManager", "../../manager/UIManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIConfig(extras) {
    _reporterNs.report("UIConfig", "../../manager/UIConfig", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      PopWindow = _unresolved_2.default;
    }, function (_unresolved_3) {
      AVirtualScrollView = _unresolved_3.default;
    }, function (_unresolved_4) {
      GlobalData = _unresolved_4.GlobalData;
      RaceTimeType = _unresolved_4.RaceTimeType;
    }, function (_unresolved_5) {
      SoundManager = _unresolved_5.SoundManager;
    }, function (_unresolved_6) {
      utils = _unresolved_6.utils;
    }, function (_unresolved_7) {
      RaceJoinState = _unresolved_7.RaceJoinState;
      RaceScoreLineItem = _unresolved_7.RaceScoreLineItem;
    }, function (_unresolved_8) {
      UIManager = _unresolved_8.UIManager;
    }, function (_unresolved_9) {
      UIConfig = _unresolved_9.UIConfig;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0f8159Bf99H0avS58QeD2Ge", "RaceScoreItem", undefined);

      __checkObsolete__(['_decorator', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RaceScoreItem", RaceScoreItem = (_dec = ccclass('RaceScoreItem'), _dec2 = property(_crd && AVirtualScrollView === void 0 ? (_reportPossibleCrUseOfAVirtualScrollView({
        error: Error()
      }), AVirtualScrollView) : AVirtualScrollView), _dec3 = property(Node), _dec(_class = (_class2 = class RaceScoreItem extends (_crd && PopWindow === void 0 ? (_reportPossibleCrUseOfPopWindow({
        error: Error()
      }), PopWindow) : PopWindow) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "personScroll", _descriptor, this);

          _initializerDefineProperty(this, "nodeTip", _descriptor2, this);

          this.timeFunc = null;
        }

        start() {
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).on((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.RaceScoreLine, this, this.onRaceScoreLine);
        }

        onDestroy() {
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).off((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.RaceScoreLine, this, this.onRaceScoreLine);
        }

        setData() {
          this.nodeTip.active = (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).raceScoreDataInfo.list.length == 0;
          this.personScroll.node.active = !this.nodeTip.active;

          if (this.personScroll.node.active) {
            this.personScroll.refreshData((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).raceScoreDataInfo.list);
            this.personScroll.setTouchItemCallback(data => {
              console.log("data---> ", data);
            }, this);
          }

          this.startTime();
        } //倒计时显示条件
        //1: 现在时间 < 报名结束时间 已报名
        //2: 现在时间< 游戏开始时间  已报名


        startTime() {
          this.stopTime();
          let listData = (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).raceScoreDataInfo.list;

          this.timeFunc = () => {
            for (let i = 0; i < listData.length; i++) {
              let item = listData[i]; //已报名,显示开赛倒计时

              if ((item.timeState == (_crd && RaceTimeType === void 0 ? (_reportPossibleCrUseOfRaceTimeType({
                error: Error()
              }), RaceTimeType) : RaceTimeType).register || item.timeState == (_crd && RaceTimeType === void 0 ? (_reportPossibleCrUseOfRaceTimeType({
                error: Error()
              }), RaceTimeType) : RaceTimeType).wait) && item.state == (_crd && RaceJoinState === void 0 ? (_reportPossibleCrUseOfRaceJoinState({
                error: Error()
              }), RaceJoinState) : RaceJoinState).done) {
                let startTime = item.start_timestamp; //new Date(item.gameStartTime).valueOf();

                let nowTime = new Date().valueOf(); //开赛剩余时间

                item.leftTime = Math.floor((startTime - nowTime) / 1000);

                if (item.leftTime > 0) {
                  item.leftTime -= 1;

                  if (item.leftTime == 0) {
                    item.timeState = (_crd && RaceTimeType === void 0 ? (_reportPossibleCrUseOfRaceTimeType({
                      error: Error()
                    }), RaceTimeType) : RaceTimeType).start;
                    this.changeState(item, true, false, true);
                  }

                  this.changeState(item, false, true);
                }
              } //未报名,显示报名倒计时
              else if (item.timeState == (_crd && RaceTimeType === void 0 ? (_reportPossibleCrUseOfRaceTimeType({
                error: Error()
              }), RaceTimeType) : RaceTimeType).register && item.state == (_crd && RaceJoinState === void 0 ? (_reportPossibleCrUseOfRaceJoinState({
                error: Error()
              }), RaceJoinState) : RaceJoinState).do) {
                let startTime = item.end_timestamp; //new Date(item.registerEndTime).valueOf();

                let nowTime = new Date().valueOf(); //报名剩余时间

                item.leftTime = Math.floor((startTime - nowTime) / 1000);

                if (item.leftTime > 0) {
                  item.leftTime -= 1;

                  if (item.leftTime == 0) {
                    item.timeState = (_crd && RaceTimeType === void 0 ? (_reportPossibleCrUseOfRaceTimeType({
                      error: Error()
                    }), RaceTimeType) : RaceTimeType).wait;
                    this.changeState(item, true, false, true);
                  }

                  this.changeState(item, false, true);
                }
              } //未报名,已到报名截止时间(不显示,但是走倒计时)
              else if (item.timeState == (_crd && RaceTimeType === void 0 ? (_reportPossibleCrUseOfRaceTimeType({
                error: Error()
              }), RaceTimeType) : RaceTimeType).wait && item.state == (_crd && RaceJoinState === void 0 ? (_reportPossibleCrUseOfRaceJoinState({
                error: Error()
              }), RaceJoinState) : RaceJoinState).do) {
                let startTime = item.start_timestamp; //new Date(item.gameStartTime).valueOf();

                let nowTime = new Date().valueOf(); //剩余时间

                item.leftTime = Math.floor((startTime - nowTime) / 1000);

                if (item.leftTime > 0) {
                  item.leftTime -= 1;

                  if (item.leftTime == 0) {
                    item.timeState = (_crd && RaceTimeType === void 0 ? (_reportPossibleCrUseOfRaceTimeType({
                      error: Error()
                    }), RaceTimeType) : RaceTimeType).start;
                    this.changeState(item, true, false, true);
                  }

                  this.changeState(item, false, true);
                }
              }
            }
          };

          this.schedule(this.timeFunc, 1);
        }

        stopTime() {
          if (this.timeFunc) {
            this.unschedule(this.timeFunc);
            this.timeFunc = null;
          }
        } //积分


        onRaceScoreLine(data) {
          (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).requestJoinGame(data.id, {
            success: data1 => {
              (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
                error: Error()
              }), UIManager) : UIManager).Instace.showUI({
                path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
                  error: Error()
                }), UIConfig) : UIConfig).MessageHintKey,
                data: "报名成功"
              });
              let listData = (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                error: Error()
              }), GlobalData) : GlobalData).raceScoreDataInfo.list;

              for (let i = 0; i < listData.length; i++) {
                let item = listData[i];

                if (item.id == data.id) {
                  data.currentNum = data1.user_num; //报名状态

                  item.state = (_crd && RaceJoinState === void 0 ? (_reportPossibleCrUseOfRaceJoinState({
                    error: Error()
                  }), RaceJoinState) : RaceJoinState).done; //时间状态

                  item.timeState = (_crd && RaceTimeType === void 0 ? (_reportPossibleCrUseOfRaceTimeType({
                    error: Error()
                  }), RaceTimeType) : RaceTimeType).wait;
                  this.changeState(data, true, false, true);
                  break;
                }
              }
            }
          });
        } //状态


        changeState(data, updateState = true, updateTime = false, updateTimeState = false) {
          let childs = this.personScroll.content.children;

          for (let i = 0; i < childs.length; i++) {
            let element = childs[i].getComponent(_crd && RaceScoreLineItem === void 0 ? (_reportPossibleCrUseOfRaceScoreLineItem({
              error: Error()
            }), RaceScoreLineItem) : RaceScoreLineItem);

            if (element && element.data.id == data.id) {
              if (updateTimeState) {
                element.changeTimeState(data.timeState);
              }

              if (updateState) {
                element.changeState(data.state);
                element.refreshCnt(data.currentNum);
              }

              if (updateTime) {
                element.updateTime(data.leftTime);
              }

              break;
            }
          }
        }

        onBtnCloseClick() {
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).playClick();
          this.hide();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "personScroll", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nodeTip", [_dec3], {
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
//# sourceMappingURL=e59b79483a60df6522a0ad102f1a5219cc414682.js.map