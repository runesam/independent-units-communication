import {
    PLAYERS_UPDATE,
    PLAYER_INVITE,
} from '.';

const updatePlayers = payload => ({
    type: PLAYERS_UPDATE,
    payload,
});

const invitePlayer = payload => ({
    type: PLAYER_INVITE,
    payload,
});

export {
    invitePlayer,
    updatePlayers,
};
