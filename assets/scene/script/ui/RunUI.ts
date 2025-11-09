import { Color, EventMouse, EventTouch, Label, Node, Sprite } from "cc";
import { ccclass, EBlockOnceAdType, EPlatformType, EBottomAdType, NodeHelper, PropHelper, _language, EUIState, _platform, _audio, _timer, _ui, _logic, _main, CreatePrefabToEditorCC, Maths, AnimtorByTweenCC, _guide, Times, _gameType, EUILayer } from "../../../main/script/Main";
import { AnimBaseUI } from "../../../main/script/ui/AnimBaseUI";
import { CGameData } from "../../../app/GameDefine";
import { EGameType } from "../../../main/script/module/define/GameTypeDefine";
import { GlobalData } from "db://assets/scripts/manager/GlobalData";
// import { GlobalData } from "db://assets/scripts/manager/GlobalData";



@ccclass("RunUI")
export class RunUI extends AnimBaseUI {
	public layerType = EUILayer.WindowUp
	private cLabel_time: Label = null!
	private cLabel_level: Label = null!
	private cAtime: Node = null!
	private cAstep: Node = null!
	private cLabel_step: Label = null!

	private cATip: Node = null!
	private cPause: Node = null!
	private cBottomBtns: Node = null!

	private cAnimtorByTweenCC_tip: AnimtorByTweenCC = null!
	private useTipNodes: Node[] = [];
	private cLabel_score: Label = null!;

	onCreate() {
		super.onCreate()

		this.useTipNodes.push(
			this.cPause,
			this.cBottomBtns,
		)

		this.blockOnceAdType = EBlockOnceAdType.None
		if (_platform.isLongScreen) {
			switch (_platform.type) {
				case EPlatformType.wx:
					this.bottomAdType = EBottomAdType.Native
					break
				case EPlatformType.web:
					this.bottomAdType = EBottomAdType.None
					break
				default:
					this.bottomAdType = EBottomAdType.Banner
					break
			}
			NodeHelper.setPositionY(this.cBottomBtns, _platform._banner_.worldTopY + 5, false)
		}
		else {
			this.bottomAdType = EBottomAdType.None
			NodeHelper.setPositionY(this.cBottomBtns, 0, false)
		}


		this.addEvent(_gameType.EventType.PLAY_ANIM, () => {
			_audio.play("scene/audio/magic")
			this.cAnimtorByTweenCC_tip.setOpacity(1)
			this.cAnimtorByTweenCC_tip.play()
		}, this, _gameType)
		this.addEvent(PropHelper.EventType.CHANGE, this.onEventStepCount, this, _logic._level.step)
		this.addEvent(_logic.EventType.DURATION_CHANGE, this.onLoopDownCount, this, _logic)
		this.addEvent(_logic.EventType.USE_DIRBACK, () => {
			this.cATip.active = true
			for (let node of this.useTipNodes)
				node.active = false
		}, this, _logic)

		this.addEvent(_logic.EventType.USE_DIRBACK_COMPLETE, () => {
			this.cATip.active = false
			for (let node of this.useTipNodes)
				node.active = true
		}, this, _logic)

		this.cLabel_score.string = (GlobalData.userInfo.score / 100).toFixed(1);
	}

	onOpen() {
		super.onOpen()
		this.cAnimtorByTweenCC_tip.setOpacity(0)
		_timer.clear(this, this.onLoopDownCount)
		this.cATip.active = false

		switch (_gameType.type) {
			case EGameType.level:
				this.playAnim(true)
				this.cLabel_level.node.active = true
				this.cAtime.active = false
				this.onEventLevel(_logic._level.curLevel)
				this.playAnim(true)
				this.cAstep.active = true
				this.onEventStepCount()
				break;
			case EGameType.today:
				this.cLabel_level.node.active = false
				this.cAstep.active = false
				this.cAtime.active = true
				this.cLabel_score.string = (GlobalData.userInfo.score / 100).toFixed(1);
				_timer.loop(this, this.onLoopDownCount, 1, -1, -1)
				if (_logic._today.configIndex == 0)
					this.playAnim(true)
				break;
		}
	}


	private onEventLevel(level: number) {
		this.cLabel_level.string = _language.replace(40014, level + "")
	}

	private onEventStepCount() {
		let cur = _logic._level.step.cur
		this.cLabel_step.string = cur + ""
	}


	private onLoopDownCount() {
		let state = _ui.getModule(CGameData.SettingUrl).state
		if (state == EUIState.Open
			|| state == EUIState.Load)
			return
		state = _ui.getModule(CGameData.SuccessUrl).state
		if (state == EUIState.Open
			|| state == EUIState.Load)
			return
		state = _ui.getModule(CGameData.FailUrl).state
		if (state == EUIState.Open
			|| state == EUIState.Load)
			return

		let sub = _logic._today.intervalTimeCountDown.sub
		if (this.cLabel_time)
			this.cLabel_time.string = sub + ""
	}

}
