const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

io.on('connection', (socket) => {
    console.log(socket);
});

server.listen(
    process.env.PORT, () => console.log(`express init, listening to port ${process.env.PORT}`),
);
