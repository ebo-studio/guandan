import { _decorator, Sprite, SpriteFrame } from 'cc';
import PopWindow from '../PopWindow';
import { SoundManager } from '../../manager/SoundManager';
import { utils } from '../../common/utils';
import { GameLogic } from '../game/GameLogic';
import { UIManager } from '../../manager/UIManager';
import { UIConfig } from '../../manager/UIConfig';
import { GlobalData } from '../../manager/GlobalData';
import { PbManager } from '../../proto/PbManager';
import { GameSocket } from '../../manager/GameSocket';
import { GameEndAuditionHeadItem } from './GameEndAuditionHeadItem';
const { ccclass, property } = _decorator;

@ccclass('GameEndAuditionItem')
export class GameEndAuditionItem extends PopWindow {
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
    @property(GameEndAuditionHeadItem)
    headItems: GameEndAuditionHeadItem[] = [];

    public setData(obj?: any): void {
        let datas: GameMsg.WinList = obj;
        let list = GameLogic.checkResult(datas);
        let iswin: number = list.isWin ? 0 : 1;
        for (let i = 0; i < list.list.length; i++) {
            let item = list.list[i];
            let data = { rank: item.res, head: item.headImg, name: item.name, score: item.score };
            this.headItems[i].setData(data);
        }
        this.picLight.spriteFrame = this.spsLight[iswin];
        this.picBg.spriteFrame = this.spsBg[iswin];
        this.picTitle.spriteFrame = this.spsTitle[iswin];
    }
    //返回大厅
    onBackBtnClick() {
        SoundManager.playClick();
        console.log("nzp add 返回大厅 6");
        //nzp add 新增返回大厅协议
        let sendBuffer = PbManager.instance.sendMsg(GlobalData.C2S_Event.ExitGame, null);
        GameSocket.send(sendBuffer);
        UIManager.Instace.showUI({ path: UIConfig.LoadItemKey, data: GlobalData.sceneName.lobby });
        this.hide();
    }
    //继续游戏
    onAgainBtnClick() {
        SoundManager.playClick();
        let sendBuffer = PbManager.instance.sendMsg(GlobalData.C2S_Event.ContinueGame, null);
        GameSocket.send(sendBuffer);
        utils.send(GlobalData.localEvent.AgainGame, { type: GlobalData.gameType.audition });
        this.hide();
    }
}

