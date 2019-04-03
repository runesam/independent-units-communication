import React from 'react';
import propTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import avatars from '../../../assets';

const Header = (props) => {
    const {
 id, username, classes, number,
} = props;
    return (
        <AppBar position="fixed" className={classes.appBar}>
            <img src={avatars.avatar1} alt="avatar of the player" className={classes.avatar} />
            <Grid container className={classes.container}>
                <Typography variant="h6">{`ID: ${id}`}</Typography>
                <Typography variant="subtitle1">
                    {`Username: ${username} | Init N: ${number}`}
                </Typography>
            </Grid>
        </AppBar>
    );
};

Header.propTypes = {
    id: propTypes.string.isRequired,
    number: propTypes.number.isRequired,
    username: propTypes.string.isRequired,
    classes: propTypes.shape({}).isRequired,
};

const styles = () => ({
    appBar: {
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        flex: 1,
        width: 40,
        marginRight: 15,
    },
    container: {
        flex: 5,
    },
});

export default withStyles(styles)(Header);
