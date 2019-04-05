import { push } from 'connected-react-router';

import {
    GAME_INIT,
    NEXT_MOVE,
    SOCKET_INIT,
    PLAYER_INVITE,
    PLAYERS_UPDATE,
    INVITATION_REJECTED,
    INVITATION_ACCEPTED,
    PLAYER_INVITE_ACCEPTED,

    gameInitiated,
} from '../actions';

import socket from '../module/socket';

function gameInit(store) {
    const {
        invite,
        players,
        invitation,
    } = store.getState();

    if (Object.keys(invitation).length) {
        const { number, from: { id } } = invitation;

        return {
            id,
            who: 'pong',
            number: parseInt(number, 10),
            username: players.find(player => player.id === id).username,
        };
    }

    const id = Object.keys(invite).find(item => invite[item].status === 'accepted');
    const { number } = invite[id] || {};
    const player = players.find(item => item.id === id);

    return {
        id,
        who: 'ping',
        username: player.username,
        number: parseInt(number, 10),
    };
}

export default store => next => (action) => {
    const { type, payload } = action;
    switch (type) {
        case SOCKET_INIT:
            socket.init(store);
            next(action);
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
        case GAME_INIT:
            store.dispatch(gameInitiated(gameInit(store)));
            next(action);
            break;
        case PLAYERS_UPDATE:
            if (payload.length === 0) {
                store.dispatch(push('/'));
            }
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
