import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import { result as resultImage } from '../../../assets';

const ResultComponent = (props) => {
    const { result, classes } = props;
    return (
        <Grid container className={classes.root}>
            <div className={classes.background} />
            <div className={classes.winContainer}>
                <img
                    alt={`you ${result}`}
                    src={resultImage[result]}
                    style={{ height: result === 'win' ? '100%' : '130%' }}
                />
            </div>
            <div className={classes.bottom}>
                <Typography variant="h3">{`You ${result}`}</Typography>
                <Link to="/">New Game</Link>
            </div>
        </Grid>
    );
};

const styles = theme => ({
    root: {
        top: 90,
        zIndex: 1,
        display: 'flex',
        position: 'fixed',
        alignItems: 'center',
        flexDirection: 'column',
        height: 'calc(100vh - 90px)',
        justifyContent: 'space-around',
    },
    background: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
        opacity: 0.9,
        position: 'absolute',
        backgroundColor: theme.palette.primary.main,
    },
    winContainer: {
        width: 240,
        height: 240,
        position: 'relative',
        '& > img': {
            width: '100%',
            display: 'block',
            margin: '0 auto',
        },
    },
    bottom: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        '& > h3': {
            marginBottom: 20,
            fontWeight: 'bold',
        },
        '& > a': {
            height: 55,
            width: '80%',
            fontSize: 20,
            display: 'block',
            borderRadius: 100,
            fontWeight: 'bold',
            lineHeight: '55px',
            textAlign: 'center',
            textDecoration: 'none',
            color: theme.palette.black.main,
            backgroundColor: theme.palette.white.main,
        },
    },
});

ResultComponent.propTypes = {
    classes: propTypes.shape({}).isRequired,
    result: propTypes.string.isRequired,
};

export default withStyles(styles)(ResultComponent);
