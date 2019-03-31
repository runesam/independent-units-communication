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

        this.socket.on('players', this.handleOnEvent);
        this.socket.on('newMessage', this.onNewMessage);
        this.socket.on('connect', this.handleOnConnect);
        this.socket.on('disconnect', this.handleOnDisconnect);
        this.socket.on('invitation', this.onInvitationReceived);
        this.socket.on('updateUsersList', this.onUpdateUsersList);
        this.socket.on('nextMoveReceived', this.onNextMoveReceived);
        this.socket.on('invitationRejected', this.onInvitationRejected);
        this.socket.on('invitationAccepted', this.onInvitationAccepted);
    }

    handleOnEvent = data => console.log(data);

    onNewMessage = data => console.log('newMessage', data, this.store);

    invitePlayer = payload => this.socket.emit('invite', payload);

    rejectInvitation = invitation => this.socket.emit('rejectInvitation', invitation);

    acceptInvitation = invitation => this.socket.emit('acceptInvitation', invitation);

    sendNextMove = payload => this.socket.emit('nextMove', payload);

    onUpdateUsersList = data => this.store.dispatch(updatePlayers(
        data.filter(player => player.id !== this.player.id),
    ));

    onNextMoveReceived = payload => this.store.dispatch(receiveNextMove(payload));

    onInvitationReceived = data => this.store.dispatch(invitationReceived(data));

    onInvitationRejected = payload => this.store.dispatch(invitePlayerRejected(payload));

    onInvitationAccepted = payload => this.store.dispatch(invitePlayerAccepted(payload));

    handleOnConnect = () => {
        const url = new URL(window.document.location.href);
        const username = url.searchParams.get('username');
        this.socket.emit('joined', { username, room: 'game' }, (player) => {
            this.player = player;
        });
    };

    handleOnDisconnect = data => console.log(data);
}

export default new Socket();
