System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, UrlConfig, _crd, HttpConfig;

  function _reportPossibleCrUseOfUrlConfig(extras) {
    _reporterNs.report("UrlConfig", "./UrlConfig", _context.meta, extras);
  }

  _export("HttpConfig", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      UrlConfig = _unresolved_2.UrlConfig;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e38c67kDJpM0pJ1wQPDt+IY", "HttpConfig", undefined);

      (function (_HttpConfig) {
        const isOnline = _HttpConfig.isOnline = false;
        const Login = _HttpConfig.Login = 100;
        const QueryOutGameList = _HttpConfig.QueryOutGameList = 101;
        const CreateOutGameZu = _HttpConfig.CreateOutGameZu = 102;
        const GetGameUserList = _HttpConfig.GetGameUserList = 103;
        const AddOutGameZu = _HttpConfig.AddOutGameZu = 104;
        const QueryUserGroup = _HttpConfig.QueryUserGroup = 105;
        const QueryScoreGameList = _HttpConfig.QueryScoreGameList = 106;
        const QueryUpList = _HttpConfig.QueryUpList = 107;
        const JoinGame = _HttpConfig.JoinGame = 108;
        const ScoreUserList = _HttpConfig.ScoreUserList = 109;
        const ScoreGroupList = _HttpConfig.ScoreGroupList = 110;
        const GameResultList = _HttpConfig.GameResultList = 111;
        const GetUserInfo = _HttpConfig.GetUserInfo = 112;
        const CancelGameZu = _HttpConfig.CancelGameZu = 113;
        const QueryAuditionGameList = _HttpConfig.QueryAuditionGameList = 114;
        const AuditionUpList = _HttpConfig.AuditionUpList = 115;
        //海选赛晋级名单
        var httpMap = null;
        var commonUrl = "";

        function init() {
          httpMap = new Map();
          commonUrl = (_crd && UrlConfig === void 0 ? (_reportPossibleCrUseOfUrlConfig({
            error: Error()
          }), UrlConfig) : UrlConfig).getHttpUrl();
          httpMap.set(Login, commonUrl + "api/Login/login");
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
        }

        _HttpConfig.init = init;

        function getUrl(cmdID) {
          if (httpMap.has(cmdID)) {
            return httpMap.get(cmdID);
          }

          return null;
        }

        _HttpConfig.getUrl = getUrl;
      })(HttpConfig || _export("HttpConfig", HttpConfig = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ae1ccc372ea857a6232c7e8ed95795e618ea2203.js.map