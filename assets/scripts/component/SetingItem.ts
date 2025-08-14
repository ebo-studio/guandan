import { _decorator, Node, Toggle } from 'cc';
import { utils } from '../common/utils';
import { SoundManager } from '../manager/SoundManager';
import PopWindow from './PopWindow';
const { ccclass, property } = _decorator;

@ccclass('SetingItem')
export class SetingItem extends PopWindow {

    @property(Toggle)
    setToggle: Toggle = null;

    @property(Toggle)
    zhuoboToggle: Toggle = null;

    @property(Node)
    setNode: Node = null;

    @property(Node)
    zhuobuNode: Node = null;

    @property(Toggle)
    musicToggle: Toggle = null;
    @property(Toggle)
    soundToggle: Toggle = null;

    @property(Toggle)
    gameBgToggle1: Toggle = null;

    @property(Toggle)
    gameBgToggle2: Toggle = null;

    @property(Toggle)
    gameBgToggle3: Toggle = null;

    start() {

        this.onToggleChanged(this.setToggle);

        this.musicToggle.node.on('toggle', (toggle: Toggle) => {
            console.log(`toggle music ${toggle.isChecked}`);
            utils.setMusic(toggle.isChecked);
        }, this);

        this.soundToggle.node.on('toggle', (toggle: Toggle) => {
            console.log(`toggle sound ${toggle.isChecked}`);
            utils.setSound(toggle.isChecked);
        }, this);

        this.gameBgToggle1.node.on('toggle', (toggle: Toggle) => {
            utils.setGameBg('0');
        }, this);

        this.gameBgToggle2.node.on('toggle', (toggle: Toggle) => {
            utils.setGameBg('1');
        }, this);

        this.gameBgToggle3.node.on('toggle', (toggle: Toggle) => {
            utils.setGameBg('2');
        }, this);

        if (utils.getMusic()) {
            console.log(`GetMusic true`);
            this.musicToggle.isChecked = true;
        }
        else {
            console.log(`GetMusic false`);
            this.musicToggle.isChecked = false;
        }
        if (utils.getSound()) {
            console.log(`GetSound true`);
            this.soundToggle.isChecked = true;
        }
        else {
            console.log(`GetSound false`);
            this.soundToggle.isChecked = false;
        }
        let gameBgToggle = utils.getGameBg();
        if(gameBgToggle == '0') {
            this.gameBgToggle1.isChecked = true;
            this.gameBgToggle2.isChecked = false;
            this.gameBgToggle3.isChecked = false;
        }
        else if(gameBgToggle == '1') {
            this.gameBgToggle2.isChecked = true;
            this.gameBgToggle1.isChecked = false;
            this.gameBgToggle3.isChecked = false;
        }
        else {
            this.gameBgToggle3.isChecked = true;
            this.gameBgToggle2.isChecked = false;
            this.gameBgToggle1.isChecked = false;
        }
        // this.gameBgToggle1.isChecked = gameBgToggle == '0';
        // this.gameBgToggle2.isChecked = gameBgToggle == '1';
        // this.gameBgToggle3.isChecked = gameBgToggle == '2';
    }

    onToggleChanged(toggle: Toggle) {
        if (toggle === this.setToggle && toggle.isChecked) {
            this.setNode.active = true;
            this.zhuobuNode.active = false;
        } else if (toggle === this.zhuoboToggle && toggle.isChecked) {
            this.setNode.active = false;
            this.zhuobuNode.active = true;
        }
    }

    public OnCloseClicked() {
        SoundManager.playClick();
        this.hide();
    }
}

