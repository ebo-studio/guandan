import { _decorator, Toggle } from 'cc';
import { utils } from '../common/utils';
import { SoundManager } from '../manager/SoundManager';
import PopWindow from './PopWindow';
const { ccclass, property } = _decorator;

@ccclass('SetingItem')
export class SetingItem extends PopWindow {
    @property(Toggle)
    musicToggle: Toggle = null;
    @property(Toggle)
    soundToggle: Toggle = null;

    start() {

        this.musicToggle.node.on('toggle', (toggle: Toggle) => {
            console.log(`toggle music ${toggle.isChecked}`);
            utils.setMusic(toggle.isChecked);
        }, this);

        this.soundToggle.node.on('toggle', (toggle: Toggle) => {
            console.log(`toggle sound ${toggle.isChecked}`);
            utils.setSound(toggle.isChecked);
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
    }

    public OnCloseClicked() {
        SoundManager.playClick();
        this.hide();
    }
}

