import {
    PLAYERS_UPDATE,
    PLAYER_INVITE,
    INVITATION_RECEIVED,
    INVITATION_ACCEPTED,
    INVITATION_REJECTED, PLAYER_INVITE_REJECTED,
} from '.';

const updatePlayers = payload => ({
    type: PLAYERS_UPDATE,
    payload,
});

const invitePlayer = payload => ({
    type: PLAYER_INVITE,
    payload,
});

const invitePlayerRejected = payload => ({
   type: PLAYER_INVITE_REJECTED,
   payload,
});

const invitationReceived = payload => ({
    type: INVITATION_RECEIVED,
    payload,
});

const acceptInvitation = payload => ({
    type: INVITATION_ACCEPTED,
    payload,
});

const rejectInvitation = payload => ({
    type: INVITATION_REJECTED,
    payload,
});

export {
    invitePlayer,
    updatePlayers,

    invitationReceived,
    invitePlayerRejected,

    acceptInvitation,
    rejectInvitation,
};
