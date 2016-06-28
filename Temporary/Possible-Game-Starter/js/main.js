var SundrinGame = SundrinGame || {};

SundrinGame.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '');

SundrinGame.game.state.add('boot', SundrinGame.Boot);
SundrinGame.game.state.add('preload', SundrinGame.Preload);
SundrinGame.game.state.add('mainmenu', SundrinGame.MainMenu);
SundrinGame.game.state.add('game', SundrinGame.Game);
SundrinGame.game.state.start('boot');