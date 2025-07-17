System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, utils, GlobalData, SoundManager, GameDefine, _crd, GameLogic;

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
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
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

      __checkObsolete__(['Game']);

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

        function getRemainCardsByDelete(value, deleteCards, keepOrder, select, prevSelected) {
          if (keepOrder === void 0) {
            keepOrder = false;
          }

          if (select === void 0) {
            select = [];
          }

          if (prevSelected === void 0) {
            prevSelected = [];
          }

          var delList = (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).deepCopy(deleteCards);
          var remainCards = [];
          var deleteIdx = [];
          var tmpList = [];
          var sameSizeList = GameLogic.getSameCardSizeList(value, keepOrder);

          for (var i = 0; i < sameSizeList.length; i++) {
            var list = sameSizeList[i];

            for (var j = list.length - 1; j >= 0; j--) {
              tmpList.push(list[j]);
            }
          }

          for (var _i4 = 0; _i4 < tmpList.length; _i4++) {
            var find = false;

            for (var _j = 0; _j < delList.length; _j++) {
              if (tmpList[_i4] == delList[_j]) {
                delList.splice(_j, 1);
                deleteIdx.push(_i4);
                find = true;
                break;
              }
            }

            if (!find) {
              remainCards.push(tmpList[_i4]);
            }
          } // }


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

        function getSameCardSizeList(value, keepOrder) {
          if (keepOrder === void 0) {
            keepOrder = false;
          }

          if (!keepOrder) {
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
        }

        _GameLogic.getSameCardSizeList = getSameCardSizeList;

        function findStraightByCard(cards) {
          var getCardRank = card => card % 16;

          var getCardColor = card => Math.floor(card / 16);

          var HONGTAO = 1;
          var map = getCardCountMap(cards);
          var rankMap = new Map(map); // 拷贝，避免修改原始 map

          var results = []; // 所有点数，A=1，2=2，... K=13
          // 排除 2，构建可用顺子点数（包括 1）

          var legalRanks = [1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]; // 构建所有长度 >=5 的连续 rank 序列

          var seqList = [];

          for (var i = 0; i <= legalRanks.length - 5; i++) {
            for (var len = 5; len <= legalRanks.length - i; len++) {
              var seq = legalRanks.slice(i, i + len);
              seqList.push(seq);
            }
          } // ✅ 加入 AKQJ10 的特殊顺子


          seqList.push([10, 11, 12, 13, 1]); // ✅ 检查每个序列是否匹配

          for (var _seq of seqList) {
            var group = [];
            var valid = true;

            for (var r of _seq) {
              // 红桃2特殊处理
              if (r === 2) {
                var hongtao2 = cards.find(c => getCardRank(c) === 2 && getCardColor(c) === HONGTAO);

                if (hongtao2 !== undefined) {
                  group.push(hongtao2);
                  cards.splice(cards.indexOf(hongtao2), 1);
                  continue;
                } else {
                  valid = false;
                  break;
                }
              }

              var list = rankMap.get(r);

              if (!list || list.length === 0) {
                valid = false;
                break;
              }

              group.push(list[0]); // 取一张
            }

            if (valid) {
              results.push(group); // 消耗除红桃2外的牌

              for (var c of group) {
                var _r = getCardRank(c);

                var color = getCardColor(c);

                if (!(_r === 2 && color === HONGTAO)) {
                  rankMap.get(_r).shift();
                }
              }

              break; // 找一个顺子就停
            }
          }

          return results;
        } // ✅ 连对识别（返回一个 number[][]，可能多个连对组）


        function findLiandui(cards) {
          var map = getCardCountMap(cards);
          var rankToPair = new Map(); // 仅保留对子

          for (var [rank, list] of map.entries()) {
            if (list.length === 2 && rank >= 3 && rank <= 14) {
              rankToPair.set(rank, [...list]);
            }
          }

          var ranks = Array.from(rankToPair.keys()).sort((a, b) => a - b);
          var results = [];
          var temp = [];

          for (var i = 0; i <= ranks.length; i++) {
            if (temp.length === 0 || i < ranks.length && ranks[i] === getCardSize(temp[temp.length - 1][0]) + 1) {
              if (i < ranks.length) temp.push(rankToPair.get(ranks[i]));
            } else {
              if (temp.length >= 3) {
                results.push(temp.flat());
                temp = i < ranks.length ? [rankToPair.get(ranks[i])] : [];
              } else {
                temp = i < ranks.length ? [rankToPair.get(ranks[i])] : [];
              }
            }
          }

          return results;
        }

        function findFeiji(cards) {
          var map = getCardCountMap(cards);
          var rankToTripletCards = new Map(); // 收集所有点数 >=3 且有 3 张以上的牌（不能包含 2、王）

          for (var [rank, list] of map.entries()) {
            if (rank < 3 || rank > 14) continue;

            if (list.length >= 3) {
              rankToTripletCards.set(rank, list.slice(0, 3)); // 只取3张参与飞机
            }
          }

          if (rankToTripletCards.size < 2) return [];
          var sortedRanks = Array.from(rankToTripletCards.keys()).sort((a, b) => a - b); // 寻找连续的rank组

          for (var i = 0; i < sortedRanks.length - 1; i++) {
            var group = [rankToTripletCards.get(sortedRanks[i])];

            for (var j = i + 1; j < sortedRanks.length; j++) {
              var prev = sortedRanks[j - 1];
              var curr = sortedRanks[j];

              if (curr === prev + 1) {
                group.push(rankToTripletCards.get(curr));

                if (group.length >= 2) {
                  // 找到第一组合法飞机（长度>=2）
                  return [group.flat()];
                }
              } else {
                break;
              }
            }
          }

          return [];
        }

        function removeOutCardsFromGrouped(grouped, outCards) {
          var outSet = new Set(outCards);
          var newGrouped = [];

          for (var group of grouped) {
            var rest = group.filter(c => !outSet.has(c));

            if (rest.length > 0) {
              newGrouped.push(rest);
            }
          }

          return newGrouped;
        }

        _GameLogic.removeOutCardsFromGrouped = removeOutCardsFromGrouped;

        function clearSelectedHistory() {
          selectedHistory = [];
        }

        _GameLogic.clearSelectedHistory = clearSelectedHistory;

        function checkIfSameColorOrFengRenPei(straight) {
          // 检查是否为同花顺
          var firstCardColor = straight[0] % 4;
          var isSameColor = straight.every(card => card % 4 === firstCardColor); // 检查是否为逢人配：即选中的牌是连续的，且任意花色

          var sortedStraight = straight.sort((a, b) => a - b);
          var isFengRenPei = isFengRenPeiSorted(sortedStraight);
          return isSameColor || isFengRenPei;
        }

        function isFengRenPeiSorted(sortedCards) {
          // 判断是否是连续的顺子
          for (var i = 1; i < sortedCards.length; i++) {
            if (sortedCards[i] !== sortedCards[i - 1] + 1) {
              return false;
            }
          }

          return true;
        }

        var selectedHistory = [];

        function moveSelectedCardsToBack(cards, selected, prevSelected, prevGrouped) {
          var result = [];
          var moveToBack = [];
          var selectedSet = new Set(selected);
          var prevSet = new Set(prevSelected);
          var usedCards = new Set(); // ✅ 步骤1：保留旧分组中未重新选中的牌（保持顺序）

          for (var group of prevGrouped) {
            if (!group.some(c => selectedSet.has(c))) {
              result.push(group);
              group.forEach(c => usedCards.add(c));
            }
          } // ✅ 步骤2：识别炸弹（六炸、五炸、四炸等）包括红心级牌


          var bombs = findBombsWithHeartCard(selected.filter(c => !usedCards.has(c)));

          for (var bomb of bombs) {
            result.unshift(bomb); // 将炸弹放在最左边

            bomb.forEach(c => usedCards.add(c)); // 标记炸弹牌已使用
          } // ✅ 步骤3：识别三带二


          var triple = [];
          var pair = [];
          var map = getCardCountMap(selected);

          for (var list of map.values()) {
            if (list.length === 3) triple = list;else if (list.length === 2) pair = list;
          }

          if (triple.length === 3 && pair.length === 2) {
            var _group = [...triple, ...pair];
            moveToBack.push(_group);

            _group.forEach(c => usedCards.add(c));
          } // ✅ 步骤4：识别飞机


          var triplets = findFeiji(selected.filter(c => !usedCards.has(c)));

          for (var _group2 of triplets) {
            moveToBack.push(_group2);

            _group2.forEach(c => usedCards.add(c));
          } // ✅ 步骤5：识别顺子


          var straights = findStraightByCard(selected.filter(c => !usedCards.has(c)));

          for (var s of straights) {
            // 检查是否是同花顺或逢人配
            var isSameColorStraight = checkIfSameColorOrFengRenPei(s);

            if (isSameColorStraight) {
              result.unshift(s); // 将同花顺或逢人配放在最左边
            } else {
              moveToBack.push(s);
            }

            s.forEach(c => usedCards.add(c));
          } // ✅ 步骤6：连对识别


          var lianduiGroups = findLiandui(selected.filter(c => !usedCards.has(c)));

          for (var _group3 of lianduiGroups) {
            moveToBack.push(_group3);

            _group3.forEach(c => usedCards.add(c));
          } // ✅ 步骤7：将剩余未处理的牌按点数分组


          var remaining = cards.filter(card => !usedCards.has(card));
          var sortValue = sortCardsBySizeDown(remaining, remaining.length);
          var uniqueList = getUniqueCard(sortValue);
          var idx = 0;

          for (var j = 0; j < uniqueList.length; j++) {
            var d = uniqueList[j];
            var rank = getCardSize(d);
            var list1 = [];

            for (var i = idx; i < sortValue.length; i++) {
              var card = sortValue[i];
              if (usedCards.has(card)) continue;

              if (getCardSize(card) === rank) {
                list1.push(card);

                if (i === sortValue.length - 1) {
                  if (list1.length > 0) {
                    if (list1.some(c => selectedSet.has(c))) {
                      moveToBack.push(list1);
                    } else {
                      result.push(list1);
                    }

                    list1.forEach(c => usedCards.add(c));
                  }
                }
              } else {
                idx = i;

                if (list1.length > 0) {
                  if (list1.some(c => selectedSet.has(c))) {
                    moveToBack.push(list1);
                  } else {
                    result.push(list1);
                  }

                  list1.forEach(c => usedCards.add(c));
                }

                break;
              }
            }
          } // 最后返回结果，炸弹已经在最前面


          return [...result, ...moveToBack];
        }

        _GameLogic.moveSelectedCardsToBack = moveSelectedCardsToBack;

        function findBombsWithHeartCard(cards) {
          var countMap = getCardCountMap(cards);
          var bombs = [];
          var heartCards = cards.filter(card => isHeartCard(card)); // 标记已使用的红心级牌

          var usedHeartCards = new Set();

          for (var [rank, list] of countMap) {
            var len = list.length; // 普通炸弹（4张或以上）

            if (len >= 4) {
              bombs.push([...list]);
              continue;
            } // 三张、四张、五张时，尝试用红心级牌扩展


            if (len >= 3 && len < 6) {
              var availableHearts = heartCards.filter(c => !usedHeartCards.has(c));
              var need = 6 - len;
              var canUse = Math.min(availableHearts.length, need);

              if (canUse > 0) {
                var used = availableHearts.slice(0, canUse);
                used.forEach(c => usedHeartCards.add(c));
                bombs.push([...list, ...used]);
              }
            }
          }

          return bombs;
        } // 用来识别红心级牌，假设红心牌的规则是通过 card % 16 获取花色


        function isHeartCard(card) {
          var rank = card % 16;
          return rank === (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).cardInfo.levelCard; // 例如，这里假设 `levelCard` 为红心2或其它特殊牌
        }

        function getCardGroupsByOrder(cards) {
          var groupList = [];
          var temp = [];

          for (var i = 0; i < cards.length; i++) {
            var cur = cards[i];

            if (temp.length === 0 || GameLogic.getCardSize(temp[0]) === GameLogic.getCardSize(cur)) {
              temp.push(cur);
            } else {
              groupList.push(temp);
              temp = [cur];
            }
          }

          if (temp.length > 0) {
            groupList.push(temp);
          }

          return groupList;
        }

        _GameLogic.getCardGroupsByOrder = getCardGroupsByOrder;

        function getCardTypeByFeiji(cards) {
          if (cards.length == 6 && cards.length % 3 === 0) {
            var map = getCardCountMap(cards);
            var triplets = []; // 取出所有三张相同点数的牌

            for (var [rank, list] of map.entries()) {
              if (rank < 3 || rank > 14) return (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
                error: Error()
              }), GameDefine) : GameDefine).KIND_CARDS_ERROR; // 不能包含2和王

              if (list.length === 3) {
                triplets.push(rank);
              }
            } // 飞机需要至少 2 组三张牌


            if (triplets.length < 2) return (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
              error: Error()
            }), GameDefine) : GameDefine).KIND_CARDS_ERROR; // 牌的点数需要连续

            triplets.sort((a, b) => a - b);

            for (var i = 1; i < triplets.length; i++) {
              if (triplets[i] !== triplets[i - 1] + 1) {
                return (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
                  error: Error()
                }), GameDefine) : GameDefine).KIND_CARDS_ERROR; // 非连续
              }
            }

            return (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
              error: Error()
            }), GameDefine) : GameDefine).KIND_CARDS_SHUNZI_3; // ✅ 飞机
          } else {
            return (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
              error: Error()
            }), GameDefine) : GameDefine).KIND_CARDS_ERROR;
          }
        }

        _GameLogic.getCardTypeByFeiji = getCardTypeByFeiji;

        function getCardTypeByLiandui(cards) {
          if (cards.length !== 6) return (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
            error: Error()
          }), GameDefine) : GameDefine).KIND_CARDS_ERROR;
          var map = getCardCountMap(cards);
          var pairRanks = [];

          for (var [rank, list] of map.entries()) {
            // 排除点数不合法（如 2、王）
            if (rank < 3 || rank > 13) return (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
              error: Error()
            }), GameDefine) : GameDefine).KIND_CARDS_ERROR;

            if (list.length === 2) {
              pairRanks.push(rank);
            } else {
              return (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
                error: Error()
              }), GameDefine) : GameDefine).KIND_CARDS_ERROR; // 出现非对子
            }
          } // 必须正好3个对子


          if (pairRanks.length !== 3) return (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
            error: Error()
          }), GameDefine) : GameDefine).KIND_CARDS_ERROR; // 检查是否连续

          pairRanks.sort((a, b) => a - b);

          for (var i = 1; i < pairRanks.length; i++) {
            if (pairRanks[i] !== pairRanks[i - 1] + 1) return (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
              error: Error()
            }), GameDefine) : GameDefine).KIND_CARDS_ERROR;
          }

          return (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
            error: Error()
          }), GameDefine) : GameDefine).KIND_CARDS_SHUNZI_2;
        }

        _GameLogic.getCardTypeByLiandui = getCardTypeByLiandui;

        function getCardType(cards) {
          // 示例：你可能已有类似逻辑，请替换成实际逻辑
          if (cards.length === 1) return (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
            error: Error()
          }), GameDefine) : GameDefine).KIND_CARDS_1;

          if (cards.length === 2 && getCardSize(cards[0]) === getCardSize(cards[1])) {
            return (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
              error: Error()
            }), GameDefine) : GameDefine).KIND_CARDS_2;
          } //识别王炸、六炸、五炸、四炸


          if (cards.length >= 4) {
            // ✅ 点数必须全部一致，才是炸弹
            var isBomb = isSamePointWithFrp(cards, (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).cardInfo.levelCard);

            if (isBomb) {
              return (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
                error: Error()
              }), GameDefine) : GameDefine).KIND_CARDS_BOMB_45;
            }
          }

          var straights = findStraightByCard(cards);

          for (var s of straights) {
            //识别同花顺
            // 检查是否是同花顺或逢人配
            var isSameColorStraight = checkIfSameColorOrFengRenPei(s);

            if (isSameColorStraight) {
              return (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
                error: Error()
              }), GameDefine) : GameDefine).KIND_CARDS_COLOR;
            } else {
              return (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
                error: Error()
              }), GameDefine) : GameDefine).KIND_CARDS_SHUNZI_1;
            }
          }

          if (cards.length === 5) {
            var map = getCardCountMap(cards);
            var hasTriple = false;
            var hasPair = false;

            for (var list of map.values()) {
              if (list.length === 3) hasTriple = true;
              if (list.length === 2) hasPair = true;
            }

            if (hasTriple && hasPair) {
              return (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
                error: Error()
              }), GameDefine) : GameDefine).KIND_CARDS_3_2;
            }
          } // 飞机（需要至少2组三张牌且连续）


          if (cards.length == 6) {
            var feijiType = GameLogic.getCardTypeByFeiji(cards);

            if (feijiType == (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
              error: Error()
            }), GameDefine) : GameDefine).KIND_CARDS_SHUNZI_3) {
              return (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
                error: Error()
              }), GameDefine) : GameDefine).KIND_CARDS_SHUNZI_3;
            } else {
              var lianduiType = GameLogic.getCardTypeByLiandui(cards);

              if (lianduiType == (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
                error: Error()
              }), GameDefine) : GameDefine).KIND_CARDS_SHUNZI_2) {
                return (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
                  error: Error()
                }), GameDefine) : GameDefine).KIND_CARDS_SHUNZI_2;
              } // else {
              //     return
              // }

            }
          } // ✅ 顺子判断（支持长度 >= 5）


          if (cards.length == 5) {
            var rankSet = new Set();

            for (var card of cards) {
              var rank = getCardSize(card);
              if (rank < 3 || rank > 14) return (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
                error: Error()
              }), GameDefine) : GameDefine).KIND_CARDS_ERROR; // 不能包含2和王

              rankSet.add(rank);
            }

            if (rankSet.size !== cards.length) return (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
              error: Error()
            }), GameDefine) : GameDefine).KIND_CARDS_ERROR; // 有重复点数

            var ranks = Array.from(rankSet).sort((a, b) => a - b);

            for (var i = 1; i < ranks.length; i++) {
              if (ranks[i] !== ranks[i - 1] + 1) {
                return (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
                  error: Error()
                }), GameDefine) : GameDefine).KIND_CARDS_ERROR; // 非连续
              }
            }

            return (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
              error: Error()
            }), GameDefine) : GameDefine).KIND_CARDS_SHUNZI_1; // ✅ 顺子
          }

          if (cards.length === 4) {
            var kings = cards.filter(c => isKing(c));

            if (kings.length === 4) {
              return (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
                error: Error()
              }), GameDefine) : GameDefine).KIND_CARDS_KING; // 自定义四王炸类型
            }
          } // ✅ 王炸（大小王各一张）
          // if (cards.length === 2) {
          //     const ranks = cards.map(c => GameLogic.getCardSize(c)).sort();
          //     if (ranks.includes(16) && ranks.includes(17)) {
          //         return GameDefine.KIND_CARDS_BOMB_KING2; // 自定义王炸类型
          //     }
          // }
          // ... 判断三带、顺子、连对、炸弹等


          return (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
            error: Error()
          }), GameDefine) : GameDefine).KIND_CARDS_ERROR;
        }

        _GameLogic.getCardType = getCardType;

        function autoSortCards(cards) {
          var result = []; // 固定牌型 + 对子/单张

          var randomPart = []; // 飞机/顺子/连对/三带二

          var used = new Set();
          var usedForRandom = new Set(); // 用于随机牌型的已用牌
          // 辅助方法：将已使用的牌加入结果

          function addGroup(groups, toResult, isRandom) {
            if (toResult === void 0) {
              toResult = true;
            }

            if (isRandom === void 0) {
              isRandom = false;
            }

            for (var g of groups) {
              (toResult ? result : randomPart).push(g);
              g.forEach(c => {
                used.add(c); // 固定牌型使用的牌

                if (isRandom) usedForRandom.add(c); // 随机牌型使用的牌
              });
            }
          }

          var getRemain = function getRemain(isRandom) {
            if (isRandom === void 0) {
              isRandom = false;
            }

            return cards.filter(c => isRandom ? !usedForRandom.has(c) && !used.has(c) : !used.has(c)); // 判断是否已经用过
          }; // ✅ 固定牌型优先处理


          addGroup(findWangzha(getRemain())); // 王炸

          addGroup(findZ(getRemain(), 6)); // 六炸

          addGroup(findTonghuashun(getRemain())); // 同花顺

          addGroup(findZ(getRemain(), 5)); // 五炸

          addGroup(findZ(getRemain(), 4)); // 四炸
          // ✅ 保留2和逢人配：在理牌时不删除这些牌

          var specials = cards.filter(c => getCardSize(c) === 16 || getCardSize(c) === 17 || getCardSize(c) === 2); // 保留大小王和2
          // ✅ 最终将2和逢人配的牌添加到理牌结果中

          addGroup([specials], true); // 将2和逢人配牌加入理牌结果
          // ✅ 随机牌型放最后：顺子、连对、飞机、三带二（随机打乱顺序）
          // const feiji = shuffleArray(findFeiji(getRemain(true)));     // 飞机
          // const liandui = shuffleArray(findLiandui(getRemain(true))); // 连对
          // const shunzi = shuffleArray(findStraightByCard(getRemain(true))); // 顺子
          // const sanzhang = shuffleArray(findThreeWithTwo(getRemain(true))); // 三带二
          // addGroup(feiji, false, true);
          // addGroup(liandui, false, true);
          // addGroup(shunzi, false, true);
          // addGroup(sanzhang, false, true);
          // ✅ 随机牌型放最后：顺子、连对、飞机、三带二（随机打乱顺序，选择一组）
          // const randomGroups = [
          //     shuffleArray(findThreeWithTwo(getRemain(true))), // 三带二
          //     shuffleArray(findFeiji(getRemain(true))),   // 飞机
          //     shuffleArray(findLiandui(getRemain(true))), // 连对
          //     shuffleArray(findStraightByCard(getRemain(true))) // 顺子
          // ];
          // 只选择一个随机牌型
          // const randomGroup = randomGroups.find(group => group.length > 0); // 选择第一个有效的随机组
          // if (randomGroup) {
          //     addGroup(randomGroup, false, true);  // 添加随机牌型组
          // }
          // randomGroups.forEach(group => {
          //     if (group.length > 0) {
          //         addGroup(group, false, true);  // 添加有效的随机牌型组
          //     }
          // });
          // ✅ 剩下的才是对子 + 单张

          addGroup(findPair(getRemain(true)));
          addGroup(findAllSingles(getRemain(true))); // ✅ 最终拼接

          return result.concat(randomPart); // const result: number[][] = [];       // 固定牌型 + 对子/单张
          // const randomPart: number[][] = [];   // 飞机/顺子/连对/三带二
          // const used = new Set<number>();      // 用于标记已使用的牌（不论是否被组合）
          // const usedForRandom = new Set<number>(); // 用于标记已用于随机牌型的牌
          // const usedForCombination = new Set<number>(); // 用于标记参与组合的牌（避免在剩余牌时被误判为已使用）
          // // 辅助方法：将已使用的牌加入结果
          // function addGroup(groups: number[][], toResult = true, isRandom = false) {
          //     for (const g of groups) {
          //         (toResult ? result : randomPart).push(g);
          //         g.forEach(c => {
          //             used.add(c);  // 固定牌型使用的牌
          //             if (isRandom) usedForRandom.add(c); // 随机牌型使用的牌
          //             usedForCombination.add(c); // 被用于组合的牌
          //         });
          //     }
          // }
          // // 获取剩余的未使用牌
          // const getRemain = (isRandom: boolean = false) => {
          //     return cards.filter(c => {
          //         if (isRandom) {
          //             return !usedForRandom.has(c) && !used.has(c); // 随机牌型排除已用牌
          //         } else {
          //             // 允许显示那些已参与组合的牌，但没有完全被使用掉
          //             return !used.has(c) || usedForCombination.has(c);
          //         }
          //     });
          // };
          // // ✅ 固定牌型优先处理
          // addGroup(findWangzha(getRemain()));         // 王炸
          // addGroup(findZ(getRemain(), 6));           // 六炸
          // addGroup(findTonghuashun(getRemain()));   // 同花顺
          // addGroup(findZ(getRemain(), 5));           // 五炸
          // addGroup(findZ(getRemain(), 4));           // 四炸
          // // ✅ 保留2和逢人配：在理牌时不删除这些牌
          // const specials = cards.filter(c => getCardSize(c) === 16 || getCardSize(c) === 17 || getCardSize(c) === 2); // 保留大小王和2
          // // ✅ 最终将2和逢人配的牌添加到理牌结果中
          // addGroup([specials], true); // 将2和逢人配牌加入理牌结果
          // // ✅ 随机牌型放最后：顺子、连对、飞机、三带二（随机打乱顺序，选择一组）
          // const randomGroups = [
          //     shuffleArray(findThreeWithTwo(getRemain(false))), // 三带二
          //     shuffleArray(findFeiji(getRemain(false))),   // 飞机
          //     shuffleArray(findLiandui(getRemain(false))), // 连对
          //     shuffleArray(findStraightByCard(getRemain(false))) // 顺子
          // ];
          // // 只选择一个有效的随机牌型
          // // const randomGroup = randomGroups.find(group => group.length > 0); // 选择第一个有效的随机组
          // // if (randomGroup) {
          // //     addGroup(randomGroup, false, true);  // 添加随机牌型组
          // // }
          // // 将所有有效的随机牌型都加入结果
          // randomGroups.forEach(group => {
          //     if (group.length > 0) {
          //         addGroup(group, false, true);  // 添加有效的随机牌型组
          //     }
          // });
          // // ✅ 剩下的才是对子 + 单张
          // addGroup(findPair(getRemain(true)));
          // addGroup(findAllSingles(getRemain(true)));
          // // ✅ 最终拼接并返回
          // return result.concat(randomPart);
        }

        _GameLogic.autoSortCards = autoSortCards;

        function findWangzha(cards) {
          var map = getCardCountMap(cards);
          var result = [];

          for (var [rank, list] of map.entries()) {
            if ((rank === 16 || rank === 17) && list.length >= 2) {
              // 16: 小王，17: 大王
              result.push(list.slice(0, 2)); // 两张王算一个炸弹
            }
          }

          return result;
        }

        _GameLogic.findWangzha = findWangzha;

        function findTonghuashun(cards) {
          var mapByColor = new Map();

          for (var card of cards) {
            var color = Math.floor(card / 16);

            if (!mapByColor.has(color)) {
              mapByColor.set(color, []);
            }

            mapByColor.get(color).push(card);
          }

          var result = [];

          for (var colorCards of mapByColor.values()) {
            if (colorCards.length < 5) continue;
            var ranksMap = new Map();

            for (var _card of colorCards) {
              var rank = getCardSize(_card);
              if (rank < 3 || rank > 14) continue; // 不能包含2或王

              if (!ranksMap.has(rank)) ranksMap.set(rank, []);
              ranksMap.get(rank).push(_card);
            }

            var ranks = Array.from(ranksMap.keys()).sort((a, b) => a - b);
            var start = 0;

            while (start <= ranks.length - 5) {
              var group = [];
              var lastRank = ranks[start];

              if (ranksMap.get(lastRank).length > 0) {
                group.push(ranksMap.get(lastRank).pop());
              } else {
                start++;
                continue;
              }

              for (var i = start + 1; i < ranks.length; i++) {
                if (ranks[i] !== lastRank + 1) {
                  break;
                }

                var list = ranksMap.get(ranks[i]);

                if (list && list.length > 0) {
                  group.push(list.pop());
                  lastRank = ranks[i];

                  if (group.length == 5) {
                    result.push([...group]);
                  }
                } else {
                  break;
                }
              }

              start++;
            }
          }

          return result;
        }

        _GameLogic.findTonghuashun = findTonghuashun;

        function findZ(cards, n) {
          var result = [];
          var map = getCardCountMap(cards); // 牌点数 -> 对应的牌数组

          for (var list of map.values()) {
            if (list.length === n) {
              result.push([...list]);
            }
          }

          return result;
        }

        _GameLogic.findZ = findZ;

        function findThreeWithTwoBy(cards, usedIndex, maxCount) {
          if (usedIndex === void 0) {
            usedIndex = new Set();
          }

          if (maxCount === void 0) {
            maxCount = 2;
          }

          var result = [];
          var countMap = new Map(); // 分组：按点数归类（排除大小王、参谋、非红桃级牌2）

          for (var card of cards) {
            var rank = card % 16;
            var color = Math.floor(card / 16);
            if (rank === (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).cardInfo.levelCard && color !== 0 || rank <= 1 || rank >= 14) continue;
            if (!countMap.has(rank)) countMap.set(rank, []);
            countMap.get(rank).push(card);
          }

          var triples = Array.from(countMap.entries()).filter(_ref => {
            var [_, list] = _ref;
            return list.length >= 3;
          }).sort((a, b) => a[0] - b[0]); // 三张牌点数升序
          // ✅ 只允许真正的对子（不能从三条或炸弹拆）

          var pairs = Array.from(countMap.entries()).filter(_ref2 => {
            var [_, list] = _ref2;
            return list.length === 2;
          }).sort((a, b) => a[0] - b[0]);
          var used = new Set(); // 避免重复使用同一张牌

          for (var [tripleRank, tripleCards] of triples) {
            var triple = tripleCards.filter(c => !used.has(c) && !usedIndex.has(cards.indexOf(c)));
            if (triple.length < 3) continue;

            for (var [pairRank, pairCards] of pairs) {
              if (pairRank === tripleRank) continue;
              var pair = pairCards.filter(c => !used.has(c) && !usedIndex.has(cards.indexOf(c)));
              if (pair.length < 2) continue;
              var group = [triple[0], triple[1], triple[2], pair[0], pair[1]]; // 标记为已使用

              group.forEach(c => used.add(c));
              result.push(group);
              break; // 每组三带二只找一个对子
            }

            if (result.length >= maxCount) {
              return result;
            }
          }

          return result;
        }

        function findThreeWithTwo(cards, usedIndex, maxCount) {
          if (maxCount === void 0) {
            maxCount = 1;
          }

          var countMap = new Map(); // 分组：按点数归类（排除特殊点数：大小王、参谋、级牌 2）

          for (var card of cards) {
            var rank = card % 16;
            if (rank <= (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).cardInfo.levelCard || rank >= 14) continue; // 排除大小王/参谋/级牌

            if (!countMap.has(rank)) countMap.set(rank, []);
            countMap.get(rank).push(card);
          } // 找所有三张


          var triples = Array.from(countMap.entries()).filter(_ref3 => {
            var [_, list] = _ref3;
            return list.length >= 3;
          }).sort((a, b) => a[0] - b[0]); // 最小的三张优先
          // 找所有对子（⚠️ 只找那些 list.length === 2，不能从三张拆）

          var pairs = Array.from(countMap.entries()).filter(_ref4 => {
            var [_, list] = _ref4;
            return list.length === 2;
          }).sort((a, b) => a[0] - b[0]); // 最小对子优先
          // 尝试组合三带二（三张 + 另一对）

          for (var [tripleRank, tripleCards] of triples) {
            for (var [pairRank, pairCards] of pairs) {
              if (tripleRank !== pairRank) {
                return [[...tripleCards.slice(0, 3), ...pairCards]];
              }
            }
          }

          return []; // 找不到合法三带二
          // const result: number[][] = [];
          // const countMap = new Map<number, { card: number, index: number }[]>();
          // // 分组：按点数归类（排除特殊点数）
          // for (let i = 0; i < cards.length; i++) {
          //     const card = cards[i];
          //     const rank = card % 16;
          //     const color = Math.floor(card / 16);
          //     // ❌ 排除非红桃的级牌2、大王、小王、参谋
          //     if ((rank === GlobalData.cardInfo.levelCard && color !== 0) || rank <= 1 || rank >= 14) continue;
          //     if (!countMap.has(rank)) countMap.set(rank, []);
          //     countMap.get(rank)!.push({ card, index: i });
          // }
          // // 所有三张（按点数升序）
          // const triples = Array.from(countMap.entries())
          //     .filter(([_, list]) => list.length >= 3)
          //     .sort((a, b) => a[0] - b[0]);
          // // 所有对子（按点数升序）
          // const pairs = Array.from(countMap.entries())
          //     .filter(([_, list]) => list.length >= 2)
          //     .sort((a, b) => a[0] - b[0]);
          // const usedCardIndex = new Set<number>(usedIndex);
          // for (const [tripleRank, tripleList] of triples) {
          //     const triple = tripleList.filter(x => !usedCardIndex.has(x.index));
          //     if (triple.length < 3) continue;
          //     for (const [pairRank, pairList] of pairs) {
          //         if (pairRank === tripleRank) continue;
          //         const pair = pairList.filter(x => !usedCardIndex.has(x.index));
          //         if (pair.length < 2) continue;
          //         const group = [
          //             triple[0].card, triple[1].card, triple[2].card,
          //             pair[0].card, pair[1].card,
          //         ];
          //         // 标记为已使用
          //         usedCardIndex.add(triple[0].index);
          //         usedCardIndex.add(triple[1].index);
          //         usedCardIndex.add(triple[2].index);
          //         usedCardIndex.add(pair[0].index);
          //         usedCardIndex.add(pair[1].index);
          //         result.push(group);
          //         break; // 只配一个对子
          //     }
          //     if (result.length >= maxCount) {
          //         return result
          //     }; // 达到上限了
          // }
          // return result;
        }

        function shuffleArray(arr) {
          var result = arr.slice(); // 拷贝原数组，避免修改原数组

          for (var i = result.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            [result[i], result[j]] = [result[j], result[i]]; // 交换
          }

          return result;
        }

        _GameLogic.shuffleArray = shuffleArray;

        function getOneCardSizeList(value) {
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

                if (i === sortValue.length - 1) {
                  tmpList.push(list1);
                }
              } else {
                idx = i;
                tmpList.push(list1);
                break;
              }
            }
          } // 🎯 提取所有对子


          var pairs = tmpList.filter(g => g.length === 2);
          var otherGroups = tmpList.filter(g => g.length !== 2);
          var pairPoints = pairs.map(g => getCardSize(g[0])).sort((a, b) => a - b); // ✅ 找到所有连对片段

          var lianDuiList = [];
          var temp = [];

          for (var _i5 = 0; _i5 < pairs.length; _i5++) {
            if (temp.length === 0) {
              temp.push(pairs[_i5]);
            } else {
              var last = getCardSize(temp[temp.length - 1][0]);
              var current = getCardSize(pairs[_i5][0]);

              if (current === last + 1 && current < 15) {
                // 连续且不含2或王
                temp.push(pairs[_i5]);
              } else {
                if (temp.length >= 2) {
                  // 合并多个对子为一个“连对”
                  lianDuiList.push(temp.flat());
                }

                temp = [pairs[_i5]];
              }
            }
          }

          if (temp.length >= 2) {
            lianDuiList.push(temp.flat());
          } // ❗ 去掉被合并成连对的对子


          var usedPairs = new Set(lianDuiList.flat());
          var remainingPairs = pairs.filter(pair => !usedPairs.has(pair[0])); // 合并对子和其他剩余牌

          var remainCards = [...remainingPairs.flat(), ...otherGroups.flat()]; // 升序排序用于识别顺子

          var sortedRemain = sortCardsBySizeUp(remainCards, remainCards.length); // 找顺子（必须点数连续、点数不能 ≥ 15）

          var findStraightGroups = cards => {
            var result = [];
            var unique = getUniqueCard(cards).filter(c => {
              var s = getCardSize(c);
              return s >= 3 && s <= 14;
            });
            var temp = [];

            for (var _i6 = 0; _i6 < unique.length; _i6++) {
              var cur = unique[_i6];
              var curSize = getCardSize(cur);

              if (temp.length === 0) {
                temp.push(cur);
              } else {
                var prevSize = getCardSize(temp[temp.length - 1]);

                if (curSize === prevSize + 1) {
                  temp.push(cur);
                } else {
                  if (temp.length >= 5) result.push([...temp]);
                  temp = [cur];
                }
              }
            }

            if (temp.length >= 5) result.push([...temp]);
            return result;
          };

          var straightList = findStraightGroups(sortedRemain); // 剔除被用作顺子的牌

          var usedStraight = new Set(straightList.flat());
          var remainAfterStraight = sortedRemain.filter(c => !usedStraight.has(c));
          var remainSingleList = remainAfterStraight.map(c => [c]);
          var tmpAll = [...straightList, // 顺子
          ...lianDuiList, // 连对
          ...remainingPairs, // 单对
          ...otherGroups, // 其他炸弹、三张
          ...remainSingleList // 剩余单牌
          ]; // // 重组 tmpList：连对 + 剩余对子 + 其他
          // tmpList.length = 0;
          // tmpList.push(...lianDuiList);
          // tmpList.push(...remainingPairs);
          // tmpList.push(...otherGroups);
          // // 🔽 排序：按权重（加入连对=45）

          tmpList.sort((a, b) => getGroupPower(b) - getGroupPower(a));
          return tmpList;
        }

        _GameLogic.getOneCardSizeList = getOneCardSizeList;

        // function isStraight(sizes: number[]): boolean {
        //     if (sizes.length < 5) return false;
        //     for (let i = 1; i < sizes.length; i++) {
        //         if (sizes[i] !== sizes[i - 1] + 1) return false;
        //         if (sizes[i] >= 15) return false; // 顺子不能包含 2（15）或王
        //     }
        //     return true;
        // }
        function getGroupPower(cards) {
          var size = cards.length; // 四王炸

          var sizes = cards.map(getCardSize).sort((a, b) => a - b);
          var kingCount = sizes.filter(s => s === 14 || s === 15).length;
          if (size === 4 && kingCount === 4) return 100;
          if (size >= 6 && isAllSameSize(cards)) return 90;
          if (size === 5 && isAllSameSize(cards)) return 80;
          if (size === 4 && isAllSameSize(cards)) return 60;

          if (size >= 5 && isStraight(sizes)) {
            return isSameSuitStraight(cards) ? 70 : 40; // 顺子
          } // 连对判断：偶数张，都是对子，点数连续


          if (size >= 4 && size % 2 === 0) {
            var pairs = [];

            for (var i = 0; i < size; i += 2) {
              if (getCardSize(cards[i]) !== getCardSize(cards[i + 1])) return 0;
              pairs.push(getCardSize(cards[i]));
            }

            for (var _i7 = 1; _i7 < pairs.length; _i7++) {
              if (pairs[_i7] !== pairs[_i7 - 1] + 1 || pairs[_i7] >= 15) return 0;
            }

            return 45; // 连对优先级
          }

          if (size === 3) return 30;
          if (size === 2) return 20;
          if (size === 1) return 10;
          return 0;
        }

        function isAllSameSize(cards) {
          var size = getCardSize(cards[0]);
          return cards.every(c => getCardSize(c) === size);
        }

        function getGroupRank(cards) {
          var size = cards.length; // 四王（两个大王两个小王）

          if (size === 4 && isFourKings(cards)) return 100;
          if (size >= 6) return 90;
          if (isSameSuitStraight(cards)) return 80;
          if (size === 5) return 70;
          if (size === 4) return 60;
          if (size === 3) return 50;
          if (size === 2) return 40;
          return 10;
        }

        function isFourKings(cards) {
          var sizes = cards.map(getCardSize);
          var colors = cards.map(getCardColor);
          var kingCount = sizes.filter(s => s === 14 || s === 15).length;
          return kingCount === 4;
        } // 判断是否同花顺（5张及以上、顺子且同花）


        function isSameSuitStraight(cards) {
          if (cards.length < 5) return false;
          var sizes = cards.map(getCardSize).sort((a, b) => a - b);
          var color = getCardColor(cards[0]);

          for (var i = 1; i < cards.length; i++) {
            if (getCardColor(cards[i]) !== color) return false;
            if (sizes[i] !== sizes[i - 1] + 1) return false;
          }

          return true;
        }

        _GameLogic.isSameSuitStraight = isSameSuitStraight;

        function isStraight(cards) {
          if (cards.length < 5) return false; // 顺子至少需要5张牌

          var map = getCardCountMap(cards);
          var rankSet = new Set(); // 过滤掉2和大小王

          for (var card of cards) {
            var rank = getCardSize(card);

            if (rank >= 3 && rank <= 14) {
              // 只考虑3到A的牌
              rankSet.add(rank);
            }
          } // 顺子必须没有重复的牌


          if (rankSet.size !== cards.length) return false; // 顺子的牌必须连续

          var ranks = Array.from(rankSet).sort((a, b) => a - b);

          for (var i = 1; i < ranks.length; i++) {
            if (ranks[i] !== ranks[i - 1] + 1) {
              return false; // 非连续
            }
          }

          return true; // 顺子
        }

        _GameLogic.isStraight = isStraight;

        function isWangzha(cards) {
          var _map$get, _map$get2, _map$get3, _map$get4, _map$get5, _map$get6;

          var map = getCardCountMap(cards);
          var hasBig = ((_map$get = map.get(17)) == null ? void 0 : _map$get.length) >= 1; // 大王

          var hasSmall = ((_map$get2 = map.get(16)) == null ? void 0 : _map$get2.length) >= 1; // 小王
          // 判断是否为王炸（大王 + 小王）

          if (hasBig && hasSmall) {
            return true; // 王炸
          } // 判断是否为四王炸（两张大王 + 两张小王）


          if (((_map$get3 = map.get(17)) == null ? void 0 : _map$get3.length) >= 2 && ((_map$get4 = map.get(16)) == null ? void 0 : _map$get4.length) >= 2) {
            return true; // 四王炸
          } // 判断是否为双王炸（两张相同的大王或两张相同的小王）


          if (((_map$get5 = map.get(17)) == null ? void 0 : _map$get5.length) >= 2 || ((_map$get6 = map.get(16)) == null ? void 0 : _map$get6.length) >= 2) {
            return true; // 双王炸
          }

          return false; // 其他情况都不是王炸
        }

        _GameLogic.isWangzha = isWangzha;

        function isLiandui(cards) {
          if (cards.length < 6 || cards.length % 2 !== 0) return false; // 连对必须是偶数张，且至少 6 张

          var map = getCardCountMap(cards);
          var pairRanks = []; // 获取所有对子的牌点

          for (var [rank, list] of map.entries()) {
            if (rank < 3 || rank > 14) continue; // 排除 2 和大小王

            if (list.length === 2) {
              pairRanks.push(rank); // 记录有效的对子
            }
          } // 必须有足够的对子


          if (pairRanks.length * 2 !== cards.length) return false; // 判断对子是否连续

          pairRanks.sort((a, b) => a - b);

          for (var i = 1; i < pairRanks.length; i++) {
            if (pairRanks[i] !== pairRanks[i - 1] + 1) {
              return false; // 非连续
            }
          }

          return true; // 连对
        }

        _GameLogic.isLiandui = isLiandui;

        function isThreeWithTwo(cards) {
          var map = getCardCountMap(cards); // 获取每种牌的数量分布

          var hasThree = false;
          var pairCount = 0;
          var singleCount = 0; // 遍历所有牌，统计三张相同的牌、对子、单张牌的数量

          for (var [rank, list] of map.entries()) {
            if (rank < 3 || rank > 14) continue; // 排除 2 和 大小王

            if (list.length === 3) {
              hasThree = true; // 找到三张相同的牌
            } else if (list.length === 2) {
              pairCount++; // 找到一对
            } else if (list.length === 1) {
              singleCount++; // 找到单牌
            }
          } // 三张相同的牌 + 至少一对或者两张单牌


          return hasThree && (pairCount >= 1 || singleCount >= 2);
        }

        _GameLogic.isThreeWithTwo = isThreeWithTwo;

        function getCardCountMap(cards) {
          var map = new Map();

          for (var card of cards) {
            var rank = card % 16;

            if (!map.has(rank)) {
              map.set(rank, []);
            }

            map.get(rank).push(card);
          }

          return map;
        }

        _GameLogic.getCardCountMap = getCardCountMap;

        function getCardCountMap_I(cards) {
          var map = new Map();
          var heartCards = []; // 用于存储红心级牌（逢人配）
          // 统计每个点数的牌

          for (var card of cards) {
            var rank = card % 16; // 获取牌的点数（去掉花色）

            var isHeartCardRank = isHeartCard(card);

            if (!map.has(rank)) {
              map.set(rank, []);
            }

            map.get(rank).push(card);
          } // // 将红心级牌（逢人配）映射到 `map` 中
          // for (const heartCard of heartCards) {
          //     const rank = heartCard % 16;  // 获取红心级牌的点数
          //     if (!map.has(rank)) {
          //         map.set(rank, []);
          //     }
          //     map.get(rank)!.push(heartCard);  // 将红心级牌添加到对应的点数分组中
          // }


          return map;
        }

        _GameLogic.getCardCountMap_I = getCardCountMap_I;

        function findBombs(cards) {
          var map = this.getCardCountMap(cards);
          var results = []; // 双王炸

          var jokers = cards.filter(c => c % 16 >= 15);

          if (jokers.length === 2) {
            results.push(jokers);
          } // 4张炸 + 6炸


          for (var [rank, group] of map.entries()) {
            if (group.length >= 4) {
              if (group.length === 4 && jokers.length === 2) {
                results.push([...group, ...jokers]); // 六炸
              } else {
                results.push([...group]);
              }
            }
          }

          return results;
        }

        _GameLogic.findBombs = findBombs;

        function isNBomb(cards, n) {
          if (cards.length !== n) return false;
          var size = getCardSize(cards[0]);
          return cards.every(card => getCardSize(card) === size);
        }

        _GameLogic.isNBomb = isNBomb;

        function findRocket(cards) {
          var smallKings = cards.filter(c => c % 16 === 16);
          var bigKings = cards.filter(c => c % 16 === 17);
          var allKings = [...smallKings, ...bigKings];
          var result = []; // 四王炸：任意四张王

          if (allKings.length >= 4) {
            result.push(allKings.slice(0, 4));
          } // 双王炸：2张小王 + 2张大王
          else if (smallKings.length >= 2 && bigKings.length >= 2) {
            result.push([smallKings[0], smallKings[1], bigKings[0], bigKings[1]]);
          } // // 单王炸：1张小王 + 1张大王
          // else if (smallKings.length >= 1 && bigKings.length >= 1) {
          //     result.push([smallKings[0], bigKings[0]]);
          // }


          return result;
        }

        _GameLogic.findRocket = findRocket;

        function findBombsByCount(cards, count) {
          var result = [];
          var map = new Map();
          var frpCards = []; // 红桃级牌列表
          // 分类：分出红桃级牌和普通牌

          for (var card of cards) {
            var rank = card % 16;
            var color = Math.floor(card / 16);

            if (rank === (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).cardInfo.levelCard && color === 2) {
              frpCards.push(card);
            } else {
              if (!map.has(rank)) map.set(rank, []);
              map.get(rank).push(card);
            }
          }

          var usedFrp = new Set(); // 红桃级牌使用记录

          for (var [_rank, group] of map.entries()) {
            var fullCount = Math.floor(group.length / count); // 能组成几组完整炸弹

            for (var i = 0; i < fullCount; i++) {
              result.push(group.slice(i * count, (i + 1) * count));
            } // 如果还能组成 count-1 张，尝试补一张红桃级牌


            var remain = group.slice(fullCount * count);

            if (remain.length === count - 1) {
              for (var frp of frpCards) {
                if (!usedFrp.has(frp)) {
                  result.push([...remain, frp]);
                  usedFrp.add(frp);
                  break;
                }
              }
            }
          }

          return result;
        }

        _GameLogic.findBombsByCount = findBombsByCount;

        function flatten(arr) {
          var result = [];

          for (var group of arr) {
            result.push(...group);
          }

          return result;
        }
        /** 一键理牌主函数 */


        function smartSortCards(cards) {
          var mainResult = []; // 固定牌型

          var randomPart = []; // 飞机/连对/顺子/三带二

          var usedIndex = new Set(); // 避免重复用相同牌

          var getUnused = () => cards.filter((_, idx) => !usedIndex.has(idx));

          var pushAndMark = function pushAndMark(group, toMain) {
            if (toMain === void 0) {
              toMain = true;
            }

            var realGroup = [];

            var _loop = function _loop(g) {
              var idx = cards.findIndex((c, i) => c === g && !usedIndex.has(i));

              if (idx !== -1) {
                usedIndex.add(idx);
                realGroup.push(cards[idx]);
              }
            };

            for (var g of group) {
              _loop(g);
            }

            if (realGroup.length > 0) {
              (toMain ? mainResult : randomPart).push(realGroup);
            }
          }; // 固定牌型优先


          findRocket(getUnused()).forEach(g => pushAndMark(g)); // 王炸

          findBombsByCount(getUnused(), 6).forEach(g => pushAndMark(g)); // 六炸

          findFlushStraight(getUnused()).forEach(g => pushAndMark(g)); // 同花顺

          findBombsByCount(getUnused(), 5).forEach(g => pushAndMark(g)); // 五炸

          findBombsByCount(getUnused(), 4).forEach(g => pushAndMark(g)); // 四炸
          // ===== 杂牌型，放在后面 =====

          var straightList = findStraight(getUnused());
          var threeWithList = findThreeWithTwoBy(getUnused());
          var lianduiList = findChainPairs(getUnused());

          if (straightList.length === 1) {
            straightList.forEach(g => pushAndMark(g, false)); // 顺子

            if (threeWithList.length != 0) {
              findThreeWithTwo(getUnused(), usedIndex).forEach(g => pushAndMark(g, false)); // 三带二
            } else {
              //没有三带二的情况下
              if (lianduiList.length != 0) {
                lianduiList.forEach(g => pushAndMark(g, false));
              } else {
                //没有木板的情况下理钢板
                findPlane(getUnused()).forEach(g => pushAndMark(g, false));
              }
            }
          } else if (straightList.length === 0) {
            if (threeWithList.length >= 2) {
              threeWithList.forEach(g => pushAndMark(g, false));
            } else {
              if (threeWithList.length != 0) {
                findThreeWithTwo(getUnused(), usedIndex).forEach(g => pushAndMark(g, false)); // 三带二
              } else {
                //没有顺子和没有三带二
                findChainPairs(getUnused()).forEach(g => pushAndMark(g, false));
                findPlane(getUnused()).forEach(g => pushAndMark(g, false)); // findThreeWithTwo(getUnused(), usedIndex).forEach(g => pushAndMark(g, false)); // 三带二
              }
            } // findThreeWithTwoBy(getUnused(), usedIndex, 2).forEach(g => pushAndMark(g, false)); // 三带二（尽可能两组）

          } else {
            //说明顺子超过2组
            if (threeWithList.length == 0) {
              straightList.forEach(g => pushAndMark(g, false)); // 顺子
            } else {
              findStraight_I(getUnused()).forEach(g => pushAndMark(g, false));
              findThreeWithTwo(getUnused(), usedIndex).forEach(g => pushAndMark(g, false)); // 三带二
            }
          } // findPlane(getUnused()).forEach(g => pushAndMark(g, false));        // 飞机（不带）
          // findChainPairs(getUnused()).forEach(g => pushAndMark(g, false));   // 连对
          // const usedIndex = new Set<number>();
          // ===== 剩余散牌，按点数从大到小排列 =====


          var scatter = getUnused();
          var sortValue = sortCardsBySizeDown(scatter, scatter.length);
          var uniqueList = getUniqueCard(sortValue);
          var idx = 0;

          for (var j = 0; j < uniqueList.length; j++) {
            var d = uniqueList[j];
            var list1 = [];

            for (var i = idx; i < sortValue.length; i++) {
              if (getCardSize(d) == getCardSize(sortValue[i])) {
                list1.push(sortValue[i]);

                if (i == sortValue.length - 1) {
                  pushAndMark(list1, true);
                }
              } else {
                idx = i;
                pushAndMark(list1, true);
                break;
              }
            }
          }

          return [...mainResult, ...randomPart];
        }

        _GameLogic.smartSortCards = smartSortCards;

        function minRank(group) {
          return Math.min(...group.map(getCardSize));
        }

        function maxRank(group) {
          return Math.max(...group.map(getCardSize));
        }
        /** 查找同花顺（同一花色的顺子，至少5张） */


        function findFlushStraight(cards) {
          var result = [];
          var redTrumpCards = [];
          var usedFrp = new Set();
          var colorMap = new Map(); // 分组：红桃级牌 + 花色分组

          for (var card of cards) {
            var rank = card % 16;
            var color = Math.floor(card / 16);
            if (rank < 3 || rank > 14) continue;

            if (color === 2 && rank === (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).cardInfo.levelCard) {
              redTrumpCards.push(card); // 红桃级牌
            } else {
              if (!colorMap.has(color)) colorMap.set(color, []);
              colorMap.get(color).push(card);
            }
          }

          for (var [_color, colorCards] of colorMap.entries()) {
            var rankMap = new Map();

            for (var _card2 of colorCards) {
              var _rank2 = _card2 % 16;

              if (!rankMap.has(_rank2)) rankMap.set(_rank2, []);
              rankMap.get(_rank2).push(_card2);
            }

            var sortedRanks = Array.from(rankMap.keys()).sort((a, b) => a - b);

            for (var start = 3; start <= 10; start++) {
              var sequence = [start, start + 1, start + 2, start + 3, start + 4];
              var straight = [];
              var tempPopped = []; // [rank, card]

              var missing = 0;

              for (var r of sequence) {
                var list = rankMap.get(r);

                if (list && list.length > 0) {
                  var c = list.pop();
                  straight.push(c);
                  tempPopped.push([r, c]);
                  if (list.length === 0) rankMap.delete(r);
                } else {
                  missing++;
                }
              }

              if (missing === 0) {
                result.push(straight);
                start += 4;
              } else if (missing === 1) {
                var frp = redTrumpCards.find(c => !usedFrp.has(c));

                if (frp !== undefined) {
                  straight.push(frp);
                  usedFrp.add(frp);
                  result.push(straight);
                  start += 4;
                } else {
                  // 恢复
                  for (var [_r2, _c] of tempPopped) {
                    if (!rankMap.has(_r2)) rankMap.set(_r2, []);
                    rankMap.get(_r2).push(_c);
                  }
                }
              } else {
                // 恢复
                for (var [_r3, _c2] of tempPopped) {
                  if (!rankMap.has(_r3)) rankMap.set(_r3, []);
                  rankMap.get(_r3).push(_c2);
                }
              }
            }
          }

          return result;
        }

        _GameLogic.findFlushStraight = findFlushStraight;

        function findPlane(cards) {
          var map = new Map(); // 建立 rank -> [cards] 映射（排除大小王）
          // 牌色用 Math.floor(card / 16)，牌点用 card % 16

          for (var card of cards) {
            var rank = card % 16;
            var color = Math.floor(card / 16); // 排除大小王

            if (rank >= 14 || rank <= 1) continue; // 排除非红桃的级牌（2）

            if (rank === (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).cardInfo.levelCard && color !== 0) continue;

            if (!map.has(rank)) {
              map.set(rank, []);
            }

            map.get(rank).push(card);
          } // 提取所有 rank 满足 >=3 的三张牌，按点数升序排序


          var ranks = Array.from(map.keys()).filter(rank => map.get(rank).length >= 3).sort((a, b) => a - b);
          var result = [];
          var i = 0;

          while (i < ranks.length - 1) {
            var first = ranks[i];
            var second = ranks[i + 1];

            if (second === first + 1) {
              // ✅ 找到第一组连续的两连飞机
              var plane = [];
              plane.push(...map.get(first).slice(0, 3));
              plane.push(...map.get(second).slice(0, 3));
              result.push(plane);
              break; // 只要最小的一组两连飞机
            }

            i++;
          }

          return result;
        }

        _GameLogic.findPlane = findPlane;

        function findChainPairs(cards) {
          var map = getCardCountMap(cards);
          var ranks = Array.from(map.keys()); // 过滤：点数必须在 3~13（包含3~K），且至少两个

          var filtered = ranks.filter(r => map.get(r).length >= 2 && r >= 3 && r <= 13).sort((a, b) => a - b);
          var results = [];
          var temp = [];

          for (var i = 0; i < filtered.length; i++) {
            var curr = filtered[i];

            if (temp.length === 0 || filtered[i - 1] === curr - 1) {
              temp.push(map.get(curr).slice(0, 2));

              if (temp.length === 5) {
                results.push(temp.flat());
                temp = [];
              }
            } else {
              if (temp.length >= 3) {
                results.push(temp.flat());
              }

              temp = [map.get(curr).slice(0, 2)];
            }
          } // 补最后一次


          if (temp.length >= 3) {
            results.push(temp.flat());
          }

          return results;
        }

        _GameLogic.findChainPairs = findChainPairs;

        function findStraight_I(cards) {
          var map = new Map(); // 构建 rank -> cards 映射（过滤大小王）

          for (var card of cards) {
            var rank = getCardSize(card);
            if (rank < 3 || rank > 14) continue; // 3~A

            if (!map.has(rank)) map.set(rank, []);
            map.get(rank).push(card);
          }

          var ranks = Array.from(map.keys()).sort((a, b) => a - b);
          var result = []; // 查找顺子

          for (var i = 0; i <= ranks.length - 5; i++) {
            var seq = ranks.slice(i, i + 5);
            var isConsecutive = true;

            for (var j = 1; j < 5; j++) {
              if (seq[j] !== seq[j - 1] + 1) {
                isConsecutive = false;
                break;
              }
            }

            if (isConsecutive) {
              var straight = [];

              for (var _rank3 of seq) {
                straight.push(map.get(_rank3).pop());
                if (map.get(_rank3).length === 0) map.delete(_rank3);
              }

              result.push(straight);
              i += 4; // 跳过这段，防止重复重叠
            }
          } // 返回最小的顺子


          if (result.length > 0) {
            return [result[0]]; // 取最小的顺子
          } else {
            return []; // 没有顺子
          }
        }

        _GameLogic.findStraight_I = findStraight_I;

        function findStraight(cards) {
          var map = new Map(); // 构建 rank -> cards 映射（过滤大小王）

          for (var card of cards) {
            var rank = getCardSize(card);
            if (rank < 3 || rank > 14) continue; // 3~A

            if (!map.has(rank)) map.set(rank, []);
            map.get(rank).push(card);
          }

          var ranks = Array.from(map.keys()).sort((a, b) => a - b);
          var result = [];
          var i = 0;

          while (i <= ranks.length - 5) {
            var start = i;
            var end = i + 1; // 尝试向后扩展连续段

            while (end < ranks.length && ranks[end] === ranks[end - 1] + 1 && map.has(ranks[end])) {
              end++;
            }

            var length = end - start;

            if (length >= 5) {
              var seq = ranks.slice(start, end);
              var straight = [];

              for (var _rank4 of seq) {
                var cardsOfRank = map.get(_rank4);
                straight.push(cardsOfRank.pop());

                if (cardsOfRank.length === 0) {
                  map.delete(_rank4);
                }
              }

              result.push(straight); // ranks 中可能仍有未删除的点数，但 map 已经删了，用过滤后的 ranks 重新再来一轮

              i = 0; // 重新生成 ranks（只保留仍有剩余牌的点数）

              var remainingRanks = Array.from(map.keys()).sort((a, b) => a - b);
              ranks.length = 0;
              ranks.push(...remainingRanks);
            } else {
              i++;
            }
          }

          return result;
        }

        _GameLogic.findStraight = findStraight;

        function findPair(cards) {
          // const map = getCardCountMap(cards);
          // const result: number[][] = [];
          // for (const [rank, group] of map.entries()) {
          //     if (rank < 2 || rank < 14) continue; // 过滤 2、小王、大王（15，16，17）
          //     if (group.length >= 2) {
          //         result.push(group.slice(0, 2));
          //     }
          // }
          // return result;
          var map = new Map();

          for (var card of cards) {
            var rank = card % 16; // 过滤大小王
            // if (rank === 14 || rank === 15) continue;

            if (!map.has(rank)) {
              map.set(rank, []);
            }

            map.get(rank).push(card);
          }

          var result = [];

          for (var group of map.values()) {
            if (group.length === 2) {
              result.push([...group]);
            }
          }

          return result;
        }

        _GameLogic.findPair = findPair;

        function findAllSingles(cards) {
          var map = getCardCountMap(cards); // Map<点数, number[]>

          var result = [];

          for (var list of map.values()) {
            if (list.length === 1) {
              result.push([...list]); // 每张单牌包装成一组
            }
          }

          return result;
        }

        _GameLogic.findAllSingles = findAllSingles;

        function isSingleCardStronger(card, target, levelRank) {
          var rankA = card % 16;
          var rankB = target % 16;
          var isJokerA = rankA >= 14;
          var isJokerB = rankB >= 14;
          var isLevelA = rankA === levelRank;
          var isLevelB = rankB === levelRank; // 不能压王

          if (isJokerB) {
            return isJokerA && rankA > rankB; // 只能大王压小王
          } // 级牌能压除王和级牌以外的所有牌


          if (isLevelA && !isJokerB && !isLevelB) {
            return true;
          }

          return compareCardSize(card, target) > 0;
        }

        function isSamePointWithFrp(group, levelRank) {
          if (group.length < 4) return false;
          var mainRank = null;
          var frpCount = 0;

          for (var card of group) {
            var rank = card % 16;
            var color = Math.floor(card / 16);
            var isFrp = rank === levelRank && color === 2;

            if (isFrp) {
              frpCount++;
              continue;
            }

            if (mainRank === null) {
              mainRank = rank;
            } else if (rank !== mainRank) {
              return false;
            }
          }

          return frpCount <= 1; // 允许最多 1 张红桃级牌，其余必须相同点数
        }

        function getHintCards(targetCards, groupedCards) {
          var hintList = [];
          if (!targetCards || targetCards.length === 0) return [];
          var type = GameLogic.getCardType(targetCards); // 获取目标主牌点（比如单张、对子、三带）

          var targetMainSize = getMainCardSize(targetCards);

          switch (type) {
            case (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
              error: Error()
            }), GameDefine) : GameDefine).KIND_CARDS_1:
              // 优先从散牌中找
              for (var i = groupedCards.length - 1; i >= 0; i--) {
                var group = groupedCards[i];

                if (group.length === 1) {
                  var card = group[0];

                  if (isSingleCardStronger(card, targetCards[0], (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                    error: Error()
                  }), GlobalData) : GlobalData).cardInfo.levelCard)) {
                    hintList.push([card]);
                  }
                }
              } // 没找到，再从对子中拆一张
              // if (hintList.length === 0) {


              for (var _i8 = groupedCards.length - 1; _i8 >= 0; _i8--) {
                var _group4 = groupedCards[_i8];

                if (_group4.length === 2) {
                  var _card3 = _group4[0];

                  if (isSingleCardStronger(_card3, targetCards[0], (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                    error: Error()
                  }), GlobalData) : GlobalData).cardInfo.levelCard)) {
                    hintList.push([_card3]);
                  }
                }
              } // }


              if (hintList.length === 0) {
                for (var _i9 = groupedCards.length - 1; _i9 >= 0; _i9--) {
                  var _group5 = groupedCards[_i9];

                  if (_group5.length === 3) {
                    var _card4 = _group5[0];

                    if (isSingleCardStronger(_card4, targetCards[0], (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                      error: Error()
                    }), GlobalData) : GlobalData).cardInfo.levelCard)) {
                      hintList.push([_card4]);
                    }
                  }
                }
              }

              if (hintList.length === 0) {
                for (var _i10 = groupedCards.length - 1; _i10 >= 0; _i10--) {
                  var _group6 = groupedCards[_i10];

                  if (_group6.length >= 4) {
                    var bombs = GameLogic.newfindBombs(_group6);

                    if (bombs.length != 0) {
                      hintList.push(_group6);
                    }
                  } // // 只判断是否为炸弹（四张及以上，同点数）
                  // if (group.length == 4) {
                  //     const rank = group[0] % 16;
                  //     const isBomb = group.every(card => card % 16 === rank);
                  //     if (isBomb) {
                  //         hintList.push([...group]); // 不需要比较大小，炸弹就是万能压单
                  //         break;
                  //     }
                  // }

                }
              }

              break;

            case (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
              error: Error()
            }), GameDefine) : GameDefine).KIND_CARDS_2:
              // 只从原始对子中找（group.length === 2）
              for (var _i11 = groupedCards.length - 1; _i11 >= 0; _i11--) {
                var _group7 = groupedCards[_i11];

                if (_group7.length === 2) {
                  if (GameLogic.getCardSize(_group7[0]) > targetMainSize) {
                    hintList.push([..._group7]); // 复制一个对子
                  }
                }
              }

              break;

            case (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
              error: Error()
            }), GameDefine) : GameDefine).KIND_CARDS_3:
              {
                // 找出所有三张，且大于目标点
                for (var _i12 = groupedCards.length - 1; _i12 >= 0; _i12--) {
                  var _group8 = groupedCards[_i12];

                  if (_group8.length === 3) {
                    var size = GameLogic.getCardSize(_group8[0]);

                    if (size > targetMainSize) {
                      hintList.push([..._group8]);
                    }
                  }
                }

                break;
              }

            case (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
              error: Error()
            }), GameDefine) : GameDefine).KIND_CARDS_3_2:
              {
                // 三带二：找出三张+一对，三张部分要大
                for (var _i13 = groupedCards.length - 1; _i13 >= 0; _i13--) {
                  var group3 = groupedCards[_i13];

                  if (group3.length === 3) {
                    var _size = GameLogic.getCardSize(group3[0]);

                    if (_size <= targetMainSize) continue; // 再找一组对子（不能跟三张重复点数）

                    for (var j = groupedCards.length - 1; j >= 0; j--) {
                      if (j === _i13) continue;
                      var group2 = groupedCards[j];

                      if (group2.length === 2 && GameLogic.getCardSize(group2[0]) !== _size) {
                        hintList.push([...group3, ...group2]);
                        break; // 一组就够了
                      }
                    }
                  }
                }

                break;
              }

            case (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
              error: Error()
            }), GameDefine) : GameDefine).KIND_CARDS_BOMB_45:
              // ✅ 找更大的炸弹
              for (var _i14 = groupedCards.length - 1; _i14 >= 0; _i14--) {
                var _group9 = groupedCards[_i14];

                if (_group9.length >= 4) {
                  // ✅ 点数必须全部一致，才是炸弹
                  var isBomb = isSamePointWithFrp(_group9, (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                    error: Error()
                  }), GlobalData) : GlobalData).cardInfo.levelCard);
                  if (!isBomb) continue;
                  var groupRank = GameLogic.getCardSize(_group9[0]);

                  if (_group9.length > targetCards.length || _group9.length === targetCards.length && groupRank > targetMainSize) {
                    hintList.push([..._group9]);
                  }
                }
              } // ✅ 加入同花顺提示（同花色 + 顺子长度 >= 5）


              var colorGroups = new Map(); // color -> [cards]

              for (var _card5 of groupedCards.flat()) {
                var color = GameLogic.getCardColor(_card5);
                if (!colorGroups.has(color)) colorGroups.set(color, []);
                colorGroups.get(color).push(_card5);
              }

              for (var cards of colorGroups.values()) {
                var sorted = cards.filter(c => {
                  var rank = c % 16;
                  return rank >= 3 && rank <= 13 || rank === (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                    error: Error()
                  }), GlobalData) : GlobalData).cardInfo.levelCard;
                }).sort((a, b) => GameLogic.getCardSize(a) - GameLogic.getCardSize(b));
                var sizeMap = new Map();

                for (var c of sorted) {
                  var s = GameLogic.getCardSize(c);
                  if (!sizeMap.has(s)) sizeMap.set(s, []);
                  sizeMap.get(s).push(c);
                }

                var sizes = Array.from(sizeMap.keys()).sort((a, b) => a - b); // 滑窗查找连续 >= 5 的同花顺

                for (var _i15 = 0; _i15 <= sizes.length - 5; _i15++) {
                  var ok = true;

                  for (var _j2 = 1; _j2 < 5; _j2++) {
                    if (sizes[_i15 + _j2] !== sizes[_i15 + _j2 - 1] + 1) {
                      ok = false;
                      break;
                    }
                  }

                  if (ok) {
                    var _group10 = [];

                    for (var _j3 = 0; _j3 < 5; _j3++) {
                      var _s = sizes[_i15 + _j3];
                      var list = sizeMap.get(_s);

                      _group10.push(list.pop()); // 拿一张即可

                    }

                    hintList.push(_group10);
                  }
                }
              } // ✅ 王炸也可出（已定义好的）


              var kings = groupedCards.flat().filter(c => isKing(c));

              if (kings.length === 4) {
                hintList.push(kings.slice(0, 4));
              }

              break;

            case (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
              error: Error()
            }), GameDefine) : GameDefine).KIND_CARDS_BOMB_678:
              // ✅ 对方是炸弹，我们只能出更大的炸弹或王炸
              for (var _i16 = groupedCards.length - 1; _i16 >= 0; _i16--) {
                var _group11 = groupedCards[_i16];

                if (_group11.length >= 6) {
                  if (!isSamePointWithFrp(_group11, (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                    error: Error()
                  }), GlobalData) : GlobalData).cardInfo.levelCard)) continue;

                  var _groupRank = GameLogic.getCardSize(_group11[0]);

                  if (_groupRank > targetMainSize) {
                    hintList.push([..._group11]);
                  }
                }
              }

              var kings1 = groupedCards.flat().filter(c => isKing(c));

              if (kings1.length === 4) {
                hintList.push([...kings1]);
              }

              break;

            case (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
              error: Error()
            }), GameDefine) : GameDefine).KIND_CARDS_SHUNZI_1:
              {
                var targetLength = targetCards.length;
                var targetStart = GameLogic.getCardSize(targetCards[0]);
                var singles = groupedCards.flat().filter(c => {
                  var size = GameLogic.getCardSize(c);
                  return size >= 3 && size <= 13; // 排除 2 和王
                });
                var rankMap = new Map();

                for (var _card6 of singles) {
                  var _size2 = GameLogic.getCardSize(_card6);

                  if (!rankMap.has(_size2)) rankMap.set(_size2, []);
                  rankMap.get(_size2).push(_card6);
                }

                var allRanks = Array.from(rankMap.keys()).sort((a, b) => a - b);

                var _loop2 = function _loop2(_i17) {
                  var seq = allRanks.slice(_i17, _i17 + targetLength);
                  var isContinuous = seq.every((r, idx) => idx === 0 || r === seq[idx - 1] + 1);

                  if (isContinuous && seq[0] > targetStart) {
                    var _group12 = [];

                    for (var r of seq) {
                      _group12.push(rankMap.get(r).pop());
                    }

                    hintList.push(_group12);
                    return "break";
                  }
                };

                for (var _i17 = 0; _i17 <= allRanks.length - targetLength; _i17++) {
                  var _ret = _loop2(_i17);

                  if (_ret === "break") break;
                }

                break;
              }

            case (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
              error: Error()
            }), GameDefine) : GameDefine).KIND_CARDS_COLOR:
              {
                var _targetLength = targetCards.length;

                var _targetStart = GameLogic.getCardSize(targetCards[0]);

                var targetColor = GameLogic.getCardColor(targetCards[0]);

                var _singles = groupedCards.flat().filter(c => {
                  var size = GameLogic.getCardSize(c);
                  var color = GameLogic.getCardColor(c);
                  return size >= 3 && size <= 13 && color === targetColor;
                });

                var _rankMap = new Map();

                for (var _card7 of _singles) {
                  var _size3 = GameLogic.getCardSize(_card7);

                  if (!_rankMap.has(_size3)) _rankMap.set(_size3, []);

                  _rankMap.get(_size3).push(_card7);
                }

                var _allRanks = Array.from(_rankMap.keys()).sort((a, b) => a - b);

                var _loop3 = function _loop3(_i18) {
                  var seq = _allRanks.slice(_i18, _i18 + _targetLength);

                  var isContinuous = seq.every((r, idx) => idx === 0 || r === seq[idx - 1] + 1);

                  if (isContinuous && seq[0] > _targetStart) {
                    var _group13 = [];

                    for (var r of seq) {
                      _group13.push(_rankMap.get(r).pop());
                    }

                    hintList.push(_group13);
                    return "break";
                  }
                };

                for (var _i18 = 0; _i18 <= _allRanks.length - _targetLength; _i18++) {
                  var _ret2 = _loop3(_i18);

                  if (_ret2 === "break") break;
                }

                break;
              }

            case (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
              error: Error()
            }), GameDefine) : GameDefine).KIND_CARDS_SHUNZI_3:
              {
                var targetTriplets = targetCards.filter(c => GameLogic.getCardCount(targetCards, GameLogic.getCardSize(c)) === 3);
                var _targetLength2 = targetTriplets.length;
                var targetMin = Math.min(...targetTriplets.map(GameLogic.getCardSize));
                var tripletGroups = [];

                for (var g of groupedCards) {
                  if (g.length === 3) {
                    tripletGroups.push({
                      rank: GameLogic.getCardSize(g[0]),
                      cards: g
                    });
                  }
                }

                tripletGroups.sort((a, b) => a.rank - b.rank);

                for (var _i19 = 0; _i19 <= tripletGroups.length - _targetLength2 / 3; _i19++) {
                  var _group14 = [];
                  var _ok = true;

                  for (var _j4 = 0; _j4 < _targetLength2 / 3; _j4++) {
                    var cur = tripletGroups[_i19 + _j4];

                    if (_j4 > 0 && cur.rank !== tripletGroups[_i19 + _j4 - 1].rank + 1) {
                      _ok = false;
                      break;
                    }

                    _group14.push(...cur.cards);
                  }

                  if (_ok && tripletGroups[_i19].rank > targetMin) {
                    hintList.push(_group14);
                    break;
                  }
                }

                break;
              }

            case (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
              error: Error()
            }), GameDefine) : GameDefine).KIND_CARDS_SHUNZI_2:
              {
                var targetRanks = targetCards.filter(c => GameLogic.getCardCount(targetCards, GameLogic.getCardSize(c)) === 2).map(GameLogic.getCardSize);
                var _targetLength3 = targetRanks.length;

                var _targetMin = Math.min(...targetRanks);

                var pairGroups = [];

                for (var _g of groupedCards) {
                  if (_g.length === 2) {
                    pairGroups.push({
                      rank: GameLogic.getCardSize(_g[0]),
                      cards: _g
                    });
                  }
                }

                pairGroups.sort((a, b) => a.rank - b.rank);

                for (var _i20 = 0; _i20 <= pairGroups.length - _targetLength3 / 2; _i20++) {
                  var _group15 = [];
                  var _ok2 = true;

                  for (var _j5 = 0; _j5 < _targetLength3 / 2; _j5++) {
                    var _cur = pairGroups[_i20 + _j5];

                    if (_j5 > 0 && _cur.rank !== pairGroups[_i20 + _j5 - 1].rank + 1) {
                      _ok2 = false;
                      break;
                    }

                    _group15.push(..._cur.cards);
                  }

                  if (_ok2 && pairGroups[_i20].rank > _targetMin) {
                    hintList.push(_group15);
                    break;
                  }
                }

                break;
              }

            default:
              // 其他牌型的提示：暂不处理
              return [];
          } // 排序（牌点从小到大）


          hintList.sort((a, b) => GameLogic.getCardSize(a[0]) - GameLogic.getCardSize(b[0])); // for (let i = 0; i < hintList.length; i++) {
          //     let lits = hintList[i];
          //     printCardDetails(lits);
          // }

          return hintList;
        }

        _GameLogic.getHintCards = getHintCards;

        function getMainCardSize(cards) {
          var _main$rank;

          var map = getCardCountMap(cards);
          var countArr = Array.from(map.entries()).map(_ref5 => {
            var [rank, list] = _ref5;
            return {
              rank,
              count: list.length
            };
          }); // 按 count 降序，再按 rank 降序

          countArr.sort((a, b) => {
            if (b.count !== a.count) return b.count - a.count;
            return b.rank - a.rank;
          });
          var main = countArr[0];
          return (_main$rank = main == null ? void 0 : main.rank) != null ? _main$rank : -1;
        }

        function getCardCount(cards, size) {
          return cards.filter(c => GameLogic.getCardSize(c) === size).length;
        }

        _GameLogic.getCardCount = getCardCount;

        function isKing(card) {
          var rank = GameLogic.getCardSize(card);
          return rank === 15 || rank === 16; // 假设小王=15，大王=16
        }

        function compareCardSize(a, b) {
          var sizeA = GameLogic.getCardSize(a);
          var sizeB = GameLogic.getCardSize(b); // A=1 特殊处理：当作14参与比较

          var valueA = sizeA === 1 ? 14 : sizeA;
          var valueB = sizeB === 1 ? 14 : sizeB;
          return valueA - valueB;
        }

        function getCompareSize(card) {
          var size = GameLogic.getCardSize(card);
          if (size === 1) return 14; // A → 14

          if (size === 2) return 15; // 级牌2 → 15

          if (size === 16) return 16; // 小王

          if (size === 17) return 17; // 大王

          return size;
        }

        function hasNaturalFormedGroups(cards) {
          if (!cards || cards.length < 5) return false; // 排序（由大到小）

          var sorted = sortCardsBySizeDown(cards, cards.length); // 检查是否包含炸弹

          var map = getCardCountMap(sorted);

          for (var group of map.values()) {
            if (group.length >= 4) return true; // 炸弹或更大
          } // 检查顺子（五张及以上）


          var straights = findStraightByCard(sorted);
          if (straights.length > 0) return true; // 检查飞机

          var feiji = findFeiji(sorted);
          if (feiji.length > 0) return true; // 检查三带二

          var threeWithTwo = hasfindThreeWithTwo(sorted);
          if (threeWithTwo.length > 0) return true; // 检查三连对

          var liandui = findLiandui(sorted);
          if (liandui.length > 0) return true; // 同花顺（如果你支持）

          var tonghuashun = findFlushStraight(sorted);
          if (tonghuashun.length > 0) return true;
          return false;
        }

        _GameLogic.hasNaturalFormedGroups = hasNaturalFormedGroups;

        function hasfindThreeWithTwo(cards) {
          var result = [];
          var map = getCardCountMap(cards);
          var triples = [];
          var pairs = [];

          for (var list of map.values()) {
            if (list.length === 3) {
              triples.push([...list]);
            } else if (list.length === 2) {
              pairs.push([...list]);
            } else if (list.length > 3) {
              // 比如四张，可以拆成 3+1 参与三带
              triples.push(list.slice(0, 3));
            }
          }

          for (var tri of triples) {
            for (var pair of pairs) {
              var total = [...tri, ...pair]; // 保证三带二是完整 5 张牌，且两组牌点不同

              if (new Set(total.map(c => getCardSize(c))).size >= 2) {
                result.push(total);
              }
            }
          }

          return result;
        }

        function getHintList(handCards, targetCards) {
          var hintList = [];
          var targetType = GameLogic.getCardType(targetCards);
          var groupedCards = handCards;
          var targetRank = GameLogic.getCardSize(targetCards[0]); // ------------------ 单张 ------------------

          if (targetType === (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
            error: Error()
          }), GameDefine) : GameDefine).KIND_CARDS_1) {
            // 先找散牌中大于它的
            for (var i = groupedCards.length - 1; i >= 0; i--) {
              var group = groupedCards[i];

              if (group.length === 1 && GameLogic.getCardSize(group[0]) > targetRank) {
                hintList.push([group[0]]);
              }
            } // 没找到，再从对子中拆一张


            if (hintList.length === 0) {
              for (var _i21 = groupedCards.length - 1; _i21 >= 0; _i21--) {
                var _group16 = groupedCards[_i21];

                if (_group16.length === 2) {
                  var card = _group16[0];

                  if (isSingleCardStronger(card, targetCards[0], (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                    error: Error()
                  }), GlobalData) : GlobalData).cardInfo.levelCard)) {
                    hintList.push([card]);
                  }
                }
              }
            }

            if (hintList.length === 0) {
              for (var _i22 = groupedCards.length - 1; _i22 >= 0; _i22--) {
                var _group17 = groupedCards[_i22];

                if (_group17.length === 3) {
                  var _card8 = _group17[0];

                  if (isSingleCardStronger(_card8, targetCards[0], (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                    error: Error()
                  }), GlobalData) : GlobalData).cardInfo.levelCard)) {
                    hintList.push([_card8]);
                  }
                }
              }
            }

            if (hintList.length === 0) {
              for (var _i23 = groupedCards.length - 1; _i23 >= 0; _i23--) {
                var _group18 = groupedCards[_i23];

                if (_group18.length >= 4) {
                  var bombs = GameLogic.newfindBombs(_group18);

                  if (bombs.length != 0) {
                    hintList.push(_group18);
                  }
                }
              }
            }
          } // ------------------ 对子 ------------------
          else if (targetType === (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
            error: Error()
          }), GameDefine) : GameDefine).KIND_CARDS_2) {
            for (var _group19 of groupedCards) {
              if (_group19.length === 2 && GameLogic.getCardSize(_group19[0]) > targetRank) {
                hintList.push([..._group19]);
              }
            }
          } // ------------------ 三不带 ------------------
          else if (targetType === (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
            error: Error()
          }), GameDefine) : GameDefine).KIND_CARDS_3) {
            for (var _group20 of groupedCards) {
              if (_group20.length === 3 && GameLogic.getCardSize(_group20[0]) > targetRank) {
                hintList.push([..._group20]);
              }
            }
          } // ------------------ 三带二 ------------------
          else if (targetType === (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
            error: Error()
          }), GameDefine) : GameDefine).KIND_CARDS_3_2) {
            var _loop4 = function _loop4(_group21) {
              if (_group21.length === 3 && GameLogic.getCardSize(_group21[0]) > targetRank) {
                // 找一个对子作为带牌
                var pair = groupedCards.find(g => g.length === 2 && g !== _group21);

                if (pair) {
                  hintList.push([..._group21, ...pair]);
                }
              }
            };

            for (var _group21 of groupedCards) {
              _loop4(_group21);
            }
          } // // ------------------ 顺子 ------------------
          // else if (targetType === GameDefine.KIND_CARDS_SHUNZI_1) {
          //     const straights = GameLogic.findStraight(handCards);
          //     for (const s of straights) {
          //         if (s.length === targetCards.length && GameLogic.getCardSize(s[0]) > targetRank) {
          //             hintList.push(s);
          //         }
          //     }
          // }
          // // ------------------ 连对 ------------------
          // else if (targetType === GameDefine.KIND_CARDS_SHUNZI_2) {
          //     const doubles = GameLogic.findDoubleSeq(handCards); // 例如：334455
          //     for (const d of doubles) {
          //         if (d.length === targetCards.length && GameLogic.getCardSize(d[0]) > targetRank) {
          //             hintList.push(d);
          //         }
          //     }
          // }
          // // ------------------ 飞机 ------------------
          // else if (targetType === GameDefine.KIND_CARDS_SHUNZI_3) {
          //     const planes = GameLogic.findPlane(handCards);
          //     for (const p of planes) {
          //         if (GameLogic.compare(p, targetCards) > 0) {
          //             hintList.push(p);
          //         }
          //     }
          // }
          // // ------------------ 炸弹 ------------------
          // const bombs = GameLogic.findBombs(handCards); // 包括逢人配五炸、六炸、王炸
          // for (const bomb of bombs) {
          //     if (GameLogic.compare(bomb, targetCards) > 0) {
          //         hintList.push(bomb);
          //     }
          // }
          // // ------------------ 王炸 ------------------
          // if (GameLogic.isJokerBomb(handCards)) {
          //     const bomb = GameLogic.getJokerBomb(handCards);
          //     if (GameLogic.compare(bomb, targetCards) > 0) {
          //         hintList.push(bomb);
          //     }
          // }


          return hintList;
        }

        _GameLogic.getHintList = getHintList;

        function newfindBombs(cards, levelRank) {
          if (levelRank === void 0) {
            levelRank = (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).cardInfo.levelCard;
          }

          var countMap = new Map();
          var bombs = []; // 分组点数

          for (var card of cards) {
            var rank = card % 16;
            if (!countMap.has(rank)) countMap.set(rank, []);
            countMap.get(rank).push(card);
          } // 红心级牌（逢人配）


          var heartCards = cards.filter(card => {
            var rank = card % 16;
            var color = Math.floor(card / 16);
            return rank === levelRank && color === 2;
          });
          var usedHearts = new Set();
          var sortedRanks = Array.from(countMap.keys()).sort((a, b) => b - a);

          for (var _rank5 of sortedRanks) {
            var group = countMap.get(_rank5);
            var len = group.length;

            if (len >= 6) {
              bombs.push([...group]); // 六炸
            }

            if (len === 5) {
              bombs.push([...group]); // 五炸

              var heart = heartCards.find(h => !usedHearts.has(h));

              if (heart) {
                bombs.push([...group, heart]); // 五张 + 红心 = 六炸

                usedHearts.add(heart);
              }
            }

            if (len === 4) {
              bombs.push([...group]); // 四炸

              var availableHearts = heartCards.filter(h => !usedHearts.has(h));

              if (availableHearts.length >= 1) {
                bombs.push([...group, availableHearts[0]]); // 五炸

                usedHearts.add(availableHearts[0]);
              }

              if (availableHearts.length >= 2) {
                bombs.push([...group, availableHearts[0], availableHearts[1]]); // 六炸

                usedHearts.add(availableHearts[1]);
              }
            }

            if (len === 3) {
              var _heart = heartCards.find(h => !usedHearts.has(h));

              if (_heart) {
                bombs.push([...group, _heart]); // 四炸（3+红心）

                usedHearts.add(_heart);
              }
            }
          } // ------------------ 王炸 ------------------


          var jokers = cards.filter(c => {
            var r = c % 16;
            return r === 14 || r === 15;
          });
          var smallJokers = jokers.filter(c => c % 16 === 14);
          var bigJokers = jokers.filter(c => c % 16 === 15);

          if (smallJokers.length >= 2 && bigJokers.length >= 2) {
            var kingBomb = [smallJokers[0], smallJokers[1], bigJokers[0], bigJokers[1]];
            bombs.push(kingBomb);
          }

          return bombs;
        }

        _GameLogic.newfindBombs = newfindBombs;

        function printCardDetails(cards, isServer) {
          if (isServer === void 0) {
            isServer = true;
          }

          var result = cards.map(group => {
            return group.map(card => {
              var color = Math.floor(card / 16); // 获取花色（通过除以16）

              var rank = card % 16; // 获取点数（通过取余16）

              return "[" + getCardColorByName(color) + " " + getCardRank(rank) + "]";
            });
          });
          console.log(JSON.stringify(result));
        }

        _GameLogic.printCardDetails = printCardDetails;

        function printCardList(cards) {
          var result = cards.map(card => {
            var color = Math.floor(card / 16); // 获取花色

            var rank = card % 16; // 获取点数

            return "[" + getCardColorByName(color) + ", " + getCardRank(rank) + "]";
          });
          console.log("\u51FA\u724C>>>>{ " + result.join(', ') + " }");
        }

        _GameLogic.printCardList = printCardList;

        // 获取花色名称
        function getCardColorByName(color) {
          //客户端 黑 红 梅 方
          //       3  2  1  0
          // let tmpColor = value % 10;
          //     let tmpSize = Math.floor(value / 10);
          //     //牌色转换
          //     if (tmpColor == 1) { tmpColor = 2 }//红
          //     else if (tmpColor == 2) { tmpColor = 0 }//方
          //     else if (tmpColor == 3) { tmpColor = 1 }//梅
          //     else if (tmpColor == 4) { tmpColor = 3 }//黑
          //     else if (tmpColor == 5) { tmpColor = 4 }//小王,大王
          //     //牌值转换
          //     if (tmpSize == 14) { tmpSize = 1 }
          //     else if (tmpSize == 15) { tmpSize = 14 }
          //     else if (tmpSize == 16) { tmpSize = 15 }
          switch (color) {
            case 3:
              return "♠";
            // 黑桃

            case 2:
              return "♥";
            // 红心

            case 1:
              return "♣";
            // 梅花

            case 0:
              return "方块";
            // 方块

            case 4:
              return "大王，小王";

            default:
              return "Unknown";
          }
        } // 获取点数名称


        function getCardRank(rank) {
          // let card = value % 16;
          //     if (card == 1)
          //         return 14;
          //     else if (card == GlobalData.cardInfo.levelCard)
          //         // 王>级牌>1
          //         return 15;
          //     else if (card == 14)
          //         return 16;
          //     else if (card == 15)
          //         return 17;
          //     return card;
          switch (rank) {
            case 14:
              return "A";
            // A

            case 11:
              return "J";
            // J

            case 12:
              return "Q";
            // Q

            case 13:
              return "K";
            // K

            case 15:
              return "2";
            // 2
            // case 15: return "红心2"; // 3

            case 16:
              return "小王";

            case 17:
              return "大王";
            // 处理点数

            default:
              return rank.toString();
            // 其他数字牌
          }
        }
      })(GameLogic || _export("GameLogic", GameLogic = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4987e30ecd77086fe7b0e9e8b852eb02158d0ba3.js.map