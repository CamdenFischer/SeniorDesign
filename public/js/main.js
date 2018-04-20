
var connectionOptions = {
    "force new connection" : true,
    "reconnectionAttemps": "Infinity",
    "timeout" : 10000,
    "transports" : ["websocket"]
};

var socketio_url = 'https://infragram.org';

var socket = io.connect(socketio_url);

var sampleImg = new Image();
sampleImg.src = 'sample_pic.jpg';

document.body.appendChild(sampleImg);

socket.on('connect', function(){
    console.log('socket.io client connected.');
});

socket.on('connect_error', function(){
    console.log('socket.io client error connection');
});

socket.emit('image_send', {data: sampleImg.src, size:  sampleImg.size});

socket.on('thumbnail_done', function(data){

});

socket.on('image_done', function(data){

});