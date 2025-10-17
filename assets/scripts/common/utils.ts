import { event } from "./events";
import { md5 as _md5 } from "./md5";
import { assetManager, Button, Component, director, ImageAsset, instantiate, isValid, JsonAsset, Node, NodePool, Prefab, resources, size, Slider, sp, Sprite, SpriteAtlas, SpriteFrame, sys, Texture2D, Toggle, UITransform, v2, Vec2, Vec3, view, Widget, __private, AudioClip } from "cc";
import { httprequest } from "./httprequest";
import { SoundManager } from "../manager/SoundManager";
import { GlobalData } from "../manager/GlobalData";

export namespace utils {
    export function on(name: string, target: object, func: Function) {
        event.register_event(name, target, func);
    }

    export function off(name: string, target: object, func: Function = null) {
        event.unregister_event(name, target, func);
    }

    export function send(name: string, ...param: any[]) {
        event.trigger_event(name, param[0], param[1], param[2], param[3], param[4], param[5], param[6], param[7], param[8], param[9]);
    }

    export function md5(data: any): string {
        return _md5(data);
    }

    export function toJson(value: any): string {
        return value ? JSON.stringify(value) : null;
    }

    export function fromJson(value: string): any {
        if (value) {
            try {
                return JSON.parse(value);
            }
            catch (e) {
                console.log(`JSON.parse exception: ${e}, ${value.length}, ${value}`);
                return null;
            }
        }
        return null;
    }
    //深拷贝
    export function deepCopy(data: any) {
        return JSON.parse(JSON.stringify(data))
    }
    //随机
    export function randomNum(min: number, max: number): number {
        if (min === max) {
            return min;
        } else if (min < max) {
            return Math.random() * (max - min) + min;
        } else {
            return Math.random() * (min - max) + max;
        }
    }
    export function randomDir() {
        return Math.random() > 0.5 ? 1 : -1;
    }
    //随机
    export function random(min: number, max: number): number {
        return Math.floor(randomNum(min, max));
    }
    //数字取整
    export function numToInteger(num: number) {
        return parseInt(String(num))
    }
    //隐藏子节点
    export function disabelRootChild(rootNode: Node) {
        let count = rootNode.children.length;
        for (let i = 0; i < count; i++) {
            rootNode.children[i].active = false;
        }
    }
    //制灰色
    export function grayscaleRootChild(tmpNode: Node, show: boolean) {
        let spList = tmpNode.getComponentsInChildren(Sprite);
        spList.forEach((value: Sprite, index: number, array: Sprite[]) => {
            value.grayscale = show;
        })
    }
    //局部坐标转换
    export function convertNodePos(from: Node, to: Node) {
        return to.getComponent(UITransform).convertToNodeSpaceAR(from.parent.getComponent(UITransform).convertToWorldSpaceAR(from.getPosition()))
    }
    //局部坐标转换
    export function convertNodePosZero(from: Node, to: Node) {
        return to.getComponent(UITransform).convertToNodeSpaceAR(from.getComponent(UITransform).convertToWorldSpaceAR(Vec3.ZERO))
    }
    //获取view的size:num为一半或者其他  
    export function getSceneSize(num: number = 1) {
        return size(view.getVisibleSize().width / num, view.getVisibleSize().height / num);
    }
    export function stringReplaceQuot(str_source: string): string {
        str_source = str_source.replace(/&quot;/g, '"');
        return str_source;
    }

    export function stringReplaceAny(str_source: string, str_key: string, any_value: number | string): string {
        if (typeof (any_value) == "string") {
            return stringReplaceKey(str_source, str_key, any_value);
        }
        else {
            return stringReplaceKeyWithInteger(str_source, str_key, any_value);
        }
    }

    export function stringReplaceKey(str_source: string, str_key: string, str_value: string): string {
        str_source = str_source.replace(new RegExp(str_key, 'g'), str_value);
        return str_source;
    }

    export function stringReplaceKeyWithInteger(str_source: string, str_key: string, int_value: number): string {
        str_source = str_source.replace(new RegExp(str_key, 'g'), int_value.toString());
        return str_source;
    }

    export function ab2str(buf, bit8: boolean = false): string {
        if (bit8) {
            return String.fromCharCode.apply(null, new Uint8Array(buf));
        }
        else {
            return String.fromCharCode.apply(null, new Uint16Array(buf));
        }
    }
    export function blob2ab(blob: Blob, callback: Function) {
        let reader = new FileReader();
        reader.onload = function () {
            return callback(this.result);
        }
        reader.readAsArrayBuffer(blob);
    }

    export function str2ab(str): ArrayBuffer {
        var buf = new ArrayBuffer((str.length) * 2); // 2 bytes for each char
        var bufView = new Uint16Array(buf);
        var i = 0;
        for (let strLen = str.length; i < strLen; i++) {
            bufView[i] = str.charCodeAt(i);
        }
        return buf;
    }

    export function getSceneName() {
        return director.getScene().name;
    }

    export function isEmptyObject(e) {
        // 判断对象是否为空
        for (let t in e)
            return false;
        return true;
    }

    export function compareVersion(v1s: string, v2s: string): number {
        let v1 = v1s.split('.');
        let v2 = v2s.split('.');
        let len = Math.max(v1.length, v2.length);
        while (v1.length < len) {
            v1.push('0');
        }
        while (v2.length < len) {
            v2.push('0');
        }
        for (let i = 0; i < len; i++) {
            let num1 = parseInt(v1[i])
            let num2 = parseInt(v2[i])
            if (num1 > num2) {
                return 1;
            } else if (num1 < num2) {
                return -1;
            }
        }
        return 0;
    }

    export function formatGoldString(gold: string | number): string {
        let g = typeof (gold) == "string" ? parseInt(gold, 10) : gold;
        if (g > 1000000) {
            let w = g / 10000;
            return Math.floor(w) + "万";
        }
        return g.toString();
    }
    export function getTimeDesc(count: number): string {
        //小于60 00:xx
        let str = "";
        if (count < 60) {
            if (count < 10) {
                str = "00:" + formatTime(count);
            } else {
                str = "00:" + count
            }

        } else if (count < 3600) {
            //大于60 00:xx
            let min = Math.floor(count / 60);
            let sec = count % 60;
            str = formatTime(min) + ":" + this.formatTime(sec);
        } else {
            //大于3600 00:xx:00
            let hour = Math.floor(count / 3600);
            let min = Math.floor((count - hour * 3600) / 60);
            let sec = count % 60;
            str = formatTime(hour) + ":" + formatTime(min) + ":" + this.formatTime(sec);
        }
        return str;
    }
    /**
    *  00:00  (时/分)  (分/秒)
    */
    export function getTimeDesc2(count: number): string {
        let str = "";
        if (count < 60) {
            if (count < 10) {
                str = "00:" + formatTime(count);
            } else {
                str = "00:" + count
            }
        } else if (count < 3600) {
            let min = Math.floor(count / 60);
            let sec = count % 60;
            str = formatTime(min) + ":" + this.formatTime(sec);
        } else {
            let hour = Math.floor(count / 3600);
            let min = Math.floor((count - hour * 3600) / 60);
            str = formatTime(hour) + ":" + formatTime(min);
        }
        return str;
    }
    /**
     *  00:00  (时/分)
     */
    export function getTimeDesc3(count: number): string {
        let str = "";
        if (count < 60) {
            str = "00:" + "01"
        } else if (count < 3600) {
            let min = Math.floor(count / 60);
            str = "00" + ":" + formatTime(min);
        } else {
            let hour = Math.floor(count / 3600);
            let min = Math.floor((count - hour * 3600) / 60);
            str = formatTime(hour) + ":" + formatTime(min);
        }
        return str;
    }

    export function formatTime(num: number) {
        let str = "";
        if (num < 10) {
            str = "0" + num
        } else {
            str = num.toString();
        }
        return str;
    }
    //这个只在电脑浏览器管用
    export function setClipboard2(str: string, callBack?: Function) {
        navigator.clipboard.writeText(str).then(
            function () {
                callBack && callBack(true);
            },
            function (res) {
                console.log("res--> ", res);
                callBack && callBack(false);
            }
        );
    }
    // web 上复制
    export function setClipboard(str: string, callBack?: Function) {
        var input = str + '';
        const el = document.createElement('textarea');
        el.value = input;
        el.setAttribute('readonly', '');
        el.style.contain = 'strict';
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        el.style.fontSize = '12pt'; // Prevent zooming on iOS
        const selection = getSelection();
        var originalRange = false;
        if (selection.rangeCount > 0) {
            // @ts-ignore
            originalRange = selection.getRangeAt(0);
        }
        document.body.appendChild(el);
        el.select();
        el.selectionStart = 0;
        el.selectionEnd = input.length;
        var success = false;
        try {
            success = document.execCommand('copy');
            callBack && callBack(true);
        } catch (err) {
            console.log('err:', err);
            callBack && callBack(false);
        }
        document.body.removeChild(el);
        if (originalRange) {
            selection.removeAllRanges();
            // @ts-ignore
            selection.addRange(originalRange);
        }
        return success;
    }
    // 利用正则表达式
    export function queryURLParams(url: string, name: string) {
        url = url.split("?")[1];
        let obj = {}; // 声明参数对象
        let arr = url.split("&"); // 以&符号分割为数组
        for (let i = 0; i < arr.length; i++) {
            let arrNew = arr[i].split("="); // 以"="分割为数组
            obj[arrNew[0]] = arrNew[1];
        }
        return obj[name];
    }
    //is android
    export function isAndroid() {
        let userAgent = navigator.userAgent.toLowerCase();
        console.log("userAgent ", userAgent);
        let isAndroid = Boolean(userAgent.match(/android/ig))
        console.log("isAndroid ", isAndroid);
        return isAndroid;
    }
    //暂时没用到,保留作为参考
    export function getDeviceInfo() {
        const u = navigator.userAgent
        const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1 // android终端
        const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) // ios终端
        return {
            isAndroid,
            isiOS
        }
    }
    //保留此方法比formatGold更准确
    export function formatGold(long_gold: number) {
        //大于100万,保留一位 123.4万
        if (long_gold > 1000000) {
            let integer = Math.floor(long_gold / 10000);
            let decimal = Math.floor(Math.floor(long_gold - integer * 10000) / 1000);
            return integer + "." + decimal + "万";
        }
        else if (long_gold > 10000) {
            //大于一万,保留两位 12.34万
            let integer = Math.floor(long_gold / 10000);
            let decimal = this.formatTime(Math.floor(Math.floor(long_gold - integer * 10000) / 100));
            return integer + "." + decimal + "万";
        }
        else {
            return long_gold.toString();
        }
    }
    export function clampNickname(name: string, length: number = 5): string {
        if (!name) return "";
        let size = 0;
        for (let i = 0; i < name.length; i++) {
            size += (name.charCodeAt(i) > 255 ? 2 : 1);
            if (size > length * 2) {
                // 超出长度
                if (i == name.length - 1) {
                    // 当前是最后一个字符，则不删减
                    return name;
                }
                return name.slice(0, i) + "…";
            }
        }
        return name;
    }

    export function postWithXHR(url: string, data: any): Promise<any> {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('POST', url, true);
            xhr.withCredentials = true; // ☆ 关键：带 Cookie
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.setRequestHeader('Accept', 'application/json');

            xhr.onreadystatechange = () => {
                if (xhr.readyState !== 4) return;
                const ct = xhr.getResponseHeader('content-type') || '';
                const body = xhr.responseText || '';
                console.log('status:', xhr.status, 'ct:', ct, 'body[0..200]:', body.slice(0, 200));
                if (/<!doctype|<html/i.test(body)) return reject(new Error('收到 HTML（登录/错误页）'));
                try {
                    const json = JSON.parse(body.replace(/^\uFEFF/, ''));
                    resolve(json);
                } catch (e) {
                    reject(new Error('非 JSON 响应：' + e));
                }
            };

            xhr.onerror = () => reject(new Error('网络错误'));
            xhr.send(JSON.stringify(data));
        });
    }

    export function sendHttpRequest(obj: {
        url: string,
        method?: "GET" | "POST",
        data?: any,
        success?: (data, message, res) => void,
        fail?: (errMsg: string) => void,
        progress?: (timeLeft: number) => void,
        complete?: () => void
    }) {
        if (obj.method === undefined) obj.method = "GET";
        let err_func = (msg: string) => {
            try { if (obj.fail) obj.fail(msg); }
            catch (e) { }
            if (obj.complete) obj.complete();
        }
        if (!obj.url) {
            err_func("目标地址无效！");
            return;
        }
        // if (!global_data.connected) {
        //     err_func("请求数据失败，请查看当前网络状态！");
        //     return;
        // }
        let xhr = new httprequest();
        xhr.onReply = (response: string) => {
            if (!response) {
                err_func("请求失败，请稍后再试(0)");
                return;
            }
            let res = utils.fromJson(response);
            if (!res) {
                err_func("请求失败，请稍后再试(1)");
                return;
            }
            console.log("res ", res);
            let code = res.code;
            let message = res.msg;
            if (code != 200) {
                // err_func(message + "(" + code + ")");
                err_func(message);
                return;
            }
            try { if (obj.success) obj.success(res.data, res.msg, res); }
            catch (e) { }
            if (obj.complete) obj.complete();
        };
        xhr.onError = (response: string) => {
            err_func("请求失败，请稍后再试(2)");
        };
        xhr.onProgress = (timeLeft: number) => {
            if (obj.progress) obj.progress(timeLeft);
        };
        if (obj.method == "POST") {
            xhr.send(obj.url, "POST", obj.data);
        }
        else {
            xhr.send(obj.url, "GET");
        }
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    // cocos相关utils
    ////////////////////////////////////////////////////////////////////////////////////////
    export function loadJsonRes(obj: {
        path: string,
        nocheck?: boolean,
        success?: (jsonAsset: JsonAsset) => void,
        fail?: (res: { errMsg: string }) => void,
        complete?: () => void,
        thisArg?: object
    }) {
        resources.load(obj.path, JsonAsset, (error: Error, jsonAsset: JsonAsset) => {
            if (error) {
                if (!obj.nocheck) console.error("load_json_res failed: ", error);
                if (obj.fail) obj.fail({ errMsg: error.message });
                if (obj.complete) obj.complete();
                return;
            }
            if (obj.success) obj.success(jsonAsset);
            if (obj.complete) obj.complete();
        });
    }

    export function loadAtlasRes(obj: {
        path: string,
        nocheck?: boolean,
        success?: (atlas: SpriteAtlas) => void,
        fail?: (res: { errMsg: string }) => void,
        complete?: () => void,
        thisArg?: object
    }) {
        resources.load(obj.path, SpriteAtlas, (error: Error, atlas: SpriteAtlas) => {
            if (error) {
                if (!obj.nocheck) console.error("load_atlas_res failed: " + error.message);
                if (obj.fail) obj.fail({ errMsg: error.message });
                if (obj.complete) obj.complete();
                return;
            }
            if (obj.success) obj.success(atlas);
            if (obj.complete) obj.complete();
        });
    }

    export function loadAtlasResDir(obj: {
        path: string,
        nocheck?: boolean,
        success?: (atlas: SpriteAtlas[], urls: string[]) => void,
        fail?: (res: { errMsg: string }) => void,
        complete?: () => void,
        thisArg?: object
    }) {
        resources.loadDir(obj.path, SpriteAtlas, (error: Error, atlas: SpriteAtlas[]) => {
            if (error) {
                if (!obj.nocheck) console.error("load_atlas_res_dir failed: " + error.message);
                if (obj.fail) obj.fail({ errMsg: error.message });
                if (obj.complete) obj.complete();
                return;
            }
            if (obj.success) obj.success(atlas, []);
            if (obj.complete) obj.complete();
        });
    }

    export function loadSpriteRes(obj: {
        path: string,
        nocheck?: boolean,
        success?: (sprite: SpriteFrame) => void,
        fail?: (res: { errMsg: string }) => void,
        complete?: () => void,
        thisArg?: object
    }) {
        resources.load(obj.path, SpriteFrame, (error: Error, sprite: SpriteFrame) => {
            if (error) {
                if (!obj.nocheck) console.error("load_sprite_res failed: " + error.message);
                if (obj.fail) obj.fail({ errMsg: error.message });
                if (obj.complete) obj.complete();
                return;
            }
            if (obj.success) obj.success(sprite);
            if (obj.complete) obj.complete();
        });
    }

    export function loadTextureRes(obj: {
        path: string,
        nocheck?: boolean,
        success?: (tex: Texture2D) => void,
        fail?: (res: { errMsg: string }) => void,
        complete?: () => void,
        thisArg?: object
    }) {
        resources.load(obj.path, Texture2D, (error: Error, tex: Texture2D) => {
            if (error) {
                if (!obj.nocheck) console.error("load_texture_res failed: " + error.message);
                if (obj.fail) obj.fail({ errMsg: error.message });
                if (obj.complete) obj.complete();
                return;
            }
            if (obj.success) obj.success(tex);
            if (obj.complete) obj.complete();
        });
    }

    export function loadTextureResDir(obj: {
        path: string,
        nocheck?: boolean,
        success?: (texs: Texture2D[], urls: string[]) => void,
        fail?: (res: { errMsg: string }) => void,
        complete?: () => void,
        thisArg?: object
    }) {
        resources.loadDir(obj.path, Texture2D, (error: Error, texs: Texture2D[]) => {
            if (error) {
                if (!obj.nocheck) console.error("load_texture_res_dir failed: " + error.message);
                if (obj.fail) obj.fail({ errMsg: error.message });
                if (obj.complete) obj.complete();
                return;
            }
            if (obj.success) obj.success(texs, []);
            if (obj.complete) obj.complete();
        });
    }
    //spine 动画
    export function loadSpineRes(spineUrl: string, callBack: Function) {
        resources.load(spineUrl, sp.SkeletonData, (error: Error, assets: sp.SkeletonData) => {
            if (error == null) {
                if (callBack) callBack(assets);
            } else {
                console.log("error ", error);
            }
        });
    }
    //音效
    export function loadAuido(path: string, callBack: Function) {
        resources.load(path, AudioClip, function (err: Error, clip: AudioClip) {
            if (err) {
                console.log(err);
                return;
            }
            callBack(clip);
        });
    }
    //imageInfo只在字节小游戏中用到
    //imageInfo中的宽高是真实图片的,不是组件的
    export function loadRemoteSpriteframe(sprite: Sprite, imgUrl: string, imageInfo?: { width: number, height: number }) {
        if (!imgUrl) return;
        //字节小游戏的头像域名是变动,采用字节自己加载图片的方式,避开跨域
        if (is_bytedance()) {
            if (!imageInfo) {
                imageInfo = { width: 100, height: 100 };
            }
            //@ts-ignore
            const image = tt.createImage();
            image.src = imgUrl;
            image.width = imageInfo.width;
            image.height = imageInfo.height;

            image.addEventListener("load", (res) => {
                // console.log("加载成功 ");
                sprite.spriteFrame = SpriteFrame.createWithImage(image);
            });
            image.addEventListener("error", (res) => {
                console.log("加载失败 ", imgUrl);
            });
        } else {
            assetManager.loadRemote<ImageAsset>(imgUrl, { ext: '.png' }, (err: Error, sp: ImageAsset) => {
                if (err) {
                    console.error(err, sp);
                    return;
                }
                const spriteFrame = new SpriteFrame();
                const texture = new Texture2D();
                texture.image = sp;
                spriteFrame.texture = texture;
                sprite.spriteFrame = spriteFrame;
            });
        }
    }
    export function setLocalStorage(key: string, value: string): void {
        sys.localStorage.setItem(key, value);
    }

    export function getLocalStorage(key: string): string {
        return sys.localStorage.getItem(key);
    }
    export function getMusic(): boolean {
        let s = getLocalStorage("Music");
        if (s != "off") {
            return true;
        }
        return false;
    }

    export function getSound(): boolean {
        let s = getLocalStorage("Sound");
        if (s != "off") {
            return true;
        }
        return false;
    }

    export function setMusic(on: boolean) {
        if (on) {
            console.log("music on");
            SoundManager.enableMusic(true);
            setLocalStorage("Music", "on");
        }
        else {
            console.log("music off");
            SoundManager.enableMusic(false);
            setLocalStorage("Music", "off");
        }
    }

    export function setSound(on: boolean) {
        if (on) {
            console.log("sound on");
            SoundManager.enableSound(true);
            setLocalStorage("Sound", "on");
        }
        else {
            console.log("sound off");
            SoundManager.enableSound(false);
            setLocalStorage("Sound", "off");
        }
    }

    export function setGameBg(bgNum: string) {
        setLocalStorage('gameBg', bgNum);
        utils.send(GlobalData.localEvent.UpdateGameBg);
    }

    export function getGameBg(): string {
        let s = getLocalStorage('gameBg');
        if (!s) {
            s = '0';
        }
        return s;
    }

    // instantiate一个prefab，将其绑定在给定的root节点下
    // 如果指定component，获取并返回指定的component，如果不指定，返回node  //__private._types_globals__AbstractedConstructor<T>): T
    export function addInstanceToRoot<T extends Component>(prefab: Prefab, root: Node, comp?: __private._types_globals__AbstractedConstructor<T>): T {
        if (isValid(prefab)) {
            var inst = instantiate(prefab);
            inst.setParent(root);
            return comp ? inst.getComponent(comp) : null;
        }
        return null;
    }

    export function bindButtonEvent(button: Button, target: Node, component: string, handler: string) {
        var clickEventHandler = new Component.EventHandler();
        clickEventHandler.target = target;
        clickEventHandler.component = component;
        clickEventHandler.handler = handler;
        button.clickEvents.push(clickEventHandler);
    }

    export function bindToggleEvent(toggle: Toggle, target: Node, component: string, handler: string) {
        var clickEventHandler = new Component.EventHandler();
        clickEventHandler.target = target;
        clickEventHandler.component = component;
        clickEventHandler.handler = handler;
        toggle.clickEvents.push(clickEventHandler);
    }

    export function bindSliderEvent(slider: Slider, target: Node, component: string, handler: string) {
        var sliderEventHandler = new Component.EventHandler();
        sliderEventHandler.target = target;
        sliderEventHandler.component = component;
        sliderEventHandler.handler = handler;
        slider.slideEvents.push(sliderEventHandler);
    }

    // 通过一个保存时间戳的localstorage id，查找当前时间是否和保存的时间戳是同一天
    export function checkLocalSameDay(name: string): boolean {
        let str = getLocalStorage(name);
        let date = new Date();
        if (str && Math.floor(Number(str) / 100) == date.getMonth() && Number(str) % 100 == date.getDate()) {
            return true;
        }
        return false;
    }
    export function getPoolPrefab(pool: NodePool, url: string, call: Function) {
        const item = getPool(pool);
        if (!item) {
            resources.load(url, Prefab, (error: Error, res: Prefab) => {
                if (error) {
                    console.log("error ", error);
                    return;
                }
                call(instantiate(res));
            });
        } else {
            call(item);
        }
    }
    export function getPrefab(url: string, call: Function) {
        resources.load(url, Prefab, (error: Error, res: Prefab) => {
            if (error) {
                console.log("error ", error);
                return;
            }
            call(instantiate(res));
        });
    }
    //从对象池获取
    export function getPool(pool: NodePool) {
        if (pool.size() > 0) {
            return pool.get()
        }
    }
    //刷新weight
    export function getWidgetHeight(e: Node) {
        const widget = e.getComponent(Widget);
        if (widget) {
            widget.updateAlignment();
        };
        return e.getComponent(UITransform).contentSize;
    }
    //回收某个节点下全部的对象
    export function recoveryAllPool(e: Node, arr: NodePool, threshold: number) {
        const len = e.children.length - 1;
        for (var i = len; i >= 0; i--) {
            let item = e.children[i];
            recoveryPoolOrDestroy(item, arr, threshold)
        }
    }
    //回收到某个对象池超出销毁
    export function recoveryPoolOrDestroy(e: Node, arr: NodePool, threshold: number) {
        if (arr.size() > threshold) {
            e.destroy()
        } else {
            recoveryPool(e, arr);
        }
    }
    //获取弧度
    export function getRadian() {
        return 180 / Math.PI
    }
    //获取度
    export function getDegree() {
        return Math.PI / 180
    }
    //获取两点之间的角度
    export function getTwoPointsAngle(currentPos: Vec2, endPos: Vec2) {
        return v2(0, 1).signAngle(currentPos.subtract(endPos).normalize()) * getRadian();
    }
    export function isEqual(startPos: Vec3, endPos: Vec3, tolerate: number) {
        let offsetX = Math.abs(startPos.x - endPos.x);
        let offsetY = Math.abs(startPos.y - endPos.y);
        return offsetX <= tolerate && offsetY <= tolerate;
    }
    //回收
    export function recoveryPool(e: Node, arr: NodePool) {
        arr.put(e)
    }
    //微信
    export function is_wechat(): boolean {
        return sys.platform === sys.Platform.WECHAT_GAME;
    }
    //抖音
    export function is_bytedance(): boolean {
        return sys.platform === sys.Platform.BYTEDANCE_MINI_GAME;
    }
    //浏览器
    export function is_browser(): boolean {
        return sys.platform === sys.Platform.DESKTOP_BROWSER;
    }

    export async function isUserInChina(): Promise<boolean> {
        try {
            // 使用可靠、速度快的 IP API（返回 JSON）
            const response = await fetch("https://ipapi.co/json/");
            const data = await response.json();

            console.log("🌍 IP Info:", data);

            // data.country_code === 'CN' 表示中国
            return data.country_code === "CN";
        } catch (err) {
            console.warn("获取 IP 失败:", err);
            // 默认返回 true，防止国外 API 访问失败时误判
            return true;
        }
    }
}
