const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const router = require('./router');

// Load config
const port =process.env.PORT||8080;

// Init express
const app = express();
const server = http.Server(app);
const sio = socketio(server);

// Begin apply router table
router.apply(app, sio);
// End apple router table

server.listen(port, function () {
    console.log("TnuApi starting webservicer at port " + port);
    console.log("Listening...");
});
