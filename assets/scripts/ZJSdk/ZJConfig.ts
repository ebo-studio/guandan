import { _decorator } from 'cc';
import { ZJCustomController } from './ZJCustomController';
const { ccclass } = _decorator;

@ccclass('ZJConfig')
export class ZJConfig {

    // 媒体ID
    public appId: string;
    // 用户ID，未获取到时可以为空
    private userId: string = "";
    // 调试模式，会输出调试日志
    private isDebug: boolean = true;
    // 隐私控制
    private customController: ZJCustomController | null = null;
    // GDPR 配置
    private gdpr: number = -1;
    // COPPA 配置
    private coppa: number = -1;
    // CCPA
    private ccpa: number = -1;
    // 用户年龄，用于隐私保护和内容是配
    private age: number = 0;

    constructor(appId: string, userId?: string, isDebug: boolean = true,customController?: ZJCustomController, gdpr: number = -1, coppa: number = -1, ccpa: number = -1, age: number = 0) {
        this.appId = appId;
        this.userId = userId ?? "";
        this.isDebug = isDebug;
        this.customController = customController ?? null;
        this.gdpr = gdpr;
        this.coppa = coppa;
        this.ccpa = ccpa;
        this.age = age;
    }

}