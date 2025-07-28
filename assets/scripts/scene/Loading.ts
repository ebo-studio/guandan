import { _decorator, assert, Button, Component, director, error, Prefab, ProgressBar, resources } from "cc";
import { GlobalData } from "../manager/GlobalData";

const { ccclass, property } = _decorator;

@ccclass('Loading')
export class Loading extends Component {

    @property(ProgressBar)
    progressBar: ProgressBar = null;

    @property(Button)
    joginGame: Button = null;

    private preloadList: string[] = [
        'prefab',
        'prefab/game',
        'prefab/gameEndScore',
        'prefab/gameEndScoreRank',
        'prefab/room'
    ];

    private prefabNames: string[] = [];
    private total = 0;
    private finished = 0;

    start() {

        director.preloadScene(GlobalData.sceneName.lobby, function () {
            //cc.log("Next scene preloaded");
        });
        this.loadAllPrefabs().then(() => {
            // this.loadMainScene();
        });
    }

    private async loadAllPrefabs() {
        resources.loadDir('prefab', (completedCount, totalCount, item) => {
            // console.log(completedCount, totalCount)
            let progress = parseFloat(((completedCount) / (totalCount)).toFixed(3));
            this.updateProgress(progress);
        }, (error, assets) => {

        })
    }

    private updateProgress(progress: number) {
        if(progress > this.progressBar.progress) {
            this.progressBar.progress = progress;
        }
        if(progress >= 1) {
            this.progressBar.node.active = false;
            this.joginGame.node.active = true;
        }
        // this.progressBar.progress = p;
        // this.tipLabel.string = `加载中 ${Math.floor(p * 100)}%`;
    }

    private startGame() {
        director.loadScene(GlobalData.sceneName.lobby);
    }

}