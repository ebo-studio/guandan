import { _decorator, Component, Label, sp } from "cc";

const { ccclass, property } = _decorator;

@ccclass('announceMenuItem')
export class AnnounceMenuItem extends Component {

    @property(Label)
    selelct_title: Label = null;

    @property(Label)
    unSelect_title: Label = null;

    @property(sp.Skeleton)
    select_ani = null;

    private _data: any = null;
    private _callback: (notice: any, item: AnnounceMenuItem) => void = null;
    private _isSelected: boolean = false;

    public setValue(data: any, callback?: (notice: any, item: AnnounceMenuItem) => void) {
        this._data = data;
        this.selelct_title.string = this.unSelect_title.string = data.title;
        this._callback = callback;
        // const isCurrent = data.id === 1;
        // this.selelct_title.node.active = isCurrent;
        // this.unSelect_title.node.active = !isCurrent;
        // this.select_ani.node.active = isCurrent;
        this.setSelected(false);
    }

    onClick() {
        if (this._callback) {
            this._callback(this._data, this);
        }
    }

    setSelected(selected: boolean) {
        this._isSelected = selected;
        this.selelct_title.node.active = selected;
        this.unSelect_title.node.active = !selected;
        this.select_ani.node.active = selected
    }

}