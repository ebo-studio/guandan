import { utils } from "../../common/utils";
import { GlobalData } from "../../manager/GlobalData";
import { SoundManager } from "../../manager/SoundManager";
import { GameDefine } from "./GameDefine";
export module GameLogic {

    let userSelf: GameMsg.IUser = null;
    let userAll: GameMsg.IUser[] = [];
    let userMap: Map<number, GameMsg.IUser> = new Map<number, GameMsg.IUser>();

    //自己数据
    export function initSelfData(data: GameMsg.IUser) {
        userSelf = data;
    }
    export function getSelfData() {
        return userSelf;
    }
    export function initAllUsers(data: GameMsg.IUser[]) {
        userAll = data;
        userMap.clear();
        for (let i = 0; i < userAll.length; i++) {
            const element = userAll[i];
            userMap.set(element.id, element);
        }
    }
    export function getAllUsers() {
        return userAll;
    }
    export function getUserDataById(id: number) {
        let user: GameMsg.IUser = userMap.get(id);
        if (user) {
            return user;
        }
    }
    export function getUserViewIdById(id: number) {
        //测试
        if (false) {
            if (userMap.size == 0) {
                let item1 = new GameMsg.User()
                item1.id = 4;
                item1.index = 1;
                userMap.set(4, item1);
                userSelf = item1;

                let item2 = new GameMsg.User()
                item2.id = 5;
                item2.index = 2;
                userMap.set(5, item2);

                let item3 = new GameMsg.User()
                item3.id = 6;
                item3.index = 3;
                userMap.set(6, item3);

                let item4 = new GameMsg.User()
                item4.id = 7;
                item4.index = 4;
                userMap.set(7, item4);
            }
        }

        let user: GameMsg.IUser = userMap.get(id);
        if (user) {
            return switchChairIdToViewId(user.index);
        }
    }
    export function getUserViewIdByIndex(index: number) {
        return switchChairIdToViewId(index);
    }
    //C2V
    export function switchChairIdToViewId(chairId: number) {
        return (chairId - userSelf.index + GlobalData.MAXPLAYER + 1) % GlobalData.MAXPLAYER;
    }
    //V2C
    export function switchViewIdToChairId(viewId: number) {
        return (viewId + userSelf.index + GlobalData.MAXPLAYER) % GlobalData.MAXPLAYER;
    }
    //服务端和客户端定义不同,需要手动转一下
    //服务端要求1是红桃,其他不做要求
    //客户端 黑 红 梅 方
    //       3  2  1  0
    //C-S
    export function convertCardS2C(value: number) {
        let tmpColor = value % 10;
        let tmpSize = Math.floor(value / 10);
        //牌色转换
        if (tmpColor == 1) { tmpColor = 2 }//红
        else if (tmpColor == 2) { tmpColor = 0 }//方
        else if (tmpColor == 3) { tmpColor = 1 }//梅
        else if (tmpColor == 4) { tmpColor = 3 }//黑
        else if (tmpColor == 5) { tmpColor = 4 }//小王,大王
        //牌值转换
        if (tmpSize == 14) { tmpSize = 1 }
        else if (tmpSize == 15) { tmpSize = 14 }
        else if (tmpSize == 16) { tmpSize = 15 }

        return tmpColor * 16 + tmpSize;
    }
    export function convertCardListS2C(values: number[]) {
        if (values.length == 0) return [];
        let tmpList: number[] = [];
        let numList: number[] = utils.deepCopy(values);
        for (let i = 0; i < numList.length; i++) {
            tmpList.push(convertCardS2C(numList[i]));
        }

        // for (let i = 0; i < tmpList.length; i++) {
        //     let dd = tmpList[i].toString(16);
        //     console.log(dd);
        // }
        return tmpList;
    }
    //C-S
    export function convertCardC2S(value: number) {
        let tmpColor = Math.floor(value / 16);
        let tmpSize = value % 16;
        //牌色转换
        if (tmpColor == 2) { tmpColor = 1 }//红
        else if (tmpColor == 0) { tmpColor = 2 }//方
        else if (tmpColor == 1) { tmpColor = 3 }//梅
        else if (tmpColor == 3) { tmpColor = 4 }//黑
        else if (tmpColor == 4) { tmpColor = 5 }//小王,大王
        //牌值转换
        if (tmpSize == 1) { tmpSize = 14 }
        else if (tmpSize == 14) { tmpSize = 15 }
        else if (tmpSize == 15) { tmpSize = 16 }

        return tmpSize * 10 + tmpColor;
    }
    export function convertCardListC2S(values: number[]) {
        if (values.length == 0) return;
        let tmpList: number[] = [];
        let numList: number[] = utils.deepCopy(values);
        for (let i = 0; i < numList.length; i++) {
            tmpList.push(convertCardC2S(numList[i]));
        }

        // for (let i = 0; i < tmpList.length; i++) {
        //     let dd = tmpList[i];
        //     console.log(dd);
        // }
        // console.log("tmpList---> ", tmpList);
        return tmpList;
    }
    //胜利|失败 (1:队友放一起 2:自己胜利失败放前边)
    export function checkResult(datas: GameMsg.WinList) {
        let list: GameMsg.WinList = utils.deepCopy(datas);
        let isWin: boolean = false;
        let selfList: GameMsg.IResUser[] = [];
        let otherList: GameMsg.IResUser[] = [];
        let allList: GameMsg.IResUser[] = [];
        //自己输赢(头游的归属)
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
        return { isWin: isWin, list: allList }
    }
    //剔除提示牌一样的数据
    export function getOnlyValueList(list: number[][]) {
        let listStr: string[] = [];
        let tmpStr: string[] = [];
        let tmpRes: number[][] = [];
        for (let i = 0; i < list.length; i++) {
            const element = list[i];
            let str = utils.toJson(element);
            listStr.push(str);
        }
        tmpStr = listStr.filter((item, i, arr) => {
            return listStr.indexOf(item) == i;
        });
        for (let j = 0; j < tmpStr.length; j++) {
            let num: number[] = utils.fromJson(tmpStr[j]);
            tmpRes.push(num);
        }
        return tmpRes;
    }
    //牌值
    export function getSoundCardSize(value: number) {
        let card = value % 16;
        if (card == 1)
            return 14;
        else if (card == 14)
            return 15;
        else if (card == 15)
            return 16;
        return card;
    }
    // —— 牌型识别基础
    export function getCardPoint(value: number) {
        let card = value % 16;
        if (card === 1) return 14;
        if (card === GlobalData.cardInfo.levelCard) return 15;
        if (card === 14) return 16;
        if (card === 15) return 17;
        return card;
    }
    //牌值
    export function getCardSize(value: number) {
        let card = value % 16;
        if (card == 1)
            return 14;
        else if (card == GlobalData.cardInfo.levelCard)
            // 王>级牌>1
            return 15;
        else if (card == 14)
            return 16;
        else if (card == 15)
            return 17;
        return card;
    }
    //牌色
    export function getCardColor(value: number) {
        return Math.floor(value / 16);
    }
    //获取牌值
    export function getValueStr(paramValue: number) {
        let cardSize = paramValue % 16
        let sizeStr = ""
        if (cardSize == 10) { sizeStr = "a" }
        else if (cardSize == 11) { sizeStr = "b" }
        else if (cardSize == 12) { sizeStr = "c" }
        else if (cardSize == 13) { sizeStr = "d" }
        else if (cardSize == 14) { sizeStr = "e" }
        else if (cardSize == 15) { sizeStr = "f" }
        else { sizeStr = "" + cardSize };
        return sizeStr;
    }
    //音效
    export function playCardTypeMusic(type: number, cards?: number[]) {
        let url = "audio/card/"
        if (type == GameDefine.KIND_CARDS_1 || type == GameDefine.KIND_CARDS_2) {
            let size = GameLogic.getSoundCardSize(cards[0]);
            url = url + type + "/" + type + "_" + size;
        }
        else {
            url += type;
        }
        SoundManager.playSound(url, false);
    }
    //从大到小排序
    export function sortCardsBySizeDown(cards: number[], count: number) {
        if (count <= 0) {
            return [];
        }
        for (let i = 0; i < count; i++) {
            for (let j = i + 1; j < count; j++) {
                if (getCardSize(cards[i]) < getCardSize(cards[j])) {
                    let tempCard = cards[i];
                    cards[i] = cards[j];
                    cards[j] = tempCard;
                }
                else if (getCardSize(cards[i]) == getCardSize(cards[j])) {
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
    //从小到大排序
    export function sortCardsBySizeUp(cards: number[], count: number) {
        if (count <= 0) {
            return [];
        }
        for (let i = 0; i < count; i++) {
            for (let j = i + 1; j < count; j++) {
                if (getCardSize(cards[i]) > getCardSize(cards[j])) {
                    let tempCard = cards[i];
                    cards[i] = cards[j];
                    cards[j] = tempCard;
                }
                else if (getCardSize(cards[i]) == getCardSize(cards[j])) {
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

    //排序 多-少 小 -大 (333 444 6 7)
    export function sortCardsByCount(value: number[], count: number) {
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
                tempArr = [];
                //写入当前数据
                tempArr[tempArr.length] = value[i];
            }
        }
        //最后数据
        if (tempArr.length != 0) {
            resultArr[resultArr.length] = tempArr;
        }
        for (let i = 0; i < resultArr.length; i++) {
            for (let j = i + 1; j < resultArr.length; j++) {
                if (resultArr[i].length < resultArr[j].length) {
                    let temp = resultArr[i];
                    resultArr[i] = resultArr[j];
                    resultArr[j] = temp;
                }
                else if (resultArr[i].length == resultArr[j].length) {
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
    //排序 多-少 大 -小 (333 444 6 7)
    export function sortCardsByCountDown(value: number[], count: number) {
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
                tempArr = [];
                //写入当前数据
                tempArr[tempArr.length] = value[i];
            }
        }
        //最后数据
        if (tempArr.length != 0) {
            resultArr[resultArr.length] = tempArr;
        }
        for (let i = 0; i < resultArr.length; i++) {
            for (let j = i + 1; j < resultArr.length; j++) {
                if (resultArr[i].length < resultArr[j].length) {
                    let temp = resultArr[i];
                    resultArr[i] = resultArr[j];
                    resultArr[j] = temp;
                }
                else if (resultArr[i].length == resultArr[j].length) {
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
    //排序 少-多 小-大 (6 7 333 444)
    export function sortCardsByCountUp(value: number[], count: number) {
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
                tempArr = [];
                //写入当前数据
                tempArr[tempArr.length] = value[i];
            }
        }
        //最后数据
        if (tempArr.length != 0) {
            resultArr[resultArr.length] = tempArr;
        }
        for (let i = 0; i < resultArr.length; i++) {
            for (let j = i + 1; j < resultArr.length; j++) {
                if (resultArr[i].length > resultArr[j].length) {
                    let temp = resultArr[i];
                    resultArr[i] = resultArr[j];
                    resultArr[j] = temp;
                }
                else if (resultArr[i].length == resultArr[j].length) {
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
    export function getSortCard(cardList: number[]) {
        let count = cardList.length;
        let tempCards: number[] = [];
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
    //剔除固定牌值,返回剩余
    export function getRemainCardsByDelete(value: number[], deleteCards: number[], keepOrder: boolean = false, select: number[] = [], prevSelected: number[] = []) {
        let delList: number[] = utils.deepCopy(deleteCards);
        let remainCards = [];
        let deleteIdx: number[] = [];
        // if (GlobalData.cardInfo.cardDir) {
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
        let tmpList: number[] = [];

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
        }
        // }
        return { cards: remainCards, idxs: deleteIdx };
    }
    //获取唯一值  从大到小排序
    export function getUniqueCard(value: number[]) {
        let listNum: number[] = utils.deepCopy(value);
        let tmpList: number[] = [];
        for (let i = 0; i < listNum.length; i++) {
            const element = listNum[i];
            if (tmpList.length > 0) {
                let size = getCardSize(element);
                let find: boolean = false;
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
    //数组[[2,2],[3,3,3]] (从大到小)
    export function getSameCardSizeList(value: number[], keepOrder: boolean = false, select: number[] = [], prevSelected: number[] = []) {
        if (!keepOrder) {
            let tmpList: number[][] = [];
            let sortValue = sortCardsBySizeDown(value, value.length);
            let uniqueList = getUniqueCard(sortValue);
            let idx: number = 0;
            for (let j = 0; j < uniqueList.length; j++) {
                const d = uniqueList[j];
                let list1: number[] = [];
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
            }
            // console.log("tmpList---> ", tmpList);
            return tmpList;
        }
        // else {
        //     return moveSelectedCardsToBack(value, select, prevSelected, []);
        // }

    }

    function groupBySizeDown(value: number[]): number[][] {
        const tmpList: number[][] = [];
        const sortValue = sortCardsBySizeDown(value, value.length);
        const uniqueList = getUniqueCard(sortValue);
        let idx: number = 0;

        for (let j = 0; j < uniqueList.length; j++) {
            const d = uniqueList[j];
            const list1: number[] = [];

            for (let i = idx; i < sortValue.length; i++) {
                if (getCardSize(d) === getCardSize(sortValue[i])) {
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
        }

        return tmpList;
    }

    function findStraightByCard(cards: number[]): number[][] {
        const map = getCardCountMap(cards);
        const allRanks = Array.from(map.keys())
            .filter(r => r >= 3 && r <= 14) // 3~A
            .sort((a, b) => a - b);

        const results: number[][] = [];
        let temp: number[] = [];

        for (let i = 0; i < allRanks.length; i++) {
            const rank = allRanks[i];

            if (temp.length === 0 || rank === allRanks[i - 1] + 1) {
                temp.push(rank);
            } else {
                temp = [rank];
            }

            if (temp.length === 5) {
                // 构建5张对应的原牌值
                let group: number[] = [];
                for (let r of temp) {
                    // 从 map 中拿出当前 rank 的任意一张
                    const list = map.get(r);
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
    }

    // ✅ 连对识别（返回一个 number[][]，可能多个连对组）
    function findLiandui(cards: number[]): number[][] {
        const map = getCardCountMap(cards);
        const rankToPair = new Map<number, number[]>();

        // 仅保留对子
        for (const [rank, list] of map.entries()) {
            if (list.length === 2 && rank >= 3 && rank <= 14) {
                rankToPair.set(rank, [...list]);
            }
        }

        const ranks = Array.from(rankToPair.keys()).sort((a, b) => a - b);
        const results: number[][] = [];

        let temp: number[][] = [];
        for (let i = 0; i <= ranks.length; i++) {
            if (
                temp.length === 0 ||
                (i < ranks.length && ranks[i] === getCardSize(temp[temp.length - 1][0]) + 1)
            ) {
                if (i < ranks.length) temp.push(rankToPair.get(ranks[i])!);
            } else {
                if (temp.length >= 3) {
                    results.push(temp.flat());
                    temp = i < ranks.length ? [rankToPair.get(ranks[i])!] : [];
                } else {
                    temp = i < ranks.length ? [rankToPair.get(ranks[i])!] : [];
                }
            }
        }

        return results;
    }

    function findFeiji(cards: number[]): number[][] {
        const map = getCardCountMap(cards);
        const triplets: number[] = [];

        // 取出所有三张相同点数的牌
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
        }

        // 组装飞机
        const result: number[][] = [];
        for (let rank of triplets) {
            result.push([rank, rank, rank]);
        }

        return result;
    }

    export function removeOutCardsFromGrouped(grouped: number[][], outCards: number[]): number[][] {
        const outSet = new Set(outCards);
        const newGrouped: number[][] = [];

        for (let group of grouped) {
            const rest = group.filter(c => !outSet.has(c));
            if (rest.length > 0) {
                newGrouped.push(rest);
            }
        }

        return newGrouped;
    }


    export function clearSelectedHistory() {
        selectedHistory = [];
    }

    let selectedHistory: number[] = []
    export function moveSelectedCardsToBack(cards: number[], selected: number[], prevSelected: number[], prevGrouped: number[][]): number[][] {
        const result: number[][] = [];
        const moveToBack: number[][] = [];
        const selectedSet = new Set(selected);
        const prevSet = new Set(prevSelected);
        const usedCards = new Set<number>();

        // ✅ 步骤1：保留旧分组中未重新选中的牌（保持顺序）
        for (const group of prevGrouped) {
            if (!group.some(c => selectedSet.has(c))) {
                result.push(group);
                group.forEach(c => usedCards.add(c));
            }
        }

        // ✅ 步骤2：识别这次新选中的三带二组合（只识别当前选中的）
        let triple: number[] = [];
        let pair: number[] = [];

        const map = getCardCountMap(selected);
        for (const list of map.values()) {
            if (list.length === 3) triple = list;
            else if (list.length === 2) pair = list;
        }

        if (triple.length === 3 && pair.length === 2) {
            const group = [...triple, ...pair];
            moveToBack.push(group);
            group.forEach(c => usedCards.add(c));
        }

        // ✅ 步骤3：识别飞机
        const triplets = findFeiji(selected.filter(c => !usedCards.has(c)));
        for (let group of triplets) {
            moveToBack.push(group);
            group.forEach(c => usedCards.add(c));
        }

        const straights = findStraightByCard(selected.filter(c => !usedCards.has(c)));
        for (let s of straights) {
            moveToBack.push(s);
            s.forEach(c => usedCards.add(c));
        }

        // ✅ 连对识别
        const lianduiGroups = findLiandui(selected.filter(c => !usedCards.has(c)));
        for (let group of lianduiGroups) {
            moveToBack.push(group);
            group.forEach(c => usedCards.add(c));
        }

        // ✅ 步骤3：将剩余未处理的牌按点数分组
        const remaining = cards.filter(card => !usedCards.has(card));
        const sortValue = sortCardsBySizeDown(remaining, remaining.length);
        const uniqueList = getUniqueCard(sortValue);
        let idx = 0;

        for (let j = 0; j < uniqueList.length; j++) {
            const d = uniqueList[j];
            const rank = getCardSize(d);
            let list1: number[] = [];

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

        return result.concat(moveToBack);
    }

    export function getCardGroupsByOrder(cards: number[]): number[][] {
        const groupList: number[][] = [];
        let temp: number[] = [];

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

    export function getCardTypeByFeiji(cards: number[]): number {
        if (cards.length >= 6 && cards.length % 3 === 0) {
            const map = getCardCountMap(cards);
            const triplets: number[] = [];

            // 取出所有三张相同点数的牌
            for (const [rank, list] of map.entries()) {
                if (rank < 3 || rank > 14) return GameDefine.KIND_CARDS_ERROR; // 不能包含2和王
                if (list.length === 3) {
                    triplets.push(rank);
                }
            }

            // 飞机需要至少 2 组三张牌
            if (triplets.length < 2) return GameDefine.KIND_CARDS_ERROR;

            // 牌的点数需要连续
            triplets.sort((a, b) => a - b);
            for (let i = 1; i < triplets.length; i++) {
                if (triplets[i] !== triplets[i - 1] + 1) {
                    return GameDefine.KIND_CARDS_ERROR; // 非连续
                }
            }

            return GameDefine.KIND_CARDS_SHUNZI_3; // ✅ 飞机
        }
    }

    export function getCardTypeByLiandui(cards: number[]): number {
        // 连对（对子连续 >= 3 对）
        if (cards.length >= 6 && cards.length % 2 === 0) {
            const map = getCardCountMap(cards);
            const pairRanks: number[] = [];

            for (const [rank, list] of map.entries()) {
                if (rank < 3 || rank > 14) return GameDefine.KIND_CARDS_ERROR; // 排除2和王
                if (list.length === 2) {
                    pairRanks.push(rank);
                } else {
                    return GameDefine.KIND_CARDS_ERROR; // 不满足连对
                }
            }

            // 确保有足够的对子
            if (pairRanks.length * 2 !== cards.length) return GameDefine.KIND_CARDS_ERROR;

            // 判断是否连续
            pairRanks.sort((a, b) => a - b);
            for (let i = 1; i < pairRanks.length; i++) {
                if (pairRanks[i] !== pairRanks[i - 1] + 1) {
                    return GameDefine.KIND_CARDS_ERROR; // 非连续
                }
            }

            return GameDefine.KIND_CARDS_SHUNZI_2; // ✅ 连对
        }
    }

    export function getCardType(cards: number[]): number {
        // 示例：你可能已有类似逻辑，请替换成实际逻辑
        if (cards.length === 1) return GameDefine.KIND_CARDS_1;
        if (cards.length === 2 && getCardSize(cards[0]) === getCardSize(cards[1])) {
            return GameDefine.KIND_CARDS_2;
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
                return GameDefine.KIND_CARDS_3_2;
            }
        }

        // 飞机（需要至少2组三张牌且连续）






        // ✅ 顺子判断（支持长度 >= 5）
        if (cards.length >= 5) {
            const rankSet = new Set<number>();
            for (let card of cards) {
                const rank = getCardSize(card);
                if (rank < 3 || rank > 14) return GameDefine.KIND_CARDS_ERROR; // 不能包含2和王
                rankSet.add(rank);
            }

            if (rankSet.size !== cards.length) return GameDefine.KIND_CARDS_ERROR; // 有重复点数

            const ranks = Array.from(rankSet).sort((a, b) => a - b);
            for (let i = 1; i < ranks.length; i++) {
                if (ranks[i] !== ranks[i - 1] + 1) {
                    return GameDefine.KIND_CARDS_ERROR; // 非连续
                }
            }

            return GameDefine.KIND_CARDS_SHUNZI_1; // ✅ 顺子
        }
        // ... 判断三带、顺子、连对、炸弹等
        return GameDefine.KIND_CARDS_ERROR;
    }


    export function autoSortCards(cards: number[]): number[][] {
        const result: number[][] = [];       // 固定牌型 + 对子/单张
        const randomPart: number[][] = [];   // 飞机/顺子/连对/三带二
        const used = new Set<number>();

        const usedForRandom = new Set<number>(); // 用于随机牌型的已用牌

        // 辅助方法：将已使用的牌加入结果
        function addGroup(groups: number[][], toResult = true, isRandom = false) {
            for (const g of groups) {
                (toResult ? result : randomPart).push(g);
                g.forEach(c => {
                    used.add(c);  // 固定牌型使用的牌
                    if (isRandom) usedForRandom.add(c); // 随机牌型使用的牌
                });
            }
        }

        const getRemain = (isRandom: boolean = false) => {
            return cards.filter(c => (isRandom ? !usedForRandom.has(c) && !used.has(c) : !used.has(c)));  // 判断是否已经用过
        };

        // ✅ 固定牌型优先处理
        addGroup(findWangzha(getRemain()));         // 王炸
        addGroup(findZ(getRemain(), 6));         // 六炸
        addGroup(findTonghuashun(getRemain()));     // 同花顺
        addGroup(findZ(getRemain(), 5));         // 五炸
        addGroup(findZ(getRemain(), 4));         // 四炸

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
        addGroup(findAllSingles(getRemain(true)));

        // ✅ 最终拼接
        return result.concat(randomPart);
        // const result: number[][] = [];       // 固定牌型 + 对子/单张
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

    export function findWangzha(cards: number[]): number[][] {
        const map = getCardCountMap(cards);
        const result: number[][] = [];

        for (const [rank, list] of map.entries()) {
            if ((rank === 16 || rank === 17) && list.length >= 2) {
                // 16: 小王，17: 大王
                result.push(list.slice(0, 2)); // 两张王算一个炸弹
            }
        }

        return result;
    }

    export function findTonghuashun(cards: number[]): number[][] {
        const mapByColor: Map<number, number[]> = new Map();

        for (let card of cards) {
            const color = Math.floor(card / 16);
            if (!mapByColor.has(color)) {
                mapByColor.set(color, []);
            }
            mapByColor.get(color).push(card);
        }

        const result: number[][] = [];

        for (let colorCards of mapByColor.values()) {
            if (colorCards.length < 5) continue;

            const ranksMap: Map<number, number[]> = new Map();
            for (let card of colorCards) {
                const rank = getCardSize(card);
                if (rank < 3 || rank > 14) continue; // 不能包含2或王
                if (!ranksMap.has(rank)) ranksMap.set(rank, []);
                ranksMap.get(rank).push(card);
            }

            const ranks = Array.from(ranksMap.keys()).sort((a, b) => a - b);

            let start = 0;
            while (start <= ranks.length - 5) {
                let group: number[] = [];
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

    export function findZ(cards: number[], n: number): number[][] {
        const result: number[][] = [];
        const map = getCardCountMap(cards); // 牌点数 -> 对应的牌数组

        for (const list of map.values()) {
            if (list.length === n) {
                result.push([...list]);
            }
        }

        return result;
    }

    function findThreeWithTwoBy(cards: number[], usedIndex: Set<number> = new Set(), maxCount = 2): number[][] {
        const result: number[][] = [];
        const countMap = new Map<number, number[]>();

        // 分组：按点数归类（排除大小王、参谋、非红桃级牌2）
        for (const card of cards) {
            const rank = card % 16;
            const color = Math.floor(card / 16);

            if ((rank === GlobalData.cardInfo.levelCard && color !== 0) || rank <= 1 || rank >= 14) continue;

            if (!countMap.has(rank)) countMap.set(rank, []);
            countMap.get(rank)!.push(card);
        }

        const triples = Array.from(countMap.entries())
            .filter(([_, list]) => list.length >= 3)
            .sort((a, b) => a[0] - b[0]);  // 三张牌点数升序

        const pairs = Array.from(countMap.entries())
            .filter(([_, list]) => list.length >= 2)
            .sort((a, b) => a[0] - b[0]);  // 对子牌点数升序

        const used = new Set<number>(); // 避免重复使用同一张牌

        for (const [tripleRank, tripleCards] of triples) {
            const triple = tripleCards.filter(c => !used.has(c) && !usedIndex.has(cards.indexOf(c)));
            if (triple.length < 3) continue;

            for (const [pairRank, pairCards] of pairs) {
                if (pairRank === tripleRank) continue;

                const pair = pairCards.filter(c => !used.has(c) && !usedIndex.has(cards.indexOf(c)));
                if (pair.length < 2) continue;

                const group = [
                    triple[0], triple[1], triple[2],
                    pair[0], pair[1]
                ];

                // 标记为已使用
                [triple[0], triple[1], triple[2], pair[0], pair[1]].forEach(c => used.add(c));
                result.push(group);
                break; // 每组三带二只找一个对子
            }

            if (result.length >= maxCount) {
                return result;
            };
        }

        return result; // 如果只找到一组也返回，不为空就行
    }

    function findThreeWithTwo(cards: number[], usedIndex: Set<number>, maxCount: number = 1): number[][] {
        const countMap = new Map<number, number[]>();

        // 分组：按点数归类（排除特殊点数：大小王、参谋、级牌 2）
        for (const card of cards) {
            const rank = card % 16;
            if (rank <= GlobalData.cardInfo.levelCard || rank >= 14) continue;  // ❌ 排除 2、大王、小王、参谋
            if (!countMap.has(rank)) countMap.set(rank, []);
            countMap.get(rank)!.push(card);
        }

        // 找到所有满足条件的三张、对子
        const triples = Array.from(countMap.entries())
            .filter(([_, list]) => list.length >= 3)
            .sort((a, b) => a[0] - b[0]); // 最小的三张优先

        const pairs = Array.from(countMap.entries())
            .filter(([_, list]) => list.length >= 2)
            .sort((a, b) => a[0] - b[0]); // 最小的对子优先

        // 尝试组合三带二（点数不同）
        for (const [tripleRank, tripleCards] of triples) {
            for (const [pairRank, pairCards] of pairs) {
                if (tripleRank !== pairRank) {
                    return [[
                        ...tripleCards.slice(0, 3),
                        ...pairCards.slice(0, 2),
                    ]];
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

    export function shuffleArray<T>(arr: T[]): T[] {
        const result = arr.slice(); // 拷贝原数组，避免修改原数组
        for (let i = result.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [result[i], result[j]] = [result[j], result[i]]; // 交换
        }
        return result;
    }




    export function getOneCardSizeList(value: number[]) {
        const tmpList: number[][] = [];
        const sortValue = sortCardsBySizeDown(value, value.length);
        const uniqueList = getUniqueCard(sortValue);
        let idx = 0;

        for (let j = 0; j < uniqueList.length; j++) {
            const d = uniqueList[j];
            const list1: number[] = [];
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
        }

        // 🎯 提取所有对子
        const pairs: number[][] = tmpList.filter(g => g.length === 2);
        const otherGroups: number[][] = tmpList.filter(g => g.length !== 2);

        const pairPoints = pairs.map(g => getCardSize(g[0])).sort((a, b) => a - b);

        // ✅ 找到所有连对片段
        const lianDuiList: number[][] = [];
        let temp: number[][] = [];

        for (let i = 0; i < pairs.length; i++) {
            if (temp.length === 0) {
                temp.push(pairs[i]);
            } else {
                const last = getCardSize(temp[temp.length - 1][0]);
                const current = getCardSize(pairs[i][0]);
                if (current === last + 1 && current < 15) { // 连续且不含2或王
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
        }

        // ❗ 去掉被合并成连对的对子
        const usedPairs = new Set(lianDuiList.flat());
        const remainingPairs = pairs.filter(pair => !usedPairs.has(pair[0]));

        // 合并对子和其他剩余牌
        const remainCards = [...remainingPairs.flat(), ...otherGroups.flat()];
        // 升序排序用于识别顺子
        const sortedRemain = sortCardsBySizeUp(remainCards, remainCards.length);


        // 找顺子（必须点数连续、点数不能 ≥ 15）
        const findStraightGroups = (cards: number[]): number[][] => {
            const result: number[][] = [];
            const unique = getUniqueCard(cards).filter(c => {
                const s = getCardSize(c);
                return s >= 3 && s <= 14;
            });
            let temp: number[] = [];

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

        const straightList = findStraightGroups(sortedRemain);

        // 剔除被用作顺子的牌
        const usedStraight = new Set(straightList.flat());
        const remainAfterStraight = sortedRemain.filter(c => !usedStraight.has(c));
        const remainSingleList: number[][] = remainAfterStraight.map(c => [c]);

        const tmpAll: number[][] = [
            ...straightList,        // 顺子
            ...lianDuiList,         // 连对
            ...remainingPairs,      // 单对
            ...otherGroups,         // 其他炸弹、三张
            ...remainSingleList     // 剩余单牌
        ];

        // // 重组 tmpList：连对 + 剩余对子 + 其他
        // tmpList.length = 0;
        // tmpList.push(...lianDuiList);
        // tmpList.push(...remainingPairs);
        // tmpList.push(...otherGroups);

        // // 🔽 排序：按权重（加入连对=45）
        tmpList.sort((a, b) => getGroupPower(b) - getGroupPower(a));
        return tmpList;
    }

    // function isStraight(sizes: number[]): boolean {
    //     if (sizes.length < 5) return false;
    //     for (let i = 1; i < sizes.length; i++) {
    //         if (sizes[i] !== sizes[i - 1] + 1) return false;
    //         if (sizes[i] >= 15) return false; // 顺子不能包含 2（15）或王
    //     }
    //     return true;
    // }

    function getGroupPower(cards: number[]): number {
        const size = cards.length;

        // 四王炸
        const sizes = cards.map(getCardSize).sort((a, b) => a - b);
        const kingCount = sizes.filter(s => s === 14 || s === 15).length;
        if (size === 4 && kingCount === 4) return 100;

        if (size >= 6 && isAllSameSize(cards)) return 90;
        if (size === 5 && isAllSameSize(cards)) return 80;
        if (size === 4 && isAllSameSize(cards)) return 60;
        if (size >= 5 && isStraight(sizes)) {
            return isSameSuitStraight(cards) ? 70 : 40; // 顺子
        }
        // 连对判断：偶数张，都是对子，点数连续
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

    function isAllSameSize(cards: number[]) {
        const size = getCardSize(cards[0]);
        return cards.every(c => getCardSize(c) === size);
    }


    function getGroupRank(cards: number[]): number {
        const size = cards.length;

        // 四王（两个大王两个小王）
        if (size === 4 && isFourKings(cards)) return 100;
        if (size >= 6) return 90;
        if (isSameSuitStraight(cards)) return 80;
        if (size === 5) return 70;
        if (size === 4) return 60;
        if (size === 3) return 50;
        if (size === 2) return 40;
        return 10;
    }

    function isFourKings(cards: number[]): boolean {
        const sizes = cards.map(getCardSize);
        const colors = cards.map(getCardColor);
        const kingCount = sizes.filter(s => s === 14 || s === 15).length;
        return kingCount === 4;
    }

    // 判断是否同花顺（5张及以上、顺子且同花）
    export function isSameSuitStraight(cards: number[]): boolean {
        if (cards.length < 5) return false;

        const sizes = cards.map(getCardSize).sort((a, b) => a - b);
        const color = getCardColor(cards[0]);
        for (let i = 1; i < cards.length; i++) {
            if (getCardColor(cards[i]) !== color) return false;
            if (sizes[i] !== sizes[i - 1] + 1) return false;
        }
        return true;
    }

    export function isStraight(cards: number[]): boolean {
        if (cards.length < 5) return false; // 顺子至少需要5张牌

        const map = getCardCountMap(cards);
        const rankSet = new Set<number>();

        // 过滤掉2和大小王
        for (let card of cards) {
            const rank = getCardSize(card);
            if (rank >= 3 && rank <= 14) {  // 只考虑3到A的牌
                rankSet.add(rank);
            }
        }

        // 顺子必须没有重复的牌
        if (rankSet.size !== cards.length) return false;

        // 顺子的牌必须连续
        const ranks = Array.from(rankSet).sort((a, b) => a - b);
        for (let i = 1; i < ranks.length; i++) {
            if (ranks[i] !== ranks[i - 1] + 1) {
                return false; // 非连续
            }
        }

        return true;  // 顺子
    }

    export function isWangzha(cards: number[]): boolean {
        const map = getCardCountMap(cards);

        const hasBig = map.get(17)?.length >= 1;  // 大王
        const hasSmall = map.get(16)?.length >= 1; // 小王

        // 判断是否为王炸（大王 + 小王）
        if (hasBig && hasSmall) {
            return true;  // 王炸
        }

        // 判断是否为四王炸（两张大王 + 两张小王）
        if (map.get(17)?.length >= 2 && map.get(16)?.length >= 2) {
            return true;  // 四王炸
        }

        // 判断是否为双王炸（两张相同的大王或两张相同的小王）
        if (map.get(17)?.length >= 2 || map.get(16)?.length >= 2) {
            return true;  // 双王炸
        }

        return false;  // 其他情况都不是王炸
    }



    export function isLiandui(cards: number[]): boolean {
        if (cards.length < 6 || cards.length % 2 !== 0) return false; // 连对必须是偶数张，且至少 6 张

        const map = getCardCountMap(cards);
        const pairRanks: number[] = [];

        // 获取所有对子的牌点
        for (const [rank, list] of map.entries()) {
            if (rank < 3 || rank > 14) continue;  // 排除 2 和大小王
            if (list.length === 2) {
                pairRanks.push(rank);  // 记录有效的对子
            }
        }

        // 必须有足够的对子
        if (pairRanks.length * 2 !== cards.length) return false;

        // 判断对子是否连续
        pairRanks.sort((a, b) => a - b);
        for (let i = 1; i < pairRanks.length; i++) {
            if (pairRanks[i] !== pairRanks[i - 1] + 1) {
                return false; // 非连续
            }
        }

        return true;  // 连对
    }

    export function isThreeWithTwo(cards: number[]): boolean {
        const map = getCardCountMap(cards);  // 获取每种牌的数量分布

        let hasThree = false;
        let pairCount = 0;
        let singleCount = 0;

        // 遍历所有牌，统计三张相同的牌、对子、单张牌的数量
        for (const [rank, list] of map.entries()) {
            if (rank < 3 || rank > 14) continue; // 排除 2 和 大小王
            if (list.length === 3) {
                hasThree = true;  // 找到三张相同的牌
            } else if (list.length === 2) {
                pairCount++;  // 找到一对
            } else if (list.length === 1) {
                singleCount++;  // 找到单牌
            }
        }

        // 三张相同的牌 + 至少一对或者两张单牌
        return hasThree && (pairCount >= 1 || singleCount >= 2);
    }

    /** 按点值分组 */
    export function getCardCountMap(cards: number[]): Map<number, number[]> {
        const map = new Map<number, number[]>();
        for (const card of cards) {
            const rank = card % 16;
            if (!map.has(rank)) {
                map.set(rank, []);
            }
            map.get(rank)!.push(card);
        }
        return map;
    }

    export function findBombs(cards: number[]): number[][] {
        const map = this.getCardCountMap(cards);
        const results: number[][] = [];

        // 双王炸
        const jokers = cards.filter(c => c % 16 >= 15);
        if (jokers.length === 2) {
            results.push(jokers);
        }

        // 4张炸 + 6炸
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

    /**
     * 判断是否六炸跟五炸
     * @param cards 
     * @param n 
     * @returns 
     */
    export function isNBomb(cards: number[], n: number): boolean {
        if (cards.length !== n) return false;
        const size = getCardSize(cards[0]);
        return cards.every(card => getCardSize(card) === size);
    }

    export function findRocket(cards: number[]): number[][] {
        const smallKings = cards.filter(c => c % 16 === 14);
        const bigKings = cards.filter(c => c % 16 === 15);
        const allKings = [...smallKings, ...bigKings];

        const result: number[][] = [];

        // 四王炸：任意四张王
        if (allKings.length >= 4) {
            result.push(allKings.slice(0, 4));
        }
        // 双王炸：2张小王 + 2张大王
        else if (smallKings.length >= 2 && bigKings.length >= 2) {
            result.push([smallKings[0], smallKings[1], bigKings[0], bigKings[1]]);
        }
        // 单王炸：1张小王 + 1张大王
        else if (smallKings.length >= 1 && bigKings.length >= 1) {
            result.push([smallKings[0], bigKings[0]]);
        }

        return result;
    }

    /**
 * 查找指定张数的炸弹（如四炸、五炸、六炸）
 * @param cards - 要查找的牌
 * @param count - 炸弹张数（如 4、5、6）
 * @returns 牌组数组，每组为 count 张相同点数的牌
 */
    export function findBombsByCount(cards: number[], count: number): number[][] {
        const map = new Map<number, number[]>();

        for (const card of cards) {
            const rank = card % 16;
            if (!map.has(rank)) {
                map.set(rank, []);
            }
            map.get(rank).push(card);
        }

        const result: number[][] = [];
        for (const group of map.values()) {
            if (group.length >= count) {
                // 若多于 count 张相同牌，可以拆出多组炸弹
                for (let i = 0; i + count <= group.length; i += count) {
                    result.push(group.slice(i, i + count));
                }
            }
        }

        return result;
    }

    function flatten(arr: number[][]): number[] {
        const result: number[] = [];
        for (const group of arr) {
            result.push(...group);
        }
        return result;
    }

    /** 一键理牌主函数 */
    export function smartSortCards(cards: number[]): number[][] {
        // const mainResult: number[][] = [];     // 主牌型区（固定优先级）
        // const randomPart: number[][] = [];     // 飞机、连对、顺子、三带二等
        // const used = new Set<number>();

        // // const pushAndMark = (group: number[], toMain: boolean = true) => {
        // //     (toMain ? mainResult : randomPart).push(group);
        // //     group.forEach(card => used.add(card));
        // // };

        // // const getUnused = () => cards.filter(c => !used.has(c));
        // const usedIndex = new Set<number>();
        // const getUnused = () =>
        //     cards.filter((_, idx) => !usedIndex.has(idx));

        // const pushAndMark = (group: number[], toMain = true) => {
        //     const realGroup: number[] = [];
        //     for (const g of group) {
        //         const idx = cards.findIndex((c, i) => c === g && !usedIndex.has(i));
        //         if (idx !== -1) {
        //             usedIndex.add(idx);
        //             realGroup.push(cards[idx]);
        //         }
        //     }
        //     if (realGroup.length > 0) {
        //         (toMain ? mainResult : randomPart).push(realGroup);
        //     }
        // };

        // // 0. 王炸
        // findRocket(getUnused()).forEach(g => pushAndMark(g));

        // // 1. 六炸
        // findBombsByCount(getUnused(), 6).forEach(g => pushAndMark(g));

        // // 2. 同花顺
        // findFlushStraight(getUnused()).forEach(g => pushAndMark(g));

        // // 3. 五炸
        // findBombsByCount(getUnused(), 5).forEach(g => pushAndMark(g));

        // // 4. 四炸
        // findBombsByCount(getUnused(), 4).forEach(g => pushAndMark(g));


        // // ------- 以下为杂牌型，最后追加 -------
        // // 飞机（不带）
        // findPlane(getUnused()).forEach(g => pushAndMark(g, false));

        // // 连对
        // findChainPairs(getUnused()).forEach(g => pushAndMark(g, false));

        // // 顺子
        // findStraight(getUnused()).forEach(g => pushAndMark(g, false));

        // // 三带二
        // findThreeWithTwo(getUnused()).forEach(g => pushAndMark(g, false));


        // // 5. 对子
        // findPair(getUnused()).forEach(g => pushAndMark(g));

        // // 6. 单张
        // getUnused().forEach(c => pushAndMark([c]));

        // // mainResult = getSameCardSizeList(mainResult,);

        // const randomList = groupBySizeDown(flatten(randomPart));

        // console.log("理牌分组：", mainResult.concat(randomList));
        // return mainResult.concat(randomPart); // 返回最终理牌结果

        const mainResult: number[][] = [];  // 固定牌型
        const randomPart: number[][] = [];  // 飞机/连对/顺子/三带二
        const usedIndex = new Set<number>(); // 避免重复用相同牌

        const getUnused = () => cards.filter((_, idx) => !usedIndex.has(idx));

        const pushAndMark = (group: number[], toMain = true) => {
            const realGroup: number[] = [];
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
        };

        // 固定牌型优先
        findRocket(getUnused()).forEach(g => pushAndMark(g));           // 王炸
        findBombsByCount(getUnused(), 6).forEach(g => pushAndMark(g));  // 六炸
        findFlushStraight(getUnused()).forEach(g => pushAndMark(g));    // 同花顺
        findBombsByCount(getUnused(), 5).forEach(g => pushAndMark(g));  // 五炸
        findBombsByCount(getUnused(), 4).forEach(g => pushAndMark(g));  // 四炸

        // ===== 杂牌型，放在后面 =====
        const straightList = findStraight(getUnused());

        if (straightList.length === 1) {
            straightList.forEach(g => pushAndMark(g, false)); // 顺子
            findThreeWithTwo(getUnused(), usedIndex).forEach(g => pushAndMark(g, false)); // 三带二
        } else if (straightList.length === 0) {
            findThreeWithTwoBy(getUnused(), usedIndex, 2).forEach(g => pushAndMark(g, false)); // 三带二（尽可能两组）
        } else {
            straightList.forEach(g => pushAndMark(g, false)); // 所有顺子
        }


        // findPlane(getUnused()).forEach(g => pushAndMark(g, false));        // 飞机（不带）
        // findChainPairs(getUnused()).forEach(g => pushAndMark(g, false));   // 连对

        // const usedIndex = new Set<number>();


        // ===== 剩余散牌，按点数从大到小排列 =====
        const scatter = getUnused();
        const sortValue = sortCardsBySizeDown(scatter, scatter.length);
        const uniqueList = getUniqueCard(sortValue);
        let idx = 0;
        for (let j = 0; j < uniqueList.length; j++) {
            const d = uniqueList[j];
            let list1: number[] = [];
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

    function minRank(group: number[]): number {
        return Math.min(...group.map(getCardSize));
    }

    function maxRank(group: number[]): number {
        return Math.max(...group.map(getCardSize));
    }

    /** 查找同花顺（同一花色的顺子，至少5张） */
    export function findFlushStraight(cards: number[]): number[][] {
        const colorMap = new Map<number, number[]>();

        for (const card of cards) {
            const rank = card % 16;
            const color = Math.floor(card / 16);
            if (rank < 3 || rank > 14) continue;

            if (!colorMap.has(color)) colorMap.set(color, []);
            colorMap.get(color).push(card);
        }

        const result: number[][] = [];

        for (const group of colorMap.values()) {
            // 分析同花色牌
            const rankMap = new Map<number, number[]>();
            for (const card of group) {
                const rank = card % 16;
                if (!rankMap.has(rank)) rankMap.set(rank, []);
                rankMap.get(rank).push(card);
            }

            const ranks = Array.from(rankMap.keys()).sort((a, b) => a - b);

            for (let i = 0; i <= ranks.length - 5; i++) {
                const seq = ranks.slice(i, i + 5);
                let isConsecutive = true;
                for (let j = 1; j < 5; j++) {
                    if (seq[j] !== seq[j - 1] + 1) {
                        isConsecutive = false;
                        break;
                    }
                }

                if (isConsecutive) {
                    const straight: number[] = [];
                    for (const rank of seq) {
                        straight.push(rankMap.get(rank).pop());
                        if (rankMap.get(rank).length === 0) rankMap.delete(rank);
                    }
                    result.push(straight);
                    i += 4;
                }
            }
        }

        return result;
    }

    /** 查找飞机（三顺） */
    export function findPlane(cards: number[]): number[][] {
        const map = new Map<number, number[]>();

        // 建立 rank -> [cards] 映射（排除大小王）
        // 牌色用 Math.floor(card / 16)，牌点用 card % 16
        for (const card of cards) {
            const rank = card % 16;
            const color = Math.floor(card / 16);

            // 排除大小王
            if (rank >= 14 || rank <= 1) continue;

            // 排除非红桃的级牌（2）
            if (rank === GlobalData.cardInfo.levelCard && color !== 0) continue;

            if (!map.has(rank)) {
                map.set(rank, []);
            }
            map.get(rank)!.push(card);
        }

        // 提取所有 rank 满足 >=3 的三张牌，按点数升序排序
        const ranks = Array.from(map.keys())
            .filter(rank => map.get(rank)!.length >= 3)
            .sort((a, b) => a - b);

        const result: number[][] = [];

        let i = 0;
        while (i < ranks.length - 1) {
            const first = ranks[i];
            const second = ranks[i + 1];

            if (second === first + 1) {
                // ✅ 找到第一组连续的两连飞机
                const plane: number[] = [];
                plane.push(...map.get(first)!.slice(0, 3));
                plane.push(...map.get(second)!.slice(0, 3));
                result.push(plane);
                break; // 只要最小的一组两连飞机
            }

            i++;
        }

        return result;
    }

    /** 查找连对（三个及以上连续对子） */
    export function findChainPairs(cards: number[]): number[][] {
        const map = getCardCountMap(cards);

        const ranks = Array.from(map.keys()) as number[];
        // 过滤：点数必须在 3~13（包含3~K），且至少两个
        const filtered = ranks
            .filter(r => map.get(r)!.length >= 2 && r >= 3 && r <= 13)
            .sort((a, b) => a - b);

        const results: number[][] = [];
        let temp: number[][] = [];

        for (let i = 0; i < filtered.length; i++) {
            const curr = filtered[i];

            if (temp.length === 0 || filtered[i - 1] === curr - 1) {
                temp.push(map.get(curr)!.slice(0, 2));

                if (temp.length === 5) {
                    results.push(temp.flat());
                    temp = [];
                }
            } else {
                if (temp.length >= 3) {
                    results.push(temp.flat());
                }
                temp = [map.get(curr)!.slice(0, 2)];
            }
        }

        // 补最后一次
        if (temp.length >= 3) {
            results.push(temp.flat());
        }

        return results;
    }

    /** 查找顺子（点数连续的单牌，最少5张） */
    export function findStraight(cards: number[]): number[][] {
        const map = new Map<number, number[]>();

        // 构建 rank -> cards 映射（过滤大小王）
        for (const card of cards) {
            const rank = card % 16;
            if (rank < 3 || rank > 14) continue; // 3~A
            if (!map.has(rank)) map.set(rank, []);
            map.get(rank).push(card);
        }

        const ranks = Array.from(map.keys()).sort((a, b) => a - b);
        const result: number[][] = [];

        for (let i = 0; i <= ranks.length - 5; i++) {
            const seq = ranks.slice(i, i + 5);
            let isConsecutive = true;
            for (let j = 1; j < 5; j++) {
                if (seq[j] !== seq[j - 1] + 1) {
                    isConsecutive = false;
                    break;
                }
            }

            if (isConsecutive) {
                const straight: number[] = [];
                for (const rank of seq) {
                    straight.push(map.get(rank).pop());
                    if (map.get(rank).length === 0) map.delete(rank);
                }
                result.push(straight);
                i += 4; // 跳过这段，防止重复重叠
            }
        }

        return result;
    }

    /** 查找对子 */
    export function findPair(cards: number[]): number[][] {
        // const map = getCardCountMap(cards);
        // const result: number[][] = [];

        // for (const [rank, group] of map.entries()) {
        //     if (rank < 2 || rank < 14) continue; // 过滤 2、小王、大王（15，16，17）
        //     if (group.length >= 2) {
        //         result.push(group.slice(0, 2));
        //     }
        // }

        // return result;
        const map = new Map<number, number[]>();

        for (const card of cards) {
            const rank = card % 16;
            // 过滤大小王
            if (rank === 14 || rank === 15) continue;

            if (!map.has(rank)) {
                map.set(rank, []);
            }
            map.get(rank).push(card);
        }

        const result: number[][] = [];

        for (const group of map.values()) {
            if (group.length === 2) {
                result.push([...group]);
            }
        }

        return result;
    }

    export function findAllSingles(cards: number[]): number[][] {
        const map = getCardCountMap(cards); // Map<点数, number[]>
        const result: number[][] = [];

        for (const list of map.values()) {
            if (list.length === 1) {
                result.push([...list]); // 每张单牌包装成一组
            }
        }

        return result;
    }
}
