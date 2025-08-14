import { _decorator, Label, ProgressBar, director, SceneAsset, SpriteFrame, Node, Sprite } from 'cc';
import PopWindow from './PopWindow';
import { UIManager } from '../manager/UIManager';
import { utils } from '../common/utils';
const { ccclass, property } = _decorator;

@ccclass('LoadItem')
export class LoadItem extends PopWindow {
    //进度
    @property(Label)
    txtPro: Label = null!;
    //进度条
    @property(ProgressBar)
    proBar: ProgressBar = null!;

    @property(Node)
    gameBg: Node = null;
    @property(SpriteFrame)
    gameBgType: SpriteFrame[] = [];

    protected start(): void {
        let gameBgStr = utils.getLocalStorage('gameBg');
        if (!gameBgStr) {
            gameBgStr = '0';
        }
        this.gameBg.getComponent(Sprite).spriteFrame = this.gameBgType[Number(gameBgStr)];
    }


    setData(secneName: string) {
        this.setPro(0);
        director.preloadScene(
            secneName,
            (completedCount: number, totalCount: number, item: any) => {
                // console.log("completedCount ", completedCount);
                // console.log("totalCount ", totalCount);
                let ratio = completedCount / totalCount;
                this.setPro(ratio);
            },
            (error: null | Error, sceneAsset?: SceneAsset) => {
                director.loadScene(secneName);
                //这里清除会闪一下,放到进入 scene 的onload中清理
                // UIManager.Instace.clearAllUI();
                // console.log("sceneAsset ",sceneAsset);
            }
        );
    }

    setPro(num: number) {
        //进度条不允许回退
        if (num * 100 > Number(this.txtPro.string)) {
            this.txtPro.string = Math.floor(num * 100).toString();
            this.proBar.progress = num;
        }
    }

}

