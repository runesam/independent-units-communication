import {
    GAME_INIT,
    INVITATION_RECEIVED,
    INVITATION_ACCEPTED,
    INVITATION_REJECTED,
} from '../actions';

export default (state = {}, action) => {
    const { type, payload } = action;
    switch (type) {
        case INVITATION_RECEIVED: return payload;
        case INVITATION_REJECTED:
        case GAME_INIT:
            return {};
        case INVITATION_ACCEPTED:
        default: return state;
    }
};
