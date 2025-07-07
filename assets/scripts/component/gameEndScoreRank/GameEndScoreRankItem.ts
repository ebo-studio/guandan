import { _decorator, Component, Node, Toggle } from 'cc';
import { RankScoreType } from '../rank/RankScore';
import { SoundManager } from '../../manager/SoundManager';
import PopWindow from '../PopWindow';
import { GameEndScoreRankPerson } from './GameEndScoreRankPerson';
import { GameEndScoreRankTeam } from './GameEndScoreRankTeam';
import { utils } from '../../common/utils';
import { GlobalData } from '../../manager/GlobalData';
import { UIManager } from '../../manager/UIManager';
import { UIConfig } from '../../manager/UIConfig';
const { ccclass, property } = _decorator;

@ccclass('GameEndScoreRankItem')
export class GameEndScoreRankItem extends PopWindow {
    //个人赛
    @property(Toggle)
    togglePerson: Toggle = null;
    //团队赛
    @property(Toggle)
    toggleTeam: Toggle = null;

    @property(GameEndScoreRankPerson)
    rankScorePerson: GameEndScoreRankPerson = null;
    @property(GameEndScoreRankTeam)
    rankScoreTeam: GameEndScoreRankTeam = null;


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
    //退出
    onBackBtnClick() {
        SoundManager.playClick();
        if (utils.getSceneName() == GlobalData.sceneName.game) {
            console.log("nzp add 返回大厅 2");
            UIManager.Instace.showUI({ path: UIConfig.LoadItemKey, data: GlobalData.sceneName.lobby });
        }
        this.hide();
    }
}

