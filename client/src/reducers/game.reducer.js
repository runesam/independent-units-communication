import {
    NEXT_MOVE,
    GAME_INITIATED,
    RECEIVE_NEXT_MOVE,
} from '../actions';

export default (state = { moves: [], info: {} }, action) => {
    const { type, payload } = action;
    switch (type) {
        case GAME_INITIATED: return { ...state, info: payload };
        case NEXT_MOVE: return { ...state, moves: [...state.moves, payload] };
        case RECEIVE_NEXT_MOVE: return { ...state, moves: [...state.moves, payload] };
        default:
            return state;
    }
};
