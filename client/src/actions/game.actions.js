import {
    GAME_INIT,
    NEXT_MOVE,
    RESET_GAME,
    GAME_INITIATED,
    RECEIVE_NEXT_MOVE,
} from './constants';

const gameInit = () => ({
    type: GAME_INIT,
});

const resetGame = () => ({
    type: RESET_GAME,
});

const nextMove = payload => ({
    type: NEXT_MOVE,
    payload,
});

const gameInitiated = payload => ({
    type: GAME_INITIATED,
    payload,
});

const receiveNextMove = payload => ({
    type: RECEIVE_NEXT_MOVE,
    payload,
});

export {
    nextMove,
    gameInit,
    resetGame,
    gameInitiated,
    receiveNextMove,
};
