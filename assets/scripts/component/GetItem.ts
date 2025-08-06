import { _decorator, Label, sp } from 'cc';
import PopWindow from './PopWindow';
import Http from '../proto/Http';
import { UrlConfig } from '../manager/UrlConfig';
import { GlobalData } from '../manager/GlobalData';
import { utils } from '../common/utils';
const { ccclass, property } = _decorator;

@ccclass('GetItem')
export class GetItem extends PopWindow {

    @property(sp.Skeleton)
    public ani: sp.Skeleton = null;

    @property(Label)
    public propCount: Label = null;

    public setData(obj?: any): void {
        // console.log('奖励', obj);
        this.propCount.string = 'x' + obj.count;
        this.ani.node.active = true;
        this.ani.setAnimation(0, 'chusheng', false);
        this.ani.setCompleteListener(() => {
            if (this.ani.animation == 'chusheng') {
                this.ani.setAnimation(0, 'loop', true);
                this.updateScore();
            }
        });

    }

    async updateScore() {
        var commonUrl = UrlConfig.getHttpUrl();
        const test = await Http.post(commonUrl + '/api/Open/changeScore', {
            user_id: GlobalData.userInfo.user_id,
            score_type: '1',
            score: '1'
        })
        if(test.code == 200) {
            GlobalData.userInfo.score = test.data;
            utils.send(GlobalData.localEvent.UpdateScore);
        }
        // console.log("JSON请求返回:", test);
    }

    public OnCloseClicked() {
        this.ani.loop = false;
        // this.ani.node.active = false;
        // this.ani.setAnimation(0, 'chusheng', false);
        // SoundManager.playClick();
        this.hide();
    }
}

