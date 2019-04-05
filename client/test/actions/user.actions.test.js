import {
    login,
    loginSuccess,
    loginFailure,
    logout,
    logoutSuccess,
    logoutFailure,

    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_START,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
} from 'actions';

describe('user actions', () => {
    describe('login action', () => {
        it('returns the right type and payload', () => {
            const action = login('username', 'password');
            const expected = {
                type: LOGIN_START,
                payload: { username: 'username', password: 'password' },
            };
            expect(action).toEqual(expected);
        });
    });

    describe('loginSuccess action', () => {
        it('returns the right type and payload', () => {
            const action = loginSuccess('token');
            const expected = { type: LOGIN_SUCCESS, payload: { response: 'token' } };
            expect(action).toEqual(expected);
        });
    });

    describe('loginFailure action', () => {
        it('returns the right type and payload', () => {
            const action = loginFailure('serverResponse');
            const expected = { type: LOGIN_FAILURE, payload: { reason: 'serverResponse' } };
            expect(action).toEqual(expected);
        });
    });

    describe('logout action', () => {
        it('returns the right type and payload', () => {
            const action = logout();
            const expected = {
                type: LOGOUT_START,
            };
            expect(action).toEqual(expected);
        });
    });

    describe('logoutSuccess action', () => {
        it('returns the right type and payload', () => {
            const action = logoutSuccess();
            const expected = { type: LOGOUT_SUCCESS };
            expect(action).toEqual(expected);
        });
    });

    describe('logoutFailure action', () => {
        it('returns the right type and payload', () => {
            const action = logoutFailure('reason');
            const expected = { type: LOGOUT_FAILURE, payload: { reason: 'reason' } };
            expect(action).toEqual(expected);
        });
    });
});
