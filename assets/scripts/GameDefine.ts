
import { ConfigFileName, TConfigFileName } from "./Config";
import { LanguageDefineConfig } from "./LanguageDefineConfig";
import "./CCImport"
import { sys } from "cc";
import { HTML5, OPPO, VIVO, WECHAT } from "cc/env";

type TPlatformType = keyof typeof apeng.EPlatformType

/**平台 */
let platformType: TPlatformType = "web"
if (!HTML5) {
    // 自动判断平台
    if (window["wx"])
        platformType = "wx"
    if (window["qq"])
        platformType = "qq"
    if (window["tt"])
        platformType = "tt"
}
if (OPPO)
    platformType = "oppo"
if (VIVO)
    platformType = "vivo"


/**默认语言 */
const defaultType: keyof typeof apeng.ELanguageType = "chinese"

const chinaLanguage = (defaultType as any) == "chinese"

let _type = platformType as any
const IsNativeAd = _type == "oppo" || _type == "vivo"
/**内部自定义常量逻辑 */
export const CGameData = {
    SettingUrl: "setting/prefab/SettingUI",
    PropGetUrl: "scene/prefab/ui/PropGetUI",
    FailUrl: "scene/prefab/ui/FailUI",
    LevelSelectUrl: "scene/prefab/ui/LevelSelectUI",
    SuccessUrl: "scene/prefab/ui/" + (IsNativeAd ? "SuccessNativeUI" : "SuccessUI"),
    RunUIUrl: "scene/prefab/ui/RunUI",
    ResetCardAnimUI: "scene/prefab/ui/ResetCardAnimUI",
    /**使用羊皮肤，海外快手上不去 */
    useSheep: false,
}

export const initData: apeng.IInitData = {
    gameName: "救救这只小猪",
    rewardVideoUseShare: false,
    isTest: true,
    isLog: true,
    platformType,
    useModuleStorageType: false,
    openWebSimulationUI: true,
    useWebSimulationUI: false,
    openPrivacy: (<TPlatformType[]>[
        "qq",
        "vivo",
        "oppo",
    ]).indexOf(platformType) !== -1 && chinaLanguage,
    showLoadingText: (<TPlatformType[]>[
        "web",
        "wx",
        "tt",
        "oppo",
        "vivo",
        "ks",
        "xiaomi",
        "hbs",
        "qq",
    ]).indexOf(platformType) !== -1 && chinaLanguage,
    versionId: "2023SA0049994",
    openGm: false,
    loadingCompleteColorAnim: "#FEFDE7",
    initSceneUrl: "scene/scene/Scene",
    audioClickUrl: "main/audio/click_sound",
    configUrl: "config/configs",
    touchMovePrefabUrl: "main/particle/7/prefab",
    touchClickPrefabUrl: "main/particle/1/prefab",
    sceneChangeWaitUrl: "",
    uiUrl: {
        index: "main/prefab/index/IndexUI",
        indexBg: "main/prefab/index/IndexBgUI",
        prop: "",
    },
    startBlockAd: 0,
    share: {
        callTime: 0,
        list: {
            title: [
                "一口气玩了20关，根本停不下来。",
                "@你，这是一款超难消除游戏",
                "超还上头的消除游戏，来冲吧",
                "不通关谁都别睡觉！",
            ],
            imgUrl: [],
        },
        templateId: [],
    },
    newUseEnterGame: (<TPlatformType[]>[
        "qq",
    ]).indexOf(platformType) === -1,
    loadingDuration: 0,
    configDefine: ConfigFileName,
    languageDefine: LanguageDefineConfig,
    getLanguageType: () => {
        let value = sys.localStorage.getItem("language")
        if (value === null || value === "null" || value === undefined || value === "")
            return defaultType
        let type = Number(value)
        if (isNaN(type))
            return defaultType
        return defaultType
    },
}
