import React from 'react';
import List from '@material-ui/core/List';
import propTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

import { PlayerItemComponent } from '.';

const PlayersList = (props) => {
    const {
        tabbed,
        invite,
        players,
        classes,
        touchPlayer,
        handleSubmit,
    } = props;
    return (
        <List className={classes.root}>
            {players.map(player => (
                <PlayerItemComponent
                  key={player.id}
                  player={player}
                  invite={invite}
                  tabbed={tabbed}
                  handleSubmit={handleSubmit}
                  touchPlayer={touchPlayer}
                />
            ))}
        </List>
    );
};

PlayersList.propTypes = {
    tabbed: propTypes.string.isRequired,
    touchPlayer: propTypes.func.isRequired,
    invite: propTypes.shape({}).isRequired,
    handleSubmit: propTypes.func.isRequired,
    classes: propTypes.shape({}).isRequired,
    players: propTypes.arrayOf(propTypes.object).isRequired,
};

const styles = () => ({
    root: {
        padding: 0,
    },
});

export default withStyles(styles)(PlayersList);
