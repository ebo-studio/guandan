class event_node {
    public target: object = null;
    public func: Function = null;
    constructor (target: object, func: Function) {
        this.target = target;
        this.func = func;
    }
}

export module event {
    var event_map: Map<string, event_node[]> = null;

    export function register_event(name: string, target: object, func: Function) {
        if (event_map == null) {
            event_map = new Map<string, event_node[]>();
        }

        let array: event_node[] = event_map.has(name) ? event_map.get(name) : [];
        array.push(new event_node(target, func));
        event_map.set(name, array);
    }

    export function unregister_event(name: string, target: object, func: Function = null) {
        if (event_map == null) {
            event_map = new Map<string, event_node[]>();
        }

        if (event_map.has(name)) {
            let array = [];
            if (func == null) {
                // func为空认为是删除所有指定消息
                event_map.delete(name);
            }
            else {
                array = event_map.get(name).filter(x => x.target != target || x.func != func);
                event_map.set(name, array);
            }
        }
    }

    export function trigger_event(name: string, ...param: any[]) {
        if (event_map.has(name) && event_map.get(name).length > 0) {
            event_map.get(name).forEach(node => {
                node.func.call(node.target, param[0], param[1], param[2], param[3], param[4], param[5], param[6], param[7], param[8], param[9]);
                if (param.length > 10) {
                    console.error("Event arguments more than 10.");
                }
            });
        }
        else {
            // console.warn("unhandled event: ", name);
        }
    }
}
