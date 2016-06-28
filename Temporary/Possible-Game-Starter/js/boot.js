var SundrinGame = SundrinGame || {};

SundrinGame.Boot = function(){};

//setting game configuration and loading the assets for the loading screen
SundrinGame.Boot.prototype = {
  preload: function() {
  	//assets we'll use in the loading screen
    this.load.image('logo', 'assets/pics/remember-me.jpg');
    this.load.image('preloadbar', 'assets/progressBar.png');
  },
  create: function() {
  	//loading screen will have a white background
    this.game.stage.backgroundColor = '#fff';

    //scaling options
	this.scale.scalemode = phaser.scalemanager.resize;
	this.scale.minwidth = 240;
	this.scale.minheight = 170;
	this.scale.maxwidth = 2880;
	this.scale.maxheight = 1920;
	
	//have the game centered horizontally
	this.scale.pageAlignHorizontally = true;

	//screen size will be set automatically
	//this.scale.setScreenSize(true);

	//physics system for movement
	this.game.physics.startSystem(Phaser.Physics.ARCADE);
    
    this.state.start('preload');
  }
};