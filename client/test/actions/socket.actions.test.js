import {
    socketInit,
    socketClose,

    SOCKET_INIT,
    SOCKET_CLOSE,
} from 'actions';

describe('game actions', () => {
    describe('socketInit action', () => {
        it('returns the right type and payload', () => {
            const action = socketInit();
            const expected = { type: SOCKET_INIT };
            expect(action).toEqual(expected);
        });
    });

    describe('resetGame action', () => {
        it('returns the right type and payload', () => {
            const action = socketClose();
            const expected = { type: SOCKET_CLOSE };
            expect(action).toEqual(expected);
        });
    });
});
