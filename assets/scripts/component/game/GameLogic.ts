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
        if(false){
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
    export function getRemainCardsByDelete(value: number[], deleteCards: number[]) {
        let delList: number[] = utils.deepCopy(deleteCards);
        let remainCards = [];
        let deleteIdx: number[] = [];
        if (GlobalData.cardInfo.cardDir) {
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
            let tmpList: number[] = [];
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
    export function getSameCardSizeList(value: number[]) {
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
}
