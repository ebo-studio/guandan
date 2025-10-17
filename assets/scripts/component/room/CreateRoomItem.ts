import { ToggleContainer, _decorator } from 'cc';
import PopWindow from '../PopWindow';
import { SoundManager } from '../../manager/SoundManager';
import { GlobalData } from '../../manager/GlobalData';
import { UIManager } from '../../manager/UIManager';
import { KeyBoardType } from './KeyBoardItem';
import { AppGlobal } from '../../AppGlobal';
import { UIConfig } from '../../manager/UIConfig';
const { ccclass, property } = _decorator;

@ccclass('CreateRoomItem')
export class CreateRoomItem extends PopWindow {
    //时间
    @property(ToggleContainer)
    toggleContainer: ToggleContainer = null;

    private callBack: Function = null;

    public setData(obj?: any): void {
        this.callBack = obj;
        // let aa = this.toggleContainer.activeToggles();
        // console.log(aa[0].node.name);
    }

    onBtnCreateClick() {
        SoundManager.playClick();
        let toggles = this.toggleContainer.activeToggles();
        let chooseToggle: string = toggles[0].node.name;
        let idx = chooseToggle.substring(chooseToggle.length - 1);
        console.log("创建房间--> ", idx);
        GlobalData.createRoomInfo.time = GlobalData.createRoomInfo.timeList[Number(idx) - 1];
        this.callBack && this.callBack();
        this.hide();
        this.clearFunc();
    }

    async onBtnJoinRoomClick() {
        SoundManager.playClick();
        UIManager.Instace.showUI({
            path: UIConfig.KeyBoardItemKey,
            data: {
                type: KeyBoardType.joinRoom,
                cb: (roomId) => {
                    AppGlobal.instance.onFreeRoomId(roomId);
                }
            }
        });
    }

    onBtnCloseClick() {
        SoundManager.playClick();
        this.hide();
    }
    //退出时清空
    clearFunc() {
        this.callBack = null;
    }
}

