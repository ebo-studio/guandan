import { Label } from "cc"
import { ccclass, EUILayer, EBlockOnceAdType, _scene, _platform, EPlatformType, EBottomAdType, _ui, _rank, _logic, _gameType } from "../Main"
import { AnimBaseUI } from "./AnimBaseUI"
import { EGameType } from "../module/define/GameTypeDefine"
import { initData } from "../../../app/GameDefine"


@ccclass("IndexUI")
export class IndexUI extends AnimBaseUI {
	public layerType = EUILayer.WindowUp
	public blockOnceAdType = EBlockOnceAdType.Show
	public bottomAdType = EBottomAdType.None

	protected onCreate(): void {
		super.onCreate()

		switch (_platform.type) {
			case EPlatformType.wx:
				this.bottomAdType = EBottomAdType.Native
				break
			case EPlatformType.web:
				this.bottomAdType = EBottomAdType.Native
				break
			default:
				this.bottomAdType = EBottomAdType.Banner
				break
		}
	}

	private onClickToday() {
		this.clickRun(EGameType.today)
	}

	private onClickLevel() {
		this.clickRun(EGameType.level)
	}

	private clickRun(type: EGameType) {
		if (_gameType.hasRun(type))
			this.playAnim(false, () => {
				if (!_gameType)
					return
				if (!this.scene) {
					_gameType.type = type
					_ui.Loading.wait(true)
					return
				}

				_gameType.run(type)
			})
	}

}
