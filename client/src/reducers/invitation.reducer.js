import {
    INVITATION_RECEIVED,
    INVITATION_ACCEPTED,
    INVITATION_REJECTED,
} from '../actions';

export default (state = {}, action) => {
    const { type, payload } = action;
    switch (type) {
        case INVITATION_RECEIVED: return payload;
        case INVITATION_ACCEPTED:
        case INVITATION_REJECTED:
            return {};
        default: return state;
    }
};
