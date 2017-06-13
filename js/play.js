var statePlay = {
    preload: function(){
    },
    
    create: function() {
        var last = now = Date.now();
        gameController.draw;
    },
    
    update: function(){
        gameController.update((now - last) / 1000.0);
        gameController.draw;
        last = now;
        now = Date.now();
    }, 
}