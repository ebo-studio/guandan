import { _decorator, Component, Label } from "cc";
import { recordData } from "../../manager/GlobalData";

const { ccclass, property } = _decorator;

@ccclass('recordItem')
export class recordItem extends Component {

    @property(Label)
    recordName: Label = null;

    @property(Label)
    time: Label = null;

    @property(Label)
    status: Label = null;

    setValue(data: recordData) {
        this.recordName.string = '钻石 x ' + data.integral;
        this.time.string = this.formatTimestamp(data.created_time);
        if(data.status == '3') {
            this.status.string = '兑换成功';
        }
        else {
            this.status.string = '兑换中';
        }
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
}