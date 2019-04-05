import userMiddleware from 'middleware/user.middleware';

import {
    login,
    loginSuccess,
    loginFailure,
} from 'actions';

import Http from 'app/Http';
import { setParamsObjectToURL } from 'utils';

describe('dashboardUserMiddleware', () => {
    // keeps what last action been dispatched with.
    let calledWith = [];
    const create = () => {
        const store = {
            getState: jest.fn(() => ({})),
            dispatch: jest.fn((arg) => {
                calledWith.push(arg);
                return arg;
            }),
        };
        const next = jest.fn();

        const invoke = action => userMiddleware(store)(next)(action);

        return { store, next, invoke };
    };

    beforeEach(() => {
        calledWith = [];
    });

    describe('interacting with actions', () => {
        it('passes through success action', () => {
            const { next, invoke } = create();
            const action = loginSuccess({ data: {} });
            invoke(action);
            expect(next).toHaveBeenCalledWith(action);
        });

        it('passes through failure action', () => {
            const { next, invoke } = create();
            const action = loginFailure({});
            invoke(action);
            expect(next).toHaveBeenCalledWith(action);
        });
    });

    describe('catching the action of LOGIN_START', () => {
        jest.mock('app/Http');

        it('fires a http request of type POST to login', () => {
            Http.post = jest.fn().mockImplementationOnce(() => Promise.resolve({}));
            // mocking dispatching action
            const { next, invoke } = create();
            const action = login('username', 'password');
            invoke(action);

            const loginUserData = setParamsObjectToURL({
                username: 'username',
                password: 'password',
            });

            expect(next).toHaveBeenCalledWith(action);
            expect(Http.post).toBeCalledTimes(1);
            expect(Http.post).toBeCalledWith('/api/oauth/token', loginUserData);
        });

        it('dispatches the loginSuccess action on success', (done) => {
            const response = {
                access_token: 'token',
            };
            Http.post = jest.fn().mockImplementationOnce(() => Promise.resolve(response));

            // mocking dispatching action
            const { store, invoke } = create();
            const action = login('username', 'password');
            invoke(action);

            setTimeout(() => {
                expect(store.dispatch).toBeCalledTimes(1);
                expect(store.dispatch).toBeCalledWith(
                    loginSuccess(calledWith[0].payload.response),
                );
                done();
            });
        });

        it('dispatches the loginFailure action on success', (done) => {
            const reason = {
                response: {
                    errorMessage: 'forbidden',
                },
            };

            Http.post = jest.fn().mockImplementationOnce(() => Promise.reject(reason));

            // mocking dispatching action
            const { store, invoke } = create();
            const action = login('username', 'password');
            invoke(action);

            setTimeout(() => {
                expect(store.dispatch).toBeCalledTimes(2);
                expect(store.dispatch).toBeCalledWith(
                    loginFailure(calledWith[1].payload.reason),
                );
                done();
            });
        });
    });
});
