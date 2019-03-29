const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const Users = require('./users');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const users = new Users();

const onDisconnect = ({ id }) => {
    const user = users.deleteUser({ id });
    if (user.id) {
        io.to(user.room).emit('updateUsersList', users.getRoomUsers(user.room));
        io.to(user.room).emit('newMessage', `user ${user.username} just left the room`);
    }
    console.log(`${id} just got disconnected`);
};

const onJoined = ({ username, room }, callback, socket) => {
    if (username && room) {
        socket.join(room);
        const user = { id: socket.id, username, room };
        callback(user);
        users.deleteUser(user);
        users.setUser(user);
        io.to(room).emit('updateUsersList', users.getRoomUsers(room));
        socket.emit('newMessage', 'welcome to the chat app');
        // return socket.broadcast.to(room).emit('newMessage', generateMessage(
        //     'admin',
        //     `welcome ${username} he/she just joined the ${room} room`,
        // ));
    }
    // return callback({ error: true, text: 'username and room must be provided' });
};

io.on('connection', (socket) => {
    // console.log(socket);
    socket.on('disconnect', () => onDisconnect(socket));
    socket.on('joined', (data, callback) => onJoined(data, callback, socket));
});

server.listen(
    process.env.PORT, () => console.log(`express init, listening to port ${process.env.PORT}`),
);
