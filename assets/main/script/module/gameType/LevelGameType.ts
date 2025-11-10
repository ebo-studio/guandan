import { Asset } from "cc";
import { CGameData, initData } from "../../../../app/GameDefine";
import { ILevelSelectUIData } from "../../../../scene/script/ui/LevelSelectUI";
import { LevelHelper, Maths, PropHelper, RandomSeed, TResoucesUrl, _config_, _gameType, _logic, _prop, _timer, _ui, winCenterPostion } from "../../Main";
import { EGameType, IGameTypeLogic, gameTypeModule } from "../define/GameTypeDefine";
import { GlobalData } from "db://assets/scripts/manager/GlobalData";
import { UrlConfig } from "db://assets/scripts/manager/UrlConfig";
import { md5 } from "db://assets/scripts/common/md5";



@gameTypeModule.add(EGameType.level)
export class LevelGameType implements IGameTypeLogic {

    public level: LevelHelper<null, null> = null!
    public curLevel = -1
    public step: PropHelper = null!

    public get curConfig() {
        return _config_.obj.level_item[this.level.getConverLevel(this.curLevel)]
    }

    constructor() {
        let levelExclude: number[] = []

        let all = Math.floor(_config_.arr.level_item.length / 2)
        for (let i = 0; i < all; i++)
            levelExclude.push(_config_.arr.level_item[i].id)

        this.level = new LevelHelper(
            _gameType.storage,
            -1,
            "level",
            _config_.arr.level_item.length,
            true,
            levelExclude,
            null!
        )

        this.step = new PropHelper(
            _gameType.storage,
            "",
            -1,
            0,
            -1,
            true,
            "step"
        )

        this.step.on(PropHelper.EventType.CHANGE, _gameType.callLaterCheckComplete, _gameType)
    }

    public preLoadRes(res: TResoucesUrl<Asset>[]) {
        res.push(..._logic.preLoadRes)
    }

    public settingExit() {
        _ui.open(CGameData.LevelSelectUrl, <ILevelSelectUIData>{
            level: this.level,
            configLength: _config_.arr.level_item.length,
            add: true,
        })
    }

    public run(level = this.level.cur) {
        this.curLevel = level

        let config = this.curConfig

        _ui.close(CGameData.LevelSelectUrl)
        _ui.close(initData.uiUrl.index)

        _gameType.logicRun(
            this.curLevel,
            () => {
                _logic.create(
                    config.size,
                    config.removeRatio,
                    config.bug_count,
                    config.scaleMin,
                )
            },
            (isWin) => {
                let isGetReward: boolean = false;
                if (isWin) {
                    if (GlobalData.userInfo.level_info < this.curLevel) {
                        this.getWinReward(this.curLevel);
                        isGetReward = true;
                    }
                    if (this.level.cur == this.curLevel)
                        this.level.add()

                    _ui.blockTouchEvent(true)
                    // 等待飞行动画
                    _timer.once(this, () => {
                        _ui.blockTouchEvent(false)
                        _ui.open(CGameData.SuccessUrl, isGetReward)
                    }, .5)
                }
                else
                    _ui.open(CGameData.FailUrl)
            }
        )

        let configStep = Math.floor(_logic.data.count() * 1.2)
        this.step.set(configStep)
        _ui.open(CGameData.RunUIUrl, null!, () => {
            if (config.anim === 1)
                _gameType.emit(_gameType.EventType.PLAY_ANIM)
        })
    }

    async getWinReward(level: number) {
        const secretKey = "a0b6ecfc6aa8457cb10c7c798c46ac1e"; // 固定秘钥
        const userId = GlobalData.userInfo.user_id;             // 当前用户ID
        const time = Math.floor(Date.now() / 1000);             // 秒级时间戳
        const sign = md5(`${time}${userId}${secretKey}`);       // 签名生成

        const url = `${UrlConfig.getHttpUrl()}api/User/addGoldForLevelPass`;
        const postData = {
            token: GlobalData.loginInfo.token,
            userId: userId,
            time: time,
            sign: sign,
            level_info: level
        };

        this.postWithFetch(url, postData)
            .then(data => {
                // UIManager.Instace.hideUI(UIConfig.WaitItemKey);
                GlobalData.requestGetUserInfo({
                    success: () => {
                        _logic.emit(_logic.EventType.CHANGE_SCORE);
                    }
                });
                
            })
            .catch(err => {
                console.error('getWinReward error:', err);

            });
    }

    async postWithFetch(url: string, data: any): Promise<any> {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const text = await response.text();
            console.log('status:', response.status, 'body:', text.slice(0, 200));

            if (/ <!doctype |<html/i.test(text))
                throw new Error('收到 HTML（登录/错误页）');

            return JSON.parse(text.replace(/^\uFEFF/, ''));
        } catch (err) {
            console.error('postWithFetch error:', err);
            throw err;
        }
    }


    public checkComplete() {
        if (_logic.data.count() == 0) {
            _gameType.runComplete(true)
            return
        }
        if (this.step.cur <= 0)
            _gameType.runComplete(false)
    }

    public reset() {
        _gameType.run(_gameType.type, this.curLevel)
    }

    public subStep() {
        if (_logic.data.count() <= 2)
            if (this.step.cur <= 1) {
                _gameType.isRun = false
            }
        this.step.sub(1)
        _gameType.callLaterCheckComplete()
    }


    public revive() {
        _gameType.isRun = true
        _gameType._runComplete.set(_gameType._runComplete._cb)

        this.step.add(20)
    }

}