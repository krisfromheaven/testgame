window.addEventListener('load', function () {
  var game = new Phaser.Game({
    width: window.innerWidth,
    height: window.innerHeight,
    type: Phaser.AUTO,
    backgroundColor: '#cb6556',
    physics: {default: 'arcade'},
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
    },
  })

  game.scene.add('Boot', Boot, true)
})

class Boot extends Phaser.Scene {
  preload() {
    this.load.pack('pack', 'assets/asset-pack.json')
  }

  create() {
    this.scene.start('Level')
  }
}
