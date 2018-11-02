import { SVG_NS } from '../settings'

export default class Paddle {
    constructor(boardHeight, width, height, x, y, up, down, player) {
      this.boardHeight = boardHeight;
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
      this.speed = 10;
      this.score = 0;

      this.keyUp = up;
      this.keyDown = down;
      this.player = player;
      this.keyState = {};

      document.addEventListener('keydown',  event => {
        this.keyState[event.key || event.which] = true;
      }, true);

      document.addEventListener('keyup',  event => {
        this.keyState[event.key || event.which] = false;
      }, true);

      // document.addEventListener("keydown", event => {
      //         switch (event.key) {
      //   case up:
      //     this.up();
      //     break;
      //   case down:
      //     this.down();
      //     break;
      // }
      // });
    } // end of constructor

    up(){
      console.log('up');
this.y = Math.max(this.y, 0);
this.y = this.y - this.speed;
    }
    
    down(){
      console.log('down')
this.y = Math.min(this.y, 256 - this.height);
this.y = this.y + this.speed;
    }

    coordinates(x, y, width, height) {
      let leftX = x;
      let rightX = x + width;
      let topY = y;
      let bottomY = y + height;
      return [leftX, rightX, topY, bottomY];
    }
    //...

    render(svg){

      if(this.keyState[this.keyUp] && this.player === 'player1'){
        this.up();
      }

        if(this.keyState[this.keyDown] && this.player === 'player1'){
        this.down();
      }

        if(this.keyState[this.keyUp] && this.player === 'player2'){
        this.up();
      }

        if(this.keyState[this.keyDown] && this.player === 'player2'){
        this.down();
      }

        let paddle = document.createElementNS(SVG_NS, 'rect');
        paddle.setAttributeNS(null, 'x', this.x);
        paddle.setAttributeNS(null, 'y', this.y);
        paddle.setAttributeNS(null, 'width', this.width);
        paddle.setAttributeNS(null, 'height', this.height);
        paddle.setAttributeNS(null, 'fill', '#1dfa05');
        

        svg.appendChild(paddle);
  }
}