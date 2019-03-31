import React, { PureComponent } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/icons/ExitToApp';
import Typography from '@material-ui/core/Typography';

import {
    socketInit,
    invitePlayer,
    acceptInvitation,
    rejectInvitation,
} from '../../actions';
import { InvitationComponent, PlayersListComponent } from './components';

const styles = () => ({
    logout: {
        position: 'fixed',
        bottom: 20,
        right: 20,
    },
});

class Players extends PureComponent {
    static propTypes = {
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
        const { socketInit: socketInitAction } = this.props;
        socketInitAction();
    }

    touchPlayer = tabbed => this.setState({ tabbed });

    handleInvite = ({ number }) => {
        const { invitePlayer: invitePlayerAction } = this.props;
        const { tabbed } = this.state;
        invitePlayerAction({
            id: tabbed,
            number,
        });
        // this.setState({ tabbed: '' });
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
                    <Fab className={classes.logout}>
                        <Icon />
                    </Fab>
                    {Boolean(invitation.from) && (
                        <InvitationComponent
                          open={Boolean(invitation.from)}
                          invitation={invitation}
                          accept={this.handleInvitationAccept}
                          reject={this.handleInvitationReject}
                        />
                    )}
                </div>
            );
        }
        return (
            <Typography
              variant="h5"
              align="center"
              color="secondary"
              gutterBottom
            >
                No Players Joined Yet!
            </Typography>
        );
    }
}

const mapStateToProps = (state) => {
    const { players, invite, invitation } = state;
    return {
        invite,
        players,
        invitation,
    };
};

export default connect(mapStateToProps, {
    socketInit,
    invitePlayer,
    acceptInvitation,
    rejectInvitation,
})(withStyles(styles)(Players));
