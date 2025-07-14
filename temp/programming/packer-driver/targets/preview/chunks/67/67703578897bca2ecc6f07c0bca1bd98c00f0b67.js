System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, PopWindow, AVirtualScrollView, GlobalData, SoundManager, utils, RaceAuditionLineItem, RaceAuditionState, PbManager, GameSocket, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, RaceAuditionItem;

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

  function _reportPossibleCrUseOfRaceAuditionLineData(extras) {
    _reporterNs.report("RaceAuditionLineData", "../../manager/GlobalData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundManager(extras) {
    _reporterNs.report("SoundManager", "../../manager/SoundManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfutils(extras) {
    _reporterNs.report("utils", "../../common/utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRaceAuditionLineItem(extras) {
    _reporterNs.report("RaceAuditionLineItem", "./RaceAuditionLineItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRaceAuditionState(extras) {
    _reporterNs.report("RaceAuditionState", "./RaceAuditionLineItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPbManager(extras) {
    _reporterNs.report("PbManager", "../../proto/PbManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameSocket(extras) {
    _reporterNs.report("GameSocket", "../../manager/GameSocket", _context.meta, extras);
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
    }, function (_unresolved_5) {
      SoundManager = _unresolved_5.SoundManager;
    }, function (_unresolved_6) {
      utils = _unresolved_6.utils;
    }, function (_unresolved_7) {
      RaceAuditionLineItem = _unresolved_7.RaceAuditionLineItem;
      RaceAuditionState = _unresolved_7.RaceAuditionState;
    }, function (_unresolved_8) {
      PbManager = _unresolved_8.PbManager;
    }, function (_unresolved_9) {
      GameSocket = _unresolved_9.GameSocket;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bce9cSDUPtCjLbMywU5dgk0", "RaceAuditionItem", undefined);

      __checkObsolete__(['_decorator', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RaceAuditionItem", RaceAuditionItem = (_dec = ccclass('RaceAuditionItem'), _dec2 = property(_crd && AVirtualScrollView === void 0 ? (_reportPossibleCrUseOfAVirtualScrollView({
        error: Error()
      }), AVirtualScrollView) : AVirtualScrollView), _dec3 = property(Node), _dec(_class = (_class2 = class RaceAuditionItem extends (_crd && PopWindow === void 0 ? (_reportPossibleCrUseOfPopWindow({
        error: Error()
      }), PopWindow) : PopWindow) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "personScroll", _descriptor, this);

          _initializerDefineProperty(this, "nodeTip", _descriptor2, this);

          this.timeFunc = null;
        }

        start() {
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).on((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.RaceAuditionLine, this, this.onRaceAuditionLine);
        }

        onDestroy() {
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).off((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.RaceAuditionLine, this, this.onRaceAuditionLine);
        }

        setData() {
          // //测试
          // let tmpData = new RaceAuditionLineData();
          // tmpData.id = 101;
          // tmpData.gameTitle = "这是个比赛";
          // tmpData.registerEndTime = "2023-10-13 11:01:20"
          // tmpData.gameStartTime = "2023-10-13 11:01:00"
          // tmpData.end_timestamp = new Date(tmpData.registerEndTime).valueOf();
          // tmpData.start_timestamp = new Date(tmpData.gameStartTime).valueOf();
          // let startTime = tmpData.start_timestamp;
          // let endTime = tmpData.end_timestamp;
          // let nowTime = new Date().valueOf();
          // if (nowTime <= startTime) {
          //     tmpData.state = RaceAuditionState.pre;
          // }
          // else if (nowTime >= endTime) {//过了比赛时间
          //     tmpData.state = RaceAuditionState.pass;
          // } else {//在比赛时间
          //     tmpData.state = RaceAuditionState.now;
          // }
          // console.log("state--> ", tmpData.state);
          // GlobalData.raceAuditionDataInfo.list.push(tmpData);
          ////////////////////////////////
          this.nodeTip.active = (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).raceAuditionDataInfo.list.length == 0;
          this.personScroll.node.active = !this.nodeTip.active;

          if (this.personScroll.node.active) {
            this.personScroll.refreshData((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).raceAuditionDataInfo.list);
            this.personScroll.setTouchItemCallback(data => {
              console.log("data---> ", data);
            }, this);
          }

          this.startTime();
        } //倒计时显示条件
        // pre,   开始前   开始剩余倒计时
        // now,   开始了   结束剩余倒计时
        // pass,  开始后   没有倒计时(第二天才开始,没有必要显示)


        startTime() {
          this.stopTime();
          var listData = (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).raceAuditionDataInfo.list;

          this.timeFunc = () => {
            for (var i = 0; i < listData.length; i++) {
              var item = listData[i]; //开始前   开始剩余倒计时

              if (item.state == (_crd && RaceAuditionState === void 0 ? (_reportPossibleCrUseOfRaceAuditionState({
                error: Error()
              }), RaceAuditionState) : RaceAuditionState).pre) {
                var startTime = item.start_timestamp;
                var nowTime = new Date().valueOf(); //开赛剩余时间

                item.leftTime = Math.floor((startTime - nowTime) / 1000);

                if (item.leftTime > 0) {
                  item.leftTime -= 1;

                  if (item.leftTime == 0) {
                    item.state = (_crd && RaceAuditionState === void 0 ? (_reportPossibleCrUseOfRaceAuditionState({
                      error: Error()
                    }), RaceAuditionState) : RaceAuditionState).now;
                    this.changeState(item);
                  }
                } // console.log("开始剩余倒计时: ",item.leftTime);

              } //开始了   结束剩余倒计时
              else if (item.state == (_crd && RaceAuditionState === void 0 ? (_reportPossibleCrUseOfRaceAuditionState({
                error: Error()
              }), RaceAuditionState) : RaceAuditionState).now) {
                var _startTime = item.end_timestamp;

                var _nowTime = new Date().valueOf(); //报名剩余时间


                item.leftTime = Math.floor((_startTime - _nowTime) / 1000);

                if (item.leftTime > 0) {
                  item.leftTime -= 1;

                  if (item.leftTime == 0) {
                    item.state = (_crd && RaceAuditionState === void 0 ? (_reportPossibleCrUseOfRaceAuditionState({
                      error: Error()
                    }), RaceAuditionState) : RaceAuditionState).pass;
                    this.changeState(item);
                  }
                } // console.log("结束剩余倒计时: ",item.leftTime);

              } //开始后   没有倒计时
              else if (item.state == (_crd && RaceAuditionState === void 0 ? (_reportPossibleCrUseOfRaceAuditionState({
                error: Error()
              }), RaceAuditionState) : RaceAuditionState).pass) {}
            }
          };

          this.schedule(this.timeFunc, 1);
        }

        stopTime() {
          if (this.timeFunc) {
            this.unschedule(this.timeFunc);
            this.timeFunc = null;
          }
        } //状态


        changeState(data) {
          var childs = this.personScroll.content.children;

          for (var i = 0; i < childs.length; i++) {
            var element = childs[i].getComponent(_crd && RaceAuditionLineItem === void 0 ? (_reportPossibleCrUseOfRaceAuditionLineItem({
              error: Error()
            }), RaceAuditionLineItem) : RaceAuditionLineItem);

            if (element && element.data.id == data.id) {
              element.changeState(data.state);
              break;
            }
          }
        } //匹配


        onRaceAuditionLine(data) {
          (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).cardInfo.gameType = (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).gameType.audition;
          var baseInfo = GameMsg.Room.create({
            roomId: data.id
          });
          var baseBuffer = GameMsg.Room.encode(baseInfo).finish();
          var sendBuffer = (_crd && PbManager === void 0 ? (_reportPossibleCrUseOfPbManager({
            error: Error()
          }), PbManager) : PbManager).instance.sendMsg((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).C2S_Event.AuditionMatch, baseBuffer);
          (_crd && GameSocket === void 0 ? (_reportPossibleCrUseOfGameSocket({
            error: Error()
          }), GameSocket) : GameSocket).send(sendBuffer);
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
//# sourceMappingURL=67703578897bca2ecc6f07c0bca1bd98c00f0b67.js.map