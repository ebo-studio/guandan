import { Node, Sprite, SpriteFrame } from "cc";
import { ETweenType, IVector2, Maths, Move, NodeHelper, Sets, TweenHelper, Vector2, _config_, _gameType, _logic, _resouces, _timer, ccclass, winCenterPostion, winSize } from "../../../main/script/Main";
import { EEntityType, ILogicData } from "../../../main/script/module/define/LogicDefine";
import { Entity } from "./Entity";

const v2T = new Vector2()

@ccclass("CubeEntity")
export class CubeEntity extends Entity {

    public entityType = EEntityType.Cube
    public isPut = true
    public isUpdateStateMackine = true
    public isDestroy = false
    public isMoving() {
        return false
    }

    private isRotateAnim = false
    private toRotate = -1

    public data: ILogicData = null!
    private _move = new Move()

    protected moveRatio = .5

    public isAnim: boolean = false
    public showAnimComplete: () => void = null!


    protected onStateEnterLoad() {
        super.onStateEnterLoad()
        // 起始速度
        this._move.init(this.node, false, 800)
    }

    protected onStateEnterRun() {
        super.onStateEnterRun()
        this.isRotateAnim = false
        this.setRotateZ(this.data.rect.angle, false)
        this.setScaleNum(_logic.scaleRatio, false)

        if (this.showAnimComplete) {
            this.setPositionXY(Vector2.ZERO, false)
            this._move.setRunData(1, (v) => {
                Vector2.set(v.target, this.data.rect.center)
            })

            this._move.run(this.showAnimComplete)
        }
        else {
            this.setPositionXY(this.data.rect.center, false)
        }
        this._playIdle()
    }

    protected onStateUpdateRun() {
        super.onStateUpdateRun()
        this.stateUpdate()
    }

    protected onStateUpdateOver() {
        super.onStateUpdateOver()
        this.stateUpdate()
    }


    private stateUpdate() {
        this._move.onUpdate()

        // 方向翻转动画
        if (this.isRotateAnim) {
            this.toRotate = Maths.lerp(this.toRotate, this.data.rect.angle, .1)
            if (Math.abs(this.data.rect.angle - this.toRotate) < .1) {
                this.toRotate = this.data.rect.angle
                this.isRotateAnim = false
            }
            this.setRotateZ(this.toRotate, false)
        }
    }


    protected onStateEnterExit(arg?: string) {
        this.isAnim = false

        this._move.clear()
        this.tipAnimStop()


        super.onStateEnterExit()

        if (!_gameType.isRun) {
            if (this.scene.entityMgr.entitesType.get(EEntityType.Cube).size == 1
                && _logic.data.hasZero())
                _gameType._runComplete.run(true)
        }
    }


    protected onStateEnterOver() {
        super.onStateEnterOver(false)
        this.scene.clearTips()

        this.scene.playRemoveAudio()
        if (_logic.data.count() <= 1)
        _gameType.isRun = false

        _logic.data.remove(this.data.dataIndex)

        this._move.setRunData(1, (v) => {
            _logic.addDirMul(v.target, 20, this.data)
            Vector2.add(v.target, v.target, this.data.rect.center)
            v.speedMul = 3
        })

        this._playIdle()
        this._move.run(() => {
            _logic.checkNo()
            this.scene.entityMgr.remove(this)
        })
    }

    private _playIdle() {
        this.SpineCC.play("idle", true)
    }

    public moveAnim() {
        this.SpineCC.play("stun", false)
        this.scheduleOnceCover(this._playIdle, 1)
        this._move.setRunData(2, (v, index) => {
            Vector2.set(v.target, this.data.rect.center)
            if (index == 0) {
                _logic.addDirMul(v.target, .5, this.data)
                v.onEnd = () => {
                    this.scene.colliderAnim(this.data.dataIndex)
                    this.scene.playRemoveAudio()
                }
                // 点击的移动出去速度
                v.speedMul = 1.5
            }
            else {
                // 超出边界后 回来的速度
                v.speedMul = 1.5
            }
        })
        this._move.run(() => {
            if (!_gameType.isRun) {
                _gameType._runComplete.run(false)
            }
        })
    }



    public colliderAnim(other: ILogicData, speedMul: number) {
        this._move.setRunData(2, (v, index) => {
            Vector2.set(v.target, this.data.rect.center)
            if (index == 0) {
                _logic.addDirMul(v.target, .5, other)
                v.speedMul = speedMul
            }
            else {
                // 回退速度
                v.speedMul = 1.1
            }
        })
        this._move.run()
    }

    public dirBack(oldAngle: number) {
        this.toRotate = oldAngle
        this.isRotateAnim = true
    }

    public tipAnim() {
        TweenHelper.default(this.node, ETweenType.Breathe)
    }

    public tipAnimStop() {
        TweenHelper.stop(this.node, ETweenType.Breathe)
    }

    public animComplete() {

    }


}