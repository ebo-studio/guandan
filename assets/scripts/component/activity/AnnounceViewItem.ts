import { _decorator, instantiate, Label, Prefab, ScrollView, UITransform } from "cc";
import PopWindow from "../PopWindow";
import { AnnounceMenuItem } from "./AnnounceMenuItem";
import { GlobalData } from "../../manager/GlobalData";

const { ccclass, property } = _decorator;
@ccclass('announceViewItem')
export class AnnounceViewItem extends PopWindow {

    @property(ScrollView)
    menu: ScrollView = null;

    @property(ScrollView)
    title: ScrollView = null;

    @property(Label)
    titleLabel: Label = null;

    @property(Label)
    contentLabel: Label = null;

    @property(Prefab)
    itemPrefab: Prefab = null;

    private _items: AnnounceMenuItem[] = [];
    private _selectedItem: AnnounceMenuItem | null = null;

    localNotices: any = [
        {
            id: 1,
            title: "系统维护通知",
            content: "亲爱的各位玩家：\n为了给大家带来更优质的游戏体验和更丰富的功能，我们将于近期进行游戏服务器维护更新。届时服务器将暂时无法登录，请您提前做好下线准备，以免造成不必要的损失。维护结束后，我们将开启全新功能，敬请期待！\n\n一、 维护时间安排\n\n维护开始时间:19:00-21:00\n预计维护时长：2小时\n维护内容： 服务器优化、功能更新与BUG修复。\n\n温馨提示：维护时间可能会根据实际情况提前结束或顺延，请密切关注官方动态。维护期间给您带来的不便，敬请谅解！\n\n二、 全新功能震撼上线\n\n本次更新后，游戏将迎来以下重磅新功能：\n\n1. 全新的平台公告系我们将上线全新的公告系统，确保所有游戏动态、活动信息和重要通知都能第一时间、清晰准确地传达给每一位玩家。请养成留意公告的好习惯哦！\n\n2. “视频福利”系统上线 - 看视频赚积分！全新“视频福利”系统隆重登场！通过观看广告视频，即可轻松获得游戏积分。让您的游戏之旅更有趣，收益更直接！\n\n3. 重磅推出“推广收益”计划我们正式启动长期固定的推广收益计划，为您的推广行为提供持久回报：直推奖励10%：您直接邀请的好友通过观看视频获得积分时，您将立即获得其收益的10%作为奖励。间推奖励3%：您的好友再邀请其他人（即您的间推好友）参与，当这些间推好友获得收益时，您依然可以享受3%的奖励。这是一个长久有效的收益机制，赶快邀请好友加入，构建您的收益网络吧！\n\n4. 积分兑换规则与审核机制为了保障积分兑换的公平性和账户安全，我们引入了以下规则：每日兑换限制：单个账号每天仅可发起1次积分兑换申请。大额兑换审核：单次兑换积分数量达到或超过 5000积分时，将进入人工审核流程。我们将在1个工作日内完成审核，审核通过后积分将自动兑换发放。请您耐心等待。"
        }
    ]

    public setData(obj?: any): void {
        this.menu.content.removeAllChildren();
        this._items = [];
        if (obj) {
            this.localNotices = obj;
        }
        else {
            this.localNotices = GlobalData.userInfo.noticeData;
        }
        for (let i = 0; i < this.localNotices.length; i++) {
            const nodeItem = instantiate(this.itemPrefab);
            const item = nodeItem.getComponent(AnnounceMenuItem);
            // ✅ 传入点击回调
            item.setValue(this.localNotices[i], (notice, itemRef) => this.onNoticeClicked(notice, itemRef));
            this.menu.content.addChild(nodeItem);
            this._items.push(item);
        }

        // 默认选中第一个
        this.setActiveNotice(this.localNotices[0], this._items[0]);


        this.titleLabel.string = this.localNotices[0].title;
        this.contentLabel.string = this.localNotices[0].content;

        this.scheduleOnce(() => {
            this.updateContentHeight();
            const labelHeight = this.contentLabel.node.getComponent(UITransform)!.height;
            const content = this.contentLabel.node.parent!;
            content.getComponent(UITransform)!.height = labelHeight;
        });
    }

    // ✅ 点击公告菜单时更新右侧内容
    onNoticeClicked(notice: any, item: AnnounceMenuItem) {
        this.setActiveNotice(notice, item);
    }

    private setActiveNotice(notice: any, item: AnnounceMenuItem) {
        this.titleLabel.string = notice.title;
        this.contentLabel.string = notice.content;

        // 更新高亮状态
        if (this._selectedItem && this._selectedItem !== item) {
            this._selectedItem.setSelected(false);
        }
        this._selectedItem = item;
        item.setSelected(true);

        if (this.title) {
            this.title.scrollToTop(0.1, false); // 第二个参数为是否缓动，false 代表立即
        }
    }

    updateContentHeight() {
        const contentTransform = this.menu.content.getComponent(UITransform)!;

        let totalHeight = 0;
        for (const item of this._items) {
            const t = item.node.getComponent(UITransform)!;
            totalHeight += t.height;
        }

        // 可选：加上间距
        const spacing = 10; // 你 ScrollView 的 Layout 里设置的 spacing
        totalHeight += (this._items.length - 1) * spacing;

        // ✅ 设置 content 的总高度
        contentTransform.height = totalHeight;
    }

    onClose() {
        this.hide();
    }



}