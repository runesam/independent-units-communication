import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_START,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
} from './constants';

const login = (username, password) => ({
    type: LOGIN_START,
    payload: { username, password },
});

const loginFailure = reason => ({
    type: LOGIN_FAILURE,
    payload: { reason },
});

const loginSuccess = response => ({
    type: LOGIN_SUCCESS,
    payload: { response },
});

const logout = () => ({
    type: LOGOUT_START,
});

const logoutSuccess = () => ({
    type: LOGOUT_SUCCESS,
});

const logoutFailure = reason => ({
    type: LOGOUT_FAILURE,
    payload: { reason },
});


export {
    login,
    loginFailure,
    loginSuccess,
    logout,
    logoutSuccess,
    logoutFailure,
};
