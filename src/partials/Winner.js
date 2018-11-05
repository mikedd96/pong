import { SVG_NS } from '../settings';

export default class winner {

    constructor(x, y, size) {
   
      this.x = x;
   
      this.y = y;
   
      this.size = size;
   
    }  // Appends winner message  
    render(svg, winner) {
   
      let text = document.createElementNS(SVG_NS, 'text');
   
      text.setAttributeNS(null, 'x', this.x);
   
      text.setAttributeNS(null, 'y', this.y);
   
      text.setAttributeNS(null, 'fill', 'gold');
   
      text.setAttributeNS(null, 'font-family', 'Silkscreen Web');
   
      text.setAttributeNS(null, 'font-size', this.size);
   
      text.textContent = winner;
   
      svg.appendChild(text);
   
    }
   
   }