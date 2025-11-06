import { assetManager, director, Label } from "cc"
import { ccclass, EUILayer, EBlockOnceAdType, _scene, _platform, EPlatformType, EBottomAdType, _ui, _rank, _logic, _gameType, _main, _audio } from "../Main"
import { AnimBaseUI } from "./AnimBaseUI"
import { EGameType } from "../module/define/GameTypeDefine"
import { initData } from "../../../app/GameDefine"
import { GlobalData } from "db://assets/scripts/manager/GlobalData"
import { UIManager } from "db://assets/scripts/manager/UIManager"
import { UIConfig } from "db://assets/scripts/manager/UIConfig"
import { utils } from "db://assets/scripts/common/utils"


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

	private isChangingScene = false;
	private async onClickHome() {
		// this.onDispose();
		this.closeUI(true);
		console.log("[App] 准备安全切换到 Lobby 场景");

		const s = _scene as any;
		try {
			console.log("[App] 暂停 apeng 框架逻辑循环");


			// 🧩 停止主要模块逻辑循环
			// _logic?.stop?.();
			_gameType?.exit?.();
			// _ui?.closeAll?.(EUILayer.Window);
			// _ui?.closeAll?.(EUILayer.WindowUp);
			_ui?.close(initData.uiUrl.index);
			_ui?.dispose(initData.uiUrl.index);
			_audio.setVolume(true, 0);

			try {
				const audioSys = (window as any).apeng?._audio;
				audioSys?.stopAll?.();
				audioSys?.clear?.();
				console.log("[App] 已停止所有音效");
			} catch (err) {
				console.warn("[App] 停止音频系统时出错", err);
			}

			// _ui.dispose("indexUI");

			// ✅ 强制销毁当前 UI 节点
			this.node.destroy();
			// _main?.unscheduleAllCallbacks?.();

			// 🧹 清理当前 Scene
			if (s?.cur) {
				s.cur.enabled = false;
				s.cur.unscheduleAllCallbacks?.();
				s.cur.destroy?.();
				s.cur = null;
			}

			// 停止场景切换状态标志
			s.isChange = false;
			s.isProChange = false;

			// ✅ 释放场景和 bundle 资源
			//director.getScene()?.destroy();
			// assetManager.assets.forEach((asset) => {
			// 	if (!asset.refCount || asset.refCount <= 0) {
			// 		assetManager.releaseAsset(asset);
			// 	}
			// });

			// const main2Bundle = assetManager.getBundle("main2");
			// if (main2Bundle) {
			// 	console.log("[App] 检测到 main2.bundle 已加载，准备卸载");
			// 	assetManager.removeBundle(main2Bundle);
			// }

			// const currentScene = director.getScene();
			// if (currentScene && currentScene.isValid) {
			// 	currentScene.destroy();
			// 	console.log("[App] 已销毁当前 Scene");
			// }

			// 等待一帧，让异步模块清理完成
			await new Promise((r) => setTimeout(r, 0));

			console.log("[App] ✅ 框架停机完成，开始切 Lobby");
			utils.setMusic(true);

			UIManager.Instace.showUI({ path: UIConfig.LoadItemKey, data: GlobalData.sceneName.lobby });

			// director.loadScene("Lobby", () => {
			// 	console.log("[App] ✅ 已进入 Lobby 场景");
			// });
		} catch (err) {
			console.warn("[App] safeGoLobby 异常：", err);
			director.loadScene("Lobby");
		}
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
