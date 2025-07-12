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

        function getRemainCardsByDelete(value, deleteCards) {
          let delList = (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
            error: Error()
          }), utils) : utils).deepCopy(deleteCards);
          let remainCards = [];
          let deleteIdx = [];

          if ((_crd && GlobalData === void 0 ? (_reportPossibleCrUseOfGlobalData({
            error: Error()
          }), GlobalData) : GlobalData).cardInfo.cardDir) {
            for (let i = 0; i < value.length; i++) {
              let find = false;

              for (let j = 0; j < delList.length; j++) {
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
            let tmpList = [];
            let sameSizeList = GameLogic.getSameCardSizeList(value);

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
            }
          }

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

        function getSameCardSizeList(value) {
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

        _GameLogic.getSameCardSizeList = getSameCardSizeList;

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
//# sourceMappingURL=6ba6aae8c818ec5b79a7e71d7200ad6a67a36a95.js.map