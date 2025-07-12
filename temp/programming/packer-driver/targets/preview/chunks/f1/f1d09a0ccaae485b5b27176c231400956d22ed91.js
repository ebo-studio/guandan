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
          var deleteIdx = []; // if (GlobalData.cardInfo.cardDir) {
          //     for (let i = 0; i < value.length; i++) {
          //         let find = false;
          //         for (let j = 0; j < delList.length; j++) {
          //             if (value[i] == delList[j]) {
          //                 delList.splice(j, 1);
          //                 deleteIdx.push(i);
          //                 find = true;
          //                 break;
          //             }
          //         }
          //         if (!find) {
          //             remainCards.push(value[i]);
          //         }
          //     }
          // } else {

          var tmpList = [];
          var sameSizeList = GameLogic.getSameCardSizeList(value, keepOrder, select, prevSelected);

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

        function getSameCardSizeList(value, keepOrder, select, prevSelected) {
          if (keepOrder === void 0) {
            keepOrder = false;
          }

          if (select === void 0) {
            select = [];
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
          } else {
            return moveSelectedCardsToBack(value, select, prevSelected, []);
          }
        }

        _GameLogic.getSameCardSizeList = getSameCardSizeList;

        function findStraightByCard(cards) {
          var map = getCardCountMap(cards);
          var allRanks = Array.from(map.keys()).filter(r => r >= 3 && r <= 14) // 3~A
          .sort((a, b) => a - b);
          var results = [];
          var temp = [];

          for (var i = 0; i < allRanks.length; i++) {
            var rank = allRanks[i];

            if (temp.length === 0 || rank === allRanks[i - 1] + 1) {
              temp.push(rank);
            } else {
              temp = [rank];
            }

            if (temp.length === 5) {
              // 构建5张对应的原牌值
              var group = [];

              for (var r of temp) {
                // 从 map 中拿出当前 rank 的任意一张
                var list = map.get(r);

                if (list && list.length > 0) {
                  group.push(list[0]);
                  list.shift(); // 用掉这张牌
                }
              }

              if (group.length === 5) results.push(group);
              temp.shift(); // 滑动窗口继续往后找
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
          var triplets = []; // 取出所有三张相同点数的牌

          for (var [rank, list] of map.entries()) {
            if (rank < 3 || rank > 14) continue; // 排除非法的牌

            if (list.length === 3) {
              triplets.push(rank);
            }
          }

          if (triplets.length < 2) return []; // 飞机至少需要两组三张牌
          // 检查是否连续

          triplets.sort((a, b) => a - b);

          for (var i = 1; i < triplets.length; i++) {
            if (triplets[i] !== triplets[i - 1] + 1) {
              return []; // 非连续，不是合法飞机
            }
          } // 组装飞机


          var result = [];

          for (var _rank of triplets) {
            result.push([_rank, _rank, _rank]);
          }

          return result;
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
          } // ✅ 步骤2：识别这次新选中的三带二组合（只识别当前选中的）


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
          } // ✅ 步骤3：识别飞机


          var triplets = findFeiji(selected.filter(c => !usedCards.has(c)));

          for (var _group2 of triplets) {
            moveToBack.push(_group2);

            _group2.forEach(c => usedCards.add(c));
          }

          var straights = findStraightByCard(selected.filter(c => !usedCards.has(c)));

          for (var s of straights) {
            moveToBack.push(s);
            s.forEach(c => usedCards.add(c));
          } // ✅ 连对识别


          var lianduiGroups = findLiandui(selected.filter(c => !usedCards.has(c)));

          for (var _group3 of lianduiGroups) {
            moveToBack.push(_group3);

            _group3.forEach(c => usedCards.add(c));
          } // ✅ 步骤3：将剩余未处理的牌按点数分组


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
          }

          return result.concat(moveToBack);
        }

        _GameLogic.moveSelectedCardsToBack = moveSelectedCardsToBack;

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

        function getCardType(cards) {
          // 示例：你可能已有类似逻辑，请替换成实际逻辑
          if (cards.length === 1) return (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
            error: Error()
          }), GameDefine) : GameDefine).KIND_CARDS_1;

          if (cards.length === 2 && getCardSize(cards[0]) === getCardSize(cards[1])) {
            return (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
              error: Error()
            }), GameDefine) : GameDefine).KIND_CARDS_2;
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
          } // ✅ 连对（对子连续 >= 3 对）


          if (cards.length >= 6 && cards.length % 2 === 0) {
            var _map = getCardCountMap(cards);

            var pairRanks = [];

            for (var [rank, _list] of _map.entries()) {
              if (rank < 3 || rank > 14) return (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
                error: Error()
              }), GameDefine) : GameDefine).KIND_CARDS_ERROR;

              if (_list.length === 2) {
                pairRanks.push(rank);
              } else {
                return (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
                  error: Error()
                }), GameDefine) : GameDefine).KIND_CARDS_ERROR;
              }
            }

            if (pairRanks.length * 2 !== cards.length) return (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
              error: Error()
            }), GameDefine) : GameDefine).KIND_CARDS_ERROR;
            pairRanks.sort((a, b) => a - b);

            for (var i = 1; i < pairRanks.length; i++) {
              if (pairRanks[i] !== pairRanks[i - 1] + 1) {
                return (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
                  error: Error()
                }), GameDefine) : GameDefine).KIND_CARDS_ERROR;
              }
            }

            return (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
              error: Error()
            }), GameDefine) : GameDefine).KIND_CARDS_SHUNZI_2;
          }

          if (cards.length >= 6 && cards.length % 3 === 0) {
            var _map2 = getCardCountMap(cards);

            var triplets = []; // 取出所有三张相同点数的牌

            for (var [_rank2, _list2] of _map2.entries()) {
              if (_rank2 < 3 || _rank2 > 14) return (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
                error: Error()
              }), GameDefine) : GameDefine).KIND_CARDS_ERROR; // 不能包含2和王

              if (_list2.length === 3) {
                triplets.push(_rank2);
              } else {
                return (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
                  error: Error()
                }), GameDefine) : GameDefine).KIND_CARDS_ERROR;
              }
            } // 飞机需要至少 2 组三张牌


            if (triplets.length < 2) return (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
              error: Error()
            }), GameDefine) : GameDefine).KIND_CARDS_ERROR; // 牌的点数需要连续

            triplets.sort((a, b) => a - b);

            for (var _i5 = 1; _i5 < triplets.length; _i5++) {
              if (triplets[_i5] !== triplets[_i5 - 1] + 1) {
                return (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
                  error: Error()
                }), GameDefine) : GameDefine).KIND_CARDS_ERROR; // 非连续
              }
            }

            return (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
              error: Error()
            }), GameDefine) : GameDefine).KIND_CARDS_SHUNZI_3; // ✅ 飞机
          } // ✅ 顺子判断（支持长度 >= 5）


          if (cards.length >= 5) {
            var rankSet = new Set();

            for (var card of cards) {
              var _rank3 = getCardSize(card);

              if (_rank3 < 3 || _rank3 > 14) return (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
                error: Error()
              }), GameDefine) : GameDefine).KIND_CARDS_ERROR; // 不能包含2和王

              rankSet.add(_rank3);
            }

            if (rankSet.size !== cards.length) return (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
              error: Error()
            }), GameDefine) : GameDefine).KIND_CARDS_ERROR; // 有重复点数

            var ranks = Array.from(rankSet).sort((a, b) => a - b);

            for (var _i6 = 1; _i6 < ranks.length; _i6++) {
              if (ranks[_i6] !== ranks[_i6 - 1] + 1) {
                return (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
                  error: Error()
                }), GameDefine) : GameDefine).KIND_CARDS_ERROR; // 非连续
              }
            }

            return (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
              error: Error()
            }), GameDefine) : GameDefine).KIND_CARDS_SHUNZI_1; // ✅ 顺子
          } // ... 判断三带、顺子、连对、炸弹等


          return (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
            error: Error()
          }), GameDefine) : GameDefine).KIND_CARDS_ERROR;
        }

        _GameLogic.getCardType = getCardType;

        function autoSortCards(cards) {
          var result = []; // 固定牌型 + 对子/单张

          var randomPart = []; // 飞机/顺子/连对/三带二

          var used = new Set();

          function addGroup(groups, toResult) {
            if (toResult === void 0) {
              toResult = true;
            }

            for (var g of groups) {
              (toResult ? result : randomPart).push(g);
              g.forEach(c => used.add(c));
            }
          }

          var getRemain = () => cards.filter(c => !used.has(c)); // ✅ 固定牌型优先处理


          addGroup(findWangzha(getRemain())); // 王炸

          addGroup(findZ(getRemain(), 6)); // 六炸

          addGroup(findTonghuashun(getRemain())); // 同花顺

          addGroup(findZ(getRemain(), 5)); // 五炸

          addGroup(findZ(getRemain(), 4)); // 四炸
          // ✅ 随机牌型放最后：顺子、连对、飞机、三带二（随机打乱顺序）

          var feiji = shuffleArray(findFeiji(getRemain()));
          var liandui = shuffleArray(findLiandui(getRemain()));
          var shunzi = shuffleArray(findStraightByCard(getRemain()));
          var sanzhang = shuffleArray(findThreeWithTwo(getRemain()));
          addGroup(feiji, false);
          addGroup(liandui, false);
          addGroup(shunzi, false);
          addGroup(sanzhang, false); // ✅ 剩下的才是对子 + 单张

          addGroup(findPair(getRemain()));
          addGroup(findAllSingles(getRemain())); // ✅ 最终拼接

          return result.concat(randomPart);
        }

        _GameLogic.autoSortCards = autoSortCards;

        function findWangzha(cards) {
          var result = []; // 大王和小王，一般用牌值区分，比如 0x4f 和 0x4e 或者 rank = 15/16 等

          var joker1 = cards.find(c => getCardSize(c) === 15); // 小王

          var joker2 = cards.find(c => getCardSize(c) === 16); // 大王

          if (joker1 !== undefined && joker2 !== undefined) {
            result.push([joker1, joker2]);
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

                  if (group.length >= 5) {
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

        function findThreeWithTwo(cards) {
          var map = getCardCountMap(cards);
          var results = [];
          var used = new Set(); // 获取所有三张的组合（排除2和大小王）

          var triples = [];

          for (var [rank, group] of map.entries()) {
            if (rank < 3 || rank > 14) continue; // 排除 2 和大小王

            if (group.length === 3) {
              triples.push(group);
            }
          } // 每个三张，找任意一个对子或两张单牌（不能重复）


          var _loop = function _loop(triple) {
            var tripleRank = getCardSize(triple[0]);
            var tripleSet = new Set(triple); // 尝试从剩下的牌中找两个点数一样的（对），或两个不同单张

            var others = cards.filter(c => !tripleSet.has(c));
            var pairMap = getCardCountMap(others);
            var pair = []; // 找对子

            for (var list of pairMap.values()) {
              var _rank4 = getCardSize(list[0]);

              if (_rank4 < 3 || _rank4 > 14) continue;

              if (list.length >= 2) {
                pair = list.slice(0, 2);
                break;
              }
            } // 如果找到就组成三带二


            if (pair.length === 2) {
              var _group4 = [...triple, ...pair];

              if (!_group4.some(c => used.has(c))) {
                _group4.forEach(c => used.add(c));

                results.push(_group4);
              }
            }
          };

          for (var triple of triples) {
            _loop(triple);
          }

          return results;
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

          for (var _i7 = 0; _i7 < pairs.length; _i7++) {
            if (temp.length === 0) {
              temp.push(pairs[_i7]);
            } else {
              var last = getCardSize(temp[temp.length - 1][0]);
              var current = getCardSize(pairs[_i7][0]);

              if (current === last + 1 && current < 15) {
                // 连续且不含2或王
                temp.push(pairs[_i7]);
              } else {
                if (temp.length >= 2) {
                  // 合并多个对子为一个“连对”
                  lianDuiList.push(temp.flat());
                }

                temp = [pairs[_i7]];
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

            for (var _i8 = 0; _i8 < unique.length; _i8++) {
              var cur = unique[_i8];
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

        function isStraight(sizes) {
          if (sizes.length < 5) return false;

          for (var i = 1; i < sizes.length; i++) {
            if (sizes[i] !== sizes[i - 1] + 1) return false;
            if (sizes[i] >= 15) return false; // 顺子不能包含 2（15）或王
          }

          return true;
        }

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

            for (var _i9 = 1; _i9 < pairs.length; _i9++) {
              if (pairs[_i9] !== pairs[_i9 - 1] + 1 || pairs[_i9] >= 15) return 0;
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

        function smartSortCards(cards) {
          var result = [];
          var used = new Set();

          var pushAndMark = group => {
            result.push(group);
            group.forEach(card => used.add(card));
          };

          var getUnused = () => cards.filter(c => !used.has(c)); // 0. 同花顺


          var flushStraights = this.findFlushStraight(getUnused());
          flushStraights.forEach(pushAndMark); // 1. 炸弹

          var bombs = this.findBombs(getUnused());
          bombs.forEach(pushAndMark); // 2. 飞机

          var planes = this.findPlane(getUnused());
          planes.forEach(pushAndMark); // 3. 连对

          var chainPairs = this.findChainPairs(getUnused());
          chainPairs.forEach(pushAndMark); // 4. 顺子

          var straights = this.findStraight(getUnused());
          straights.forEach(pushAndMark); // 5. 三带一/二

          var threes = this.findThreeWith(getUnused());
          threes.forEach(pushAndMark); // 6. 对子

          var pairs = this.findPair(getUnused());
          pairs.forEach(pushAndMark); // 7. 单牌

          var singles = getUnused();
          singles.forEach(c => pushAndMark([c]));
          return result.reduce((acc, group) => acc.concat(group), []);
        }

        _GameLogic.smartSortCards = smartSortCards;

        function findFlushStraight(cards) {
          var colorMap = new Map();

          for (var card of cards) {
            var color = Math.floor(card / 16);

            if (!colorMap.has(color)) {
              colorMap.set(color, []);
            }

            colorMap.get(color).push(card);
          }

          var results = [];

          for (var group of colorMap.values()) {
            var map = this.getCardCountMap(group);
            var ranks = Array.from(map.keys()).filter(r => typeof r === 'number' && r >= 3 && r <= 14).sort((a, b) => a - b);
            var temp = [];

            for (var i = 0; i < ranks.length; i++) {
              var rank = ranks[i];
              var _card2 = map.get(rank)[0];

              if (temp.length === 0 || ranks[i - 1] === rank - 1) {
                temp.push(_card2);
              } else {
                if (temp.length >= 5) results.push([...temp]);
                temp = [_card2];
              }
            }

            if (temp.length >= 5) results.push([...temp]);
          }

          return results;
        }

        _GameLogic.findFlushStraight = findFlushStraight;

        function findPlane(cards) {
          var map = this.getCardCountMap(cards);
          var ranks = Array.from(map.keys());
          var filtered = ranks.filter(r => map.get(r).length >= 3).sort((a, b) => a - b);
          var results = [];
          var temp = [];

          for (var i = 0; i < filtered.length; i++) {
            var curr = filtered[i];

            if (temp.length === 0 || i > 0 && filtered[i - 1] === curr - 1) {
              temp.push(map.get(curr).slice(0, 3));
            } else {
              if (temp.length >= 2) {
                results.push(temp.reduce((acc, g) => acc.concat(g), []));
              }

              temp = [map.get(curr).slice(0, 3)];
            }
          }

          if (temp.length >= 2) {
            results.push(temp.reduce((acc, g) => acc.concat(g), []));
          }

          return results;
        }

        _GameLogic.findPlane = findPlane;

        function findChainPairs(cards) {
          var map = this.getCardCountMap(cards); // const ranks = Array.from(map.keys()).filter(r => map.get(r)!.length >= 2).sort((a, b) => a - b);

          var ranks = Array.from(map.keys());
          var filtered = ranks.filter(r => map.get(r).length >= 2).sort((a, b) => a - b);
          var results = [];
          var temp = [];

          for (var i = 0; i < filtered.length; i++) {
            var curr = filtered[i];

            if (temp.length === 0 || filtered[i - 1] === curr - 1) {
              temp.push(map.get(curr).slice(0, 2));
            } else {
              if (temp.length >= 3) {
                results.push(temp.reduce((acc, g) => acc.concat(g), []));
              }

              temp = [map.get(curr).slice(0, 2)];
            }
          }

          if (temp.length >= 3) {
            results.push(temp.reduce((acc, g) => acc.concat(g), []));
          }

          return results;
        }

        _GameLogic.findChainPairs = findChainPairs;

        function findStraight(cards) {
          var map = this.getCardCountMap(cards);
          var ranks = Array.from(map.keys()).filter(r => typeof r === 'number' && r >= 3 && r <= 14).sort((a, b) => a - b);
          var results = [];
          var temp = [];

          for (var i = 0; i < ranks.length; i++) {
            var rank = ranks[i];

            if (temp.length === 0 || ranks[i - 1] === rank - 1) {
              temp.push(map.get(rank)[0]);
            } else {
              if (temp.length >= 5) results.push([...temp]);
              temp = [map.get(rank)[0]];
            }
          }

          if (temp.length >= 5) results.push([...temp]);
          return results;
        }

        _GameLogic.findStraight = findStraight;

        function findThreeWith(cards) {
          var map = this.getCardCountMap(cards);
          var results = [];

          var _loop2 = function _loop2(rank, list) {
            if (list.length === 3) {
              var others = cards.filter(c => c % 16 !== rank);

              if (others.length >= 1) {
                results.push([...list, others[0]]);
              } else if (others.length >= 2) {
                results.push([...list, others[0], others[1]]);
              }
            }
          };

          for (var [rank, list] of map) {
            _loop2(rank, list);
          }

          return results;
        }

        _GameLogic.findThreeWith = findThreeWith;

        function findPair(cards) {
          var map = getCardCountMap(cards);
          var result = [];

          for (var [rank, group] of map.entries()) {
            if (rank < 3 || rank > 14) continue; // 过滤 2、小王、大王（15，16，17）

            if (group.length >= 2) {
              result.push(group.slice(0, 2));
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
      })(GameLogic || _export("GameLogic", GameLogic = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f1d09a0ccaae485b5b27176c231400956d22ed91.js.map