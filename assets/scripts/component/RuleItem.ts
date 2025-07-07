import { _decorator, Component, Node } from 'cc';
import PopWindow from './PopWindow';
import { SoundManager } from '../manager/SoundManager';
const { ccclass, property } = _decorator;

@ccclass('RuleItem')
export class RuleItem extends PopWindow {
    
    public setData(obj?: any): void {

    }

    onBtnCloseClick(){
        SoundManager.playClick();
        this.hide();
    }
}

