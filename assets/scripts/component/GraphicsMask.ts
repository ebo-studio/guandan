import { _decorator, CCInteger, Component, Graphics, Mask, Node, UITransform } from 'cc';
const { ccclass, property,executeInEditMode } = _decorator;

@ccclass('GraphicsMask')
@executeInEditMode(true)
export class GraphicsMask extends Component {
    //半径
    @property({ type: CCInteger })
    radius = 10;

    start() {
        this.drawArc();
    }

    drawArc() {
        setTimeout(() => {
            const mask = this.node.getComponent(Mask);
            mask.type = Mask.Type.GRAPHICS_STENCIL;
            const uiTransform = this.getComponent(UITransform);
            const { width, height, anchorX, anchorY } = uiTransform;
            const graphics = mask.subComp as Graphics;
            graphics.clear();
            const x = -width * anchorX;
            const y = -height * anchorY;
            graphics.roundRect(x, y, width, height, this.radius || 10);
            graphics.fill();
        }, 100);
    }
    
}

