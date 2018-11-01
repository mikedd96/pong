import { SVG_NS } from '../settings';

export default class Board {
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    render(svg){
        let rect = document.createElementNS(SVG_NS, 'rect');
        rect.setAttributeNS(null, 'fill', '#353535');
        rect.setAttributeNS(null, 'width', this.width);
        rect.setAttributeNS(null, 'height', this.height);

        let line = document.createElementNS(SVG_NS, 'line')
        line.setAttributeNS(null, 'x1', (this.width / 2));
        line.setAttributeNS(null, 'y1', 0);
        line.setAttributeNS(null, 'x2', this.width / 2);
        line.setAttributeNS(null, 'y2', this.height);
        line.setAttributeNS(null, 'stroke', '#c20625');
        line.setAttributeNS(null, 'stroke-dasharray', '10');
        line.setAttributeNS(null, 'stroke-width', '2');

        let circle = document.createElementNS(SVG_NS, 'circle');
        circle.setAttributeNS(null, 'cx', '256')
        circle.setAttributeNS(null, 'cy', '128')
        circle.setAttributeNS(null, 'r', '8')
        circle.setAttributeNS(null, 'fill', '#025ed4')

        svg.appendChild(rect);
        svg.appendChild(line);
    }
}