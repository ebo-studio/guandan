import { _decorator, Component, getLoadOpOfClearFlag, Node, sp, Sprite, SpriteFrame, UI } from 'cc';
import PopWindow from '../PopWindow';
import { SoundManager } from '../../manager/SoundManager';
import { GameEndFreeHeadItem } from './GameEndFreeHeadItem';
import { utils } from '../../common/utils';
import { GameLogic } from '../game/GameLogic';
import { UIManager } from '../../manager/UIManager';
import { UIConfig } from '../../manager/UIConfig';
import { GlobalData } from '../../manager/GlobalData';
import { PbManager } from '../../proto/PbManager';
import { GameSocket } from '../../manager/GameSocket';
const { ccclass, property } = _decorator;

@ccclass('GameEndFreeItem')
export class GameEndFreeItem extends PopWindow {
    //光
    // @property(Sprite)
    // picLight: Sprite = null;
    // @property(SpriteFrame)
    // spsLight: SpriteFrame[] = [];
    //背景
    // @property(Sprite)
    // picBg: Sprite = null;
    // @property(SpriteFrame)
    // spsBg: SpriteFrame[] = [];
    //标题
    @property(Sprite)
    picTitle: Sprite = null;
    @property(SpriteFrame)
    spsTitle: SpriteFrame[] = [];
    //头像
    @property(GameEndFreeHeadItem)
    headItems: GameEndFreeHeadItem[] = [];

    @property(sp.Skeleton)
    isWin: sp.Skeleton = null;

    public setData(obj?: any): void {
        let datas: GameMsg.WinList = obj;
        let list = GameLogic.checkResult(datas);
        let iswin: number = list.isWin ? 0 : 1;

        if(iswin == 0) {
            this.isWin.setAnimation(0, 'sl_chuxian', false);
            this.isWin.setCompleteListener(()=>{
                if(this.isWin.animation == 'sl_chuxian') {
                    this.isWin.setAnimation(0, 'sl_loop', true);
                }
            })
        }
        else {
            this.isWin.setAnimation(0, 'sb_chuxian', false);
            this.isWin.setCompleteListener(()=>{
                if(this.isWin.animation == 'sb_chuxian') {
                    this.isWin.setAnimation(0, 'sb_loop', true);
                }
            })
        }
        for (let i = 0; i < list.list.length; i++) {
            let item = list.list[i];
            let data = { rank: item.res, head: item.headImg, name: item.name, score: item.score, isWin: Boolean(iswin) };
            this.headItems[i].setData(data);
        }
        // this.picLight.spriteFrame = this.spsLight[iswin];
        // this.picBg.spriteFrame = this.spsBg[iswin];
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
        utils.send(GlobalData.localEvent.AgainGame, { type: GlobalData.gameType.free });
        this.hide();
    }
}

