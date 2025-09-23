import { utils } from "../common/utils";
import { websocket } from "../common/websocket";
import { PbManager } from "../proto/PbManager";
import { GlobalData } from "./GlobalData";
import { UIConfig } from "./UIConfig";
import { UIManager } from "./UIManager";
import { UrlConfig } from "./UrlConfig";
//只负责消息的发送和接收
export module GameSocket {
    var gameSocket: websocket = null;
    var heartInterval: number = null;
    var isConnect: boolean = false;
    var checkTimeoutId: number = 0;
    var noHeartbeatTime: number = 0;

    export function initAndConnect() {
        GameSocket.closeSocket();
        let url = UrlConfig.getSocketUrl();
        init();
        connect(url);
    }
    //初始化
    function init() {
        if (!gameSocket) {
            gameSocket = null;
            closeSocket();
        }
        bindSocket();
        clearTimeout();
    }
    export function getIsConnect() {
        return isConnect;
    }
    function setIsConnect(type: boolean) {
        isConnect = type;
    }
    //绑定回调
    function bindSocket() {
        gameSocket = new websocket();
        gameSocket.onSocketOpen = () => {
            onGameSocketOpen();
        }
        gameSocket.onSocketMessage = (data: ArrayBuffer) => {
            onGameSocketMessage(data);
        }
        gameSocket.onSocketError = (event: any) => {
            onGameSocketError(event);
        }
        gameSocket.onSocketClose = (event: any) => {
            onGameSocketClose();
        }
    }
    function onGameSocketOpen() {
        console.log("onGameSocketOpen");
        let baseInfo = GameMsg.Login.create({ token: GlobalData.loginInfo.token });
        let baseBuffer = GameMsg.Login.encode(baseInfo).finish();
        let sendBuffer = PbManager.instance.sendMsg(GlobalData.C2S_Event.Login, baseBuffer);
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
    }
    //接收消息
    function onGameSocketMessage(data: ArrayBuffer) {
        let recData: { id: number, msg: any } = PbManager.instance.reciveMsg(data);
        if (recData.id != 1) {
            // console.log("recData ", recData);
        }
        if (recData.id == GlobalData.S2C_Event.Pong) {
            // console.log("心跳返回--->");
            clearTimeout();
            checkTimeoutId = setInterval(function () {
                noHeartbeatTime += 1;
                // 收不到心跳6秒钟,主动断开
                if (noHeartbeatTime > 6) {
                    closeSocket();
                    utils.send(GlobalData.localEvent.SocketError);
                }
                console.log("noHeartbeatTime--> ", noHeartbeatTime);
            }, 1000);
        }
        else if (recData.id == GlobalData.S2C_Event.Login) {
            let user = GameMsg.User.decode(recData.msg);
            utils.send(GlobalData.localEvent.UserLogin, user);
        }
        else if(recData.id == GlobalData.S2C_Event.User) {
            let data = GameMsg.User.decode(recData.msg); 
            if(data.gold != null) {
                GlobalData.userInfo.score = data.gold;
            }
        }
        else if (recData.id == GlobalData.S2C_Event.CreateRoom) {
            let room = GameMsg.Room.decode(recData.msg);
            utils.send(GlobalData.localEvent.CreateRoom, room);
        }
        else if (recData.id == GlobalData.S2C_Event.JoinRoomSuccess) {
            let users = GameMsg.Room.decode(recData.msg);
            utils.send(GlobalData.localEvent.JoinRoomResult, true, users.roomId);
        }
        else if (recData.id == GlobalData.S2C_Event.JoinRoomFail) {
            utils.send(GlobalData.localEvent.JoinRoomResult, false);
        }
        else if (recData.id == GlobalData.S2C_Event.UserList) {
            let users = GameMsg.UserList.decode(recData.msg);
            utils.send(GlobalData.localEvent.UserList, users);
        }
        else if (recData.id == GlobalData.S2C_Event.UserList) {
            let users = GameMsg.UserList.decode(recData.msg);
            utils.send(GlobalData.localEvent.UserList, users);
        }
        else if (recData.id == GlobalData.S2C_Event.StartHandCard) {
            let users = GameMsg.Start.decode(recData.msg);
            utils.send(GlobalData.localEvent.StartHandCard, users);
        }
        else if (recData.id == GlobalData.S2C_Event.OutCardTime) {
            let users = GameMsg.SendCard.decode(recData.msg);
            utils.send(GlobalData.localEvent.OutCardTime, users);
        }
        else if (recData.id == GlobalData.S2C_Event.HandleBtn) {
            let users = GameMsg.NextUser.decode(recData.msg);
            utils.send(GlobalData.localEvent.HandleBtn, users);
        }
        else if (recData.id == GlobalData.S2C_Event.OutCards) {
            let users = GameMsg.SendCard.decode(recData.msg);
            utils.send(GlobalData.localEvent.OutCards, users);
        }
        else if (recData.id == GlobalData.S2C_Event.LeftCards) {
            let users = GameMsg.UserWin.decode(recData.msg);
            utils.send(GlobalData.localEvent.LeftCards, users);
        }
        else if (recData.id == GlobalData.S2C_Event.UserWin) {
            let users = GameMsg.UserWin.decode(recData.msg);
            utils.send(GlobalData.localEvent.UserWin, users);
        }
        else if (recData.id == GlobalData.S2C_Event.HaveWindy) {
            let users = GameMsg.UserWin.decode(recData.msg);
            // console.log("-----> HaveWindy ", users);
            utils.send(GlobalData.localEvent.HaveWindy, users);
        }
        else if (recData.id == GlobalData.S2C_Event.GameFinish) {
            let users = GameMsg.WinList.decode(recData.msg);
            utils.send(GlobalData.localEvent.GameFinish, users);
        }
        else if (recData.id == GlobalData.S2C_Event.NoCard) {
            let users = GameMsg.KongGong.decode(recData.msg);
            // console.log("-----> NoCard ", users);
            utils.send(GlobalData.localEvent.NoCard, users);
        }
        else if (recData.id == GlobalData.S2C_Event.UpCard) {
            let users = GameMsg.GongList.decode(recData.msg);
            // console.log("-----> upCard ", users);
            utils.send(GlobalData.localEvent.UpCard, users);
        }
        else if (recData.id == GlobalData.S2C_Event.ReviceCardDownUp) {
            let users = GameMsg.Gong.decode(recData.msg);
            // console.log("-----> ReviceCardDownUp ", users);
            utils.send(GlobalData.localEvent.ReviceCard, users, true);
        }
        else if (recData.id == GlobalData.S2C_Event.ReviceCardUpDown) {
            let users = GameMsg.Gong.decode(recData.msg);
            // console.log("-----> ReviceCardUpDown ", users);
            utils.send(GlobalData.localEvent.ReviceCard, users, false);
        }
        else if (recData.id == GlobalData.S2C_Event.DownCard) {
            let users = GameMsg.Gong.decode(recData.msg);
            // console.log("-----> downCard ", users);
            utils.send(GlobalData.localEvent.DownCard, users, false);
        }
        else if (recData.id == GlobalData.S2C_Event.ReviceBtn) {
            utils.send(GlobalData.localEvent.ReviceBtn);
        }
        else if (recData.id == GlobalData.S2C_Event.DownCardAuto) {
            let users = GameMsg.Gong.decode(recData.msg);
            // console.log("-----> DownCardAuto ", users);
            utils.send(GlobalData.localEvent.DownCard, users, true);
        }
        else if (recData.id == GlobalData.S2C_Event.LeftCardCnt) {
            let users = GameMsg.Cards.decode(recData.msg);
            utils.send(GlobalData.localEvent.LeftCardCnt, users.card);
        }
        else if (recData.id == GlobalData.S2C_Event.ReviceCardFinish) {
            // console.log("-----> ReviceCardFinish ");
            utils.send(GlobalData.localEvent.ReviceCardFinish);
        }
        else if (recData.id == GlobalData.S2C_Event.ReviceCardSuccess) {
            // console.log("-----> ReviceCardSuccess ");
            utils.send(GlobalData.localEvent.ReviceCardSuccess);
        }
        else if (recData.id == GlobalData.S2C_Event.NewCircle) {
            utils.send(GlobalData.localEvent.NewCircle);
        }
        else if (recData.id == GlobalData.S2C_Event.KickGameStart) {
            let msg = GameMsg.Time.decode(recData.msg);
            utils.send(GlobalData.localEvent.KickGameStart, msg.time);
        }
        else if (recData.id == GlobalData.S2C_Event.KickRoomId) {
            let msg = GameMsg.Room.decode(recData.msg);
            utils.send(GlobalData.localEvent.KickRoomId, msg.roomId);
        }
        else if (recData.id == GlobalData.S2C_Event.AuditionMatchSuccess) {
            let msg = GameMsg.Room.decode(recData.msg);
            utils.send(GlobalData.localEvent.AuditionRoomId, msg.roomId);
        }
        else if (recData.id == GlobalData.S2C_Event.ScoreMatchSucces) {
            let msg = GameMsg.ScoreGame.decode(recData.msg);
            utils.send(GlobalData.localEvent.ScoreMatchSucces, msg);
        }
        else if (recData.id == GlobalData.S2C_Event.KickFreeUp) {
            // console.log('KickFreeUp----> ');
            utils.send(GlobalData.localEvent.KickFreeUp, { type: GlobalData.gameType.kick, score: null });
        }
        else if (recData.id == GlobalData.S2C_Event.ScoreFreeUp) {
            // console.log('ScoreFreeUp----> ');
            let msg = GameMsg.ResUser.decode(recData.msg);
            utils.send(GlobalData.localEvent.KickFreeUp, { type: GlobalData.gameType.score, score: msg.score });
        }
        else if (recData.id == GlobalData.S2C_Event.GameRestart) {
            // console.log('GameRestart----> ');
            utils.send(GlobalData.localEvent.GameRestart);
        }
        else if (recData.id == GlobalData.S2C_Event.KickFinish) {
            // console.log('KickFinish----> ');
            let msg = GameMsg.Room.decode(recData.msg);
            utils.send(GlobalData.localEvent.KickFinish, msg.roomId);
        }
        else if (recData.id == GlobalData.S2C_Event.ScoreFinish) {
            // console.log('ScoreFinish----> ');
            let msg = GameMsg.Room.decode(recData.msg);
            utils.send(GlobalData.localEvent.ScoreFinish, msg.roomId);
        }
        else if (recData.id == GlobalData.S2C_Event.ReconnectOutCard) {
            // console.log('ReconnectOutCard----> ');
            let msg = GameMsg.SendCard.decode(recData.msg);
            utils.send(GlobalData.localEvent.ReconnectOutCard, msg);
        }
        else if (recData.id == GlobalData.S2C_Event.Reconnect) {
            // console.log('Reconnect----> ');
            let msg = GameMsg.Room.decode(recData.msg);
            utils.send(GlobalData.localEvent.Reconnect, msg);
        }
        else if (recData.id == GlobalData.S2C_Event.FreeMatchStart) {
            let msg = GameMsg.Match.decode(recData.msg);
            console.log('FreeMatchStart----> ',msg);
            utils.send(GlobalData.localEvent.FreeMatchStart, msg);
        }
        else if (recData.id == GlobalData.S2C_Event.FreeMatchTimeOut) {
            utils.send(GlobalData.localEvent.FreeMatchTimeOut);
        }
        else if (recData.id == GlobalData.S2C_Event.AuditionMatchStart) {
            let msg = GameMsg.Match.decode(recData.msg);
            console.log('AuditionMatchStart----> ',msg);
            utils.send(GlobalData.localEvent.AuditionMatchStart, msg);
        }
        else if (recData.id == GlobalData.S2C_Event.AuditionMatchTimeOut) {
            utils.send(GlobalData.localEvent.AuditionMatchTimeOut);
        }
        else if (recData.id == GlobalData.S2C_Event.Error) {
            let msg = GameMsg.Error.decode(recData.msg);
            utils.send(GlobalData.localEvent.GameError, msg);
        }
        else if (recData.id == GlobalData.S2C_Event.ForceExitGame) {
            utils.send(GlobalData.localEvent.ForceExitGame);
        }
        else if (recData.id == GlobalData.S2C_Event.OutGame) {
            // console.log("比赛状态");
            let msg = GameMsg.OutGame.decode(recData.msg);
            utils.send(GlobalData.localEvent.KickGameInfo,msg);
        }
        else if (recData.id == GlobalData.S2C_Event.ReconnecteKangGong) {
            let msg = GameMsg.KongGong.decode(recData.msg);
            // console.log("断线抗贡 ", msg);
            utils.send(GlobalData.localEvent.KangGong, false, msg.one, msg.two);
        }
        else if (recData.id == GlobalData.S2C_Event.UserCardsList) {
            let msg = GameMsg.UserCardsList.decode(recData.msg);
            // console.log("所有玩家剩余的牌 ", msg);
            utils.send(GlobalData.localEvent.GameFinishCards, msg);
        }
        else if (recData.id == GlobalData.S2C_Event.ReconnectError) {
            GlobalData.loginInfo.token = null;
        }
        else if(recData.id == GlobalData.S2C_Event.Organize) {
            let msg = GameMsg.Organize.decode(recData.msg);
            utils.send(GlobalData.localEvent.Organize, msg);
        }
    }
    //错误
    export function onGameSocketError(event) {
        setIsConnect(false);
        console.log("onGameSocketError ", event);
        utils.send(GlobalData.localEvent.SocketError);
        
    }
    //关闭
    export function onGameSocketClose() {
        setIsConnect(false);
        closeSocket();
        console.log("onGameSocketClose ");
        utils.send(GlobalData.localEvent.SocketError);
    }
    //连接
    export function connect(url: string) {
        console.log("ws url--> ", url);
        if (gameSocket) {
            gameSocket.connect(url, "", null);
        }
    }
    export function send(data: ArrayBuffer) {
        if (gameSocket) {
            gameSocket.sendData(data);
        } else {
            UIManager.Instace.showUI({
                path: UIConfig.MessageBoxCommonKey,
                data: {
                    okName: "确定",
                    cancleName: "取消",
                    des: "网络出现了问题,请稍后再试(1)!",
                    okFunc: () => {

                    },
                    cancleFunc: null
                }
            });
        }
    }
    export function startHeart() {
        stopHeart();
        //（每秒钟一次，3秒无心跳自动断线)
        heartInterval = setInterval(() => {
            let buf = PbManager.instance.sendMsg(GlobalData.C2S_Event.Ping, null);
            send(buf);
        }, 1000);
    }
    export function stopHeart() {
        if (heartInterval) {
            clearInterval(heartInterval);
            heartInterval = null!;
        }
    }
    //关闭
    export function closeSocket() {
        setIsConnect(false);
        if (gameSocket) {
            stopHeart();
            gameSocket.onSocketOpen = () => { };
            gameSocket.onSocketMessage = () => { };
            gameSocket.onSocketError = () => { };
            gameSocket.onSocketClose = () => { };
            gameSocket.close();
            gameSocket = null;
        }
        clearTimeout();
    }
}


