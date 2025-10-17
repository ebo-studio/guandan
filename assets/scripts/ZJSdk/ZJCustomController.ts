import { _decorator, } from 'cc';
const { ccclass } = _decorator;

@ccclass('ZJCustomController')
export class ZJCustomController {

    // 允许SDK主动获取定位信息
    public canReadLocation: boolean = true;
    // 自定义定位信息
    public locationProvider: string = "";
    public locationLongitude: string = "0.00";
    public locationLatitude: string = "0.00";
    // 允许SDK主动获取电话状态
    public canUsePhoneState: boolean = true;
    // 自定义IMEI
    public imei: string = "";
    // 允许SDK主动获取AndroidID
    public canUseAndroidId: boolean = true;
    // 自定义AndroidID
    public androidId: string = "";
    // 允许SDK主动获取MAC地址
    public canUseMacAddress: boolean = true;
    // 自定义MAC地址
    public macAddress: string = "";
    // 是否允许主动获取OAID
    public canUseOaid: boolean = true;
    public oaid: string = "";
    // 是否允许SDK使用'ACCESS_NETWORK_STATE'权限
    public canUseNetworkState: boolean = true;
    // 是否允许SDK使用存储权限
    public canUseStoragePermission: boolean = true;
    // 是否允许SDK主动读取应用安装列表
    public canReadInstalledPackages: boolean = true;
    public installedPackages: string[] = [];
    // 是否允许SDK在申明和授权了的情况下使用录音权限
    public canRecordAudio: boolean = true;
    // 是否允许SDK主动获取BootID
    public canReadBootId: boolean = true;
    // 是否允许SDK主动附近的Wifi列表
    public canReadNearbyWifiList: boolean = true;
    // 是否允许SDK主动获取传感器信息
    public canUseSensor: boolean = true;
    // 是否允许SDK主动获取运营商信息
    public canUseSimOperator: boolean = true;
    // 当canUseSimOperator==false时，可传入运营商编码，例如：46000
    public simOperatorCode: string = "";
    // 当canUseSimOperator==false时，可传入运营商名称，例如：中国移动
    public simOperatorName: string = "";

}
