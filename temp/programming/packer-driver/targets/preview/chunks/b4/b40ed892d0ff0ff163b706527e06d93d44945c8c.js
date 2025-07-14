System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, utils, websocket, PbManager, GlobalData, UIConfig, UIManager, UrlConfig, _crd, GameSocket;

  function _reportPossibleCrUseOfutils(extras) {
    _reporterNs.report("utils", "../common/utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfwebsocket(extras) {
    _reporterNs.report("websocket", "../common/websocket", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPbManager(extras) {
    _reporterNs.report("PbManager", "../proto/PbManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalData(extras) {
    _reporterNs.report("GlobalData", "./GlobalData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIConfig(extras) {
    _reporterNs.report("UIConfig", "./UIConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIManager(extras) {
    _reporterNs.report("UIManager", "./UIManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUrlConfig(extras) {
    _reporterNs.report("UrlConfig", "./UrlConfig", _context.meta, extras);
  }

  _export("GameSocket", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      utils = _unresolved_2.utils;
    }, function (_unresolved_3) {
      websocket = _unresolved_3.websocket;
    }, function (_unresolved_4) {
      PbManager = _unresolved_4.PbManager;
    }, function (_unresolved_5) {
      GlobalData = _unresolved_5.GlobalData;
    }, function (_unresolved_6) {
      UIConfig = _unresolved_6.UIConfig;
    }, function (_unresolved_7) {
      UIManager = _unresolved_7.UIManager;
    }, function (_unresolved_8) {
      UrlConfig = _unresolved_8.UrlConfig;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c5900MN1Y9PTouV82tL2h50", "GameSocket", undefined);

      (function (_GameSocket) {
        var gameSocket = null;
        var heartInterval = null;
        var isConnect = false;
        var checkTimeoutId = 0;
        var noHeartbeatTime = 0;

        function initAndConnect() {
          GameSocket.closeSocket();
          var url = (_crd && UrlConfig === void 0 ? (_reportPossibleCrUseOfUrlConfig({
            error: Error()
          }), UrlConfig) : UrlConfig).getSocketUrl();
          init();
          connect(url);
        }

        _GameSocket.initAndConnect = initAndConnect;

        //初始化
        function init() {
          if (!gameSocket) {
            gameSocket = null;
            closeSocket();
          }

          bindSocket();
          clearTimeout();
        }

        function getIsConnect() {
          return isConnect;
        }

        _GameSocket.getIsConnect = getIsConnect;

        function setIsConnect(type) {
          isConnect = type;
        } //绑定回调


        function bindSocket() {
          gameSocket = new (_crd && websocket === void 0 ? (_reportPossibleCrUseOfwebsocket({
            error: Error()
          }), websocket) : websocket)();

          gameSocket.onSocketOpen = () => {
            onGameSocketOpen();
          };

          gameSocket.onSocketMessage = data => {
            onGameSocketMessage(data);
          };

          gameSocket.onSocketError = event => {
            onGameSocketError(event);
          };

          gameSocket.onSocketClose = event => {
            onGameSocketClose();
          };
        }

        function onGameSocketOpen() {
          console.log("onGameSocketOpen");
          var baseInfo = GameMsg.Login.create({
            token: (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).loginInfo.token
          });
          var baseBuffer = GameMsg.Login.encode(baseInfo).finish();
          var sendBuffer = (_crd && PbManager === void 0 ? (_reportPossibleCrUseOfPbManager({
            error: Error()
          }), PbManager) : PbManager).instance.sendMsg((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).C2S_Event.Login, baseBuffer);
          send(sendBuffer);
          startHeart();
          setIsConnect(true);
        }

        function clearTimeout() {
          if (checkTimeoutId != null) {
            clearInterval(checkTimeoutId);
            checkTimeoutId = null;
            noHeartbeatTime = 0;
          }
        } //接收消息


        function onGameSocketMessage(data) {
          var recData = (_crd && PbManager === void 0 ? (_reportPossibleCrUseOfPbManager({
            error: Error()
          }), PbManager) : PbManager).instance.reciveMsg(data);

          if (recData.id != 1) {// console.log("recData ", recData);
          }

          if (recData.id == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).S2C_Event.Pong) {
            // console.log("心跳返回--->");
            clearTimeout();
            checkTimeoutId = setInterval(function () {
              noHeartbeatTime += 1; // 收不到心跳6秒钟,主动断开

              if (noHeartbeatTime > 6) {
                closeSocket();
                (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
                  error: Error()
                }), utils) : utils).send((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                  error: Error()
                }), GlobalData) : GlobalData).localEvent.SocketError);
              }

              console.log("noHeartbeatTime--> ", noHeartbeatTime);
            }, 1000);
          } else if (recData.id == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).S2C_Event.Login) {
            var user = GameMsg.User.decode(recData.msg);
            (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
              error: Error()
            }), utils) : utils).send((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).localEvent.UserLogin, user);
          } else if (recData.id == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).S2C_Event.CreateRoom) {
            var room = GameMsg.Room.decode(recData.msg);
            (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
              error: Error()
            }), utils) : utils).send((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).localEvent.CreateRoom, room);
          } else if (recData.id == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).S2C_Event.JoinRoomSuccess) {
            var users = GameMsg.Room.decode(recData.msg);
            (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
              error: Error()
            }), utils) : utils).send((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).localEvent.JoinRoomResult, true, users.roomId);
          } else if (recData.id == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).S2C_Event.JoinRoomFail) {
            (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
              error: Error()
            }), utils) : utils).send((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).localEvent.JoinRoomResult, false);
          } else if (recData.id == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).S2C_Event.UserList) {
            var _users = GameMsg.UserList.decode(recData.msg);

            (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
              error: Error()
            }), utils) : utils).send((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).localEvent.UserList, _users);
          } else if (recData.id == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).S2C_Event.UserList) {
            var _users2 = GameMsg.UserList.decode(recData.msg);

            (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
              error: Error()
            }), utils) : utils).send((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).localEvent.UserList, _users2);
          } else if (recData.id == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).S2C_Event.StartHandCard) {
            var _users3 = GameMsg.Start.decode(recData.msg);

            (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
              error: Error()
            }), utils) : utils).send((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).localEvent.StartHandCard, _users3);
          } else if (recData.id == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).S2C_Event.OutCardTime) {
            var _users4 = GameMsg.SendCard.decode(recData.msg);

            (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
              error: Error()
            }), utils) : utils).send((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).localEvent.OutCardTime, _users4);
          } else if (recData.id == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).S2C_Event.HandleBtn) {
            var _users5 = GameMsg.NextUser.decode(recData.msg);

            (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
              error: Error()
            }), utils) : utils).send((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).localEvent.HandleBtn, _users5);
          } else if (recData.id == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).S2C_Event.OutCards) {
            var _users6 = GameMsg.SendCard.decode(recData.msg);

            (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
              error: Error()
            }), utils) : utils).send((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).localEvent.OutCards, _users6);
          } else if (recData.id == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).S2C_Event.LeftCards) {
            var _users7 = GameMsg.UserWin.decode(recData.msg);

            (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
              error: Error()
            }), utils) : utils).send((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).localEvent.LeftCards, _users7);
          } else if (recData.id == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).S2C_Event.UserWin) {
            var _users8 = GameMsg.UserWin.decode(recData.msg);

            (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
              error: Error()
            }), utils) : utils).send((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).localEvent.UserWin, _users8);
          } else if (recData.id == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).S2C_Event.HaveWindy) {
            var _users9 = GameMsg.UserWin.decode(recData.msg); // console.log("-----> HaveWindy ", users);


            (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
              error: Error()
            }), utils) : utils).send((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).localEvent.HaveWindy, _users9);
          } else if (recData.id == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).S2C_Event.GameFinish) {
            var _users10 = GameMsg.WinList.decode(recData.msg);

            (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
              error: Error()
            }), utils) : utils).send((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).localEvent.GameFinish, _users10);
          } else if (recData.id == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).S2C_Event.NoCard) {
            var _users11 = GameMsg.KongGong.decode(recData.msg); // console.log("-----> NoCard ", users);


            (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
              error: Error()
            }), utils) : utils).send((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).localEvent.NoCard, _users11);
          } else if (recData.id == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).S2C_Event.UpCard) {
            var _users12 = GameMsg.GongList.decode(recData.msg); // console.log("-----> upCard ", users);


            (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
              error: Error()
            }), utils) : utils).send((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).localEvent.UpCard, _users12);
          } else if (recData.id == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).S2C_Event.ReviceCardDownUp) {
            var _users13 = GameMsg.Gong.decode(recData.msg); // console.log("-----> ReviceCardDownUp ", users);


            (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
              error: Error()
            }), utils) : utils).send((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).localEvent.ReviceCard, _users13, true);
          } else if (recData.id == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).S2C_Event.ReviceCardUpDown) {
            var _users14 = GameMsg.Gong.decode(recData.msg); // console.log("-----> ReviceCardUpDown ", users);


            (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
              error: Error()
            }), utils) : utils).send((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).localEvent.ReviceCard, _users14, false);
          } else if (recData.id == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).S2C_Event.DownCard) {
            var _users15 = GameMsg.Gong.decode(recData.msg); // console.log("-----> downCard ", users);


            (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
              error: Error()
            }), utils) : utils).send((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).localEvent.DownCard, _users15, false);
          } else if (recData.id == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).S2C_Event.ReviceBtn) {
            (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
              error: Error()
            }), utils) : utils).send((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).localEvent.ReviceBtn);
          } else if (recData.id == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).S2C_Event.DownCardAuto) {
            var _users16 = GameMsg.Gong.decode(recData.msg); // console.log("-----> DownCardAuto ", users);


            (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
              error: Error()
            }), utils) : utils).send((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).localEvent.DownCard, _users16, true);
          } else if (recData.id == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).S2C_Event.LeftCardCnt) {
            var _users17 = GameMsg.Cards.decode(recData.msg);

            (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
              error: Error()
            }), utils) : utils).send((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).localEvent.LeftCardCnt, _users17.card);
          } else if (recData.id == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).S2C_Event.ReviceCardFinish) {
            // console.log("-----> ReviceCardFinish ");
            (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
              error: Error()
            }), utils) : utils).send((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).localEvent.ReviceCardFinish);
          } else if (recData.id == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).S2C_Event.ReviceCardSuccess) {
            // console.log("-----> ReviceCardSuccess ");
            (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
              error: Error()
            }), utils) : utils).send((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).localEvent.ReviceCardSuccess);
          } else if (recData.id == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).S2C_Event.NewCircle) {
            (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
              error: Error()
            }), utils) : utils).send((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).localEvent.NewCircle);
          } else if (recData.id == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).S2C_Event.KickGameStart) {
            var msg = GameMsg.Time.decode(recData.msg);
            (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
              error: Error()
            }), utils) : utils).send((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).localEvent.KickGameStart, msg.time);
          } else if (recData.id == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).S2C_Event.KickRoomId) {
            var _msg = GameMsg.Room.decode(recData.msg);

            (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
              error: Error()
            }), utils) : utils).send((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).localEvent.KickRoomId, _msg.roomId);
          } else if (recData.id == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).S2C_Event.AuditionMatchSuccess) {
            var _msg2 = GameMsg.Room.decode(recData.msg);

            (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
              error: Error()
            }), utils) : utils).send((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).localEvent.AuditionRoomId, _msg2.roomId);
          } else if (recData.id == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).S2C_Event.ScoreMatchSucces) {
            var _msg3 = GameMsg.ScoreGame.decode(recData.msg);

            (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
              error: Error()
            }), utils) : utils).send((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).localEvent.ScoreMatchSucces, _msg3);
          } else if (recData.id == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).S2C_Event.KickFreeUp) {
            // console.log('KickFreeUp----> ');
            (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
              error: Error()
            }), utils) : utils).send((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).localEvent.KickFreeUp, {
              type: (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                error: Error()
              }), GlobalData) : GlobalData).gameType.kick,
              score: null
            });
          } else if (recData.id == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).S2C_Event.ScoreFreeUp) {
            // console.log('ScoreFreeUp----> ');
            var _msg4 = GameMsg.ResUser.decode(recData.msg);

            (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
              error: Error()
            }), utils) : utils).send((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).localEvent.KickFreeUp, {
              type: (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                error: Error()
              }), GlobalData) : GlobalData).gameType.score,
              score: _msg4.score
            });
          } else if (recData.id == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).S2C_Event.GameRestart) {
            // console.log('GameRestart----> ');
            (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
              error: Error()
            }), utils) : utils).send((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).localEvent.GameRestart);
          } else if (recData.id == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).S2C_Event.KickFinish) {
            // console.log('KickFinish----> ');
            var _msg5 = GameMsg.Room.decode(recData.msg);

            (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
              error: Error()
            }), utils) : utils).send((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).localEvent.KickFinish, _msg5.roomId);
          } else if (recData.id == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).S2C_Event.ScoreFinish) {
            // console.log('ScoreFinish----> ');
            var _msg6 = GameMsg.Room.decode(recData.msg);

            (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
              error: Error()
            }), utils) : utils).send((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).localEvent.ScoreFinish, _msg6.roomId);
          } else if (recData.id == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).S2C_Event.ReconnectOutCard) {
            // console.log('ReconnectOutCard----> ');
            var _msg7 = GameMsg.SendCard.decode(recData.msg);

            (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
              error: Error()
            }), utils) : utils).send((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).localEvent.ReconnectOutCard, _msg7);
          } else if (recData.id == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).S2C_Event.Reconnect) {
            // console.log('Reconnect----> ');
            var _msg8 = GameMsg.Room.decode(recData.msg);

            (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
              error: Error()
            }), utils) : utils).send((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).localEvent.Reconnect, _msg8);
          } else if (recData.id == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).S2C_Event.FreeMatchStart) {
            var _msg9 = GameMsg.Match.decode(recData.msg);

            console.log('FreeMatchStart----> ', _msg9);
            (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
              error: Error()
            }), utils) : utils).send((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).localEvent.FreeMatchStart, _msg9);
          } else if (recData.id == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).S2C_Event.FreeMatchTimeOut) {
            (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
              error: Error()
            }), utils) : utils).send((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).localEvent.FreeMatchTimeOut);
          } else if (recData.id == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).S2C_Event.AuditionMatchStart) {
            var _msg10 = GameMsg.Match.decode(recData.msg);

            console.log('AuditionMatchStart----> ', _msg10);
            (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
              error: Error()
            }), utils) : utils).send((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).localEvent.AuditionMatchStart, _msg10);
          } else if (recData.id == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).S2C_Event.AuditionMatchTimeOut) {
            (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
              error: Error()
            }), utils) : utils).send((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).localEvent.AuditionMatchTimeOut);
          } else if (recData.id == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).S2C_Event.Error) {
            var _msg11 = GameMsg.Error.decode(recData.msg);

            (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
              error: Error()
            }), utils) : utils).send((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).localEvent.GameError, _msg11);
          } else if (recData.id == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).S2C_Event.ForceExitGame) {
            (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
              error: Error()
            }), utils) : utils).send((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).localEvent.ForceExitGame);
          } else if (recData.id == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).S2C_Event.OutGame) {
            // console.log("比赛状态");
            var _msg12 = GameMsg.OutGame.decode(recData.msg);

            (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
              error: Error()
            }), utils) : utils).send((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).localEvent.KickGameInfo, _msg12);
          } else if (recData.id == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).S2C_Event.ReconnecteKangGong) {
            var _msg13 = GameMsg.KongGong.decode(recData.msg); // console.log("断线抗贡 ", msg);


            (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
              error: Error()
            }), utils) : utils).send((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).localEvent.KangGong, false, _msg13.one, _msg13.two);
          } else if (recData.id == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).S2C_Event.UserCardsList) {
            var _msg14 = GameMsg.UserCardsList.decode(recData.msg);

            console.log("所有玩家剩余的牌 ", _msg14);
            (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
              error: Error()
            }), utils) : utils).send((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).localEvent.GameFinishCards, _msg14);
          } else if (recData.id == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).S2C_Event.ReconnectError) {
            (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).loginInfo.token = null;
          }
        } //错误


        function onGameSocketError(event) {
          setIsConnect(false);
          console.log("onGameSocketError ", event);
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).send((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.SocketError);
        }

        _GameSocket.onGameSocketError = onGameSocketError;

        function onGameSocketClose() {
          setIsConnect(false);
          closeSocket();
          console.log("onGameSocketClose ");
          (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).send((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).localEvent.SocketError);
        }

        _GameSocket.onGameSocketClose = onGameSocketClose;

        function connect(url) {
          console.log("ws url--> ", url);

          if (gameSocket) {
            gameSocket.connect(url, "", null);
          }
        }

        _GameSocket.connect = connect;

        function send(data) {
          if (gameSocket) {
            gameSocket.sendData(data);
          } else {
            (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
              error: Error()
            }), UIManager) : UIManager).Instace.showUI({
              path: (_crd && UIConfig === void 0 ? (_reportPossibleCrUseOfUIConfig({
                error: Error()
              }), UIConfig) : UIConfig).MessageBoxCommonKey,
              data: {
                okName: "确定",
                cancleName: "取消",
                des: "网络出现了问题,请稍后再试(1)!",
                okFunc: () => {},
                cancleFunc: null
              }
            });
          }
        }

        _GameSocket.send = send;

        function startHeart() {
          stopHeart(); //（每秒钟一次，3秒无心跳自动断线)

          heartInterval = setInterval(() => {
            var buf = (_crd && PbManager === void 0 ? (_reportPossibleCrUseOfPbManager({
              error: Error()
            }), PbManager) : PbManager).instance.sendMsg((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).C2S_Event.Ping, null);
            send(buf);
          }, 1000);
        }

        _GameSocket.startHeart = startHeart;

        function stopHeart() {
          if (heartInterval) {
            clearInterval(heartInterval);
            heartInterval = null;
          }
        }

        _GameSocket.stopHeart = stopHeart;

        function closeSocket() {
          setIsConnect(false);

          if (gameSocket) {
            stopHeart();

            gameSocket.onSocketOpen = () => {};

            gameSocket.onSocketMessage = () => {};

            gameSocket.onSocketError = () => {};

            gameSocket.onSocketClose = () => {};

            gameSocket.close();
            gameSocket = null;
          }

          clearTimeout();
        }

        _GameSocket.closeSocket = closeSocket;
      })(GameSocket || _export("GameSocket", GameSocket = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b40ed892d0ff0ff163b706527e06d93d44945c8c.js.map