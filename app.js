const PORT = 3000;
const HOST = "localhost";
const DEBUG = 1;
const NOT_BEING_USED = -1;
const ERROR = -1;
const SUCCESS = 0;

const http = require("http");
const url = require('url');
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const requests = require('requests');
const fs = require("fs");
const app = express();

var publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

var server = http.createServer(app);
//var io = require('socket.io')(server);
server.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}/`);
});

