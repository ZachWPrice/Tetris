//var io = require('socket.io');

//window.onload = function() {
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
});
socket.on('playerJoinedRoom', function() {
	console.log("playerJoinedRoom");
	//TODO add player, update joined room pages
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


function createRoom(){
	socket.emit('createRoom', 'zachRoom');
}
  
function joinRoom(){
	socket.emit('joinRoom', 'zachRoom');
}

function leaveRoom(){
	socket.emit('leaveRoom', args);
}

function lostGame(){
	socket.emit('lostGame', args);
}
function penaltyLine(){
	socket.emit('penaltyLine', args);
}
function gameStart(){
	socket.emit('gameStart', args);
}


