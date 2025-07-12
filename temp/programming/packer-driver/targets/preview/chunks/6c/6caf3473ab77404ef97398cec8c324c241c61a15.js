System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, utils, GlobalData, SoundManager, GameDefine, _crd, GameLogic;

  function _reportPossibleCrUseOfutils(extras) {
    _reporterNs.report("utils", "../../common/utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalData(extras) {
    _reporterNs.report("GlobalData", "../../manager/GlobalData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundManager(extras) {
    _reporterNs.report("SoundManager", "../../manager/SoundManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameDefine(extras) {
    _reporterNs.report("GameDefine", "./GameDefine", _context.meta, extras);
  }

  _export("GameLogic", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      utils = _unresolved_2.utils;
    }, function (_unresolved_3) {
      GlobalData = _unresolved_3.GlobalData;
    }, function (_unresolved_4) {
      SoundManager = _unresolved_4.SoundManager;
    }, function (_unresolved_5) {
      GameDefine = _unresolved_5.GameDefine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "644aaJPrNBKjYd8wNFSVjnm", "GameLogic", undefined);

      (function (_GameLogic) {
        var userSelf = null;
        var userAll = [];
        var userMap = new Map(); //自己数据

        function initSelfData(data) {
          userSelf = data;
        }

        _GameLogic.initSelfData = initSelfData;

        function getSelfData() {
          return userSelf;
        }

        _GameLogic.getSelfData = getSelfData;

        function initAllUsers(data) {
          userAll = data;
          userMap.clear();

          for (var i = 0; i < userAll.length; i++) {
            var element = userAll[i];
            userMap.set(element.id, element);
          }
        }

        _GameLogic.initAllUsers = initAllUsers;

        function getAllUsers() {
          return userAll;
        }

        _GameLogic.getAllUsers = getAllUsers;

        function getUserDataById(id) {
          var user = userMap.get(id);

          if (user) {
            return user;
          }
        }

        _GameLogic.getUserDataById = getUserDataById;

        function getUserViewIdById(id) {
          //测试
          if (false) {
            if (userMap.size == 0) {
              var item1 = new GameMsg.User();
              item1.id = 4;
              item1.index = 1;
              userMap.set(4, item1);
              userSelf = item1;
              var item2 = new GameMsg.User();
              item2.id = 5;
              item2.index = 2;
              userMap.set(5, item2);
              var item3 = new GameMsg.User();
              item3.id = 6;
              item3.index = 3;
              userMap.set(6, item3);
              var item4 = new GameMsg.User();
              item4.id = 7;
              item4.index = 4;
              userMap.set(7, item4);
            }
          }

          var user = userMap.get(id);

          if (user) {
            return switchChairIdToViewId(user.index);
          }
        }

        _GameLogic.getUserViewIdById = getUserViewIdById;

        function getUserViewIdByIndex(index) {
          return switchChairIdToViewId(index);
        }

        _GameLogic.getUserViewIdByIndex = getUserViewIdByIndex;

        function switchChairIdToViewId(chairId) {
          return (chairId - userSelf.index + (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).MAXPLAYER + 1) % (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).MAXPLAYER;
        }

        _GameLogic.switchChairIdToViewId = switchChairIdToViewId;

        function switchViewIdToChairId(viewId) {
          return (viewId + userSelf.index + (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).MAXPLAYER) % (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).MAXPLAYER;
        }

        _GameLogic.switchViewIdToChairId = switchViewIdToChairId;

        function convertCardS2C(value) {
          var tmpColor = value % 10;
          var tmpSize = Math.floor(value / 10); //牌色转换

          if (tmpColor == 1) {
            tmpColor = 2;
          } //红
          else if (tmpColor == 2) {
            tmpColor = 0;
          } //方
          else if (tmpColor == 3) {
            tmpColor = 1;
          } //梅
          else if (tmpColor == 4) {
            tmpColor = 3;
          } //黑
          else if (tmpColor == 5) {
            tmpColor = 4;
          } //小王,大王
          //牌值转换


          if (tmpSize == 14) {
            tmpSize = 1;
          } else if (tmpSize == 15) {
            tmpSize = 14;
          } else if (tmpSize == 16) {
            tmpSize = 15;
          }

          return tmpColor * 16 + tmpSize;
        }

        _GameLogic.convertCardS2C = convertCardS2C;

        function convertCardListS2C(values) {
          if (values.length == 0) return [];
          var tmpList = [];
          var numList = (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).deepCopy(values);

          for (var i = 0; i < numList.length; i++) {
            tmpList.push(convertCardS2C(numList[i]));
          } // for (let i = 0; i < tmpList.length; i++) {
          //     let dd = tmpList[i].toString(16);
          //     console.log(dd);
          // }


          return tmpList;
        }

        _GameLogic.convertCardListS2C = convertCardListS2C;

        function convertCardC2S(value) {
          var tmpColor = Math.floor(value / 16);
          var tmpSize = value % 16; //牌色转换

          if (tmpColor == 2) {
            tmpColor = 1;
          } //红
          else if (tmpColor == 0) {
            tmpColor = 2;
          } //方
          else if (tmpColor == 1) {
            tmpColor = 3;
          } //梅
          else if (tmpColor == 3) {
            tmpColor = 4;
          } //黑
          else if (tmpColor == 4) {
            tmpColor = 5;
          } //小王,大王
          //牌值转换


          if (tmpSize == 1) {
            tmpSize = 14;
          } else if (tmpSize == 14) {
            tmpSize = 15;
          } else if (tmpSize == 15) {
            tmpSize = 16;
          }

          return tmpSize * 10 + tmpColor;
        }

        _GameLogic.convertCardC2S = convertCardC2S;

        function convertCardListC2S(values) {
          if (values.length == 0) return;
          var tmpList = [];
          var numList = (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).deepCopy(values);

          for (var i = 0; i < numList.length; i++) {
            tmpList.push(convertCardC2S(numList[i]));
          } // for (let i = 0; i < tmpList.length; i++) {
          //     let dd = tmpList[i];
          //     console.log(dd);
          // }
          // console.log("tmpList---> ", tmpList);


          return tmpList;
        }

        _GameLogic.convertCardListC2S = convertCardListC2S;

        function checkResult(datas) {
          var list = (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).deepCopy(datas);
          var isWin = false;
          var selfList = [];
          var otherList = [];
          var allList = []; //自己输赢(头游的归属)

          for (var i = 0; i < list.list.length; i++) {
            var element = list.list[i];
            var viewId = GameLogic.getUserViewIdById(element.id);

            if (!Boolean(element.res)) {
              element.res = 4;
            }

            if (viewId == 1 || viewId == 3) {
              if (element.res && element.res == 1) {
                isWin = true;
              }

              selfList.push(element);
            } else {
              otherList.push(element);
            }
          }

          selfList.sort((a, b) => {
            return a.res - b.res;
          });
          otherList.sort((a, b) => {
            return a.res - b.res;
          });
          allList = selfList.concat(otherList);
          return {
            isWin: isWin,
            list: allList
          };
        }

        _GameLogic.checkResult = checkResult;

        function getOnlyValueList(list) {
          var listStr = [];
          var tmpStr = [];
          var tmpRes = [];

          for (var i = 0; i < list.length; i++) {
            var element = list[i];
            var str = (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
              error: Error()
            }), utils) : utils).toJson(element);
            listStr.push(str);
          }

          tmpStr = listStr.filter((item, i, arr) => {
            return listStr.indexOf(item) == i;
          });

          for (var j = 0; j < tmpStr.length; j++) {
            var num = (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
              error: Error()
            }), utils) : utils).fromJson(tmpStr[j]);
            tmpRes.push(num);
          }

          return tmpRes;
        }

        _GameLogic.getOnlyValueList = getOnlyValueList;

        function getSoundCardSize(value) {
          var card = value % 16;
          if (card == 1) return 14;else if (card == 14) return 15;else if (card == 15) return 16;
          return card;
        }

        _GameLogic.getSoundCardSize = getSoundCardSize;

        function getCardPoint(value) {
          var card = value % 16;
          if (card === 1) return 14;
          if (card === (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).cardInfo.levelCard) return 15;
          if (card === 14) return 16;
          if (card === 15) return 17;
          return card;
        }

        _GameLogic.getCardPoint = getCardPoint;

        function getCardSize(value) {
          var card = value % 16;
          if (card == 1) return 14;else if (card == (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).cardInfo.levelCard) // 王>级牌>1
            return 15;else if (card == 14) return 16;else if (card == 15) return 17;
          return card;
        }

        _GameLogic.getCardSize = getCardSize;

        function getCardColor(value) {
          return Math.floor(value / 16);
        }

        _GameLogic.getCardColor = getCardColor;

        function getValueStr(paramValue) {
          var cardSize = paramValue % 16;
          var sizeStr = "";

          if (cardSize == 10) {
            sizeStr = "a";
          } else if (cardSize == 11) {
            sizeStr = "b";
          } else if (cardSize == 12) {
            sizeStr = "c";
          } else if (cardSize == 13) {
            sizeStr = "d";
          } else if (cardSize == 14) {
            sizeStr = "e";
          } else if (cardSize == 15) {
            sizeStr = "f";
          } else {
            sizeStr = "" + cardSize;
          }

          ;
          return sizeStr;
        }

        _GameLogic.getValueStr = getValueStr;

        function playCardTypeMusic(type, cards) {
          var url = "audio/card/";

          if (type == (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
            error: Error()
          }), GameDefine) : GameDefine).KIND_CARDS_1 || type == (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
            error: Error()
          }), GameDefine) : GameDefine).KIND_CARDS_2) {
            var size = GameLogic.getSoundCardSize(cards[0]);
            url = url + type + "/" + type + "_" + size;
          } else {
            url += type;
          }

          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).playSound(url, false);
        }

        _GameLogic.playCardTypeMusic = playCardTypeMusic;

        function sortCardsBySizeDown(cards, count) {
          if (count <= 0) {
            return [];
          }

          for (var i = 0; i < count; i++) {
            for (var j = i + 1; j < count; j++) {
              if (getCardSize(cards[i]) < getCardSize(cards[j])) {
                var tempCard = cards[i];
                cards[i] = cards[j];
                cards[j] = tempCard;
              } else if (getCardSize(cards[i]) == getCardSize(cards[j])) {
                if (getCardColor(cards[i]) < getCardColor(cards[j])) {
                  var _tempCard = cards[i];
                  cards[i] = cards[j];
                  cards[j] = _tempCard;
                }
              }
            }
          }

          return cards;
        }

        _GameLogic.sortCardsBySizeDown = sortCardsBySizeDown;

        function sortCardsBySizeUp(cards, count) {
          if (count <= 0) {
            return [];
          }

          for (var i = 0; i < count; i++) {
            for (var j = i + 1; j < count; j++) {
              if (getCardSize(cards[i]) > getCardSize(cards[j])) {
                var tempCard = cards[i];
                cards[i] = cards[j];
                cards[j] = tempCard;
              } else if (getCardSize(cards[i]) == getCardSize(cards[j])) {
                if (getCardColor(cards[i]) > getCardColor(cards[j])) {
                  var _tempCard2 = cards[i];
                  cards[i] = cards[j];
                  cards[j] = _tempCard2;
                }
              }
            }
          }

          return cards;
        }

        _GameLogic.sortCardsBySizeUp = sortCardsBySizeUp;

        function sortCardsByCount(value, count) {
          sortCardsBySizeUp(value, count);
          var resultArr = [];
          var tempArr = [];
          var tempCard = value[0];

          for (var i = 0; i < count; i++) {
            if (getCardSize(tempCard) == getCardSize(value[i])) {
              tempArr[tempArr.length] = value[i];
            } else {
              //写入上次数据
              resultArr[resultArr.length] = tempArr;
              tempCard = value[i];
              tempArr = []; //写入当前数据

              tempArr[tempArr.length] = value[i];
            }
          } //最后数据


          if (tempArr.length != 0) {
            resultArr[resultArr.length] = tempArr;
          }

          for (var _i = 0; _i < resultArr.length; _i++) {
            for (var j = _i + 1; j < resultArr.length; j++) {
              if (resultArr[_i].length < resultArr[j].length) {
                var temp = resultArr[_i];
                resultArr[_i] = resultArr[j];
                resultArr[j] = temp;
              } else if (resultArr[_i].length == resultArr[j].length) {
                if (getCardSize(resultArr[_i][0]) > getCardSize(resultArr[j][0])) {
                  var _temp = resultArr[_i];
                  resultArr[_i] = resultArr[j];
                  resultArr[j] = _temp;
                }
              }
            }
          }

          return resultArr;
        }

        _GameLogic.sortCardsByCount = sortCardsByCount;

        function sortCardsByCountDown(value, count) {
          sortCardsBySizeDown(value, count);
          var resultArr = [];
          var tempArr = [];
          var tempCard = value[0];

          for (var i = 0; i < count; i++) {
            if (getCardSize(tempCard) == getCardSize(value[i])) {
              tempArr[tempArr.length] = value[i];
            } else {
              //写入上次数据
              resultArr[resultArr.length] = tempArr;
              tempCard = value[i];
              tempArr = []; //写入当前数据

              tempArr[tempArr.length] = value[i];
            }
          } //最后数据


          if (tempArr.length != 0) {
            resultArr[resultArr.length] = tempArr;
          }

          for (var _i2 = 0; _i2 < resultArr.length; _i2++) {
            for (var j = _i2 + 1; j < resultArr.length; j++) {
              if (resultArr[_i2].length < resultArr[j].length) {
                var temp = resultArr[_i2];
                resultArr[_i2] = resultArr[j];
                resultArr[j] = temp;
              } else if (resultArr[_i2].length == resultArr[j].length) {
                if (getCardSize(resultArr[_i2][0]) < getCardSize(resultArr[j][0])) {
                  var _temp2 = resultArr[_i2];
                  resultArr[_i2] = resultArr[j];
                  resultArr[j] = _temp2;
                }
              }
            }
          }

          return resultArr;
        }

        _GameLogic.sortCardsByCountDown = sortCardsByCountDown;

        function sortCardsByCountUp(value, count) {
          sortCardsBySizeUp(value, count);
          var resultArr = [];
          var tempArr = [];
          var tempCard = value[0];

          for (var i = 0; i < count; i++) {
            if (getCardSize(tempCard) == getCardSize(value[i])) {
              tempArr[tempArr.length] = value[i];
            } else {
              //写入上次数据
              resultArr[resultArr.length] = tempArr;
              tempCard = value[i];
              tempArr = []; //写入当前数据

              tempArr[tempArr.length] = value[i];
            }
          } //最后数据


          if (tempArr.length != 0) {
            resultArr[resultArr.length] = tempArr;
          }

          for (var _i3 = 0; _i3 < resultArr.length; _i3++) {
            for (var j = _i3 + 1; j < resultArr.length; j++) {
              if (resultArr[_i3].length > resultArr[j].length) {
                var temp = resultArr[_i3];
                resultArr[_i3] = resultArr[j];
                resultArr[j] = temp;
              } else if (resultArr[_i3].length == resultArr[j].length) {
                if (getCardSize(resultArr[_i3][0]) > getCardSize(resultArr[j][0])) {
                  var _temp3 = resultArr[_i3];
                  resultArr[_i3] = resultArr[j];
                  resultArr[j] = _temp3;
                }
              }
            }
          }

          return resultArr;
        }

        _GameLogic.sortCardsByCountUp = sortCardsByCountUp;

        function getSortCard(cardList) {
          var count = cardList.length;
          var tempCards = [];

          if (count > 1) {
            //多-少 大-小
            var cards = GameLogic.sortCardsByCountDown(cardList, count);

            for (var i = 0; i < cards.length; i++) {
              for (var j = 0; j < cards[i].length; j++) {
                tempCards.push(cards[i][j]);
              }
            }
          } else {
            tempCards = cardList;
          }

          return tempCards;
        }

        _GameLogic.getSortCard = getSortCard;

        function getRemainCardsByDelete(value, deleteCards) {
          var delList = (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).deepCopy(deleteCards);
          var remainCards = [];
          var deleteIdx = [];

          if ((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).cardInfo.cardDir) {
            for (var i = 0; i < value.length; i++) {
              var find = false;

              for (var j = 0; j < delList.length; j++) {
                if (value[i] == delList[j]) {
                  delList.splice(j, 1);
                  deleteIdx.push(i);
                  find = true;
                  break;
                }
              }

              if (!find) {
                remainCards.push(value[i]);
              }
            }
          } else {
            var tmpList = [];
            var sameSizeList = GameLogic.getSameCardSizeList(value);

            for (var _i4 = 0; _i4 < sameSizeList.length; _i4++) {
              var list = sameSizeList[_i4];

              for (var _j = list.length - 1; _j >= 0; _j--) {
                tmpList.push(list[_j]);
              }
            }

            for (var _i5 = 0; _i5 < tmpList.length; _i5++) {
              var _find = false;

              for (var _j2 = 0; _j2 < delList.length; _j2++) {
                if (tmpList[_i5] == delList[_j2]) {
                  delList.splice(_j2, 1);
                  deleteIdx.push(_i5);
                  _find = true;
                  break;
                }
              }

              if (!_find) {
                remainCards.push(tmpList[_i5]);
              }
            }
          }

          return {
            cards: remainCards,
            idxs: deleteIdx
          };
        }

        _GameLogic.getRemainCardsByDelete = getRemainCardsByDelete;

        function getUniqueCard(value) {
          var listNum = (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).deepCopy(value);
          var tmpList = [];

          for (var i = 0; i < listNum.length; i++) {
            var element = listNum[i];

            if (tmpList.length > 0) {
              var size = getCardSize(element);
              var find = false;

              for (var j = 0; j < tmpList.length; j++) {
                if (getCardSize(tmpList[j]) == size) {
                  find = true;
                  break;
                }
              }

              if (!find) {
                tmpList.push(element);
              }
            } else {
              tmpList.push(element);
            }
          }

          return sortCardsBySizeDown(tmpList, tmpList.length);
        }

        _GameLogic.getUniqueCard = getUniqueCard;

        function getSameCardSizeList(value) {
          var tmpList = [];
          var sortValue = sortCardsBySizeDown(value, value.length);
          var uniqueList = getUniqueCard(sortValue);
          var idx = 0;

          for (var j = 0; j < uniqueList.length; j++) {
            var d = uniqueList[j];
            var list1 = [];

            for (var i = idx; i < sortValue.length; i++) {
              if (getCardSize(d) == getCardSize(sortValue[i])) {
                list1.push(sortValue[i]);

                if (i == sortValue.length - 1) {
                  tmpList.push(list1);
                }
              } else {
                idx = i;
                tmpList.push(list1);
                break;
              }
            }
          } // console.log("tmpList---> ", tmpList);


          return tmpList;
        }

        _GameLogic.getSameCardSizeList = getSameCardSizeList;

        function removeCards(from, remove) {
          var copy = [...from];

          var _loop = function _loop(card) {
            var idx = copy.findIndex(c => c === card);
            if (idx !== -1) copy.splice(idx, 1);
          };

          for (var card of remove) {
            _loop(card);
          }

          return copy;
        }

        _GameLogic.removeCards = removeCards;

        function groupByPoint(cards) {
          var map = new Map();

          for (var card of cards) {
            var point = getCardPoint(card);
            if (!map.has(point)) map.set(point, []);
            map.get(point).push(card);
          }

          return map;
        }

        _GameLogic.groupByPoint = groupByPoint;

        function autoSortCards(cards) {
          var result = [];
          var remaining = [...cards];
          var bombs = this.extractGroups(remaining, 4);
          result.push(...bombs.flat());
          remaining = this.removeCards(remaining, bombs.flat());
          var planesWithWings = this.extractPlanesWithWings(remaining);
          result.push(...planesWithWings.flat());
          remaining = this.removeCards(remaining, planesWithWings.flat());
          var triplesWithAttach = this.extractTriplesWithAttachments(remaining);
          result.push(...triplesWithAttach.flat());
          remaining = this.removeCards(remaining, triplesWithAttach.flat());
          var sameColorStraights = this.extractFlushStraights(remaining);
          result.push(...sameColorStraights.flat());
          remaining = this.removeCards(remaining, sameColorStraights.flat());
          var planes = this.extractplanes(remaining);
          result.push(...planes.flat());
          remaining = this.removeCards(remaining, planes.flat());
          var straights = this.extractStraights(remaining);
          result.push(...straights.flat());
          remaining = this.removeCards(remaining, straights.flat());
          var doubleSeq = this.extractDoubleSeq(remaining);
          result.push(...doubleSeq.flat());
          remaining = this.removeCards(remaining, doubleSeq.flat());
          var triples = this.extractGroups(remaining, 3);
          result.push(...triples.flat());
          remaining = this.removeCards(remaining, triples.flat());
          var pairs = this.extractGroups(remaining, 2);
          result.push(...pairs.flat());
          remaining = this.removeCards(remaining, pairs.flat());
          result.push(...remaining);
          return result;
        }

        _GameLogic.autoSortCards = autoSortCards;

        function extractGroups(cards, count) {
          var map = groupByPoint(cards);
          var res = [];
          Array.from(map.values()).forEach(list => {
            if (list.length >= count) {
              res.push(list.slice(0, count));
            }
          });
          res.sort((a, b) => getCardPoint(b[0]) - getCardPoint(a[0]));
          return res;
        }

        _GameLogic.extractGroups = extractGroups;

        function extractplanes(cards) {
          var map = this.groupByPoint(cards);
          var points = Array.from(map.entries()).filter(_ref => {
            var [_, list] = _ref;
            return list.length >= 3 && this.getCardPoint(list[0]) < 15;
          }).map(_ref2 => {
            var [p] = _ref2;
            return p;
          }).sort((a, b) => a - b);
          var results = [];
          var temp = [];

          for (var i = 0; i < points.length; i++) {
            if (temp.length === 0 || points[i] === points[i - 1] + 1) {
              temp.push(map.get(points[i]).slice(0, 3));
            } else {
              if (temp.length >= 2) results.push(...temp);
              temp = [map.get(points[i]).slice(0, 3)];
            }
          }

          if (temp.length >= 2) results.push(...temp);
          return results;
        }

        _GameLogic.extractplanes = extractplanes;

        function extractPlanesWithWings(cards) {
          var _this = this;

          var map = this.groupByPoint(cards);
          var tripPoints = Array.from(map.entries()).filter(_ref3 => {
            var [_, list] = _ref3;
            return list.length >= 3 && this.getCardPoint(list[0]) < 15;
          }).map(_ref4 => {
            var [p] = _ref4;
            return p;
          }).sort((a, b) => a - b);

          for (var i = 0; i < tripPoints.length - 1; i++) {
            var t1 = tripPoints[i],
                t2 = tripPoints[i + 1];

            if (t2 === t1 + 1) {
              var _ret = function () {
                var trip1 = map.get(t1).slice(0, 3);
                var trip2 = map.get(t2).slice(0, 3);
                var exclude = [...trip1, ...trip2];
                var rest = cards.filter(c => !exclude.includes(c));
                var wings = Array.from(new Set(rest)).slice(0, 2);
                if (wings.length === 2) return {
                  v: [[...trip1, ...trip2, ...wings]]
                };

                var pairMap = _this.groupByPoint(rest);

                var pairs = [];

                for (var [_, list] of pairMap) {
                  if (list.length >= 2) {
                    pairs.push(...list.slice(0, 2));
                    if (pairs.length >= 4) break;
                  }
                }

                if (pairs.length >= 4) return {
                  v: [[...trip1, ...trip2, ...wings]]
                };
              }();

              if (typeof _ret === "object") return _ret.v;
            }
          }

          return [];
        }

        _GameLogic.extractPlanesWithWings = extractPlanesWithWings;

        function extractTriplesWithAttachments(cards) {
          var map = this.groupByPoint(cards);
          var results = [];
          var triples = Array.from(map.entries()).filter(_ref5 => {
            var [_, list] = _ref5;
            return list.length === 3;
          }).map(_ref6 => {
            var [_, list] = _ref6;
            return list.slice(0, 3);
          });
          var used = new Set();

          var _loop2 = function _loop2(triple) {
            var rest = cards.filter(c => !triple.includes(c) && !used.has(c));
            if (rest.length === 0) return "continue";
            var attach = rest[0];
            used.add(attach);
            results.push([...triple, attach]);
          };

          for (var triple of triples) {
            var _ret2 = _loop2(triple);

            if (_ret2 === "continue") continue;
          }

          return results;
        }

        _GameLogic.extractTriplesWithAttachments = extractTriplesWithAttachments;

        function extractStraights(cards) {
          var map = this.groupByPoint(cards);
          var uniquePoints = Array.from(map.keys()).filter(p => p >= 3 && p <= 14) // 排除2、大小王
          .sort((a, b) => a - b);
          var results = [];
          var temp = [];

          for (var i = 0; i < uniquePoints.length; i++) {
            var point = uniquePoints[i];
            var cardList = map.get(point);

            if (temp.length === 0 || point === uniquePoints[i - 1] + 1) {
              temp.push(cardList[0]); // 只拿一张代表这个点数
            } else {
              if (temp.length >= 5) results.push([...temp]);
              temp = [cardList[0]];
            }
          }

          if (temp.length >= 5) results.push([...temp]);
          return results;
        }

        _GameLogic.extractStraights = extractStraights;

        function extractDoubleSeq(cards) {
          var map = this.groupByPoint(cards); // 取所有能构成对子的点数

          var validPoints = Array.from(map.entries()).filter(_ref7 => {
            var [_, list] = _ref7;
            return list.length >= 2 && this.getCardPoint(list[0]) <= 14;
          }).map(_ref8 => {
            var [p] = _ref8;
            return p;
          }).sort((a, b) => a - b);
          var result = [];
          var temp = [];

          for (var i = 0; i < validPoints.length; i++) {
            var currPoint = validPoints[i];
            var cardsPair = map.get(currPoint).slice(0, 2); // 只取两个

            if (temp.length === 0 || currPoint === this.getCardPoint(temp[temp.length - 1][0]) + 1) {
              temp.push(cardsPair);
            } else {
              // 当前不连续，保存已有的连对
              if (temp.length >= 3) {
                result.push(...temp);
              }

              temp = [cardsPair];
            }
          }

          if (temp.length >= 3) {
            result.push(...temp);
          }

          return result;
        }

        _GameLogic.extractDoubleSeq = extractDoubleSeq;

        function extractFlushStraights(cards) {
          var colorMap = new Map();

          for (var card of cards) {
            var color = this.getCardColor(card);
            if (!colorMap.has(color)) colorMap.set(color, []);
            colorMap.get(color).push(card);
          }

          var result = [];

          for (var _cards of colorMap.values()) {
            var pointMap = new Map();

            for (var c of _cards) {
              var p = this.getCardPoint(c);
              if (p >= 3 && p <= 14) pointMap.set(p, c);
            }

            var points = Array.from(pointMap.keys()).sort((a, b) => a - b);
            var temp = [];

            for (var i = 0; i < points.length; i++) {
              if (temp.length === 0 || points[i] === points[i - 1] + 1) {
                temp.push(pointMap.get(points[i]));
              } else {
                if (temp.length >= 5) result.push([...temp]);
                temp = [pointMap.get(points[i])];
              }
            }

            if (temp.length >= 5) result.push([...temp]);
          }

          return result;
        }

        _GameLogic.extractFlushStraights = extractFlushStraights;
      })(GameLogic || _export("GameLogic", GameLogic = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6caf3473ab77404ef97398cec8c324c241c61a15.js.map