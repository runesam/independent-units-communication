import {
    NEXT_MOVE,
    RECEIVE_NEXT_MOVE,
} from '../actions';

export default (state = [], action) => {
    const { type, payload } = action;
    switch (type) {
        case NEXT_MOVE: return [...state, payload];
        case RECEIVE_NEXT_MOVE: return [...state, payload];
        default:
            return state;
    }
};
