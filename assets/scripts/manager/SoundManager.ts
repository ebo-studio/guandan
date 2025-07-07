import { AudioClip, resources } from "cc";
import { AppGlobal } from "../AppGlobal";
import { utils } from "../common/utils";

export module SoundManager {
     var soundEnabled = true;
     var musicEnabled = true;

    export function enableSound(enable: boolean) {
        soundEnabled = enable;
        utils.setLocalStorage("Sound", enable ? "on" : "off");
    }

    export function enableMusic(enable: boolean) {
        musicEnabled = enable;
        utils.setLocalStorage("Music", enable ? "on" : "off");
        if (enable) {
            playMusic("audio/music/bgm");
        } else {
            stopMusic();
        }
    }

    export function playSound(path: string, loop: boolean = false, callback?: (id: number) => void) {
        if (!soundEnabled) {
            return;
        }
        if (path == "audio/sound/click") {
            AppGlobal.instance?.playClickSound();
            return;
        }
        if (path == "audio/sound/clock") {
            AppGlobal.instance?.playClockSound();
            return;
        }

        resources.load(path, AudioClip, function (err: Error, clip: AudioClip) {
            if (err) {
                console.log(err);
                return;
            }
            //send
            AppGlobal.instance?.playSound(clip,loop);
        });
    }

    /**
        播放音乐
        sound_manager.play_music('resources/Sound/music.mp3', false);
    */
    export function playMusic(path: string, loop: boolean = true, callback?: (id: number) => void) {
        if (!musicEnabled) {
            return;
        }
        resources.load(path, AudioClip, function (err: Error, clip: AudioClip) {
            if (err) {
                console.log(err);
                return;
            }
            if (!musicEnabled) {
                return;
            }
            AppGlobal.instance?.playMusic(clip, loop);
        });
    }

    export function getSoundEnable(){
        return soundEnabled;
    }

    export function stopSound(id: number) {
        // audioEngine.stopEffect(id);
    }

    export function stopMusic() {
        AppGlobal.instance?.stopMusic();
    }

    export function playClick() {
        playSound('audio/sound/click', false);
    }
}
