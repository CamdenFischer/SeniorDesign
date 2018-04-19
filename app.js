var http = require('http');
var fs = require('fs');
var express = require("express");
var app = express();
var io = require('socket.io');

var PORT = 3000;
var DEBUG = 1;
var NOT_BEING_USED = -1;
var ERROR = -1;
var SUCCESS = 0;
var HOST = "127.0.0.1";

var server = http.createServer(app);
server.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}/`);
});