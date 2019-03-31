import { push } from 'connected-react-router';

import {
    NEXT_MOVE,
    SOCKET_INIT,
    PLAYER_INVITE,
    INVITATION_REJECTED,
    INVITATION_ACCEPTED,
    PLAYER_INVITE_ACCEPTED,
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
        case PLAYER_INVITE_ACCEPTED:
            next(action);
            store.dispatch(push('/game'));
            break;
        case INVITATION_REJECTED:
            socket.rejectInvitation(payload);
            next(action);
            break;
        case NEXT_MOVE:
            socket.sendNextMove(payload);
            next(action);
            break;
        case INVITATION_ACCEPTED:
            socket.acceptInvitation(payload);
            store.dispatch(push('/game'));
            next(action);
            break;
        default: next(action);
    }
};
