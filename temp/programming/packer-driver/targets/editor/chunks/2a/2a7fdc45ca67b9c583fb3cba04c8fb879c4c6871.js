System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Node, PopWindow, AVirtualScrollView, GlobalData, RaceTimeType, SoundManager, utils, RaceJoinState, RaceKickBtnType, RaceKickLineItem, LobbyUserHeadItem, UIManager, UIConfig, KeyBoardType, PbManager, GameSocket, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _crd, ccclass, property, RaceKickItem;

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

  function _reportPossibleCrUseOfRaceKickLineData(extras) {
    _reporterNs.report("RaceKickLineData", "../../manager/GlobalData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRaceKickTeamInfo(extras) {
    _reporterNs.report("RaceKickTeamInfo", "../../manager/GlobalData", _context.meta, extras);
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
    _reporterNs.report("RaceJoinState", "../raceScore/RaceScoreLineItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRaceKickBtnType(extras) {
    _reporterNs.report("RaceKickBtnType", "./RaceKickLineItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRaceKickLineItem(extras) {
    _reporterNs.report("RaceKickLineItem", "./RaceKickLineItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLobbyUserHeadItem(extras) {
    _reporterNs.report("LobbyUserHeadItem", "../LobbyUserHeadItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIManager(extras) {
    _reporterNs.report("UIManager", "../../manager/UIManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIConfig(extras) {
    _reporterNs.report("UIConfig", "../../manager/UIConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfKeyBoardType(extras) {
    _reporterNs.report("KeyBoardType", "../room/KeyBoardItem", _context.meta, extras);
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
      Label = _cc.Label;
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
    }, function (_unresolved_8) {
      RaceKickBtnType = _unresolved_8.RaceKickBtnType;
      RaceKickLineItem = _unresolved_8.RaceKickLineItem;
    }, function (_unresolved_9) {
      LobbyUserHeadItem = _unresolved_9.LobbyUserHeadItem;
    }, function (_unresolved_10) {
      UIManager = _unresolved_10.UIManager;
    }, function (_unresolved_11) {
      UIConfig = _unresolved_11.UIConfig;
    }, function (_unresolved_12) {
      KeyBoardType = _unresolved_12.KeyBoardType;
    }, function (_unresolved_13) {
      PbManager = _unresolved_13.PbManager;
    }, function (_unresolved_14) {
      GameSocket = _unresolved_14.GameSocket;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "93dcdIhpIhLup6OkXIU6n6y", "RaceKickItem", undefined);

      __checkObsolete__(['_decorator', 'Label', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RaceKickItem", RaceKickItem = (_dec = ccclass('RaceKickItem'), _dec2 = property(_crd && AVirtualScrollView === void 0 ? (_reportPossibleCrUseOfAVirtualScrollView({
        error: Error()
      }), AVirtualScrollView) : AVirtualScrollView), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(_crd && LobbyUserHeadItem === void 0 ? (_reportPossibleCrUseOfLobbyUserHeadItem({
        error: Error()
      }), LobbyUserHeadItem) : LobbyUserHeadItem), _dec7 = property(Node), _dec8 = property(Label), _dec(_class = (_class2 = class RaceKickItem extends (_crd && PopWindow === void 0 ? (_reportPossibleCrUseOfPopWindow({
        error: Error()
      }), PopWindow) : PopWindow) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "personScroll", _descriptor, this);

          _initializerDefineProperty(this, "nodeTip", _descriptor2, this);

          _initializerDefineProperty(this, "nodeTeamInfo", _descriptor3, this);

          _initializerDefineProperty(this, "nodeTeamTip", _descriptor4, this);

          _initializerDefineProperty(this, "headItems", _descriptor5, this);

          _initializerDefineProperty(this, "nodeLeaders", _descriptor6, this);

          _initializerDefineProperty(this, "txtTeamId", _descriptor7, this);

          this.timeFunc = null;
          this.teamId = null;
          this.zuId = null;
        }

        start() {
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).on((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.RaceKickLine, this, this.onRaceKickLine);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).on((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.KickGameInfo, this, this.onKickGameInfo);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).on((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.LookKickGameInfo, this, this.onLookKickGameInfo);
        }

        onDestroy() {
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).off((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.RaceKickLine, this, this.onRaceKickLine);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).off((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.KickGameInfo, this, this.onKickGameInfo);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).off((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.LookKickGameInfo, this, this.onLookKickGameInfo);
        }

        setData() {
          this.nodeTip.active = (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).raceKickDataInfo.list.length == 0;
          this.personScroll.node.active = !this.nodeTip.active;

          if (this.personScroll.node.active) {
            this.personScroll.refreshData((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).raceKickDataInfo.list);
            this.personScroll.setTouchItemCallback(data => {
              console.log("data---> ", data);
            }, this); //默认选中一个

            this.onRaceKickLine({
              type: (_crd && RaceKickBtnType === void 0 ? (_reportPossibleCrUseOfRaceKickBtnType({
                error: Error()
              }), RaceKickBtnType) : RaceKickBtnType).look,
              data: (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                error: Error()
              }), GlobalData) : GlobalData).raceKickDataInfo.list[0]
            });
          } else {
            this.updateTeamInfo(null);
          }

          this.startTime();
        } //倒计时显示条件
        //1: 现在时间 < 报名结束时间 已报名
        //2: 现在时间< 游戏开始时间  已报名


        startTime() {
          this.stopTime();
          let listData = (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).raceKickDataInfo.list;

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
        } //报名


        onRaceKickLine(info) {
          console.log("RaceKickLineData--> ", info.data);
          this.teamId = info.data.id; //报名

          if (info.type == (_crd && RaceKickBtnType === void 0 ? (_reportPossibleCrUseOfRaceKickBtnType({
            error: Error()
          }), RaceKickBtnType) : RaceKickBtnType).register) {
            (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
              error: Error()
            }), UIManager) : UIManager).Instace.showUI({
              path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
                error: Error()
              }), UIConfig) : UIConfig).CreateTeamItemKey,
              data: {
                okFunc: () => {
                  //创建队伍
                  (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                    error: Error()
                  }), GlobalData) : GlobalData).requestCreateOutGameZu(info.data.id, {
                    success: datas => {
                      (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
                        error: Error()
                      }), UIManager) : UIManager).Instace.showUI({
                        path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
                          error: Error()
                        }), UIConfig) : UIConfig).MessageHintKey,
                        data: "创建队伍成功"
                      }); //左侧更新

                      this.updateTeamInfo(datas); //逻辑

                      this.updateRigesterState(info.data);
                    }
                  });
                },
                cancleFunc: () => {
                  //加入队伍
                  (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
                    error: Error()
                  }), UIManager) : UIManager).Instace.showUI({
                    path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
                      error: Error()
                    }), UIConfig) : UIConfig).KeyBoardItemKey,
                    data: {
                      type: (_crd && KeyBoardType === void 0 ? (_reportPossibleCrUseOfKeyBoardType({
                        error: Error()
                      }), KeyBoardType) : KeyBoardType).joinTeam,
                      cb: num => {
                        console.log("num--> ", num);
                        (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                          error: Error()
                        }), GlobalData) : GlobalData).requestAddOutGameZu(num, {
                          success: data => {
                            info.data.currentNum = data.user_num;
                            (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
                              error: Error()
                            }), UIManager) : UIManager).Instace.showUI({
                              path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
                                error: Error()
                              }), UIConfig) : UIConfig).MessageHintKey,
                              data: "加入队伍成功"
                            }); //逻辑

                            this.updateRigesterState(info.data); //左侧

                            this.requestTeamInfo(info.data.id);
                          }
                        });
                      }
                    }
                  });
                }
              }
            });
          } //查询
          else if (info.type == (_crd && RaceKickBtnType === void 0 ? (_reportPossibleCrUseOfRaceKickBtnType({
            error: Error()
          }), RaceKickBtnType) : RaceKickBtnType).look) {
            this.requestTeamInfo(info.data.id);
          }
        } //报名状态更新


        updateRigesterState(data) {
          //逻辑
          let listData = (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).raceKickDataInfo.list;

          for (let i = 0; i < listData.length; i++) {
            let item = listData[i];

            if (item.id == data.id) {
              //报名状态
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
        } //状态


        changeState(data, updateState = true, updateTime = false, updateTimeState = false) {
          let childs = this.personScroll.content.children;

          for (let i = 0; i < childs.length; i++) {
            var _childs$i;

            let element = (_childs$i = childs[i]) == null ? void 0 : _childs$i.getComponent(_crd && RaceKickLineItem === void 0 ? (_reportPossibleCrUseOfRaceKickLineItem({
              error: Error()
            }), RaceKickLineItem) : RaceKickLineItem);

            if (element && element.data.id == data.id) {
              if (updateTimeState) {
                element.changeTimeState(data.timeState);
              }

              if (updateState) {
                element.changeState(data.state);
              }

              if (updateTime) {
                element.updateTime(data.leftTime);
              }

              break;
            }
          }
        } //队伍详情


        requestTeamInfo(id) {
          (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).requestGameUserList(id, {
            success: datas => {
              console.log("队伍详情---> ", datas);
              this.updateTeamInfo(datas);
            }
          });
        }

        updateTeamInfo(datas) {
          if (datas && datas.zu_id && datas.list && datas.list.length > 0) {
            this.zuId = datas.zu_id;
            this.nodeTeamTip.active = false;
            this.nodeTeamInfo.active = true;
            this.txtTeamId.string = "队伍 : " + datas.zu_id;

            for (let i = 0; i < this.headItems.length; i++) {
              this.headItems[i].node.active = false;
              this.nodeLeaders[i].active = true;
            } //队长在前


            for (let index = 0; index < datas.list.length; index++) {
              const element = datas.list[index];

              if (element.captain) {
                this.headItems[0].node.active = true;
                this.headItems[0].setData({
                  head: element.head_img,
                  name: element.name
                });
                this.nodeLeaders[0].active = true;
              } else {
                this.headItems[1].node.active = true;
                this.headItems[1].setData({
                  head: element.head_img,
                  name: element.name
                });
                this.nodeLeaders[1].active = false;
              }
            }
          } else {
            this.nodeTeamTip.active = true;
            this.nodeTeamInfo.active = false;
          }
        }

        onKickGameInfo(data) {
          let desLun = "当前进行第" + data.lun + "轮比赛\n";
          let desZhuo = "还有" + data.game + "桌比赛中";
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).Instace.showUI({
            path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
              error: Error()
            }), UIConfig) : UIConfig).MessageBoxCommonKey,
            data: {
              okName: "确定",
              cancleName: "取消",
              des: desLun + desZhuo,
              okFunc: () => {},
              cancleFunc: null
            }
          });
        }

        onLookKickGameInfo(id) {
          let baseInfo = GameMsg.OutGame.create({
            gameId: id
          });
          let baseBuffer = GameMsg.OutGame.encode(baseInfo).finish();
          let sendBuffer = (_crd && PbManager === void 0 ? (_reportPossibleCrUseOfPbManager({
            error: Error()
          }), PbManager) : PbManager).instance.sendMsg((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).C2S_Event.OutGame, baseBuffer);
          (_crd && GameSocket === void 0 ? (_reportPossibleCrUseOfGameSocket({
            error: Error()
          }), GameSocket) : GameSocket).send(sendBuffer);
          console.log("onLookKickGameInfo 1111");
        }

        onBtnCloseClick() {
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).playClick();
          this.hide();
        }

        onBtnDismassClick() {
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).playClick();
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).Instace.showUI({
            path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
              error: Error()
            }), UIConfig) : UIConfig).MessageBoxCommonKey,
            data: {
              okName: "确定",
              cancleName: "取消",
              des: "是否退出队伍?",
              okFunc: () => {
                (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                  error: Error()
                }), GlobalData) : GlobalData).requestDismass(this.teamId, this.zuId, {
                  success: () => {
                    (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                      error: Error()
                    }), GlobalData) : GlobalData).requestOutGameList({
                      success: () => {
                        this.setData();
                      }
                    });
                  }
                });
              },
              cancleFunc: () => {}
            }
          });
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "nodeTeamInfo", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "nodeTeamTip", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "headItems", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "nodeLeaders", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "txtTeamId", [_dec8], {
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
//# sourceMappingURL=2a7fdc45ca67b9c583fb3cba04c8fb879c4c6871.js.map