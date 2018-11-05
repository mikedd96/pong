import { SVG_NS, KEYS } from '../settings';
import Board from './Board';
import Paddle from './Paddle';
import Ball from './Ball';
import Score from './Score';
import Winner from './Winner';


export default class Game {

	constructor(element, width, height) {
		this.element = element;
		this.width = width;
		this.height = height;
	

		this.paddleWidth = 6;
		this.paddleHeight = 56;
		this.paddleGap = 10;

		this.boardWidth = 512;
		this.boardHeight = 256;
		this.radius = 8;
		this.direction = 1;

		
		
		document.addEventListener('keydown', event => {
			switch (event.key) {
	case KEYS.spaceBar:
		this.pause = !this.pause;
		break;
			}});

		this.ball = new Ball(
			this.radius,
			this.boardWidth,
			this.boardHeight,
			this.direction,
			
			
		);


		this.player1 = new Paddle(
			this.height,
			this.paddleWidth,
			this.paddleHeight,
			this.paddleGap,
			((this.height - this.paddleHeight) / 2),
			KEYS.a,
			KEYS.z,
			'player1',
		);
		
		this.player2 = new Paddle(
			this.height,
			this.paddleWidth,
			this.paddleHeight,
			this.width - this.paddleGap - this.paddleWidth,
			((this.height - this.paddleHeight) / 2),
			KEYS.up,
			KEYS.down,
			'player2',
		);
			
		
		this.score1 = new Score(this.width / 2 - 50, 30, 30);
		this.score2 = new Score(this.width / 2 + 50, 30, 30);

	
		// Other code goes here...
		this.gameElement = document.getElementById(this.element);
		this.board = new Board(this.width, this.height);

		this.winner1 = new Winner(this.width / 2 - 256, this.height / 2, 25);
		this.winner2 = new Winner(this.width / 2, this.height / 2, 25); 
		
	} // end of constructor

	winningText(player1, player2, svg) {
		if (player1.score >= 10) {
			
				this.pause = !this.pause;
				
			this.winner1.render(svg, 'left paddle Win');
			
			
		} 	else if (player2.score >= 10) {
				this.pause = !this.pause;
				
			this.winner2.render(svg, 'right paddle Win');
			
		}
	}

	render() {

		if(this.pause){
			return;
		}
		// More code goes here...
		this.gameElement.innerHTML = '';
		let svg = document.createElementNS(SVG_NS, 'svg');
		svg.setAttributeNS(null, 'width', this.width);
		svg.setAttributeNS(null, 'height', this.height);
		svg.setAttributeNS(null, 'viewBox', `0 0 ${this.width} ${this.height}`);
		this.gameElement.appendChild(svg);

		this.board.render(svg);
		this.player1.render(svg);
		this.player2.render(svg);
		this.ball.render(svg, this.player1, this.player2);

		this.score1.render(svg, this.player1.score);
		this.score2.render(svg, this.player2.score);
		this.winningText(this.player1, this.player2, svg);
		
		
	}

}