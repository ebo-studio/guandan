import { Asset, AudioClip, Node, ParticleSystem2D, Prefab, Size, SpriteFrame } from "cc"
import { CGameData, initData } from "../../../app/GameDefine"
import { Scene } from "../../../scene/script/Scene"
import { Vector2, EModuleType, BaseModuleEvent, _scene, _audio, TResoucesUrl, DataLogicHelper, _ui, JS, ColliderGroup, CreatePrefabToEditorCC, LayoutCC, _resouces, IVector2, P2World, P2Group, P2ShapeEditorCC, TVectorSet, StateMackine, Sets, Collider2DEditorCC, Rectangle, _config_, winSize, LevelHelper, moduleMgr, _gameType, _timer, Maths, _prop, _login, EUILayer, NodeHelper, _guide, winCenterPostion, IUIModule, _main, _logic, Polygon, _platform, MaxBoxCC, Circle, NodeHollow, EEntityState, _language } from "../Main"
import { CCubeMaxSize, CCubeOffsetY, CCubeSize, CDir, CDirBack, CDirByAngle, CDirRotate, CDirTop, CSceneData, EPropId, ILogicData } from "./define/LogicDefine"
import { EGameType, gameTypeModule } from "./define/GameTypeDefine"
import { LevelGameType } from "./gameType/LevelGameType"
import { TodayGameType } from "./gameType/TodayGameType"
import { RunUI } from "../../../scene/script/ui/RunUI"


const v2T = new Vector2()
const v2T2 = new Vector2()
const v2T3 = new Vector2()
const rectT3 = new Rectangle()
const rectT = new Rectangle()

@moduleMgr.add(EModuleType.logic)
export class LogicModule extends BaseModuleEvent {

    public readonly EventType = {
        USE_DIRBACK: "USE_DIRBACK",
        USE_DIRBACK_COMPLETE: "USE_DIRBACK_COMPLETE",
        DURATION_CHANGE: "DURATION_CHANGE",
    }

    public data: DataLogicHelper<ILogicData> = null!

    public cubeSize = 0
    public offsetY = new Vector2()
    public scaleRatio = 0
    public offset = new Vector2()
    public size = new Vector2()
    public animIndex: number = -1
    public sizeLen = -1
    public preLoadRes: TResoucesUrl<Asset>[] = []

    public get _level(): LevelGameType { return gameTypeModule.get(EGameType.level) }
    public get _today(): TodayGameType { return gameTypeModule.get(EGameType.today) }
    private get scene() { return _scene.getCurrent<Scene>() }

    onCreate() {
        this.preLoadRes.push(
            { type: Prefab, url: _ui.DefaultUrl.moveUp },
            { type: AudioClip, url: "scene/audio/remove" },
        )

        if (CGameData.useSheep)
            this.preLoadRes.push({ type: Prefab, url: CSceneData.cube2PrefabUrl })
        else
            this.preLoadRes.push({ type: Prefab, url: CSceneData.cubePrefabUrl })

        this.data = new DataLogicHelper<ILogicData>(
            () => ({
                entity: null!,
                dataIndex: -1,
                dirIndex: -1,
                frontIndex: -1,
                circle: new Circle(),
                rect: new Rectangle(),
                index: new Vector2(),
                index2: new Vector2(),
            }),
            (data) => {
                data.entity = null!
            }
        )
    }

    onLogic() {
        let isOnce = false
        _scene.once(_scene.EventType.CHANG_SUCCESS, () => {
            _audio.playMusic("scene/audio/bgm")

            _timer.once(this, () => {
                // _gameType.type = EGameType.index
                if (_gameType.type == EGameType.none)
                    if (_login.isNewUser)
                        _gameType.type = EGameType.today
                    else
                        _gameType.type = EGameType.index

                isOnce = true

                _gameType.run(_gameType.type)
            }, 2 / 60)
        })

        _ui.on(_ui.EventType.OPEN, (url: string) => {
            if (url == initData.uiUrl.index) {
                // 显示默认方块
                if (isOnce)
                    _gameType.run(EGameType.index)
            }
        })


        for (let config of _config_.arr.prop)
            _prop.setSinglesOpenUI(config.id, () => {
                _ui.open(CGameData.PropGetUrl, _prop.singles.get(config.id))
            })


        _prop.on(_prop.EventType.PROP_SUB, (id: number) => {
            switch (id) {
                case EPropId.remove:
                    this.propRemove()
                    break
                case EPropId.dir:
                    this.scene.useBack()
                    break
                case EPropId.time:
                    this._today.addTime(5 * 60)
                    break
            }

        })


        _main.preLoadQueue
            .add(complete => _resouces.loadPrefab(_ui.DefaultUrl.fly, complete))
            .add(complete => _resouces.loadPrefab(_ui.DefaultUrl.flyItem, complete))
            .add(complete => _resouces.loadPrefab(CGameData.SettingUrl, complete))
            .add(complete => _resouces.loadPrefab(CGameData.FailUrl, complete))
            .add(complete => _resouces.loadPrefab(CGameData.SuccessUrl, complete))
            .add(complete => _resouces.loadPrefab(CGameData.PropGetUrl, complete))
            .add(complete => _resouces.loadPrefab(CGameData.LevelSelectUrl, complete))

    }

    public propRemove(count = 1) {
        let arrs: ILogicData[] = []
        for (let data of this.data.datas)
            if (data)
                arrs.push(data)

        Sets.shuffle(arrs)
        let max = Math.min(count, arrs.length)
        for (let i = 0; i < max; i++) {
            let arr = arrs[i]
            arr.entity.entityStateMackine.change(EEntityState.Over)
        }

        this.checkNo()
        _ui.tip(_language.get(40021))
    }

    public checkNo() {
        if (this.data.count() > 1)
            _timer.callLater(this, this._checkNo)
    }

    public hasNo() {
        for (let data of this.data.datas) {
            if (data && data.entity)
                if (!this.getFront(data.dataIndex))
                    return false
        }

        return true
    }

    private _checkNo() {

        if (_gameType.type == EGameType.none
            || _gameType.type == EGameType.index)
            return
        if (!this.scene.isLoadComplete)
            return

        if (!this.hasNo())
            return
        // 引导翻转
        if (!_prop.hasUseProp(EPropId.dir))
            if (this.storage.get("guide_tip", "false") == "false") {
                this.storage.set("guide_tip", "true")
                let ui = _ui.getModule(CGameData.RunUIUrl).ui as RunUI
                let node = ui.LayoutCC.node.children[1]
                let hollow = new NodeHollow(node)
                hollow.isFingerAnim = true
                hollow.fingerOffsetPoint = new Vector2()
                hollow.setClick(() => {
                    _guide.closeMask()
                    let datas = Sets.filter(this.data.datas, v => !!v)
                    this.scene.finger(Sets.random(datas))
                }, node)
                _guide.mask({
                    hollows: [hollow],
                })
            }

        return
        let datas: number[] = []
        for (let data of this.data.datas) {
            if (data && data.entity && data.entity.entityStateMackine.state == EEntityState.Run) {
                datas.push(data.dataIndex)
            }
        }
        Sets.shuffle(datas)

        let index = -1
        while (true) {
            index++
            if (datas[index] === undefined)
                break
            this.dirBack(datas[index])
            if (!this.hasNo())
                break
        }
    }

    public dirBack(index: number) {
        let data = this.data.datas[index]
        let angle = data.rect.angle
        data.dirIndex = CDirBack[data.dirIndex]
        data.rect.angle = CDirByAngle[data.dirIndex]

        this._dirBackIndex(data)

        if (data.entity)
            data.entity.dirBack(angle)
    }

    public getFront(index: number, dir?: number, indexPos?: IVector2, once = false) {
        let data = this.data.datas[index]
        if (dir === undefined) {
            dir = data.dirIndex
        }

        if (indexPos === undefined) {
            indexPos = data.index
        }

        let _dir = CDir[dir]

        let cur = 1

        while (true) {
            v2T.x = indexPos.x + _dir.x * cur
            v2T.y = indexPos.y + _dir.y * cur
            if (v2T.x < 0 || v2T.x >= this.sizeLen)
                break
            if (v2T.y < 0 || v2T.y >= this.sizeLen)
                break
            for (let v of this.data.datas) {
                if (v == data)
                    continue
                if (v) {
                    if (v.index.equals(v2T))
                        return { data: v, moveCount: cur }
                    if (v.index2.equals(v2T))
                        return { data: v, moveCount: cur }
                }
            }
            if (once)
                break
            cur++
        }

        return null!
    }

    public getFronts(dirIndex: number, curData: ILogicData, datas: ILogicData[], index: number) {
        let _datas: ILogicData[] = []
        let curIndex = curData.dataIndex

        let _index = index + 1

        let _data = this.getFront(curIndex, dirIndex, curData.index, true)
        if (_data) {
            _data.data.frontIndex = _index
            _datas.push(_data.data)
        }

        _data = this.getFront(curIndex, dirIndex, curData.index2, true)
        if (_data) {
            _data.data.frontIndex = _index
            _datas.push(_data.data)
        }


        if (_datas.length == 0)
            return
        for (let v of _datas) {
            if (!Sets.has(datas, v)) {
                datas.push(v)
                this.getFronts(dirIndex, v, datas, _index)
            }
        }
    }

    public addDirMul(out: IVector2, mul: number, data: ILogicData) {
        let dir = CDirRotate[data.dirIndex]
        out.x += dir.x * mul * this.cubeSize
        out.y += dir.y * mul * this.cubeSize
    }

    public create(size: TVectorSet, removeRatio: number, bugCount = 10000, scaleMin = .5) {
        this.data.reset()
        this.offsetY.set()

        // bugCount = 2
        this.size.set(size)

        // 斜边长度
        this.sizeLen = Math.floor(Math.sqrt(this.size.x * this.size.x + this.size.y * this.size.y))

        // 默认总宽度
        let defaultW = this.sizeLen * CCubeSize
        let winW = winSize().width
        let ratio = defaultW / winW
        if (ratio > 1)
            this.scaleRatio = Math.max(scaleMin, 1 / ratio * 1.1)
        else
            this.scaleRatio = 1
        this.cubeSize = CCubeSize * this.scaleRatio

        // console.log(defaultW, this.sizeLen, winW, ratio, this.scaleRatio)
        let maxX = this.sizeLen
        let maxY = this.sizeLen

        // 均匀竖向分布
        let yMul = Math.floor(maxY / 2)
        let xMul = Math.floor(maxX / 2)
        let allCount = Math.floor(maxX * maxY / 2)
        let removeCount = Math.floor(allCount * removeRatio)
        let removeIndexs: number[] = []
        for (let i = 0; i < allCount; i++)
            removeIndexs.push(i)
        Sets.shuffle(removeIndexs, undefined!, () => _gameType.curRandom.run())
        if (removeIndexs.length > removeCount)
            removeIndexs = removeIndexs.splice(0, removeCount)

        // 第一排
        let yAdd = 0
        let _xAdd = 0
        if (maxY % 2 != 0) {
            let yAddIndex = maxY - 1
            // 最后一排
            if (Maths.isRandom(.5, _gameType.curRandom.run())) {
                yAdd = 1
                yAddIndex = 0
            }

            if (maxX % 2 != 0) {
                if (Maths.isRandom(.5, _gameType.curRandom.run())) {
                    _xAdd = 1
                }
            }
            for (let x = 0; x < xMul; x++) {
                let data: ILogicData = null!
                if (!Sets.has(removeIndexs, this.data.datas.length))
                    data = this.data.pool.get()
                this.data.datas.push(data)
                let curX = x * 2 + _xAdd
                this.setDataIndex(data, curX, yAddIndex, curX + 1, yAddIndex, true)
            }
        }


        // 多余的竖排

        // 有重叠bug 暂时注释
        let xAdd = 0
        // if (maxX % 2 != 0) {
        //     let xAddIndex = maxX - 1
        //     // 最后一排
        //     if (_xAdd == 1 && Maths.isRandom(.5, _battle.curRandom.run())) {
        //         xAdd = 1
        //         xAddIndex = 0
        //     }

        //     let _yAdd = 0
        //     if (maxY % 2 != 0) {
        //         if (_xAdd == 1 && Maths.isRandom(.5, _battle.curRandom.run())) {
        //             _yAdd = 1
        //         }
        //     }
        //     for (let y = 0; y < yMul; y++) {
        //         let data: IBattleLogicData = null!
        //         if (!Sets.has(removeIndexs, this.datas.length))
        //             data = this.pool.get()
        //         this.datas.push(data)
        //         let curY = y * 2 + _yAdd
        //         this.setDataIndex(data, xAddIndex, curY, xAddIndex, curY + 1, false)
        //     }
        // }


        for (let x = 0; x < xMul; x++) {
            for (let y = 0; y < yMul; y++) {

                let data1: ILogicData = null!
                if (!Sets.has(removeIndexs, this.data.datas.length))
                    data1 = this.data.pool.get()
                this.data.datas.push(data1)

                let data2: ILogicData = null!
                if (!Sets.has(removeIndexs, this.data.datas.length))
                    data2 = this.data.pool.get()
                this.data.datas.push(data2)

                let curY = y * 2 + yAdd
                let curX = x * 2 + xAdd

                if (Maths.isRandom(.5, _gameType.curRandom.run())) {
                    this.setDataIndex(data1, curX, curY, curX, curY + 1, false)
                    this.setDataIndex(data2, curX + 1, curY, curX + 1, curY + 1, false)
                }
                // 横向两个翻转
                else {
                    this.setDataIndex(data1, curX, curY, curX + 1, curY, true)
                    this.setDataIndex(data2, curX, curY + 1, curX + 1, curY + 1, true)
                }

            }
        }


        this.offset.x = -maxX / 2 * this.cubeSize
        this.offset.y = -maxY / 2 * this.cubeSize

        let w = this.size.x * this.cubeSize
        let h = this.size.y * this.cubeSize
        rectT3.width = w
        rectT3.height = h
        rectT3.center = Vector2.ZERO

        rectT.width = CCubeMaxSize.width
        rectT.height = CCubeMaxSize.height
        rectT.center = Vector2.ZERO

        // 给定范围
        let i = -1
        for (let data of this.data.datas) {
            i++
            if (!data)
                continue
            this.setDataRect(data)

            // 超出屏幕的
            if (!rectT.containsRect(data.rect)) {
                this.data.remove(i)
                continue
            }

            // 排除
            if (!Polygon.elliptic(rectT3, data.circle)) {
                this.data.remove(i)
                continue
            }
            data.dataIndex = i
        }


        let _moreDatas: {
            datas: ILogicData[],
            dirIndex: number,
            pos: Vector2
            dir: Vector2
            dirBack: Vector2
        }[] = []

        // 横排竖排全部的
        for (let data of this.data.datas) {
            if (!data)
                continue
            Vector2.sub(v2T, data.index, data.index2)
            Vector2.lerp(v2T2, data.index, data.index2, .5)
            let moreDatas = Sets.filterValue(_moreDatas, v => {
                Vector2.sub(v2T3, v2T2, v.pos)
                v2T3.normalizeSelf()
                if (v2T3.equals(v.dir) || v2T3.equals(v.dirBack))
                    return true
                return false
            })
            if (!moreDatas) {
                let dirIndex = this.getDirIndex(v2T)
                moreDatas = {
                    datas: [],
                    pos: new Vector2(v2T2),
                    dir: new Vector2(v2T),
                    dirBack: new Vector2(CDir[CDirBack[dirIndex]]),
                    dirIndex,
                }
                // 使用反方向
                if (Maths.isRandom(.5, _gameType.curRandom.run())) {
                    moreDatas.dirIndex = CDirBack[moreDatas.dirIndex]
                }

                _moreDatas.push(moreDatas)
            }
            Sets.add(moreDatas.datas, data)
        }

        let bugDatas: ILogicData[] = []

        // 全正常方向
        for (let v of _moreDatas) {
            let datas = v.datas

            let i = -1
            let backIndex = -1

            if (Maths.isRandom(.5, _gameType.curRandom.run())) {
                if (CDirTop[v.dirIndex])
                    backIndex = 0
                else
                    backIndex = datas.length - 1
            }

            for (let data of datas) {
                i++
                // 顶端可反方向
                if (i == backIndex)
                    this._dirBack2(data, CDirBack[v.dirIndex])
                else {
                    // 同种方向
                    this._dirBack2(data, v.dirIndex)

                    if (datas.length > 1) {

                        bugDatas.push(data)
                    }
                }


            }
        }

        // 添加对着个数
        if (bugCount > 0) {
            Sets.shuffle(bugDatas, true, () => _gameType.curRandom.run())
            for (let i = 0; i < bugCount; i++) {
                let data = bugDatas[i]
                if (!data)
                    break
                Vector2.sub(v2T2, data.index, data.index2)
                this._dirBack2(data, CDirBack[this.getDirIndex(v2T2)])
            }
        }

        for (let data of this.data.datas) {
            if (!data)
                continue
            Vector2.sub(v2T2, data.index, data.index2)
            data.dirIndex = this.getDirIndex(v2T2)
            data.rect.angle = CDirByAngle[data.dirIndex]
        }

        v2T.set()
        v2T2.set()
        // 整体偏移居中
        for (let data of this.data.datas) {
            if (!data)
                continue
            let poss = data.rect.angleCenter()
            for (let pos of poss) {
                Vector2.min(v2T, v2T, pos)
                Vector2.max(v2T2, v2T2, pos)
            }
        }

        v2T2.y += CCubeOffsetY
        Vector2.lerp(this.offsetY, v2T, v2T2, .5)

        if (_gameType.type != EGameType.index) {
            // 屏幕适配居中
            let bottom = 166 + (_platform.isLongScreen ? _platform._banner_.worldTopY : 0)
            // UIMgr.createSpriteSplashItem(UIMgr.getZeroWorldPointNode()).setWorldPosition(new Vec3(100, bottom))
            let top = MaxBoxCC.worldYTop() - (74 + 65 / 2)
            // UIMgr.createSpriteSplashItem(UIMgr.getZeroWorldPointNode()).setWorldPosition(new Vec3(100, top))

            let center = Maths.lerp(top, bottom, .5) - winSize().height / 2
            this.offsetY.y -= center
        }
        else {
            this.offsetY.y -= 100
        }

        console.log("整体偏移移动:" + this.offsetY.toString())
        for (let data of this.data.datas) {
            if (!data)
                continue
            data.rect.x -= this.offsetY.x
            data.rect.y -= this.offsetY.y
        }

        // this._checkNo()
    }

    private _dirBack2(data: ILogicData, dirIndex: number) {
        Vector2.sub(v2T2, data.index, data.index2)
        let dir = CDir[dirIndex]
        if (!dir.equals(v2T2))
            this._dirBackIndex(data)
    }

    private _dirBackIndex(data: ILogicData) {
        v2T.set(data.index)
        data.index.set(data.index2)
        data.index2.set(v2T)
    }

    private getDirIndex(dir: IVector2) {
        return Sets.filterOf(CDir, v => v.x == dir.x && v.y == dir.y)
    }

    public setDataRect(data: ILogicData) {
        data.rect.width = this.cubeSize
        data.rect.height = this.cubeSize * 2

        Vector2.lerp(v2T3, data.index, data.index2, .5)

        v2T3.x = v2T3.x * this.cubeSize + this.offset.x
        v2T3.y = v2T3.y * this.cubeSize + this.offset.y

        v2T3.rotateSelf(Maths.toRadian(-45))

        data.circle.set(v2T3.x, v2T3.y, this.cubeSize / 2)
        data.rect.center = v2T3

        data.rect.x -= this.offsetY.x
        data.rect.y -= this.offsetY.y
    }


    private setDataIndex(data: ILogicData, x1: number, y1: number, x2: number, y2: number, isX: boolean) {
        if (!data)
            return

        if (Maths.isRandom(.5, _gameType.curRandom.run())) {
            data.index.x = x1
            data.index.y = y1

            data.index2.x = x2
            data.index2.y = y2
        }
        else {
            data.index2.x = x1
            data.index2.y = y1

            data.index.x = x2
            data.index.y = y2
        }
    }



}