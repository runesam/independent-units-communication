import React from 'react';
import propTypes from 'prop-types';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import avatars from '../../../assets';

const styles = theme => ({
    wrapper: {
        paddingTop: 90,
        minHeight: '100vh',
        paddingBottom: 100,
        flexDirection: 'column',
        backgroundColor: theme.palette.grayed.main,
    },
    moveWrapper: {
        padding: 15,
    },
    current: {
        boxShadow: 'none',
    },
    avatar: {
        width: 40,
    },
    container: {
        flex: 5,
        height: 160,
        padding: '0 15px',
    },
    field: {
        width: 220,
        padding: '0 10px',
        lineHeight: '40px',
        color: theme.palette.black.main,
        backgroundColor: theme.palette.white.main,
        boxShadow: '0 2px 6px 0 rgba(47, 83, 151, 0.10)',
    },
});

const MoveComponent = (props) => {
    const {
        who,
        index,
        classes,
        move: { current, value, result },
    } = props;

    let normal;

    if (who === 'ping') {
        normal = index % 2 === 1;
    } else {
        normal = index % 2 === 0;
    }

    return (
        <Grid
            container
            alignItems="flex-start"
            className={classes.moveWrapper}
            direction={normal ? 'row' : 'row-reverse'}
        >
            <img
                alt="avatar of the player"
                className={classes.avatar}
                src={normal ? avatars.avatar1 : avatars.avatar2}
            />
            <Grid
                container
                direction="column"
                justify="space-between"
                className={classes.container}
                alignItems={normal ? 'flex-start' : 'flex-end'}
            >
                <Fab color="primary" size="large" className={classes.current}>
                    <Typography variant="h6">{value}</Typography>
                </Fab>
                <Typography variant="subtitle1" className={classes.field}>
                    {`[(${value} + ${current}) / 3] = ${result}`}
                </Typography>
                <Typography variant="subtitle1" className={classes.field}>{result}</Typography>
            </Grid>
        </Grid>
    );
};

MoveComponent.propTypes = {
    who: propTypes.string.isRequired,
    index: propTypes.number.isRequired,
    move: propTypes.shape({}).isRequired,
    classes: propTypes.shape({}).isRequired,
};

const StyledMoveComponent = withStyles(styles)(MoveComponent);

const PlayersMoves = (props) => {
    const { game, classes, who } = props;
    return (
        <Grid container className={classes.wrapper}>
            {game.map((move, i) => {
                const key = `${i}`;
                return <StyledMoveComponent key={key} index={i} move={move} who={who} />;
            })}
        </Grid>
    );
};

PlayersMoves.propTypes = {
    who: propTypes.string.isRequired,
    classes: propTypes.shape({}).isRequired,
    game: propTypes.arrayOf(propTypes.shape({})).isRequired,
};

export default withStyles(styles)(PlayersMoves);
