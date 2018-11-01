import { SVG_NS } from '../settings'

export default class Paddle {
    constructor(boardHeight, width, height, x, y, up, down) {
      this.boardHeight = boardHeight;
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
      this.speed = 10;
      this.score = 0;

      document.addEventListener("keydown", event => {
              switch (event.key) {
        case up:
          this.up();
          break;
        case down:
          this.down();
          break;
      }
      });
    } // end of constructor

    up(){
this.y = Math.max(this.y, 0);
this.y = this.y - this.speed;
    }
    
    down(){
this.y = Math.min(this.y, 256 - this.height);
this.y = this.y + this.speed;
    }
    
    //...

    render(svg){
        let paddle = document.createElementNS(SVG_NS, 'rect');
        paddle.setAttributeNS(null, 'x', this.x);
        paddle.setAttributeNS(null, 'y', this.y);
        paddle.setAttributeNS(null, 'width', this.width);
        paddle.setAttributeNS(null, 'height', this.height);
        paddle.setAttributeNS(null, 'fill', '#1dfa05');
        

        svg.appendChild(paddle);
  }
}