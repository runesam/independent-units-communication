import {
    SOCKET_INIT,
    SOCKET_CLOSE,
} from '.';

const socketInit = () => ({
    type: SOCKET_INIT,
});

const socketClose = () => ({
    type: SOCKET_CLOSE,
});

export {
    socketInit,
    socketClose,
};
