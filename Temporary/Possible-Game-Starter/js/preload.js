var SundrinGame = SundrinGame || {};

//loading the game assets
SundrinGame.Preload = function(){};

SundrinGame.Preload.prototype = {
  preload: function() {
  	//show loading screen
  	this.splash = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'remember-me.jpg');
    this.splash.anchor.setTo(0.5);

    this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 128, 'progressBar');
    this.preloadBar.anchor.setTo(0.5);

    this.load.setPreloadSprite(this.progressBar);
	
	game.load.tilemap('map', 'assets/tilemaps/maps/features_test.json', null, Phaser.Tilemap.TILED_JSON);

    game.load.image('ground_1x1', 'assets/tilemaps/tiles/ground_1x1.png');
    game.load.image('walls_1x2', 'assets/tilemaps/tiles/walls_1x2.png');
    game.load.image('tiles2', 'assets/tilemaps/tiles/tiles2.png');

    game.load.image('phaser', 'assets/sprites/master.png');
    game.load.spritesheet('coin', 'assets/sprites/coin.png', 32, 32);

  	//load game assets
  	this.load.image('space', 'assets/skies/deep-space.jpg');
  	// this.load.image('rock', 'assets/images/rock.png');
	// this.load.image('bullet','assets/images/bullet.png');
    // this.load.spritesheet('playership', 'assets/images/player.png', 12, 12);
    // this.load.spritesheet('power', 'assets/images/power.png', 12, 12);
  	// this.load.image('playerParticle', 'assets/images/player-particle.png');
    // this.load.audio('collect', 'assets/audio/collect.ogg');
    // this.load.audio('explosion', 'assets/audio/explosion.ogg');
  },
  create: function() {
  	this.state.start('mainmenu');
  }
};