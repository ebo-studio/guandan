import { _decorator, Component, Label, Node, Sprite, SpriteFrame } from 'cc';
import PopWindow from '../PopWindow';
import { SoundManager } from '../../manager/SoundManager';
import { GameEndKickHeadItem } from './GameEndKickHeadItem';
import { utils } from '../../common/utils';
import { GameEndType, GlobalData } from '../../manager/GlobalData';
import { UIManager } from '../../manager/UIManager';
import { UIConfig } from '../../manager/UIConfig';
const { ccclass, property } = _decorator;

@ccclass('GameEndKickItem')
export class GameEndKickItem extends PopWindow {
    //光
    @property(Sprite)
    picLight: Sprite = null;
    @property(SpriteFrame)
    spsLight: SpriteFrame[] = [];
    //背景
    @property(Sprite)
    picBg: Sprite = null;
    @property(SpriteFrame)
    spsBg: SpriteFrame[] = [];
    //标题
    @property(Sprite)
    picTitle: Sprite = null;
    //胜利|失败
    @property(SpriteFrame)
    spsTitle: SpriteFrame[] = [];
    //淘汰|晋级
    @property(SpriteFrame)
    spsTitle2: SpriteFrame[] = [];
    //头像
    @property(GameEndKickHeadItem)
    headItems: GameEndKickHeadItem[] = [];

    @property(Node)
    nodeBack: Node = null;
    @property(Node)
    nodeOk: Node = null;
    //最后一局不显示提示
    @property(Node)
    nodeTip: Node = null;
    //倒计时
    @property(Label)
    txtTime: Label = null;

    private resList1 = ["淘汰", "晋级"];
    private resList2 = ["失败", "胜利"];

    private timeFunc: Function = null;
    private leftTime: number = 0;
    private tmpData: GameMsg.WinList = null;

    public setData(obj?: any): void {
        let data: GameMsg.WinList = obj;
        this.tmpData = data;
        let resData = this.checkRes(data);
        console.log("resData----> ", resData);

        let iswin: number = Number(!resData.isWin);
        for (let i = 0; i < resData.list.length; i++) {
            let res = resData.list[i].res;
            let des = "";
            //胜利|失败
            if (data.type == GameEndType.kick_1) {
                des = this.resList2[res];
            }
            else {
                des = this.resList1[res];
            }
            this.headItems[i].setData(resData.list[i], Boolean(res), des);
        }

        this.picLight.spriteFrame = this.spsLight[iswin];
        this.picBg.spriteFrame = this.spsBg[iswin];
   
        if (data.type == GameEndType.kick_1) {
            this.picTitle.spriteFrame = this.spsTitle[iswin];
        } else {
            this.picTitle.spriteFrame = this.spsTitle2[iswin];
        }

        this.nodeBack.active = false;
        this.nodeOk.active = false;
        this.nodeTip.active = false;
        this.txtTime.node.active = false;

        if (data.type == GameEndType.kick_1) {
            this.leftTime = data.time;
            this.timeDown();
        }
        else if (data.type == GameEndType.kick_2) {
            if (resData.isWin) {
                this.nodeTip.active = true;
                this.nodeOk.active = true;
            } else {
                this.nodeBack.active = true;
            }
        }
        else if (data.type == GameEndType.kick_3) {
            if (!resData.isWin) {
                this.nodeOk.active = true;
            }
        }
    }
    checkRes(data: GameMsg.WinList) {
        let isWin: boolean = false;
        let listMy: GameMsg.IResUser[] = [];
        let listOther: GameMsg.IResUser[] = [];
        for (let i = 0; i < data.list.length; i++) {
            const item = data.list[i];
            if (item.res == 1) {
                if (item.id == GlobalData.userInfo.user_id) {
                    isWin = true;
                }
                listMy.push(item);
            } else {
                listOther.push(item);
            }
        }
        let resList: GameMsg.IResUser[] = [];
        if (isWin) {
            resList = listMy.concat(listOther);
        } else {
            resList = listOther.concat(listMy);
        }
        return { isWin: isWin, list: resList }
    }
    timeDown() {
        if (this.timeFunc) {
            this.unschedule(this.timeFunc);
            this.timeFunc = null;
        }
        this.txtTime.node.active = true;
        this.setTime();
        let that = this;
        this.timeFunc = function () {
            that.leftTime -= 1;
            that.setTime();
            if (that.leftTime <= 0) {
                that.unschedule(that.timeFunc);
            }
        }
        this.schedule(this.timeFunc, 1);
    }
    setTime() {
        if (this.leftTime >= 0) {
            this.txtTime.string = this.leftTime + "s 后继续游戏";
            this.txtTime.fontSize = 36;
        }
    }

    //返回大厅
    onBackBtnClick() {
        SoundManager.playClick();
        console.log("nzp add 返回大厅 5");
        UIManager.Instace.showUI({ path: UIConfig.LoadItemKey, data: GlobalData.sceneName.lobby })
        this.hide();
    }
    onOkBtnClick() {
        SoundManager.playClick();
        console.log("销毁所有 3--->");
        UIManager.Instace.clearAllUI();
        console.log("nzp add 返回大厅 4");
        UIManager.Instace.showUI({ path: UIConfig.LoadItemKey, data: GlobalData.sceneName.lobby })
    }
}

