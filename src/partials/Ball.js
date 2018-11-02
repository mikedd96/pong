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
    render(svg){

        this.x += this.vx;
        this.y += this.vy;

        this.wallCollison();

            //draw ball
        let ball = document.createElementNS(SVG_NS, 'circle');
        ball.setAttributeNS(null, 'cx', this.x);
        ball.setAttributeNS(null, 'cy', this.y);
        ball.setAttributeNS(null, 'r', this.radius);
        ball.setAttributeNS(null, 'fill', '#025ed4');

        svg.appendChild(ball);
    }
  }