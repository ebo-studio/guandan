import { Vec2, Vec3, Camera, Node, EventTouch, EventMouse, rect, Label, game, Prefab, Size } from "cc"
import { ccclass, BaseScene, LoadDir, _config_, _guide, EPlatformType, _ui, Polygon, NodeHelper, IVector2, _timer, Maths, _logic, Rectangle, Sets, _main, RectHollow, Vector2, IGuideMaskUIText, BaseHollow, EventHandlerCC, ETweenType, TweenHelper, EUIState, _audio, EEntityState, _language, PoolOnce, Times, property, _platform, Move, _resouces, _gameType, winCenterPostion } from "../../main/script/Main"
import { EntityMgr } from "./EntityMgr"
import { CDir, CSceneData, EEntityType, ILogicData } from "../../main/script/module/define/LogicDefine"
import { EGameType } from "../../main/script/module/define/GameTypeDefine"
import { CubeEntity } from "./entity/CubeEntity"




const v2T = new Vec2()
const v2T2 = new Vector2()
const v3T = new Vec3()
const rectT = new Rectangle()
const sizeT = new Size()

@ccclass("Scene")
export class Scene extends BaseScene {

    public entityMgr = new EntityMgr(this)

    public cContent: Node = null!
    public cACube: Node = null!
    public cAEffect: Node = null!
    public cADragParent: Node = null!

    public isLoadComplete: boolean = false

    public animLoadDir = new LoadDir(-1, null!)
    public animLoadDir2 = new LoadDir(-1, null!)

    public _touchId: number = -1

    public touchMovePos = new Vec2()
    public isUseBack = false

    onCreate() {
    }

    onUpdate() {
        this.entityMgr.updateStateMachine()
    }

    public create() {
        this._createInit()
        let datas: ILogicData[] = []
        for (let data of _logic.data.datas)
            if (data)
                datas.push(data)

        this.startAnim(
            datas.length,
            (index) => {
                let data = datas[index]
                data.entity = this.entityMgr.createCube(data.dataIndex, this.animLoadDir.subCount())
            },
            (indexs) => {
                for (let i = 0; i < datas.length; i++)
                    indexs.push(i)
            },
            () => {
                for (let v of datas)
                    v.entity.animComplete()
                _ui.blockTouchEvent(false)
                this.isLoadComplete = true
                this.guide()
            }
        )
    }

    public colliderAnim(index: number) {

        let data = _logic.data.datas[index]
        let datas: ILogicData[] = [data]
        _logic.getFronts(data.dirIndex, data, datas, 0)
        Sets.delete(datas, data)

        // 速度衰减
        let speedSubRatio = .2
        // 起始速度
        let startSpeed = 1

        let i = -1
        for (let v of datas) {
            i++
            v.entity.colliderAnim(
                data,
                startSpeed * Math.pow(1 - speedSubRatio, v.frontIndex!),
            )
        }

    }

    public finger(data: ILogicData) {
        _guide.finger({
            position: () => {
                Vector2.set(v3T, data.rect.center)
                v3T.z = 0
                NodeHelper.convertToWorldSpaceAR(v3T, this.cContent, v3T)
                return v3T
            },
            touchStartCloseUI: false,
        })
    }

    public startAnim(
        count: number,
        create: (index: number) => void,
        getIndexs: (indexs: number[]) => void,
        complete: () => void,
    ) {
        if (_gameType.type != EGameType.index)
            _ui.blockTouchEvent(true)
        this.animLoadDir.count = count
        this.animLoadDir.onFinish = complete

        let indexs: number[] = []
        getIndexs(indexs)

        let allAnimDuration = Maths.lerp(2, 1, 16 / count)
        let interval = allAnimDuration / count

        for (let i = 0; i < indexs.length; i++)
            this.scheduleOnce(() => {
                create(indexs[i])
            }, i * interval)

    }

    public playRemoveAudio() {
        if (_platform.type != EPlatformType.oppo)
            _platform._vibrate_.short()
        _audio.play("scene/audio/remove")
    }

    public useBack() {
        this.isUseBack = true
        _logic.emit(_logic.EventType.USE_DIRBACK)
    }

    public guide() {
        switch (_gameType.type) {
            case EGameType.level: {
                let config = _logic._level.curConfig
                if (config.tip === 1)
                    this.scheduleOnceCover(this._guide, 3)
                break
            }
            case EGameType.today: {
                let config = _logic._today.curConfig
                if (config.tip === 1)
                    this.scheduleOnceCover(this._guide, 3)
                break
            }
        }
    }

    public clearTips() {
        _guide.closeFinger()
        _guide.closeMask()
        this.entityMgr.entitesType.get(EEntityType.Cube)
            .forEach<CubeEntity>(entity => {
                entity.tipAnimStop()
            })
    }

    private _guide() {
        if (_logic.storage.get("guide", "false") != "false")
            return
        _logic.storage.set("guide", "true")

        for (let data of _logic.data.datas)
            if (data)
                if (data.entity)
                    if (!_logic.getFront(data.dataIndex)) {
                        this.finger(data)
                        break
                    }
    }

    public getIndexs(size: Vector2, indexs: number[], startIndex: number) {
        let maxX = size.x,
            maxY = size.y
        for (let y = 0; y < maxY; y++) {
            let arr: number[] = []
            for (let x = 0; x < maxX; x++)
                arr.push(x * maxY + y + startIndex)
            if (y % 2 != 0)
                arr.reverse()
            indexs.push(...arr)
        }
    }


    private _createInit() {
        this.isLoadComplete = false
        this.unscheduleAllCallbacks()
        _timer.clearAll(this)
        // 回收所有的
        this.entityMgr.clear(false)
        _guide.closeFinger()
        _guide.closeMask()
        this.isUseBack = false
    }

    public touchStart(e: EventTouch) {
        if (!this.isLoadComplete)
            return

        if (this._touchId != -1)
            return
        this._touchId = e.getID()
        _guide.closeFinger()
    }

    public touchEnd(e: EventTouch) {

        if (!this.isLoadComplete)
            return
        if (!(this._touchId != -1 && this._touchId == e.getID()))
            return
        this._touchId = -1

        let data = this.touchData(e)
        if (!data)
            return

        if (!this.isUseBack)
            if (
                _gameType.type == EGameType.level
            ) {
                if (_logic.data.count() <= 1)
                    if (_logic._level.step.cur <= 1) {
                        _gameType.isRun = false
                    }
                _logic._level.step.sub(1)
            }

        if (_gameType.type == EGameType.index) {
            if (data)
                _logic.dirBack(data.dataIndex)
            return
        }

        if (this.isUseBack) {
            _logic.dirBack(data.dataIndex)
            _logic.emit(_logic.EventType.USE_DIRBACK_COMPLETE)
            this.isUseBack = false
            return
        }

        let front = _logic.getFront(data.dataIndex)
        if (!front) {
            data.entity.entityStateMackine.change(EEntityState.Over)
        }
        else {
            // 直接移动位置
            let addIndex = front.moveCount - 1
            if (addIndex > 0) {
                Vector2.mul(v2T, CDir[data.dirIndex], addIndex)
                data.index.addSelf(v2T)
                data.index2.addSelf(v2T)
                _logic.setDataRect(data)
            }
            data.entity.moveAnim()
        }
    }


    private touchData(e: EventTouch) {
        e.getUILocation(v2T)
        NodeHelper.convertToNodeSpaceAR(v3T, this.cContent, v2T)
        return this.pointInData(v3T)
    }


    private pointInData(point: IVector2) {
        let i = -1
        for (let data of _logic.data.datas) {
            i++
            if (!data)
                continue
            if (!data.entity)
                continue

            if (Polygon.pointInPolygon(point, data.rect.angleCenter()))
                return data
        }
        return null!
    }

    public touchCancel(e: EventTouch) {
        if (!this.isLoadComplete)
            return
        if (!(this._touchId != -1 && this._touchId == e.getID()))
            return
        this._touchId = -1
    }

    public touchMove(e: EventTouch) {
        if (!this.isLoadComplete)
            return
        if (!(this._touchId != -1 && this._touchId == e.getID()))
            return
    }

    public mouseWheel(e: EventMouse) {
        if (!this.isLoadComplete)
            return
    }


    public getTouchPos(e: EventTouch) {
        e.getUILocation(this.touchMovePos)
        // 转换为节点内
        Vector2.sub(this.touchMovePos, this.touchMovePos, winCenterPostion())
    }


}

