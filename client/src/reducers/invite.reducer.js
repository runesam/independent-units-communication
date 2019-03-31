import {
    GAME_INIT,
    PLAYER_INVITE,
    PLAYER_INVITE_ACCEPTED,
    PLAYER_INVITE_REJECTED,
} from '../actions';

export default (state = {}, action) => {
    const { type, payload } = action;
    switch (type) {
        case PLAYER_INVITE: return {
            ...state,
            [payload.id]: { number: payload.number, status: 'pending' },
        };
        case PLAYER_INVITE_ACCEPTED: return {
            [payload.id]: { ...state[[payload.id]], status: 'accepted' },
        };
        case PLAYER_INVITE_REJECTED: return { ...state, [payload.id]: { status: 'rejected' } };
        case GAME_INIT: return {};
        default: return state;
    }
};
