import {
    GAME_INIT,
    NEXT_MOVE,
    RECEIVE_NEXT_MOVE,
} from './constants';

const gameInit = () => ({
    type: GAME_INIT,
});

const nextMove = payload => ({
    type: NEXT_MOVE,
    payload,
});

const receiveNextMove = payload => ({
    type: RECEIVE_NEXT_MOVE,
    payload,
});

export {
    nextMove,
    gameInit,
    receiveNextMove,
};
