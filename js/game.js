var game = new Phaser.Game(800, 600, Phaser.AUTO, 'gameDiv');

game.state.add('menu', stateMenu);
game.state.add('join', stateJoin);
game.state.add('play', statePlay);

game.state.start('menu');
