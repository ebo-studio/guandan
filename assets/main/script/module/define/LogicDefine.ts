import { Size, ccenum } from "cc"
import { CubeEntity } from "../../../../scene/script/entity/CubeEntity"
import { Circle, Maths, Rectangle, Vector2 } from "../../Main"

export enum EEntityType {
    None,
    Cube,
}

export enum EPropId {
    /**提示 */
    tip = 1,
    /**消除 */
    remove = 2,
    /**对换 */
    dir = 3,
    time = 7,
    /**体力 */
    power = 8,
}
ccenum(EPropId)


/**房间加载的优先级排序 越前越先加载*/
export const CResoucesLoadPriority: EEntityType[] = [

]


export interface ILogicData {
    index: Vector2,
    index2: Vector2,
    rect: Rectangle,
    circle: Circle,
    entity: CubeEntity
    dataIndex: number
    dirIndex: number
    frontIndex: number
}


export const CSceneData = {
    cubePrefabUrl: "scene/prefab/entity/CubeEntity",
    cube2PrefabUrl: "scene/prefab/entity/CubeEntity2",
}

export const CDir = [
    new Vector2(0, 1),
    new Vector2(0, -1),
    new Vector2(1, 0),
    new Vector2(-1, 0),
]
export const CDirBack = [
    1,
    0,
    3,
    2,
]
export const CDirTop = [
    true,
    false,
    true,
    false
]

const v2T = new Vector2()
export const CDirByAngle = CDir.map(v => Vector2.angle(v2T.set(v), 90) - 45)
export const CDirRotate = CDir.map(v => new Vector2(v).rotateSelf(Maths.toRadian(315)))

export const CCubeSize = 90
/**超出区域裁剪 */
export const CCubeMaxSize = new Size(720, 920)
/**整体y轴偏移 */
export const CCubeOffsetY = 0