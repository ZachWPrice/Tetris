var stateJoin = {
    preload: function() {
        connectedPlayers = ["PlayerName"];
        //game.load.bitmapFont('carrier_command', 'assets/fonts/carrier_command.png', 'assets/fonts/carrier_command.xml');
    },
    
    create: function (){
        text = game.add.text(game.world.centerX/2, game.world.centerY/2, "Zachary") ;
        text.anchor.set(0.5);
        text.align = 'center';

        //	Font style
        text.font = 'Arial Black';
        text.fontSize = 50;
        text.fontWeight = 'bold';

        //	Stroke color
        text.fill = '#FFFFFF';
        //connectedPlayers.foreach(userText(element, index));
    },
    
    update: function (){
        game.state.start('play'); 
        if(connectedPlayers < 4) {
            //userText();
        }
        if(connectedPlayers == 4) {
            //gameStart();
        }
    },
    addPlayer: function(userName){
        if(connectedPlayers.length < 4){
            connectedPlayers.push(userName);
        }
    },

    /*userText: function(element, index){
        
        var xText = 0;
        var yText = 0;
        var xFourth = game.world.centerX/2;
        var yFourth = game.world.centerY/2;
        switch(index){
            case 0:
                xText = xFourth;
                yText = yFourth;
                break;
            case 1:
                xText = xFourth*3;
                yText = yFourth;
                break;
            case 2:
                xText = xFourth;
                yText = yFourth*3;
                break;
            case 3: 
                xText = xFourth*3;
                yText = yFourth*3;
                break;
        }
        
        indexText = game.add.text(xText, yText, element);
        text.anchor.set(0.5);
        text.align = 'center';

        //	Font style
        text.font = 'Arial Black';
        text.fontSize = 50;
        text.fontWeight = 'bold';

        //	Stroke color
        text.fill = '#FFFFFF';
    },*/

    startGame: function (){
        game.state.start('play');
    }
}