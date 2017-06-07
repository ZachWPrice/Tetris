//var io = require('socket.io');

window.onload = function() {
var url = "ws://tetris-heed.rhcloud.com:8000/";
var _clientName = 'Zachary';
var socket = io(url, {
            transports: ['websocket'],
            query: "displayName="+_clientName,
        });
 
socket.on('connect', function() {
	console.log("connect");
});
socket.on('joinedRoom', function() {
	console.log("joinedRoom");
});
socket.on('gameStart', function() {
	console.log("gameStart");
	//stateJoin.startGame
});
socket.on('playerJoinedRoom', function() {
	console.log("playerJoinedRoom");
});
socket.on('playerLeftRoom', function() {
	console.log("playerLeftRoom");
});
socket.on('playerLost', function() {
	console.log("PlayerLost");
});
socket.on('gameOver', function() {
	console.log("gameOver");
});
socket.on('penaltyLine', function() {
	console.log("penaltyLine");
});

/*socket.emit('createRoom', args);
socket.emit('joinRoom', args);
socket.emit('leaveRoom', args);
socket.emit('lostGame', args);
socket.emit('penaltyLine', args);
socket.emit('gameStart', args);*/
};


