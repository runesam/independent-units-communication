import {
    SOCKET_INIT,
    PLAYER_INVITE,
} from '../actions';

import socket from '../module/socket';

export default store => next => (action) => {
    const { type, payload } = action;
    switch (type) {
        case SOCKET_INIT:
            socket.init(store);
            break;
        case PLAYER_INVITE:
            socket.invitePlayer(payload);
            break;
        default: next(action);
    }
};
