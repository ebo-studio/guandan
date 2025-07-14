System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, AppGlobal, utils, GlobalData, SoundManager, UIManager, UIConfig, LobbyUserHeadItem, KeyBoardType, GameSocket, PbManager, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _class3, _crd, ccclass, property, Lobby;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAppGlobal(extras) {
    _reporterNs.report("AppGlobal", "../AppGlobal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfutils(extras) {
    _reporterNs.report("utils", "../common/utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalData(extras) {
    _reporterNs.report("GlobalData", "../manager/GlobalData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundManager(extras) {
    _reporterNs.report("SoundManager", "../manager/SoundManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIManager(extras) {
    _reporterNs.report("UIManager", "../manager/UIManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIConfig(extras) {
    _reporterNs.report("UIConfig", "../manager/UIConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLobbyUserHeadItem(extras) {
    _reporterNs.report("LobbyUserHeadItem", "../component/LobbyUserHeadItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfKeyBoardType(extras) {
    _reporterNs.report("KeyBoardType", "../component/room/KeyBoardItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameSocket(extras) {
    _reporterNs.report("GameSocket", "../manager/GameSocket", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPbManager(extras) {
    _reporterNs.report("PbManager", "../proto/PbManager", _context.meta, extras);
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
      Label = _cc.Label;
    }, function (_unresolved_2) {
      AppGlobal = _unresolved_2.AppGlobal;
    }, function (_unresolved_3) {
      utils = _unresolved_3.utils;
    }, function (_unresolved_4) {
      GlobalData = _unresolved_4.GlobalData;
    }, function (_unresolved_5) {
      SoundManager = _unresolved_5.SoundManager;
    }, function (_unresolved_6) {
      UIManager = _unresolved_6.UIManager;
    }, function (_unresolved_7) {
      UIConfig = _unresolved_7.UIConfig;
    }, function (_unresolved_8) {
      LobbyUserHeadItem = _unresolved_8.LobbyUserHeadItem;
    }, function (_unresolved_9) {
      KeyBoardType = _unresolved_9.KeyBoardType;
    }, function (_unresolved_10) {
      GameSocket = _unresolved_10.GameSocket;
    }, function (_unresolved_11) {
      PbManager = _unresolved_11.PbManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dbf498ETO1AKZCTW1P6+not", "Lobby", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Lobby", Lobby = (_dec = ccclass('Lobby'), _dec2 = property(_crd && LobbyUserHeadItem === void 0 ? (_reportPossibleCrUseOfLobbyUserHeadItem({
        error: Error()
      }), LobbyUserHeadItem) : LobbyUserHeadItem), _dec3 = property(Label), _dec(_class = (_class2 = (_class3 = class Lobby extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "userHead", _descriptor, this);

          _initializerDefineProperty(this, "txtScore", _descriptor2, this);
        }

        onLoad() {
          Lobby.Instance = this;
        } //首次登录更新


        onFirstUpdate() {
          this.userHead.setData({
            head: (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).userInfo.head_img,
            name: (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).userInfo.name
          });
          this.onUpdateScore();
        } //初始化


        start() {
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).on((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.UpdateScore, this, this.onUpdateScore);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).on((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.UserLogin, this, this.onUserLogin);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).on((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.FirstUpdate, this, this.onFirstUpdate);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).on((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.CreateRoom, this, this.onCreateRoom);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).on((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.FreeMatchStart, this, this.onFreeMatchStart);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).on((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.FreeMatchTimeOut, this, this.onFreeMatchTimeOut);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).on((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.AuditionMatchStart, this, this.onAuditionMatchStart);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).on((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.AuditionMatchTimeOut, this, this.onAuditionMatchTimeOut);

          (_crd && AppGlobal === void 0 ? (_reportPossibleCrUseOfAppGlobal({
            error: Error()
          }), AppGlobal) : AppGlobal).instance.errorCallBack = () => {}; //第一次进大厅,拿到code后再请求


          if ((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).userInfo.haveToken) {
            (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).requestGetUserInfo({
              success: () => {
                this.onFirstUpdate();
              }
            });
          }
        }

        onDestroy() {
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).off((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.UpdateScore, this, this.onUpdateScore);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).off((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.UserLogin, this, this.onUserLogin);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).off((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.FirstUpdate, this, this.onFirstUpdate);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).off((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.CreateRoom, this, this.onCreateRoom);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).off((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.FreeMatchStart, this, this.onFreeMatchStart);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).off((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.FreeMatchTimeOut, this, this.onFreeMatchTimeOut);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).off((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.AuditionMatchStart, this, this.onAuditionMatchStart);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).off((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.AuditionMatchTimeOut, this, this.onAuditionMatchStart);
        } //金币


        onUpdateScore() {
          this.txtScore.string = (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).userInfo.score + "";
        } //登录


        onUserLogin(data) {
          console.log("data--> ", data);
        } //创建房间


        onCreateRoom(data) {
          console.log("roomId----> ", data.roomId);
          (_crd && AppGlobal === void 0 ? (_reportPossibleCrUseOfAppGlobal({
            error: Error()
          }), AppGlobal) : AppGlobal).instance.onFreeRoomId(data.roomId);
        } //自由玩开始匹配


        onFreeMatchStart(data) {
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).Instace.showUI({
            path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
              error: Error()
            }), UIConfig) : UIConfig).FreeMatchItemKey,
            data: data
          });
        } //自由玩匹配超时


        onFreeMatchTimeOut() {
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).Instace.hideUI((_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
            error: Error()
          }), UIConfig) : UIConfig).FreeMatchItemKey);
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).Instace.showUI({
            path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
              error: Error()
            }), UIConfig) : UIConfig).MessageHintKey,
            data: "匹配超时!"
          });
        } //海选赛开始匹配


        onAuditionMatchStart(data) {
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).Instace.showUI({
            path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
              error: Error()
            }), UIConfig) : UIConfig).AuditionMatchItemKey,
            data: data
          });
        } //海选赛匹配超时


        onAuditionMatchTimeOut() {
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).Instace.hideUI((_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
            error: Error()
          }), UIConfig) : UIConfig).AuditionMatchItemKey);
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).Instace.showUI({
            path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
              error: Error()
            }), UIConfig) : UIConfig).MessageHintKey,
            data: "匹配超时!"
          });
        } //规则


        onBtnRuleClick() {
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).playClick();
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).Instace.showUI({
            path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
              error: Error()
            }), UIConfig) : UIConfig).RuleItemKey
          });
        } //团队


        onBtnTeamClick() {
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).playClick();
          (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).requestUserGroup({
            success: () => {
              (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
                error: Error()
              }), UIManager) : UIManager).Instace.showUI({
                path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
                  error: Error()
                }), UIConfig) : UIConfig).TeamItemKey
              });
            }
          });
        } //排名


        onBtnRankClick() {
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).playClick();
          (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).requestResultListTotal(() => {
            (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
              error: Error()
            }), UIManager) : UIManager).Instace.showUI({
              path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
                error: Error()
              }), UIConfig) : UIConfig).RankRaceItemKey
            });
          });
        } //设置


        onBtnSettingClick() {
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).playClick();
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).Instace.showUI({
            path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
              error: Error()
            }), UIConfig) : UIConfig).SettingItemKey
          });
        } //创建房间


        onBtnCreateRoomClick() {
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).playClick();
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).Instace.showUI({
            path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
              error: Error()
            }), UIConfig) : UIConfig).CreateRoomItemKey,
            data: () => {
              var baseInfo = GameMsg.Time.create({
                time: (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                  error: Error()
                }), GlobalData) : GlobalData).createRoomInfo.time
              });
              var baseBuffer = GameMsg.Time.encode(baseInfo).finish();
              var sendBuffer = (_crd && PbManager === void 0 ? (_reportPossibleCrUseOfPbManager({
                error: Error()
              }), PbManager) : PbManager).instance.sendMsg((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                error: Error()
              }), GlobalData) : GlobalData).C2S_Event.CreateRoom, baseBuffer);
              (_crd && GameSocket === void 0 ? (_reportPossibleCrUseOfGameSocket({
                error: Error()
              }), GameSocket) : GameSocket).send(sendBuffer);
            }
          });
        } //加入房间


        onBtnJoinRoomClick() {
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).playClick();
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).Instace.showUI({
            path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
              error: Error()
            }), UIConfig) : UIConfig).KeyBoardItemKey,
            data: {
              type: (_crd && KeyBoardType === void 0 ? (_reportPossibleCrUseOfKeyBoardType({
                error: Error()
              }), KeyBoardType) : KeyBoardType).joinRoom,
              cb: roomId => {
                (_crd && AppGlobal === void 0 ? (_reportPossibleCrUseOfAppGlobal({
                  error: Error()
                }), AppGlobal) : AppGlobal).instance.onFreeRoomId(roomId);
              }
            }
          });
        } //自由嗨完


        onBtnRaceFreeClick() {
          (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).cardInfo.gameType = (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).gameType.free;
          var sendBuffer = (_crd && PbManager === void 0 ? (_reportPossibleCrUseOfPbManager({
            error: Error()
          }), PbManager) : PbManager).instance.sendMsg((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).C2S_Event.FreeMatch, null);
          (_crd && GameSocket === void 0 ? (_reportPossibleCrUseOfGameSocket({
            error: Error()
          }), GameSocket) : GameSocket).send(sendBuffer);
        } //积分赛


        onBtnRaceScoreClick() {
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).playClick();
          (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).requestScoreGameList({
            success: () => {
              (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                error: Error()
              }), GlobalData) : GlobalData).cardInfo.gameType = (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                error: Error()
              }), GlobalData) : GlobalData).gameType.score;
              (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
                error: Error()
              }), UIManager) : UIManager).Instace.showUI({
                path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
                  error: Error()
                }), UIConfig) : UIConfig).RaceScoreItemKey
              });
            }
          });
        } //淘汰赛


        onBtnRaceCleanOutClick() {
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).playClick();
          (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).requestOutGameList({
            success: () => {
              (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                error: Error()
              }), GlobalData) : GlobalData).cardInfo.gameType = (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                error: Error()
              }), GlobalData) : GlobalData).gameType.kick;
              (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
                error: Error()
              }), UIManager) : UIManager).Instace.showUI({
                path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
                  error: Error()
                }), UIConfig) : UIConfig).RaceKickItemKey
              });
            }
          });
        } //海选赛


        onBtnRaceAuditionClick() {
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).playClick();
          (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).requestAuditionGameList({
            success: () => {
              (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                error: Error()
              }), GlobalData) : GlobalData).cardInfo.gameType = (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                error: Error()
              }), GlobalData) : GlobalData).gameType.audition;
              (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
                error: Error()
              }), UIManager) : UIManager).Instace.showUI({
                path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
                  error: Error()
                }), UIConfig) : UIConfig).RaceAuditionItemKey
              });
            }
          });
        }

        onEnable() {// let data = GameLogic.convertCardListS2C(
          //     [
          //         21, 31, 41, 51, 61, 71, 81, 91, 101, 111, 121, 131, 141,  //红
          //         22, 32, 42, 52, 62, 72, 82, 92, 102, 112, 122, 132, 142,  //方
          //         23, 33, 43, 53, 63, 73, 83, 93, 103, 113, 123, 133, 143,  //梅
          //         24, 34, 44, 54, 64, 74, 84, 94, 104, 114, 124, 134, 144,  //黑
          //         155, 165
          //     ]);
          // let data = [0x06, 0x16, 0x26, 0x36];
          // let list = GameLogic.convertCardListC2S(data);
          // console.log("list--> ", list);
          // let baseInfo = GameMsg.SendCard.create({ cards: [84] });
          // let baseBuffer = GameMsg.SendCard.encode(baseInfo).finish();
          // let res = GameMsg.SendCard.decode(baseBuffer);
          // console.log("res--> ",res);
          // console.log('baseBuffer--> ', baseBuffer);
          // GameLogic.playCardTypeMusic(GameDefine.KIND_CARDS_KING, [0x0d]);
        }

        testEnd() {
          var list = new GameMsg.WinList();
          list.type = 5;
          list.time = 10;
          var item2 = new GameMsg.ResUser();
          item2.headImg = "";
          item2.name = "22";
          item2.res = 1;
          item2.id = 5;
          item2.score = 102;
          var item3 = new GameMsg.ResUser();
          item3.headImg = "";
          item3.name = "33";
          item3.res = 3;
          item3.id = 6;
          item3.score = 103;
          var item4 = new GameMsg.ResUser();
          item4.headImg = "";
          item4.name = "44";
          item4.res = 0;
          item4.id = 7;
          item4.score = 104;
          var item1 = new GameMsg.ResUser();
          item1.headImg = "https://yq-0.obs.cn-east-3.myhuaweicloud.com/mall/image/20230426/1682479988636.png";
          item1.name = "11";
          item1.res = 2;
          item1.id = 4;
          item1.score = 101;
          list.list.push(item1);
          list.list.push(item2);
          list.list.push(item3);
          list.list.push(item4);
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).Instace.showUI({
            path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
              error: Error()
            }), UIConfig) : UIConfig).GameEndScoreItemKey,
            data: list
          });
        }

      }, _class3.Instance = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "userHead", [_dec2], {
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
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a75d36d3c51470fed660aa78952d8007c3416750.js.map