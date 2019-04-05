import userReducer from 'reducers/user.reducer';

import {
    socketInit,
    loginSuccess,
    logoutSuccess,
} from 'actions';

describe('user reducer', () => {
    it('update loggedIn on loginSuccess', () => {
        const state = { loggedIn: false };
        const expectedState = { loggedIn: true };
        expect(userReducer(state, loginSuccess({}))).toEqual(expectedState);
    });

    it('update loggedIn on logoutSuccess', () => {
        const state = { loggedIn: true };
        const expectedState = { loggedIn: false };
        expect(userReducer(state, logoutSuccess())).toEqual(expectedState);
    });

    it('update socketInit on socketInit', () => {
        const state = {};
        const expectedState = { socket: true };
        expect(userReducer(state, socketInit())).toEqual(expectedState);
    });
});
