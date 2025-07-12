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
        let userSelf = null;
        let userAll = [];
        let userMap = new Map(); //自己数据

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

          for (let i = 0; i < userAll.length; i++) {
            const element = userAll[i];
            userMap.set(element.id, element);
          }
        }

        _GameLogic.initAllUsers = initAllUsers;

        function getAllUsers() {
          return userAll;
        }

        _GameLogic.getAllUsers = getAllUsers;

        function getUserDataById(id) {
          let user = userMap.get(id);

          if (user) {
            return user;
          }
        }

        _GameLogic.getUserDataById = getUserDataById;

        function getUserViewIdById(id) {
          //测试
          if (false) {
            if (userMap.size == 0) {
              let item1 = new GameMsg.User();
              item1.id = 4;
              item1.index = 1;
              userMap.set(4, item1);
              userSelf = item1;
              let item2 = new GameMsg.User();
              item2.id = 5;
              item2.index = 2;
              userMap.set(5, item2);
              let item3 = new GameMsg.User();
              item3.id = 6;
              item3.index = 3;
              userMap.set(6, item3);
              let item4 = new GameMsg.User();
              item4.id = 7;
              item4.index = 4;
              userMap.set(7, item4);
            }
          }

          let user = userMap.get(id);

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
          let tmpColor = value % 10;
          let tmpSize = Math.floor(value / 10); //牌色转换

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
          let tmpList = [];
          let numList = (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).deepCopy(values);

          for (let i = 0; i < numList.length; i++) {
            tmpList.push(convertCardS2C(numList[i]));
          } // for (let i = 0; i < tmpList.length; i++) {
          //     let dd = tmpList[i].toString(16);
          //     console.log(dd);
          // }


          return tmpList;
        }

        _GameLogic.convertCardListS2C = convertCardListS2C;

        function convertCardC2S(value) {
          let tmpColor = Math.floor(value / 16);
          let tmpSize = value % 16; //牌色转换

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
          let tmpList = [];
          let numList = (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).deepCopy(values);

          for (let i = 0; i < numList.length; i++) {
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
          let list = (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).deepCopy(datas);
          let isWin = false;
          let selfList = [];
          let otherList = [];
          let allList = []; //自己输赢(头游的归属)

          for (let i = 0; i < list.list.length; i++) {
            const element = list.list[i];
            let viewId = GameLogic.getUserViewIdById(element.id);

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
          let listStr = [];
          let tmpStr = [];
          let tmpRes = [];

          for (let i = 0; i < list.length; i++) {
            const element = list[i];
            let str = (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
              error: Error()
            }), utils) : utils).toJson(element);
            listStr.push(str);
          }

          tmpStr = listStr.filter((item, i, arr) => {
            return listStr.indexOf(item) == i;
          });

          for (let j = 0; j < tmpStr.length; j++) {
            let num = (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
              error: Error()
            }), utils) : utils).fromJson(tmpStr[j]);
            tmpRes.push(num);
          }

          return tmpRes;
        }

        _GameLogic.getOnlyValueList = getOnlyValueList;

        function getSoundCardSize(value) {
          let card = value % 16;
          if (card == 1) return 14;else if (card == 14) return 15;else if (card == 15) return 16;
          return card;
        }

        _GameLogic.getSoundCardSize = getSoundCardSize;

        function getCardPoint(value) {
          let card = value % 16;
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
          let card = value % 16;
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
          let cardSize = paramValue % 16;
          let sizeStr = "";

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
          let url = "audio/card/";

          if (type == (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
            error: Error()
          }), GameDefine) : GameDefine).KIND_CARDS_1 || type == (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
            error: Error()
          }), GameDefine) : GameDefine).KIND_CARDS_2) {
            let size = GameLogic.getSoundCardSize(cards[0]);
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

          for (let i = 0; i < count; i++) {
            for (let j = i + 1; j < count; j++) {
              if (getCardSize(cards[i]) < getCardSize(cards[j])) {
                let tempCard = cards[i];
                cards[i] = cards[j];
                cards[j] = tempCard;
              } else if (getCardSize(cards[i]) == getCardSize(cards[j])) {
                if (getCardColor(cards[i]) < getCardColor(cards[j])) {
                  let tempCard = cards[i];
                  cards[i] = cards[j];
                  cards[j] = tempCard;
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

          for (let i = 0; i < count; i++) {
            for (let j = i + 1; j < count; j++) {
              if (getCardSize(cards[i]) > getCardSize(cards[j])) {
                let tempCard = cards[i];
                cards[i] = cards[j];
                cards[j] = tempCard;
              } else if (getCardSize(cards[i]) == getCardSize(cards[j])) {
                if (getCardColor(cards[i]) > getCardColor(cards[j])) {
                  let tempCard = cards[i];
                  cards[i] = cards[j];
                  cards[j] = tempCard;
                }
              }
            }
          }

          return cards;
        }

        _GameLogic.sortCardsBySizeUp = sortCardsBySizeUp;

        function sortCardsByCount(value, count) {
          sortCardsBySizeUp(value, count);
          let resultArr = [];
          let tempArr = [];
          let tempCard = value[0];

          for (let i = 0; i < count; i++) {
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

          for (let i = 0; i < resultArr.length; i++) {
            for (let j = i + 1; j < resultArr.length; j++) {
              if (resultArr[i].length < resultArr[j].length) {
                let temp = resultArr[i];
                resultArr[i] = resultArr[j];
                resultArr[j] = temp;
              } else if (resultArr[i].length == resultArr[j].length) {
                if (getCardSize(resultArr[i][0]) > getCardSize(resultArr[j][0])) {
                  let temp = resultArr[i];
                  resultArr[i] = resultArr[j];
                  resultArr[j] = temp;
                }
              }
            }
          }

          return resultArr;
        }

        _GameLogic.sortCardsByCount = sortCardsByCount;

        function sortCardsByCountDown(value, count) {
          sortCardsBySizeDown(value, count);
          let resultArr = [];
          let tempArr = [];
          let tempCard = value[0];

          for (let i = 0; i < count; i++) {
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

          for (let i = 0; i < resultArr.length; i++) {
            for (let j = i + 1; j < resultArr.length; j++) {
              if (resultArr[i].length < resultArr[j].length) {
                let temp = resultArr[i];
                resultArr[i] = resultArr[j];
                resultArr[j] = temp;
              } else if (resultArr[i].length == resultArr[j].length) {
                if (getCardSize(resultArr[i][0]) < getCardSize(resultArr[j][0])) {
                  let temp = resultArr[i];
                  resultArr[i] = resultArr[j];
                  resultArr[j] = temp;
                }
              }
            }
          }

          return resultArr;
        }

        _GameLogic.sortCardsByCountDown = sortCardsByCountDown;

        function sortCardsByCountUp(value, count) {
          sortCardsBySizeUp(value, count);
          let resultArr = [];
          let tempArr = [];
          let tempCard = value[0];

          for (let i = 0; i < count; i++) {
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

          for (let i = 0; i < resultArr.length; i++) {
            for (let j = i + 1; j < resultArr.length; j++) {
              if (resultArr[i].length > resultArr[j].length) {
                let temp = resultArr[i];
                resultArr[i] = resultArr[j];
                resultArr[j] = temp;
              } else if (resultArr[i].length == resultArr[j].length) {
                if (getCardSize(resultArr[i][0]) > getCardSize(resultArr[j][0])) {
                  let temp = resultArr[i];
                  resultArr[i] = resultArr[j];
                  resultArr[j] = temp;
                }
              }
            }
          }

          return resultArr;
        }

        _GameLogic.sortCardsByCountUp = sortCardsByCountUp;

        function getSortCard(cardList) {
          let count = cardList.length;
          let tempCards = [];

          if (count > 1) {
            //多-少 大-小
            let cards = GameLogic.sortCardsByCountDown(cardList, count);

            for (let i = 0; i < cards.length; i++) {
              for (let j = 0; j < cards[i].length; j++) {
                tempCards.push(cards[i][j]);
              }
            }
          } else {
            tempCards = cardList;
          }

          return tempCards;
        }

        _GameLogic.getSortCard = getSortCard;

        function getRemainCardsByDelete(value, deleteCards, keepOrder = false, select = [], prevSelected = []) {
          let delList = (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).deepCopy(deleteCards);
          let remainCards = [];
          let deleteIdx = []; // if (GlobalData.cardInfo.cardDir) {
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

          let tmpList = [];
          let sameSizeList = GameLogic.getSameCardSizeList(value, keepOrder, select, prevSelected);

          for (let i = 0; i < sameSizeList.length; i++) {
            const list = sameSizeList[i];

            for (let j = list.length - 1; j >= 0; j--) {
              tmpList.push(list[j]);
            }
          }

          for (let i = 0; i < tmpList.length; i++) {
            let find = false;

            for (let j = 0; j < delList.length; j++) {
              if (tmpList[i] == delList[j]) {
                delList.splice(j, 1);
                deleteIdx.push(i);
                find = true;
                break;
              }
            }

            if (!find) {
              remainCards.push(tmpList[i]);
            }
          } // }


          return {
            cards: remainCards,
            idxs: deleteIdx
          };
        }

        _GameLogic.getRemainCardsByDelete = getRemainCardsByDelete;

        function getUniqueCard(value) {
          let listNum = (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).deepCopy(value);
          let tmpList = [];

          for (let i = 0; i < listNum.length; i++) {
            const element = listNum[i];

            if (tmpList.length > 0) {
              let size = getCardSize(element);
              let find = false;

              for (let j = 0; j < tmpList.length; j++) {
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

        function getSameCardSizeList(value, keepOrder = false, select = [], prevSelected) {
          if (!keepOrder) {
            let tmpList = [];
            let sortValue = sortCardsBySizeDown(value, value.length);
            let uniqueList = getUniqueCard(sortValue);
            let idx = 0;

            for (let j = 0; j < uniqueList.length; j++) {
              const d = uniqueList[j];
              let list1 = [];

              for (let i = idx; i < sortValue.length; i++) {
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
          const rankMap = new Map();

          for (let card of cards) {
            const rank = getCardSize(card);
            if (rank < 3 || rank > 14) continue; // 不能包含2和王

            if (!rankMap.has(rank)) rankMap.set(rank, []);
            rankMap.get(rank).push(card);
          }

          const sortedRanks = Array.from(rankMap.keys()).sort((a, b) => a - b);
          const results = [];
          let tempRanks = [];

          for (let i = 0; i <= sortedRanks.length; i++) {
            const cur = sortedRanks[i];
            const last = tempRanks[tempRanks.length - 1];

            if (tempRanks.length === 0 || cur === last + 1) {
              tempRanks.push(cur);
            } else {
              if (tempRanks.length >= 5) {
                // 找到一个顺子
                const straight = [];

                for (let r of tempRanks) {
                  const list = rankMap.get(r);

                  if (list && list.length > 0) {
                    straight.push(list.shift()); // 取出并移除
                  }
                }

                results.push(straight);
                i--; // 回退一步继续找下一个顺子
              }

              tempRanks = cur !== undefined ? [cur] : [];
            }
          } // 收尾处理最后一组


          if (tempRanks.length >= 5) {
            const straight = [];

            for (let r of tempRanks) {
              const list = rankMap.get(r);

              if (list && list.length > 0) {
                straight.push(list.shift());
              }
            }

            results.push(straight);
          }

          return results;
        } // ✅ 连对识别（返回一个 number[][]，可能多个连对组）


        function findLiandui(cards) {
          const map = getCardCountMap(cards);
          const rankToPair = new Map(); // 仅保留对子

          for (const [rank, list] of map.entries()) {
            if (list.length === 2 && rank >= 3 && rank <= 14) {
              rankToPair.set(rank, [...list]);
            }
          }

          const ranks = Array.from(rankToPair.keys()).sort((a, b) => a - b);
          const results = [];
          let temp = [];

          for (let i = 0; i <= ranks.length; i++) {
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
          const map = getCardCountMap(cards);
          const triplets = []; // 取出所有三张相同点数的牌

          for (const [rank, list] of map.entries()) {
            if (rank < 3 || rank > 14) continue; // 排除非法的牌

            if (list.length === 3) {
              triplets.push(rank);
            }
          }

          if (triplets.length < 2) return []; // 飞机至少需要两组三张牌
          // 检查是否连续

          triplets.sort((a, b) => a - b);

          for (let i = 1; i < triplets.length; i++) {
            if (triplets[i] !== triplets[i - 1] + 1) {
              return []; // 非连续，不是合法飞机
            }
          } // 组装飞机


          const result = [];

          for (let rank of triplets) {
            result.push([rank, rank, rank]);
          }

          return result;
        }

        function clearSelectedHistory() {
          selectedHistory = [];
        }

        _GameLogic.clearSelectedHistory = clearSelectedHistory;
        let selectedHistory = [];

        function moveSelectedCardsToBack(cards, selected, prevSelected, prevGrouped) {
          // const result: number[][] = [];
          // const moveToBack: number[][] = [];
          // const selectedSet = new Set(selected);
          // const prevSet = new Set(prevSelected);
          // const usedCards = new Set<number>();
          // // ✅ 步骤1：保留旧分组中未重新选中的牌（保持顺序）
          // for (const group of prevGrouped) {
          //     if (!group.some(c => selectedSet.has(c))) {
          //         result.push(group);
          //         group.forEach(c => usedCards.add(c));
          //     }
          // }
          // // ✅ 步骤2：识别这次新选中的三带二组合（只识别当前选中的）
          // let triple: number[] = [];
          // let pair: number[] = [];
          // const map = getCardCountMap(selected);
          // for (const list of map.values()) {
          //     if (list.length === 3) triple = list;
          //     else if (list.length === 2) pair = list;
          // }
          // if (triple.length === 3 && pair.length === 2) {
          //     const group = [...triple, ...pair];
          //     moveToBack.push(group);
          //     group.forEach(c => usedCards.add(c));
          // }
          // // ✅ 步骤3：识别飞机
          // const triplets = findFeiji(selected.filter(c => !usedCards.has(c)));
          // for (let group of triplets) {
          //     moveToBack.push(group);
          //     group.forEach(c => usedCards.add(c));
          // }
          // const straights = findStraightByCard(selected.filter(c => !usedCards.has(c)));
          // for (let s of straights) {
          //     moveToBack.push(s);
          //     s.forEach(c => usedCards.add(c));
          // }
          // // ✅ 连对识别
          // const lianduiGroups = findLiandui(selected.filter(c => !usedCards.has(c)));
          // for (let group of lianduiGroups) {
          //     moveToBack.push(group);
          //     group.forEach(c => usedCards.add(c));
          // }
          // // ✅ 步骤3：将剩余未处理的牌按点数分组
          // const remaining = cards.filter(card => !usedCards.has(card));
          // const sortValue = sortCardsBySizeDown(remaining, remaining.length);
          // const uniqueList = getUniqueCard(sortValue);
          // let idx = 0;
          // for (let j = 0; j < uniqueList.length; j++) {
          //     const d = uniqueList[j];
          //     const rank = getCardSize(d);
          //     let list1: number[] = [];
          //     for (let i = idx; i < sortValue.length; i++) {
          //         const card = sortValue[i];
          //         if (usedCards.has(card)) continue;
          //         if (getCardSize(card) === rank) {
          //             list1.push(card);
          //             if (i === sortValue.length - 1) {
          //                 if (list1.length > 0) {
          //                     if (list1.some(c => selectedSet.has(c))) {
          //                         moveToBack.push(list1);
          //                     } else {
          //                         result.push(list1);
          //                     }
          //                     list1.forEach(c => usedCards.add(c));
          //                 }
          //             }
          //         } else {
          //             idx = i;
          //             if (list1.length > 0) {
          //                 if (list1.some(c => selectedSet.has(c))) {
          //                     moveToBack.push(list1);
          //                 } else {
          //                     result.push(list1);
          //                 }
          //                 list1.forEach(c => usedCards.add(c));
          //             }
          //             break;
          //         }
          //     }
          // }
          // return result.concat(moveToBack);
          const result = [];
          const moveToBack = [];
          const selectedSet = new Set(selected);
          const usedCards = new Set();
          const regroupSet = new Set(); // ✅ 步骤0：撤回处理（如果选中的牌在某组中，整个组被移出理牌）

          const preservedGroups = [];

          for (const group of prevGrouped) {
            const overlap = group.some(c => selectedSet.has(c));

            if (overlap) {
              group.forEach(c => regroupSet.add(c));
            } else {
              preservedGroups.push(group);
              group.forEach(c => usedCards.add(c));
            }
          } // ✅ 参与后续重组的牌（包括被撤回的和没被理过的）


          const regroupCards = cards.filter(c => regroupSet.has(c) || !prevGrouped.flat().includes(c)); // ✅ 步骤1：识别三带二

          let triple = [];
          let pair = [];
          const map = getCardCountMap(selected);

          for (const list of map.values()) {
            if (list.length === 3 && triple.length === 0) triple = list;else if (list.length === 2 && pair.length === 0) pair = list;
          }

          if (triple.length === 3 && pair.length === 2) {
            const group = [...triple, ...pair];
            moveToBack.push(group);
            group.forEach(c => usedCards.add(c));
          } // ✅ 步骤2：识别飞机、顺子、连对


          const rest = selected.filter(c => !usedCards.has(c));
          const feiji = findFeiji(rest);
          const shunzi = findStraightByCard(rest.filter(c => !feiji.flat().includes(c)));
          const liandui = findLiandui(rest.filter(c => !feiji.flat().includes(c) && !shunzi.flat().includes(c)));

          for (let g of feiji) {
            moveToBack.push(g);
            g.forEach(c => usedCards.add(c));
          }

          for (let g of shunzi) {
            moveToBack.push(g);
            g.forEach(c => usedCards.add(c));
          }

          for (let g of liandui) {
            moveToBack.push(g);
            g.forEach(c => usedCards.add(c));
          } // ✅ 步骤3：剩余牌重新分组


          const remaining = regroupCards.filter(c => !usedCards.has(c));
          const sortValue = sortCardsBySizeDown(remaining, remaining.length);
          const uniqueList = getUniqueCard(sortValue);
          let idx = 0;

          for (let j = 0; j < uniqueList.length; j++) {
            const d = uniqueList[j];
            const rank = getCardSize(d);
            let list1 = [];

            for (let i = idx; i < sortValue.length; i++) {
              const card = sortValue[i];
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

          return preservedGroups.concat(result).concat(moveToBack);
        }

        _GameLogic.moveSelectedCardsToBack = moveSelectedCardsToBack;

        function getCardGroupsByOrder(cards) {
          const groupList = [];
          let temp = [];

          for (let i = 0; i < cards.length; i++) {
            const cur = cards[i];

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
            const map = getCardCountMap(cards);
            let hasTriple = false;
            let hasPair = false;

            for (const list of map.values()) {
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
            const map = getCardCountMap(cards);
            const pairRanks = [];

            for (const [rank, list] of map.entries()) {
              if (rank < 3 || rank > 14) return (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
                error: Error()
              }), GameDefine) : GameDefine).KIND_CARDS_ERROR;

              if (list.length === 2) {
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

            for (let i = 1; i < pairRanks.length; i++) {
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
            const map = getCardCountMap(cards);
            const triplets = []; // 取出所有三张相同点数的牌

            for (const [rank, list] of map.entries()) {
              if (rank < 3 || rank > 14) return (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
                error: Error()
              }), GameDefine) : GameDefine).KIND_CARDS_ERROR; // 不能包含2和王

              if (list.length === 3) {
                triplets.push(rank);
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

            for (let i = 1; i < triplets.length; i++) {
              if (triplets[i] !== triplets[i - 1] + 1) {
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
            const rankSet = new Set();

            for (let card of cards) {
              const rank = getCardSize(card);
              if (rank < 3 || rank > 14) return (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
                error: Error()
              }), GameDefine) : GameDefine).KIND_CARDS_ERROR; // 不能包含2和王

              rankSet.add(rank);
            }

            if (rankSet.size !== cards.length) return (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
              error: Error()
            }), GameDefine) : GameDefine).KIND_CARDS_ERROR; // 有重复点数

            const ranks = Array.from(rankSet).sort((a, b) => a - b);

            for (let i = 1; i < ranks.length; i++) {
              if (ranks[i] !== ranks[i - 1] + 1) {
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

        function getOneCardSizeList(value) {
          const tmpList = [];
          const sortValue = sortCardsBySizeDown(value, value.length);
          const uniqueList = getUniqueCard(sortValue);
          let idx = 0;

          for (let j = 0; j < uniqueList.length; j++) {
            const d = uniqueList[j];
            const list1 = [];

            for (let i = idx; i < sortValue.length; i++) {
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


          const pairs = tmpList.filter(g => g.length === 2);
          const otherGroups = tmpList.filter(g => g.length !== 2);
          const pairPoints = pairs.map(g => getCardSize(g[0])).sort((a, b) => a - b); // ✅ 找到所有连对片段

          const lianDuiList = [];
          let temp = [];

          for (let i = 0; i < pairs.length; i++) {
            if (temp.length === 0) {
              temp.push(pairs[i]);
            } else {
              const last = getCardSize(temp[temp.length - 1][0]);
              const current = getCardSize(pairs[i][0]);

              if (current === last + 1 && current < 15) {
                // 连续且不含2或王
                temp.push(pairs[i]);
              } else {
                if (temp.length >= 2) {
                  // 合并多个对子为一个“连对”
                  lianDuiList.push(temp.flat());
                }

                temp = [pairs[i]];
              }
            }
          }

          if (temp.length >= 2) {
            lianDuiList.push(temp.flat());
          } // ❗ 去掉被合并成连对的对子


          const usedPairs = new Set(lianDuiList.flat());
          const remainingPairs = pairs.filter(pair => !usedPairs.has(pair[0])); // 合并对子和其他剩余牌

          const remainCards = [...remainingPairs.flat(), ...otherGroups.flat()]; // 升序排序用于识别顺子

          const sortedRemain = sortCardsBySizeUp(remainCards, remainCards.length); // 找顺子（必须点数连续、点数不能 ≥ 15）

          const findStraightGroups = cards => {
            const result = [];
            const unique = getUniqueCard(cards).filter(c => {
              const s = getCardSize(c);
              return s >= 3 && s <= 14;
            });
            let temp = [];

            for (let i = 0; i < unique.length; i++) {
              const cur = unique[i];
              const curSize = getCardSize(cur);

              if (temp.length === 0) {
                temp.push(cur);
              } else {
                const prevSize = getCardSize(temp[temp.length - 1]);

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

          const straightList = findStraightGroups(sortedRemain); // 剔除被用作顺子的牌

          const usedStraight = new Set(straightList.flat());
          const remainAfterStraight = sortedRemain.filter(c => !usedStraight.has(c));
          const remainSingleList = remainAfterStraight.map(c => [c]);
          const tmpAll = [...straightList, // 顺子
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

          for (let i = 1; i < sizes.length; i++) {
            if (sizes[i] !== sizes[i - 1] + 1) return false;
            if (sizes[i] >= 15) return false; // 顺子不能包含 2（15）或王
          }

          return true;
        }

        function getGroupPower(cards) {
          const size = cards.length; // 四王炸

          const sizes = cards.map(getCardSize).sort((a, b) => a - b);
          const kingCount = sizes.filter(s => s === 14 || s === 15).length;
          if (size === 4 && kingCount === 4) return 100;
          if (size >= 6 && isAllSameSize(cards)) return 90;
          if (size === 5 && isAllSameSize(cards)) return 80;
          if (size === 4 && isAllSameSize(cards)) return 60;

          if (size >= 5 && isStraight(sizes)) {
            return isSameSuitStraight(cards) ? 70 : 40; // 顺子
          } // 连对判断：偶数张，都是对子，点数连续


          if (size >= 4 && size % 2 === 0) {
            const pairs = [];

            for (let i = 0; i < size; i += 2) {
              if (getCardSize(cards[i]) !== getCardSize(cards[i + 1])) return 0;
              pairs.push(getCardSize(cards[i]));
            }

            for (let i = 1; i < pairs.length; i++) {
              if (pairs[i] !== pairs[i - 1] + 1 || pairs[i] >= 15) return 0;
            }

            return 45; // 连对优先级
          }

          if (size === 3) return 30;
          if (size === 2) return 20;
          if (size === 1) return 10;
          return 0;
        }

        function isAllSameSize(cards) {
          const size = getCardSize(cards[0]);
          return cards.every(c => getCardSize(c) === size);
        }

        function getGroupRank(cards) {
          const size = cards.length; // 四王（两个大王两个小王）

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
          const sizes = cards.map(getCardSize);
          const colors = cards.map(getCardColor);
          const kingCount = sizes.filter(s => s === 14 || s === 15).length;
          return kingCount === 4;
        } // 判断是否同花顺（5张及以上、顺子且同花）


        function isSameSuitStraight(cards) {
          if (cards.length < 5) return false;
          const sizes = cards.map(getCardSize).sort((a, b) => a - b);
          const color = getCardColor(cards[0]);

          for (let i = 1; i < cards.length; i++) {
            if (getCardColor(cards[i]) !== color) return false;
            if (sizes[i] !== sizes[i - 1] + 1) return false;
          }

          return true;
        }

        _GameLogic.isSameSuitStraight = isSameSuitStraight;

        function getCardCountMap(cards) {
          const map = new Map();

          for (const card of cards) {
            const rank = card % 16;

            if (!map.has(rank)) {
              map.set(rank, []);
            }

            map.get(rank).push(card);
          }

          return map;
        }

        _GameLogic.getCardCountMap = getCardCountMap;

        function findBombs(cards) {
          const map = this.getCardCountMap(cards);
          const results = []; // 双王炸

          const jokers = cards.filter(c => c % 16 >= 15);

          if (jokers.length === 2) {
            results.push(jokers);
          } // 4张炸 + 6炸


          for (const [rank, group] of map.entries()) {
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
          const size = getCardSize(cards[0]);
          return cards.every(card => getCardSize(card) === size);
        }

        _GameLogic.isNBomb = isNBomb;

        function smartSortCards(cards) {
          const result = [];
          const used = new Set();

          const pushAndMark = group => {
            result.push(group);
            group.forEach(card => used.add(card));
          };

          const getUnused = () => cards.filter(c => !used.has(c)); // 0. 同花顺


          const flushStraights = this.findFlushStraight(getUnused());
          flushStraights.forEach(pushAndMark); // 1. 炸弹

          const bombs = this.findBombs(getUnused());
          bombs.forEach(pushAndMark); // 2. 飞机

          const planes = this.findPlane(getUnused());
          planes.forEach(pushAndMark); // 3. 连对

          const chainPairs = this.findChainPairs(getUnused());
          chainPairs.forEach(pushAndMark); // 4. 顺子

          const straights = this.findStraight(getUnused());
          straights.forEach(pushAndMark); // 5. 三带一/二

          const threes = this.findThreeWith(getUnused());
          threes.forEach(pushAndMark); // 6. 对子

          const pairs = this.findPair(getUnused());
          pairs.forEach(pushAndMark); // 7. 单牌

          const singles = getUnused();
          singles.forEach(c => pushAndMark([c]));
          return result.reduce((acc, group) => acc.concat(group), []);
        }

        _GameLogic.smartSortCards = smartSortCards;

        function findFlushStraight(cards) {
          const colorMap = new Map();

          for (const card of cards) {
            const color = Math.floor(card / 16);

            if (!colorMap.has(color)) {
              colorMap.set(color, []);
            }

            colorMap.get(color).push(card);
          }

          const results = [];

          for (const group of colorMap.values()) {
            const map = this.getCardCountMap(group);
            const ranks = Array.from(map.keys()).filter(r => typeof r === 'number' && r >= 3 && r <= 14).sort((a, b) => a - b);
            let temp = [];

            for (let i = 0; i < ranks.length; i++) {
              const rank = ranks[i];
              const card = map.get(rank)[0];

              if (temp.length === 0 || ranks[i - 1] === rank - 1) {
                temp.push(card);
              } else {
                if (temp.length >= 5) results.push([...temp]);
                temp = [card];
              }
            }

            if (temp.length >= 5) results.push([...temp]);
          }

          return results;
        }

        _GameLogic.findFlushStraight = findFlushStraight;

        function findPlane(cards) {
          const map = this.getCardCountMap(cards);
          const ranks = Array.from(map.keys());
          const filtered = ranks.filter(r => map.get(r).length >= 3).sort((a, b) => a - b);
          const results = [];
          let temp = [];

          for (let i = 0; i < filtered.length; i++) {
            const curr = filtered[i];

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
          const map = this.getCardCountMap(cards); // const ranks = Array.from(map.keys()).filter(r => map.get(r)!.length >= 2).sort((a, b) => a - b);

          const ranks = Array.from(map.keys());
          const filtered = ranks.filter(r => map.get(r).length >= 2).sort((a, b) => a - b);
          const results = [];
          let temp = [];

          for (let i = 0; i < filtered.length; i++) {
            const curr = filtered[i];

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
          const map = this.getCardCountMap(cards);
          const ranks = Array.from(map.keys()).filter(r => typeof r === 'number' && r >= 3 && r <= 14).sort((a, b) => a - b);
          const results = [];
          let temp = [];

          for (let i = 0; i < ranks.length; i++) {
            const rank = ranks[i];

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
          const map = this.getCardCountMap(cards);
          const results = [];

          for (const [rank, list] of map) {
            if (list.length === 3) {
              const others = cards.filter(c => c % 16 !== rank);

              if (others.length >= 1) {
                results.push([...list, others[0]]);
              } else if (others.length >= 2) {
                results.push([...list, others[0], others[1]]);
              }
            }
          }

          return results;
        }

        _GameLogic.findThreeWith = findThreeWith;

        function findPair(cards) {
          const map = this.getCardCountMap(cards);
          const results = [];

          for (const list of map.values()) {
            if (list.length >= 2) {
              results.push(list.slice(0, 2));
            }
          }

          return results;
        }

        _GameLogic.findPair = findPair;
      })(GameLogic || _export("GameLogic", GameLogic = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=26fe97cc7b9e3033b11cb60e265bad952cae8270.js.map