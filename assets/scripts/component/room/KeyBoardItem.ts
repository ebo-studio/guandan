import { _decorator, Label, TiledUserNodeData } from 'cc';
import PopWindow from '../PopWindow';
import { UIManager } from '../../manager/UIManager';
import { UIConfig } from '../../manager/UIConfig';
const { ccclass, property } = _decorator;

export enum KeyBoardType {
    joinRoom,     //加入房间
    joinTeam      //加入队伍
}

@ccclass('KeyBoardItem')
export class KeyBoardItem extends PopWindow {
    //标题
    @property(Label)
    txtTitle: Label = null;
    //房间号
    @property(Label)
    txtNum: Label = null;

    private listName = ["加入房间", "加入队伍"];
    private callBack: Function = null;

    private _tmpNum: string = "";         //没空格(用于记录)
    public get tmpNum(): string {
        return this._tmpNum;
    }
    public set tmpNum(value: string) {
        this._tmpNum = value;
        if (value == "") {
            this.txtNum.string = "";
        } else {
            this.txtNum.string = "";
            let tmpStr = "";
            for (let i = 0; i < value.length; i++) {
                if (i == 0) {
                    tmpStr += value[i];
                } else {
                    tmpStr += ("    " + value[i]);
                }
            }
            this.txtNum.string = tmpStr;
            if (value.length == 6) {
                console.log("房间号: ", value);
                if (this.callBack) {
                    this.callBack(value);
                }
                this.hide();
            }
        }
    }

    private tmpSpaceData: string = "";   //有空格(用于显示)

    public setData(obj?: { type: KeyBoardType, cb: Function }): void {
        this.callBack = obj.cb;
        this.txtTitle.string = this.listName[Number(obj.type)];
        this.resetNum();
    }

    protected onHide(): void {
        if (this.callBack) {
            this.callBack = null;
        }
    }
    onBtnClick(obj, datas) {
        let num = Number(datas);
        if (num < 100) {
            if (this.tmpNum.length >= 6) {
                UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: "长度不能超过6位!" });
                return;
            }
            this.tmpNum += num;
        } else {
            if (num == 100) {
                //重输入
                if (this.tmpNum == "") {
                    return;
                }
                this.tmpNum = "";
            }
            else if (num == 101) {
                //删除
                if (this.tmpNum == "") {
                    return;
                }
                this.tmpNum = this.tmpNum.substring(0, this.tmpNum.length - 1);
            }
        }
    }

    resetNum() {
        this.txtNum.string = "";
        this.tmpNum = "";
    }
    onBtnCloseClick(){
        this.hide();
    }
}

