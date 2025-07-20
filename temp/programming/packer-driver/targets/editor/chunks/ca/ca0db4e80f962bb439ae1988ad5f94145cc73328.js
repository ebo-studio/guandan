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
          let deleteIdx = [];
          let tmpList = [];
          let sameSizeList = GameLogic.getSameCardSizeList(value, keepOrder);

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

        function groupByRankAsc(cards) {
          const sorted = sortCardsBySizeUp(cards, cards.length); // ⬅️ 升序排序

          const groups = [];
          let currentGroup = [];

          for (let i = 0; i < sorted.length; i++) {
            const card = sorted[i];

            if (currentGroup.length === 0 || getCardSize(card) === getCardSize(currentGroup[0])) {
              currentGroup.push(card);
            } else {
              groups.push(currentGroup);
              currentGroup = [card];
            }
          }

          if (currentGroup.length > 0) {
            groups.push(currentGroup);
          }

          return groups;
        }

        _GameLogic.groupByRankAsc = groupByRankAsc;

        function getSameCardSizeList(value, keepOrder = false) {
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
          }
        }

        _GameLogic.getSameCardSizeList = getSameCardSizeList;

        function findStraightWithHongtao2_Safe(cards) {
          const getCardRank = card => card % 16;

          const getCardColor = card => Math.floor(card / 16);

          const HONGTAO = 1;
          const results = [];
          const legalRanks = [1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
          const seqList = [];

          for (let i = 0; i <= legalRanks.length - 5; i++) {
            for (let len = 5; len <= legalRanks.length - i; len++) {
              seqList.push(legalRanks.slice(i, i + len));
            }
          }

          seqList.push([10, 11, 12, 13, 1]); // AKQJ10

          for (const seq of seqList) {
            const usedIndex = new Set();
            const group = [];
            let valid = true;

            for (const r of seq) {
              let found = false;

              for (let i = 0; i < cards.length; i++) {
                if (usedIndex.has(i)) continue;
                const card = cards[i];
                const rank = getCardRank(card);
                const color = getCardColor(card);

                if (r === 2) {
                  if (rank === 2 && color === HONGTAO) {
                    group.push(card);
                    usedIndex.add(i);
                    found = true;
                    break;
                  }
                } else {
                  if (rank === r) {
                    group.push(card);
                    usedIndex.add(i);
                    found = true;
                    break;
                  }
                }
              }

              if (!found) {
                valid = false;
                break;
              }
            }

            if (valid) {
              return [group]; // ✅ 找到合法顺子（不会污染 cards）
            }
          }

          return [];
        }

        function findStraightByCard(cards) {
          const getCardRank = card => card % 16;

          const getCardColor = card => Math.floor(card / 16);

          const HONGTAO = 1;
          const results = [];
          const usedIndexes = new Set(); // 构建 rank => [index[]]

          const rankToIndexes = new Map();

          for (let i = 0; i < cards.length; i++) {
            const r = getCardRank(cards[i]);
            if (!rankToIndexes.has(r)) rankToIndexes.set(r, []);
            rankToIndexes.get(r).push(i);
          } // 合法顺子点数（不含2），加上特殊 AKQJ10


          const legalRanks = [1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
          const seqList = [];

          for (let i = 0; i <= legalRanks.length - 5; i++) {
            for (let len = 5; len <= legalRanks.length - i; len++) {
              seqList.push(legalRanks.slice(i, i + len));
            }
          }

          seqList.push([10, 11, 12, 13, 1]);

          for (const seq of seqList) {
            const group = [];
            const usedThisGroup = new Set();
            let valid = true;

            for (const r of seq) {
              if (r === 2) {
                const idx = cards.findIndex((c, i) => getCardRank(c) === 2 && getCardColor(c) === HONGTAO && !usedIndexes.has(i) && !usedThisGroup.has(i));

                if (idx === -1) {
                  valid = false;
                  break;
                }

                group.push(cards[idx]);
                usedThisGroup.add(idx);
              } else {
                const idxList = rankToIndexes.get(r) || [];
                const available = idxList.find(i => !usedIndexes.has(i) && !usedThisGroup.has(i));

                if (available === undefined) {
                  valid = false;
                  break;
                }

                group.push(cards[available]);
                usedThisGroup.add(available);
              }
            }

            if (valid) {
              results.push(group);
              usedThisGroup.forEach(i => usedIndexes.add(i));
              break; // 只找一组
            }
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
          const rankToTripletCards = new Map(); // 收集所有点数 >=3 且有 3 张以上的牌（不能包含 2、王）

          for (const [rank, list] of map.entries()) {
            if (rank < 3 || rank > 14) continue;

            if (list.length >= 3) {
              rankToTripletCards.set(rank, list.slice(0, 3)); // 只取3张参与飞机
            }
          }

          if (rankToTripletCards.size < 2) return [];
          const sortedRanks = Array.from(rankToTripletCards.keys()).sort((a, b) => a - b); // 寻找连续的rank组

          for (let i = 0; i < sortedRanks.length - 1; i++) {
            let group = [rankToTripletCards.get(sortedRanks[i])];

            for (let j = i + 1; j < sortedRanks.length; j++) {
              const prev = sortedRanks[j - 1];
              const curr = sortedRanks[j];

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
          // 1. 统计要移除的张数（因为两副牌，值可重复）
          const need = new Map();

          for (const c of outCards) {
            need.set(c, (need.get(c) || 0) + 1);
          }

          const newGrouped = []; // 2. 按组扫描，仅移除需要减掉的张数

          for (const group of grouped) {
            const rest = [];

            for (const c of group) {
              const left = need.get(c) || 0;

              if (left > 0) {
                // 消耗 1 张
                need.set(c, left - 1);
              } else {
                rest.push(c);
              }
            }

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
          const firstCardColor = straight[0] % 4;
          const isSameColor = straight.every(card => card % 4 === firstCardColor); // 检查是否为逢人配：即选中的牌是连续的，且任意花色

          const sortedStraight = straight.sort((a, b) => a - b);
          const isFengRenPei = isFengRenPeiSorted(sortedStraight);
          return isSameColor || isFengRenPei;
        }

        function isFengRenPeiSorted(sortedCards) {
          // 判断是否是连续的顺子
          for (let i = 1; i < sortedCards.length; i++) {
            if (sortedCards[i] !== sortedCards[i - 1] + 1) {
              return false;
            }
          }

          return true;
        }

        function manualSortCards(selected, prevSelected, prevGrouped, allCards) {
          const result = [];
          const moveToBack = [];
          const selectedSet = new Set(selected);
          const usedSet = new Set(); // ✅ 保留旧分组中未重新选中的牌（保持顺序）

          for (const group of prevGrouped) {
            if (!group.some(c => selectedSet.has(c))) {
              result.push(group);
              group.forEach(c => usedSet.add(c));
            }
          }

          const remaining = selected.filter(c => !usedSet.has(c)); // ✅ 识别王炸

          const kings = remaining.filter(c => c % 16 >= 16);

          if (kings.length >= 4) {
            const group = kings.slice(0, 4);
            result.unshift(group);
            group.forEach(c => usedSet.add(c));
          } // ✅ 识别普通炸弹（包含红心级牌）


          const countMap = new Map();
          const heartCards = remaining.filter(c => Math.floor(c / 16) === 1 && c % 16 === 2); // 红桃2

          const usedHeart = new Set();

          for (const c of remaining) {
            if (usedSet.has(c)) continue;
            const rank = c % 16;
            if (!countMap.has(rank)) countMap.set(rank, []);
            countMap.get(rank).push(c);
          }

          for (const [rank, list] of countMap.entries()) {
            if (list.length >= 6) {
              result.unshift(list);
              list.forEach(c => usedSet.add(c));
            } else if (list.length >= 3) {
              const need = 6 - list.length;
              const extra = heartCards.filter(c => !usedHeart.has(c)).slice(0, need);

              if (extra.length > 0) {
                const group = [...list, ...extra];
                result.unshift(group);
                group.forEach(c => usedSet.add(c));
                extra.forEach(c => usedHeart.add(c));
              }
            }
          } // ✅ 识别飞机（三顺）


          const tripleGroups = [];
          const triplets = Array.from(countMap.values()).filter(g => g.length === 3 && !g.some(c => usedSet.has(c)));
          const sortedTriplets = triplets.sort((a, b) => a[0] % 16 - b[0] % 16);

          for (let i = 0; i < sortedTriplets.length - 1; i++) {
            const r1 = sortedTriplets[i][0] % 16;
            const r2 = sortedTriplets[i + 1][0] % 16;

            if (r2 - r1 === 1) {
              const group = [...sortedTriplets[i], ...sortedTriplets[i + 1]];
              tripleGroups.push(group);
              group.forEach(c => usedSet.add(c));
              i++; // skip next
            }
          }

          moveToBack.push(...tripleGroups); // ✅ 识别三带二（只取一组）

          const unused = selected.filter(c => !usedSet.has(c));
          const rankMap = new Map();

          for (const c of unused) {
            const r = c % 16;
            if (!rankMap.has(r)) rankMap.set(r, []);
            rankMap.get(r).push(c);
          }

          let foundTriple = [],
              foundPair = [];

          for (const [rank, list] of rankMap.entries()) {
            if (list.length === 3) foundTriple = list;
            if (list.length === 2) foundPair = list;
          }

          if (foundTriple.length === 3 && foundPair.length === 2) {
            const group = [...foundTriple, ...foundPair];
            moveToBack.push(group);
            group.forEach(c => usedSet.add(c));
          } // ✅ 识别顺子（仅顺子，5张，不含2/王）


          const getCardSize = c => c % 16;

          const valid = unused.filter(c => {
            const r = getCardSize(c);
            return r >= 3 && r <= 14;
          });
          const sorted = valid.sort((a, b) => getCardSize(a) - getCardSize(b));
          const used = new Set();
          let straight = [];

          for (let i = 0; i < sorted.length; i++) {
            const curr = sorted[i];
            if (used.has(curr)) continue;
            const prev = straight.length ? getCardSize(straight[straight.length - 1]) : null;

            if (straight.length === 0 || getCardSize(curr) === prev + 1) {
              straight.push(curr);
              used.add(curr);

              if (straight.length === 5) {
                moveToBack.push([...straight]);
                straight.forEach(c => usedSet.add(c));
                straight = [];
              }
            } else {
              straight = [curr];
              used.clear();
              used.add(curr);
            }
          } // ✅ 识别连对（3个连续对子）


          const pairs = Array.from(rankMap.values()).filter(g => g.length >= 2 && !g.some(c => usedSet.has(c)));
          const pairGroups = [];
          const sortedPairs = pairs.sort((a, b) => a[0] % 16 - b[0] % 16);

          for (let i = 0; i <= sortedPairs.length - 3; i++) {
            const r1 = sortedPairs[i][0] % 16;
            const r2 = sortedPairs[i + 1][0] % 16;
            const r3 = sortedPairs[i + 2][0] % 16;

            if (r2 === r1 + 1 && r3 === r2 + 1) {
              const group = [...sortedPairs[i].slice(0, 2), ...sortedPairs[i + 1].slice(0, 2), ...sortedPairs[i + 2].slice(0, 2)];
              pairGroups.push(group);
              group.forEach(c => usedSet.add(c));
              i += 2;
            }
          }

          moveToBack.push(...pairGroups); // ✅ 剩余牌按点数分组

          const rest = allCards.filter(c => !usedSet.has(c));
          const restMap = new Map();

          for (const c of rest) {
            const r = c % 16;
            if (!restMap.has(r)) restMap.set(r, []);
            restMap.get(r).push(c);
          }

          for (const group of restMap.values()) {
            if (group.some(c => selectedSet.has(c))) {
              moveToBack.push(group);
            } else {
              result.push(group);
            }
          }

          return [...result, ...moveToBack];
        }

        _GameLogic.manualSortCards = manualSortCards;

        function groupByRankPreserveDuplicates(cards) {
          const result = [];
          const sortValue = sortCardsBySizeDown(cards, cards.length);
          let idx = 0;

          while (idx < sortValue.length) {
            const group = [sortValue[idx]];
            const currentRank = getCardSize(sortValue[idx]);

            for (let i = idx + 1; i < sortValue.length; i++) {
              if (getCardSize(sortValue[i]) === currentRank) {
                group.push(sortValue[i]);
              } else {
                break;
              }
            }

            result.push(group);
            idx += group.length;
          }

          return result;
        }

        let selectedHistory = [];

        function moveSelectedCardsToBack(cards, selected, prevSelected, prevGrouped) {
          const result = [];
          const moveToBack = [];
          const selectedSet = new Set(selected);
          const prevSet = new Set(prevSelected);
          const usedCards = new Set(); // ✅ 步骤1：保留旧分组中未重新选中的牌（保持顺序）

          for (const group of prevGrouped) {
            if (!group.some(c => selectedSet.has(c))) {
              result.push(group);
              group.forEach(c => usedCards.add(c));
            }
          }

          const bomsKing = findRocket(selected);

          if (bomsKing.length != 0) {
            for (const rocket of bomsKing) {
              result.unshift(rocket); // 放最前面

              rocket.forEach(c => usedCards.add(c)); // 标记为已用
            }
          }

          let triple = [];
          let pair = [];
          const map = getTripleWithPairPreferBig(selected);

          if (map.length == 5) {
            moveToBack.push(map);
            map.forEach(c => usedCards.add(c));
          } // for (const list of map.values()) {
          //     if (list.length === 3) triple = list;
          //     else if (list.length === 2) pair = list;
          // }
          // if (triple.length === 3 && pair.length === 2) {
          //     const group = [...triple, ...pair];
          //     moveToBack.push(group);
          //     group.forEach(c => usedCards.add(c));
          // }
          // ✅ 步骤2：识别炸弹（六炸、五炸、四炸等）包括红心级牌


          const bombs = findBombsWithHeartCard(selected.filter(c => !usedCards.has(c)));

          for (let bomb of bombs) {
            result.unshift(bomb); // 将炸弹放在最左边

            bomb.forEach(c => usedCards.add(c)); // 标记炸弹牌已使用
          } // ✅ 步骤3：识别飞机


          const triplets = findFeiji(selected.filter(c => !usedCards.has(c)));

          for (let group of triplets) {
            moveToBack.push(group);
            group.forEach(c => usedCards.add(c));
          } // ✅ 步骤4：识别三带二
          // ✅ 步骤5：识别顺子


          const straights = findStraightByCard(selected.filter(c => !usedCards.has(c)));

          for (let s of straights) {
            // 检查是否是同花顺或逢人配
            const isSameColorStraight = checkIfSameColorOrFengRenPei(s);

            if (isSameColorStraight) {
              result.unshift(s); // 将同花顺或逢人配放在最左边
            } else {
              moveToBack.push(s);
            }

            s.forEach(c => usedCards.add(c));
          } // ✅ 步骤6：连对识别


          const lianduiGroups = findLiandui(selected.filter(c => !usedCards.has(c)));

          for (let group of lianduiGroups) {
            moveToBack.push(group);
            group.forEach(c => usedCards.add(c));
          } // ✅ 步骤7：识别两对


          const unusedCards = selected.filter(c => !usedCards.has(c));
          const countMap = getCardCountMap_I(unusedCards);
          const pairList = [];

          for (const [rank, list] of countMap.entries()) {
            if (list.length === 2) {
              moveToBack.push(list);
              list.forEach(c => usedCards.add(c));
            } else if (list.length === 3) {
              moveToBack.push(list);
              list.forEach(c => usedCards.add(c));
            }
          } // ✅ 步骤8：将剩余未处理的牌按点数分组


          const remaining = cards.filter(card => !usedCards.has(card));
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
          } // 最后返回结果，炸弹已经在最前面


          return [...result, ...moveToBack];
        }

        _GameLogic.moveSelectedCardsToBack = moveSelectedCardsToBack;

        function findBombsWithHeartCard(cards) {
          const countMap = getCardCountMap(cards);
          const bombs = [];
          const heartCards = cards.filter(card => isHeartCard(card)); // 标记已使用的红心级牌

          const usedHeartCards = new Set();

          for (const [rank, list] of countMap) {
            const len = list.length; // 将当前 list 拆成非红心牌 和 红心牌

            const normalCards = list.filter(c => !isHeartCard(c));
            const normalCardslen = normalCards.length; // 非红心牌小于3张，无资格构成红心炸弹

            if (normalCardslen < 3) continue; // 判断非红心牌是否点数一致（%16）

            const baseRank = normalCards[0] % 16;
            if (!normalCards.every(c => c % 16 === baseRank)) continue; // 获取还可用的红心牌

            const availableHearts = heartCards.filter(c => !usedHeartCards.has(c)); // 🔄 不直接 return，尝试合并炸弹扩展

            if (availableHearts.length > 0 && len >= 3 && len <= 5) {
              const need = 6 - len;
              const canUse = Math.min(availableHearts.length, need);
              const used = availableHearts.slice(0, canUse);
              used.forEach(c => usedHeartCards.add(c));
              const group = [...list, ...used];
              bombs.push(group);
              continue;
            } // 原逻辑：六张及以上直接炸弹


            if (len >= 6) {
              bombs.push([...list]);
            }
          }

          return bombs;
        } // 用来识别红心级牌，假设红心牌的规则是通过 card % 16 获取花色


        function isHeartCard(card) {
          const color = Math.floor(card / 16);
          const rank = card % 16;
          return rank === (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).cardInfo.levelCard; // 例如，这里假设 `levelCard` 为红心2或其它特殊牌
        }

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

        function getCardTypeByFeiji(cards) {
          if (cards.length == 6 && cards.length % 3 === 0) {
            const map = getCardCountMap(cards);
            const triplets = []; // 取出所有三张相同点数的牌

            for (const [rank, list] of map.entries()) {
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
          const map = getCardCountMap(cards);
          const pairRanks = [];

          for (const [rank, list] of map.entries()) {
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

          for (let i = 1; i < pairRanks.length; i++) {
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

          if (cards.length === 2) {
            if (getCardSize(cards[0]) === getCardSize(cards[1]) || getCardSize(cards[0]) == 15 || getCardSize(cards[1]) == 15) {
              return (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
                error: Error()
              }), GameDefine) : GameDefine).KIND_CARDS_2;
            }
          }

          if (cards.length === 4) {
            const kings = cards.filter(c => isKing(c));

            if (kings.length === 4) {
              return (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
                error: Error()
              }), GameDefine) : GameDefine).KIND_CARDS_KING; // 自定义四王炸类型
            }
          } //识别王炸、六炸、五炸、四炸


          if (cards.length >= 4) {
            // ✅ 点数必须全部一致，才是炸弹
            const isBomb = isSamePointWithFrp(cards, (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).cardInfo.levelCard);

            if (isBomb) {
              return (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
                error: Error()
              }), GameDefine) : GameDefine).KIND_CARDS_BOMB_45;
            }
          }

          const straights = findStraightWithHongtao2_Safe(cards);

          for (let s of straights) {
            //识别同花顺
            // 检查是否是同花顺或逢人配
            const isSameColorStraight = checkIfSameColorOrFengRenPei(s);

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
            const map = getTripleWithPairPreferBig(cards);

            if (map.length == 5) {
              return (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
                error: Error()
              }), GameDefine) : GameDefine).KIND_CARDS_3_2;
            } // const map = getCardCountMap(cards);
            // const heartCards = cards.filter(c => isHeartCard(c));
            // const nonHeart = cards.filter(c => !isHeartCard(c));
            // // 查找三张相同点数的非红心牌
            // const rankMap = new Map<number, number[]>();
            // for (let card of nonHeart) {
            //     const rank = card % 16;
            //     if (!rankMap.has(rank)) rankMap.set(rank, []);
            //     rankMap.get(rank)!.push(card);
            // }
            // let triple: number[] = [];
            // for (const [rank, list] of rankMap.entries()) {
            //     if (list.length === 3) {
            //         triple = list;
            //         break;
            //     }
            // }
            // if (triple.length === 3) {
            //     const used = new Set(triple);
            //     const remain = cards.filter(c => !used.has(c));
            //     const pairMap = new Map<number, number[]>();
            //     const redHeartList: number[] = [];
            //     for (const card of remain) {
            //         if (isHeartCard(card)) {
            //             redHeartList.push(card);
            //             continue;
            //         }
            //         const rank = card % 16;
            //         if (!pairMap.has(rank)) pairMap.set(rank, []);
            //         pairMap.get(rank)!.push(card);
            //     }
            //     // 尝试将红心级牌补到已有点数中
            //     for (const red of redHeartList) {
            //         // 优先补到数量为1的，组成对子
            //         let targetRank: number | null = null;
            //         for (const [rank, list] of pairMap.entries()) {
            //             if (list.length === 1) {
            //                 targetRank = rank;
            //                 break;
            //             }
            //         }
            //         // 如果找到了点数为1的组，就补进去
            //         if (targetRank !== null) {
            //             pairMap.get(targetRank)!.push(red);
            //         }
            //     }
            //     // 判断是否有组合出一对
            //     for (const list of pairMap.values()) {
            //         if (list.length >= 2) {
            //             return GameDefine.KIND_CARDS_3_2;
            //         }
            //     }
            // }

          } // 飞机（需要至少2组三张牌且连续）


          if (cards.length == 6) {
            const feijiType = GameLogic.getCardTypeByFeiji(cards);

            if (feijiType == (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
              error: Error()
            }), GameDefine) : GameDefine).KIND_CARDS_SHUNZI_3) {
              return (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
                error: Error()
              }), GameDefine) : GameDefine).KIND_CARDS_SHUNZI_3;
            } else {
              const lianduiType = GameLogic.getCardTypeByLiandui(cards);

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
          }

          if (cards.length === 4) {
            const kings = cards.filter(c => isKing(c));

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
          const result = []; // 固定牌型 + 对子/单张

          const randomPart = []; // 飞机/顺子/连对/三带二

          const used = new Set();
          const usedForRandom = new Set(); // 用于随机牌型的已用牌
          // 辅助方法：将已使用的牌加入结果

          function addGroup(groups, toResult = true, isRandom = false) {
            for (const g of groups) {
              (toResult ? result : randomPart).push(g);
              g.forEach(c => {
                used.add(c); // 固定牌型使用的牌

                if (isRandom) usedForRandom.add(c); // 随机牌型使用的牌
              });
            }
          }

          const getRemain = (isRandom = false) => {
            return cards.filter(c => isRandom ? !usedForRandom.has(c) && !used.has(c) : !used.has(c)); // 判断是否已经用过
          }; // ✅ 固定牌型优先处理


          addGroup(findWangzha(getRemain())); // 王炸

          addGroup(findZ(getRemain(), 6)); // 六炸

          addGroup(findTonghuashun(getRemain())); // 同花顺

          addGroup(findZ(getRemain(), 5)); // 五炸

          addGroup(findZ(getRemain(), 4)); // 四炸
          // ✅ 保留2和逢人配：在理牌时不删除这些牌

          const specials = cards.filter(c => getCardSize(c) === 16 || getCardSize(c) === 17 || getCardSize(c) === 2); // 保留大小王和2
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
          const map = getCardCountMap(cards);
          const result = [];

          for (const [rank, list] of map.entries()) {
            if ((rank === 16 || rank === 17) && list.length >= 2) {
              // 16: 小王，17: 大王
              result.push(list.slice(0, 2)); // 两张王算一个炸弹
            }
          }

          return result;
        }

        _GameLogic.findWangzha = findWangzha;

        function findTonghuashun(cards) {
          const mapByColor = new Map();

          for (let card of cards) {
            const color = Math.floor(card / 16);

            if (!mapByColor.has(color)) {
              mapByColor.set(color, []);
            }

            mapByColor.get(color).push(card);
          }

          const result = [];

          for (let colorCards of mapByColor.values()) {
            if (colorCards.length < 5) continue;
            const ranksMap = new Map();

            for (let card of colorCards) {
              const rank = getCardSize(card);
              if (rank < 3 || rank > 14) continue; // 不能包含2或王

              if (!ranksMap.has(rank)) ranksMap.set(rank, []);
              ranksMap.get(rank).push(card);
            }

            const ranks = Array.from(ranksMap.keys()).sort((a, b) => a - b);
            let start = 0;

            while (start <= ranks.length - 5) {
              let group = [];
              let lastRank = ranks[start];

              if (ranksMap.get(lastRank).length > 0) {
                group.push(ranksMap.get(lastRank).pop());
              } else {
                start++;
                continue;
              }

              for (let i = start + 1; i < ranks.length; i++) {
                if (ranks[i] !== lastRank + 1) {
                  break;
                }

                const list = ranksMap.get(ranks[i]);

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
          const result = [];
          const map = getCardCountMap(cards); // 牌点数 -> 对应的牌数组

          for (const list of map.values()) {
            if (list.length === n) {
              result.push([...list]);
            }
          }

          return result;
        }

        _GameLogic.findZ = findZ;

        function findThreeWithTwoBy(cards, usedIndex = new Set(), maxCount = 2) {
          const result = [];
          const countMap = new Map();

          for (const card of cards) {
            const rank = getCardSize(card);
            ;
            const color = Math.floor(card / 16); // 排除大小王、参谋、非红桃级牌2

            if (rank === (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).cardInfo.levelCard && color !== 0 || rank <= 1 || rank > 14) continue;
            if (!countMap.has(rank)) countMap.set(rank, []);
            countMap.get(rank).push(card);
          }

          const triples = Array.from(countMap.entries()).filter(([_, list]) => list.length >= 3).sort((a, b) => a[0] - b[0]); // 小点数优先

          const pairs = Array.from(countMap.entries()).filter(([_, list]) => list.length === 2).sort((a, b) => a[0] - b[0]); // 小点数优先

          const used = new Set();

          for (const [tripleRank, tripleCards] of triples) {
            const triple = tripleCards.filter(c => !used.has(c) && !usedIndex.has(cards.indexOf(c)));
            if (triple.length < 3) continue;

            for (const [pairRank, pairCards] of pairs) {
              if (pairRank === tripleRank) continue;
              const pair = pairCards.filter(c => !used.has(c) && !usedIndex.has(cards.indexOf(c)));
              if (pair.length < 2) continue;
              const group = [triple[0], triple[1], triple[2], pair[0], pair[1]];
              group.forEach(c => used.add(c));
              result.push(group);
              break;
            }

            if (result.length >= maxCount) break;
          }

          result.sort((a, b) => {
            const aTripleRank = a[0] % 16; // 三张部分点数（掼蛋中三带二默认前3张是三张）

            const bTripleRank = b[0] % 16;
            return bTripleRank - aTripleRank; // 从大到小排序
          });
          return result;
        }

        function findThreeWithTwo(cards, usedIndex, maxCount = 1) {
          const countMap = new Map(); // 分组：按点数归类（排除特殊点数：大小王、参谋、级牌 2）

          for (const card of cards) {
            const rank = card % 16;
            if (rank <= (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).cardInfo.levelCard || rank > 14) continue; // 排除大小王/参谋/级牌

            if (!countMap.has(rank)) countMap.set(rank, []);
            countMap.get(rank).push(card);
          } // 找所有三张


          const triples = Array.from(countMap.entries()).filter(([_, list]) => list.length >= 3).sort((a, b) => a[0] - b[0]); // 最小的三张优先
          // 找所有对子（⚠️ 只找那些 list.length === 2，不能从三张拆）

          const pairs = Array.from(countMap.entries()).filter(([_, list]) => list.length === 2).sort((a, b) => a[0] - b[0]); // 最小对子优先
          // 尝试组合三带二（三张 + 另一对）

          for (const [tripleRank, tripleCards] of triples) {
            for (const [pairRank, pairCards] of pairs) {
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
          const result = arr.slice(); // 拷贝原数组，避免修改原数组

          for (let i = result.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [result[i], result[j]] = [result[j], result[i]]; // 交换
          }

          return result;
        }

        _GameLogic.shuffleArray = shuffleArray;

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

        // function isStraight(sizes: number[]): boolean {
        //     if (sizes.length < 5) return false;
        //     for (let i = 1; i < sizes.length; i++) {
        //         if (sizes[i] !== sizes[i - 1] + 1) return false;
        //         if (sizes[i] >= 15) return false; // 顺子不能包含 2（15）或王
        //     }
        //     return true;
        // }
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

        function isStraight(cards) {
          if (cards.length < 5) return false; // 顺子至少需要5张牌

          const map = getCardCountMap(cards);
          const rankSet = new Set(); // 过滤掉2和大小王

          for (let card of cards) {
            const rank = getCardSize(card);

            if (rank >= 3 && rank <= 14) {
              // 只考虑3到A的牌
              rankSet.add(rank);
            }
          } // 顺子必须没有重复的牌


          if (rankSet.size !== cards.length) return false; // 顺子的牌必须连续

          const ranks = Array.from(rankSet).sort((a, b) => a - b);

          for (let i = 1; i < ranks.length; i++) {
            if (ranks[i] !== ranks[i - 1] + 1) {
              return false; // 非连续
            }
          }

          return true; // 顺子
        }

        _GameLogic.isStraight = isStraight;

        function isWangzha(cards) {
          var _map$get, _map$get2, _map$get3, _map$get4, _map$get5, _map$get6;

          const map = getCardCountMap(cards);
          const hasBig = ((_map$get = map.get(17)) == null ? void 0 : _map$get.length) >= 1; // 大王

          const hasSmall = ((_map$get2 = map.get(16)) == null ? void 0 : _map$get2.length) >= 1; // 小王
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

          const map = getCardCountMap(cards);
          const pairRanks = []; // 获取所有对子的牌点

          for (const [rank, list] of map.entries()) {
            if (rank < 3 || rank > 14) continue; // 排除 2 和大小王

            if (list.length === 2) {
              pairRanks.push(rank); // 记录有效的对子
            }
          } // 必须有足够的对子


          if (pairRanks.length * 2 !== cards.length) return false; // 判断对子是否连续

          pairRanks.sort((a, b) => a - b);

          for (let i = 1; i < pairRanks.length; i++) {
            if (pairRanks[i] !== pairRanks[i - 1] + 1) {
              return false; // 非连续
            }
          }

          return true; // 连对
        }

        _GameLogic.isLiandui = isLiandui;

        function isThreeWithTwo(cards) {
          const map = getCardCountMap(cards); // 获取每种牌的数量分布

          let hasThree = false;
          let pairCount = 0;
          let singleCount = 0; // 遍历所有牌，统计三张相同的牌、对子、单张牌的数量

          for (const [rank, list] of map.entries()) {
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

        function getCardRank_I(card) {
          return card % 16;
        }

        function getTripleWithPairPreferBig(cards) {
          if (cards.length < 5) return null;
          const heartCards = cards.filter(isHeartCard);
          const normalCards = cards.filter(c => !isHeartCard(c));
          const rankMap = new Map(); // 统计原生牌的点数

          for (const card of normalCards) {
            const rank = getCardRank_I(card);
            if (!rankMap.has(rank)) rankMap.set(rank, []);
            rankMap.get(rank).push(card);
          } // 从大到小尝试构成最大三张


          const ranksSorted = [...rankMap.keys()].sort((a, b) => b - a);

          for (const rank of ranksSorted) {
            const list = rankMap.get(rank);
            const need = 3 - list.length;

            if (list.length >= 1 && heartCards.length >= need) {
              // 成功构成三条
              const triple = [...list, ...heartCards.slice(0, need)];
              const used = new Set(triple); // 从剩下的牌中找对子（也可以拼红心）

              const remain = cards.filter(c => !used.has(c));
              const redLeft = remain.filter(isHeartCard);
              const pairMap = new Map();

              for (const c of remain) {
                if (isHeartCard(c)) continue;
                const r = getCardRank_I(c);
                if (!pairMap.has(r)) pairMap.set(r, []);
                pairMap.get(r).push(c);
              } // 红心补对子


              for (const red of redLeft) {
                for (const [r, l] of pairMap.entries()) {
                  if (l.length === 1) {
                    l.push(red);
                    break;
                  }
                }
              }

              for (const pair of pairMap.values()) {
                if (pair.length >= 2) {
                  return [...triple, ...pair.slice(0, 2)];
                }
              }
            }
          }

          return null;
        }

        _GameLogic.getTripleWithPairPreferBig = getTripleWithPairPreferBig;

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

        function getCardCountMap_I(cards) {
          const map = new Map();
          const heartCards = []; // 第一步：将普通牌按点数分组

          let heardCard = 0;

          for (const card of cards) {
            if (isHeartCard(card)) {
              heardCard = card; // heartCards.push(card); // 暂时不加入 map

              continue;
            }

            const rank = card % 16;

            if (!map.has(rank)) {
              map.set(rank, []);
            }

            map.get(rank).push(card);
          }

          for (const [rank, list] of map.entries()) {
            map.get(rank).push(heardCard);
          }

          return map;
        }

        _GameLogic.getCardCountMap_I = getCardCountMap_I;

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

        function findRocket(cards) {
          const smallKings = cards.filter(c => getCardSize(c) === 16);
          const bigKings = cards.filter(c => getCardSize(c) === 17);
          const allKings = [...smallKings, ...bigKings];
          const result = []; // 四王炸：任意四张王

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
          const result = [];
          const map = new Map();
          const frpCards = []; // 红桃级牌列表
          // 分类：分出红桃级牌和普通牌

          for (const card of cards) {
            const rank = card % 16;
            const color = Math.floor(card / 16);

            if (rank === (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).cardInfo.levelCard && color === 2) {
              frpCards.push(card);
            } else {
              if (!map.has(rank)) map.set(rank, []);
              map.get(rank).push(card);
            }
          }

          const usedFrp = new Set(); // 红桃级牌使用记录

          for (const [rank, group] of map.entries()) {
            const fullCount = Math.floor(group.length / count); // 能组成几组完整炸弹

            for (let i = 0; i < fullCount; i++) {
              result.push(group.slice(i * count, (i + 1) * count));
            } // 如果还能组成 count-1 张，尝试补一张红桃级牌


            const remain = group.slice(fullCount * count);

            if (remain.length === count - 1) {
              for (const frp of frpCards) {
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
          const result = [];

          for (const group of arr) {
            result.push(...group);
          }

          return result;
        }
        /** 一键理牌主函数 */


        function smartSortCards(cards) {
          const mainResult = []; // 固定牌型

          const randomPart = []; // 飞机/连对/顺子/三带二

          const usedIndex = new Set(); // 避免重复用相同牌

          const getUnused = () => cards.filter((_, idx) => !usedIndex.has(idx));

          const pushAndMark = (group, toMain = true) => {
            const realGroup = [];

            for (const g of group) {
              const idx = cards.findIndex((c, i) => c === g && !usedIndex.has(i));

              if (idx !== -1) {
                usedIndex.add(idx);
                realGroup.push(cards[idx]);
              }
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

          var result = countThreeWithTwoAndStraight(getUnused());
          console.log('順子數量>>>', result.straightCount); // var straightList = findStraight_II(cards, usedIndex);
          //var threeWithList = findThreeWithTwoBy(getUnused());

          console.log('三帶二', result.threeWithTwoCount);
          var lianduiList = findChainPairs(getUnused());

          if (result.straightCount === 1) {
            findStraight(getUnused()).forEach(g => pushAndMark(g, false)); // 顺子

            if (result.threeWithTwoCount != 0) {
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
          } else if (result.straightCount === 0) {
            if (result.threeWithTwoCount >= 2) {
              findThreeWithTwoBy(getUnused(), usedIndex).forEach(g => pushAndMark(g, false));
            } else {
              if (result.threeWithTwoCount != 0) {
                findThreeWithTwo(getUnused(), usedIndex).forEach(g => pushAndMark(g, false)); // 三带二
              } else {
                //没有顺子和没有三带二
                findChainPairs(getUnused()).forEach(g => pushAndMark(g, false));
                findPlane(getUnused()).forEach(g => pushAndMark(g, false)); // findThreeWithTwo(getUnused(), usedIndex).forEach(g => pushAndMark(g, false)); // 三带二
              }
            } // findThreeWithTwoBy(getUnused(), usedIndex, 2).forEach(g => pushAndMark(g, false)); // 三带二（尽可能两组）

          } else {
            //说明顺子超过2组
            if (result.threeWithTwoCount == 0) {
              //沒有三帶二的話
              findStraight(getUnused()).forEach(g => pushAndMark(g, false)); // 顺子
            } else {
              findStraight_I(getUnused()).forEach(g => pushAndMark(g, false));
              findThreeWithTwo(getUnused(), usedIndex).forEach(g => pushAndMark(g, false)); // 三带二
            }
          } // findPlane(getUnused()).forEach(g => pushAndMark(g, false));        // 飞机（不带）
          // findChainPairs(getUnused()).forEach(g => pushAndMark(g, false));   // 连对
          // const usedIndex = new Set<number>();
          // ===== 剩余散牌，按点数从大到小排列 =====


          const scatter = getUnused();
          const sortValue = sortCardsBySizeDown(scatter, scatter.length);
          const uniqueList = getUniqueCard(sortValue);
          let idx = 0;

          for (let j = 0; j < uniqueList.length; j++) {
            const d = uniqueList[j];
            let list1 = [];

            for (let i = idx; i < sortValue.length; i++) {
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
          const result = [];
          const redTrumpCards = [];
          const usedFrp = new Set();
          const colorMap = new Map(); // 分组：红桃级牌 + 花色分组

          for (const card of cards) {
            const rank = card % 16;
            const color = Math.floor(card / 16);
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

          for (const [color, colorCards] of colorMap.entries()) {
            const rankMap = new Map();

            for (const card of colorCards) {
              const rank = card % 16;
              if (!rankMap.has(rank)) rankMap.set(rank, []);
              rankMap.get(rank).push(card);
            }

            const sortedRanks = Array.from(rankMap.keys()).sort((a, b) => a - b);

            for (let start = 3; start <= 10; start++) {
              const sequence = [start, start + 1, start + 2, start + 3, start + 4];
              const straight = [];
              const tempPopped = []; // [rank, card]

              let missing = 0;

              for (const r of sequence) {
                const list = rankMap.get(r);

                if (list && list.length > 0) {
                  const c = list.pop();
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
                const frp = redTrumpCards.find(c => !usedFrp.has(c));

                if (frp !== undefined) {
                  straight.push(frp);
                  usedFrp.add(frp);
                  result.push(straight);
                  start += 4;
                } else {
                  // 恢复
                  for (const [r, c] of tempPopped) {
                    if (!rankMap.has(r)) rankMap.set(r, []);
                    rankMap.get(r).push(c);
                  }
                }
              } else {
                // 恢复
                for (const [r, c] of tempPopped) {
                  if (!rankMap.has(r)) rankMap.set(r, []);
                  rankMap.get(r).push(c);
                }
              }
            }
          }

          return result;
        }

        _GameLogic.findFlushStraight = findFlushStraight;

        function findPlane(cards) {
          const map = new Map(); // 建立 rank -> [cards] 映射（排除大小王）
          // 牌色用 Math.floor(card / 16)，牌点用 card % 16

          for (const card of cards) {
            const rank = card % 16;
            const color = Math.floor(card / 16); // 排除大小王

            if (rank >= 14 || rank <= 1) continue; // 排除非红桃的级牌（2）

            if (rank === (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
              error: Error()
            }), GlobalData) : GlobalData).cardInfo.levelCard && color !== 0) continue;

            if (!map.has(rank)) {
              map.set(rank, []);
            }

            map.get(rank).push(card);
          } // 提取所有 rank 满足 >=3 的三张牌，按点数升序排序


          const ranks = Array.from(map.keys()).filter(rank => map.get(rank).length >= 3).sort((a, b) => a - b);
          const result = [];
          let i = 0;

          while (i < ranks.length - 1) {
            const first = ranks[i];
            const second = ranks[i + 1];

            if (second === first + 1) {
              // ✅ 找到第一组连续的两连飞机
              const plane = [];
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
          const map = getCardCountMap(cards);
          const ranks = Array.from(map.keys()); // 点数 3~13（3~K），且必须至少有两个相同

          const filtered = ranks.filter(r => map.get(r).length >= 2 && r >= 3 && r <= 13).sort((a, b) => a - b);
          const results = [];
          let temp = [];

          for (let i = 0; i < filtered.length; i++) {
            const curr = filtered[i];

            if (temp.length === 0 || filtered[i - 1] === curr - 1) {
              temp.push(map.get(curr).slice(0, 2)); // ✅ 如果达到 3 连对，直接 push 并重置

              if (temp.length === 3) {
                results.push(temp.flat());
                temp = [];
              }
            } else {
              // ❌ 不连了，且不是3连对则舍弃
              temp = [map.get(curr).slice(0, 2)];
            }
          } // ❌ 最后一组不是3连对，不能加


          return results;
        }

        _GameLogic.findChainPairs = findChainPairs;

        function findStraight_I(cards) {
          const map = new Map(); // 构建 rank -> cards 映射（过滤大小王）

          for (const card of cards) {
            const rank = getCardSize(card);
            if (rank < 3 || rank > 14) continue; // 3~A

            if (!map.has(rank)) map.set(rank, []);
            map.get(rank).push(card);
          }

          const ranks = Array.from(map.keys()).sort((a, b) => a - b);
          const result = [];
          let i = 0;

          while (i <= ranks.length - 5) {
            let start = i;
            let end = i + 1; // 尝试向后扩展连续段

            while (end < ranks.length && ranks[end] === ranks[end - 1] + 1 && map.has(ranks[end])) {
              end++;
            }

            const length = end - start;

            if (length == 5) {
              const seq = ranks.slice(start, end);
              const straight = [];

              for (const rank of seq) {
                const cardsOfRank = map.get(rank);
                straight.push(cardsOfRank.pop());

                if (cardsOfRank.length === 0) {
                  map.delete(rank);
                }
              }

              result.push(straight); // ranks 中可能仍有未删除的点数，但 map 已经删了，用过滤后的 ranks 重新再来一轮

              i = 0; // 重新生成 ranks（只保留仍有剩余牌的点数）

              const remainingRanks = Array.from(map.keys()).sort((a, b) => a - b);
              ranks.length = 0;
              ranks.push(...remainingRanks);
            } else {
              i++;
            }
          } // 返回最小的顺子


          if (result.length > 0) {
            return [result[0]]; // 取最小的顺子
          } else {
            return []; // 没有顺子
          }
        }

        _GameLogic.findStraight_I = findStraight_I;

        function findStraight_II(cards, usedIndex) {
          const result = []; // 构建 rank -> card[] 的映射（包含重复牌）

          const rankMap = new Map();

          for (let i = 0; i < cards.length; i++) {
            if (usedIndex.has(i)) continue;
            const card = cards[i];
            const rank = card % 16;
            if (rank < 3 || rank > 13) continue; // 只允许 3~K 进入顺子

            if (!rankMap.has(rank)) rankMap.set(rank, []);
            rankMap.get(rank).push(i); // 保存的是索引，方便精确控制使用
          }

          const sortedRanks = Array.from(rankMap.keys()).sort((a, b) => a - b);
          let i = 0;

          while (i <= sortedRanks.length - 5) {
            const seq = sortedRanks.slice(i, i + 5);
            let isConsecutive = true;

            for (let j = 1; j < 5; j++) {
              if (seq[j] !== seq[j - 1] + 1) {
                isConsecutive = false;
                break;
              }
            }

            if (isConsecutive) {
              const straight = [];
              const tempUsed = [];
              let valid = true;

              for (const rank of seq) {
                const available = rankMap.get(rank).filter(idx => !usedIndex.has(idx));

                if (available.length === 0) {
                  valid = false;
                  break;
                }

                const idx = available[0];
                tempUsed.push(idx);
                straight.push(cards[idx]);
              }

              if (valid) {
                tempUsed.forEach(idx => usedIndex.add(idx));
                result.push(straight);
              }

              i += 5; // 跳过本段，顺子不能重叠
            } else {
              i++;
            }
          }

          return result;
        }

        function countThreeWithTwoAndStraight(unused) {
          const usedIndex = new Set(); // 用于标记已经使用的牌（按 index）

          const rankMap = new Map(); // 点数 -> 所有 index

          for (let i = 0; i < unused.length; i++) {
            const card = unused[i];
            const rank = card % 16;
            if (!rankMap.has(rank)) rankMap.set(rank, []);
            rankMap.get(rank).push(i);
          }

          let threeWithTwoCount = 0;
          const sortedRanks = Array.from(rankMap.keys()).sort((a, b) => b - a); // 大到小优先
          // ✅ Step 1: 三带二（所有牌按 index 记录，防止共用）

          for (const mainRank of sortedRanks) {
            if (mainRank > 9) continue;
            const mainIdxList = rankMap.get(mainRank).filter(idx => !usedIndex.has(idx));
            if (mainIdxList.length < 3) continue;
            const three = mainIdxList.slice(0, 3);
            let pair = null;

            for (const subRank of sortedRanks) {
              if (subRank === mainRank) continue;
              const subIdxList = rankMap.get(subRank).filter(idx => !usedIndex.has(idx));

              if (subIdxList.length >= 2) {
                pair = subIdxList.slice(0, 2);
                break;
              }
            }

            if (pair) {
              [...three, ...pair].forEach(idx => usedIndex.add(idx));
              threeWithTwoCount++;
            } // ✅ 否则三张不能标记为 used

          } // ✅ Step 2: 顺子（点数连续，排除 2 和大小王）


          const rankToIndexes = new Map();

          for (let i = 0; i < unused.length; i++) {
            const rank = getCardSize(unused[i]);

            if (rank >= 3 && rank <= 14 && !usedIndex.has(i)) {
              if (!rankToIndexes.has(rank)) rankToIndexes.set(rank, []);
              rankToIndexes.get(rank).push(i);
            }
          }

          const sorted = Array.from(rankToIndexes.keys()).sort((a, b) => a - b);
          let straightCount = 0;
          let seq = [];

          const flushSeq = () => {
            if (seq.length === 5) {
              seq.forEach(idx => usedIndex.add(idx));
              straightCount++;
            }

            seq = [];
          };

          for (let i = 0; i < sorted.length; i++) {
            const r = sorted[i];
            const idxList = rankToIndexes.get(r).filter(idx => !usedIndex.has(idx));

            if (idxList.length === 0) {
              flushSeq();
              continue;
            }

            const currentIdx = idxList[0];

            if (seq.length === 0) {
              seq.push(currentIdx);
            } else {
              const prevRank = getCardSize(unused[seq[seq.length - 1]]);

              if (r === prevRank + 1) {
                seq.push(currentIdx);

                if (seq.length === 5) {
                  flushSeq(); // 一旦达到 5 就立刻 flush，不再继续延伸
                }
              } else {
                flushSeq();
                seq.push(currentIdx);
              }
            }
          }

          flushSeq();
          return {
            threeWithTwoCount,
            straightCount
          };
        }

        _GameLogic.countThreeWithTwoAndStraight = countThreeWithTwoAndStraight;

        function findStraight(cards) {
          const map = new Map(); // 构建 rank -> cards 映射（过滤大小王）

          for (const card of cards) {
            const rank = getCardSize(card);
            if (rank < 3 || rank > 14) continue; // 3~A

            if (!map.has(rank)) map.set(rank, []);
            map.get(rank).push(card);
          }

          const ranks = Array.from(map.keys()).sort((a, b) => a - b);
          const result = [];
          let i = 0;

          while (i <= ranks.length - 5) {
            let start = i;
            let end = i + 1; // 尝试向后扩展连续段

            while (end < ranks.length && ranks[end] === ranks[end - 1] + 1 && map.has(ranks[end])) {
              end++;
            }

            const length = end - start;

            if (length == 5) {
              const seq = ranks.slice(start, end);
              const straight = [];

              for (const rank of seq) {
                const cardsOfRank = map.get(rank);
                straight.push(cardsOfRank.pop());

                if (cardsOfRank.length === 0) {
                  map.delete(rank);
                }
              }

              result.push(straight); // ranks 中可能仍有未删除的点数，但 map 已经删了，用过滤后的 ranks 重新再来一轮

              i = 0; // 重新生成 ranks（只保留仍有剩余牌的点数）

              const remainingRanks = Array.from(map.keys()).sort((a, b) => a - b);
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
          const map = new Map();

          for (const card of cards) {
            const rank = card % 16; // 过滤大小王
            // if (rank === 14 || rank === 15) continue;

            if (!map.has(rank)) {
              map.set(rank, []);
            }

            map.get(rank).push(card);
          }

          const result = [];

          for (const group of map.values()) {
            if (group.length === 2) {
              result.push([...group]);
            }
          }

          return result;
        }

        _GameLogic.findPair = findPair;

        function findAllSingles(cards) {
          const map = getCardCountMap(cards); // Map<点数, number[]>

          const result = [];

          for (const list of map.values()) {
            if (list.length === 1) {
              result.push([...list]); // 每张单牌包装成一组
            }
          }

          return result;
        }

        _GameLogic.findAllSingles = findAllSingles;

        function isSingleCardStronger(card, target, levelRank) {
          const rankA = card % 16;
          const rankB = target % 16;
          const isJokerA = rankA >= 14;
          const isJokerB = rankB >= 14;
          const isLevelA = rankA === levelRank;
          const isLevelB = rankB === levelRank; // 不能压王

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
          let mainRank = null;
          let frpCount = 0;

          for (const card of group) {
            const rank = card % 16;
            const color = Math.floor(card / 16);
            const isFrp = rank === levelRank && color === 2;

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
          const hintList = [];
          if (!targetCards || targetCards.length === 0) return [];
          const type = GameLogic.getCardType(targetCards); // 获取目标主牌点（比如单张、对子、三带）

          const targetMainSize = getMainCardSize(targetCards);

          switch (type) {
            case (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
              error: Error()
            }), GameDefine) : GameDefine).KIND_CARDS_1:
              // 优先从散牌中找
              for (let i = groupedCards.length - 1; i >= 0; i--) {
                const group = groupedCards[i];

                if (group.length === 1) {
                  const card = group[0];

                  if (isSingleCardStronger(card, targetCards[0], (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                    error: Error()
                  }), GlobalData) : GlobalData).cardInfo.levelCard)) {
                    hintList.push([card]);
                  }
                }
              } // 再从对子中拆一张


              for (let i = groupedCards.length - 1; i >= 0; i--) {
                const group = groupedCards[i];

                if (group.length === 2) {
                  const card = group[0];

                  if (isSingleCardStronger(card, targetCards[0], (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                    error: Error()
                  }), GlobalData) : GlobalData).cardInfo.levelCard)) {
                    hintList.push([card]);
                  }
                }
              } //找3张拆


              for (let i = groupedCards.length - 1; i >= 0; i--) {
                const group = groupedCards[i];

                if (group.length === 3) {
                  const card = group[0];

                  if (isSingleCardStronger(card, targetCards[0], (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                    error: Error()
                  }), GlobalData) : GlobalData).cardInfo.levelCard)) {
                    hintList.push([card]);
                  }
                }
              } //找四炸


              for (let i = groupedCards.length - 1; i >= 0; i--) {
                const group = groupedCards[i];

                if (group.length == 4) {
                  const bombs = GameLogic.newfindBombs(group);

                  if (bombs.length != 0) {
                    hintList.push(group);
                  }
                }
              } //五炸


              for (let i = groupedCards.length - 1; i >= 0; i--) {
                const group = groupedCards[i];

                if (group.length == 5) {
                  const bombs = GameLogic.newfindBombs(group);

                  if (bombs.length != 0) {
                    hintList.push(group);
                  }
                }
              } //同花顺


              for (let i = groupedCards.length - 1; i >= 0; i--) {
                const group = groupedCards[i];

                if (group.length == 5) {
                  const bombs = GameLogic.findFlushStraight(group);

                  if (bombs.length != 0) {
                    hintList.push(group);
                  }
                }
              } //六炸


              for (let i = groupedCards.length - 1; i >= 0; i--) {
                const group = groupedCards[i];

                if (group.length == 6) {
                  const bombs = GameLogic.newfindBombs(group);

                  if (bombs.length != 0) {
                    hintList.push(group);
                  }
                }
              } //四王炸


              for (let i = groupedCards.length - 1; i >= 0; i--) {
                const group = groupedCards[i];

                if (group.length == 4) {
                  const bombs = GameLogic.findRocket(group);

                  if (bombs.length != 0) {
                    hintList.push(group);
                  }
                }
              }

              break;

            case (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
              error: Error()
            }), GameDefine) : GameDefine).KIND_CARDS_2:
              for (let i = groupedCards.length - 1; i >= 0; i--) {
                const group = groupedCards[i];

                if (group.length === 2) {
                  const card = group[0];

                  if (isSingleCardStronger(card, targetCards[0], (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                    error: Error()
                  }), GlobalData) : GlobalData).cardInfo.levelCard)) {
                    hintList.push([card]);
                  }
                }
              } //找3张拆


              for (let i = groupedCards.length - 1; i >= 0; i--) {
                const group = groupedCards[i];

                if (group.length === 3) {
                  const card = group[0];

                  if (isSingleCardStronger(card, targetCards[0], (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                    error: Error()
                  }), GlobalData) : GlobalData).cardInfo.levelCard)) {
                    hintList.push([card]);
                  }
                }
              } //找四炸


              for (let i = groupedCards.length - 1; i >= 0; i--) {
                const group = groupedCards[i];

                if (group.length == 4) {
                  const bombs = GameLogic.newfindBombs(group);

                  if (bombs.length != 0) {
                    hintList.push(group);
                  }
                }
              } //五炸


              for (let i = groupedCards.length - 1; i >= 0; i--) {
                const group = groupedCards[i];

                if (group.length == 5) {
                  const bombs = GameLogic.newfindBombs(group);

                  if (bombs.length != 0) {
                    hintList.push(group);
                  }
                }
              } //同花顺


              for (let i = groupedCards.length - 1; i >= 0; i--) {
                const group = groupedCards[i];

                if (group.length == 5) {
                  const bombs = GameLogic.findFlushStraight(group);

                  if (bombs.length != 0) {
                    hintList.push(group);
                  }
                }
              } //六炸


              for (let i = groupedCards.length - 1; i >= 0; i--) {
                const group = groupedCards[i];

                if (group.length == 6) {
                  const bombs = GameLogic.newfindBombs(group);

                  if (bombs.length != 0) {
                    hintList.push(group);
                  }
                }
              } //四王炸


              for (let i = groupedCards.length - 1; i >= 0; i--) {
                const group = groupedCards[i];

                if (group.length == 4) {
                  const bombs = GameLogic.findRocket(group);

                  if (bombs.length != 0) {
                    hintList.push(group);
                  }
                }
              }

              break;

            case (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
              error: Error()
            }), GameDefine) : GameDefine).KIND_CARDS_3:
              {
                // 找出所有三张，且大于目标点
                for (let i = groupedCards.length - 1; i >= 0; i--) {
                  const group = groupedCards[i];

                  if (group.length === 3) {
                    const size = GameLogic.getCardSize(group[0]);

                    if (size > targetMainSize) {
                      hintList.push([...group]);
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
                for (let i = groupedCards.length - 1; i >= 0; i--) {
                  const group3 = groupedCards[i];

                  if (group3.length === 3) {
                    const size = GameLogic.getCardSize(group3[0]);
                    if (size <= targetMainSize) continue; // 再找一组对子（不能跟三张重复点数）

                    for (let j = groupedCards.length - 1; j >= 0; j--) {
                      if (j === i) continue;
                      const group2 = groupedCards[j];

                      if (group2.length === 2 && GameLogic.getCardSize(group2[0]) !== size) {
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
              for (let i = groupedCards.length - 1; i >= 0; i--) {
                const group = groupedCards[i];

                if (group.length >= 4) {
                  // ✅ 点数必须全部一致，才是炸弹
                  const isBomb = isSamePointWithFrp(group, (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                    error: Error()
                  }), GlobalData) : GlobalData).cardInfo.levelCard);
                  if (!isBomb) continue;
                  const groupRank = GameLogic.getCardSize(group[0]);

                  if (group.length > targetCards.length || group.length === targetCards.length && groupRank > targetMainSize) {
                    hintList.push([...group]);
                  }
                }
              } // ✅ 加入同花顺提示（同花色 + 顺子长度 >= 5）


              const colorGroups = new Map(); // color -> [cards]

              for (const card of groupedCards.flat()) {
                const color = GameLogic.getCardColor(card);
                if (!colorGroups.has(color)) colorGroups.set(color, []);
                colorGroups.get(color).push(card);
              }

              for (const cards of colorGroups.values()) {
                const sorted = cards.filter(c => {
                  const rank = c % 16;
                  return rank >= 3 && rank <= 13 || rank === (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                    error: Error()
                  }), GlobalData) : GlobalData).cardInfo.levelCard;
                }).sort((a, b) => GameLogic.getCardSize(a) - GameLogic.getCardSize(b));
                const sizeMap = new Map();

                for (const c of sorted) {
                  const s = GameLogic.getCardSize(c);
                  if (!sizeMap.has(s)) sizeMap.set(s, []);
                  sizeMap.get(s).push(c);
                }

                const sizes = Array.from(sizeMap.keys()).sort((a, b) => a - b); // 滑窗查找连续 >= 5 的同花顺

                for (let i = 0; i <= sizes.length - 5; i++) {
                  let ok = true;

                  for (let j = 1; j < 5; j++) {
                    if (sizes[i + j] !== sizes[i + j - 1] + 1) {
                      ok = false;
                      break;
                    }
                  }

                  if (ok) {
                    const group = [];

                    for (let j = 0; j < 5; j++) {
                      const s = sizes[i + j];
                      const list = sizeMap.get(s);
                      group.push(list.pop()); // 拿一张即可
                    }

                    hintList.push(group);
                  }
                }
              } // ✅ 王炸也可出（已定义好的）


              const kings = groupedCards.flat().filter(c => isKing(c));

              if (kings.length === 4) {
                hintList.push(kings.slice(0, 4));
              }

              break;

            case (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
              error: Error()
            }), GameDefine) : GameDefine).KIND_CARDS_BOMB_678:
              // ✅ 对方是炸弹，我们只能出更大的炸弹或王炸
              for (let i = groupedCards.length - 1; i >= 0; i--) {
                const group = groupedCards[i];

                if (group.length >= 6) {
                  if (!isSamePointWithFrp(group, (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                    error: Error()
                  }), GlobalData) : GlobalData).cardInfo.levelCard)) continue;
                  const groupRank = GameLogic.getCardSize(group[0]);

                  if (groupRank > targetMainSize) {
                    hintList.push([...group]);
                  }
                }
              }

              const kings1 = groupedCards.flat().filter(c => isKing(c));

              if (kings1.length === 4) {
                hintList.push([...kings1]);
              }

              break;

            case (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
              error: Error()
            }), GameDefine) : GameDefine).KIND_CARDS_SHUNZI_1:
              {
                const targetLength = targetCards.length;
                const targetStart = GameLogic.getCardSize(targetCards[0]);
                const singles = groupedCards.flat().filter(c => {
                  const size = GameLogic.getCardSize(c);
                  return size >= 3 && size <= 13; // 排除 2 和王
                });
                const rankMap = new Map();

                for (const card of singles) {
                  const size = GameLogic.getCardSize(card);
                  if (!rankMap.has(size)) rankMap.set(size, []);
                  rankMap.get(size).push(card);
                }

                const allRanks = Array.from(rankMap.keys()).sort((a, b) => a - b);

                for (let i = 0; i <= allRanks.length - targetLength; i++) {
                  const seq = allRanks.slice(i, i + targetLength);
                  const isContinuous = seq.every((r, idx) => idx === 0 || r === seq[idx - 1] + 1);

                  if (isContinuous && seq[0] > targetStart) {
                    const group = [];

                    for (const r of seq) {
                      group.push(rankMap.get(r).pop());
                    }

                    hintList.push(group);
                    break;
                  }
                }

                break;
              }

            case (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
              error: Error()
            }), GameDefine) : GameDefine).KIND_CARDS_COLOR:
              {
                const targetLength = targetCards.length;
                const targetStart = GameLogic.getCardSize(targetCards[0]);
                const targetColor = GameLogic.getCardColor(targetCards[0]);
                const singles = groupedCards.flat().filter(c => {
                  const size = GameLogic.getCardSize(c);
                  const color = GameLogic.getCardColor(c);
                  return size >= 3 && size <= 13 && color === targetColor;
                });
                const rankMap = new Map();

                for (const card of singles) {
                  const size = GameLogic.getCardSize(card);
                  if (!rankMap.has(size)) rankMap.set(size, []);
                  rankMap.get(size).push(card);
                }

                const allRanks = Array.from(rankMap.keys()).sort((a, b) => a - b);

                for (let i = 0; i <= allRanks.length - targetLength; i++) {
                  const seq = allRanks.slice(i, i + targetLength);
                  const isContinuous = seq.every((r, idx) => idx === 0 || r === seq[idx - 1] + 1);

                  if (isContinuous && seq[0] > targetStart) {
                    const group = [];

                    for (const r of seq) {
                      group.push(rankMap.get(r).pop());
                    }

                    hintList.push(group);
                    break;
                  }
                }

                break;
              }

            case (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
              error: Error()
            }), GameDefine) : GameDefine).KIND_CARDS_SHUNZI_3:
              {
                const targetTriplets = targetCards.filter(c => GameLogic.getCardCount(targetCards, GameLogic.getCardSize(c)) === 3);
                const targetLength = targetTriplets.length;
                const targetMin = Math.min(...targetTriplets.map(GameLogic.getCardSize));
                const tripletGroups = [];

                for (let g of groupedCards) {
                  if (g.length === 3) {
                    tripletGroups.push({
                      rank: GameLogic.getCardSize(g[0]),
                      cards: g
                    });
                  }
                }

                tripletGroups.sort((a, b) => a.rank - b.rank);

                for (let i = 0; i <= tripletGroups.length - targetLength / 3; i++) {
                  let group = [];
                  let ok = true;

                  for (let j = 0; j < targetLength / 3; j++) {
                    const cur = tripletGroups[i + j];

                    if (j > 0 && cur.rank !== tripletGroups[i + j - 1].rank + 1) {
                      ok = false;
                      break;
                    }

                    group.push(...cur.cards);
                  }

                  if (ok && tripletGroups[i].rank > targetMin) {
                    hintList.push(group);
                    break;
                  }
                }

                break;
              }

            case (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
              error: Error()
            }), GameDefine) : GameDefine).KIND_CARDS_SHUNZI_2:
              {
                const targetRanks = targetCards.filter(c => GameLogic.getCardCount(targetCards, GameLogic.getCardSize(c)) === 2).map(GameLogic.getCardSize);
                const targetLength = targetRanks.length;
                const targetMin = Math.min(...targetRanks);
                const pairGroups = [];

                for (let g of groupedCards) {
                  if (g.length === 2) {
                    pairGroups.push({
                      rank: GameLogic.getCardSize(g[0]),
                      cards: g
                    });
                  }
                }

                pairGroups.sort((a, b) => a.rank - b.rank);

                for (let i = 0; i <= pairGroups.length - targetLength / 2; i++) {
                  let group = [];
                  let ok = true;

                  for (let j = 0; j < targetLength / 2; j++) {
                    const cur = pairGroups[i + j];

                    if (j > 0 && cur.rank !== pairGroups[i + j - 1].rank + 1) {
                      ok = false;
                      break;
                    }

                    group.push(...cur.cards);
                  }

                  if (ok && pairGroups[i].rank > targetMin) {
                    hintList.push(group);
                    break;
                  }
                }

                break;
              }

            default:
              // 其他牌型的提示：暂不处理
              return [];
          } // 排序（牌点从小到大）
          // hintList.sort((a, b) => GameLogic.getCardSize(a[0]) - GameLogic.getCardSize(b[0]));
          // for (let i = 0; i < hintList.length; i++) {
          //     let lits = hintList[i];
          //     printCardDetails(lits);
          // }


          return hintList;
        }

        _GameLogic.getHintCards = getHintCards;

        function getMainCardSize(cards) {
          var _main$rank;

          const map = getCardCountMap(cards);
          const countArr = Array.from(map.entries()).map(([rank, list]) => ({
            rank,
            count: list.length
          })); // 按 count 降序，再按 rank 降序

          countArr.sort((a, b) => {
            if (b.count !== a.count) return b.count - a.count;
            return b.rank - a.rank;
          });
          const main = countArr[0];
          return (_main$rank = main == null ? void 0 : main.rank) != null ? _main$rank : -1;
        }

        function getCardCount(cards, size) {
          return cards.filter(c => GameLogic.getCardSize(c) === size).length;
        }

        _GameLogic.getCardCount = getCardCount;

        function isKing(card) {
          const rank = GameLogic.getCardSize(card);
          return rank === 16 || rank === 17; // 假设小王=16，大王=17
        }

        function compareCardSize(a, b) {
          const sizeA = GameLogic.getCardSize(a);
          const sizeB = GameLogic.getCardSize(b); // A=1 特殊处理：当作14参与比较

          const valueA = sizeA === 1 ? 14 : sizeA;
          const valueB = sizeB === 1 ? 14 : sizeB;
          return valueA - valueB;
        }

        function getCompareSize(card) {
          const size = GameLogic.getCardSize(card);
          if (size === 1) return 14; // A → 14

          if (size === 2) return 15; // 级牌2 → 15

          if (size === 16) return 16; // 小王

          if (size === 17) return 17; // 大王

          return size;
        }

        function hasNaturalFormedGroups(cards) {
          if (!cards || cards.length < 5) return false; // 排序（由大到小）

          const sorted = sortCardsBySizeDown(cards, cards.length); // 检查是否包含炸弹

          const map = getCardCountMap(sorted);

          for (const group of map.values()) {
            if (group.length >= 4) return true; // 炸弹或更大
          } // 检查顺子（五张及以上）


          const straights = findStraightByCard(sorted);
          if (straights.length > 0) return true; // 检查飞机

          const feiji = findFeiji(sorted);
          if (feiji.length > 0) return true; // 检查三带二

          const threeWithTwo = hasfindThreeWithTwo(sorted);
          if (threeWithTwo.length > 0) return true; // 检查三连对

          const liandui = findLiandui(sorted);
          if (liandui.length > 0) return true; // 同花顺（如果你支持）

          const tonghuashun = findFlushStraight(sorted);
          if (tonghuashun.length > 0) return true;
          return false;
        }

        _GameLogic.hasNaturalFormedGroups = hasNaturalFormedGroups;

        function hasfindThreeWithTwo(cards) {
          const result = [];
          const map = getCardCountMap(cards);
          const triples = [];
          const pairs = [];

          for (const list of map.values()) {
            if (list.length === 3) {
              triples.push([...list]);
            } else if (list.length === 2) {
              pairs.push([...list]);
            } else if (list.length > 3) {
              // 比如四张，可以拆成 3+1 参与三带
              triples.push(list.slice(0, 3));
            }
          }

          for (const tri of triples) {
            for (const pair of pairs) {
              const total = [...tri, ...pair]; // 保证三带二是完整 5 张牌，且两组牌点不同

              if (new Set(total.map(c => getCardSize(c))).size >= 2) {
                result.push(total);
              }
            }
          }

          return result;
        }

        function getHintList(handCards, targetCards) {
          const hintList = [];
          const targetType = GameLogic.getCardType(targetCards);
          const groupedCards = handCards;
          const targetRank = GameLogic.getCardSize(targetCards[0]); // ------------------ 单张 ------------------

          if (targetType === (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
            error: Error()
          }), GameDefine) : GameDefine).KIND_CARDS_1) {
            // 先找散牌中大于它的
            for (let i = groupedCards.length - 1; i >= 0; i--) {
              const group = groupedCards[i];

              if (group.length === 1 && GameLogic.getCardSize(group[0]) > targetRank) {
                hintList.push([group[0]]);
              }
            } // 没找到，再从对子中拆一张


            if (hintList.length === 0) {
              for (let i = groupedCards.length - 1; i >= 0; i--) {
                const group = groupedCards[i];

                if (group.length === 2) {
                  const card = group[0];

                  if (isSingleCardStronger(card, targetCards[0], (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                    error: Error()
                  }), GlobalData) : GlobalData).cardInfo.levelCard)) {
                    hintList.push([card]);
                  }
                }
              }
            }

            if (hintList.length === 0) {
              for (let i = groupedCards.length - 1; i >= 0; i--) {
                const group = groupedCards[i];

                if (group.length === 3) {
                  const card = group[0];

                  if (isSingleCardStronger(card, targetCards[0], (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
                    error: Error()
                  }), GlobalData) : GlobalData).cardInfo.levelCard)) {
                    hintList.push([card]);
                  }
                }
              }
            }

            if (hintList.length === 0) {
              for (let i = groupedCards.length - 1; i >= 0; i--) {
                const group = groupedCards[i];

                if (group.length >= 4) {
                  const bombs = GameLogic.newfindBombs(group);

                  if (bombs.length != 0) {
                    hintList.push(group);
                  }
                }
              }
            }
          } // ------------------ 对子 ------------------
          else if (targetType === (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
            error: Error()
          }), GameDefine) : GameDefine).KIND_CARDS_2) {
            for (const group of groupedCards) {
              if (group.length === 2 && GameLogic.getCardSize(group[0]) > targetRank) {
                hintList.push([...group]);
              }
            }
          } // ------------------ 三不带 ------------------
          else if (targetType === (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
            error: Error()
          }), GameDefine) : GameDefine).KIND_CARDS_3) {
            for (const group of groupedCards) {
              if (group.length === 3 && GameLogic.getCardSize(group[0]) > targetRank) {
                hintList.push([...group]);
              }
            }
          } // ------------------ 三带二 ------------------
          else if (targetType === (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
            error: Error()
          }), GameDefine) : GameDefine).KIND_CARDS_3_2) {
            for (const group of groupedCards) {
              if (group.length === 3 && GameLogic.getCardSize(group[0]) > targetRank) {
                // 找一个对子作为带牌
                const pair = groupedCards.find(g => g.length === 2 && g !== group);

                if (pair) {
                  hintList.push([...group, ...pair]);
                }
              }
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

        function newfindBombs(cards, levelRank = (_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
          error: Error()
        }), GlobalData) : GlobalData).cardInfo.levelCard) {
          const countMap = new Map();
          const bombs = []; // 分组点数

          for (const card of cards) {
            const rank = card % 16;
            if (!countMap.has(rank)) countMap.set(rank, []);
            countMap.get(rank).push(card);
          } // 红心级牌（逢人配）


          const heartCards = cards.filter(card => {
            const rank = card % 16;
            const color = Math.floor(card / 16);
            return rank === levelRank && color === 2;
          });
          const usedHearts = new Set();
          const sortedRanks = Array.from(countMap.keys()).sort((a, b) => b - a);

          for (const rank of sortedRanks) {
            const group = countMap.get(rank);
            const len = group.length;

            if (len >= 6) {
              bombs.push([...group]); // 六炸
            }

            if (len === 5) {
              bombs.push([...group]); // 五炸

              const heart = heartCards.find(h => !usedHearts.has(h));

              if (heart) {
                bombs.push([...group, heart]); // 五张 + 红心 = 六炸

                usedHearts.add(heart);
              }
            }

            if (len === 4) {
              bombs.push([...group]); // 四炸

              const availableHearts = heartCards.filter(h => !usedHearts.has(h));

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
              const heart = heartCards.find(h => !usedHearts.has(h));

              if (heart) {
                bombs.push([...group, heart]); // 四炸（3+红心）

                usedHearts.add(heart);
              }
            }
          } // ------------------ 王炸 ------------------


          const jokers = cards.filter(c => {
            const r = c % 16;
            return r === 14 || r === 15;
          });
          const smallJokers = jokers.filter(c => c % 16 === 14);
          const bigJokers = jokers.filter(c => c % 16 === 15);

          if (smallJokers.length >= 2 && bigJokers.length >= 2) {
            const kingBomb = [smallJokers[0], smallJokers[1], bigJokers[0], bigJokers[1]];
            bombs.push(kingBomb);
          }

          return bombs;
        }

        _GameLogic.newfindBombs = newfindBombs;

        function printCardDetails(cards, isServer = true) {
          const result = cards.map(group => {
            return group.map(card => {
              const color = Math.floor(card / 16); // 获取花色（通过除以16）

              const rank = card % 16; // 获取点数（通过取余16）

              return `[${getCardColorByName(color)} ${getCardRank(rank)}]`;
            });
          });
          console.log(JSON.stringify(result));
        }

        _GameLogic.printCardDetails = printCardDetails;

        function printCardList(cards) {
          const result = cards.map(card => {
            const color = Math.floor(card / 16); // 获取花色

            const rank = card % 16; // 获取点数

            return `[${getCardColorByName(color)}, ${getCardRank(rank)}]`;
          });
          console.log(`出牌>>>>{ ${result.join(', ')} }`);
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
//# sourceMappingURL=ca0db4e80f962bb439ae1988ad5f94145cc73328.js.map