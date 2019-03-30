import React, { PureComponent } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/icons/ExitToApp';

import { socketInit, invitePlayer } from '../../actions';
import { PlayersListComponent } from './components';

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
        classes: propTypes.shape({}).isRequired,
        invitePlayer: propTypes.func.isRequired,
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

    handleSubmit = ({ number }) => {
        const { invitePlayer: invitePlayerAction } = this.props;
        const { tabbed } = this.state;
        invitePlayerAction({
            id: tabbed,
            number,
        });
    };

    render() {
        const { classes, players } = this.props;
        const { tabbed } = this.state;
        return (
            <div>
                <PlayersListComponent
                  tabbed={tabbed}
                  players={players}
                  touchPlayer={this.touchPlayer}
                  handleSubmit={this.handleSubmit}
                />
                <Fab className={classes.logout}>
                    <Icon />
                </Fab>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { players } = state;
    return {
        players,
    };
};

export default connect(mapStateToProps, {
    socketInit,
    invitePlayer,
})(withStyles(styles)(Players));
