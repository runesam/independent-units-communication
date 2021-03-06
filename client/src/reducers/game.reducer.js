import {
    NEXT_MOVE,
    RESET_GAME,
    GAME_INITIATED,
    RECEIVE_NEXT_MOVE,
} from '../actions';

function nextMove(state, payload) {
    const over = payload.result === 1 ? 'win' : state.over;
    return { ...state, moves: [...state.moves, payload], over };
}

function receiveNextMove(state, payload) {
    const over = payload.result === 1 ? 'lose' : state.over;
    return { ...state, moves: [...state.moves, payload], over };
}

export default (state = { moves: [], info: {}, over: '' }, action) => {
    const { type, payload } = action;
    switch (type) {
        case NEXT_MOVE: return nextMove(state, payload);
        case GAME_INITIATED: return { ...state, info: payload };
        case RESET_GAME: return { moves: [], info: {}, over: '' };
        case RECEIVE_NEXT_MOVE: return receiveNextMove(state, payload);
        default:
            return state;
    }
};
