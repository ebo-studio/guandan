System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18", "__unresolved_19", "__unresolved_20", "__unresolved_21", "__unresolved_22", "__unresolved_23", "__unresolved_24", "__unresolved_25", "__unresolved_26", "__unresolved_27", "__unresolved_28", "__unresolved_29"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, MessageBoxCommon, SetingItem, MessageHint, LoadItem, WaitItem, RuleItem, TeamItem, KeyBoardItem, CreateRoomItem, GameEndFreeItem, GameEndScoreRankItem, GameEndScoreItem, GameEndKickItem, GameEndKickUpItem, TeamUpItem, RaceScoreItem, RaceKickItem, MessageBoxCommonTest, CreateTeamItem, GameStartNotice, FreeUpItem, RankRaceItem, RankScore, RankKick, RaceAuditionItem, RankAuditionItem, GameEndAuditionItem, FreeMatchItem, AuditionMatchItem, _crd, UIConfig;

  function _reportPossibleCrUseOfPopWindow(extras) {
    _reporterNs.report("PopWindow", "../component/PopWindow", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMessageBoxCommon(extras) {
    _reporterNs.report("MessageBoxCommon", "../component/MessageBoxCommon", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSetingItem(extras) {
    _reporterNs.report("SetingItem", "../component/SetingItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMessageHint(extras) {
    _reporterNs.report("MessageHint", "../component/MessageHint", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadItem(extras) {
    _reporterNs.report("LoadItem", "../component/LoadItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWaitItem(extras) {
    _reporterNs.report("WaitItem", "../component/WaitItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRuleItem(extras) {
    _reporterNs.report("RuleItem", "../component/RuleItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTeamItem(extras) {
    _reporterNs.report("TeamItem", "../component/team/TeamItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfKeyBoardItem(extras) {
    _reporterNs.report("KeyBoardItem", "../component/room/KeyBoardItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCreateRoomItem(extras) {
    _reporterNs.report("CreateRoomItem", "../component/room/CreateRoomItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEndFreeItem(extras) {
    _reporterNs.report("GameEndFreeItem", "../component/gameEndFree/GameEndFreeItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEndScoreRankItem(extras) {
    _reporterNs.report("GameEndScoreRankItem", "../component/gameEndScoreRank/GameEndScoreRankItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEndScoreItem(extras) {
    _reporterNs.report("GameEndScoreItem", "../component/gameEndScore/GameEndScoreItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEndKickItem(extras) {
    _reporterNs.report("GameEndKickItem", "../component/gameEndKick/GameEndKickItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEndKickUpItem(extras) {
    _reporterNs.report("GameEndKickUpItem", "../component/gameEndKickUp/GameEndKickUpItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTeamUpItem(extras) {
    _reporterNs.report("TeamUpItem", "../component/teamUp/TeamUpItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRaceScoreItem(extras) {
    _reporterNs.report("RaceScoreItem", "../component/raceScore/RaceScoreItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRaceKickItem(extras) {
    _reporterNs.report("RaceKickItem", "../component/raceKick/RaceKickItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMessageBoxCommonTest(extras) {
    _reporterNs.report("MessageBoxCommonTest", "../component/MessageBoxCommonTest", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCreateTeamItem(extras) {
    _reporterNs.report("CreateTeamItem", "../component/CreateTeamItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameStartNotice(extras) {
    _reporterNs.report("GameStartNotice", "../component/gameStartNotice/GameStartNotice", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFreeUpItem(extras) {
    _reporterNs.report("FreeUpItem", "../component/gameStartNotice/FreeUpItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRankRaceItem(extras) {
    _reporterNs.report("RankRaceItem", "../component/rankRace/RankRaceItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRankScore(extras) {
    _reporterNs.report("RankScore", "../component/rank/RankScore", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRankKick(extras) {
    _reporterNs.report("RankKick", "../component/rank/RankKick", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRaceAuditionItem(extras) {
    _reporterNs.report("RaceAuditionItem", "../component/raceAudition/RaceAuditionItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRankAuditionItem(extras) {
    _reporterNs.report("RankAuditionItem", "../component/rank/RankAuditionItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEndAuditionItem(extras) {
    _reporterNs.report("GameEndAuditionItem", "../component/gameEndAudition/GameEndAuditionItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFreeMatchItem(extras) {
    _reporterNs.report("FreeMatchItem", "../component/match/FreeMatchItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAuditionMatchItem(extras) {
    _reporterNs.report("AuditionMatchItem", "../component/match/AuditionMatchItem", _context.meta, extras);
  }

  _export("UIConfig", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      MessageBoxCommon = _unresolved_2.MessageBoxCommon;
    }, function (_unresolved_3) {
      SetingItem = _unresolved_3.SetingItem;
    }, function (_unresolved_4) {
      MessageHint = _unresolved_4.default;
    }, function (_unresolved_5) {
      LoadItem = _unresolved_5.LoadItem;
    }, function (_unresolved_6) {
      WaitItem = _unresolved_6.WaitItem;
    }, function (_unresolved_7) {
      RuleItem = _unresolved_7.RuleItem;
    }, function (_unresolved_8) {
      TeamItem = _unresolved_8.TeamItem;
    }, function (_unresolved_9) {
      KeyBoardItem = _unresolved_9.KeyBoardItem;
    }, function (_unresolved_10) {
      CreateRoomItem = _unresolved_10.CreateRoomItem;
    }, function (_unresolved_11) {
      GameEndFreeItem = _unresolved_11.GameEndFreeItem;
    }, function (_unresolved_12) {
      GameEndScoreRankItem = _unresolved_12.GameEndScoreRankItem;
    }, function (_unresolved_13) {
      GameEndScoreItem = _unresolved_13.GameEndScoreItem;
    }, function (_unresolved_14) {
      GameEndKickItem = _unresolved_14.GameEndKickItem;
    }, function (_unresolved_15) {
      GameEndKickUpItem = _unresolved_15.GameEndKickUpItem;
    }, function (_unresolved_16) {
      TeamUpItem = _unresolved_16.TeamUpItem;
    }, function (_unresolved_17) {
      RaceScoreItem = _unresolved_17.RaceScoreItem;
    }, function (_unresolved_18) {
      RaceKickItem = _unresolved_18.RaceKickItem;
    }, function (_unresolved_19) {
      MessageBoxCommonTest = _unresolved_19.MessageBoxCommonTest;
    }, function (_unresolved_20) {
      CreateTeamItem = _unresolved_20.CreateTeamItem;
    }, function (_unresolved_21) {
      GameStartNotice = _unresolved_21.GameStartNotice;
    }, function (_unresolved_22) {
      FreeUpItem = _unresolved_22.FreeUpItem;
    }, function (_unresolved_23) {
      RankRaceItem = _unresolved_23.RankRaceItem;
    }, function (_unresolved_24) {
      RankScore = _unresolved_24.RankScore;
    }, function (_unresolved_25) {
      RankKick = _unresolved_25.RankKick;
    }, function (_unresolved_26) {
      RaceAuditionItem = _unresolved_26.RaceAuditionItem;
    }, function (_unresolved_27) {
      RankAuditionItem = _unresolved_27.RankAuditionItem;
    }, function (_unresolved_28) {
      GameEndAuditionItem = _unresolved_28.GameEndAuditionItem;
    }, function (_unresolved_29) {
      FreeMatchItem = _unresolved_29.FreeMatchItem;
    }, function (_unresolved_30) {
      AuditionMatchItem = _unresolved_30.AuditionMatchItem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6ee53hC/5hL97WBxgdj1wXO", "UIConfig", undefined);

      __checkObsolete__(['Component', '__private']);

      (function (_UIConfig) {
        var configMap = new Map();

        function init() {
          configMap.clear();
          configMap.set(MessageBoxCommonKey, {
            path: "prefab/MessageBoxCommon",
            comp: _crd && MessageBoxCommon === void 0 ? (_reportPossibleCrUseOfMessageBoxCommon({
              error: Error()
            }), MessageBoxCommon) : MessageBoxCommon
          });
          configMap.set(MessageBoxCommonTestKey, {
            path: "prefab/MessageBoxCommonTest",
            comp: _crd && MessageBoxCommonTest === void 0 ? (_reportPossibleCrUseOfMessageBoxCommonTest({
              error: Error()
            }), MessageBoxCommonTest) : MessageBoxCommonTest
          });
          configMap.set(SettingItemKey, {
            path: "prefab/SettingItem",
            comp: _crd && SetingItem === void 0 ? (_reportPossibleCrUseOfSetingItem({
              error: Error()
            }), SetingItem) : SetingItem
          });
          configMap.set(MessageHintKey, {
            path: "prefab/MessageHint",
            comp: _crd && MessageHint === void 0 ? (_reportPossibleCrUseOfMessageHint({
              error: Error()
            }), MessageHint) : MessageHint
          });
          configMap.set(LoadItemKey, {
            path: "prefab/LoadItem",
            comp: _crd && LoadItem === void 0 ? (_reportPossibleCrUseOfLoadItem({
              error: Error()
            }), LoadItem) : LoadItem
          });
          configMap.set(WaitItemKey, {
            path: "prefab/WaitItem",
            comp: _crd && WaitItem === void 0 ? (_reportPossibleCrUseOfWaitItem({
              error: Error()
            }), WaitItem) : WaitItem
          });
          configMap.set(RuleItemKey, {
            path: "prefab/RuleItem",
            comp: _crd && RuleItem === void 0 ? (_reportPossibleCrUseOfRuleItem({
              error: Error()
            }), RuleItem) : RuleItem
          });
          configMap.set(KeyBoardItemKey, {
            path: "prefab/room/KeyBoardItem",
            comp: _crd && KeyBoardItem === void 0 ? (_reportPossibleCrUseOfKeyBoardItem({
              error: Error()
            }), KeyBoardItem) : KeyBoardItem
          });
          configMap.set(TeamItemKey, {
            path: "prefab/team/TeamItem",
            comp: _crd && TeamItem === void 0 ? (_reportPossibleCrUseOfTeamItem({
              error: Error()
            }), TeamItem) : TeamItem
          });
          configMap.set(CreateRoomItemKey, {
            path: "prefab/room/CreateRoomItem",
            comp: _crd && CreateRoomItem === void 0 ? (_reportPossibleCrUseOfCreateRoomItem({
              error: Error()
            }), CreateRoomItem) : CreateRoomItem
          }); //结算

          configMap.set(GameEndFreeItemKey, {
            path: "prefab/gameEndFree/GameEndFreeItem",
            comp: _crd && GameEndFreeItem === void 0 ? (_reportPossibleCrUseOfGameEndFreeItem({
              error: Error()
            }), GameEndFreeItem) : GameEndFreeItem
          });
          configMap.set(GameEndAuditionItemKey, {
            path: "prefab/gameEndAudition/GameEndAuditionItem",
            comp: _crd && GameEndAuditionItem === void 0 ? (_reportPossibleCrUseOfGameEndAuditionItem({
              error: Error()
            }), GameEndAuditionItem) : GameEndAuditionItem
          });
          configMap.set(GameEndScoreItemKey, {
            path: "prefab/gameEndScore/GameEndScoreItem",
            comp: _crd && GameEndScoreItem === void 0 ? (_reportPossibleCrUseOfGameEndScoreItem({
              error: Error()
            }), GameEndScoreItem) : GameEndScoreItem
          });
          configMap.set(GameEndScoreRankItemKey, {
            path: "prefab/gameEndScoreRank/GameEndScoreRankItem",
            comp: _crd && GameEndScoreRankItem === void 0 ? (_reportPossibleCrUseOfGameEndScoreRankItem({
              error: Error()
            }), GameEndScoreRankItem) : GameEndScoreRankItem
          });
          configMap.set(GameEndKickItemKey, {
            path: "prefab/gameEndKick/GameEndKickItem",
            comp: _crd && GameEndKickItem === void 0 ? (_reportPossibleCrUseOfGameEndKickItem({
              error: Error()
            }), GameEndKickItem) : GameEndKickItem
          });
          configMap.set(GameEndKickUpItemKey, {
            path: "prefab/gameEndKickUp/GameEndKickUpItem",
            comp: _crd && GameEndKickUpItem === void 0 ? (_reportPossibleCrUseOfGameEndKickUpItem({
              error: Error()
            }), GameEndKickUpItem) : GameEndKickUpItem
          });
          configMap.set(TeamUpItemKey, {
            path: "prefab/teamUp/TeamUpItem",
            comp: _crd && TeamUpItem === void 0 ? (_reportPossibleCrUseOfTeamUpItem({
              error: Error()
            }), TeamUpItem) : TeamUpItem
          });
          configMap.set(RaceScoreItemKey, {
            path: "prefab/raceScore/RaceScoreItem",
            comp: _crd && RaceScoreItem === void 0 ? (_reportPossibleCrUseOfRaceScoreItem({
              error: Error()
            }), RaceScoreItem) : RaceScoreItem
          });
          configMap.set(RaceKickItemKey, {
            path: "prefab/raceKick/RaceKickItem",
            comp: _crd && RaceKickItem === void 0 ? (_reportPossibleCrUseOfRaceKickItem({
              error: Error()
            }), RaceKickItem) : RaceKickItem
          });
          configMap.set(RaceAuditionItemKey, {
            path: "prefab/raceAudition/RaceAuditionItem",
            comp: _crd && RaceAuditionItem === void 0 ? (_reportPossibleCrUseOfRaceAuditionItem({
              error: Error()
            }), RaceAuditionItem) : RaceAuditionItem
          });
          configMap.set(CreateTeamItemKey, {
            path: "prefab/CreateTeamItem",
            comp: _crd && CreateTeamItem === void 0 ? (_reportPossibleCrUseOfCreateTeamItem({
              error: Error()
            }), CreateTeamItem) : CreateTeamItem
          });
          configMap.set(GameStartNoticeKey, {
            path: "prefab/gameStartNotice/GameStartNotice",
            comp: _crd && GameStartNotice === void 0 ? (_reportPossibleCrUseOfGameStartNotice({
              error: Error()
            }), GameStartNotice) : GameStartNotice
          });
          configMap.set(FreeUpItemKey, {
            path: "prefab/gameStartNotice/FreeUpItem",
            comp: _crd && FreeUpItem === void 0 ? (_reportPossibleCrUseOfFreeUpItem({
              error: Error()
            }), FreeUpItem) : FreeUpItem
          });
          configMap.set(RankRaceItemKey, {
            path: "prefab/rankRace/RankRaceItem",
            comp: _crd && RankRaceItem === void 0 ? (_reportPossibleCrUseOfRankRaceItem({
              error: Error()
            }), RankRaceItem) : RankRaceItem
          });
          configMap.set(RankScoreItemKey, {
            path: "prefab/rank/RankScoreItem",
            comp: _crd && RankScore === void 0 ? (_reportPossibleCrUseOfRankScore({
              error: Error()
            }), RankScore) : RankScore
          });
          configMap.set(RankKickItemKey, {
            path: "prefab/rank/RankKickItem",
            comp: _crd && RankKick === void 0 ? (_reportPossibleCrUseOfRankKick({
              error: Error()
            }), RankKick) : RankKick
          });
          configMap.set(RankAuditionItemKey, {
            path: "prefab/rank/RankAuditionItem",
            comp: _crd && RankAuditionItem === void 0 ? (_reportPossibleCrUseOfRankAuditionItem({
              error: Error()
            }), RankAuditionItem) : RankAuditionItem
          });
          configMap.set(FreeMatchItemKey, {
            path: "prefab/match/FreeMatchItem",
            comp: _crd && FreeMatchItem === void 0 ? (_reportPossibleCrUseOfFreeMatchItem({
              error: Error()
            }), FreeMatchItem) : FreeMatchItem
          });
          configMap.set(AuditionMatchItemKey, {
            path: "prefab/match/AuditionMatchItem",
            comp: _crd && AuditionMatchItem === void 0 ? (_reportPossibleCrUseOfAuditionMatchItem({
              error: Error()
            }), AuditionMatchItem) : AuditionMatchItem
          });
        }

        _UIConfig.init = init;

        function getUIInfoByName(str) {
          if (configMap.has(str)) {
            return configMap.get(str);
          }

          return null;
        }

        _UIConfig.getUIInfoByName = getUIInfoByName;
        const MessageBoxCommonKey = _UIConfig.MessageBoxCommonKey = "MessageBoxCommon";
        const MessageBoxCommonTestKey = _UIConfig.MessageBoxCommonTestKey = "MessageBoxCommonTest";
        const SettingItemKey = _UIConfig.SettingItemKey = "SettingItem";
        const MessageHintKey = _UIConfig.MessageHintKey = "MessageHint";
        const LoadItemKey = _UIConfig.LoadItemKey = "LoadItem";
        const WaitItemKey = _UIConfig.WaitItemKey = "WaitItem";
        const RankItemKey = _UIConfig.RankItemKey = "RankItem";
        const RuleItemKey = _UIConfig.RuleItemKey = "RuleItem";
        const KeyBoardItemKey = _UIConfig.KeyBoardItemKey = "KeyBoardItem";
        const TeamItemKey = _UIConfig.TeamItemKey = "TeamItem";
        const CreateRoomItemKey = _UIConfig.CreateRoomItemKey = "CreateRoomItem";
        const GameEndFreeItemKey = _UIConfig.GameEndFreeItemKey = "GameEndFreeItem";
        const GameEndAuditionItemKey = _UIConfig.GameEndAuditionItemKey = "GameEndAuditionItem";
        const GameEndScoreItemKey = _UIConfig.GameEndScoreItemKey = "GameEndScoreItem";
        const GameEndKickItemKey = _UIConfig.GameEndKickItemKey = "GameEndKickItem";
        const GameEndScoreRankItemKey = _UIConfig.GameEndScoreRankItemKey = "GameEndScoreRankItem";
        const GameEndKickUpItemKey = _UIConfig.GameEndKickUpItemKey = "GameEndKickUpItem";
        const TeamUpItemKey = _UIConfig.TeamUpItemKey = "TeamUpItem";
        const RaceScoreItemKey = _UIConfig.RaceScoreItemKey = "RaceScoreItem";
        const RaceKickItemKey = _UIConfig.RaceKickItemKey = "RaceKickItem";
        const RaceAuditionItemKey = _UIConfig.RaceAuditionItemKey = "RaceAuditionItem";
        const CreateTeamItemKey = _UIConfig.CreateTeamItemKey = "CreateTeamItem";
        const GameStartNoticeKey = _UIConfig.GameStartNoticeKey = "GameStartNotice";
        const FreeUpItemKey = _UIConfig.FreeUpItemKey = "FreeUpItem";
        const RankRaceItemKey = _UIConfig.RankRaceItemKey = "RankRaceItem";
        const RankScoreItemKey = _UIConfig.RankScoreItemKey = "RankScoreItem";
        const RankKickItemKey = _UIConfig.RankKickItemKey = "RankKickItem";
        const RankAuditionItemKey = _UIConfig.RankAuditionItemKey = "RankAuditionItem";
        const FreeMatchItemKey = _UIConfig.FreeMatchItemKey = "FreeMatchItem";
        const AuditionMatchItemKey = _UIConfig.AuditionMatchItemKey = "AuditionMatchItem";
      })(UIConfig || _export("UIConfig", UIConfig = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3ddf15c6d716025fcef1a9200bae96feea648abc.js.map