import {
    PLAYER_INVITE,
    PLAYER_INVITE_REJECTED,
} from '../actions';

export default (state = {}, action) => {
    const { type, payload } = action;
    switch (type) {
        case PLAYER_INVITE: return { ...state, [payload.id]: 'pending' };
        case PLAYER_INVITE_REJECTED: return { ...state, [payload.id]: 'rejected' };
        default: return state;
    }
};
