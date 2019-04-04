import {
    SOCKET_INIT,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
} from '../actions/constants';

export default (state = { loggedIn: false }, action) => {
    const { type, payload } = action;
    switch (type) {
        case SOCKET_INIT: return { ...state, socket: true };
        case LOGIN_SUCCESS: return { loggedIn: true, ...payload.response.data };
        case LOGOUT_SUCCESS: return { loggedIn: false };
        default: return state;
    }
};
