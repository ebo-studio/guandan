import { _decorator, Component, director, AudioSource, AudioClip, tween, sys } from 'cc';
import { utils } from './common/utils';
import { GlobalData, ReconnectType } from './manager/GlobalData';
import { HttpConfig } from './manager/HttpConfig';
import { platform } from './platform/platform';
import { UIManager } from './manager/UIManager';
import { UIConfig } from './manager/UIConfig';
import { PbManager } from './proto/PbManager';
import { GameSocket } from './manager/GameSocket';
const { ccclass, property } = _decorator;

@ccclass('AppGlobal')
export class AppGlobal extends Component {
    //音效播放器
    @property(AudioSource)
    soundAuido: AudioSource = null;
    //音效播放器
    @property(AudioSource)
    soundClickAuido: AudioSource = null;
    //音效播放器
    @property(AudioSource)
    soundClockAuido: AudioSource = null;
    //音效播放器
    @property(AudioSource)
    musicAuido: AudioSource = null;

    private _wantPlay = false;                 // Web 自动播放解锁前的意愿
    private _unlocked = !sys.isBrowser;        // 浏览器里默认未解锁
    private _currentClip: AudioClip | null = null;


    public static instance: AppGlobal = null;

    public errorCallBack: Function = null; //全局回调
    private static _eventBound = false;

    //很奇怪,appglobal 是常驻节点,但是onLoad 和 start 切换场景的时候会再次调用
    onLoad() {
        // if (GlobalData.userInfo.haveToken) return;
        //常驻节点
        // if (AppGlobal.instance) {
        //     this.node.destroy(); // 避免场景里重复生成
        //     return;
        // }
        director.addPersistRootNode(this.node);
        AppGlobal.instance = this;
        HttpConfig.init();

        if (!AppGlobal._eventBound) {
            this.bindEvent();
            AppGlobal._eventBound = true;
        }

        if (sys.isBrowser) {
            const unlockOnce = () => {
                this._unlocked = true;
                if (this._wantPlay && this.musicAuido?.clip) this.musicAuido.play();
                window.removeEventListener('pointerdown', unlockOnce);
                window.removeEventListener('keydown', unlockOnce);
                window.removeEventListener('touchstart', unlockOnce);
            };
            window.addEventListener('pointerdown', unlockOnce, { once: true });
            window.addEventListener('keydown', unlockOnce, { once: true });
            window.addEventListener('touchstart', unlockOnce, { once: true });
        }
    }
    start() {
        this.requestLogin();
    }
    onDestroy() {
        this.removeEvent();
    }
    requestLogin() {
        if (GlobalData.userInfo.isLogin) return;
        platform.init();
        GameSocket.initAndConnect();
        utils.send(GlobalData.localEvent.FirstUpdate);
        GlobalData.userInfo.isLogin = true;
        // if (GlobalData.userInfo.haveToken) return;
        // console.log("请求登录--->");

        // if (GlobalData.userInfo.isOnline) {
        //     var ref = window.location.href;
        //     // var ref= "http://farm.zhongyigames.com/?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NzA4MjkyMDksInVzZXJuYW1lIjoiMTU1MTUyNzcwMDMifQ.EZAp5OoAVWSGZY-5VMOgIvugXZ9bkmJhvgtxK1svdSU"
        //     // var ref= "http://farm.zhongyigames.com/?code=4rjzbdlqktb8zzklqzyvsj1dw4brw7vo"
        //     console.log("ref ", ref);
        //     GlobalData.loginInfo.code = utils.queryURLParams(ref, "code");
        //     if (GlobalData.loginInfo.code == "") {
        //         console.error("code无效 ", GlobalData.loginInfo.code);
        //         UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: "code无效" });
        //         return;
        //     }
        //     GlobalData.requestLogin({
        //         success: () => {
        //             GlobalData.requestGetUserInfo({
        //                 success: () => {
        //                     GlobalData.userInfo.haveToken = true;
        //                     GameSocket.initAndConnect();
        //                     utils.send(GlobalData.localEvent.FirstUpdate);
        //                 }
        //             });
        //         }
        //     });
        // } else {
        //     UIManager.Instace.showUI({
        //         path: UIConfig.MessageBoxCommonTestKey,
        //         data: {
        //             okName: "确定",
        //             cancleName: "取消",
        //             des: "选择token",
        //             okFunc: (code: string = 'xuhang') => {
        //                 GlobalData.loginInfo.code = code;
        //                 GlobalData.requestLogin({
        //                     success: () => {
        //                         GlobalData.requestGetUserInfo({
        //                             success: () => {
        //                                 GlobalData.userInfo.haveToken = true;
        //                                 GameSocket.initAndConnect();
        //                                 utils.send(GlobalData.localEvent.FirstUpdate);
        //                             }
        //                         });
        //                     }
        //                 });
        //             },
        //             cancleFunc: null
        //         }
        //     });
        // }
    }
    bindEvent() {
        console.log('我看看几次');
        // this.removeEvent();
        utils.on(GlobalData.localEvent.GameError, this, this.onGameError);
        utils.on(GlobalData.localEvent.SocketError, this, this.onSocketError);
        utils.on(GlobalData.localEvent.KickGameStart, this, this.onKickGameStart);
        utils.on(GlobalData.localEvent.KickRoomId, this, this.onKickRoomId);
        utils.on(GlobalData.localEvent.AuditionRoomId, this, this.onAuditionRoomId);
        utils.on(GlobalData.localEvent.ScoreMatchSucces, this, this.onScoreMatchSucces);
        utils.on(GlobalData.localEvent.KickFreeUp, this, this.onKickFreeUp);
        utils.on(GlobalData.localEvent.KickFinish, this, this.onKickFinish);
        utils.on(GlobalData.localEvent.ScoreFinish, this, this.onScoreFinish);
        utils.on(GlobalData.localEvent.Reconnect, this, this.onReconnect);
        utils.on(GlobalData.localEvent.JoinRoomResult, this, this.onJoinRoomResult);
        utils.on(GlobalData.localEvent.ForceExitGame, this, this.onForceExitGame);
    }
    removeEvent() {
        console.log('移除');
        utils.off(GlobalData.localEvent.GameError, this, this.onGameError);
        utils.off(GlobalData.localEvent.SocketError, this, this.onSocketError);
        utils.off(GlobalData.localEvent.KickGameStart, this, this.onKickGameStart);
        utils.off(GlobalData.localEvent.KickRoomId, this, this.onKickRoomId);
        utils.off(GlobalData.localEvent.AuditionRoomId, this, this.onAuditionRoomId);
        utils.off(GlobalData.localEvent.ScoreMatchSucces, this, this.onScoreMatchSucces);
        utils.off(GlobalData.localEvent.KickFreeUp, this, this.onKickFreeUp);
        utils.off(GlobalData.localEvent.KickFinish, this, this.onKickFinish);
        utils.off(GlobalData.localEvent.ScoreFinish, this, this.onScoreFinish);
        utils.off(GlobalData.localEvent.Reconnect, this, this.onReconnect);
        utils.off(GlobalData.localEvent.JoinRoomResult, this, this.onJoinRoomResult);
        utils.off(GlobalData.localEvent.ForceExitGame, this, this.onForceExitGame);
    }
    onForceExitGame() {
        console.log("强制退出");
        UIManager.Instace.showUI({ path: UIConfig.LoadItemKey, data: GlobalData.sceneName.lobby });
    }
    //加入房间(大厅)
    onJoinRoomResult(type: boolean, roomType: number) {
        console.log("加入房间大厅------> ", type, roomType);
        if (type) {
            GlobalData.cardInfo.gameType = roomType;
            //在游戏内,刷新界面
            if (utils.getSceneName() == GlobalData.sceneName.game) {
                utils.send(GlobalData.localEvent.ReEnterGame);
            }
            else {
                //在大厅,进入游戏
                UIManager.Instace.showUI({ path: UIConfig.LoadItemKey, data: GlobalData.sceneName.game });
            }
        } else {
            // console.log("加入房间失败!");
            UIManager.Instace.showUI({
                path: UIConfig.MessageBoxCommonKey,
                data: {
                    okName: "确定",
                    cancleName: "取消",
                    des: "加入房间失败",
                    okFunc: () => {

                    },
                    cancleFunc: null
                }
            });
        }
    }
    //出错了
    onGameError(data: GameMsg.Error) {
        console.log("onGameError ", data);
        //提示框
        if (data.type == 1) {
            UIManager.Instace.showUI({
                path: UIConfig.MessageBoxCommonKey,
                data: {
                    okName: "确定",
                    cancleName: "取消",
                    des: data.msg,
                    okFunc: () => {
                        AppGlobal.instance.errorCallBack && AppGlobal.instance.errorCallBack();
                    },
                    cancleFunc: null
                }
            });
        }
        //隐藏的提示(无用)
        else if (data.type == 2) {

        }
        //提示条
        else if (data.type == 3) {
            UIManager.Instace.showUI({ path: UIConfig.MessageHintKey, data: data.msg });
        }
    }
    //socket 断开
    onSocketError() {
        UIManager.Instace.showUI({ path: UIConfig.WaitItemKey, data: { opacity: 0.5, des: "加载中..." } });
        UIManager.Instace.clearAllUI();
        GameSocket.initAndConnect();
        // UIManager.Instace.showUI({
        //     path: UIConfig.MessageBoxCommonKey,
        //     data: {
        //         okName: "确定",
        //         cancleName: "取消",
        //         des: "网络出现了问题,请稍后再试!",
        //         okFunc: () => {
        //             UIManager.Instace.clearAllUI();
        //             GameSocket.initAndConnect();
        //         },
        //         cancleFunc: null
        //     }
        // });
    }
    //开赛通知
    onKickGameStart(time: number) {
        console.log("开赛通知---> ", time);
        UIManager.Instace.showUI({ path: UIConfig.GameStartNoticeKey, data: time });
    }
    //淘汰赛房间号
    onKickRoomId(roomId: number) {
        console.log("加入房间- 淘汰赛房间号---> ", roomId);
        GlobalData.cardInfo.roomId = roomId;
        let baseInfo = GameMsg.Room.create({ roomId: GlobalData.cardInfo.roomId });
        let baseBuffer = GameMsg.Room.encode(baseInfo).finish();
        let sendBuffer = PbManager.instance.sendMsg(GlobalData.C2S_Event.KickJoinRoom, baseBuffer);
        GameSocket.send(sendBuffer);
    }
    //淘汰赛轮空晋级
    onKickFreeUp(data: { type: number, score: number }) {
        console.log("销毁所有 1--->");
        UIManager.Instace.clearAllUI();
        UIManager.Instace.showUI({ path: UIConfig.FreeUpItemKey, data: data });
    }
    //淘汰赛结算
    onKickFinish(gameId: number) {
        console.log("淘汰赛结算 赛事ID  ", gameId);
        GlobalData.requestUpList(
            gameId, {
            success: () => {
                console.log("销毁所有 6--->");
                UIManager.Instace.clearAllUI();
                UIManager.Instace.showUI({ path: UIConfig.GameEndKickUpItemKey });
            }
        });
    }
    //积分赛结束
    onScoreFinish(gameId: number) {
        console.log("积分赛结算 赛事ID  ", gameId);
        GlobalData.requestRankScoreData(gameId, () => {
            UIManager.Instace.showUI({ path: UIConfig.GameEndScoreRankItemKey });
        });
    }
    //积分赛(匹配队友成功)
    onScoreMatchSucces(data: GameMsg.ScoreGame) {
        UIManager.Instace.showUI({ path: UIConfig.TeamUpItemKey, data: data });
    }
    //海选赛房间号
    onAuditionRoomId(roomId: number) {
        console.log("加入房间- 海选赛房间号---> ", roomId);
        GlobalData.cardInfo.roomId = roomId;
        let baseInfo = GameMsg.Room.create({ roomId: GlobalData.cardInfo.roomId });
        let baseBuffer = GameMsg.Room.encode(baseInfo).finish();
        let sendBuffer = PbManager.instance.sendMsg(GlobalData.C2S_Event.JoinAuditionRoom, baseBuffer);
        GameSocket.send(sendBuffer);
    }
    //积分赛房间号
    onScoreRoomId(roomId: number) {
        console.log("加入房间- 积分赛房间号---> ", roomId);
        GlobalData.cardInfo.roomId = roomId;
        let baseInfo = GameMsg.Room.create({ roomId: GlobalData.cardInfo.roomId });
        let baseBuffer = GameMsg.Room.encode(baseInfo).finish();
        let sendBuffer = PbManager.instance.sendMsg(GlobalData.C2S_Event.ScoreJoinRoom, baseBuffer);
        GameSocket.send(sendBuffer);
    }
    //加入房间
    onFreeRoomId(roomId: number) {
        GlobalData.cardInfo.roomId = roomId;
        console.log("加入房间- 自由玩房间号---> ", GlobalData.cardInfo.roomId);
        let baseInfo = GameMsg.Room.create({ roomId: GlobalData.cardInfo.roomId });
        let baseBuffer = GameMsg.Room.encode(baseInfo).finish();
        let sendBuffer = PbManager.instance.sendMsg(GlobalData.C2S_Event.JoinRoom, baseBuffer);
        GameSocket.send(sendBuffer);
    }
    //断线重连
    onReconnect(data: GameMsg.Room) {
        console.log("断线重连,房间类型 ", data.type);
        if (data.type == ReconnectType.none) {
            this.checkReconnectSceneState();
        }
        else if (data.type == ReconnectType.free) {
            this.onFreeRoomId(data.roomId);
        }
        else if (data.type == ReconnectType.kick) {
            this.onKickRoomId(data.roomId);
        }
        else if (data.type == ReconnectType.score) {
            this.onScoreRoomId(data.roomId);
        }
        else if (data.type == ReconnectType.audition) {
            this.onAuditionRoomId(data.roomId);
        }
    }
    //断线场景状态
    checkReconnectSceneState() {
        console.log("断线场景状态---> ");
        if (utils.getSceneName() == GlobalData.sceneName.game) {
            UIManager.Instace.showUI({
                path: UIConfig.MessageBoxCommonKey,
                data: {
                    okName: "确定",
                    cancleName: "取消",
                    des: "游戏已结束,请返回大厅!",
                    okFunc: () => {
                        console.log("nzp add 返回大厅 7");
                        UIManager.Instace.showUI({ path: UIConfig.LoadItemKey, data: GlobalData.sceneName.lobby });
                    },
                    cancleFunc: null
                }
            });
        } else {
            GlobalData.requestGetUserInfo({
                success: () => {
                    utils.send(GlobalData.localEvent.FirstUpdate);
                }
            });
        }
    }
    //播放音效
    playSound(clip: AudioClip, loop: boolean = false) {
        if (this.soundAuido.playing) {
            this.soundAuido.stop();
        }
        // console.log("sound ",clip);
        this.soundAuido.clip = clip;
        this.soundAuido.loop = loop;
        this.soundAuido.volume = 1;
        this.soundAuido.play();
    }
    playClickSound() {
        if (this.soundClickAuido.playing) {
            return;
        }
        this.soundClickAuido.play();
    }
    playClockSound() {
        if (this.soundClockAuido.playing) {
            return;
        }
        this.soundClockAuido.play();
    }
    //播放音乐
    async playMusic(clip: AudioClip, opts: { loop?: boolean; volume?: number; fade?: number } = {}) {
        // if (this.musicAuido.playing) {
        //     this.musicAuido.stop();
        // }
        // // console.log("music ",clip);
        // this.musicAuido.clip = clip;
        // this.musicAuido.loop = loop;
        // this.musicAuido.volume = 1;
        // this.musicAuido.play();

        const loop = opts.loop ?? false;
        const targetVol = opts.volume ?? 1;
        const fade = Math.max(0, opts.fade ?? 0); // 秒

        if (!clip || !this.musicAuido) return;

        const a = this.musicAuido;

        // 如果是同一首且已在播，只调参数即可，避免“停-播”产生的卡顿/空隙
        if (a.playing && a.clip === clip) {
            a.loop = loop;
            if (fade > 0 && a.volume !== targetVol) {
                tween(a).to(fade, { volume: targetVol }).start();
            } else {
                a.volume = targetVol;
            }
            return;
        }

        // 正在放别的歌 → 先淡出再切换
        if (a.playing && fade > 0) {
            await new Promise<void>((res) => tween(a).to(fade * 0.5, { volume: 0 }).call(res).start());
        }
        a.stop();

        a.clip = clip;
        a.loop = loop;
        a.volume = fade > 0 ? 0 : targetVol;

        // Web 端未解锁前先记录意愿，不强行调用 play()（会被浏览器拒绝）
        this._wantPlay = true;
        if (this._unlocked) a.play();

        if (fade > 0) tween(a).to(fade * 0.5, { volume: targetVol }).start();

        this._currentClip = clip;


    }
    //停止播放音乐
    stopMusic() {
        if (this.musicAuido.playing) {
            this.musicAuido.stop();
        }
    }

}

