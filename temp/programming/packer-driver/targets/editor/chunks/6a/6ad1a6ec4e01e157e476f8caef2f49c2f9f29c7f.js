System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, AudioSource, utils, GlobalData, ReconnectType, HttpConfig, platform, UIManager, UIConfig, PbManager, GameSocket, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _class3, _crd, ccclass, property, AppGlobal;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfutils(extras) {
    _reporterNs.report("utils", "./common/utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalData(extras) {
    _reporterNs.report("GlobalData", "./manager/GlobalData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReconnectType(extras) {
    _reporterNs.report("ReconnectType", "./manager/GlobalData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHttpConfig(extras) {
    _reporterNs.report("HttpConfig", "./manager/HttpConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplatform(extras) {
    _reporterNs.report("platform", "./platform/platform", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIManager(extras) {
    _reporterNs.report("UIManager", "./manager/UIManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIConfig(extras) {
    _reporterNs.report("UIConfig", "./manager/UIConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPbManager(extras) {
    _reporterNs.report("PbManager", "./proto/PbManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameSocket(extras) {
    _reporterNs.report("GameSocket", "./manager/GameSocket", _context.meta, extras);
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
      director = _cc.director;
      AudioSource = _cc.AudioSource;
    }, function (_unresolved_2) {
      utils = _unresolved_2.utils;
    }, function (_unresolved_3) {
      GlobalData = _unresolved_3.GlobalData;
      ReconnectType = _unresolved_3.ReconnectType;
    }, function (_unresolved_4) {
      HttpConfig = _unresolved_4.HttpConfig;
    }, function (_unresolved_5) {
      platform = _unresolved_5.platform;
    }, function (_unresolved_6) {
      UIManager = _unresolved_6.UIManager;
    }, function (_unresolved_7) {
      UIConfig = _unresolved_7.UIConfig;
    }, function (_unresolved_8) {
      PbManager = _unresolved_8.PbManager;
    }, function (_unresolved_9) {
      GameSocket = _unresolved_9.GameSocket;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c2b5a4OpMVHUKnL/VvIs9ko", "AppGlobal", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director', 'AudioSource', 'AudioClip']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AppGlobal", AppGlobal = (_dec = ccclass('AppGlobal'), _dec2 = property(AudioSource), _dec3 = property(AudioSource), _dec4 = property(AudioSource), _dec5 = property(AudioSource), _dec(_class = (_class2 = (_class3 = class AppGlobal extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "soundAuido", _descriptor, this);

          _initializerDefineProperty(this, "soundClickAuido", _descriptor2, this);

          _initializerDefineProperty(this, "soundClockAuido", _descriptor3, this);

          _initializerDefineProperty(this, "musicAuido", _descriptor4, this);

          this.errorCallBack = null;
        }

        //全局回调
        //很奇怪,appglobal 是常驻节点,但是onLoad 和 start 切换场景的时候会再次调用
        onLoad() {
          if ((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).userInfo.haveToken) return; //常驻节点

          director.addPersistRootNode(this.node);
          AppGlobal.instance = this;
          (_crd && platform === void 0 ? (_reportPossibleCrUseOfplatform({
            error: Error()
          }), platform) : platform).init();
          (_crd && HttpConfig === void 0 ? (_reportPossibleCrUseOfHttpConfig({
            error: Error()
          }), HttpConfig) : HttpConfig).init();
          this.bindEvent();
        }

        start() {
          this.requestLogin();
        }

        onDestroy() {
          this.removeEvent();
        }

        requestLogin() {
          if ((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).userInfo.haveToken) return;
          console.log("请求登录--->");

          if ((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).userInfo.isOnline) {
            var ref = window.location.href; // var ref= "http://farm.zhongyigames.com/?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NzA4MjkyMDksInVzZXJuYW1lIjoiMTU1MTUyNzcwMDMifQ.EZAp5OoAVWSGZY-5VMOgIvugXZ9bkmJhvgtxK1svdSU"
            // var ref= "http://farm.zhongyigames.com/?code=4rjzbdlqktb8zzklqzyvsj1dw4brw7vo"

            console.log("ref ", ref);
            (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).loginInfo.code = (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
              error: Error()
            }), utils) : utils).queryURLParams(ref, "code");

            if ((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).loginInfo.code == "") {
              console.error("code无效 ", (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                error: Error()
              }), GlobalData) : GlobalData).loginInfo.code);
              (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
                error: Error()
              }), UIManager) : UIManager).Instace.showUI({
                path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
                  error: Error()
                }), UIConfig) : UIConfig).MessageHintKey,
                data: "code无效"
              });
              return;
            }

            (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).requestLogin({
              success: () => {
                (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                  error: Error()
                }), GlobalData) : GlobalData).requestGetUserInfo({
                  success: () => {
                    (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                      error: Error()
                    }), GlobalData) : GlobalData).userInfo.haveToken = true;
                    (_crd && GameSocket === void 0 ? (_reportPossibleCrUseOfGameSocket({
                      error: Error()
                    }), GameSocket) : GameSocket).initAndConnect();
                    (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
                      error: Error()
                    }), utils) : utils).send((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                      error: Error()
                    }), GlobalData) : GlobalData).localEvent.FirstUpdate);
                  }
                });
              }
            });
          } else {
            (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
              error: Error()
            }), UIManager) : UIManager).Instace.showUI({
              path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
                error: Error()
              }), UIConfig) : UIConfig).MessageBoxCommonTestKey,
              data: {
                okName: "确定",
                cancleName: "取消",
                des: "选择token",
                okFunc: code => {
                  (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                    error: Error()
                  }), GlobalData) : GlobalData).loginInfo.code = code;
                  (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                    error: Error()
                  }), GlobalData) : GlobalData).requestLogin({
                    success: () => {
                      (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                        error: Error()
                      }), GlobalData) : GlobalData).requestGetUserInfo({
                        success: () => {
                          (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                            error: Error()
                          }), GlobalData) : GlobalData).userInfo.haveToken = true;
                          (_crd && GameSocket === void 0 ? (_reportPossibleCrUseOfGameSocket({
                            error: Error()
                          }), GameSocket) : GameSocket).initAndConnect();
                          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
                            error: Error()
                          }), utils) : utils).send((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                            error: Error()
                          }), GlobalData) : GlobalData).localEvent.FirstUpdate);
                        }
                      });
                    }
                  });
                },
                cancleFunc: null
              }
            });
          }
        }

        bindEvent() {
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).on((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.GameError, this, this.onGameError);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).on((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.SocketError, this, this.onSocketError);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).on((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.KickGameStart, this, this.onKickGameStart);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).on((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.KickRoomId, this, this.onKickRoomId);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).on((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.AuditionRoomId, this, this.onAuditionRoomId);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).on((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.ScoreMatchSucces, this, this.onScoreMatchSucces);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).on((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.KickFreeUp, this, this.onKickFreeUp);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).on((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.KickFinish, this, this.onKickFinish);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).on((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.ScoreFinish, this, this.onScoreFinish);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).on((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.Reconnect, this, this.onReconnect);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).on((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.JoinRoomResult, this, this.onJoinRoomResult);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).on((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.ForceExitGame, this, this.onForceExitGame);
        }

        removeEvent() {
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).off((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.GameError, this, this.onGameError);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).off((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.SocketError, this, this.onSocketError);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).off((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.KickGameStart, this, this.onKickGameStart);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).off((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.KickRoomId, this, this.onKickRoomId);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).off((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.AuditionRoomId, this, this.onAuditionRoomId);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).off((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.ScoreMatchSucces, this, this.onScoreMatchSucces);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).off((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.KickFreeUp, this, this.onKickFreeUp);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).off((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.KickFinish, this, this.onKickFinish);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).off((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.ScoreFinish, this, this.onScoreFinish);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).off((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.Reconnect, this, this.onReconnect);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).off((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.JoinRoomResult, this, this.onJoinRoomResult);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).off((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.ForceExitGame, this, this.onForceExitGame);
        }

        onForceExitGame() {
          console.log("强制退出");
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).Instace.showUI({
            path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
              error: Error()
            }), UIConfig) : UIConfig).LoadItemKey,
            data: (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).sceneName.lobby
          });
        } //加入房间(大厅)


        onJoinRoomResult(type, roomType) {
          console.log("加入房间大厅------> ", type, roomType);

          if (type) {
            (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).cardInfo.gameType = roomType; //在游戏内,刷新界面

            if ((_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
              error: Error()
            }), utils) : utils).getSceneName() == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).sceneName.game) {
              (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
                error: Error()
              }), utils) : utils).send((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                error: Error()
              }), GlobalData) : GlobalData).localEvent.ReEnterGame);
            } else {
              //在大厅,进入游戏
              (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
                error: Error()
              }), UIManager) : UIManager).Instace.showUI({
                path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
                  error: Error()
                }), UIConfig) : UIConfig).LoadItemKey,
                data: (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                  error: Error()
                }), GlobalData) : GlobalData).sceneName.game
              });
            }
          } else {
            // console.log("加入房间失败!");
            (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
              error: Error()
            }), UIManager) : UIManager).Instace.showUI({
              path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
                error: Error()
              }), UIConfig) : UIConfig).MessageBoxCommonKey,
              data: {
                okName: "确定",
                cancleName: "取消",
                des: "加入房间失败",
                okFunc: () => {},
                cancleFunc: null
              }
            });
          }
        } //出错了


        onGameError(data) {
          console.log("onGameError ", data); //提示框

          if (data.type == 1) {
            (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
              error: Error()
            }), UIManager) : UIManager).Instace.showUI({
              path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
                error: Error()
              }), UIConfig) : UIConfig).MessageBoxCommonKey,
              data: {
                okName: "确定",
                cancleName: "取消",
                des: data.msg,
                okFunc: () => {
                  AppGlobal.instance.errorCallBack && AppGlobal.instance.errorCallBack();
                },
                cancleFunc: null
              }
            });
          } //隐藏的提示(无用)
          else if (data.type == 2) {} //提示条
          else if (data.type == 3) {
            (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
              error: Error()
            }), UIManager) : UIManager).Instace.showUI({
              path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
                error: Error()
              }), UIConfig) : UIConfig).MessageHintKey,
              data: data.msg
            });
          }
        } //socket 断开


        onSocketError() {
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).Instace.showUI({
            path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
              error: Error()
            }), UIConfig) : UIConfig).MessageBoxCommonKey,
            data: {
              okName: "确定",
              cancleName: "取消",
              des: "网络出现了问题,请稍后再试!",
              okFunc: () => {
                (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
                  error: Error()
                }), UIManager) : UIManager).Instace.clearAllUI();
                (_crd && GameSocket === void 0 ? (_reportPossibleCrUseOfGameSocket({
                  error: Error()
                }), GameSocket) : GameSocket).initAndConnect();
              },
              cancleFunc: null
            }
          });
        } //开赛通知


        onKickGameStart(time) {
          console.log("开赛通知---> ", time);
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).Instace.showUI({
            path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
              error: Error()
            }), UIConfig) : UIConfig).GameStartNoticeKey,
            data: time
          });
        } //淘汰赛房间号


        onKickRoomId(roomId) {
          console.log("加入房间- 淘汰赛房间号---> ", roomId);
          (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).cardInfo.roomId = roomId;
          let baseInfo = GameMsg.Room.create({
            roomId: (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).cardInfo.roomId
          });
          let baseBuffer = GameMsg.Room.encode(baseInfo).finish();
          let sendBuffer = (_crd && PbManager === void 0 ? (_reportPossibleCrUseOfPbManager({
            error: Error()
          }), PbManager) : PbManager).instance.sendMsg((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).C2S_Event.KickJoinRoom, baseBuffer);
          (_crd && GameSocket === void 0 ? (_reportPossibleCrUseOfGameSocket({
            error: Error()
          }), GameSocket) : GameSocket).send(sendBuffer);
        } //淘汰赛轮空晋级


        onKickFreeUp(data) {
          console.log("销毁所有 1--->");
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).Instace.clearAllUI();
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).Instace.showUI({
            path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
              error: Error()
            }), UIConfig) : UIConfig).FreeUpItemKey,
            data: data
          });
        } //淘汰赛结算


        onKickFinish(gameId) {
          console.log("淘汰赛结算 赛事ID  ", gameId);
          (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).requestUpList(gameId, {
            success: () => {
              console.log("销毁所有 6--->");
              (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
                error: Error()
              }), UIManager) : UIManager).Instace.clearAllUI();
              (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
                error: Error()
              }), UIManager) : UIManager).Instace.showUI({
                path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
                  error: Error()
                }), UIConfig) : UIConfig).GameEndKickUpItemKey
              });
            }
          });
        } //积分赛结束


        onScoreFinish(gameId) {
          console.log("积分赛结算 赛事ID  ", gameId);
          (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).requestRankScoreData(gameId, () => {
            (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
              error: Error()
            }), UIManager) : UIManager).Instace.showUI({
              path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
                error: Error()
              }), UIConfig) : UIConfig).GameEndScoreRankItemKey
            });
          });
        } //积分赛(匹配队友成功)


        onScoreMatchSucces(data) {
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).Instace.showUI({
            path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
              error: Error()
            }), UIConfig) : UIConfig).TeamUpItemKey,
            data: data
          });
        } //海选赛房间号


        onAuditionRoomId(roomId) {
          console.log("加入房间- 海选赛房间号---> ", roomId);
          (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).cardInfo.roomId = roomId;
          let baseInfo = GameMsg.Room.create({
            roomId: (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).cardInfo.roomId
          });
          let baseBuffer = GameMsg.Room.encode(baseInfo).finish();
          let sendBuffer = (_crd && PbManager === void 0 ? (_reportPossibleCrUseOfPbManager({
            error: Error()
          }), PbManager) : PbManager).instance.sendMsg((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).C2S_Event.JoinAuditionRoom, baseBuffer);
          (_crd && GameSocket === void 0 ? (_reportPossibleCrUseOfGameSocket({
            error: Error()
          }), GameSocket) : GameSocket).send(sendBuffer);
        } //积分赛房间号


        onScoreRoomId(roomId) {
          console.log("加入房间- 积分赛房间号---> ", roomId);
          (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).cardInfo.roomId = roomId;
          let baseInfo = GameMsg.Room.create({
            roomId: (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).cardInfo.roomId
          });
          let baseBuffer = GameMsg.Room.encode(baseInfo).finish();
          let sendBuffer = (_crd && PbManager === void 0 ? (_reportPossibleCrUseOfPbManager({
            error: Error()
          }), PbManager) : PbManager).instance.sendMsg((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).C2S_Event.ScoreJoinRoom, baseBuffer);
          (_crd && GameSocket === void 0 ? (_reportPossibleCrUseOfGameSocket({
            error: Error()
          }), GameSocket) : GameSocket).send(sendBuffer);
        } //加入房间


        onFreeRoomId(roomId) {
          (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).cardInfo.roomId = roomId;
          console.log("加入房间- 自由玩房间号---> ", (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).cardInfo.roomId);
          let baseInfo = GameMsg.Room.create({
            roomId: (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).cardInfo.roomId
          });
          let baseBuffer = GameMsg.Room.encode(baseInfo).finish();
          let sendBuffer = (_crd && PbManager === void 0 ? (_reportPossibleCrUseOfPbManager({
            error: Error()
          }), PbManager) : PbManager).instance.sendMsg((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).C2S_Event.JoinRoom, baseBuffer);
          (_crd && GameSocket === void 0 ? (_reportPossibleCrUseOfGameSocket({
            error: Error()
          }), GameSocket) : GameSocket).send(sendBuffer);
        } //断线重连


        onReconnect(data) {
          console.log("断线重连 ", data);

          if (data.type == (_crd && ReconnectType === void 0 ? (_reportPossibleCrUseOfReconnectType({
            error: Error()
          }), ReconnectType) : ReconnectType).none) {
            this.checkReconnectSceneState();
          } else if (data.type == (_crd && ReconnectType === void 0 ? (_reportPossibleCrUseOfReconnectType({
            error: Error()
          }), ReconnectType) : ReconnectType).free) {
            this.onFreeRoomId(data.roomId);
          } else if (data.type == (_crd && ReconnectType === void 0 ? (_reportPossibleCrUseOfReconnectType({
            error: Error()
          }), ReconnectType) : ReconnectType).kick) {
            this.onKickRoomId(data.roomId);
          } else if (data.type == (_crd && ReconnectType === void 0 ? (_reportPossibleCrUseOfReconnectType({
            error: Error()
          }), ReconnectType) : ReconnectType).score) {
            this.onScoreRoomId(data.roomId);
          } else if (data.type == (_crd && ReconnectType === void 0 ? (_reportPossibleCrUseOfReconnectType({
            error: Error()
          }), ReconnectType) : ReconnectType).audition) {
            this.onAuditionRoomId(data.roomId);
          }
        } //断线场景状态


        checkReconnectSceneState() {
          console.log("断线场景状态---> ");

          if ((_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).getSceneName() == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).sceneName.game) {
            (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
              error: Error()
            }), UIManager) : UIManager).Instace.showUI({
              path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
                error: Error()
              }), UIConfig) : UIConfig).MessageBoxCommonKey,
              data: {
                okName: "确定",
                cancleName: "取消",
                des: "游戏已结束,请返回大厅!",
                okFunc: () => {
                  console.log("nzp add 返回大厅 7");
                  (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
                    error: Error()
                  }), UIManager) : UIManager).Instace.showUI({
                    path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
                      error: Error()
                    }), UIConfig) : UIConfig).LoadItemKey,
                    data: (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                      error: Error()
                    }), GlobalData) : GlobalData).sceneName.lobby
                  });
                },
                cancleFunc: null
              }
            });
          } else {
            (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).requestGetUserInfo({
              success: () => {
                (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
                  error: Error()
                }), utils) : utils).send((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                  error: Error()
                }), GlobalData) : GlobalData).localEvent.FirstUpdate);
              }
            });
          }
        } //播放音效


        playSound(clip, loop = false) {
          if (this.soundAuido.playing) {
            this.soundAuido.stop();
          } // console.log("sound ",clip);


          this.soundAuido.clip = clip;
          this.soundAuido.loop = loop;
          this.soundAuido.volume = 1;
          this.soundAuido.play();
        }

        playClickSound() {
          if (this.soundClickAuido.playing) {
            return;
          }

          this.soundClickAuido.play();
        }

        playClockSound() {
          if (this.soundClockAuido.playing) {
            return;
          }

          this.soundClockAuido.play();
        } //播放音乐


        playMusic(clip, loop = false) {
          if (this.musicAuido.playing) {
            this.musicAuido.stop();
          } // console.log("music ",clip);


          this.musicAuido.clip = clip;
          this.musicAuido.loop = loop;
          this.musicAuido.volume = 0.5;
          this.musicAuido.play();
        } //停止播放音乐


        stopMusic() {
          if (this.musicAuido.playing) {
            this.musicAuido.stop();
          }
        }

      }, _class3.instance = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "soundAuido", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "soundClickAuido", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "soundClockAuido", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "musicAuido", [_dec5], {
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
//# sourceMappingURL=6ad1a6ec4e01e157e476f8caef2f49c2f9f29c7f.js.map