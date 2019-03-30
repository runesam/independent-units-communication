import {
    SOCKET_INIT,
    PLAYER_INVITE,
    INVITATION_REJECTED,
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
            next(action);
            break;
        case INVITATION_REJECTED:
            socket.rejectInvitation(payload);
            next(action);
            break;
        default: next(action);
    }
};
