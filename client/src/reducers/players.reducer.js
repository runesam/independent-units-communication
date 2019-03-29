import {
    PLAYERS_UPDATE,
} from '../actions';

export default (state = [], action) => {
    const { type, payload } = action;
    switch (type) {
        case PLAYERS_UPDATE: return [...payload];
        default: return state;
    }
};
