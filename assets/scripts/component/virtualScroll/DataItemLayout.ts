import { _decorator, CCBoolean, ccenum, CCFloat, CCInteger, Component, director, Director, EventHandler, instantiate, Node, NodeEventType, ScrollView, Size, UITransform, Vec2, Vec3 } from 'cc';
const { ccclass, property, executeInEditMode, requireComponent } = _decorator;

export const SET_IDX_EVT = "SET_IDX_EVT";                           //设置索引接口
export const SET_DATAS_EVT = "SET_DATAS_EVT";                       //设置数据接口
export const SET_REF_DATA_EVT = "SET_REF_DATA_EVT";                 //刷新接口
export const SET_BIND_FUNC_EVT = "SET_BIND_FUNC_EVT";               //绑定事件接口
export const SET_REF_TOGGLE_TYPE_EVT = "SET_REF_TOGGLE_TYPE_EVT";   //刷新选择状态事件接口

export abstract class DataItemComponent<T> extends Component {
    protected idx:number = null;    //当前的项索引
    private _datas:Array<T> = null; //数据集
    protected curData:T = null;     //当前的数据
    protected comData:any = null;   //当前集合的公用数据
    private _toggleFunc = null;     //点击响应方法
    protected isSelected = false;   //是否被选择了
    private _expandFunc = null;     //展开响应方法

    protected onLoad(): void {
        this.node.on(SET_IDX_EVT, this.onSetIdx, this);
        this.node.on(SET_DATAS_EVT, this.onSetDatas, this);
        this.node.on(SET_REF_DATA_EVT, this.onSetData, this);
        this.node.on(SET_BIND_FUNC_EVT, this.onBindFunc, this);
        this.node.on(SET_REF_TOGGLE_TYPE_EVT, this.onRefToggleType, this);
    }

    protected onSetIdx(idx:number, curSelectIdxs:Set<number>){
        if(idx == null){
            this.node.active = false;
        }
        if(this.idx != idx){
            this.idx = idx;
            this.onSetData(curSelectIdxs);
        }
    }

    private onSetDatas(datas:Array<T>, comData:any, curSelectIdxs:Set<number>){
        this._datas = datas;
        this.comData = comData;
        this.onSetData(curSelectIdxs);
    }

    /**判定数据设置 */
    private onSetData(curSelectIdxs:Set<number>){
        if(this._datas != null && this.idx != null){
            if(this.idx < this._datas.length){
                this.node.active = true;
                this.curData = this._datas[this.idx];
                this.setData(this.curData, this.comData);
                this.onRefToggleType(curSelectIdxs);
            }else{
                this.node.active = false;
            }
        }else{
            this.node.active = false;
        }
    }
    
    /**子项重载的设置数据方法 */
    protected abstract setData(data:T, comData?:any);
    
    private onBindFunc(toggleFunc:Function, expandFunc:Function){
        this._toggleFunc = toggleFunc;
        this._expandFunc = expandFunc;
    }

    private onRefToggleType(curSelectIdxs:Set<number> = null){
        if(this._toggleFunc && this.curData != null){
            let curSelect = curSelectIdxs ? curSelectIdxs.has(this.idx) : false;
            this.isSelected = curSelect;
            this.refToggleType(this.isSelected);
        }
    }

    /**响应选择,控件的按钮点击响应绑定这个函数,必须在组件中勾选了选择属性 */
    onClickToggle(){
        if(this._toggleFunc){
            this._toggleFunc(this.idx);
        }
    }

    /**子项需重载的刷新选择状态 */
    protected refToggleType(isSelect:boolean){ throw new Error("子项需重载刷新选择状态函数!"); }

    /**展开项, 
     * @param size 如果传null 表示不展开此项 否则表示此项的展开尺寸
     * @param force 是否立即更新布局
     * 仅当 maxRow == 1 || maxCol == 1 时才能使用此方法,且在调用 bindDatas() 时会自动清理所有展开项  */
    protected changeExpand(size:number = null, force:boolean = false){
        if(this._expandFunc){
            this._expandFunc(this.idx, size, force);
        }
    }
}
//---------------------------------------------------------------------------------------------------------------
const _tempVec3 = new Vec3();

class AnchorRect{
    leftW:number;
    rightW:number;
    topH:number;
    bottomH:number;

    H:number;

    set(trans:UITransform){
        this.leftW = trans.width * trans.anchorX;
        this.rightW = trans.width * (1 - trans.anchorX);
        this.topH = trans.height * (1 - trans.anchorY);
        this.bottomH = trans.height * trans.anchorY;
        this.H = trans.height
    }
}

class SearchRowCol{
    private _layout:DataItemLayout;
    private _offset:Vec2 = new Vec2();
    private _offsetCheck:Vec2 = new Vec2(); //最小的检测尺寸
    private _rowSearch:number[] = [];
    private _colSearch:number[] = [];
    /**父视图的anchor尺寸 */
    private _prAnchorRect = new AnchorRect();
    /**Layout的anchor尺寸 */
    private _lyAnchorRect = new AnchorRect();

    /**设置检测参数 */
    setCheckParam(layout:DataItemLayout){
        this._layout = layout;
        this._lyAnchorRect.set(layout.node._uiProps.uiTransformComp);
        if(layout.scrollView){
            this._prAnchorRect.set(layout.node.parent._uiProps.uiTransformComp);
        }
        const thr = 5; //阈值越大检测越频繁
        this._offsetCheck.set(Math.max(1, (Math.min(layout.expandMinWidth, layout.cellSize.width) + layout.spacingX) / thr), Math.max(1, (Math.min(layout.expandMinHeight, layout.cellSize.height) + layout.spacingY) / thr));
    }

    clearRc(){
        this._offset.set();
        this._rowSearch.length = 0;
        this._colSearch.length = 0;
    }

    addr(r:number, y:number){
        if(this._rowSearch.length <= r){
            this._rowSearch.push(y);
        }
    }

    addc(c:number, x:number){
        if(this._colSearch.length <= c){
            this._colSearch.push(x);
        }
    }

    /**获得起始的行列索引 */
    getBeginRowCol(pos:Vec3, beginR:number, beginC:number, force:boolean){
        let posx = this._layout.horizontalDirection == DataItemHorizontalDirection.LEFT_TO_RIGHT ? this._lyAnchorRect.leftW - this._prAnchorRect.leftW - pos.x : this._lyAnchorRect.rightW - this._prAnchorRect.leftW + pos.x;
        let posy = this._layout.verticalDirection == DataItemVerticalDirection.TOP_TO_BOTTOM ? this._lyAnchorRect.topH - this._prAnchorRect.topH + pos.y : (this._lyAnchorRect.bottomH - pos.y - this._prAnchorRect.H);// this._lyAnchorRect.bottomH - this._prAnchorRect.topH + pos.y;
        
        let r = beginR;
        let c = beginC;

        if(Math.abs(this._offset.x - posx) > this._offsetCheck.x || force){
            c = Math.min(Math.max(0, SearchRowCol.idxSearch(this._colSearch, posx, this._layout.maxCol) - 1), this._layout.maxCol - this._layout.maxShowCol);
            this._offset.x = posx;
        }
        if(Math.abs(this._offset.y - posy) > this._offsetCheck.y || force){
            r = Math.min(Math.max(0, SearchRowCol.idxSearch(this._rowSearch, posy, this._layout.maxRow) - 1), this._layout.maxRow - this._layout.maxShowRow);
            this._offset.y = posy;
        }
        
        return [r, c];
    }
    
    //数据索引查找
    private static idxSearch(arr:number[], pos:number, idxMax:number): number {
        let left = 0;
        let right = arr.length - 1;
        while (left <= right) {
            const mid = Math.ceil((left + right) / 2);

            if(mid <= 0){
                return 0;
            }else if(mid >= idxMax){
                return idxMax;
            }

            let rpos = arr[mid];
            let lpos = arr[mid - 1];

            if(pos < lpos){
                right = mid - 1;
            }else if(pos > rpos){
                left = mid + 1;
            }else{
                return mid;
            }
        }
        return 0;
    }
}

class CountRect{
    isLeftToRight:boolean;
    isTopToBottom:boolean;
    minPos:Vec2 = new Vec2();
    paddingWidth:Vec2 = new Vec2();
    paddingHeight:Vec2 = new Vec2();
    spacing:Vec2 = new Vec2();
    maxSize:Vec2 = new Vec2();

    beginRect(isLeftToRight:boolean, isTopToBottom:boolean, paddingLeft:number, paddingRight:number, paddingTop:number, paddingBottom:number, spacingX:number, spacingY:number){
        this.isLeftToRight = isLeftToRight;
        this.isTopToBottom = isTopToBottom;
        this.paddingWidth.set(isLeftToRight ? paddingLeft : paddingRight, isLeftToRight ? paddingRight : paddingLeft);
        this.paddingHeight.set(isTopToBottom ? paddingTop : paddingBottom, isTopToBottom ? paddingBottom : paddingTop);
        this.spacing.set(spacingX, spacingY);
        this.minPos.set(this.paddingWidth.x, this.paddingHeight.x);
        this.maxSize.set();
    }

    endRect(){
        this.maxSize.x += this.paddingWidth.y - this.spacing.x;
        this.maxSize.y += this.paddingHeight.y - this.spacing.y;
    }

    countItemRect(width:number, height:number, dr:DataItemRect){
        dr.pos.set(this.minPos);
        dr.size.set(width, height);
    }

    countItemPosition(lyAp:Vec2, dr:DataItemRect, drAp:Vec2, offsetX:number, offsetY:number){
        const xMin = this.isLeftToRight ? dr.pos.x - (this.maxSize.x * lyAp.x) : (this.maxSize.x - dr.pos.x) - (this.maxSize.x * lyAp.x) - dr.size.x;
        const yMin = this.isTopToBottom ? (this.maxSize.y - dr.pos.y) - (this.maxSize.y * lyAp.y) - dr.size.y : dr.pos.y - (this.maxSize.y * lyAp.y);
        dr.pos.x = xMin + dr.size.x * drAp.x + offsetX;
        dr.pos.y = yMin + dr.size.y * drAp.y + offsetY;
    }

    clearWidht(){
        this.minPos.x = this.paddingWidth.x;
    }

    clearHeight(){
        this.minPos.y = this.paddingHeight.x;
    }

    addHeight(height:number, r:number, searchRC:SearchRowCol){
        this.minPos.y += height + this.spacing.y;
        this.maxSize.y = Math.max(this.maxSize.y, this.minPos.y);
        searchRC.addr(r, this.minPos.y);
    }

    addWidth(width:number, c:number, searchRC:SearchRowCol){
        this.minPos.x += width + this.spacing.x;
        this.maxSize.x = Math.max(this.maxSize.x, this.minPos.x);
        searchRC.addc(c, this.minPos.x);
    }
}
const _countRect = new CountRect();

class DataItemRect{
    pos:Vec2 = new Vec2();
    size:Vec2 = new Vec2();
}

/**缩放模式。*/
enum DataItemResizeMode {
    /**根据子项的大小重置容器的大小。*/
    CONTAINER = 0,
    /**根据容器的大小重置子项的大小。*/
    CHILDREN = 1,
}
ccenum(DataItemResizeMode);

/**布局类型。*/
enum DataItemType {
    /**水平布局。*/
    HORIZONTAL = 0,
    /**垂直布局。*/
    VERTICAL = 1,
    /**网格布局。*/
    GRID = 2,
}
ccenum(DataItemType);

/**布局轴向，只用于 GRID 布局。*/
enum DataItemAxisDirection {
    /**进行水平方向布局。*/
    HORIZONTAL = 0,
    /**进行垂直方向布局。*/
    VERTICAL = 1,
}
ccenum(DataItemAxisDirection);

/**垂直方向布局方式。*/
enum DataItemVerticalDirection {
    /**从下到上排列。*/
    BOTTOM_TO_TOP = 0,
    /**从上到下排列。*/
    TOP_TO_BOTTOM = 1,
}
ccenum(DataItemVerticalDirection);

/**水平方向布局方式。*/
enum DataItemHorizontalDirection {
    /**从左往右排列。*/
    LEFT_TO_RIGHT = 0,
    /**从右往左排列。*/
    RIGHT_TO_LEFT = 1,
}
ccenum(DataItemHorizontalDirection);

/**布局约束。*/
enum DataItemConstraint {
    /**固定行。*/
    FIXED_ROW = 0,
    /**固定列。*/
    FIXED_COL = 1,
}
ccenum(DataItemConstraint);

/**对齐方式 */
enum DataItemAlignmentType{
    /**上左对齐。*/
    TOP_LEFT = 0,
    /**上中对齐。 */
    TOP_CENTER = 1,
    /**上右对齐。*/
    TOP_RIGHT = 2,
    /**中左对齐。*/
    CENTER_LEFT = 3,
    /**中心对齐。*/
    CENTER = 4,
    /**中右对齐。*/
    CENTER_RIGHT = 5,
    /**下左对齐。*/
    BOTTOM_LEFT = 6,
    /**下中对齐。 */
    BOTTOM_CENTER = 7,
    /**下右对齐。*/
    BOTTOM_RIGHT = 8,
}
ccenum(DataItemAlignmentType);

@ccclass('DataItemLayout')
@executeInEditMode

export class DataItemLayout extends Component {
    /**最大数据数量限制*/
    @property({type:CCInteger, tooltip:'如果调用 bindDatas 时数量超出,则按该值取最大数量。为0则不限制。'})
    get maxDataCountLimit ():number {
        return this._maxDataCountLimit;
    }
    set maxDataCountLimit (value:number) {
        this._maxDataCountLimit = value;
    }
    /**最大数据数量限制*/
    @property({serializable:true})
    private _maxDataCountLimit:number = 0;
    
    /**模板子项,在绑定数据时会根据这个模板创建所需数量的子项。所有计算中所需的参数如 CellSize CellAnchor 等参数都会从模板中获取。*/
    @property({type:Node, tooltip:'模板子项,在绑定数据时会根据这个模板创建所需数量的子项。<br>所有计算中所需的参数如 CellSize CellAnchor 等参数都会从模板中获取。'})
    get templeteChildItem ():Node {
        return this._templeteChildItem;
    }
    set templeteChildItem (value:Node) {
        if (this._templeteChildItem === value){ return; }
        this.onDisable();
        this._templeteChildItem = value;
        this.onEnable();
        this._doRowColInfosDitry();
    }
    /**模板子项,在绑定数据时会根据这个模板创建所需数量的子项!*/
    @property({serializable:true})
    private _templeteChildItem:Node = null;

    /**滚动视图,可以为空!*/
    @property({type:ScrollView, visible:function (this:DataItemLayout){
        return this._templeteChildItem != null;
    }, tooltip:'滚动视图,可以为空!'})
    get scrollView ():ScrollView {
        return this._scrollView;
    }
    set scrollView (value:ScrollView) {
        if (this._scrollView === value){ return; }
        this._scrollView = value;
        this._resetScrollAxisFromLayoutType()
        this._doRowColInfosDitry()
    }
    /**滚动视图,可以为空!*/
    @property({serializable:true})
    private _scrollView:ScrollView = null;

    /**当layout尺寸小于滚动视图时,layout相对于滚动视图的对齐方式!*/
    @property({type:DataItemAlignmentType, visible:function (this:DataItemLayout){
        return this._templeteChildItem != null && this._scrollView != null;
    }, tooltip:'当layout尺寸小于滚动视图时,layout相对于滚动视图的对齐方式!包括：<br> 1. TOP_LEFT, 上左对齐。 <br> 2. TOP_CENTER, 上中对齐。<br> 3. TOP_RIGHT, 上右对齐。<br> 4. CENTER_LEFT, 中左对齐。<br> 5. CENTER, 中心对齐。<br> 6. CENTER_RIGHT, 中右对齐。<br> 7. BOTTOM_LEFT, 下左对齐。<br> 8. BOTTOM_CENTER, 下中对齐。<br> 9. BOTTOM_RIGHT, 下右对齐。'})
    get alignmentType ():DataItemAlignmentType {
        return this._alignmentType;
    }
    set alignmentType (value:DataItemAlignmentType) {
        this._alignmentType = value;
        this._doRowColInfosDitry()
    }
    /**当layout尺寸小于滚动视图时,layout相对于滚动视图的对齐方式!*/
    @property({serializable:true})
    private _alignmentType:DataItemAlignmentType = DataItemAlignmentType.CENTER;

    /**通过布局类型重设滚动视图的滚动轴 */
    private _resetScrollAxisFromLayoutType(){
        if(!this._scrollView) return;
        if(this._type == DataItemType.HORIZONTAL){
            this._scrollView.horizontal = true;
            this._scrollView.vertical = false;
        }else if(this._type == DataItemType.VERTICAL){
            this._scrollView.horizontal = false;
            this._scrollView.vertical = true;
        }else{
            this._scrollView.horizontal = true;
            this._scrollView.vertical = true;
        }
    }
    
    /**每个子项的大小。*/
    @property({type:Size, visible:function (this:DataItemLayout){
        return this._templeteChildItem != null;
    }, tooltip:'每个子项的大小。为模板的 尺寸*缩放。最小为 1*1'})
    get cellSize():Readonly<Size>{
        return this._cellSize;
    }
    /**每个子项的大小。*/
    @property({serializable:true})
    private _cellSize:Size = new Size();

    @property({type:CCBoolean, visible:function (this:DataItemLayout){
        return this._templeteChildItem != null;
    }, group:"布局属性", tooltip:'是否需要布局?'})
    get needLayout () {
        return this._needLayout;
    }
    set needLayout (value) {
        this._needLayout = value;
    }
    /**是否有选择属性?*/
    @property({serializable:true})
    private _needLayout:boolean = true;

    /**布局类型。*/
    @property({type:DataItemType, group:"布局属性", visible:function (this:DataItemLayout){
        return this._templeteChildItem != null && this._needLayout;
    }, tooltip:'布局类型，包括：<br> 1. HORIZONTAL, 水平布局。 <br> 2. VERTICAL, 垂直布局。<br> 3. GRID, 网格布局。'})
    get type ():DataItemType {
        return this._type;
    }
    set type (value:DataItemType) {
        if (this._type === value){ return; }
        this._type = value;
        if(value == DataItemType.HORIZONTAL){
            this.startAxis = DataItemAxisDirection.HORIZONTAL;
            this.constraint = DataItemConstraint.FIXED_ROW;
            this.constraintNum = 1;
            this.paddingTop = 0;
            this.paddingBottom = 0;
            this.spacingY = 0;
        }else if(value == DataItemType.VERTICAL){
            this.startAxis = DataItemAxisDirection.VERTICAL;
            this.constraint = DataItemConstraint.FIXED_COL;
            this.constraintNum = 1;
            this.paddingLeft = 0;
            this.paddingRight = 0;
            this.spacingX = 0;
        }
        this._doRowColInfosDitry();
        this._resetScrollAxisFromLayoutType();
    }
    /**布局类型。*/
    @property({serializable:true})
    private _type:DataItemType = DataItemType.VERTICAL;
    
    /**缩放模式。*/
    @property({type:DataItemResizeMode, group:"布局属性", visible:function (this:DataItemLayout){
        return this._templeteChildItem != null && this._needLayout;
    }, tooltip:'缩放模式，包括：<br> 1. CONTAINER, 根据子项的大小重置容器的大小。 <br> 2. CHILDREN, 根据容器的大小重置子项的大小。'})
    get resizeMode ():DataItemResizeMode {
        return this._resizeMode;
    }
    set resizeMode (value:DataItemResizeMode) {
        if (this._resizeMode === value){ return; }
        this._resizeMode = value;
        this._doRowColInfosDitry();
    }
    /**缩放模式。*/
    @property({serializable:true})
    private _resizeMode:DataItemResizeMode = DataItemResizeMode.CONTAINER;
    
    /**起始轴方向类型，可进行水平和垂直布局排列，只有布局类型为 GRID 的时候才有效。*/
    @property({type:DataItemAxisDirection, group:"布局属性", visible:function (this:DataItemLayout){
        return this._templeteChildItem != null && this._type == DataItemType.GRID && this._needLayout;
    }, tooltip:'起始轴方向类型，可进行水平和垂直布局排列，只有布局类型为 GRID 的时候才有效，包括：<br> 1. HORIZONTAL, 进行水平方向布局。 <br> 2. VERTICAL, 进行垂直方向布局。'})
    get startAxis ():DataItemAxisDirection {
        return this._startAxis;
    }
    set startAxis (value:DataItemAxisDirection) {
        if (this._startAxis === value){ return; }
        this._startAxis = value;
        this._doRowColInfosDitry();
    }
    /**起始轴方向类型，可进行水平和垂直布局排列，只有布局类型为 GRID 的时候才有效。*/
    @property({serializable:true})
    private _startAxis:DataItemAxisDirection = DataItemAxisDirection.VERTICAL;
    
    /**垂直排列子节点的方向。*/
    @property({type:DataItemVerticalDirection, group:"布局属性", visible:function (this:DataItemLayout){
        return this._templeteChildItem != null && (this._type == DataItemType.GRID || this._type == DataItemType.VERTICAL) && this._needLayout;
    }, tooltip:'垂直排列子节点的方向，包括：<br> 1. BOTTOM_TO_TOP, 从下到上排列。 <br> 2. TOP_TO_BOTTOM, 从上到下排列。'})
    get verticalDirection ():DataItemVerticalDirection {
        return this._topToBottom ? DataItemVerticalDirection.TOP_TO_BOTTOM : DataItemVerticalDirection.BOTTOM_TO_TOP;
    }
    set verticalDirection (value: DataItemVerticalDirection) {
        const tmpv = value == DataItemVerticalDirection.TOP_TO_BOTTOM;
        if (this._topToBottom === tmpv){ return; }
        this._topToBottom = tmpv;
        this._doRowColInfosDitry();
    }
    /**垂直排列子节点的方向。*/
    @property({serializable:true})
    private _topToBottom:boolean = true;

    /**水平排列子节点的方向。*/
    @property({type:DataItemHorizontalDirection, group:"布局属性", visible:function (this:DataItemLayout){
        return this._templeteChildItem != null && (this._type == DataItemType.GRID || this._type == DataItemType.HORIZONTAL) && this._needLayout;
    }, tooltip:'水平排列子节点的方向，包括：<br> 1. LEFT_TO_RIGHT, 从左往右排列。 <br> 2. RIGHT_TO_LEFT, 从右往左排列。'})
    get horizontalDirection ():DataItemHorizontalDirection {
        return this._leftToRight ? DataItemHorizontalDirection.LEFT_TO_RIGHT : DataItemHorizontalDirection.RIGHT_TO_LEFT;
    }
    set horizontalDirection (value: DataItemHorizontalDirection) {
        const tmpv = value == DataItemHorizontalDirection.LEFT_TO_RIGHT;
        if (this._leftToRight === tmpv){ return; }
        this._leftToRight = tmpv;
        this._doRowColInfosDitry();
    }
    /**水平排列子节点的方向。*/
    @property({serializable:true})
    private _leftToRight:boolean = true;


    /**容器内左边距，只会在一个布局方向上生效。*/
    @property({type:CCFloat, group:"布局属性", visible:function (this:DataItemLayout){
        return this._templeteChildItem != null && (this._type == DataItemType.GRID || this._type == DataItemType.HORIZONTAL) && this._needLayout;
    }, tooltip:'容器内左边距，只会在一个布局方向上生效。'})
    get paddingLeft ():number {
        return this._paddingLeft;
    }
    set paddingLeft (value:number) {
        if (this._paddingLeft === value){ return; }
        this._paddingLeft = value;
        this._doRowColInfosDitry();
    }
    /**容器内左边距，只会在一个布局方向上生效。*/
    @property({serializable:true})
    private _paddingLeft:number = 0;

    /**容器内右边距，只会在一个布局方向上生效。*/
    @property({type:CCFloat, group:"布局属性", visible:function (this:DataItemLayout){
        return this._templeteChildItem != null && (this._type == DataItemType.GRID || this._type == DataItemType.HORIZONTAL) && this._needLayout;
    }, tooltip:'容器内右边距，只会在一个布局方向上生效。'})
    get paddingRight ():number {
        return this._paddingRight;
    }
    set paddingRight (value:number) {
        if (this._paddingRight === value){ return; }
        this._paddingRight = value;
        this._doRowColInfosDitry();
    }
    /**容器内右边距，只会在一个布局方向上生效。*/
    @property({serializable:true})
    private _paddingRight:number = 0;

    /**容器内上边距，只会在一个布局方向上生效。*/
    @property({type:CCFloat, group:"布局属性", visible:function (this:DataItemLayout){
        return this._templeteChildItem != null && (this._type == DataItemType.GRID || this._type == DataItemType.VERTICAL) && this._needLayout;
    }, tooltip:'容器内上边距，只会在一个布局方向上生效。'})
    get paddingTop ():number {
        return this._paddingTop;
    }
    set paddingTop (value:number) {
        if (this._paddingTop === value){ return; }
        this._paddingTop = value;
        this._doRowColInfosDitry();
    }
    /**容器内上边距，只会在一个布局方向上生效。*/
    @property({serializable:true})
    private _paddingTop:number = 0;

    /**容器内下边距，只会在一个布局方向上生效。*/
    @property({type:CCFloat, group:"布局属性", visible:function (this:DataItemLayout){
        return this._templeteChildItem != null && (this._type == DataItemType.GRID || this._type == DataItemType.VERTICAL) && this._needLayout;
    }, tooltip:'容器内下边距，只会在一个布局方向上生效。'})
    get paddingBottom ():number {
        return this._paddingBottom;
    }
    set paddingBottom (value:number) {
        if (this._paddingBottom === value){ return; }
        this._paddingBottom = value;
        this._doRowColInfosDitry();
    }
    /**容器内下边距，只会在一个布局方向上生效。*/
    @property({serializable:true})
    private _paddingBottom:number = 0;

    /**子节点之间的水平间距。*/
    @property({type:CCFloat, group:"布局属性", visible:function (this:DataItemLayout){
        return this._templeteChildItem != null && (this._type == DataItemType.GRID || this._type == DataItemType.HORIZONTAL) && this._needLayout;
    }, tooltip:'子节点之间的水平间距。'})
    get spacingX ():number {
        return this._spacingX;
    }
    set spacingX (value:number) {
        if (this._spacingX === value){ return; }
        this._spacingX = value;
        this._doRowColInfosDitry();
    }
    /**子节点之间的水平间距。*/
    @property({serializable:true})
    private _spacingX:number = 0;

    /**子节点之间的垂直间距。*/
    @property({type:CCFloat, group:"布局属性", visible:function (this:DataItemLayout){
        return this._templeteChildItem != null && (this._type == DataItemType.GRID || this._type == DataItemType.VERTICAL) && this._needLayout;
    }, tooltip:'子节点之间的垂直间距。'})
    get spacingY ():number {
        return this._spacingY;
    }
    set spacingY (value:number) {
        if (this._spacingY === value){ return; }
        this._spacingY = value;
        this._doRowColInfosDitry();
    }
    /**子节点之间的垂直间距。*/
    @property({serializable:true})
    private _spacingY:number = 0;
    
    /**容器内布局约束。*/
    @property({type:DataItemConstraint, group:"布局属性", visible:function (this:DataItemLayout){
        return this._templeteChildItem != null && this._type == DataItemType.GRID && this._needLayout;
    }, tooltip:'容器内布局约束，包括：<br> 1. FIXED_ROW, 固定行。 <br> 2. FIXED_COL, 固定列。'})
    get constraint ():DataItemConstraint {
        return this._constraint;
    }
    set constraint (value:DataItemConstraint) {
        if (this._constraint === value){ return; }
        this._constraint = value;
        this._doRowColInfosDitry();
    }
    /**容器内布局约束。*/
    @property({serializable:true})
    private _constraint:DataItemConstraint = DataItemConstraint.FIXED_COL;

    /**容器内布局约束使用的限定值。*/
    @property({type:CCInteger, group:"布局属性", min:1, visible:function (this:DataItemLayout){
        return this._templeteChildItem != null && this._type == DataItemType.GRID && this._needLayout;
    }, tooltip:'容器内布局约束使用的限定值。'})
    get constraintNum () {
        return this._constraintNum;
    }
    set constraintNum (value) {
        if (this._constraintNum === value){ return; }
        this._constraintNum = value;
        this._doRowColInfosDitry();
    }
    /**容器内布局约束使用的限定值。*/
    @property({serializable:true})
    private _constraintNum:number = 1;
    
    /**水平边距 */
    private get paddingH () {
        return this._paddingLeft + this._paddingRight;
    }

    /**垂直边距 */
    private get paddingV () {
        return this._paddingTop + this._paddingBottom;
    }

    /**展开的最小宽度 */
    private _expandMinWidth: number = Number.MAX_VALUE;
    public get expandMinWidth(): number {
        return this._expandMinWidth;
    }

    /**展开的最小高度 */
    private _expandMinHeight: number = Number.MAX_VALUE;
    public get expandMinHeight(): number {
        return this._expandMinHeight;
    }

    /**获得展开的值 */
    private _getExpandWidth(idx:number){
        if(this.canExpand){
            const ew = this._expandDataIdxs.get(idx);
            return ew ? ew : this._cellSize.width;
        }else{
            return this._cellSize.width;
        }
    }

    private _getExpandHeight(idx:number){
        if(this.canExpand){
            const eh = this._expandDataIdxs.get(idx);
            return eh ? eh : this._cellSize.height;
        }else{
            return this._cellSize.height;
        }
    }
    
    /**是否有选择属性?*/
    @property({type:CCBoolean, visible:function (this:DataItemLayout){
        return this._templeteChildItem != null;
    }, group:"单多选属性", tooltip:'是否有选择属性?'})
    get hasToggle () {
        return this._hasToggle;
    }
    set hasToggle (value) {
        this._hasToggle = value;
    }
    /**是否有选择属性?*/
    @property({serializable:true})
    private _hasToggle:boolean = false;
    
    /**选择回调事件。
     * 单选回调参数原型 (data:any, idx:number)
     * 多选回调参数原型 (datas:any[], idxs:Set<number>)
     */
    @property({type:[EventHandler], visible:function (this:DataItemLayout){
        return this._hasToggle && this._templeteChildItem != null;
    }, group:"单多选属性", tooltip:'选择回调事件。<br>单选回调参数原型 (data:any, idx:number)<br>多选回调参数原型 (datas:any[], idxs:Set<number>)'})
    get toggleCallBack () {
        return this._toggleCallBack;
    }
    set toggleCallBack (value) {
        this._toggleCallBack = value;
    }
    /**选择回调事件。*/
    @property({serializable:true})
    private _toggleCallBack:EventHandler[] = [];

    /**勾选本项为复选否则为单选。单选必定选择一项。多选可取消全部选择。*/
    @property({type:CCBoolean, visible:function (this:DataItemLayout){
        return this._hasToggle && this._templeteChildItem != null;
    }, group:"单多选属性", tooltip:'勾选本项为复选否则为单选。<br>单选必定选择一项。<br>多选可取消全部选择。'})
    get isMultipleToggle () {
        return this._isMultipleToggle;
    }
    set isMultipleToggle (value) {
        this._isMultipleToggle = value;
    }
    /**勾选本项为复选否则为单选。单选必定选择一项。多选可取消全部选择。*/
    @property({serializable:true})
    private _isMultipleToggle:boolean = false;
    
    /**单选时是否可取消选择。*/
    @property({type:CCBoolean, visible:function (this:DataItemLayout){
        return this._hasToggle && !this._isMultipleToggle && this._templeteChildItem != null;
    }, group:"单多选属性", tooltip:'单选时是否可取消选择。'})
    get isSingleCancel () {
        return this._isSingleCancel;
    }
    set isSingleCancel (value) {
        this._isSingleCancel = value;
    }
    /**单选时是否可取消选择。*/
    @property({serializable:true})
    private _isSingleCancel:boolean = false;

    /**复选时,可选的最大数量。*/
    @property({type:CCFloat, min:1, visible:function (this:DataItemLayout){
        return this._hasToggle && this._isMultipleToggle && this._templeteChildItem != null;
    }, group:"单多选属性", tooltip:'复选时,可选的最大数量。'})
    get multipleMaxCount () {
        return this._multipleMaxCount;
    }
    set multipleMaxCount (value) {
        this._multipleMaxCount = value;
    }
    /**复选时,可选的最大数量。*/
    @property({serializable:true})
    private _multipleMaxCount:number = 1;
    
    /**是否自动滚动到当前选中的项?*/
    @property({type:CCBoolean, visible:function (this:DataItemLayout){
        return this._hasToggle && this._scrollView != null && this._templeteChildItem != null;
    }, group:"单多选属性", tooltip:'是否自动滚动到当前选中的项?'}) 
    get needScrollToSelect () {
        return this._needScrollToSelect;
    }
    set needScrollToSelect (value) { 
        this._needScrollToSelect = value;
    }
    /**是否自动滚动到当前选中的项?*/
    @property({serializable:true})
    private _needScrollToSelect:boolean = false;
    
    /**自动滚动到当前的时间。*/
    @property({type:CCFloat, visible:function (this:DataItemLayout){
        return this._hasToggle && this._scrollView != null && this._needScrollToSelect && this._templeteChildItem != null;
    }, group:"单多选属性", tooltip:'自动滚动到当前的时间。'})
    get autoScrollTime () {
        return this._autoScrollTime;
    }
    set autoScrollTime (value) {
        this._autoScrollTime = value;
    }
    /**自动滚动到当前的时间。*/
    @property({serializable:true})
    private _autoScrollTime:number = 0.1;
    
    /**数据集 */
    private _datas: Array<any> = null;
    /**数据集 */
    public get datas(): Array<any> { return this._datas; }
    /**当次layout的公用数据 */
    private _comData:any = null;
    public get comData(): any { return this._comData; }

    /**获得数据长度, 如果有调用过 bindDatas 则真正计算数据长度，否则使用子节点的数量当做数据长度(保证编辑器情况下的显示正确) */
    public get dataLength(){ return this._datas ? this._datas.length : this.node.children.length; }
    /**数据所在的位置 */
    private _dataRects:Array<DataItemRect> = [];
    /**展开的项数据 key:数据索引 value:当前数据的展开尺寸*/
    private _expandDataIdxs:Map<number, number> = new Map();

    /**回调绑定函数 */
    private _childBindCbs:{tf:Function, ef:Function} = null;
    
    /**最大显示的行数 */
    private _maxShowRow :number= 0;
    public get maxShowRow() :number{return this._maxShowRow;}
    /**最大显示的列数 */
    private _maxShowCol :number= 0;
    public get maxShowCol() :number{return this._maxShowCol;}

    /**行的起始索引 */
    private _beginRow:number = 0;
    /**列的起始索引 */
    private _beginCol:number = 0;

    /**列的最大数量 */
    /**行的最大数量 */
    private _maxCol:number = 1;
    public get maxCol() { return this._maxCol; }
    private _maxRow:number = 1;
    public get maxRow() { return this._maxRow; }

    /**查询行列 */
    private searchRC:SearchRowCol = new SearchRowCol();
    
    /**布局是否需要更新 */
    private _layoutDirty:boolean = true;
    private _doLayoutDirty(){ this._layoutDirty = true; }
    /**子项大小是否需要更新 */
    private _cellSizeDitry:boolean = true;
    private _doCellSizeDitry(){ this._cellSizeDitry = true; }
    /**是否需要强制检测索引 */
    private _beginIdxForceCheck:boolean = true;
    /**起始索引是否需要更新 */
    private _beginIdxDirty:boolean = true;
    private _doBeginIdxDirty(){ this._beginIdxDirty = true; }
    /**行列数是否需要更新 */
    private _rowColInfosDitry:boolean = true;
    private _doRowColInfosDitry(){ this._rowColInfosDitry = true;}
    /**数据是否需要更新 */
    private _datasDirty:boolean = false;
    private _doDatasDirty(){ this._datasDirty = true; }
    /**是否能够滚动了 */
    private _canScroll:boolean = true;
    /**滚动是否需要更新 */
    private _autoScrollDirty:number = null;
    /**自动滚动的时间 */
    private _autoScrollTimeDirty:number = 0;
    /**自动滚动的回调 */
    private _autoScrollCb:Function = null;
    private _autoScrollCbTarget:any = null;
    /**是否需要对齐到滚动视图 */
    private _needAlignmentToSV:boolean = false;

    
    protected start(){
        //对齐 //因为 scroll view 的start 函数也会强制触发一次它内部的对齐事件
        if(this._scrollView){
            this._needAlignmentToSV = true
        }
    }
    
    protected onEnable () {
        director.on(Director.EVENT_AFTER_UPDATE, this.updateLayout, this);
        this.node.on(NodeEventType.TRANSFORM_CHANGED, this._doBeginIdxDirty, this)
        this.node.on(NodeEventType.SIZE_CHANGED, this._doEditorChangeDirty, this);
        this.node.on(NodeEventType.ANCHOR_CHANGED, this._doEditorChangeDirty, this);
        this.node.on(NodeEventType.CHILD_ADDED, this._doEditorChangeDirty, this);
        this.node.on(NodeEventType.CHILD_REMOVED, this._doEditorChangeDirty, this);
        this._templeteChildItem?.on(NodeEventType.SIZE_CHANGED, this._doEditorChangeDirty, this);
        this._templeteChildItem?.on(NodeEventType.ANCHOR_CHANGED, this._doEditorChangeDirty, this);
        this._scrollView?.node.on(Node.EventType.SIZE_CHANGED, this._doRowColInfosDitry, this);
        this._scrollView?.node.on(ScrollView.EventType.SCROLL_ENDED, this._scrollEnd, this);

        //对齐
        if(this._scrollView){
            this._needAlignmentToSV = true
        }
    }

    protected onDisable () {
        director.off(Director.EVENT_AFTER_UPDATE, this.updateLayout, this);
        this.node.off(NodeEventType.TRANSFORM_CHANGED, this._doBeginIdxDirty, this)
        this.node.off(NodeEventType.SIZE_CHANGED, this._doEditorChangeDirty, this);
        this.node.off(NodeEventType.ANCHOR_CHANGED, this._doEditorChangeDirty, this);
        this.node.off(NodeEventType.CHILD_ADDED, this._doEditorChangeDirty, this);
        this.node.off(NodeEventType.CHILD_REMOVED, this._doEditorChangeDirty, this);
        this._templeteChildItem?.off(NodeEventType.SIZE_CHANGED, this._doEditorChangeDirty, this);
        this._templeteChildItem?.off(NodeEventType.ANCHOR_CHANGED, this._doEditorChangeDirty, this);
        this._scrollView?.node.off(Node.EventType.SIZE_CHANGED, this._doRowColInfosDitry, this);
        this._scrollView?.node.off(ScrollView.EventType.SCROLL_ENDED, this._scrollEnd, this);
    }

    private _doEditorChangeDirty(){
        if(!this._datas){
            this._doCellSizeDitry();
        }
    }
    
    /**重新计算子项的大小 */
    private _doCellSize() {
        if(this._resizeMode == DataItemResizeMode.CHILDREN){
            const lyTrans = this.node._uiProps.uiTransformComp;
            const c = Math.max(1, this._maxCol);
            const r = Math.max(1, this._maxRow);
            this._cellSize.width = (lyTrans.width - this.paddingH - this._spacingX * (c - 1)) / c;
            this._cellSize.height = (lyTrans.height - this.paddingV - this._spacingY * (r - 1)) / r;
        }else{
            if(this._templeteChildItem){
                const clTrans = this._templeteChildItem._uiProps.uiTransformComp;
                const scale = this._templeteChildItem.scale;
                this._cellSize.set(Math.max(1, clTrans.width * Math.abs(scale.x)), Math.max(1, clTrans.height * Math.abs(scale.y)));
            }
        }
    }

    /**重新计算子项的位置 和 布局大小 */
    private _doCellsRectAndLayoutSize(){
        if(!this._needLayout){ //不需要布局的情况下
            for (let i = 0; i < this.node.children.length; i++) {
                const n = this.node.children[i]
                const rc = this._getDataIdxRect(i)
                rc.pos.set(n.position.x, n.position.y)
                rc.size.set(n._uiProps.uiTransformComp.width, n._uiProps.uiTransformComp.height)
            }
            return
        }

        const lyAp = this.node._uiProps.uiTransformComp.anchorPoint;
        const clAp = this._templeteChildItem._uiProps.uiTransformComp.anchorPoint;
        _countRect.beginRect(this._leftToRight, this._topToBottom, this._paddingLeft, this._paddingRight, this._paddingTop, this._paddingBottom, this._spacingX, this._spacingY);
        this.searchRC.clearRc();
        if(this._startAxis == DataItemAxisDirection.HORIZONTAL){
            for (let r = 0; r < this._maxRow; r++) {
                for (let c = 0; c < this._maxCol; c++) {
                    const idx = this._getDataIdx(r, c);
                    if(idx == -1) continue;
                    _countRect.countItemRect(this._getExpandWidth(idx), this._cellSize.height, this._getDataIdxRect(idx));
                    _countRect.addWidth(this._getExpandWidth(idx), c, this.searchRC);
                }
                _countRect.addHeight(this._cellSize.height, r, this.searchRC);
                _countRect.clearWidht();
            }
        }else{
            for (let c = 0; c < this._maxCol; c++) {
                for (let r = 0; r < this._maxRow; r++) {
                    const idx = this._getDataIdx(r, c);
                    if(idx == -1) continue;
                    _countRect.countItemRect(this._cellSize.width, this._getExpandHeight(idx), this._getDataIdxRect(idx));
                    _countRect.addHeight(this._getExpandHeight(idx), r, this.searchRC);
                }
                _countRect.addWidth(this._cellSize.width, c, this.searchRC);
                _countRect.clearHeight();
            }
        }
        _countRect.endRect();

        //重置尺寸
        let offsetX:number = 0;
        let offsetY:number = 0;
        const lyTrans = this.node._uiProps.uiTransformComp;
        if(this._resizeMode == DataItemResizeMode.CONTAINER){
            lyTrans.width = _countRect.maxSize.x;
            lyTrans.height = _countRect.maxSize.y;
            if(this._scrollView){ //如果是滚动视图且不是GRID排列，则自动居中
                if(this._type == DataItemType.HORIZONTAL){
                    lyTrans.height = this._scrollView.node._uiProps.uiTransformComp.height;
                    offsetY = -(lyTrans.height - _countRect.maxSize.y) * (lyTrans.anchorY - 0.5); //垂直居中
                }else if(this._type == DataItemType.VERTICAL){
                    lyTrans.width = this._scrollView.node._uiProps.uiTransformComp.width;
                    offsetX = -(lyTrans.width - _countRect.maxSize.x) * (lyTrans.anchorX - 0.5); //水平居中
                }
            }
        }

        //计算所有真实的显示位置
        for (let idx = 0; idx < this._dataRects.length; idx++) {
            _countRect.countItemPosition(lyAp, this._dataRects[idx], clAp, offsetX, offsetY);
        }
        
        //设置行列检测参数
        this.searchRC.setCheckParam(this);
    }

    //对齐滚动视图
    private _alignmentToSV(){
        const lyTrans = this.node._uiProps.uiTransformComp;
        if(this._scrollView){
            let wx = this.node.position.x;
            let wy = this.node.position.y;            
            const ptTrans = this.node.parent._uiProps.uiTransformComp;
            let isTrans = false;
            
            //x位置需要对齐
            if(ptTrans.width > lyTrans.width || !this._scrollView.horizontal){
                let tw = ptTrans.width * Math.abs(this.node.parent.scale.x);
                let sw = lyTrans.width * Math.abs(this.node.scale.x);
                
                if(this._alignmentType == DataItemAlignmentType.TOP_LEFT || this._alignmentType == DataItemAlignmentType.CENTER_LEFT || this._alignmentType == DataItemAlignmentType.BOTTOM_LEFT){
                    wx = -tw * ptTrans.anchorX
                    wx += sw * lyTrans.anchorX
                }else if(this._alignmentType == DataItemAlignmentType.TOP_CENTER || this._alignmentType == DataItemAlignmentType.BOTTOM_CENTER || this._alignmentType == DataItemAlignmentType.CENTER){
                    wx = tw * (ptTrans.anchorX - 0.5)
                    wx += sw * (lyTrans.anchorX - 0.5)
                }else{
                    wx = tw * (1 - ptTrans.anchorX)
                    wx -= sw * (1 - lyTrans.anchorX)
                }

                isTrans = true;
            }
            //y位置需要对齐
            if(ptTrans.height > lyTrans.height || !this._scrollView.vertical){
                let th = ptTrans.height * Math.abs(this.node.parent.scale.y);
                let sh = lyTrans.height * Math.abs(this.node.scale.y);
                
                if(this._alignmentType == DataItemAlignmentType.TOP_LEFT || this._alignmentType == DataItemAlignmentType.TOP_CENTER || this._alignmentType == DataItemAlignmentType.TOP_RIGHT){
                    wy = th * (1 - ptTrans.anchorY)
                    wy -= sh * (1 - lyTrans.anchorY)
                }else if(this._alignmentType == DataItemAlignmentType.CENTER_LEFT || this._alignmentType == DataItemAlignmentType.CENTER || this._alignmentType == DataItemAlignmentType.CENTER_RIGHT){
                    wy = - th * (ptTrans.anchorY - 0.5) //取中心位置
                    wy += sh * (lyTrans.anchorY - 0.5)
                }else{
                    wy = - th * ptTrans.anchorY
                    wy += sh * lyTrans.anchorY
                }
                
                isTrans = true;
            }
            
            if(isTrans){
                _tempVec3.set(wx,  wy, 0);
                this.node.setPosition(_tempVec3);
            }
        }

        this._needAlignmentToSV = false;
    }

    /**重新计算行列数量 */
    private _doRowColMaxCount(){
        const dataLength = this.dataLength;
        if(this._constraint == DataItemConstraint.FIXED_ROW){
            this._maxRow = Math.min(dataLength, this._constraintNum);
            this._maxCol = this._maxRow == 0 ? 0 : Math.ceil(dataLength / this._maxRow);
        }else{
            this._maxCol = Math.min(dataLength, this._constraintNum);
            this._maxRow =  this._maxCol == 0 ? 0 : Math.ceil(dataLength / this._maxCol);
        }
    }

    /**重新计算最大的显示数量 */
    private _doRowColShowMaxCountAndCreateItems(){
        //根据视窗计算出需要创建的最大数量，显示的最大数量，并重置Layout的尺寸
        if(this._scrollView && this._datas){
            const svTrans = this._scrollView?.node._uiProps.uiTransformComp;
            const width = svTrans.width;
            const height = svTrans.height;
            this._maxShowRow = Math.min(this._maxRow, Math.ceil(height / (this._cellSize.height + this._spacingY)) + 2); //本来是+1,但是遇到有显示相交的项时会有问题,额外+1处理这类问题,并在计算起始索引时 - 1
            this._maxShowCol = Math.min(this._maxCol, Math.ceil(width / (this._cellSize.width + this._spacingX)) + 2);
        }else{
            this._maxShowRow = this._maxRow;
            this._maxShowCol = this._maxCol;
        }

        if(!this._childBindCbs){
            this._childBindCbs = {tf:this._hasToggle ? this._onToggleChange.bind(this) : null, ef:this._onExpandChange.bind(this)};
            //所有初始化子项全部绑定一次
            for (const n of this.node.children) {
                n.active = true;
                n.emit(SET_BIND_FUNC_EVT, this._childBindCbs.tf, this._childBindCbs.ef);
            }
        }
        
        const needCreateCount = Math.min(this.dataLength, this._maxShowCol * this._maxShowRow) - this.node.children.length;
        if(needCreateCount > 0){ //只需要创建不足的,多的自动隐藏放置,在下次数据变多时则不需要创建了
            //在这里创建子项
            if(this._templeteChildItem){
                this._templeteChildItem.active = true;
                for (let i = 0; i < needCreateCount; i++) {
                    const n = instantiate(this._templeteChildItem);
                    n.parent = this.node;
                    n.emit(SET_BIND_FUNC_EVT, this._childBindCbs.tf, this._childBindCbs.ef);
                }
            }
        }
    }

    /**重新计算起始索引 */
    private _doBeginIdx(){
        if(this._scrollView && this._datas){
            let [cellIdxRow, cellIdxCol] = this.searchRC.getBeginRowCol(this.node.position, this._beginRow, this._beginCol, this._beginIdxForceCheck);
            //如果起始索引变更了,则需要重新布局
            if (this._beginRow != cellIdxRow || this._beginCol != cellIdxCol || this._beginIdxForceCheck) {
                this._beginRow = cellIdxRow;
                this._beginCol = cellIdxCol;
                this._beginIdxForceCheck = false;
                this._doLayoutDirty();
            }
        }else{
            this._beginRow = 0;
            this._beginCol = 0;
        }
    }

    /**重置布局 */
    private _doLayout(){
        const children = this.node.children;
        //当数据项小于显示项时,清理所有的索引绑定
        if(this.dataLength < this.node.children.length){
            for (const n of this.node.children) {
                n.emit(SET_IDX_EVT, null, null);
            }
        }

        for (let r = this._beginRow; r < this._beginRow + this._maxShowRow; r++) {
            for (let c = this._beginCol; c < this._beginCol + this._maxShowCol; c++) {
                const idx = this._getDataIdx(r, c);
                if(idx == -1) continue;
                let rect = this._getDataIdxRect(idx);
                let child = children[this._getShowIdx(r, c)];
                _tempVec3.set(rect.pos.x, rect.pos.y);
                child.setPosition(_tempVec3);
                child.emit(SET_IDX_EVT, idx, this._hasToggle ? this._curSelectIdxSet : null); //设置项索引
            }
        }
    }
    
    //获得数据RC
    private _getDataRC(idx:number){
        return [this._startAxis == DataItemAxisDirection.HORIZONTAL ? Math.floor(idx / this._maxCol) : idx % this._maxRow, 
        this._startAxis == DataItemAxisDirection.HORIZONTAL ? idx % this._maxCol : Math.floor(idx / this._maxRow)];
    }
    
    /**通过索引获得一个显示对象 */
    private _getIndexItem(idx:number){
        let [r, c] = this._getDataRC(idx)
        //判定行列是否在显示范围,如果不在则直接找不到
        if(r < this._beginRow || r >= this._beginRow + this._maxShowRow || c < this._beginCol || c >= this._beginCol + this._maxShowCol){
            return null;
        }
        return this.node.children[this._getShowIdx(r, c)]
    }
    
    //获得数据索引
    private _getDataIdx(r:number, c:number){
        const idx = this._startAxis == DataItemAxisDirection.HORIZONTAL ? r * this._maxCol + c : c * this._maxRow + r;
        return idx >= this.dataLength ? -1 : idx;
    }
    
    //获得数据索引应该在的位置
    private _getDataIdxRect(idx:number){
        let dr = this._dataRects[idx];
        if(!dr){ dr = new DataItemRect(); this._dataRects.push(dr); }
        return dr;
    }
    
    //获得显示索引
    private _getShowIdx(r:number, c:number){
        r = r % this._maxShowRow;
        c = c % this._maxShowCol;
        if(this._startAxis == DataItemAxisDirection.HORIZONTAL){
            return r * this._maxShowCol + c;
        }else{
            return c * this._maxShowRow + r;
        }
    }
    
    /**重设所有数据 */
    private _doResetItemData(){
        for (const n of this.node.children) {
            n.emit(SET_DATAS_EVT, this._datas, this._comData, this._hasToggle ? this._curSelectIdxSet : null); //设置数据
        }
        this.emitToggleEvent();
    }
    
    /**刷新所有项的数据 */
    refAllItem(){
        this._doResetItemData();
        return this;
    }
    
    /**刷新指定索引的数据 */
    refIdxItem(idx:number){
        this._getIndexItem(idx)?.emit(SET_REF_DATA_EVT, this._hasToggle ? this._curSelectIdxSet : null); //刷新数据
        this.emitToggleEvent();
        return this;
    }
    
    /**
     * 立即执行更新布局。
     * @param force 是否强制更新。
     */
    updateLayout (force = false) {
        if(!this._templeteChildItem){
            return this;
        }

        this._canScroll = true;

        if(this._cellSizeDitry){
            this._doCellSize();
            this._rowColInfosDitry = true;
            this._cellSizeDitry = false;
            this._canScroll = false;
        }

        if(this._rowColInfosDitry || force){
            this._doRowColMaxCount();
            this._doCellsRectAndLayoutSize();
            this._doRowColShowMaxCountAndCreateItems();
            this._beginIdxForceCheck = true;
            this._beginIdxDirty = true; 
            this._layoutDirty = true;
            this._needAlignmentToSV = true;
            this._rowColInfosDitry = false;
            this._canScroll = false;
        }

        if(this._beginIdxDirty || force){
            this._doBeginIdx();
            this._beginIdxDirty = false;
            this._canScroll = false;
        }

        if (this._layoutDirty || force) {
            this._doLayout();
            this._layoutDirty = false;
            this._canScroll = false;
        }

        if(this._datasDirty || force){
            this._doResetItemData();
            this._datasDirty = false;
            this._canScroll = false;
        }

        if(this._needAlignmentToSV){
            this._alignmentToSV()
        }

        if(this._canScroll && this._autoScrollDirty != null){
            this._scrollToIdx(this._autoScrollDirty, this._autoScrollTimeDirty); //滚动到 idx 0 在选中之前调用,因为在选中时可能要滚动到选中项
            this._autoScrollTimeDirty = 0;
            this._autoScrollDirty = null;
        }

        return this;
    }



    //--------------------------------------------------------------------数据绑定
    /**
     * 当前layout的公用数据
     * @param comData 在多个layout复合使用时,最上层的layout的公用数据可能会发生变化，或者说并不希望将某些数据单独给到 datas 里面
     */
    bindComData(comData:any){
        this._comData = comData;
        this._doDatasDirty();
        return this;
    }

    /**
     * 绑定数据集合
     * @param datas 数据集合
     * 
     * 单选回调参数原型 onSingleToggle(data:any, idx:number)
     * 多选回调参数原型 onMultiToggle(datas:any[], idxs:Set<number>)
     * 
     */
    bindDatas<T>(datas:Iterable<T>){
        if(!this._templeteChildItem){
            throw new Error(`绑定数据时需要对 TempleteChildItem 赋值!`);
        }

        if(this._scrollView){
            this._scrollView.stopAutoScroll()
        }

        const oldCount = this._datas ? this._datas.length : 0;
        this._datas = datas ? Array.from(datas) : [];

        if(this._maxDataCountLimit > 0 && this._maxDataCountLimit < this._datas.length){
            this._datas = this._datas.slice(0, this._maxDataCountLimit);
        }

        this._doDatasDirty();
        if(oldCount != this._datas.length){
            this._doRowColInfosDitry();
        }
        return this;
    }
    
    /**
     * 滚动到对应的索引
     * @param idx 索引的最大值只能到数据的最大值
     * @param timeInSecond 滚动时间
     * @param callback 滚动完成回调
     * @param target 调用回调的目标
     * @returns 
     */
    scrollToIdx(idx:number, time:number = 0.3, callback:Function = null, target:any = null){ 
        this._autoScrollDirty = idx; 
        this._autoScrollTimeDirty = time; 
        this._autoScrollCb = callback;
        this._autoScrollCbTarget = target;
        return this;
    }

    private _scrollEnd(){
        if(this._autoScrollCb){
            this._autoScrollCb.apply(this._autoScrollCbTarget);
            this._autoScrollCb = null;
            this._autoScrollCbTarget = null;
        }
    }
    
    /**
     * 滚动到对应的索引
     * @param idx 索引的最大值只能到数据的最大值
     * @param timeInSecond 滚动时间
     * @returns 
     */
    private _scrollToIdx(idx:number, timeInSecond:number){
        if(!this._datas || !this._scrollView || this._datas.length == 0){
            return;
        }

        if(idx >= this._datas.length){
            idx = this._datas.length - 1;
        }

        let targetTrans = this._templeteChildItem._uiProps.uiTransformComp;
        let scrollTrans = this._scrollView.node._uiProps.uiTransformComp;
        let contentTrans = this.node._uiProps.uiTransformComp;

        //如果不需要滚动，则直接跳过
        if(scrollTrans.width >= contentTrans.width && scrollTrans.height >= contentTrans.height){
            return;
        }

        // 获取目标节点相对于ScrollView内容节点的坐标
        let posRect = this._getDataIdxRect(idx);
        _tempVec3.set(posRect.pos.x, posRect.pos.y);

        const posx = posRect.pos.x - posRect.size.x * (targetTrans.anchorX - 0.5);
        const posy = posRect.pos.y + posRect.size.y * (0.5 - targetTrans.anchorY );
        let x = posx + (contentTrans.width * contentTrans.anchorX) - (scrollTrans.width * 0.5);
        let y = (contentTrans.height * (1-contentTrans.anchorY)) - posy - (scrollTrans.height * 0.5);

        // 滚动到偏移量
        this._scrollView.scrollToOffset(new Vec2(x, y), timeInSecond);
    }

    //-------------------------------------------------展开处理
    private _ExpandChangeForceLayout:boolean = true
    public beforehandExpands<T>(datas:Iterable<T>){ //预先设置一次数据,让其对所有的展开项赋值, 需要对 comData 赋值后使用
        if(!datas){
            return
        }

        const ds = Array.from(datas)
        this._ExpandChangeForceLayout = false
        this._expandDataIdxs.clear();

        let idx = 0;
        for (const d of datas) {
            this._templeteChildItem.emit(SET_IDX_EVT, idx, null); //设置索引项
            this._templeteChildItem.emit(SET_DATAS_EVT, ds, this._comData, null); //设置数据
            idx++
        }

        this._doCellSizeDitry();
        this._ExpandChangeForceLayout = true;
        
        return this
    }

    private get canExpand(){
        return this._maxRow == 1 || this._maxCol == 1;
    }

    private _onExpandChange(idx:number, size:number = null, force:boolean = false) {
        if(!this.canExpand || !this._needLayout){
            return;
        }

        if((this._maxRow == 1 && size == this._cellSize.width) ||
           (this._maxCol == 1 && size == this._cellSize.height)){
            size = null
        }

        if(size == null){
            if(this._expandDataIdxs.delete(idx)){
                if(this._maxRow == 1){
                    this._expandMinWidth = Number.MAX_VALUE;
                }else if(this._maxCol == 1){
                    this._expandMinHeight = Number.MAX_VALUE;
                }
                for (const s of this._expandDataIdxs.values()) {
                    if(this._maxRow == 1){
                        this._expandMinWidth = Math.min(this._expandMinWidth, s);
                    }else if(this._maxCol == 1){
                        this._expandMinHeight = Math.min(this._expandMinHeight, s);
                    }
                }
                this._doRowColInfosDitry();
                if(force && this._ExpandChangeForceLayout){ this.updateLayout(); }
            }
        }else{
            let os = this._expandDataIdxs.get(idx);
            if(size != os){
                this._expandDataIdxs.set(idx, size);
                if(this._maxRow == 1){
                    this._expandMinWidth = Math.min(this._expandMinWidth, size);
                }else if(this._maxCol == 1){
                    this._expandMinHeight = Math.min(this._expandMinHeight, size);
                }
                this._doRowColInfosDitry();
                if(force && this._ExpandChangeForceLayout){ this.updateLayout(); }
            }
        }
    }
    //-------------------------------------------------选择处理
    /**需要刷新的选择项 */
    private _needRefSelectIdxs:number[] = [];
    /**当前的选中项 */
    private _curSelectIdxSet:Set<number> = new Set();
    /**获得当前的选择项索引集合(适用多选时使用) */
    public get selectIdxSet(){ return this._curSelectIdxSet; }
    /**返回选择的第一项索引(适用单选时使用) */
    public get selectIdx(){for (const idx of this._curSelectIdxSet) { return idx; } }
    /**获得当前的选择项数据集合(适用多选时使用) */
    public get selectDatas(){
        if(!this._datas){
            return [];
        }

        let ds = [];
        for (const idx of this._curSelectIdxSet) {
            ds.push(this._datas[idx]);
        }
        return ds;
    }
    /**返回选择的第一项数据(适用单选时使用) */
    public get selectData(){
        if(!this._datas){
            return [];
        }

        for (const idx of this._curSelectIdxSet) {
            return this._datas[idx];
        }
    }

    private _onToggleChange(idx:number){
        this._needRefSelectIdxs.splice(0, this._needRefSelectIdxs.length);

        if(!this._isMultipleToggle){ //单选时
            if(!this._curSelectIdxSet.has(idx)){//如果点击自己则不需要更新选择项
                //增加需要刷新的项
                for (const oldIdx of this._curSelectIdxSet) {
                    this._needRefSelectIdxs.push(oldIdx);
                }
                this._needRefSelectIdxs.push(idx);

                //更新当前的选择项
                this._curSelectIdxSet.clear();
                this._curSelectIdxSet.add(idx);
            }else{
                if(this._isSingleCancel){
                    this.selectIdxSet.delete(idx);
                }
                this._needRefSelectIdxs.push(idx);
            }
        }else{//多选时
            if(this._curSelectIdxSet.has(idx)){ //如果已经选择过，则是取消选择
                this._curSelectIdxSet.delete(idx);
                this._needRefSelectIdxs.push(idx);
            }else{ //否则是增加选择
                if(this._curSelectIdxSet.size == this._multipleMaxCount){ // 如果已经达到最大选择数量则直接退出
                    return;
                }
                
                this._needRefSelectIdxs.push(idx);
                this._curSelectIdxSet.add(idx);
            }
        }

        for (const idx of this._needRefSelectIdxs) {
            this._getIndexItem(idx)?.emit(SET_REF_TOGGLE_TYPE_EVT, this._curSelectIdxSet);
        }

        this.emitToggleEvent();

        if(this._needScrollToSelect && this._curSelectIdxSet.has(idx)){
            this.scrollToIdx(idx, this._autoScrollTime);
        }
    }

    private emitToggleEvent(){
        if(this._hasToggle && this._datas && this._datas.length > 0){
            if(this._isMultipleToggle){ //抛出复选事件
                EventHandler.emitEvents(this._toggleCallBack, this.selectDatas, this.selectIdxSet);
            }else{ //抛出单选事件
                if(this._curSelectIdxSet.size > 0){
                    EventHandler.emitEvents(this._toggleCallBack, this.selectData, this.selectIdx);
                }
            }
        }
    }
    
    /**
     * 手动选择项
     * @param selectIdxs 如果参数为null或者为空数组，则取消所有选中
     * @param needEmitEvent 是否需要发送选中事件
     */
    selectItems(selectIdxs:number[] = null){
        // if(this._hasToggle){

        //     if(!selectIdxs){
        //         selectIdxs = Array.from(this._curSelectIdxSet);
        //     }
            
        //     if(!this._isMultipleToggle && selectIdxs.length > 1){
        //         console.error(`单选时,选择项数不能超过1项。`);
        //         selectIdxs.splice(1, selectIdxs.length - 1);
        //     }

        //     //清理原来的选择项目
        //     for (const idx of this._curSelectIdxSet) {
        //         this._getIndexItem(idx)?.emit(SET_REF_TOGGLE_TYPE_EVT);
        //     }
        //     this._curSelectIdxSet.clear();

        //     for (let i = 0; i < selectIdxs.length; i++) {
        //         this._onToggleChange(selectIdxs[i], needEmitEvent && i == selectIdxs.length - 1);
        //     }
        // }
        
        if(this._hasToggle){ //初始化设置选中项
            if(selectIdxs && selectIdxs.length > 0){
                this._curSelectIdxSet = new Set(selectIdxs);
                if(this._needScrollToSelect && selectIdxs.length > 0){
                    this.scrollToIdx(selectIdxs[selectIdxs.length - 1]);
                }
            }else{
                this._curSelectIdxSet.clear();
            }
        }

        this._doDatasDirty();
        return this;
    }
}


