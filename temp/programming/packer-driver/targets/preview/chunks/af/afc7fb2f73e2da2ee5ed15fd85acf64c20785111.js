System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, event, _md5, assetManager, Component, director, instantiate, isValid, JsonAsset, Prefab, resources, size, sp, Sprite, SpriteAtlas, SpriteFrame, sys, Texture2D, UITransform, v2, Vec3, view, Widget, AudioClip, httprequest, SoundManager, _crd, utils;

  function _reportPossibleCrUseOfevent(extras) {
    _reporterNs.report("event", "./events", _context.meta, extras);
  }

  function _reportPossibleCrUseOf_md(extras) {
    _reporterNs.report("_md5", "./md5", _context.meta, extras);
  }

  function _reportPossibleCrUseOfhttprequest(extras) {
    _reporterNs.report("httprequest", "./httprequest", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundManager(extras) {
    _reporterNs.report("SoundManager", "../manager/SoundManager", _context.meta, extras);
  }

  _export("utils", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      assetManager = _cc.assetManager;
      Component = _cc.Component;
      director = _cc.director;
      instantiate = _cc.instantiate;
      isValid = _cc.isValid;
      JsonAsset = _cc.JsonAsset;
      Prefab = _cc.Prefab;
      resources = _cc.resources;
      size = _cc.size;
      sp = _cc.sp;
      Sprite = _cc.Sprite;
      SpriteAtlas = _cc.SpriteAtlas;
      SpriteFrame = _cc.SpriteFrame;
      sys = _cc.sys;
      Texture2D = _cc.Texture2D;
      UITransform = _cc.UITransform;
      v2 = _cc.v2;
      Vec3 = _cc.Vec3;
      view = _cc.view;
      Widget = _cc.Widget;
      AudioClip = _cc.AudioClip;
    }, function (_unresolved_2) {
      event = _unresolved_2.event;
    }, function (_unresolved_3) {
      _md5 = _unresolved_3.md5;
    }, function (_unresolved_4) {
      httprequest = _unresolved_4.httprequest;
    }, function (_unresolved_5) {
      SoundManager = _unresolved_5.SoundManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9a70cFpAGhH9INibRBYLtdq", "utils", undefined);

      __checkObsolete__(['assetManager', 'Button', 'Component', 'director', 'ImageAsset', 'instantiate', 'isValid', 'JsonAsset', 'Node', 'NodePool', 'Prefab', 'resources', 'size', 'Slider', 'sp', 'Sprite', 'SpriteAtlas', 'SpriteFrame', 'sys', 'Texture2D', 'Toggle', 'UITransform', 'v2', 'Vec2', 'Vec3', 'view', 'Widget', '__private', 'AudioClip']);

      (function (_utils) {
        function on(name, target, func) {
          (_crd && event === void 0 ? (_reportPossibleCrUseOfevent({
            error: Error()
          }), event) : event).register_event(name, target, func);
        }

        _utils.on = on;

        function off(name, target, func) {
          if (func === void 0) {
            func = null;
          }

          (_crd && event === void 0 ? (_reportPossibleCrUseOfevent({
            error: Error()
          }), event) : event).unregister_event(name, target, func);
        }

        _utils.off = off;

        function send(name) {
          (_crd && event === void 0 ? (_reportPossibleCrUseOfevent({
            error: Error()
          }), event) : event).trigger_event(name, arguments.length <= 1 ? undefined : arguments[1], arguments.length <= 2 ? undefined : arguments[2], arguments.length <= 3 ? undefined : arguments[3], arguments.length <= 4 ? undefined : arguments[4], arguments.length <= 5 ? undefined : arguments[5], arguments.length <= 6 ? undefined : arguments[6], arguments.length <= 7 ? undefined : arguments[7], arguments.length <= 8 ? undefined : arguments[8], arguments.length <= 9 ? undefined : arguments[9], arguments.length <= 10 ? undefined : arguments[10]);
        }

        _utils.send = send;

        function md5(data) {
          return (_crd && _md5 === void 0 ? (_reportPossibleCrUseOf_md({
            error: Error()
          }), _md5) : _md5)(data);
        }

        _utils.md5 = md5;

        function toJson(value) {
          return value ? JSON.stringify(value) : null;
        }

        _utils.toJson = toJson;

        function fromJson(value) {
          if (value) {
            try {
              return JSON.parse(value);
            } catch (e) {
              console.log("JSON.parse exception: " + e + ", " + value.length + ", " + value);
              return null;
            }
          }

          return null;
        }

        _utils.fromJson = fromJson;

        function deepCopy(data) {
          return JSON.parse(JSON.stringify(data));
        }

        _utils.deepCopy = deepCopy;

        function randomNum(min, max) {
          if (min === max) {
            return min;
          } else if (min < max) {
            return Math.random() * (max - min) + min;
          } else {
            return Math.random() * (min - max) + max;
          }
        }

        _utils.randomNum = randomNum;

        function randomDir() {
          return Math.random() > 0.5 ? 1 : -1;
        }

        _utils.randomDir = randomDir;

        function random(min, max) {
          return Math.floor(randomNum(min, max));
        }

        _utils.random = random;

        function numToInteger(num) {
          return parseInt(String(num));
        }

        _utils.numToInteger = numToInteger;

        function disabelRootChild(rootNode) {
          var count = rootNode.children.length;

          for (var i = 0; i < count; i++) {
            rootNode.children[i].active = false;
          }
        }

        _utils.disabelRootChild = disabelRootChild;

        function grayscaleRootChild(tmpNode, show) {
          var spList = tmpNode.getComponentsInChildren(Sprite);
          spList.forEach((value, index, array) => {
            value.grayscale = show;
          });
        }

        _utils.grayscaleRootChild = grayscaleRootChild;

        function convertNodePos(from, to) {
          return to.getComponent(UITransform).convertToNodeSpaceAR(from.parent.getComponent(UITransform).convertToWorldSpaceAR(from.getPosition()));
        }

        _utils.convertNodePos = convertNodePos;

        function convertNodePosZero(from, to) {
          return to.getComponent(UITransform).convertToNodeSpaceAR(from.getComponent(UITransform).convertToWorldSpaceAR(Vec3.ZERO));
        }

        _utils.convertNodePosZero = convertNodePosZero;

        function getSceneSize(num) {
          if (num === void 0) {
            num = 1;
          }

          return size(view.getVisibleSize().width / num, view.getVisibleSize().height / num);
        }

        _utils.getSceneSize = getSceneSize;

        function stringReplaceQuot(str_source) {
          str_source = str_source.replace(/&quot;/g, '"');
          return str_source;
        }

        _utils.stringReplaceQuot = stringReplaceQuot;

        function stringReplaceAny(str_source, str_key, any_value) {
          if (typeof any_value == "string") {
            return stringReplaceKey(str_source, str_key, any_value);
          } else {
            return stringReplaceKeyWithInteger(str_source, str_key, any_value);
          }
        }

        _utils.stringReplaceAny = stringReplaceAny;

        function stringReplaceKey(str_source, str_key, str_value) {
          str_source = str_source.replace(new RegExp(str_key, 'g'), str_value);
          return str_source;
        }

        _utils.stringReplaceKey = stringReplaceKey;

        function stringReplaceKeyWithInteger(str_source, str_key, int_value) {
          str_source = str_source.replace(new RegExp(str_key, 'g'), int_value.toString());
          return str_source;
        }

        _utils.stringReplaceKeyWithInteger = stringReplaceKeyWithInteger;

        function ab2str(buf, bit8) {
          if (bit8 === void 0) {
            bit8 = false;
          }

          if (bit8) {
            return String.fromCharCode.apply(null, new Uint8Array(buf));
          } else {
            return String.fromCharCode.apply(null, new Uint16Array(buf));
          }
        }

        _utils.ab2str = ab2str;

        function blob2ab(blob, callback) {
          var reader = new FileReader();

          reader.onload = function () {
            return callback(this.result);
          };

          reader.readAsArrayBuffer(blob);
        }

        _utils.blob2ab = blob2ab;

        function str2ab(str) {
          var buf = new ArrayBuffer(str.length * 2); // 2 bytes for each char

          var bufView = new Uint16Array(buf);
          var i = 0;

          for (var strLen = str.length; i < strLen; i++) {
            bufView[i] = str.charCodeAt(i);
          }

          return buf;
        }

        _utils.str2ab = str2ab;

        function getSceneName() {
          return director.getScene().name;
        }

        _utils.getSceneName = getSceneName;

        function isEmptyObject(e) {
          // 判断对象是否为空
          for (var t in e) {
            return false;
          }

          return true;
        }

        _utils.isEmptyObject = isEmptyObject;

        function compareVersion(v1s, v2s) {
          var v1 = v1s.split('.');
          var v2 = v2s.split('.');
          var len = Math.max(v1.length, v2.length);

          while (v1.length < len) {
            v1.push('0');
          }

          while (v2.length < len) {
            v2.push('0');
          }

          for (var i = 0; i < len; i++) {
            var num1 = parseInt(v1[i]);
            var num2 = parseInt(v2[i]);

            if (num1 > num2) {
              return 1;
            } else if (num1 < num2) {
              return -1;
            }
          }

          return 0;
        }

        _utils.compareVersion = compareVersion;

        function formatGoldString(gold) {
          var g = typeof gold == "string" ? parseInt(gold, 10) : gold;

          if (g > 1000000) {
            var w = g / 10000;
            return Math.floor(w) + "万";
          }

          return g.toString();
        }

        _utils.formatGoldString = formatGoldString;

        function getTimeDesc(count) {
          //小于60 00:xx
          var str = "";

          if (count < 60) {
            if (count < 10) {
              str = "00:" + formatTime(count);
            } else {
              str = "00:" + count;
            }
          } else if (count < 3600) {
            //大于60 00:xx
            var min = Math.floor(count / 60);
            var sec = count % 60;
            str = formatTime(min) + ":" + this.formatTime(sec);
          } else {
            //大于3600 00:xx:00
            var hour = Math.floor(count / 3600);

            var _min = Math.floor((count - hour * 3600) / 60);

            var _sec = count % 60;

            str = formatTime(hour) + ":" + formatTime(_min) + ":" + this.formatTime(_sec);
          }

          return str;
        }

        _utils.getTimeDesc = getTimeDesc;

        function getTimeDesc2(count) {
          var str = "";

          if (count < 60) {
            if (count < 10) {
              str = "00:" + formatTime(count);
            } else {
              str = "00:" + count;
            }
          } else if (count < 3600) {
            var min = Math.floor(count / 60);
            var sec = count % 60;
            str = formatTime(min) + ":" + this.formatTime(sec);
          } else {
            var hour = Math.floor(count / 3600);

            var _min2 = Math.floor((count - hour * 3600) / 60);

            str = formatTime(hour) + ":" + formatTime(_min2);
          }

          return str;
        }

        _utils.getTimeDesc2 = getTimeDesc2;

        function getTimeDesc3(count) {
          var str = "";

          if (count < 60) {
            str = "00:" + "01";
          } else if (count < 3600) {
            var min = Math.floor(count / 60);
            str = "00" + ":" + formatTime(min);
          } else {
            var hour = Math.floor(count / 3600);

            var _min3 = Math.floor((count - hour * 3600) / 60);

            str = formatTime(hour) + ":" + formatTime(_min3);
          }

          return str;
        }

        _utils.getTimeDesc3 = getTimeDesc3;

        function formatTime(num) {
          var str = "";

          if (num < 10) {
            str = "0" + num;
          } else {
            str = num.toString();
          }

          return str;
        }

        _utils.formatTime = formatTime;

        function setClipboard2(str, callBack) {
          navigator.clipboard.writeText(str).then(function () {
            callBack && callBack(true);
          }, function (res) {
            console.log("res--> ", res);
            callBack && callBack(false);
          });
        }

        _utils.setClipboard2 = setClipboard2;

        function setClipboard(str, callBack) {
          var input = str + '';
          var el = document.createElement('textarea');
          el.value = input;
          el.setAttribute('readonly', '');
          el.style.contain = 'strict';
          el.style.position = 'absolute';
          el.style.left = '-9999px';
          el.style.fontSize = '12pt'; // Prevent zooming on iOS

          var selection = getSelection();
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
            selection.removeAllRanges(); // @ts-ignore

            selection.addRange(originalRange);
          }

          return success;
        }

        _utils.setClipboard = setClipboard;

        function queryURLParams(url, name) {
          url = url.split("?")[1];
          var obj = {}; // 声明参数对象

          var arr = url.split("&"); // 以&符号分割为数组

          for (var i = 0; i < arr.length; i++) {
            var arrNew = arr[i].split("="); // 以"="分割为数组

            obj[arrNew[0]] = arrNew[1];
          }

          return obj[name];
        }

        _utils.queryURLParams = queryURLParams;

        function isAndroid() {
          var userAgent = navigator.userAgent.toLowerCase();
          console.log("userAgent ", userAgent);
          var isAndroid = Boolean(userAgent.match(/android/ig));
          console.log("isAndroid ", isAndroid);
          return isAndroid;
        }

        _utils.isAndroid = isAndroid;

        function getDeviceInfo() {
          var u = navigator.userAgent;
          var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; // android终端

          var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端

          return {
            isAndroid,
            isiOS
          };
        }

        _utils.getDeviceInfo = getDeviceInfo;

        function formatGold(long_gold) {
          //大于100万,保留一位 123.4万
          if (long_gold > 1000000) {
            var integer = Math.floor(long_gold / 10000);
            var decimal = Math.floor(Math.floor(long_gold - integer * 10000) / 1000);
            return integer + "." + decimal + "万";
          } else if (long_gold > 10000) {
            //大于一万,保留两位 12.34万
            var _integer = Math.floor(long_gold / 10000);

            var _decimal = this.formatTime(Math.floor(Math.floor(long_gold - _integer * 10000) / 100));

            return _integer + "." + _decimal + "万";
          } else {
            return long_gold.toString();
          }
        }

        _utils.formatGold = formatGold;

        function clampNickname(name, length) {
          if (length === void 0) {
            length = 5;
          }

          if (!name) return "";
          var size = 0;

          for (var i = 0; i < name.length; i++) {
            size += name.charCodeAt(i) > 255 ? 2 : 1;

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

        _utils.clampNickname = clampNickname;

        function sendHttpRequest(obj) {
          if (obj.method === undefined) obj.method = "GET";

          var err_func = msg => {
            try {
              if (obj.fail) obj.fail(msg);
            } catch (e) {}

            if (obj.complete) obj.complete();
          };

          if (!obj.url) {
            err_func("目标地址无效！");
            return;
          } // if (!global_data.connected) {
          //     err_func("请求数据失败，请查看当前网络状态！");
          //     return;
          // }


          var xhr = new (_crd && httprequest === void 0 ? (_reportPossibleCrUseOfhttprequest({
            error: Error()
          }), httprequest) : httprequest)();

          xhr.onReply = response => {
            if (!response) {
              err_func("请求失败，请稍后再试(0)");
              return;
            }

            var res = utils.fromJson(response);

            if (!res) {
              err_func("请求失败，请稍后再试(1)");
              return;
            }

            console.log("res ", res);
            var code = res.code;
            var message = res.msg;

            if (code != 200) {
              // err_func(message + "(" + code + ")");
              err_func(message);
              return;
            }

            try {
              if (obj.success) obj.success(res.data, res.msg, res);
            } catch (e) {}

            if (obj.complete) obj.complete();
          };

          xhr.onError = response => {
            err_func("请求失败，请稍后再试(2)");
          };

          xhr.onProgress = timeLeft => {
            if (obj.progress) obj.progress(timeLeft);
          };

          if (obj.method == "POST") {
            xhr.send(obj.url, "POST", obj.data);
          } else {
            xhr.send(obj.url, "GET");
          }
        }

        _utils.sendHttpRequest = sendHttpRequest;

        function loadJsonRes(obj) {
          resources.load(obj.path, JsonAsset, (error, jsonAsset) => {
            if (error) {
              if (!obj.nocheck) console.error("load_json_res failed: ", error);
              if (obj.fail) obj.fail({
                errMsg: error.message
              });
              if (obj.complete) obj.complete();
              return;
            }

            if (obj.success) obj.success(jsonAsset);
            if (obj.complete) obj.complete();
          });
        }

        _utils.loadJsonRes = loadJsonRes;

        function loadAtlasRes(obj) {
          resources.load(obj.path, SpriteAtlas, (error, atlas) => {
            if (error) {
              if (!obj.nocheck) console.error("load_atlas_res failed: " + error.message);
              if (obj.fail) obj.fail({
                errMsg: error.message
              });
              if (obj.complete) obj.complete();
              return;
            }

            if (obj.success) obj.success(atlas);
            if (obj.complete) obj.complete();
          });
        }

        _utils.loadAtlasRes = loadAtlasRes;

        function loadAtlasResDir(obj) {
          resources.loadDir(obj.path, SpriteAtlas, (error, atlas) => {
            if (error) {
              if (!obj.nocheck) console.error("load_atlas_res_dir failed: " + error.message);
              if (obj.fail) obj.fail({
                errMsg: error.message
              });
              if (obj.complete) obj.complete();
              return;
            }

            if (obj.success) obj.success(atlas, []);
            if (obj.complete) obj.complete();
          });
        }

        _utils.loadAtlasResDir = loadAtlasResDir;

        function loadSpriteRes(obj) {
          resources.load(obj.path, SpriteFrame, (error, sprite) => {
            if (error) {
              if (!obj.nocheck) console.error("load_sprite_res failed: " + error.message);
              if (obj.fail) obj.fail({
                errMsg: error.message
              });
              if (obj.complete) obj.complete();
              return;
            }

            if (obj.success) obj.success(sprite);
            if (obj.complete) obj.complete();
          });
        }

        _utils.loadSpriteRes = loadSpriteRes;

        function loadTextureRes(obj) {
          resources.load(obj.path, Texture2D, (error, tex) => {
            if (error) {
              if (!obj.nocheck) console.error("load_texture_res failed: " + error.message);
              if (obj.fail) obj.fail({
                errMsg: error.message
              });
              if (obj.complete) obj.complete();
              return;
            }

            if (obj.success) obj.success(tex);
            if (obj.complete) obj.complete();
          });
        }

        _utils.loadTextureRes = loadTextureRes;

        function loadTextureResDir(obj) {
          resources.loadDir(obj.path, Texture2D, (error, texs) => {
            if (error) {
              if (!obj.nocheck) console.error("load_texture_res_dir failed: " + error.message);
              if (obj.fail) obj.fail({
                errMsg: error.message
              });
              if (obj.complete) obj.complete();
              return;
            }

            if (obj.success) obj.success(texs, []);
            if (obj.complete) obj.complete();
          });
        }

        _utils.loadTextureResDir = loadTextureResDir;

        function loadSpineRes(spineUrl, callBack) {
          resources.load(spineUrl, sp.SkeletonData, (error, assets) => {
            if (error == null) {
              if (callBack) callBack(assets);
            } else {
              console.log("error ", error);
            }
          });
        }

        _utils.loadSpineRes = loadSpineRes;

        function loadAuido(path, callBack) {
          resources.load(path, AudioClip, function (err, clip) {
            if (err) {
              console.log(err);
              return;
            }

            callBack(clip);
          });
        }

        _utils.loadAuido = loadAuido;

        function loadRemoteSpriteframe(sprite, imgUrl, imageInfo) {
          if (!imgUrl) return; //字节小游戏的头像域名是变动,采用字节自己加载图片的方式,避开跨域

          if (is_bytedance()) {
            if (!imageInfo) {
              imageInfo = {
                width: 100,
                height: 100
              };
            } //@ts-ignore


            var image = tt.createImage();
            image.src = imgUrl;
            image.width = imageInfo.width;
            image.height = imageInfo.height;
            image.addEventListener("load", res => {
              // console.log("加载成功 ");
              sprite.spriteFrame = SpriteFrame.createWithImage(image);
            });
            image.addEventListener("error", res => {
              console.log("加载失败 ", imgUrl);
            });
          } else {
            assetManager.loadRemote(imgUrl, {
              ext: '.png'
            }, (err, sp) => {
              if (err) {
                console.error(err, sp);
                return;
              }

              var spriteFrame = new SpriteFrame();
              var texture = new Texture2D();
              texture.image = sp;
              spriteFrame.texture = texture;
              sprite.spriteFrame = spriteFrame;
            });
          }
        }

        _utils.loadRemoteSpriteframe = loadRemoteSpriteframe;

        function setLocalStorage(key, value) {
          sys.localStorage.setItem(key, value);
        }

        _utils.setLocalStorage = setLocalStorage;

        function getLocalStorage(key) {
          return sys.localStorage.getItem(key);
        }

        _utils.getLocalStorage = getLocalStorage;

        function getMusic() {
          var s = getLocalStorage("Music");

          if (s != "off") {
            return true;
          }

          return false;
        }

        _utils.getMusic = getMusic;

        function getSound() {
          var s = getLocalStorage("Sound");

          if (s != "off") {
            return true;
          }

          return false;
        }

        _utils.getSound = getSound;

        function setMusic(on) {
          if (on) {
            console.log("music on");
            (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
              error: Error()
            }), SoundManager) : SoundManager).enableMusic(true);
            setLocalStorage("Music", "on");
          } else {
            console.log("music off");
            (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
              error: Error()
            }), SoundManager) : SoundManager).enableMusic(false);
            setLocalStorage("Music", "off");
          }
        }

        _utils.setMusic = setMusic;

        function setSound(on) {
          if (on) {
            console.log("sound on");
            (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
              error: Error()
            }), SoundManager) : SoundManager).enableSound(true);
            setLocalStorage("Sound", "on");
          } else {
            console.log("sound off");
            (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
              error: Error()
            }), SoundManager) : SoundManager).enableSound(false);
            setLocalStorage("Sound", "off");
          }
        }

        _utils.setSound = setSound;

        function addInstanceToRoot(prefab, root, comp) {
          if (isValid(prefab)) {
            var inst = instantiate(prefab);
            inst.setParent(root);
            return comp ? inst.getComponent(comp) : null;
          }

          return null;
        }

        _utils.addInstanceToRoot = addInstanceToRoot;

        function bindButtonEvent(button, target, component, handler) {
          var clickEventHandler = new Component.EventHandler();
          clickEventHandler.target = target;
          clickEventHandler.component = component;
          clickEventHandler.handler = handler;
          button.clickEvents.push(clickEventHandler);
        }

        _utils.bindButtonEvent = bindButtonEvent;

        function bindToggleEvent(toggle, target, component, handler) {
          var clickEventHandler = new Component.EventHandler();
          clickEventHandler.target = target;
          clickEventHandler.component = component;
          clickEventHandler.handler = handler;
          toggle.clickEvents.push(clickEventHandler);
        }

        _utils.bindToggleEvent = bindToggleEvent;

        function bindSliderEvent(slider, target, component, handler) {
          var sliderEventHandler = new Component.EventHandler();
          sliderEventHandler.target = target;
          sliderEventHandler.component = component;
          sliderEventHandler.handler = handler;
          slider.slideEvents.push(sliderEventHandler);
        }

        _utils.bindSliderEvent = bindSliderEvent;

        function checkLocalSameDay(name) {
          var str = getLocalStorage(name);
          var date = new Date();

          if (str && Math.floor(Number(str) / 100) == date.getMonth() && Number(str) % 100 == date.getDate()) {
            return true;
          }

          return false;
        }

        _utils.checkLocalSameDay = checkLocalSameDay;

        function getPoolPrefab(pool, url, call) {
          var item = getPool(pool);

          if (!item) {
            resources.load(url, Prefab, (error, res) => {
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

        _utils.getPoolPrefab = getPoolPrefab;

        function getPrefab(url, call) {
          resources.load(url, Prefab, (error, res) => {
            if (error) {
              console.log("error ", error);
              return;
            }

            call(instantiate(res));
          });
        }

        _utils.getPrefab = getPrefab;

        function getPool(pool) {
          if (pool.size() > 0) {
            return pool.get();
          }
        }

        _utils.getPool = getPool;

        function getWidgetHeight(e) {
          var widget = e.getComponent(Widget);

          if (widget) {
            widget.updateAlignment();
          }

          ;
          return e.getComponent(UITransform).contentSize;
        }

        _utils.getWidgetHeight = getWidgetHeight;

        function recoveryAllPool(e, arr, threshold) {
          var len = e.children.length - 1;

          for (var i = len; i >= 0; i--) {
            var item = e.children[i];
            recoveryPoolOrDestroy(item, arr, threshold);
          }
        }

        _utils.recoveryAllPool = recoveryAllPool;

        function recoveryPoolOrDestroy(e, arr, threshold) {
          if (arr.size() > threshold) {
            e.destroy();
          } else {
            recoveryPool(e, arr);
          }
        }

        _utils.recoveryPoolOrDestroy = recoveryPoolOrDestroy;

        function getRadian() {
          return 180 / Math.PI;
        }

        _utils.getRadian = getRadian;

        function getDegree() {
          return Math.PI / 180;
        }

        _utils.getDegree = getDegree;

        function getTwoPointsAngle(currentPos, endPos) {
          return v2(0, 1).signAngle(currentPos.subtract(endPos).normalize()) * getRadian();
        }

        _utils.getTwoPointsAngle = getTwoPointsAngle;

        function isEqual(startPos, endPos, tolerate) {
          var offsetX = Math.abs(startPos.x - endPos.x);
          var offsetY = Math.abs(startPos.y - endPos.y);
          return offsetX <= tolerate && offsetY <= tolerate;
        }

        _utils.isEqual = isEqual;

        function recoveryPool(e, arr) {
          arr.put(e);
        }

        _utils.recoveryPool = recoveryPool;

        function is_wechat() {
          return sys.platform === sys.Platform.WECHAT_GAME;
        }

        _utils.is_wechat = is_wechat;

        function is_bytedance() {
          return sys.platform === sys.Platform.BYTEDANCE_MINI_GAME;
        }

        _utils.is_bytedance = is_bytedance;

        function is_browser() {
          return sys.platform === sys.Platform.DESKTOP_BROWSER;
        }

        _utils.is_browser = is_browser;
      })(utils || _export("utils", utils = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=afc7fb2f73e2da2ee5ed15fd85acf64c20785111.js.map