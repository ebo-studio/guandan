import { sys, native } from 'cc';
import { UIManager } from '../manager/UIManager';
import { UIConfig } from '../manager/UIConfig';
import { NetworkManager } from '../manager/NetworkManager';
import { GlobalData } from '../manager/GlobalData';

/**
 * ✅ 游戏启动时调用此函数自动检测更新
 */
export async function checkForNotice() {
    if (sys.platform !== sys.Platform.ANDROID) {
        console.log("非 Android 平台，跳过更新检测");
        return;
    }

    const localNotices: any = [
        {
            id: 1,
            title: "系统维护通知",
            content: "亲爱的各位玩家：\n为了给大家带来更优质的游戏体验和更丰富的功能，我们将于近期进行游戏服务器维护更新。届时服务器将暂时无法登录，请您提前做好下线准备，以免造成不必要的损失。维护结束后，我们将开启全新功能，敬请期待！\n一、 维护时间安排维护开始时间:预计维护时长：小时维护内容： 服务器优化、功能更新与BUG修复。温馨提示：维护时间可能会根据实际情况提前结束或顺延，请密切关注官方动态。维护期间给您带来的不便，敬请谅解！\n二、 全新功能震撼上线本次更新后，游戏将迎来以下重磅新功能：\n1. 全新的平台公告系我们将上线全新的公告系统，确保所有游戏动态、活动信息和重要通知都能第一时间、清晰准确地传达给每一位玩家。请养成留意公告的好习惯哦！\n2. “视频福利”系统上线 - 看视频赚积分！全新“视频福利”系统隆重登场！通过观看广告视频，即可轻松获得游戏积分。让您的游戏之旅更有趣，收益更直接！\n3. 重磅推出“推广收益”计划我们正式启动长期固定的推广收益计划，为您的推广行为提供持久回报：直推奖励10%：您直接邀请的好友通过观看视频获得积分时，您将立即获得其收益的10%作为奖励。间推奖励3%：您的好友再邀请其他人（即您的间推好友）参与，当这些间推好友获得收益时，您依然可以享受3%的奖励。这是一个长久有效的收益机制，赶快邀请好友加入，构建您的收益网络吧！\n4. 积分兑换规则与审核机制为了保障积分兑换的公平性和账户安全，我们引入了以下规则：每日兑换限制：单个账号每天仅可发起1次积分兑换申请。大额兑换审核：单次兑换积分数量达到或超过 5000积分时，将进入人工审核流程。我们将在1个工作日内完成审核，审核通过后积分将自动兑换发放。请您耐心等待。"
        }
    ]

    const versionUrl = "https://lm6789.com/notice.json"; // ✅ 服务器配置文件地址

    try {
        const response = await fetch(versionUrl + "?t=" + Date.now());
        const data = await response.json();

        // localNotices[0].id = data.id;
        // localNotices[0].title = data.title;
        // localNotices[0].content = data.content;
        GlobalData.loginInfo.service = data.service;

        // if(data.isShow) {
        //     UIManager.Instace.showUI({ path: UIConfig.announceViewItemKey, data: localNotices });
        // }
        

        // if (remoteVersion > localVersionCode) {
        //     console.log(`📢 发现新版本 v${remoteVersion}`);
        //     showUpdateDialog(updateDesc, downloadUrl);
        // } else {
                
        //     console.log("✅ 当前已是最新版本");
        // }
    } catch (err) {
        // UIManager.Instace.showUI({ path: UIConfig.announceViewItemKey, data: localNotices });
        console.error("❌ 检查更新失败:", err);
    }
}
