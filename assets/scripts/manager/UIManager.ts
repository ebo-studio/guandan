import { _decorator, Component, Node, director, resources, Prefab, find, __private, path } from 'cc';
import { utils } from '../common/utils';
import PopWindow from '../component/PopWindow';
import { UIConfig } from './UIConfig';
const { ccclass, property } = _decorator;

@ccclass('UIManager')
export class UIManager extends Component {

    public static Instace: UIManager = null;

    private uiMap: Map<string, PopWindow> = new Map<string, PopWindow>();

    onLoad() {
        UIConfig.init();
        //常驻节点,播放音效
        // director.addPersistRootNode(this.node);
        UIManager.Instace = this;
    }
    //显示
    public showUI(obj: { path: string, data?: any, callBack?: Function }) {
        let com = this.getUI(obj.path);
        const targetPaths = [
            UIConfig.MessageHintKey,
            UIConfig.WaitItemKey,
            UIConfig.LoadItemKey,
            UIConfig.GameEndFreeItemKey,
            UIConfig.getItemKey
        ];
        if (com) {
            this.setTopSiblingIndex(com.node);
            if (obj.callBack) obj.callBack(com);
            if (targetPaths.includes(obj.path)) {
                com.show(false)
            }
            else {
                com.show();
            }
            com.setData(obj.data);
            return;
        }
        let info = UIConfig.getUIInfoByName(obj.path);
        resources.load(info.path, Prefab, (err: Error, res: Prefab) => {
            //这里再次验证的目的是,load需要时间,如果有段时间内有多次加载,会出现多个框
            let preCom = this.getUI(obj.path);
            if (preCom) {
                this.setTopSiblingIndex(preCom.node);
                if (obj.callBack) obj.callBack(preCom);
                if (targetPaths.includes(obj.path)) {
                    preCom.show(false)
                }
                else {
                    preCom.show();
                }
                preCom.setData(obj.data);
                return;
            }
            let com = utils.addInstanceToRoot(res, find("Canvas"), info.comp);
            if (!com) {
                console.error("不存在路径: ", obj.path);
                return;
            }
            this.setTopSiblingIndex(com.node);
            //必须放到show前边
            if (obj.callBack) obj.callBack(com);
            if (targetPaths.includes(obj.path)) {
                com.show(false)
            }
            else {
                com.show();
            }
            com.setData(obj.data);
            this.uiMap.set(obj.path, com);
        });
    }
    //隐藏
    public hideUI(uiName: string) {
        let com = this.getUI(uiName);
        if (com) {
            com.hide();
        }
    }
    //销毁
    public destroyUI(uiName: string) {
        let com = this.getUI(uiName);
        if (com) {
            let com = this.uiMap.get(uiName);
            com.node && com.node.destroy();
            this.uiMap.delete(uiName);
        }
    }
    //获取
    public getUI(uiName: string) {
        let item: PopWindow = this.uiMap.get(uiName);
        return item;
    }
    public getUICount() {
        return this.uiMap.size;
    }
    //销毁所有
    public clearAllUI() {
        console.log("销毁所有--->");
        if (!UIManager.Instace) return;
        for (let key of this.uiMap.keys()) {
            let com = this.uiMap.get(key);
            if (com.name != "WaitItem<WaitItem>") {
                com.node && com.node.destroy();
                this.uiMap.delete(key);
            }
        }
        console.log("ui len--> ", this.uiMap.size);
    }
    test() {
        // UIManager.Instace.showUI({
        //     path: UIConfig.User, data: 123, callBack: (res: UserItem) => {
        //         res.show_callback = () => {
        //             console.log("show_callback ---->");
        //         };
        //         res.hide_callback = () => {
        //             console.log("hide_callback ---->");
        //         }
        //     }
        // });

        //UIManager.Instace.hideUI(UIConfig.User);
    }
    public setTopSiblingIndex(node: Node) {
        if(node == null)
        {
            return;
        }
        node.setSiblingIndex(node.getParent().children.length + 1);
    }
}

