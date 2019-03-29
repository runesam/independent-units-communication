import {
    SOCKET_INIT,
} from '../actions';

import socket from '../module/socket';

export default store => next => (action) => {
    const { type, payload } = action;
    console.log(payload);
    switch (type) {
        case SOCKET_INIT:
            socket.init(store);
            break;
        default: next(action);
    }
};
