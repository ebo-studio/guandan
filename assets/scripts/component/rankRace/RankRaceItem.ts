import { _decorator, Toggle } from 'cc';
import { SoundManager } from '../../manager/SoundManager';
import PopWindow from '../PopWindow';
import { RankRaceKickItem } from './RankRaceKickItem';
import { RankRaceScoreItem } from './RankRaceScoreItem';
import { RankRaceAuditionItem } from './RankRaceAuditionItem';
const { ccclass, property } = _decorator;

export enum RaceType {
    none,
    score,     //积分赛
    clearOut,  //淘汰赛
    audition,  //海选赛
}

@ccclass('RankRaceItem')
export class RankRaceItem extends PopWindow {
    //积分赛
    @property(Toggle)
    toggleScore: Toggle = null;
    //淘汰赛
    @property(Toggle)
    toggleKickOut: Toggle = null;
    //海选赛
    @property(Toggle)
    toggleAudition: Toggle = null;

    @property(RankRaceScoreItem)
    rankScore: RankRaceScoreItem = null;
    @property(RankRaceKickItem)
    rankKick: RankRaceKickItem = null;
    @property(RankRaceAuditionItem)
    rankAudition: RankRaceAuditionItem = null;

    private tmpRaceType: RaceType = RaceType.none;

    public setData(obj?: any): void {
        if (!obj) {
            this.tmpRaceType = RaceType.score;
        } else {
            this.tmpRaceType = obj;
        }
        this.changeToggle();
    }
    //切换
    changeToggle() {
        this.toggleScore.isChecked = this.tmpRaceType == RaceType.score;
        this.toggleKickOut.isChecked = this.tmpRaceType == RaceType.clearOut;
        this.toggleAudition.isChecked = this.tmpRaceType == RaceType.audition;

        this.rankScore.node.active = this.tmpRaceType == RaceType.score;
        this.rankKick.node.active = this.tmpRaceType == RaceType.clearOut;
        this.rankAudition.node.active = this.tmpRaceType == RaceType.audition;

        if (this.tmpRaceType == RaceType.score) {
            this.rankScore.setData();
        } else if (this.tmpRaceType == RaceType.clearOut) {
            this.rankKick.setData();
        }
        else if (this.tmpRaceType == RaceType.audition) {
            this.rankAudition.setData();
        }
    }
    //积分赛
    onToggleScoreClick() {
        SoundManager.playClick();
        if (this.tmpRaceType != RaceType.score) {
            this.tmpRaceType = RaceType.score
            this.changeToggle();
        }
    }
    //淘汰赛
    onToggleClearOutClick() {
        SoundManager.playClick();
        if (this.tmpRaceType != RaceType.clearOut) {
            this.tmpRaceType = RaceType.clearOut
            this.changeToggle();
        }
    }
    //海选赛
    onToggleAuditionClick() {
        SoundManager.playClick();
        if (this.tmpRaceType != RaceType.audition) {
            this.tmpRaceType = RaceType.audition
            this.changeToggle();
        }
    }

    onBtnCloseClick() {
        SoundManager.playClick();
        this.hide();
    }
}

