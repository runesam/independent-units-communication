import React, { PureComponent } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import Fab from '@material-ui/core/Fab';
import { withStyles } from '@material-ui/core';
import Icon from '@material-ui/icons/ExitToApp';
import Typography from '@material-ui/core/Typography';

import {
    logout,
    resetGame,
    socketInit,
    invitePlayer,
    acceptInvitation,
    rejectInvitation,
} from '../../actions';
import { InvitationComponent, PlayersListComponent } from './components';

const styles = () => ({
    logout: {
        right: 20,
        bottom: 20,
        position: 'fixed',
    },
});

class Players extends PureComponent {
    static propTypes = {
        logout: propTypes.func.isRequired,
        resetGame: propTypes.func.isRequired,
        user: propTypes.shape({}).isRequired,
        socketInit: propTypes.func.isRequired,
        invite: propTypes.shape({}).isRequired,
        invitePlayer: propTypes.func.isRequired,
        classes: propTypes.shape({}).isRequired,
        invitation: propTypes.shape({}).isRequired,
        acceptInvitation: propTypes.func.isRequired,
        rejectInvitation: propTypes.func.isRequired,
        players: propTypes.arrayOf(propTypes.object).isRequired,
    };

    state = {
        tabbed: '',
    };

    componentDidMount() {
        const {
            user: { socket },
            resetGame: resetGameAction,
            socketInit: socketInitAction,
        } = this.props;
        if (socket) {
            return resetGameAction();
        }
        return socketInitAction();
    }

    touchPlayer = tabbed => this.setState({ tabbed });

    handleInvite = ({ number }) => {
        const { invitePlayer: invitePlayerAction } = this.props;
        const { tabbed } = this.state;
        invitePlayerAction({
            number,
            id: tabbed,
        });
    };

    handleInvitationAccept = () => {
        const { acceptInvitation: acceptInvitationAction, invitation } = this.props;
        acceptInvitationAction(invitation);
    };

    handleInvitationReject = () => {
        const { rejectInvitation: rejectInvitationAction, invitation } = this.props;
        rejectInvitationAction(invitation);
    };

    render() {
        const {
            invite,
            classes,
            players,
            invitation,
            logout: logoutAction,
        } = this.props;
        const { tabbed } = this.state;
        if (players.length) {
            return (
                <div>
                    <PlayersListComponent
                      invite={invite}
                      tabbed={tabbed}
                      players={players}
                      touchPlayer={this.touchPlayer}
                      handleSubmit={this.handleInvite}
                    />
                    <Fab className={classes.logout} onClick={logoutAction}>
                        <Icon />
                    </Fab>
                    {Boolean(invitation.from) && (
                        <InvitationComponent
                          invitation={invitation}
                          open={Boolean(invitation.from)}
                          accept={this.handleInvitationAccept}
                          reject={this.handleInvitationReject}
                        />
                    )}
                </div>
            );
        }
        return ([
            <Typography
                variant="h5"
                gutterBottom
                align="center"
                color="secondary"
                key="TypographyII"
            >
                No Players Joined Yet!
            </Typography>,
            <Fab key="logoutII" className={classes.logout} onClick={logoutAction}>
                <Icon />
            </Fab>,
        ]);
    }
}

const mapStateToProps = (state) => {
    const {
        user,
        invite,
        players,
        invitation,
    } = state;
    return {
        user,
        invite,
        players,
        invitation,
    };
};

export default connect(mapStateToProps, {
    logout,
    resetGame,
    socketInit,
    invitePlayer,
    acceptInvitation,
    rejectInvitation,
})(withStyles(styles)(Players));
