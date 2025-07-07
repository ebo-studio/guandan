System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, utils, websocket, _crd;

  function _reportPossibleCrUseOfutils(extras) {
    _reporterNs.report("utils", "./utils", _context.meta, extras);
  }

  _export("websocket", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      utils = _unresolved_2.utils;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1bd530k795Hs7jDmsyu6lFU", "websocket", undefined);

      _export("websocket", websocket = class websocket {
        constructor() {
          this._theSocket = null;
          this._url = "";
          this._connected = false;
          this.check_timeout_id = null;
          this.no_heartbeat_ms = 0;
          this.onSocketOpen = void 0;
          this.onSocketError = void 0;
          this.onSocketMessage = void 0;
          this.onSocketClose = void 0;
        }

        /**
         * connect
         */
        connect(protocol, addr, port) {
          // this._url = protocol + '://' + addr + ':' + port;
          // console.log('Connect ' + this._url);
          this._url = protocol;
          this._theSocket = new WebSocket(this._url); // this._theSocket.binaryType = "arraybuffer";

          var that = this;

          this._theSocket.onopen = function (event) {
            that._onopen(event);
          };

          this._theSocket.onmessage = function (event) {
            that._onmessage(event);
          };

          this._theSocket.onerror = function (event) {
            that._onerror(event);
          };

          this._theSocket.onclose = function (event) {
            that._onclose(event);
          };
        }

        _onopen(event) {
          this._connected = true;

          if (this.onSocketOpen) {
            this.onSocketOpen();
          } // let that = this;
          // this.check_timeout_id = setInterval(function() {
          //     that.no_heartbeat_ms += 100;
          //     // 收不到心跳10秒钟
          //     if (that.no_heartbeat_ms > 10000) {
          //         that.close();
          //         that.onSocketClose(null);
          //         clearInterval(that.check_timeout_id);
          //     }
          // }, 100);

        }

        _onmessage(event) {
          if (this.onSocketMessage) {
            if (event.data instanceof ArrayBuffer) {
              this.onSocketMessage(event.data);
            } else if (event.data instanceof Blob) {
              //浏览器接收的是blob,转成arraybuffer
              (_crd && utils === void 0 ? (_reportPossibleCrUseOfutils({
                error: Error()
              }), utils) : utils).blob2ab(event.data, rec => {
                this.onSocketMessage(rec);
              });
            }
          }
        }

        _onerror(event) {
          console.log("_onerror");
          this._connected = false;

          if (this.onSocketError) {
            this.onSocketError(event);
          }
        }

        _onclose(event) {
          console.log("_onclose");
          this._connected = false;

          if (this.onSocketClose) {
            this.onSocketClose(event);
          }
        }

        sendData(arrayBuffer) {
          // console.log("send ",arrayBuffer);
          if (this._connected) {
            this._theSocket.send(arrayBuffer);
          } else {
            console.log("网络出错了");
          }
        }

        sendHeartBeat(data) {
          this._theSocket.send(data);
        } // close方法有问题
        // 没有回调，socket会被关闭，心跳包接收不到，10个以后服务器发close可以正常收到


        close(code, reason) {
          if (this._connected) {
            //[FOR4M]console.log("Close socket..." + this._theSocket);
            this._connected = false;

            this._theSocket.close(code, reason);
          }
        } // callbacks


      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bae60ca62bb70808b5d9b76eff52db04d48fa668.js.map