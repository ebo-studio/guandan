import { utils } from "../common/utils";
import { SoundManager } from "../manager/SoundManager";

export class platform {

    static init() {
        if (utils.is_browser()) {

        }

        // 设置
        let music_string = utils.getLocalStorage("Music");
        SoundManager.enableMusic(!(music_string && music_string == "off"));
        let sound_string = utils.getLocalStorage("Sound");
        SoundManager.enableSound(!(sound_string && sound_string == "off"));
    }
}
