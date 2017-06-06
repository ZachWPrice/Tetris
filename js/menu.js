var stateMenu = {
    
    preload: function (){
        
        game.load.image('logo', 'assets/phaser.png');
        game.load.spritesheet('button', 'assets/buttons/button_sprite_sheet.png', 193, 71);
    },
    
    create: function (){
        logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
        logo.anchor.setTo(0.5, 0.5);

        var btnConnect = game.add.button(game.world.centerX - 95, 500, 'button', () => {
            Math.seedrandom('hello.');
            console.log(Math.random());
            game.state.start('join'); 
        }, this, 2, 1, 0);
    }
}

