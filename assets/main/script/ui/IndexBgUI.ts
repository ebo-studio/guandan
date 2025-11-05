import { Color, Sprite } from "cc"
import { ccclass, BaseUI, EUILayer, _ui, EUIState, _logic } from "../Main"
import { initData } from "../../../app/GameDefine"

const CBgColorGray = new Color(100, 100, 100, 255)

@ccclass("IndexBgUI")
export class IndexBgUI extends BaseUI {
	public layerType = EUILayer.Window

	private cSprite_bg_top: Sprite = null!
	private cSprite_bg_mid: Sprite = null!
	private cSprite_bg_bottom: Sprite = null!

	protected onCreate(): void {
		this.addEvent(_ui.EventType.OPEN_BEFORE, (url: string) => {
			if (url != "guide/prefab/GuideFingerUI")
				this.updateView()
		}, this, _ui)

		this.addEvent(_logic.EventType.USE_DIRBACK, () => {
			this.setBgGray(true)
		}, this, _logic)

		this.addEvent(_logic.EventType.USE_DIRBACK_COMPLETE, () => {
			this.setBgGray(false)
		}, this, _logic)
	}

	protected onOpen(): void {
		this.updateView()
	}

	private updateView() {
		let indexUI = _ui.getModule(initData.uiUrl.index)
		if (indexUI.state == EUIState.Load ||
			indexUI.state == EUIState.Open) {
			this.SwitchChildrenCC.index = 0
		}
		else {
			this.SwitchChildrenCC.index = 1
			this.setBgGray(false)
		}
	}

	private setBgGray(gray: boolean) {
		let color = gray ? CBgColorGray : Color.WHITE
		this.cSprite_bg_top.color = color
		this.cSprite_bg_mid.color = color
		this.cSprite_bg_bottom.color = color
	}

}
