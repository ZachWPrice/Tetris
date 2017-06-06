window.onload = function() {
    var url = "ws://tetris-heed.rhcloud.com:8000/";
    var socket = io(url, {transports: ['websocket']});
     
    socket.on(‘connect’, socketOpen);
    socket.on(‘myCustomEvent’, socketClose);
    socket.emit(“eventName”, args);
    
    function socketOpen () {
        console.log("Socket Opened");
        for (let i = 0; i < listeners.length; i++) {
            if (typeof listeners[i].socketOpened === 'function') {
                listeners[i].socketOpened();
            }
        }
    }
    
    function socketClose () {
        
    }
    
    
    
    
};