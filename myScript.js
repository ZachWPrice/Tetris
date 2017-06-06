window.onload = function() {

    //  Note that this html file is set to pull down Phaser 2.5.0 from the JS Delivr CDN.
    //  Although it will work fine with this tutorial, it's almost certainly not the most current version.
    //  Be sure to replace it with an updated version before you start experimenting with adding your own code.
    
    var logo;
    var button;
    var toSeed = 'hello.';
    
    var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create });
    
    
    
    function preload () {

        game.load.image('logo', 'phaser.png');
        game.load.spritesheet('button', 'assets/buttons/button_sprite_sheet.png', 193, 71);
    }

    function create () {

        logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
        logo.anchor.setTo(0.5, 0.5);

        var btnConnect = game.add.button(game.world.centerX - 95, 500, 'button', btnConnectClick, {obj: this, objSeed: getSeed(toSeed)}, 2, 1, 0);
    }
    
    function update () {
        
    }
};

function getSeed(seedStr){
    Math.seedrandom(seedStr);
    return Math.random();
}

function btnConnectClick() {
    console.log(this.objSeed);
}

