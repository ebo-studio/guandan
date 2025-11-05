import { Asset } from "cc";
import { Maths, RandomSeed, TResoucesUrl, _gameType, _logic } from "../../Main";
import { EGameType, IGameTypeLogic, gameTypeModule } from "../define/GameTypeDefine";



@gameTypeModule.add(EGameType.index)
export class IndexGameType implements IGameTypeLogic {

    public preLoadRes(res: TResoucesUrl<Asset>[]) {
        res.push(..._logic.preLoadRes)
    }

    public run(...param: any[]) {
        _gameType.logicRun(
            Maths.minToMax(0, 100000),
            () => {
                _logic.create(
                    [4, 7],
                    .2,
                )
            },
            (isWin) => {

            }
        )
        _gameType.isRun = false
    }

}