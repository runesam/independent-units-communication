import {
    PLAYERS_UPDATE,
    PLAYER_REMOVE,
} from '.';

const updatePlayers = payload => ({
    type: PLAYERS_UPDATE,
    payload,
});

const removePlayer = payload => ({
    type: PLAYER_REMOVE,
    payload,
});

export {
    removePlayer,
    updatePlayers,
};
