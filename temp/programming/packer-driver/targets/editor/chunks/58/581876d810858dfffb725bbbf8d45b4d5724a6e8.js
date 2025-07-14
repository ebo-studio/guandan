System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, event_node, _crd, event;

  _export("event", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "74d7cmqiDhLrINXTVHYsTdv", "events", undefined);

      event_node = class event_node {
        constructor(target, func) {
          this.target = null;
          this.func = null;
          this.target = target;
          this.func = func;
        }

      };

      (function (_event) {
        var event_map = null;

        function register_event(name, target, func) {
          if (event_map == null) {
            event_map = new Map();
          }

          let array = event_map.has(name) ? event_map.get(name) : [];
          array.push(new event_node(target, func));
          event_map.set(name, array);
        }

        _event.register_event = register_event;

        function unregister_event(name, target, func = null) {
          if (event_map == null) {
            event_map = new Map();
          }

          if (event_map.has(name)) {
            let array = [];

            if (func == null) {
              // func为空认为是删除所有指定消息
              event_map.delete(name);
            } else {
              array = event_map.get(name).filter(x => x.target != target || x.func != func);
              event_map.set(name, array);
            }
          }
        }

        _event.unregister_event = unregister_event;

        function trigger_event(name, ...param) {
          if (event_map.has(name) && event_map.get(name).length > 0) {
            event_map.get(name).forEach(node => {
              node.func.call(node.target, param[0], param[1], param[2], param[3], param[4], param[5], param[6], param[7], param[8], param[9]);

              if (param.length > 10) {
                console.error("Event arguments more than 10.");
              }
            });
          } else {// console.warn("unhandled event: ", name);
          }
        }

        _event.trigger_event = trigger_event;
      })(event || _export("event", event = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=581876d810858dfffb725bbbf8d45b4d5724a6e8.js.map