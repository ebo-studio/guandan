import { _decorator, Component, Toggle } from 'cc';
import { SoundManager } from '../../manager/SoundManager';
import { RankScorePerson } from './RankScorePerson';
import { RankScoreTeam } from './RankScoreTeam';
import PopWindow from '../PopWindow';
const { ccclass, property } = _decorator;

export enum RankScoreType {
    none,
    person,  //个人
    team,    //团队
}

@ccclass('RankScore')
export class RankScore extends PopWindow {
    //个人赛
    @property(Toggle)
    togglePerson: Toggle = null;
    //团队赛
    @property(Toggle)
    toggleTeam: Toggle = null;

    @property(RankScorePerson)
    rankScorePerson: RankScorePerson = null;
    @property(RankScoreTeam)
    rankScoreTeam: RankScoreTeam = null;


    private tmpScoreType: RankScoreType = RankScoreType.none;

    public setData(obj?: any): void {
        if (!obj) {
            this.tmpScoreType = RankScoreType.person;
        } else {
            this.tmpScoreType = obj;
        }
        this.changeToggle();
    }
    //切换
    changeToggle() {
        this.togglePerson.isChecked = this.tmpScoreType == RankScoreType.person;
        this.toggleTeam.isChecked = this.tmpScoreType == RankScoreType.team;

        this.rankScorePerson.node.active = this.tmpScoreType == RankScoreType.person;
        this.rankScoreTeam.node.active = this.tmpScoreType == RankScoreType.team;

        if (this.tmpScoreType == RankScoreType.person) {
            this.rankScorePerson.setData();
        } else if (this.tmpScoreType == RankScoreType.team) {
            this.rankScoreTeam.setData();
        }
    }
    //积分赛
    ontogglePersonClick() {
        SoundManager.playClick();
        if (this.tmpScoreType != RankScoreType.person) {
            this.tmpScoreType = RankScoreType.person;
            this.changeToggle();
        }
    }
    //淘汰赛
    ontoggleTeamClick() {
        SoundManager.playClick();
        if (this.tmpScoreType != RankScoreType.team) {
            this.tmpScoreType = RankScoreType.team;
            this.changeToggle();
        }
    }
    onBtnCloseClick() {
        SoundManager.playClick();
        this.hide();
    }

}

