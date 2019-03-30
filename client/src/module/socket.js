import io from 'socket.io-client';

import {
    updatePlayers,
    invitationReceived,
    invitePlayerRejected,
} from '../actions';

class Socket {
    init(store) {
        this.store = store;
        this.socket = io('http://localhost:5000');
        this.socket.on('connect', this.handleOnConnect);
        this.socket.on('players', this.handleOnEvent);
        this.socket.on('disconnect', this.handleOnDisconnect);
        this.socket.on('updateUsersList', this.onUpdateUsersList);
        this.socket.on('newMessage', this.onNewMessage);
        this.socket.on('invitation', this.onInvitationReceived);
        this.socket.on('invitationRejected', this.onInvitationRejected);
    }

    onUpdateUsersList = (data) => {
        console.log(data, this.player.id);
        this.store.dispatch(updatePlayers(
            data.filter(player => player.id !== this.player.id),
        ));
    };

    onNewMessage = (data) => {
        console.log('newMessage', data, this.store);
    };

    handleOnEvent = (data) => {
        console.log(data);
    };

    onInvitationReceived = data => this.store.dispatch(invitationReceived(data));

    invitePlayer = payload => this.socket.emit('invite', payload);

    onInvitationRejected = payload => this.store.dispatch(invitePlayerRejected(payload));

    rejectInvitation = invitation => this.socket.emit('rejectInvitation', invitation);

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
