import { utils } from "../common/utils"
import { RaceAuditionState } from "../component/raceAudition/RaceAuditionLineItem"
import { RaceJoinState } from "../component/raceScore/RaceScoreLineItem"
import { HttpConfig } from "./HttpConfig"
import { UIConfig } from "./UIConfig"
import { UIManager } from "./UIManager"

export enum RaceType {
    none,
    score,     //积分
    kick,      //淘汰
    audition,  //海选
}
//重连
export enum ReconnectType {
    none = -1,  //不在房间
    free = 1,   //自由玩
    kick,       //淘汰
    score,      //积分
    audition,   //海选
}

export enum RaceTimeType {
    register = 1,  //现在时间 < 报名结束时间  报名,已报名
    wait,          //现在时间 < 游戏开始时间  已报名,报名结束
    start          //现在时间 > 游戏开始时间  已开始
}
export enum GameEndType {
    free = 1,   //自由玩
    kick_1,     //淘汰单局
    kick_2,     //淘汰单轮
    kick_3,     //淘汰总结算
    score_1,    //积分单局
    score_2,    //积分总结算
    audition,   //海选结算
}

export namespace GlobalData {

    //场景
    export const sceneName = {
        start: "Start",
        lobby: "Lobby",
        game: "Game",
    }
    //比赛类型
    export const gameType = {
        /**1*/
        free: 1,    //自由赛
        /**2*/
        kick: 2,    //淘汰赛
        /**3*/
        score: 3,   //积分赛
        /**4*/
        audition: 4,   //海选赛
    }
    //牌值
    export const keyCards = {
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
        13: "K",
    }
    //当前打的牌
    export const keyLevelCards = {
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
        14: 1,
    }
    //viewid
    export const viewId = {
        up: 0,          //上家
        self: 1,        //自己
        down: 2,        //下家
        opposite: 3,    //对家
    }
    export const MAXPLAYER = 4;

    export const TOKEN = 'TOKEN_DATA';

    //本地消息
    export const localEvent = {
        RaceScoreLine: "RaceScoreLine",
        RaceKickLine: "RaceKickLine",
        RaceAuditionLine: "RaceAuditionLine",
        LookKickGameInfo: "LookKickGameInfo",
        HideUpDownUserHead: "HideUpDownUserHead", //隐藏左右头像
        UpdateScore: "UpdateScore",               //积分
        GameError: "GameError",                   //游戏内出错
        ForceExitGame: "ForceExitGame",           //强制退出
        KickGameInfo: "KickGameInfo",             //淘汰赛查询
        SocketError: "SocketError",               //socket出错
        FirstUpdate: "FirstUpdate",               //首次登录
        UpdateLevelCard: "UpdateLevelCard",       //级牌

        ////////////////C S////////////////
        UserLogin: "UserLogin",                     //登录
        CreateRoom: "CreateRoom",                   //创建房间
        JoinRoomResult: "JoinRoomResult",           //加入房间结果(成功,失败)
        UserList: "UserList",                       //用户信息
        StartHandCard: "StartHandCard",             //开始游戏(手牌)
        OutCardTime: "OutCardTime",                 //出牌时间
        HandleBtn: "HandleBtn",                     //按钮
        OutCards: "OutCards",                       //出牌
        LeftCards: "LeftCards",                     //剩余牌(少于10张才提示)
        HaveWindy: "HaveWindy",                     //接风
        UserWin: "UserWin",                         //有人走了
        LeftCardsBg: "LeftCardsBg",                 //一直显示
        NewCircle: "NewCircle",                     //新一圈
        NoCard: "NoCard",                           //抗贡
        UpCard: "UpCard",                           //上贡
        ReviceCard: "ReviceCard",                   //回贡人拿到了上贡的牌
        DownCard: "DownCard",                       //回贡
        ReviceBtn: "ReviceBtn",                     //回贡按钮
        ReviceCardFinish: "ReviceCardFinish",       //回贡全部完成
        ReviceCardSuccess: "ReviceCardSuccess",     //回贡成功
        KangGong: "KangGong",                       //抗贡
        GameFinish: "GameFinish",                   //结算
        GameFinishCards: "GameFinishCards",         //玩家剩余的牌
        LeftCardCnt: "LeftCardCnt",                 //剩余牌张数(只在手牌,断线存在)
        ReconnectOutCard: "ReconnectOutCard",       //断线重连已出的牌
        Reconnect: "Reconnect",                     //断线重连
     
        AgainGame: "AgainGame",                     //再来一局
        KickGameStart: "KickGameStart",             //淘汰赛开赛通知
        KickRoomId: "KickRoomId",                   //淘汰赛房间号
        KickFreeUp: "KickFreeUp",                   //淘汰赛轮空晋级
        GameRestart: "GameRestart",                 //新一轮游戏开始
        KickFinish: "KickFinish",                   //淘汰赛结束
        ScoreFinish: "ScoreFinish",                 //积分赛结束
        ScoreMatchSucces: "ScoreMatchSucces",       //积分赛(匹配队友成功)
     
        FreeMatchStart: "FreeMatchStart",           //自由玩开始匹配
        FreeMatchTimeOut: "FreeMatchTimeOut",       //自由玩匹配超时
        ReEnterGame: "ReEnterGame",                 //重连进入游戏

        AuditionMatchStart: "AuditionMatchStart",    //海选赛开始匹配
        AuditionMatchTimeOut: "AuditionMatchTimeOut",//海选赛匹配超时
        AuditionRoomId: "AuditionRoomId",            //海选赛房间号
        UpdateGameBg: 'UpdateGameBg'
    }
    export const C2S_Event = {
        Ping: 1,                          //心跳（每秒钟一次，3秒无心跳自动断线)
        Login: 2,                         //登录
        CreateRoom: 10,                   //创建房间
        JoinRoom: 11,                     //自由玩加入房间
        ContinueGame: 12,                 //继续游戏(也用于游戏开始先发12)
        TestAddUser: 13,                  //增加机器人
        OutCards: 14,                     //出牌
        ChangeSeat: 15,                   //换座位
        ExitGame: 16,                     //退出房间
        NoOutCards: 17,                   //不出牌
        RebackCard: 18,                   //回贡
        ///////////////////自由匹配///////////////////
        FreeMatch: 19,                    //自由玩匹配
        CancelFreeMatch: 20,              //自由玩取消匹配
        OutGame: 21,                      //查询淘汰赛状态
        ///////////////////海选赛匹配///////////////////
        AuditionMatch: 30,                //海选赛匹配
        JoinAuditionRoom: 31,             //海选赛加入房间
        CancelAuditionMatch: 32,          //海选赛取消匹配
    
        ///////////////淘汰赛///////////////
        KickJoinRoom: 100,                 //加入淘汰赛房间
        ScoreJoinRoom: 101,                //加入积分赛房间
    }
    export const S2C_Event = {
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
        Error: 400,
    }
    export const cardInfo = {
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
        cardDir: false, //true:恢复 false:理牌
        sortCard: false, //理牌
        oneCard: false, //一键理牌
    }
    //创建房间
    export const createRoomInfo = {
        timeList: [15, 20, 30],
        time: null,  //1->15s 2->30s
    }
    //历史战斗记录
    export const gameResultInfo = {
        scoreList: [],     //积分
        kickList: [],      //淘汰
        auditionList: [],  //海选
    }
    //团队
    export const teamInfo = {
        list: []
    }
    //排行榜(积分-个人)
    export const rankScorePersonInfo = {
        list: [],
        my: null
    }
    //排行榜(积分-团队)
    export const rankScoreTeamInfo = {
        list: [],
        my: null
    }
    //积分赛
    export const raceScoreDataInfo = {
        list: [],
    }
    //淘汰赛
    export const raceKickDataInfo = {
        list: [],
    }
    //海选赛
    export const raceAuditionDataInfo = {
        list: [],
    }
    //淘汰赛(晋级名单)
    export const raceKickUpInfo = {
        list: [],
    }
    //海选赛(晋级名单)
    export const raceAuditionInfo = {
        list: [],
    }
    //登录信息
    export const loginInfo = {
        code: "11",
        token: ""
    }
    //自己信息
    export const userInfo = {
        haveToken: false, //登录获取的token
        user_id: 0,       //用户id
        head_img: "",     //头像
        name: "",         //昵称
        group_id: 0,
        group_name: "",
        score: 0,         //积分
        isOnline: true,
        address: '',
        isLogin: false,
        is_vip: 0 //1为合伙人，0为普通玩家
    }
    ////////////////////////////////////////////////////////////////
    //////协议相关
    ////////////////////////////////////////////////////////////////
    //请求登录
    export function requestLogin(cb: { success: Function, fail?: Function }) {
        var url = HttpConfig.getUrl(HttpConfig.Login);
        let sendData = {
            code: GlobalData.loginInfo.code
        }
        console.log("code -------> ", sendData);
        //强制加载wait成功后,再请求接口,否则可能导致接口过快返回,在实例化wait前,隐藏wait失败
        UIManager.Instace.showUI({
            path: UIConfig.WaitItemKey, data: { opacity: 0.5, des: "加载中..." }, callBack: () => {
                utils.sendHttpRequest({
                    url: url,
                    method: "POST",
                    data: utils.toJson(sendData),
                    success: function (data) {
                        // console.log("Login success", data);
                        if (data) {
                            loginInfo.token = data.token;
                        }
                        if (cb.success) cb.success();
                    },
                    fail: function (data) {
                        console.log("Login fail ", data);
                        UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: data });
                        if (cb.fail) cb.fail();
                    },
                    complete: function () {
                        UIManager.Instace.hideUI(UIConfig.WaitItemKey);
                    }
                });
            }
        });
    }
    //查询用户信息
    export function requestGetUserInfo(cb: { success: Function, fail?: Function }) {
        var url = HttpConfig.getUrl(HttpConfig.GetUserInfo);
        let sendData = {
            token: GlobalData.loginInfo.token
        }
        UIManager.Instace.showUI({ path: UIConfig.WaitItemKey, data: { opacity: 0.5, des: "加载中..." } });
        utils.sendHttpRequest({
            url: url,
            method: "POST",
            data: utils.toJson(sendData),
            success: function (data) {
                console.log("GetUserInfo success", data);
                userInfo.group_id = data.group_id;
                userInfo.group_name = data.group_name;
                userInfo.user_id = data.user_id;
                userInfo.head_img = data.head_img;
                userInfo.score = data.gold;
                userInfo.name = data.name;
                userInfo.is_vip = data.is_vip;
                if (cb.success) cb.success();
            },
            fail: function (data) {
                console.log("GetUserInfo fail ", data);
                UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: data });
                if (cb.fail) cb.fail();
            },
            complete: function () {
                console.log("GetUserInfo complete ");
                UIManager.Instace.hideUI(UIConfig.WaitItemKey);
            }
        });
    }
    //查询用户信息
    export function requestDismass(game_id: number, zu_id: number, cb: { success: Function, fail?: Function }) {
        var url = HttpConfig.getUrl(HttpConfig.CancelGameZu);
        let sendData = {
            token: GlobalData.loginInfo.token,
            game_id: game_id,
            zu_id: zu_id
        }
        UIManager.Instace.showUI({ path: UIConfig.WaitItemKey, data: { opacity: 0.5, des: "加载中..." } });
        utils.sendHttpRequest({
            url: url,
            method: "POST",
            data: utils.toJson(sendData),
            success: function (data) {
                console.log("CancelGameZu success", data);
                if (cb.success) cb.success();
            },
            fail: function (data) {
                console.log("CancelGameZu fail ", data);
                UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: data });
                if (cb.fail) cb.fail();
            },
            complete: function () {
                UIManager.Instace.hideUI(UIConfig.WaitItemKey);
            }
        });
    }
    //淘汰赛列表
    export function requestOutGameList(cb: { success: Function, fail?: Function }) {
        var url = HttpConfig.getUrl(HttpConfig.QueryOutGameList);
        let sendData = {
            token: GlobalData.loginInfo.token,
            page: 1,
            limit: 1000
        }
        UIManager.Instace.showUI({ path: UIConfig.WaitItemKey, data: { opacity: 0.5, des: "加载中..." } });
        utils.sendHttpRequest({
            url: url,
            method: "POST",
            data: utils.toJson(sendData),
            success: function (data) {
                console.log("QueryOutGameList success", data);
                GlobalData.raceKickDataInfo.list = [];
                if (data && data.length > 0) {
                    let nowTime = new Date().valueOf();
                    for (let i = 0; i < data.length; i++) {
                        const element = data[i];
                        let item = new RaceKickLineData();
                        item.id = element.id;
                        item.state = element.apply;
                        item.currentNum = element.user_num;
                        item.totalNum = element.max_num;
                        item.gameTitle = element.game_title;
                        item.gameStartTime = element.start_time;
                        item.registerEndTime = element.end_time;
                        item.end_timestamp = element.end_timestamp * 1000;
                        item.start_timestamp = element.start_timestamp * 1000;
                        // if (i == 0) {
                        //     item.registerEndTime = "2023-08-17 11:07:10";
                        //     item.gameStartTime = "2023-08-17 11:07:50";
                        //     item.state = RaceJoinState.done;
                        // }
                        item.leftTime = 0;
                        let startTime = item.start_timestamp;
                        let endTime = item.end_timestamp;
                        if (nowTime < endTime) {
                            if (item.state == RaceJoinState.done) {
                                item.timeState = RaceTimeType.wait;
                                item.leftTime = Math.floor((startTime - nowTime) / 1000);
                            }
                            else if (item.state == RaceJoinState.do) {
                                item.timeState = RaceTimeType.register;
                                item.leftTime = Math.floor((endTime - nowTime) / 1000);
                            }
                        }
                        else if (nowTime < startTime) {
                            item.timeState = RaceTimeType.wait;
                            if (item.state == 1) {
                                item.leftTime = Math.floor((startTime - nowTime) / 1000);
                            }
                        }
                        else if (nowTime > startTime) {
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
            fail: function (data) {
                console.log("QueryOutGameList fail ", data);
                UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: data });
                if (cb.fail) cb.fail();
            },
            complete: function () {
                UIManager.Instace.hideUI(UIConfig.WaitItemKey);
            }
        });
    }
    //积分赛列表
    export function requestScoreGameList(cb: { success: Function, fail?: Function }) {
        var url = HttpConfig.getUrl(HttpConfig.QueryScoreGameList);
        let sendData = {
            token: GlobalData.loginInfo.token,
            page: 1,
            limit: 1000
        }
        UIManager.Instace.showUI({ path: UIConfig.WaitItemKey, data: { opacity: 0.5, des: "加载中..." } });
        utils.sendHttpRequest({
            url: url,
            method: "POST",
            data: utils.toJson(sendData),
            success: function (data) {
                console.log("QueryScoreGameList success", data);
                GlobalData.raceScoreDataInfo.list = [];
                if (data && data.length > 0) {
                    let nowTime = new Date().valueOf();
                    for (let i = 0; i < data.length; i++) {
                        const element = data[i];
                        let item = new RaceScoreLineData();
                        item.id = element.id;
                        item.state = element.apply;
                        item.currentNum = element.user_num;
                        item.totalNum = element.max_num;
                        item.gameTitle = element.game_title;
                        item.gameStartTime = element.start_time;
                        item.registerEndTime = element.end_time;
                        item.end_timestamp = element.end_timestamp * 1000;
                        item.start_timestamp = element.start_timestamp * 1000;
                        item.gameType = element.game_type;
                        // if (i == 0) {
                        //     item.registerEndTime = "2023-08-18 10:25:40";
                        //     item.gameStartTime = "2023-08-19 9:15:50";
                        //     item.state = RaceJoinState.done;
                        // }
                        item.leftTime = 0;
                        let startTime = item.start_timestamp;
                        let endTime = item.end_timestamp;
                        if (nowTime < endTime) {
                            if (item.state == RaceJoinState.done) {
                                item.timeState = RaceTimeType.wait;
                                item.leftTime = Math.floor((startTime - nowTime) / 1000);
                            }
                            else if (item.state == RaceJoinState.do) {
                                item.timeState = RaceTimeType.register;
                                item.leftTime = Math.floor((endTime - nowTime) / 1000);
                            }
                        }
                        else if (nowTime < startTime) {
                            item.timeState = RaceTimeType.wait;
                            if (item.state == 1) {
                                item.leftTime = Math.floor((startTime - nowTime) / 1000);
                            }
                        }
                        else if (nowTime > startTime) {
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
            fail: function (data) {
                console.log("QueryOutGameList fail ", data);
                UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: data });
                if (cb.fail) cb.fail();
            },
            complete: function () {
                UIManager.Instace.hideUI(UIConfig.WaitItemKey);
            }
        });
    }
    //海选赛列表
    export function requestAuditionGameList(cb: { success: Function, fail?: Function }) {
        var url = HttpConfig.getUrl(HttpConfig.QueryAuditionGameList);
        let sendData = {
            token: GlobalData.loginInfo.token,
            page: 1,
            limit: 1000
        }
        UIManager.Instace.showUI({ path: UIConfig.WaitItemKey, data: { opacity: 0.5, des: "加载中..." } });
        utils.sendHttpRequest({
            url: url,
            method: "POST",
            data: utils.toJson(sendData),
            success: function (data) {
                console.log("QueryAuditionGameList success", data);
                GlobalData.raceAuditionDataInfo.list = [];
                if (data && data.length > 0) {
                    let nowTime = new Date().valueOf();
                    for (let i = 0; i < data.length; i++) {
                        const element = data[i];
                        let item = new RaceAuditionLineData();
                        item.id = element.id;
                        item.gameTitle = element.game_title;
                        item.startTime = element.start_time;
                        item.endTime = element.end_time;
                        item.startHour = element.start_hour;
                        item.endHour = element.end_hour;
                        item.end_timestamp = element.end_timestamp * 1000;
                        item.start_timestamp = element.start_timestamp * 1000;
                        // if (i == 0) {
                        //     item.registerEndTime = "2023-08-18 10:25:40";
                        //     item.gameStartTime = "2023-08-19 9:15:50";
                        //     item.state = RaceJoinState.done;
                        // }
                        item.leftTime = 0;
                        let startTime = item.start_timestamp;
                        let endTime = item.end_timestamp;
                        if (startTime != endTime) {
                            //不到比赛时间
                            if (nowTime <= startTime) {
                                item.state = RaceAuditionState.pre;
                                item.leftTime = Math.floor((startTime - nowTime) / 1000);
                            }
                            else if (nowTime >= endTime) {//过了比赛时间
                                item.state = RaceAuditionState.pass;
                            }
                            else {//在比赛时间
                                item.state = RaceAuditionState.now;
                                item.leftTime = Math.floor((endTime - nowTime) / 1000);
                            }
                        } else {
                            //特殊情况,全天都可以比赛
                            item.state = RaceAuditionState.allDay;
                        }
                        GlobalData.raceAuditionDataInfo.list.push(item);
                    }
                } else {
                    GlobalData.raceAuditionDataInfo.list = [];
                }
                console.log("GlobalData.QueryAuditionGameList.list--> ", GlobalData.raceAuditionDataInfo.list);
                if (cb.success) cb.success();
            },
            fail: function (data) {
                console.log("QueryOutGameList fail ", data);
                UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: data });
                if (cb.fail) cb.fail();
            },
            complete: function () {
                UIManager.Instace.hideUI(UIConfig.WaitItemKey);
            }
        });
    }
    //积分赛列表
    export function requestJoinGame(gameId: number, cb: { success: Function, fail?: Function }) {
        var url = HttpConfig.getUrl(HttpConfig.JoinGame);
        let sendData = {
            token: GlobalData.loginInfo.token,
            id: gameId.toString()
        }
        UIManager.Instace.showUI({ path: UIConfig.WaitItemKey, data: { opacity: 0.5, des: "加载中..." } });
        utils.sendHttpRequest({
            url: url,
            method: "POST",
            data: utils.toJson(sendData),
            success: function (data) {
                console.log("JoinGame success", data);
                if (cb.success) cb.success(data);
            },
            fail: function (data) {
                console.log("JoinGame fail ", data);
                UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: data });
                if (cb.fail) cb.fail();
            },
            complete: function () {
                UIManager.Instace.hideUI(UIConfig.WaitItemKey);
            }
        });
    }
    //获取赛事报名信息
    export function requestGameUserList(id: number, cb: { success: Function, fail?: Function }) {
        var url = HttpConfig.getUrl(HttpConfig.GetGameUserList);
        let sendData = {
            token: GlobalData.loginInfo.token,
            game_id: id.toString()
        }
        console.log("code -------> ", sendData);
        UIManager.Instace.showUI({ path: UIConfig.WaitItemKey, data: { opacity: 0.5, des: "加载中..." } });
        utils.sendHttpRequest({
            url: url,
            method: "POST",
            data: utils.toJson(sendData),
            success: function (data) {
                console.log("GetGameUserList success", data);
                if (cb.success) cb.success(data);
            },
            fail: function (data) {
                console.log("GetGameUserList fail ", data);
                UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: data });
                if (cb.fail) cb.fail();
            },
            complete: function () {
                UIManager.Instace.hideUI(UIConfig.WaitItemKey);
            }
        });
    }
    //创建队伍
    export function requestCreateOutGameZu(id: number, cb: { success: Function, fail?: Function }) {
        var url = HttpConfig.getUrl(HttpConfig.CreateOutGameZu);
        let sendData = {
            token: GlobalData.loginInfo.token,
            game_id: id.toString()
        }
        console.log("code -------> ", sendData);
        UIManager.Instace.showUI({ path: UIConfig.WaitItemKey, data: { opacity: 0.5, des: "加载中..." } });
        utils.sendHttpRequest({
            url: url,
            method: "POST",
            data: utils.toJson(sendData),
            success: function (data) {
                console.log("CreateOutGameZu success", data);
                if (cb.success) cb.success(data);
            },
            fail: function (data) {
                console.log("CreateOutGameZu fail ", data);
                UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: data });
                if (cb.fail) cb.fail();
            },
            complete: function () {
                UIManager.Instace.hideUI(UIConfig.WaitItemKey);
            }
        });
    }
    //加入队伍
    export function requestAddOutGameZu(id: number, cb: { success: Function, fail?: Function }) {
        var url = HttpConfig.getUrl(HttpConfig.AddOutGameZu);
        let sendData = {
            token: GlobalData.loginInfo.token,
            zu_id: id.toString()
        }
        console.log("code -------> ", sendData);
        UIManager.Instace.showUI({ path: UIConfig.WaitItemKey, data: { opacity: 0.5, des: "加载中..." } });
        utils.sendHttpRequest({
            url: url,
            method: "POST",
            data: utils.toJson(sendData),
            success: function (data) {
                console.log("AddOutGameZu success", data);
                if (cb.success) cb.success(data);
            },
            fail: function (data) {
                console.log("AddOutGameZu fail ", data);
                UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: data });
                if (cb.fail) cb.fail();
            },
            complete: function () {
                UIManager.Instace.hideUI(UIConfig.WaitItemKey);
            }
        });
    }
    //查询团队列表
    export function requestUserGroup(cb: { success: Function, fail?: Function }) {
        var url = HttpConfig.getUrl(HttpConfig.QueryUserGroup);
        let sendData = {
            token: GlobalData.loginInfo.token,
            page: 1,
            limit: 1000
        }
        UIManager.Instace.showUI({ path: UIConfig.WaitItemKey, data: { opacity: 0.5, des: "加载中..." } });
        utils.sendHttpRequest({
            url: url,
            method: "POST",
            data: utils.toJson(sendData),
            success: function (data) {
                teamInfo.list = [];
                console.log("QueryUserGroup success", data);
                if (data && data.length > 0) {
                    for (let i = 0; i < data.length; i++) {
                        const element = data[i];
                        teamInfo.list.push({ rank: i + 1, score: element.gold, head: element.head_img, name: element.name });
                    }
                } else {
                    teamInfo.list = [];
                }
                if (cb.success) cb.success(data);
            },
            fail: function (data) {
                console.log("QueryUserGroup fail ", data);
                UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: data });
                if (cb.fail) cb.fail();
            },
            complete: function () {
                UIManager.Instace.hideUI(UIConfig.WaitItemKey);
            }
        });
    }
    //晋级名单
    export function requestUpList(gameId: number, cb: { success: Function, fail?: Function }) {
        var url = HttpConfig.getUrl(HttpConfig.QueryUpList);
        let sendData = {
            token: GlobalData.loginInfo.token,
            game_id: gameId.toString()
        }
        UIManager.Instace.showUI({ path: UIConfig.WaitItemKey, data: { opacity: 0.5, des: "加载中..." } });
        utils.sendHttpRequest({
            url: url,
            method: "POST",
            data: utils.toJson(sendData),
            success: function (data) {
                console.log("QueryUpList success", data);
                if (data && data.length > 0) {
                    raceKickUpInfo.list = data;
                } else {
                    raceKickUpInfo.list = [];
                }
                if (cb.success) cb.success(data);
            },
            fail: function (data) {
                console.log("QueryUpList fail ", data);
                UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: data });
                if (cb.fail) cb.fail();
            },
            complete: function () {
                UIManager.Instace.hideUI(UIConfig.WaitItemKey);
            }
        });
    }
    //海选赛晋级名单
    export function requestAuditionUpList(gameId: number, cb: { success: Function, fail?: Function }) {
        var url = HttpConfig.getUrl(HttpConfig.AuditionUpList);
        let sendData = {
            token: GlobalData.loginInfo.token,
            game_id: gameId.toString()
        }
        UIManager.Instace.showUI({ path: UIConfig.WaitItemKey, data: { opacity: 0.5, des: "加载中..." } });
        utils.sendHttpRequest({
            url: url,
            method: "POST",
            data: utils.toJson(sendData),
            success: function (data) {
                console.log("AuditionUpList success", data);
                if (data && data.length > 0) {
                    raceAuditionInfo.list = data;
                } else {
                    raceAuditionInfo.list = [];
                }
                if (cb.success) cb.success(data);
            },
            fail: function (data) {
                console.log("AuditionUpList fail ", data);
                UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: data });
                if (cb.fail) cb.fail();
            },
            complete: function () {
                UIManager.Instace.hideUI(UIConfig.WaitItemKey);
            }
        });
    }
    //积分赛(个人排名)
    export function requestScoreUserList(gameId: number, cb: { success: Function, fail?: Function }) {
        var url = HttpConfig.getUrl(HttpConfig.ScoreUserList);
        let sendData = {
            token: GlobalData.loginInfo.token,
            game_id: gameId.toString()
        }
        UIManager.Instace.showUI({ path: UIConfig.WaitItemKey, data: { opacity: 0.5, des: "加载中..." } });
        utils.sendHttpRequest({
            url: url,
            method: "POST",
            data: utils.toJson(sendData),
            success: function (data) {
                console.log("ScoreUserList success", data);
                rankScorePersonInfo.list = [];
                if (data && data.length > 0) {
                    for (let i = 0; i < data.length; i++) {
                        const element = data[i];
                        let item = new RankScorePersonLineData();
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
            fail: function (data) {
                console.log("ScoreUserList fail ", data);
                UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: data });
                if (cb.fail) cb.fail();
            },
            complete: function () {
                UIManager.Instace.hideUI(UIConfig.WaitItemKey);
            }
        });
    }
    //积分赛(团队排行)
    export function requestScoreGroupList(gameId: number, cb: { success: Function, fail?: Function }) {
        var url = HttpConfig.getUrl(HttpConfig.ScoreGroupList);
        let sendData = {
            token: GlobalData.loginInfo.token,
            game_id: gameId.toString()
        }
        UIManager.Instace.showUI({ path: UIConfig.WaitItemKey, data: { opacity: 0.5, des: "加载中..." } });
        utils.sendHttpRequest({
            url: url,
            method: "POST",
            data: utils.toJson(sendData),
            success: function (data) {
                console.log("ScoreGroupList success", data);
                rankScoreTeamInfo.list = [];
                if (data && data.length > 0) {
                    for (let i = 0; i < data.length; i++) {
                        const element = data[i];
                        let item = new RankScoreTeamLineData();
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
            fail: function (data) {
                console.log("ScoreGroupList fail ", data);
                UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: data });
                if (cb.fail) cb.fail();
            },
            complete: function () {
                UIManager.Instace.hideUI(UIConfig.WaitItemKey);
            }
        });
    }
    //个人积分&&团队积分
    export function requestRankScoreData(gameId: number, callBack: Function) {
        let addIdx = 0;
        let func = function () {
            addIdx += 1;
            if (addIdx == 2) {
                if (callBack) callBack();
            }
        }
        GlobalData.requestScoreUserList(gameId, {
            success: () => {
                func();
            }
        })
        GlobalData.requestScoreGroupList(gameId, {
            success: () => {
                func();
            }
        });
    }
    //历史战斗记录 1积分赛 2淘汰赛 3海选赛
    export function requestResultList(type: number, cb: { success: Function, fail?: Function }) {
        var url = HttpConfig.getUrl(HttpConfig.GameResultList);
        let sendData = {
            token: GlobalData.loginInfo.token,
            type: type.toString(),
            page: 1,
            limit: 1000
        }
        UIManager.Instace.showUI({ path: UIConfig.WaitItemKey, data: { opacity: 0.5, des: "加载中..." } });
        utils.sendHttpRequest({
            url: url,
            method: "POST",
            data: utils.toJson(sendData),
            success: function (data) {
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
            fail: function (data) {
                console.log("GameResultList fail ", data);
                UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: data });
                if (cb.fail) cb.fail();
            },
            complete: function () {
                UIManager.Instace.hideUI(UIConfig.WaitItemKey);
            }
        });
    }
    export function requestResultListTotal(callBack: Function) {
        let addIdx = 0;
        let func = function () {
            addIdx += 1;
            if (addIdx == 3) {
                if (callBack) callBack();
            }
        }
        //积分
        GlobalData.requestResultList(RaceType.score, {
            success: () => {
                func();
            }
        })
        //淘汰
        GlobalData.requestResultList(RaceType.kick, {
            success: () => {
                func();
            }
        });
        //海选
        GlobalData.requestResultList(RaceType.audition, {
            success: () => {
                func();
            }
        });
    }
}



//大厅-个人
export class RankScorePersonLineData {
    public rank: number;    //排名
    public score: number;   //积分
    public head: string;    //头像
    public name: string;    //昵称
}
//大厅-团队
export class RankScoreTeamLineData {
    public rank: number;    //排名
    public score: number;   //积分
    public head: string;    //头像
    public name: string;    //昵称
}
//大厅-海选
export class RankScoreAuditionLineData {
    public rank: number;    //排名
    public score: number;   //积分
    public head: string;    //头像
    public name: string;    //昵称
}
//大厅-淘汰
export class RankKickLineData {
    public rank: number;    //排名
    public head: string;    //头像
    public time: string;    //时间
    public type: number;    //淘汰|晋级
    public name: string;    //昵称
}
//积分赛
export class RaceScoreLineData {
    public id: number;             //赛事ID
    public gameTitle: string;      //赛事名称
    public registerEndTime: string;//赛事报名截止时间
    public end_timestamp: number;  //报名截止时间戳
    public gameStartTime: string;  //赛事开始时间
    public start_timestamp: number;//开始时间戳
    public totalNum: number;       //总人数
    public currentNum: number;     //已参与
    public gameType: number;       //1 自由报名 2淘汰赛晋级名单（自动不能手动报名）
    public leftTime: number;       //剩余时间
    public state: number;          //0未报名 1已报名
    public timeState: number;      //过期
}
//淘汰赛
export class RaceKickLineData {
    public id: number;             //赛事ID
    public gameTitle: string;      //赛事名称
    public registerEndTime: string;//赛事报名截止时间
    public end_timestamp: number;  //报名截止时间戳
    public gameStartTime: string;  //赛事开始时间
    public start_timestamp: number;//开始时间戳
    public totalNum: number;       //总人数
    public currentNum: number;     //已参与
    public leftTime: number;       //剩余时间
    public state: number;          //0未报名 1已报名
    public timeState: number;      //过期
}
//海选赛
export class RaceAuditionLineData {
    public id: number;             //赛事ID
    public gameTitle: string;      //赛事名称
    public startTime: string;      //赛事开始时间
    public endTime: string;        //赛事结束时间
    public startHour: string;      //每日开始时间
    public endHour: string;        //赛事结束时间
    public start_timestamp: number;//开始时间戳
    public end_timestamp: number;  //结束时间戳
    public leftTime: number;       //剩余时间
    public state: number;          // pre:开始前  now:开始了  pass:开始后
}
//淘汰赛(团队详情)
export class RaceKickTeamInfo {
    public user_id: number;    //用户ID
    public name: string;       //名称
    public head_img: string;   //头像
    public captain: number;     //是否队长 1是 0不是
}
//淘汰赛(晋级名单)
export class RaceKickUpInfo {
    public user_id: number;    //用户ID
    public nick_name: string;  //名称
    public head_img: string;   //头像
    public score: string;      //1晋级 0淘汰
}
//历史战斗记录
export class GameResultInfo {
    public id: number;              //赛事ID
    public game_title: string;      //赛事名称
    public start_time: string;      //赛事报名截止时间
    public user_id: number;         //总人数
    public game_id: number;         //已参与
    public score: number;           //1 自由报名 2淘汰赛晋级名单（自动不能手动报名）
    public type: number;            //剩余时间
    public head_img: string;        //0未报名 1已报名
}

export class recordData {
    public created_time: number;
    public integral: number;
    public status: string;
}

