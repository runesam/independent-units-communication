const socketIO = require('socket.io');

const Users = require('./users');
const { server } = require('../expressSetup');

const users = new Users();
const io = socketIO(server);

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
    }
};

const onInvite = (payload, callback, socket) => {
    socket.broadcast.to(payload.id).emit('invitation', {
        from: users.getUser(socket),
        number: payload.number,
    });
};

const onNextMove = (data, socket) => {
    const {
        id,
        value,
        result,
        current,
    } = data;
    socket.broadcast.to(id).emit('nextMoveReceived', { value, current, result });
};

const onRejectInvitation = (payload, callback, socket) => {
    socket.broadcast.to(payload.from.id).emit('invitationRejected', { id: socket.id });
};

const onAcceptInvitation = (payload, callback, socket) => {
    socket.broadcast.to(payload.from.id).emit('invitationAccepted', { id: socket.id });
};

io.on('connection', (socket) => {
    socket.on('logout', () => socket.disconnect());
    socket.on('disconnect', () => onDisconnect(socket));
    socket.on('nextMove', data => onNextMove(data, socket));
    socket.on('joined', (data, callback) => onJoined(data, callback, socket));
    socket.on('invite', (data, callback) => onInvite(data, callback, socket));
    socket.on('rejectInvitation', (data, callback) => onRejectInvitation(data, callback, socket));
    socket.on('acceptInvitation', (data, callback) => onAcceptInvitation(data, callback, socket));
});

server.listen(
    process.env.SERVER_PORT, () => console.log(`express init, listening to port ${process.env.SERVER_PORT}`),
);
