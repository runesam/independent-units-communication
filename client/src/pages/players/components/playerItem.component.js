import React, { PureComponent } from 'react';

import propTypes from 'prop-types';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/icons/Send';
import { withStyles } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';

import { InvitationFormComponent } from '.';


class PlayerItemComponent extends PureComponent {
    static propTypes = {
        tabbed: propTypes.string.isRequired,
        player: propTypes.shape({}).isRequired,
        invite: propTypes.shape({}).isRequired,
        touchPlayer: propTypes.func.isRequired,
        handleSubmit: propTypes.func.isRequired,
        classes: propTypes.shape({}).isRequired,
    };

    touchPlayer = () => {
        const { touchPlayer, player: { id } } = this.props;
        touchPlayer(id);
    };

    render() {
        const {
            tabbed,
            invite,
            player,
            classes,
            handleSubmit,
        } = this.props;
        const pending = Boolean(invite[player.id] && invite[player.id].status === 'pending');
        const rejected = Boolean(invite[player.id] && invite[player.id].status === 'rejected');
        return (
            <ListItem
              divider
              onClick={this.touchPlayer}
              className={`${classes.item} ${rejected ? classes.rejected : ''}`}
            >
                {tabbed !== player.id && (
                    <div className={classes.container}>
                        <Typography variant="subtitle2" gutterBottom>
                            {`ID: ${player.id}`}
                            <br />
                            {`Player: ${player.username}`}
                        </Typography>
                        <Fab className={classes.logout}>
                            <Icon />
                        </Fab>
                    </div>
                )}
                {tabbed === player.id && (
                    <InvitationFormComponent pending={pending} onSubmit={handleSubmit} />
                )}
            </ListItem>
        );
    }
}

const styles = theme => ({
    container: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    item: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.white.main,
        justifyContent: 'space-between',
    },
    rejected: {
        backgroundColor: theme.palette.error.main,
    },
});

export default withStyles(styles)(PlayerItemComponent);
