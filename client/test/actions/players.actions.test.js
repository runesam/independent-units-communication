import {
    invitePlayer,
    updatePlayers,
    acceptInvitation,
    rejectInvitation,
    invitationReceived,
    invitePlayerAccepted,
    invitePlayerRejected,

    PLAYER_INVITE,
    PLAYERS_UPDATE,
    INVITATION_RECEIVED,
    INVITATION_ACCEPTED,
    INVITATION_REJECTED,
    PLAYER_INVITE_ACCEPTED,
    PLAYER_INVITE_REJECTED,
} from 'actions';

describe('players actions', () => {
    describe('invitePlayer action', () => {
        it('returns the right type and payload', () => {
            const payload = { test: 123 };
            const action = invitePlayer(payload);
            const expected = { type: PLAYER_INVITE, payload };
            expect(action).toEqual(expected);
        });
    });

    describe('updatePlayers action', () => {
        it('returns the right type and payload', () => {
            const payload = { test: 123 };
            const action = updatePlayers(payload);
            const expected = { type: PLAYERS_UPDATE, payload };
            expect(action).toEqual(expected);
        });
    });

    describe('acceptInvitation action', () => {
        it('returns the right type and payload', () => {
            const payload = { test: 123 };
            const action = acceptInvitation(payload);
            const expected = { type: INVITATION_ACCEPTED, payload };
            expect(action).toEqual(expected);
        });
    });

    describe('rejectInvitation action', () => {
        it('returns the right type and payload', () => {
            const payload = { test: 123 };
            const action = rejectInvitation(payload);
            const expected = { type: INVITATION_REJECTED, payload };
            expect(action).toEqual(expected);
        });
    });

    describe('invitationReceived action', () => {
        it('returns the right type and payload', () => {
            const payload = { test: 123 };
            const action = invitationReceived(payload);
            const expected = { type: INVITATION_RECEIVED, payload };
            expect(action).toEqual(expected);
        });
    });

    describe('invitePlayerAccepted action', () => {
        it('returns the right type and payload', () => {
            const payload = { test: 123 };
            const action = invitePlayerAccepted(payload);
            const expected = { type: PLAYER_INVITE_ACCEPTED, payload };
            expect(action).toEqual(expected);
        });
    });

    describe('invitePlayerRejected action', () => {
        it('returns the right type and payload', () => {
            const payload = { test: 123 };
            const action = invitePlayerRejected(payload);
            const expected = { type: PLAYER_INVITE_REJECTED, payload };
            expect(action).toEqual(expected);
        });
    });
});
