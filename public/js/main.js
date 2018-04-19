
var connectionOptions = {
    "force new connection" : true,
    "reconnectionAttemps": "Infinity",
    "timeout" : 10000,
    "transports" : ["websocket"]
};

socketio_url = 'http://infragram.org';

var socket = io.connect(socketio_url, connectionOptions);

var sampleImg = new Image();
sampleImg.src = 'sample_pic.jpg';

document.body.appendChild(sampleImg);

socket.on('connect', function(){
    console.log('socket.io client connected.');
});

socket.on('connect_error', function(){
    console.log('socket.io client error connection');
});