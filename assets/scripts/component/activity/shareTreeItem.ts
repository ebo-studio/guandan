import { _decorator, Component, EventTouch, Label, Node, RichText, UITransform } from "cc";
import { recordData } from "../../manager/GlobalData";

const { ccclass, property } = _decorator;

@ccclass('shareTreeItem')
export class shareTreeItem extends Component {

    @property(RichText)
    title!: RichText;

    setValue(data: any) {

        const base = '#745A49';
        const green = '#00C853';
        const red = '#FF3B30';

        const timeStr = typeof data?.create_time === 'number'
            ? this.formatTimestamp(data.create_time)
            : String(data?.create_time ?? '');

        const nameStr = this._escapeRichTextContent(String(data?.name ?? ''));
        const href = encodeURIComponent(String(data?.id ?? data?.uid ?? data?.name ?? ''));

        this.title.string =
            `<color=${base}>我于</color>` +
            `<color=${green}>${timeStr}</color>` +
            `<color=${base}>邀请了</color>` +
            // 用 <on click="onNameClick" param="..."> 绑定点击
            `<color=${red}><u><on click="onNameClick" param="${data.user_id}">${nameStr}</on></u></color>` +
            `<color=${base}>注册游戏, 获得了1积分</color>`;
        //this.title.string = '<color=#745A49>我于<color=#745A49>' + data.create_time + '</color>邀请了' + data.name + '注册游戏,' + '获得了1积分</color>';
    }

     onNameClick(event: EventTouch, param: string) {
        const id = decodeURIComponent(param);
        console.log('点击用户名，id/param =', id);
        // TODO: 打开用户详情 / 跳转 / 发事件 等
    }


    formatTimestamp(ts: number): string {
        // 时间戳是秒，JS 的 Date 需要毫秒
        const date = new Date(ts * 1000);

        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');

        return `${year}-${month}-${day} ${hours}:${minutes}`;
    }

    /** 将富文本内容中的特殊字符转义，避免破坏标签结构 */
    private _escapeRichTextContent(s: string): string {
        return s
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }

}