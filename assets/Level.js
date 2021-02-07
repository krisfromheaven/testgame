
// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {
	
	constructor() {
		super("Level");
		
		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}
	
	_create() {
		
		// dino
		const dino = this.add.image(398, 234, "dino");
		dino.setOrigin(0.508, 0.504);
		this.dino = dino
		
		// coint
		const coint = this.add.image(349, 386, "coint");
		coint.scaleX = 0.1;
		coint.scaleY = 0.1;
		coint.flipY = true;
		this.coint = coint
	}
	
	/* START-USER-CODE */
	create() {
		this._create()
		this.arrows = this.input.keyboard.createCursorKeys();
		this.physics.add.existing(this.dino);
		this.physics.add.existing(this.coint);
		this.physics.add.overlap(this.dino, this.coint,  this.collect, null, this);
		this.score();
	}
	collect() {
		this.coint.x = Phaser.Math.Between(0, window.innerWidth)
		this.coint.y = Phaser.Math.Between(0, window.innerHeight)

		this.score ++
		this.scoreText.setText('score: ' + this.score)

		this.tweens.add({
			targets: this.dino,
			duration: 200,
			scaleX: 1.2,
			scaleY: 1.2,
			yoyo: true
		})
	}
	score() {
		this.score = 0
		let  style = {font:'30px Roboto', fill:'#fff'}

		this.scoreText = this.add.text(20, 20, 'score: ' + this.score, style)
	}
	update() {
		if(this.arrows.up.isDown) {
			this.dino.y -= 3;
		} else if(this.arrows.down.isDown) {
			this.dino.y += 3;
		}
		if(this.arrows.right.isDown) {
			this.dino.x += 3;
		} else if(this.arrows.left.isDown) {
			this.dino.x -= 3;
		}
		
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
