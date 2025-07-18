System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, utils, RaceAuditionState, RaceJoinState, HttpConfig, UIConfig, UIManager, RankScorePersonLineData, RankScoreTeamLineData, RankScoreAuditionLineData, RankKickLineData, RaceScoreLineData, RaceKickLineData, RaceAuditionLineData, RaceKickTeamInfo, RaceKickUpInfo, GameResultInfo, _crd, RaceType, ReconnectType, RaceTimeType, GameEndType, GlobalData;

  function _reportPossibleCrUseOfutils(extras) {
    _reporterNs.report("utils", "../common/utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRaceAuditionState(extras) {
    _reporterNs.report("RaceAuditionState", "../component/raceAudition/RaceAuditionLineItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRaceJoinState(extras) {
    _reporterNs.report("RaceJoinState", "../component/raceScore/RaceScoreLineItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHttpConfig(extras) {
    _reporterNs.report("HttpConfig", "./HttpConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIConfig(extras) {
    _reporterNs.report("UIConfig", "./UIConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIManager(extras) {
    _reporterNs.report("UIManager", "./UIManager", _context.meta, extras);
  }

  _export({
    RankScorePersonLineData: void 0,
    RankScoreTeamLineData: void 0,
    RankScoreAuditionLineData: void 0,
    RankKickLineData: void 0,
    RaceScoreLineData: void 0,
    RaceKickLineData: void 0,
    RaceAuditionLineData: void 0,
    RaceKickTeamInfo: void 0,
    RaceKickUpInfo: void 0,
    GameResultInfo: void 0,
    RaceType: void 0,
    ReconnectType: void 0,
    RaceTimeType: void 0,
    GameEndType: void 0,
    GlobalData: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      utils = _unresolved_2.utils;
    }, function (_unresolved_3) {
      RaceAuditionState = _unresolved_3.RaceAuditionState;
    }, function (_unresolved_4) {
      RaceJoinState = _unresolved_4.RaceJoinState;
    }, function (_unresolved_5) {
      HttpConfig = _unresolved_5.HttpConfig;
    }, function (_unresolved_6) {
      UIConfig = _unresolved_6.UIConfig;
    }, function (_unresolved_7) {
      UIManager = _unresolved_7.UIManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dfbcabaGgtACYUvZ/rbR77b", "GlobalData", undefined);

      (function (RaceType) {
        RaceType[RaceType["none"] = 0] = "none";
        RaceType[RaceType["score"] = 1] = "score";
        RaceType[RaceType["kick"] = 2] = "kick";
        RaceType[RaceType["audition"] = 3] = "audition";
      })(RaceType || _export("RaceType", RaceType = {}));

      (function (ReconnectType) {
        ReconnectType[ReconnectType["none"] = -1] = "none";
        ReconnectType[ReconnectType["free"] = 1] = "free";
        ReconnectType[ReconnectType["kick"] = 2] = "kick";
        ReconnectType[ReconnectType["score"] = 3] = "score";
        ReconnectType[ReconnectType["audition"] = 4] = "audition";
      })(ReconnectType || _export("ReconnectType", ReconnectType = {}));

      (function (RaceTimeType) {
        RaceTimeType[RaceTimeType["register"] = 1] = "register";
        RaceTimeType[RaceTimeType["wait"] = 2] = "wait";
        RaceTimeType[RaceTimeType["start"] = 3] = "start";
      })(RaceTimeType || _export("RaceTimeType", RaceTimeType = {}));

      (function (GameEndType) {
        GameEndType[GameEndType["free"] = 1] = "free";
        GameEndType[GameEndType["kick_1"] = 2] = "kick_1";
        GameEndType[GameEndType["kick_2"] = 3] = "kick_2";
        GameEndType[GameEndType["kick_3"] = 4] = "kick_3";
        GameEndType[GameEndType["score_1"] = 5] = "score_1";
        GameEndType[GameEndType["score_2"] = 6] = "score_2";
        GameEndType[GameEndType["audition"] = 7] = "audition";
      })(GameEndType || _export("GameEndType", GameEndType = {}));

      (function (_GlobalData) {
        var sceneName = _GlobalData.sceneName = {
          start: "Start",
          lobby: "Lobby",
          game: "Game"
        };
        var gameType = _GlobalData.gameType = {
          /**1*/
          free: 1,
          //自由赛

          /**2*/
          kick: 2,
          //淘汰赛

          /**3*/
          score: 3,
          //积分赛

          /**4*/
          audition: 4 //海选赛

        };
        var keyCards = _GlobalData.keyCards = {
          1: "A",
          2: "2",
          3: "3",
          4: "4",
          5: "5",
          6: "6",
          7: "7",
          8: "8",
          9: "9",
          10: "10",
          11: "J",
          12: "Q",
          13: "K"
        };
        var keyLevelCards = _GlobalData.keyLevelCards = {
          2: 2,
          3: 3,
          4: 4,
          5: 5,
          6: 6,
          7: 7,
          8: 8,
          9: 9,
          10: 10,
          11: 11,
          12: 12,
          13: 13,
          14: 1
        };
        var viewId = _GlobalData.viewId = {
          up: 0,
          //上家
          self: 1,
          //自己
          down: 2,
          //下家
          opposite: 3 //对家

        };
        var MAXPLAYER = _GlobalData.MAXPLAYER = 4;
        var localEvent = _GlobalData.localEvent = {
          RaceScoreLine: "RaceScoreLine",
          RaceKickLine: "RaceKickLine",
          RaceAuditionLine: "RaceAuditionLine",
          LookKickGameInfo: "LookKickGameInfo",
          HideUpDownUserHead: "HideUpDownUserHead",
          //隐藏左右头像
          UpdateScore: "UpdateScore",
          //积分
          GameError: "GameError",
          //游戏内出错
          ForceExitGame: "ForceExitGame",
          //强制退出
          KickGameInfo: "KickGameInfo",
          //淘汰赛查询
          SocketError: "SocketError",
          //socket出错
          FirstUpdate: "FirstUpdate",
          //首次登录
          UpdateLevelCard: "UpdateLevelCard",
          //级牌
          ////////////////C S////////////////
          UserLogin: "UserLogin",
          //登录
          CreateRoom: "CreateRoom",
          //创建房间
          JoinRoomResult: "JoinRoomResult",
          //加入房间结果(成功,失败)
          UserList: "UserList",
          //用户信息
          StartHandCard: "StartHandCard",
          //开始游戏(手牌)
          OutCardTime: "OutCardTime",
          //出牌时间
          HandleBtn: "HandleBtn",
          //按钮
          OutCards: "OutCards",
          //出牌
          LeftCards: "LeftCards",
          //剩余牌(少于10张才提示)
          HaveWindy: "HaveWindy",
          //接风
          UserWin: "UserWin",
          //有人走了
          LeftCardsBg: "LeftCardsBg",
          //一直显示
          NewCircle: "NewCircle",
          //新一圈
          NoCard: "NoCard",
          //抗贡
          UpCard: "UpCard",
          //上贡
          ReviceCard: "ReviceCard",
          //回贡人拿到了上贡的牌
          DownCard: "DownCard",
          //回贡
          ReviceBtn: "ReviceBtn",
          //回贡按钮
          ReviceCardFinish: "ReviceCardFinish",
          //回贡全部完成
          ReviceCardSuccess: "ReviceCardSuccess",
          //回贡成功
          KangGong: "KangGong",
          //抗贡
          GameFinish: "GameFinish",
          //结算
          GameFinishCards: "GameFinishCards",
          //玩家剩余的牌
          LeftCardCnt: "LeftCardCnt",
          //剩余牌张数(只在手牌,断线存在)
          ReconnectOutCard: "ReconnectOutCard",
          //断线重连已出的牌
          Reconnect: "Reconnect",
          //断线重连
          AgainGame: "AgainGame",
          //再来一局
          KickGameStart: "KickGameStart",
          //淘汰赛开赛通知
          KickRoomId: "KickRoomId",
          //淘汰赛房间号
          KickFreeUp: "KickFreeUp",
          //淘汰赛轮空晋级
          GameRestart: "GameRestart",
          //新一轮游戏开始
          KickFinish: "KickFinish",
          //淘汰赛结束
          ScoreFinish: "ScoreFinish",
          //积分赛结束
          ScoreMatchSucces: "ScoreMatchSucces",
          //积分赛(匹配队友成功)
          FreeMatchStart: "FreeMatchStart",
          //自由玩开始匹配
          FreeMatchTimeOut: "FreeMatchTimeOut",
          //自由玩匹配超时
          ReEnterGame: "ReEnterGame",
          //重连进入游戏
          AuditionMatchStart: "AuditionMatchStart",
          //海选赛开始匹配
          AuditionMatchTimeOut: "AuditionMatchTimeOut",
          //海选赛匹配超时
          AuditionRoomId: "AuditionRoomId" //海选赛房间号

        };
        var C2S_Event = _GlobalData.C2S_Event = {
          Ping: 1,
          //心跳（每秒钟一次，3秒无心跳自动断线)
          Login: 2,
          //登录
          CreateRoom: 10,
          //创建房间
          JoinRoom: 11,
          //自由玩加入房间
          ContinueGame: 12,
          //继续游戏(也用于游戏开始先发12)
          TestAddUser: 13,
          //增加机器人
          OutCards: 14,
          //出牌
          ChangeSeat: 15,
          //换座位
          ExitGame: 16,
          //退出房间
          NoOutCards: 17,
          //不出牌
          RebackCard: 18,
          //回贡
          ///////////////////自由匹配///////////////////
          FreeMatch: 19,
          //自由玩匹配
          CancelFreeMatch: 20,
          //自由玩取消匹配
          OutGame: 21,
          //查询淘汰赛状态
          ///////////////////海选赛匹配///////////////////
          AuditionMatch: 30,
          //海选赛匹配
          JoinAuditionRoom: 31,
          //海选赛加入房间
          CancelAuditionMatch: 32,
          //海选赛取消匹配
          ///////////////淘汰赛///////////////
          KickJoinRoom: 100,
          //加入淘汰赛房间
          ScoreJoinRoom: 101 //加入积分赛房间

        };
        var S2C_Event = _GlobalData.S2C_Event = {
          /**1  心跳*/
          Pong: 1,

          /**2 登录*/
          Login: 2,

          /**10 创建房间*/
          CreateRoom: 10,

          /**11 加入房间成功*/
          JoinRoomSuccess: 11,

          /**12 加入房间失败*/
          JoinRoomFail: 12,

          /**13 房间用户列表变动*/
          UserList: 13,

          /**14 开始游戏(手牌)*/
          StartHandCard: 14,

          /**15 按钮*/
          HandleBtn: 15,

          /**16 出牌时间*/
          OutCardTime: 16,

          /**17 出牌*/
          OutCards: 17,

          /**18 有人胜利*/
          UserWin: 18,

          /**19 结算*/
          GameFinish: 19,

          /**20 接风*/
          HaveWindy: 20,

          /**21 抗贡*/
          NoCard: 21,

          /**22 上贡*/
          UpCard: 22,

          /**23 回贡*/
          DownCard: 23,

          /**24 剩余牌*/
          LeftCards: 24,

          /**25 新一圈*/
          NewCircle: 25,

          /**26 出牌成功*/
          OutCardSuccess: 26,

          /**27 收贡人拿到了上贡的牌*/
          ReviceCardDownUp: 27,

          /**28 全部回贡完成*/
          ReviceCardFinish: 28,

          /**29 回贡成功*/
          ReviceCardSuccess: 29,

          /**30 上贡人拿到了回贡的牌*/
          ReviceCardUpDown: 30,

          /**31 自动回牌*/
          DownCardAuto: 31,

          /**32 剩余牌的张数*/
          LeftCardCnt: 32,

          /**33 断线已出的牌*/
          ReconnectOutCard: 33,

          /**34 登录失败*/
          ReconnectError: 34,

          /**35 强制退出*/
          ForceExitGame: 35,

          /**36 查询淘汰赛状态*/
          OutGame: 36,

          /**37 断线抗贡信息*/
          ReconnecteKangGong: 37,

          /**38 所有玩家剩余的牌*/
          UserCardsList: 38,

          /**40 断线重连*/
          Reconnect: 40,

          /**41 弹出回贡按钮*/
          ReviceBtn: 41,

          /**42 自由玩开始匹配*/
          FreeMatchStart: 42,

          /**43 自由玩匹配超时*/
          FreeMatchTimeOut: 43,

          /**50 海选赛开始匹配*/
          AuditionMatchStart: 50,

          /**51 海选赛匹配成功*/
          AuditionMatchSuccess: 51,

          /**52 海选赛匹配超时*/
          AuditionMatchTimeOut: 52,

          /**100 淘汰赛开始通知*/
          KickGameStart: 100,

          /**101 获得淘汰赛房间号*/
          KickRoomId: 101,

          /**102 淘汰赛轮空晋级*/
          KickFreeUp: 102,

          /**103 淘汰赛结束*/
          KickFinish: 103,

          /**105 积分赛用户轮空*/
          ScoreFreeUp: 105,

          /**106 积分赛(匹配队友成功)*/
          ScoreMatchSucces: 106,

          /**107 积分赛结束*/
          ScoreFinish: 107,

          /**110 新一轮游戏开始*/
          GameRestart: 110,

          /**400 出错*/
          Error: 400
        };
        var cardInfo = _GlobalData.cardInfo = {
          /**
          * 当前的级牌（即参谋)
          */
          levelCard: 1,

          /**
          * 当前进度 1/3
          */
          curRate: "",

          /**
          * 逢人配牌色红桃
          */
          unitCardColor: 0x02,

          /**
           * 自由赛 积分赛 淘汰赛
           */
          gameType: gameType.free,

          /**
           * 贡牌
          */
          giveCard: null,

          /**
          * 房间号
          */
          roomId: 0,

          /**
          * 游戏总时间
           */
          time: 0,

          /**
          * 游戏当前局数
          */
          num: 0,

          /**
           * 游戏最大局数
          */
          maxnum: 0,

          /**
          * 打自己的
          */
          isMy: false,

          /**
           * 打自己的
          */
          cardDir: false,
          //true:恢复 false:理牌
          sortCard: false,
          //理牌
          oneCard: false //一键理牌

        };
        var createRoomInfo = _GlobalData.createRoomInfo = {
          timeList: [15, 30],
          time: null //1->15s 2->30s

        };
        var gameResultInfo = _GlobalData.gameResultInfo = {
          scoreList: [],
          //积分
          kickList: [],
          //淘汰
          auditionList: [] //海选

        };
        var teamInfo = _GlobalData.teamInfo = {
          list: []
        };
        var rankScorePersonInfo = _GlobalData.rankScorePersonInfo = {
          list: [],
          my: null
        };
        var rankScoreTeamInfo = _GlobalData.rankScoreTeamInfo = {
          list: [],
          my: null
        };
        var raceScoreDataInfo = _GlobalData.raceScoreDataInfo = {
          list: []
        };
        var raceKickDataInfo = _GlobalData.raceKickDataInfo = {
          list: []
        };
        var raceAuditionDataInfo = _GlobalData.raceAuditionDataInfo = {
          list: []
        };
        var raceKickUpInfo = _GlobalData.raceKickUpInfo = {
          list: []
        };
        var raceAuditionInfo = _GlobalData.raceAuditionInfo = {
          list: []
        };
        var loginInfo = _GlobalData.loginInfo = {
          code: "11",
          token: ""
        };
        var userInfo = _GlobalData.userInfo = {
          haveToken: false,
          //登录获取的token
          user_id: 0,
          //用户id
          head_img: "",
          //头像
          name: "",
          //昵称
          group_id: 0,
          group_name: "",
          score: 0,
          //积分
          isOnline: false
        };

        function requestLogin(cb) {
          var url = (_crd && HttpConfig === void 0 ? (_reportPossibleCrUseOfHttpConfig({
            error: Error()
          }), HttpConfig) : HttpConfig).getUrl((_crd && HttpConfig === void 0 ? (_reportPossibleCrUseOfHttpConfig({
            error: Error()
          }), HttpConfig) : HttpConfig).Login);
          var sendData = {
            code: GlobalData.loginInfo.code
          };
          console.log("code -------> ", sendData); //强制加载wait成功后,再请求接口,否则可能导致接口过快返回,在实例化wait前,隐藏wait失败

          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).Instace.showUI({
            path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
              error: Error()
            }), UIConfig) : UIConfig).WaitItemKey,
            data: {
              opacity: 0.5,
              des: "加载中..."
            },
            callBack: () => {
              (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
                error: Error()
              }), utils) : utils).sendHttpRequest({
                url: url,
                method: "POST",
                data: (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
                  error: Error()
                }), utils) : utils).toJson(sendData),
                success: function success(data) {
                  // console.log("Login success", data);
                  if (data) {
                    loginInfo.token = data.token;
                  }

                  if (cb.success) cb.success();
                },
                fail: function fail(data) {
                  console.log("Login fail ", data);
                  (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
                    error: Error()
                  }), UIManager) : UIManager).Instace.showUI({
                    path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
                      error: Error()
                    }), UIConfig) : UIConfig).MessageHintKey,
                    data: data
                  });
                  if (cb.fail) cb.fail();
                },
                complete: function complete() {
                  (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
                    error: Error()
                  }), UIManager) : UIManager).Instace.hideUI((_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
                    error: Error()
                  }), UIConfig) : UIConfig).WaitItemKey);
                }
              });
            }
          });
        }

        _GlobalData.requestLogin = requestLogin;

        function requestGetUserInfo(cb) {
          var url = (_crd && HttpConfig === void 0 ? (_reportPossibleCrUseOfHttpConfig({
            error: Error()
          }), HttpConfig) : HttpConfig).getUrl((_crd && HttpConfig === void 0 ? (_reportPossibleCrUseOfHttpConfig({
            error: Error()
          }), HttpConfig) : HttpConfig).GetUserInfo);
          var sendData = {
            token: GlobalData.loginInfo.token
          };
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).Instace.showUI({
            path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
              error: Error()
            }), UIConfig) : UIConfig).WaitItemKey,
            data: {
              opacity: 0.5,
              des: "加载中..."
            }
          });
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).sendHttpRequest({
            url: url,
            method: "POST",
            data: (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
              error: Error()
            }), utils) : utils).toJson(sendData),
            success: function success(data) {
              console.log("GetUserInfo success", data);
              userInfo.group_id = data.group_id;
              userInfo.group_name = data.group_name;
              userInfo.user_id = data.user_id;
              userInfo.head_img = data.head_img;
              userInfo.score = data.gold;
              userInfo.name = data.name;
              if (cb.success) cb.success();
            },
            fail: function fail(data) {
              console.log("GetUserInfo fail ", data);
              (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
                error: Error()
              }), UIManager) : UIManager).Instace.showUI({
                path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
                  error: Error()
                }), UIConfig) : UIConfig).MessageHintKey,
                data: data
              });
              if (cb.fail) cb.fail();
            },
            complete: function complete() {
              console.log("GetUserInfo complete ");
              (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
                error: Error()
              }), UIManager) : UIManager).Instace.hideUI((_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
                error: Error()
              }), UIConfig) : UIConfig).WaitItemKey);
            }
          });
        }

        _GlobalData.requestGetUserInfo = requestGetUserInfo;

        function requestDismass(game_id, zu_id, cb) {
          var url = (_crd && HttpConfig === void 0 ? (_reportPossibleCrUseOfHttpConfig({
            error: Error()
          }), HttpConfig) : HttpConfig).getUrl((_crd && HttpConfig === void 0 ? (_reportPossibleCrUseOfHttpConfig({
            error: Error()
          }), HttpConfig) : HttpConfig).CancelGameZu);
          var sendData = {
            token: GlobalData.loginInfo.token,
            game_id: game_id,
            zu_id: zu_id
          };
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).Instace.showUI({
            path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
              error: Error()
            }), UIConfig) : UIConfig).WaitItemKey,
            data: {
              opacity: 0.5,
              des: "加载中..."
            }
          });
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).sendHttpRequest({
            url: url,
            method: "POST",
            data: (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
              error: Error()
            }), utils) : utils).toJson(sendData),
            success: function success(data) {
              console.log("CancelGameZu success", data);
              if (cb.success) cb.success();
            },
            fail: function fail(data) {
              console.log("CancelGameZu fail ", data);
              (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
                error: Error()
              }), UIManager) : UIManager).Instace.showUI({
                path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
                  error: Error()
                }), UIConfig) : UIConfig).MessageHintKey,
                data: data
              });
              if (cb.fail) cb.fail();
            },
            complete: function complete() {
              (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
                error: Error()
              }), UIManager) : UIManager).Instace.hideUI((_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
                error: Error()
              }), UIConfig) : UIConfig).WaitItemKey);
            }
          });
        }

        _GlobalData.requestDismass = requestDismass;

        function requestOutGameList(cb) {
          var url = (_crd && HttpConfig === void 0 ? (_reportPossibleCrUseOfHttpConfig({
            error: Error()
          }), HttpConfig) : HttpConfig).getUrl((_crd && HttpConfig === void 0 ? (_reportPossibleCrUseOfHttpConfig({
            error: Error()
          }), HttpConfig) : HttpConfig).QueryOutGameList);
          var sendData = {
            token: GlobalData.loginInfo.token,
            page: 1,
            limit: 1000
          };
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).Instace.showUI({
            path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
              error: Error()
            }), UIConfig) : UIConfig).WaitItemKey,
            data: {
              opacity: 0.5,
              des: "加载中..."
            }
          });
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).sendHttpRequest({
            url: url,
            method: "POST",
            data: (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
              error: Error()
            }), utils) : utils).toJson(sendData),
            success: function success(data) {
              console.log("QueryOutGameList success", data);
              GlobalData.raceKickDataInfo.list = [];

              if (data && data.length > 0) {
                var nowTime = new Date().valueOf();

                for (var i = 0; i < data.length; i++) {
                  var element = data[i];
                  var item = new RaceKickLineData();
                  item.id = element.id;
                  item.state = element.apply;
                  item.currentNum = element.user_num;
                  item.totalNum = element.max_num;
                  item.gameTitle = element.game_title;
                  item.gameStartTime = element.start_time;
                  item.registerEndTime = element.end_time;
                  item.end_timestamp = element.end_timestamp * 1000;
                  item.start_timestamp = element.start_timestamp * 1000; // if (i == 0) {
                  //     item.registerEndTime = "2023-08-17 11:07:10";
                  //     item.gameStartTime = "2023-08-17 11:07:50";
                  //     item.state = RaceJoinState.done;
                  // }

                  item.leftTime = 0;
                  var startTime = item.start_timestamp;
                  var endTime = item.end_timestamp;

                  if (nowTime < endTime) {
                    if (item.state == (_crd && RaceJoinState === void 0 ? (_reportPossibleCrUseOfRaceJoinState({
                      error: Error()
                    }), RaceJoinState) : RaceJoinState).done) {
                      item.timeState = RaceTimeType.wait;
                      item.leftTime = Math.floor((startTime - nowTime) / 1000);
                    } else if (item.state == (_crd && RaceJoinState === void 0 ? (_reportPossibleCrUseOfRaceJoinState({
                      error: Error()
                    }), RaceJoinState) : RaceJoinState).do) {
                      item.timeState = RaceTimeType.register;
                      item.leftTime = Math.floor((endTime - nowTime) / 1000);
                    }
                  } else if (nowTime < startTime) {
                    item.timeState = RaceTimeType.wait;

                    if (item.state == 1) {
                      item.leftTime = Math.floor((startTime - nowTime) / 1000);
                    }
                  } else if (nowTime > startTime) {
                    item.timeState = RaceTimeType.start;
                  }

                  GlobalData.raceKickDataInfo.list.push(item);
                }
              } else {
                GlobalData.raceKickDataInfo.list = [];
              }

              console.log("GlobalData.raceKickDataInfo.list--> ", GlobalData.raceKickDataInfo.list);
              if (cb.success) cb.success();
            },
            fail: function fail(data) {
              console.log("QueryOutGameList fail ", data);
              (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
                error: Error()
              }), UIManager) : UIManager).Instace.showUI({
                path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
                  error: Error()
                }), UIConfig) : UIConfig).MessageHintKey,
                data: data
              });
              if (cb.fail) cb.fail();
            },
            complete: function complete() {
              (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
                error: Error()
              }), UIManager) : UIManager).Instace.hideUI((_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
                error: Error()
              }), UIConfig) : UIConfig).WaitItemKey);
            }
          });
        }

        _GlobalData.requestOutGameList = requestOutGameList;

        function requestScoreGameList(cb) {
          var url = (_crd && HttpConfig === void 0 ? (_reportPossibleCrUseOfHttpConfig({
            error: Error()
          }), HttpConfig) : HttpConfig).getUrl((_crd && HttpConfig === void 0 ? (_reportPossibleCrUseOfHttpConfig({
            error: Error()
          }), HttpConfig) : HttpConfig).QueryScoreGameList);
          var sendData = {
            token: GlobalData.loginInfo.token,
            page: 1,
            limit: 1000
          };
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).Instace.showUI({
            path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
              error: Error()
            }), UIConfig) : UIConfig).WaitItemKey,
            data: {
              opacity: 0.5,
              des: "加载中..."
            }
          });
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).sendHttpRequest({
            url: url,
            method: "POST",
            data: (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
              error: Error()
            }), utils) : utils).toJson(sendData),
            success: function success(data) {
              console.log("QueryScoreGameList success", data);
              GlobalData.raceScoreDataInfo.list = [];

              if (data && data.length > 0) {
                var nowTime = new Date().valueOf();

                for (var i = 0; i < data.length; i++) {
                  var element = data[i];
                  var item = new RaceScoreLineData();
                  item.id = element.id;
                  item.state = element.apply;
                  item.currentNum = element.user_num;
                  item.totalNum = element.max_num;
                  item.gameTitle = element.game_title;
                  item.gameStartTime = element.start_time;
                  item.registerEndTime = element.end_time;
                  item.end_timestamp = element.end_timestamp * 1000;
                  item.start_timestamp = element.start_timestamp * 1000;
                  item.gameType = element.game_type; // if (i == 0) {
                  //     item.registerEndTime = "2023-08-18 10:25:40";
                  //     item.gameStartTime = "2023-08-19 9:15:50";
                  //     item.state = RaceJoinState.done;
                  // }

                  item.leftTime = 0;
                  var startTime = item.start_timestamp;
                  var endTime = item.end_timestamp;

                  if (nowTime < endTime) {
                    if (item.state == (_crd && RaceJoinState === void 0 ? (_reportPossibleCrUseOfRaceJoinState({
                      error: Error()
                    }), RaceJoinState) : RaceJoinState).done) {
                      item.timeState = RaceTimeType.wait;
                      item.leftTime = Math.floor((startTime - nowTime) / 1000);
                    } else if (item.state == (_crd && RaceJoinState === void 0 ? (_reportPossibleCrUseOfRaceJoinState({
                      error: Error()
                    }), RaceJoinState) : RaceJoinState).do) {
                      item.timeState = RaceTimeType.register;
                      item.leftTime = Math.floor((endTime - nowTime) / 1000);
                    }
                  } else if (nowTime < startTime) {
                    item.timeState = RaceTimeType.wait;

                    if (item.state == 1) {
                      item.leftTime = Math.floor((startTime - nowTime) / 1000);
                    }
                  } else if (nowTime > startTime) {
                    item.timeState = RaceTimeType.start;
                  }

                  GlobalData.raceScoreDataInfo.list.push(item);
                }
              } else {
                GlobalData.raceScoreDataInfo.list = [];
              }

              console.log("GlobalData.raceScoreDataInfo.list--> ", GlobalData.raceScoreDataInfo.list);
              if (cb.success) cb.success();
            },
            fail: function fail(data) {
              console.log("QueryOutGameList fail ", data);
              (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
                error: Error()
              }), UIManager) : UIManager).Instace.showUI({
                path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
                  error: Error()
                }), UIConfig) : UIConfig).MessageHintKey,
                data: data
              });
              if (cb.fail) cb.fail();
            },
            complete: function complete() {
              (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
                error: Error()
              }), UIManager) : UIManager).Instace.hideUI((_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
                error: Error()
              }), UIConfig) : UIConfig).WaitItemKey);
            }
          });
        }

        _GlobalData.requestScoreGameList = requestScoreGameList;

        function requestAuditionGameList(cb) {
          var url = (_crd && HttpConfig === void 0 ? (_reportPossibleCrUseOfHttpConfig({
            error: Error()
          }), HttpConfig) : HttpConfig).getUrl((_crd && HttpConfig === void 0 ? (_reportPossibleCrUseOfHttpConfig({
            error: Error()
          }), HttpConfig) : HttpConfig).QueryAuditionGameList);
          var sendData = {
            token: GlobalData.loginInfo.token,
            page: 1,
            limit: 1000
          };
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).Instace.showUI({
            path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
              error: Error()
            }), UIConfig) : UIConfig).WaitItemKey,
            data: {
              opacity: 0.5,
              des: "加载中..."
            }
          });
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).sendHttpRequest({
            url: url,
            method: "POST",
            data: (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
              error: Error()
            }), utils) : utils).toJson(sendData),
            success: function success(data) {
              console.log("QueryAuditionGameList success", data);
              GlobalData.raceAuditionDataInfo.list = [];

              if (data && data.length > 0) {
                var nowTime = new Date().valueOf();

                for (var i = 0; i < data.length; i++) {
                  var element = data[i];
                  var item = new RaceAuditionLineData();
                  item.id = element.id;
                  item.gameTitle = element.game_title;
                  item.startTime = element.start_time;
                  item.endTime = element.end_time;
                  item.startHour = element.start_hour;
                  item.endHour = element.end_hour;
                  item.end_timestamp = element.end_timestamp * 1000;
                  item.start_timestamp = element.start_timestamp * 1000; // if (i == 0) {
                  //     item.registerEndTime = "2023-08-18 10:25:40";
                  //     item.gameStartTime = "2023-08-19 9:15:50";
                  //     item.state = RaceJoinState.done;
                  // }

                  item.leftTime = 0;
                  var startTime = item.start_timestamp;
                  var endTime = item.end_timestamp;

                  if (startTime != endTime) {
                    //不到比赛时间
                    if (nowTime <= startTime) {
                      item.state = (_crd && RaceAuditionState === void 0 ? (_reportPossibleCrUseOfRaceAuditionState({
                        error: Error()
                      }), RaceAuditionState) : RaceAuditionState).pre;
                      item.leftTime = Math.floor((startTime - nowTime) / 1000);
                    } else if (nowTime >= endTime) {
                      //过了比赛时间
                      item.state = (_crd && RaceAuditionState === void 0 ? (_reportPossibleCrUseOfRaceAuditionState({
                        error: Error()
                      }), RaceAuditionState) : RaceAuditionState).pass;
                    } else {
                      //在比赛时间
                      item.state = (_crd && RaceAuditionState === void 0 ? (_reportPossibleCrUseOfRaceAuditionState({
                        error: Error()
                      }), RaceAuditionState) : RaceAuditionState).now;
                      item.leftTime = Math.floor((endTime - nowTime) / 1000);
                    }
                  } else {
                    //特殊情况,全天都可以比赛
                    item.state = (_crd && RaceAuditionState === void 0 ? (_reportPossibleCrUseOfRaceAuditionState({
                      error: Error()
                    }), RaceAuditionState) : RaceAuditionState).allDay;
                  }

                  GlobalData.raceAuditionDataInfo.list.push(item);
                }
              } else {
                GlobalData.raceAuditionDataInfo.list = [];
              }

              console.log("GlobalData.QueryAuditionGameList.list--> ", GlobalData.raceAuditionDataInfo.list);
              if (cb.success) cb.success();
            },
            fail: function fail(data) {
              console.log("QueryOutGameList fail ", data);
              (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
                error: Error()
              }), UIManager) : UIManager).Instace.showUI({
                path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
                  error: Error()
                }), UIConfig) : UIConfig).MessageHintKey,
                data: data
              });
              if (cb.fail) cb.fail();
            },
            complete: function complete() {
              (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
                error: Error()
              }), UIManager) : UIManager).Instace.hideUI((_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
                error: Error()
              }), UIConfig) : UIConfig).WaitItemKey);
            }
          });
        }

        _GlobalData.requestAuditionGameList = requestAuditionGameList;

        function requestJoinGame(gameId, cb) {
          var url = (_crd && HttpConfig === void 0 ? (_reportPossibleCrUseOfHttpConfig({
            error: Error()
          }), HttpConfig) : HttpConfig).getUrl((_crd && HttpConfig === void 0 ? (_reportPossibleCrUseOfHttpConfig({
            error: Error()
          }), HttpConfig) : HttpConfig).JoinGame);
          var sendData = {
            token: GlobalData.loginInfo.token,
            id: gameId.toString()
          };
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).Instace.showUI({
            path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
              error: Error()
            }), UIConfig) : UIConfig).WaitItemKey,
            data: {
              opacity: 0.5,
              des: "加载中..."
            }
          });
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).sendHttpRequest({
            url: url,
            method: "POST",
            data: (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
              error: Error()
            }), utils) : utils).toJson(sendData),
            success: function success(data) {
              console.log("JoinGame success", data);
              if (cb.success) cb.success(data);
            },
            fail: function fail(data) {
              console.log("JoinGame fail ", data);
              (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
                error: Error()
              }), UIManager) : UIManager).Instace.showUI({
                path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
                  error: Error()
                }), UIConfig) : UIConfig).MessageHintKey,
                data: data
              });
              if (cb.fail) cb.fail();
            },
            complete: function complete() {
              (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
                error: Error()
              }), UIManager) : UIManager).Instace.hideUI((_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
                error: Error()
              }), UIConfig) : UIConfig).WaitItemKey);
            }
          });
        }

        _GlobalData.requestJoinGame = requestJoinGame;

        function requestGameUserList(id, cb) {
          var url = (_crd && HttpConfig === void 0 ? (_reportPossibleCrUseOfHttpConfig({
            error: Error()
          }), HttpConfig) : HttpConfig).getUrl((_crd && HttpConfig === void 0 ? (_reportPossibleCrUseOfHttpConfig({
            error: Error()
          }), HttpConfig) : HttpConfig).GetGameUserList);
          var sendData = {
            token: GlobalData.loginInfo.token,
            game_id: id.toString()
          };
          console.log("code -------> ", sendData);
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).Instace.showUI({
            path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
              error: Error()
            }), UIConfig) : UIConfig).WaitItemKey,
            data: {
              opacity: 0.5,
              des: "加载中..."
            }
          });
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).sendHttpRequest({
            url: url,
            method: "POST",
            data: (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
              error: Error()
            }), utils) : utils).toJson(sendData),
            success: function success(data) {
              console.log("GetGameUserList success", data);
              if (cb.success) cb.success(data);
            },
            fail: function fail(data) {
              console.log("GetGameUserList fail ", data);
              (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
                error: Error()
              }), UIManager) : UIManager).Instace.showUI({
                path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
                  error: Error()
                }), UIConfig) : UIConfig).MessageHintKey,
                data: data
              });
              if (cb.fail) cb.fail();
            },
            complete: function complete() {
              (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
                error: Error()
              }), UIManager) : UIManager).Instace.hideUI((_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
                error: Error()
              }), UIConfig) : UIConfig).WaitItemKey);
            }
          });
        }

        _GlobalData.requestGameUserList = requestGameUserList;

        function requestCreateOutGameZu(id, cb) {
          var url = (_crd && HttpConfig === void 0 ? (_reportPossibleCrUseOfHttpConfig({
            error: Error()
          }), HttpConfig) : HttpConfig).getUrl((_crd && HttpConfig === void 0 ? (_reportPossibleCrUseOfHttpConfig({
            error: Error()
          }), HttpConfig) : HttpConfig).CreateOutGameZu);
          var sendData = {
            token: GlobalData.loginInfo.token,
            game_id: id.toString()
          };
          console.log("code -------> ", sendData);
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).Instace.showUI({
            path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
              error: Error()
            }), UIConfig) : UIConfig).WaitItemKey,
            data: {
              opacity: 0.5,
              des: "加载中..."
            }
          });
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).sendHttpRequest({
            url: url,
            method: "POST",
            data: (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
              error: Error()
            }), utils) : utils).toJson(sendData),
            success: function success(data) {
              console.log("CreateOutGameZu success", data);
              if (cb.success) cb.success(data);
            },
            fail: function fail(data) {
              console.log("CreateOutGameZu fail ", data);
              (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
                error: Error()
              }), UIManager) : UIManager).Instace.showUI({
                path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
                  error: Error()
                }), UIConfig) : UIConfig).MessageHintKey,
                data: data
              });
              if (cb.fail) cb.fail();
            },
            complete: function complete() {
              (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
                error: Error()
              }), UIManager) : UIManager).Instace.hideUI((_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
                error: Error()
              }), UIConfig) : UIConfig).WaitItemKey);
            }
          });
        }

        _GlobalData.requestCreateOutGameZu = requestCreateOutGameZu;

        function requestAddOutGameZu(id, cb) {
          var url = (_crd && HttpConfig === void 0 ? (_reportPossibleCrUseOfHttpConfig({
            error: Error()
          }), HttpConfig) : HttpConfig).getUrl((_crd && HttpConfig === void 0 ? (_reportPossibleCrUseOfHttpConfig({
            error: Error()
          }), HttpConfig) : HttpConfig).AddOutGameZu);
          var sendData = {
            token: GlobalData.loginInfo.token,
            zu_id: id.toString()
          };
          console.log("code -------> ", sendData);
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).Instace.showUI({
            path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
              error: Error()
            }), UIConfig) : UIConfig).WaitItemKey,
            data: {
              opacity: 0.5,
              des: "加载中..."
            }
          });
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).sendHttpRequest({
            url: url,
            method: "POST",
            data: (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
              error: Error()
            }), utils) : utils).toJson(sendData),
            success: function success(data) {
              console.log("AddOutGameZu success", data);
              if (cb.success) cb.success(data);
            },
            fail: function fail(data) {
              console.log("AddOutGameZu fail ", data);
              (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
                error: Error()
              }), UIManager) : UIManager).Instace.showUI({
                path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
                  error: Error()
                }), UIConfig) : UIConfig).MessageHintKey,
                data: data
              });
              if (cb.fail) cb.fail();
            },
            complete: function complete() {
              (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
                error: Error()
              }), UIManager) : UIManager).Instace.hideUI((_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
                error: Error()
              }), UIConfig) : UIConfig).WaitItemKey);
            }
          });
        }

        _GlobalData.requestAddOutGameZu = requestAddOutGameZu;

        function requestUserGroup(cb) {
          var url = (_crd && HttpConfig === void 0 ? (_reportPossibleCrUseOfHttpConfig({
            error: Error()
          }), HttpConfig) : HttpConfig).getUrl((_crd && HttpConfig === void 0 ? (_reportPossibleCrUseOfHttpConfig({
            error: Error()
          }), HttpConfig) : HttpConfig).QueryUserGroup);
          var sendData = {
            token: GlobalData.loginInfo.token,
            page: 1,
            limit: 1000
          };
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).Instace.showUI({
            path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
              error: Error()
            }), UIConfig) : UIConfig).WaitItemKey,
            data: {
              opacity: 0.5,
              des: "加载中..."
            }
          });
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).sendHttpRequest({
            url: url,
            method: "POST",
            data: (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
              error: Error()
            }), utils) : utils).toJson(sendData),
            success: function success(data) {
              teamInfo.list = [];
              console.log("QueryUserGroup success", data);

              if (data && data.length > 0) {
                for (var i = 0; i < data.length; i++) {
                  var element = data[i];
                  teamInfo.list.push({
                    rank: i + 1,
                    score: element.gold,
                    head: element.head_img,
                    name: element.name
                  });
                }
              } else {
                teamInfo.list = [];
              }

              if (cb.success) cb.success(data);
            },
            fail: function fail(data) {
              console.log("QueryUserGroup fail ", data);
              (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
                error: Error()
              }), UIManager) : UIManager).Instace.showUI({
                path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
                  error: Error()
                }), UIConfig) : UIConfig).MessageHintKey,
                data: data
              });
              if (cb.fail) cb.fail();
            },
            complete: function complete() {
              (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
                error: Error()
              }), UIManager) : UIManager).Instace.hideUI((_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
                error: Error()
              }), UIConfig) : UIConfig).WaitItemKey);
            }
          });
        }

        _GlobalData.requestUserGroup = requestUserGroup;

        function requestUpList(gameId, cb) {
          var url = (_crd && HttpConfig === void 0 ? (_reportPossibleCrUseOfHttpConfig({
            error: Error()
          }), HttpConfig) : HttpConfig).getUrl((_crd && HttpConfig === void 0 ? (_reportPossibleCrUseOfHttpConfig({
            error: Error()
          }), HttpConfig) : HttpConfig).QueryUpList);
          var sendData = {
            token: GlobalData.loginInfo.token,
            game_id: gameId.toString()
          };
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).Instace.showUI({
            path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
              error: Error()
            }), UIConfig) : UIConfig).WaitItemKey,
            data: {
              opacity: 0.5,
              des: "加载中..."
            }
          });
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).sendHttpRequest({
            url: url,
            method: "POST",
            data: (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
              error: Error()
            }), utils) : utils).toJson(sendData),
            success: function success(data) {
              console.log("QueryUpList success", data);

              if (data && data.length > 0) {
                raceKickUpInfo.list = data;
              } else {
                raceKickUpInfo.list = [];
              }

              if (cb.success) cb.success(data);
            },
            fail: function fail(data) {
              console.log("QueryUpList fail ", data);
              (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
                error: Error()
              }), UIManager) : UIManager).Instace.showUI({
                path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
                  error: Error()
                }), UIConfig) : UIConfig).MessageHintKey,
                data: data
              });
              if (cb.fail) cb.fail();
            },
            complete: function complete() {
              (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
                error: Error()
              }), UIManager) : UIManager).Instace.hideUI((_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
                error: Error()
              }), UIConfig) : UIConfig).WaitItemKey);
            }
          });
        }

        _GlobalData.requestUpList = requestUpList;

        function requestAuditionUpList(gameId, cb) {
          var url = (_crd && HttpConfig === void 0 ? (_reportPossibleCrUseOfHttpConfig({
            error: Error()
          }), HttpConfig) : HttpConfig).getUrl((_crd && HttpConfig === void 0 ? (_reportPossibleCrUseOfHttpConfig({
            error: Error()
          }), HttpConfig) : HttpConfig).AuditionUpList);
          var sendData = {
            token: GlobalData.loginInfo.token,
            game_id: gameId.toString()
          };
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).Instace.showUI({
            path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
              error: Error()
            }), UIConfig) : UIConfig).WaitItemKey,
            data: {
              opacity: 0.5,
              des: "加载中..."
            }
          });
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).sendHttpRequest({
            url: url,
            method: "POST",
            data: (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
              error: Error()
            }), utils) : utils).toJson(sendData),
            success: function success(data) {
              console.log("AuditionUpList success", data);

              if (data && data.length > 0) {
                raceAuditionInfo.list = data;
              } else {
                raceAuditionInfo.list = [];
              }

              if (cb.success) cb.success(data);
            },
            fail: function fail(data) {
              console.log("AuditionUpList fail ", data);
              (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
                error: Error()
              }), UIManager) : UIManager).Instace.showUI({
                path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
                  error: Error()
                }), UIConfig) : UIConfig).MessageHintKey,
                data: data
              });
              if (cb.fail) cb.fail();
            },
            complete: function complete() {
              (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
                error: Error()
              }), UIManager) : UIManager).Instace.hideUI((_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
                error: Error()
              }), UIConfig) : UIConfig).WaitItemKey);
            }
          });
        }

        _GlobalData.requestAuditionUpList = requestAuditionUpList;

        function requestScoreUserList(gameId, cb) {
          var url = (_crd && HttpConfig === void 0 ? (_reportPossibleCrUseOfHttpConfig({
            error: Error()
          }), HttpConfig) : HttpConfig).getUrl((_crd && HttpConfig === void 0 ? (_reportPossibleCrUseOfHttpConfig({
            error: Error()
          }), HttpConfig) : HttpConfig).ScoreUserList);
          var sendData = {
            token: GlobalData.loginInfo.token,
            game_id: gameId.toString()
          };
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).Instace.showUI({
            path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
              error: Error()
            }), UIConfig) : UIConfig).WaitItemKey,
            data: {
              opacity: 0.5,
              des: "加载中..."
            }
          });
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).sendHttpRequest({
            url: url,
            method: "POST",
            data: (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
              error: Error()
            }), utils) : utils).toJson(sendData),
            success: function success(data) {
              console.log("ScoreUserList success", data);
              rankScorePersonInfo.list = [];

              if (data && data.length > 0) {
                for (var i = 0; i < data.length; i++) {
                  var element = data[i];
                  var item = new RankScorePersonLineData();
                  item.rank = i + 1;
                  item.head = element.head_img;
                  item.score = element.score;
                  item.name = element.nick_name;

                  if (element.user_id == userInfo.user_id) {
                    rankScorePersonInfo.my = item;
                  }

                  rankScorePersonInfo.list.push(item);
                }
              } else {
                rankScorePersonInfo.list = [];
                rankScorePersonInfo.my = null;
              }

              if (cb.success) cb.success(data);
            },
            fail: function fail(data) {
              console.log("ScoreUserList fail ", data);
              (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
                error: Error()
              }), UIManager) : UIManager).Instace.showUI({
                path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
                  error: Error()
                }), UIConfig) : UIConfig).MessageHintKey,
                data: data
              });
              if (cb.fail) cb.fail();
            },
            complete: function complete() {
              (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
                error: Error()
              }), UIManager) : UIManager).Instace.hideUI((_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
                error: Error()
              }), UIConfig) : UIConfig).WaitItemKey);
            }
          });
        }

        _GlobalData.requestScoreUserList = requestScoreUserList;

        function requestScoreGroupList(gameId, cb) {
          var url = (_crd && HttpConfig === void 0 ? (_reportPossibleCrUseOfHttpConfig({
            error: Error()
          }), HttpConfig) : HttpConfig).getUrl((_crd && HttpConfig === void 0 ? (_reportPossibleCrUseOfHttpConfig({
            error: Error()
          }), HttpConfig) : HttpConfig).ScoreGroupList);
          var sendData = {
            token: GlobalData.loginInfo.token,
            game_id: gameId.toString()
          };
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).Instace.showUI({
            path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
              error: Error()
            }), UIConfig) : UIConfig).WaitItemKey,
            data: {
              opacity: 0.5,
              des: "加载中..."
            }
          });
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).sendHttpRequest({
            url: url,
            method: "POST",
            data: (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
              error: Error()
            }), utils) : utils).toJson(sendData),
            success: function success(data) {
              console.log("ScoreGroupList success", data);
              rankScoreTeamInfo.list = [];

              if (data && data.length > 0) {
                for (var i = 0; i < data.length; i++) {
                  var element = data[i];
                  var item = new RankScoreTeamLineData();
                  item.rank = i + 1;
                  item.head = element.head_img;
                  item.score = element.score;
                  item.name = element.group_name;

                  if (element.group_id == userInfo.group_id) {
                    rankScoreTeamInfo.my = item;
                  }

                  rankScoreTeamInfo.list.push(item);
                }
              } else {
                rankScoreTeamInfo.list = [];
                rankScoreTeamInfo.my = null;
              }

              if (cb.success) cb.success(data);
            },
            fail: function fail(data) {
              console.log("ScoreGroupList fail ", data);
              (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
                error: Error()
              }), UIManager) : UIManager).Instace.showUI({
                path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
                  error: Error()
                }), UIConfig) : UIConfig).MessageHintKey,
                data: data
              });
              if (cb.fail) cb.fail();
            },
            complete: function complete() {
              (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
                error: Error()
              }), UIManager) : UIManager).Instace.hideUI((_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
                error: Error()
              }), UIConfig) : UIConfig).WaitItemKey);
            }
          });
        }

        _GlobalData.requestScoreGroupList = requestScoreGroupList;

        function requestRankScoreData(gameId, callBack) {
          var addIdx = 0;

          var func = function func() {
            addIdx += 1;

            if (addIdx == 2) {
              if (callBack) callBack();
            }
          };

          GlobalData.requestScoreUserList(gameId, {
            success: () => {
              func();
            }
          });
          GlobalData.requestScoreGroupList(gameId, {
            success: () => {
              func();
            }
          });
        }

        _GlobalData.requestRankScoreData = requestRankScoreData;

        function requestResultList(type, cb) {
          var url = (_crd && HttpConfig === void 0 ? (_reportPossibleCrUseOfHttpConfig({
            error: Error()
          }), HttpConfig) : HttpConfig).getUrl((_crd && HttpConfig === void 0 ? (_reportPossibleCrUseOfHttpConfig({
            error: Error()
          }), HttpConfig) : HttpConfig).GameResultList);
          var sendData = {
            token: GlobalData.loginInfo.token,
            type: type.toString(),
            page: 1,
            limit: 1000
          };
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).Instace.showUI({
            path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
              error: Error()
            }), UIConfig) : UIConfig).WaitItemKey,
            data: {
              opacity: 0.5,
              des: "加载中..."
            }
          });
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).sendHttpRequest({
            url: url,
            method: "POST",
            data: (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
              error: Error()
            }), utils) : utils).toJson(sendData),
            success: function success(data) {
              if (data && data.data.length > 0) {
                if (type == RaceType.score) {
                  console.log("GameResultList 积分 success", data);
                  gameResultInfo.scoreList = data.data;
                } else if (type == RaceType.kick) {
                  console.log("GameResultList 淘汰 success", data);
                  gameResultInfo.kickList = data.data;
                } else if (type == RaceType.audition) {
                  console.log("GameResultList 海选 success", data);
                  gameResultInfo.auditionList = data.data;
                }
              } else {
                if (type == RaceType.score) {
                  gameResultInfo.scoreList = [];
                } else if (type == RaceType.kick) {
                  gameResultInfo.kickList = [];
                } else if (type == RaceType.audition) {
                  gameResultInfo.auditionList = [];
                }
              }

              if (cb.success) cb.success(data);
            },
            fail: function fail(data) {
              console.log("GameResultList fail ", data);
              (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
                error: Error()
              }), UIManager) : UIManager).Instace.showUI({
                path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
                  error: Error()
                }), UIConfig) : UIConfig).MessageHintKey,
                data: data
              });
              if (cb.fail) cb.fail();
            },
            complete: function complete() {
              (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
                error: Error()
              }), UIManager) : UIManager).Instace.hideUI((_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
                error: Error()
              }), UIConfig) : UIConfig).WaitItemKey);
            }
          });
        }

        _GlobalData.requestResultList = requestResultList;

        function requestResultListTotal(callBack) {
          var addIdx = 0;

          var func = function func() {
            addIdx += 1;

            if (addIdx == 3) {
              if (callBack) callBack();
            }
          }; //积分


          GlobalData.requestResultList(RaceType.score, {
            success: () => {
              func();
            }
          }); //淘汰

          GlobalData.requestResultList(RaceType.kick, {
            success: () => {
              func();
            }
          }); //海选

          GlobalData.requestResultList(RaceType.audition, {
            success: () => {
              func();
            }
          });
        }

        _GlobalData.requestResultListTotal = requestResultListTotal;
      })(GlobalData || _export("GlobalData", GlobalData = {}));

      //大厅-个人
      _export("RankScorePersonLineData", RankScorePersonLineData = class RankScorePersonLineData {
        constructor() {
          this.rank = void 0;
          this.score = void 0;
          this.head = void 0;
          this.name = void 0;
        } //昵称


      }); //大厅-团队


      _export("RankScoreTeamLineData", RankScoreTeamLineData = class RankScoreTeamLineData {
        constructor() {
          this.rank = void 0;
          this.score = void 0;
          this.head = void 0;
          this.name = void 0;
        } //昵称


      }); //大厅-海选


      _export("RankScoreAuditionLineData", RankScoreAuditionLineData = class RankScoreAuditionLineData {
        constructor() {
          this.rank = void 0;
          this.score = void 0;
          this.head = void 0;
          this.name = void 0;
        } //昵称


      }); //大厅-淘汰


      _export("RankKickLineData", RankKickLineData = class RankKickLineData {
        constructor() {
          this.rank = void 0;
          this.head = void 0;
          this.time = void 0;
          this.type = void 0;
          this.name = void 0;
        } //昵称


      }); //积分赛


      _export("RaceScoreLineData", RaceScoreLineData = class RaceScoreLineData {
        constructor() {
          this.id = void 0;
          this.gameTitle = void 0;
          this.registerEndTime = void 0;
          this.end_timestamp = void 0;
          this.gameStartTime = void 0;
          this.start_timestamp = void 0;
          this.totalNum = void 0;
          this.currentNum = void 0;
          this.gameType = void 0;
          this.leftTime = void 0;
          this.state = void 0;
          this.timeState = void 0;
        } //过期


      }); //淘汰赛


      _export("RaceKickLineData", RaceKickLineData = class RaceKickLineData {
        constructor() {
          this.id = void 0;
          this.gameTitle = void 0;
          this.registerEndTime = void 0;
          this.end_timestamp = void 0;
          this.gameStartTime = void 0;
          this.start_timestamp = void 0;
          this.totalNum = void 0;
          this.currentNum = void 0;
          this.leftTime = void 0;
          this.state = void 0;
          this.timeState = void 0;
        } //过期


      }); //海选赛


      _export("RaceAuditionLineData", RaceAuditionLineData = class RaceAuditionLineData {
        constructor() {
          this.id = void 0;
          this.gameTitle = void 0;
          this.startTime = void 0;
          this.endTime = void 0;
          this.startHour = void 0;
          this.endHour = void 0;
          this.start_timestamp = void 0;
          this.end_timestamp = void 0;
          this.leftTime = void 0;
          this.state = void 0;
        } // pre:开始前  now:开始了  pass:开始后


      }); //淘汰赛(团队详情)


      _export("RaceKickTeamInfo", RaceKickTeamInfo = class RaceKickTeamInfo {
        constructor() {
          this.user_id = void 0;
          this.name = void 0;
          this.head_img = void 0;
          this.captain = void 0;
        } //是否队长 1是 0不是


      }); //淘汰赛(晋级名单)


      _export("RaceKickUpInfo", RaceKickUpInfo = class RaceKickUpInfo {
        constructor() {
          this.user_id = void 0;
          this.nick_name = void 0;
          this.head_img = void 0;
          this.score = void 0;
        } //1晋级 0淘汰


      }); //历史战斗记录


      _export("GameResultInfo", GameResultInfo = class GameResultInfo {
        constructor() {
          this.id = void 0;
          this.game_title = void 0;
          this.start_time = void 0;
          this.user_id = void 0;
          this.game_id = void 0;
          this.score = void 0;
          this.type = void 0;
          this.head_img = void 0;
        } //0未报名 1已报名


      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=07e5dce60c91b023448cb69cb3df662cec8e64fd.js.map