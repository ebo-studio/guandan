import { _decorator, native, sp, sys } from 'cc';
import PopWindow from '../PopWindow';
import { SoundManager } from '../../manager/SoundManager';
import { PbManager } from '../../proto/PbManager';
import { GameSocket } from '../../manager/GameSocket';
import { GlobalData } from '../../manager/GlobalData';
import { HttpConfig } from '../../manager/HttpConfig';
import { utils } from '../../common/utils';
import { UIManager } from '../../manager/UIManager';
import { UIConfig } from '../../manager/UIConfig';
const { ccclass, property } = _decorator;

@ccclass('shareViewItem')
export class shareViewItem extends PopWindow {

    @property(sp.Skeleton)
    public ani: sp.Skeleton = null;

    public setData(obj?: any): void {
        this.ani.node.active = true;
        this.ani.setAnimation(0, 'chusheng', false);
        this.ani.setCompleteListener(() => {
            if (this.ani.animation == 'chusheng') {
                this.ani.setAnimation(0, 'loop', true);
            }

        })
    }

    onShowRecordView() {
        UIManager.Instace.showUI({ path: UIConfig.shareRecordViewItemKey });
    }

    copyText() {
        const textToCopy = 'https://lm6789.com/login.html?inviteId=' + GlobalData.userInfo.user_id;
        if (!sys.isNative) {
            // Web 环境：用 window.open 打开
            if (navigator && navigator.clipboard) {
                navigator.clipboard.writeText(textToCopy).then(() => {
                    // console.log("复制成功:", textToCopy);
                    UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: "复制成功,赶紧去邀请好友获取积分吧" });
                    // 可选：这里可以弹个提示框或用Label显示提示
                }).catch(err => {
                    console.error("复制失败:", err);
                });
            } else {
                console.warn("当前环境不支持剪贴板操作");
            }
            return;
        }
        if (sys.os === sys.OS.ANDROID) {
            native.reflection.callStaticMethod(
                "com/cocos/game/AppActivity", // Java 类路径（包名+类名）
                "copyToClipboard",                             // 方法名
                "(Ljava/lang/String;)V",               // 方法签名
                textToCopy
            );
            UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: "复制成功,赶紧去邀请好友获取积分吧" });
        }
        else if (sys.os === sys.OS.IOS) {
            native.reflection.callStaticMethod(
                "AppController",
                "copyToClipboard:",
                textToCopy
            );
        }
        this.OnCloseClicked();
    }

    public start(): void {
        // this.ani.node.active = true;
        // this.ani.setAnimation(0, 'chusheng', false);
        // this.ani.setCompleteListener(()=>{
        //     if(this.ani.animation == 'chusheng') {
        //         this.ani.setAnimation(0, 'loop', true);
        //     }

        // })
    }
    //关闭
    // onBtnCancelClick() {
    //     SoundManager.playClick();
    //     let sendBuffer = PbManager.instance.sendMsg(GlobalData.C2S_Event.CancelAuditionMatch, null);
    //     GameSocket.send(sendBuffer);
    //     this.hide();
    // }

    public OnCloseClicked() {
        // this.copyText();
        this.ani.loop = false;
        // this.ani.node.active = false;
        // this.ani.setAnimation(0, 'chusheng', false);
        // SoundManager.playClick();
        this.hide();
    }
}

