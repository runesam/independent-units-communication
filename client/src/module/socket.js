import io from 'socket.io-client';

import {
    updatePlayers,
    receiveNextMove,
    invitationReceived,
    invitePlayerAccepted,
    invitePlayerRejected,
} from '../actions';

class Socket {
    init(store) {
        this.store = store;
        this.socket = io('http://localhost:5000');

        this.socket.on('connect', this.handleOnConnect);
        this.socket.on('disconnect', this.handleOnDisconnect);
        this.socket.on('invitation', this.onInvitationReceived);
        this.socket.on('updateUsersList', this.onUpdateUsersList);
        this.socket.on('nextMoveReceived', this.onNextMoveReceived);
        this.socket.on('invitationRejected', this.onInvitationRejected);
        this.socket.on('invitationAccepted', this.onInvitationAccepted);
    }

    disconnect = () => this.socket.emit('logout');

    invitePlayer = payload => this.socket.emit('invite', payload);

    rejectInvitation = invitation => this.socket.emit('rejectInvitation', invitation);

    acceptInvitation = invitation => this.socket.emit('acceptInvitation', invitation);

    sendNextMove = payload => this.socket.emit('nextMove', payload);

    onUpdateUsersList = data => this.store.dispatch(updatePlayers(
        data.filter(player => player.id !== this.player.id),
    ));

    onNextMoveReceived = payload => this.store.dispatch(receiveNextMove(payload));

    onInvitationReceived = payload => this.store.dispatch(invitationReceived(payload));

    onInvitationRejected = payload => this.store.dispatch(invitePlayerRejected(payload));

    onInvitationAccepted = payload => this.store.dispatch(invitePlayerAccepted(payload));

    handleOnConnect = () => {
        const { user: { username } } = this.store.getState();
        this.socket.emit('joined', { username, room: 'game' }, (player) => {
            this.player = player;
        });
    };

    handleOnDisconnect = data => console.log(data);
}

export default new Socket();
