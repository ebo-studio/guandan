import { _decorator, Component, Label, Node, Sprite, SpriteFrame, tween } from 'cc';
import PopWindow from '../PopWindow';
import { SoundManager } from '../../manager/SoundManager';
import { GameEndFreeHeadItem } from '../gameEndFree/GameEndFreeHeadItem';
import { GameEndType, GlobalData } from '../../manager/GlobalData';
import { GameLogic } from '../game/GameLogic';
const { ccclass, property } = _decorator;

@ccclass('GameEndScoreItem')
export class GameEndScoreItem extends PopWindow {
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
    @property(SpriteFrame)
    spsTitle: SpriteFrame[] = [];
    //头像
    @property(GameEndFreeHeadItem)
    headItems: GameEndFreeHeadItem[] = [];

    @property(Node)
    nodeBack: Node = null;
    @property(Node)
    nodeOk: Node = null;
    //倒计时
    @property(Label)
    txtTime: Label = null;

    private timeFunc: Function = null;
    private leftTime: number = 0;
    private tmpData: GameMsg.WinList = null;

    public setData(obj?: any): void {
        this.tmpData = obj;
        let data: GameMsg.WinList = obj;
        this.nodeOk.active = false;
        this.nodeBack.active = false;
        this.txtTime.string = "";

        this.picLight.node.active = data.type == GameEndType.score_1;
        this.picTitle.node.active = data.type == GameEndType.score_1;


        if (data.type == GameEndType.score_1) {
            this.tmpData = data;
            let list = GameLogic.checkResult(this.tmpData);
            let iswin: number = list.isWin ? 0 : 1;
            for (let i = 0; i < list.list.length; i++) {
                let item = list.list[i];
                let data = { rank: item.res, head: item.headImg, name: item.name, score: item.score };
                this.headItems[i].setData(data);
            }
            this.picLight.spriteFrame = this.spsLight[iswin];
            this.picBg.spriteFrame = this.spsBg[iswin];
            this.picTitle.spriteFrame = this.spsTitle[iswin];

            this.leftTime = data.time;
            this.timeDown();
        }
        else {
            for (let i = 0; i < this.tmpData.list.length; i++) {
                let item = this.tmpData.list[i];
                let viewId = GameLogic.getUserViewIdById(item.id);
                let data = { rank: item.res, head: item.headImg, name: item.name, score: item.score };
                if (viewId == GlobalData.viewId.self) {
                    this.headItems[0].setData(data, true);
                }
                else if (viewId == GlobalData.viewId.opposite) {
                    this.headItems[1].setData(data, true);
                }
                else if (viewId == GlobalData.viewId.up) {
                    this.headItems[2].setData(data, true);
                }
                else if (viewId == GlobalData.viewId.down) {
                    this.headItems[3].setData(data, true);
                }
            }

            this.picBg.spriteFrame = this.spsBg[0];
            // this.leftTime = 3;
            // this.timeDown();

            // tween(this.node)
            //     .delay(3)
            //     .call(() => {
            //         this.requestEndData();
            //     })
            //     .start();
        }
    }
    timeDown() {
        if (this.timeFunc) {
            this.unschedule(this.timeFunc);
            this.timeFunc = null;
        }
        this.setTime();
        let that = this;
        this.timeFunc = function () {
            that.leftTime -= 1;
            that.setTime();
            if (that.leftTime <= 0) {
                that.unschedule(that.timeFunc);
                that.onBackBtnClick();
            }
        }
        this.schedule(this.timeFunc, 1);
    }
    setTime() {
        if (this.leftTime >= 0) {
            if (this.tmpData.type == GameEndType.score_1) {
                this.txtTime.string = this.leftTime + "s 后继续游戏";
            } else {
                this.txtTime.string = this.leftTime + "s 后弹出积分列表";
            }
        }
    }
    //返回大厅
    onBackBtnClick() {
        SoundManager.playClick();
        this.hide();
    }
}

