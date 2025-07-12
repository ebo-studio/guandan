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

        function removeCards(from, remove) {
          const copy = [...from];

          for (const card of remove) {
            const idx = copy.findIndex(c => c === card);
            if (idx !== -1) copy.splice(idx, 1);
          }

          return copy;
        }

        _GameLogic.removeCards = removeCards;

        function groupByPoint(cards) {
          const map = new Map();

          for (let card of cards) {
            const point = getCardPoint(card);
            if (!map.has(point)) map.set(point, []);
            map.get(point).push(card);
          }

          return map;
        }

        _GameLogic.groupByPoint = groupByPoint;

        function autoSortCards(cards) {
          let result = [];
          let remaining = [...cards];
          const bombs = this.extractGroups(remaining, 4);
          result.push(...bombs.flat());
          remaining = this.removeCards(remaining, bombs.flat());
          const planesWithWings = this.extractPlanesWithWings(remaining);
          result.push(...planesWithWings.flat());
          remaining = this.removeCards(remaining, planesWithWings.flat());
          const triplesWithAttach = this.extractTriplesWithAttachments(remaining);
          result.push(...triplesWithAttach.flat());
          remaining = this.removeCards(remaining, triplesWithAttach.flat());
          const sameColorStraights = this.extractFlushStraights(remaining);
          result.push(...sameColorStraights.flat());
          remaining = this.removeCards(remaining, sameColorStraights.flat());
          const planes = this.extractplanes(remaining);
          result.push(...planes.flat());
          remaining = this.removeCards(remaining, planes.flat());
          const straights = this.extractStraights(remaining);
          result.push(...straights.flat());
          remaining = this.removeCards(remaining, straights.flat());
          const doubleSeq = this.extractDoubleSeq(remaining);
          result.push(...doubleSeq.flat());
          remaining = this.removeCards(remaining, doubleSeq.flat());
          const triples = this.extractGroups(remaining, 3);
          result.push(...triples.flat());
          remaining = this.removeCards(remaining, triples.flat());
          const pairs = this.extractGroups(remaining, 2);
          result.push(...pairs.flat());
          remaining = this.removeCards(remaining, pairs.flat());
          result.push(...remaining);
          return result;
        }

        _GameLogic.autoSortCards = autoSortCards;

        function extractGroups(cards, count) {
          const map = groupByPoint(cards);
          const res = [];
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
          const map = this.groupByPoint(cards);
          const points = Array.from(map.entries()).filter(([_, list]) => list.length >= 3 && this.getCardPoint(list[0]) < 15).map(([p]) => p).sort((a, b) => a - b);
          const results = [];
          let temp = [];

          for (let i = 0; i < points.length; i++) {
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
          const map = this.groupByPoint(cards);
          const tripPoints = Array.from(map.entries()).filter(([_, list]) => list.length >= 3 && this.getCardPoint(list[0]) < 15).map(([p]) => p).sort((a, b) => a - b);

          for (let i = 0; i < tripPoints.length - 1; i++) {
            const t1 = tripPoints[i],
                  t2 = tripPoints[i + 1];

            if (t2 === t1 + 1) {
              const trip1 = map.get(t1).slice(0, 3);
              const trip2 = map.get(t2).slice(0, 3);
              const exclude = [...trip1, ...trip2];
              const rest = cards.filter(c => !exclude.includes(c));
              const wings = Array.from(new Set(rest)).slice(0, 2);
              if (wings.length === 2) return [[...trip1, ...trip2, ...wings]];
              const pairMap = this.groupByPoint(rest);
              const pairs = [];

              for (const [_, list] of pairMap) {
                if (list.length >= 2) {
                  pairs.push(...list.slice(0, 2));
                  if (pairs.length >= 4) break;
                }
              }

              if (pairs.length >= 4) return [[...trip1, ...trip2, ...wings]];
            }
          }

          return [];
        }

        _GameLogic.extractPlanesWithWings = extractPlanesWithWings;

        function extractTriplesWithAttachments(cards) {
          const map = this.groupByPoint(cards);
          const results = [];
          const triples = Array.from(map.entries()).filter(([_, list]) => list.length === 3).map(([_, list]) => list.slice(0, 3));
          const used = new Set();

          for (const triple of triples) {
            const rest = cards.filter(c => !triple.includes(c) && !used.has(c));
            if (rest.length === 0) continue;
            const attach = rest[0];
            used.add(attach);
            results.push([...triple, attach]);
          }

          return results;
        }

        _GameLogic.extractTriplesWithAttachments = extractTriplesWithAttachments;

        function extractStraights(cards) {
          const map = this.groupByPoint(cards);
          const uniquePoints = Array.from(map.keys()).filter(p => p >= 3 && p <= 14) // 排除2、大小王
          .sort((a, b) => a - b);
          const results = [];
          let temp = [];

          for (let i = 0; i < uniquePoints.length; i++) {
            const point = uniquePoints[i];
            const cardList = map.get(point);

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
          const map = this.groupByPoint(cards); // 取所有能构成对子的点数

          const validPoints = Array.from(map.entries()).filter(([_, list]) => list.length >= 2 && this.getCardPoint(list[0]) <= 14).map(([p]) => p).sort((a, b) => a - b);
          const result = [];
          let temp = [];

          for (let i = 0; i < validPoints.length; i++) {
            const currPoint = validPoints[i];
            const cardsPair = map.get(currPoint).slice(0, 2); // 只取两个

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
          const colorMap = new Map();

          for (let card of cards) {
            const color = this.getCardColor(card);
            if (!colorMap.has(color)) colorMap.set(color, []);
            colorMap.get(color).push(card);
          }

          const result = [];

          for (const cards of colorMap.values()) {
            const pointMap = new Map();

            for (const c of cards) {
              const p = this.getCardPoint(c);
              if (p >= 3 && p <= 14) pointMap.set(p, c);
            }

            const points = Array.from(pointMap.keys()).sort((a, b) => a - b);
            let temp = [];

            for (let i = 0; i < points.length; i++) {
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
//# sourceMappingURL=f739a3cfb9bfc33416043764fac31aa7c22eafb8.js.map