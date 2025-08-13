import { Component, __private } from "cc";
import PopWindow from "../component/PopWindow";
import { MessageBoxCommon } from "../component/MessageBoxCommon";
import { SetingItem } from "../component/SetingItem";
import MessageHint from "../component/MessageHint";
import { LoadItem } from "../component/LoadItem";
import { WaitItem } from "../component/WaitItem";
import { RuleItem } from "../component/RuleItem";
import { TeamItem } from "../component/team/TeamItem";
import { KeyBoardItem } from "../component/room/KeyBoardItem";
import { CreateRoomItem } from "../component/room/CreateRoomItem";
import { GameEndFreeItem } from "../component/gameEndFree/GameEndFreeItem";
import { GameEndScoreRankItem } from "../component/gameEndScoreRank/GameEndScoreRankItem";
import { GameEndScoreItem } from "../component/gameEndScore/GameEndScoreItem";
import { GameEndKickItem } from "../component/gameEndKick/GameEndKickItem";
import { GameEndKickUpItem } from "../component/gameEndKickUp/GameEndKickUpItem";
import { TeamUpItem } from "../component/teamUp/TeamUpItem";
import { RaceScoreItem } from "../component/raceScore/RaceScoreItem";
import { RaceKickItem } from "../component/raceKick/RaceKickItem";
import { MessageBoxCommonTest } from "../component/MessageBoxCommonTest";
import { CreateTeamItem } from "../component/CreateTeamItem";
import { GameStartNotice } from "../component/gameStartNotice/GameStartNotice";
import { FreeUpItem } from "../component/gameStartNotice/FreeUpItem";
import { RankRaceItem } from "../component/rankRace/RankRaceItem";
import { RankScore } from "../component/rank/RankScore";
import { RankKick } from "../component/rank/RankKick";
import { RaceAuditionItem } from "../component/raceAudition/RaceAuditionItem";
import { RankAuditionItem } from "../component/rank/RankAuditionItem";
import { GameEndAuditionItem } from "../component/gameEndAudition/GameEndAuditionItem";
import { FreeMatchItem } from "../component/match/FreeMatchItem";
import { AuditionMatchItem } from "../component/match/AuditionMatchItem";
import { signInViewItem } from "../component/activity/signInViewItem";
import { shareViewItem } from "../component/activity/shareViewItem";
import { GetItem } from "../component/GetItem";
import { exchangeViewItem } from "../component/activity/exchangeViewItem";
import { exchangeRecordViewItem } from "../component/activity/exchangeRecordViewItem";
import { shareRecordViewItem } from "../component/activity/shareRecordViewItem";
import { activityViewItem } from "../component/activity/activityViewItem";

export module UIConfig {

    var configMap: Map<string, { path: string, comp: __private._types_globals__AbstractedConstructor<PopWindow> }> = new Map<string, { path: string, comp: __private._types_globals__AbstractedConstructor<PopWindow> }>();

    export function init() {
        configMap.clear();
        configMap.set(MessageBoxCommonKey, { path: "prefab/MessageBoxCommon", comp: MessageBoxCommon });
        configMap.set(MessageBoxCommonTestKey, { path: "prefab/MessageBoxCommonTest", comp: MessageBoxCommonTest });
        configMap.set(SettingItemKey, { path: "prefab/SettingItem", comp: SetingItem });
        configMap.set(MessageHintKey, { path: "prefab/MessageHint", comp: MessageHint });
        configMap.set(LoadItemKey, { path: "prefab/LoadItem", comp: LoadItem });
        configMap.set(WaitItemKey, { path: "prefab/WaitItem", comp: WaitItem });
        configMap.set(RuleItemKey, { path: "prefab/RuleItem", comp: RuleItem });
        configMap.set(KeyBoardItemKey, { path: "prefab/room/KeyBoardItem", comp: KeyBoardItem });
        configMap.set(TeamItemKey, { path: "prefab/team/TeamItem", comp: TeamItem });
        configMap.set(CreateRoomItemKey, { path: "prefab/room/CreateRoomItem", comp: CreateRoomItem });
        //结算
        configMap.set(GameEndFreeItemKey, { path: "prefab/gameEndFree/GameEndFreeItem", comp: GameEndFreeItem });
        configMap.set(GameEndAuditionItemKey, { path: "prefab/gameEndAudition/GameEndAuditionItem", comp: GameEndAuditionItem });
        configMap.set(GameEndScoreItemKey, { path: "prefab/gameEndScore/GameEndScoreItem", comp: GameEndScoreItem });
        configMap.set(GameEndScoreRankItemKey, { path: "prefab/gameEndScoreRank/GameEndScoreRankItem", comp: GameEndScoreRankItem });
        configMap.set(GameEndKickItemKey, { path: "prefab/gameEndKick/GameEndKickItem", comp: GameEndKickItem });
        configMap.set(GameEndKickUpItemKey, { path: "prefab/gameEndKickUp/GameEndKickUpItem", comp: GameEndKickUpItem });
        configMap.set(TeamUpItemKey, { path: "prefab/teamUp/TeamUpItem", comp: TeamUpItem });
        configMap.set(RaceScoreItemKey, { path: "prefab/raceScore/RaceScoreItem", comp: RaceScoreItem });
        configMap.set(RaceKickItemKey, { path: "prefab/raceKick/RaceKickItem", comp: RaceKickItem });
        configMap.set(RaceAuditionItemKey, { path: "prefab/raceAudition/RaceAuditionItem", comp: RaceAuditionItem });
        configMap.set(CreateTeamItemKey, { path: "prefab/CreateTeamItem", comp: CreateTeamItem });
        configMap.set(GameStartNoticeKey, { path: "prefab/gameStartNotice/GameStartNotice", comp: GameStartNotice });
        configMap.set(FreeUpItemKey, { path: "prefab/gameStartNotice/FreeUpItem", comp: FreeUpItem });
        configMap.set(RankRaceItemKey, { path: "prefab/rankRace/RankRaceItem", comp: RankRaceItem });
        configMap.set(RankScoreItemKey, { path: "prefab/rank/RankScoreItem", comp: RankScore });
        configMap.set(RankKickItemKey, { path: "prefab/rank/RankKickItem", comp: RankKick });
        configMap.set(RankAuditionItemKey, { path: "prefab/rank/RankAuditionItem", comp: RankAuditionItem });
        configMap.set(FreeMatchItemKey, { path: "prefab/match/FreeMatchItem", comp: FreeMatchItem });
        configMap.set(AuditionMatchItemKey, { path: "prefab/match/AuditionMatchItem", comp: AuditionMatchItem });
        configMap.set(signInViewItemKey, {path: "prefab/activity/signInViewItem", comp: signInViewItem });
        configMap.set(shareViewItemKey, {path: "prefab/activity/shareViewItem", comp: shareViewItem});
        configMap.set(getItemKey, {path: "prefab/GetItem", comp: GetItem });
        configMap.set(exchangeViewItemKey, {path: 'prefab/activity/exchangeViewItem', comp: exchangeViewItem});
        configMap.set(exchangeRecordViewItemKey, {path: 'prefab/activity/exchangeRecordViewItem', comp: exchangeRecordViewItem});
        configMap.set(shareRecordViewItemKey, {path: 'prefab/activity/shareRecordViewItem', comp: shareRecordViewItem});
        configMap.set(activityViewItemKey, {path: 'prefab/activity/activityViewItem', comp: activityViewItem});
    }

    export function getUIInfoByName(str: string) {
    if (configMap.has(str)) {
            return configMap.get(str);
        }
        return null;
    }

    export const activityViewItemKey:string = 'activityViewItem';
    export const shareRecordViewItemKey: string = 'shareRecordViewItem';
    export const exchangeRecordViewItemKey: string = 'exchangeRecordViewItem';
    export const exchangeViewItemKey: string = 'exchangeViewItem';
    export const getItemKey: string = 'GetItem';
    export const shareViewItemKey: string = 'shareViewItem'
    export const signInViewItemKey: string = 'signInViewItem';
    export const MessageBoxCommonKey: string = "MessageBoxCommon";         //通用提示框
    export const MessageBoxCommonTestKey: string = "MessageBoxCommonTest"; //通用提示框(测试)
    export const SettingItemKey: string = "SettingItem";                   //设置
    export const MessageHintKey: string = "MessageHint";                   //提示条
    export const LoadItemKey: string = "LoadItem";                         //加载场景
    export const WaitItemKey: string = "WaitItem";                         //等待提示
    export const RankItemKey: string = "RankItem";                         //排行榜
    export const RuleItemKey: string = "RuleItem";                         //规则
    export const KeyBoardItemKey: string = "KeyBoardItem";                 //小键盘
    export const TeamItemKey: string = "TeamItem";                         //已有团队
    export const CreateRoomItemKey: string = "CreateRoomItem";             //创建房间
    //结算
    export const GameEndFreeItemKey: string = "GameEndFreeItem";            //自由嗨结算
    export const GameEndAuditionItemKey: string = "GameEndAuditionItem";   //海选赛结算
    export const GameEndScoreItemKey: string = "GameEndScoreItem";          //积分赛结算
    export const GameEndKickItemKey: string = "GameEndKickItem";            //淘汰赛结算
    export const GameEndScoreRankItemKey: string = "GameEndScoreRankItem";  //积分赛名单
    export const GameEndKickUpItemKey: string = "GameEndKickUpItem";        //淘汰赛名单
    export const TeamUpItemKey: string = "TeamUpItem";                      //组队
    export const RaceScoreItemKey: string = "RaceScoreItem";                //积分赛
    export const RaceKickItemKey: string = "RaceKickItem";                  //淘汰赛
    export const RaceAuditionItemKey: string = "RaceAuditionItem";          //海选赛
    export const CreateTeamItemKey: string = "CreateTeamItem";              //创建队伍
    export const GameStartNoticeKey: string = "GameStartNotice";            //淘汰赛开赛通知
    export const FreeUpItemKey: string = "FreeUpItem";                      //淘汰赛轮空晋级
    export const RankRaceItemKey: string = "RankRaceItem";                  //历史战斗记录
    export const RankScoreItemKey: string = "RankScoreItem";                //积分排行
    export const RankKickItemKey: string = "RankKickItem";                  //淘汰排行
    export const RankAuditionItemKey: string = "RankAuditionItem";          //海选赛
    export const FreeMatchItemKey: string = "FreeMatchItem";                //自由玩匹配中
    export const AuditionMatchItemKey: string = "AuditionMatchItem";        //海选赛匹配中


}

