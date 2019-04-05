import {
    gameInit,
    nextMove,
    resetGame,
    gameInitiated,
    receiveNextMove,

    GAME_INIT,
    NEXT_MOVE,
    RESET_GAME,
    GAME_INITIATED,
    RECEIVE_NEXT_MOVE,
} from 'actions';

describe('game actions', () => {
    describe('gameInit action', () => {
        it('returns the right type and payload', () => {
            const action = gameInit();
            const expected = { type: GAME_INIT };
            expect(action).toEqual(expected);
        });
    });

    describe('resetGame action', () => {
        it('returns the right type and payload', () => {
            const action = resetGame();
            const expected = { type: RESET_GAME };
            expect(action).toEqual(expected);
        });
    });

    describe('nextMove action', () => {
        it('returns the right type and payload', () => {
            const payload = { test: 123 };
            const action = nextMove(payload);
            const expected = { type: NEXT_MOVE, payload };
            expect(action).toEqual(expected);
        });
    });

    describe('gameInitiated action', () => {
        it('returns the right type and payload', () => {
            const payload = { test: 123 };
            const action = gameInitiated(payload);
            const expected = { type: GAME_INITIATED, payload };
            expect(action).toEqual(expected);
        });
    });

    describe('receiveNextMove action', () => {
        it('returns the right type and payload', () => {
            const payload = { test: 123 };
            const action = receiveNextMove(payload);
            const expected = { type: RECEIVE_NEXT_MOVE, payload };
            expect(action).toEqual(expected);
        });
    });
});
