import { Node, Vec2, Vec3 } from "cc";
import { BaseEntityMgr, EEntityState, IVector2, NodeHelper, P2Body, TVectorSet, _logic } from "../../main/script/Main";
import { Scene } from "./Scene";
import { CResoucesLoadPriority, CSceneData } from "../../main/script/module/define/LogicDefine";
import { Entity } from "./entity/Entity";
import { CubeEntity } from "./entity/CubeEntity";
import { CGameData } from "../../app/GameDefine";




export class EntityMgr extends BaseEntityMgr<Scene, Entity> {


    protected getQueueResoucesPriority(): number[] { return CResoucesLoadPriority }

    public createCube(index: number, showAnimComplete: () => void) {
        let entity = this.create<CubeEntity>(CGameData.useSheep ? CSceneData.cube2PrefabUrl : CSceneData.cubePrefabUrl)
        entity.data = _logic.data.datas[index]
        entity.showAnimComplete = showAnimComplete
        entity.entityStateMackine.change(EEntityState.Load)
        this.scene.cContent.addChild(entity.node)
        entity.entityStateMackine.change(EEntityState.Reset)
        entity.entityStateMackine.change(EEntityState.Run)
        return entity
    }

}