import { UrlConfig } from "./UrlConfig";




export module HttpConfig{
    export const isOnline: boolean = false;

    export const Login: number = 100;                //登录
    export const QueryOutGameList: number = 101;     //淘汰赛列表
    export const CreateOutGameZu: number = 102;      //创建队伍
    export const GetGameUserList: number = 103;      //获取赛事报名信息
    export const AddOutGameZu: number = 104;         //加入队伍
    export const QueryUserGroup: number = 105;       //查询团队列表
    export const QueryScoreGameList: number = 106;   //积分赛列表
    export const QueryUpList: number = 107;          //晋级名单
    export const JoinGame: number = 108;             //报名积分赛
    export const ScoreUserList: number = 109;        //个人排行
    export const ScoreGroupList: number = 110;       //团队排行
    export const GameResultList: number = 111;       //查询历史战斗记录
    export const GetUserInfo: number = 112;          //查询用户信息
    export const CancelGameZu: number = 113;         //CancelGameZu
    export const QueryAuditionGameList: number = 114;//海选赛列表
    export const AuditionUpList: number = 115;       //海选赛晋级名单
    export const SendCode: number = 116;
    export const QueryMyFirstInviter: number = 117; //查询自己所有一级
    export const AdWatchInfo: number = 118; //查询自己所有一级
    export const AdWatchCount: number = 119; //查询自己所有一级
    export const checkUserExists: number = 120;


    var httpMap: Map<number, string> = null;
    var commonUrl = "";

    export function init() {
        httpMap = new Map<number, string>();
        commonUrl = UrlConfig.getHttpUrl();
        // httpMap.set(Login, commonUrl + "api/Login/login");//之前登陆的接口不要用了
        httpMap.set(QueryOutGameList, commonUrl + "api/Game/queryOutGameList");
        httpMap.set(CreateOutGameZu, commonUrl + "api/Game/createOutGameZu");
        httpMap.set(GetGameUserList, commonUrl + "api/Game/getGameUserList");
        httpMap.set(AddOutGameZu, commonUrl + "api/Game/addOutGameZu");
        httpMap.set(QueryUserGroup, commonUrl + "api/User/queryUserGroup");
        httpMap.set(QueryScoreGameList, commonUrl + "/api/Game/queryScoreGameList");
        httpMap.set(QueryUpList, commonUrl + "api/Game/queryUpList");
        httpMap.set(JoinGame, commonUrl + "api/Game/joinGame");
        httpMap.set(ScoreUserList, commonUrl + "api/Game/scoreUserList");
        httpMap.set(ScoreGroupList, commonUrl + "api/Game/scoreGroupList");
        httpMap.set(GameResultList, commonUrl + "api/Game/queryGameResultList");
        httpMap.set(GetUserInfo, commonUrl + "api/User/getUserInfo");
        httpMap.set(CancelGameZu, commonUrl + "api/Game/cancelGameZu");
        httpMap.set(QueryAuditionGameList, commonUrl + "api/Game/queryMassGameList");
        httpMap.set(AuditionUpList, commonUrl + "api/Game/massUserList");
        httpMap.set(Login, commonUrl + 'api/Login/loginOrRegister');
        httpMap.set(SendCode, commonUrl + 'api/Login/sendCode');
        httpMap.set(QueryMyFirstInviter, commonUrl + 'api/User/queryMyFirstInviter');
        httpMap.set(AdWatchInfo, commonUrl + 'api/User/queryAdWatchInfo');
        httpMap.set(AdWatchCount, commonUrl + 'api/User/incrementAdWatchCount');
        httpMap.set(checkUserExists, commonUrl + 'api/Login/checkUserExists');
    }
    export function getUrl(cmdID: number) {
        if (httpMap.has(cmdID)) {
            return httpMap.get(cmdID);
        }
        return null;
    }
    
}

