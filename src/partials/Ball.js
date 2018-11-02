import { SVG_NS } from '../settings'
import { timingSafeEqual } from 'crypto';
export default class Ball {
    constructor(radius, boardWidth, boardHeight) {
      this.radius = radius;
      this.boardWidth = boardWidth;
      this.boardHeight = boardHeight;
      this.direction = 1;
      this.reset()
      
    }

    reset() {
        // this.ax = 1;
        // this.ay = 1;

        this.x = this.boardWidth / 2;
        this.y = this.boardHeight / 2;
       
        this.vy = 0;
        while( this.vy === 0){
            this.vy = Math.floor(Math.random() * 10 - 5);
        }
        this.vx = this.direction * (6 - Math.abs(this.vy))
        
      }

        wallCollison(){
            const hitLeft = this.x - this.radius <= 0;
            const hitRight = this.x + this.radius >= this.boardWidth;
            const hitTop = this.y - this.radius <= 0;
            const hitBottom = this.y + this.radius >= this.boardHeight;
            if (hitRight){
                this.vx *= -1; 
            } else if (hitLeft) {
                this.vx *= -1;
            } else if (hitTop) {
                this.vy *= -1;
            } else if (hitBottom) {
                this.vy *= -1;
            }
                
            
        }
        paddleCollision(player1, player2) {
        if (this.vx > 0) {
            let paddle = player2.coordinates(player2.x, player2.y, player2.width, player2.height);
            let [leftX, rightX, topY, bottomY] = paddle;

            if(
                (this.x + this.radius >= leftX) && 
                (this.x + this.radius <= rightX) &&
                (this.y >= topY && this.y <= bottomY)
            ){
            this.vx *= -1;

            }
        //   } else { 
        //     let paddle = player1.coordinates(player1.x, player1.y, player1.width, player1.height);
        //     let [leftX, rightX, topY, bottomY] = paddle;

        //     if(
        //         (this.x + this.radius >= rightX) &&
        //         (this.x + this.radius <=leftX) &&
        //         (this.y >= topY && this.y <=bottomY)
        //     ){
        //         this.vx *= -1;
        //     }
          }
        }
    render(svg, player1, player2){

        // this.vx += this.ax;
        // this.vy += this.ay;

        this.x += this.vx;
        this.y += this.vy;

        this.wallCollison();
        this.paddleCollision(player1, player2)

            //draw ball
        let ball = document.createElementNS(SVG_NS, 'circle');
        ball.setAttributeNS(null, 'cx', this.x);
        ball.setAttributeNS(null, 'cy', this.y);
        ball.setAttributeNS(null, 'r', this.radius);
        ball.setAttributeNS(null, 'fill', '#025ed4');

        svg.appendChild(ball);
    }
  }