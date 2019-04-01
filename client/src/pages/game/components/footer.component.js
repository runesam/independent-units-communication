import React, { PureComponent } from 'react';
import propTypes from 'prop-types';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

class Button extends PureComponent {
    static propTypes = {
        value: propTypes.number.isRequired,
        nextMove: propTypes.func.isRequired,
        disabled: propTypes.bool.isRequired,
    };

    onClick = () => {
        const { value, nextMove } = this.props;
        nextMove(value);
    };

    render() {
        const { value, disabled } = this.props;
        return (
            <Fab onClick={this.onClick} color="primary" size="large" disabled={disabled}>
                <Typography variant="h6">{value}</Typography>
            </Fab>
        );
    }
}

const Footer = (props) => {
    const {
        who,
        game,
        classes,
        nextMove,
    } = props;

    let disabled;

    if (who === 'ping') {
        disabled = game.length % 2 === 1;
    } else {
        disabled = game.length % 2 === 0;
    }

    return (
        <Grid
            container
            direction="row"
            alignItems="center"
            justify="space-around"
            className={classes.root}
        >
            {[-1, 0, 1].map(item => (
                <Button
                    key={item}
                    value={item}
                    disabled={disabled}
                    nextMove={nextMove}
                />
            ))}
        </Grid>
    );
};

Footer.propTypes = {
    who: propTypes.string.isRequired,
    nextMove: propTypes.func.isRequired,
    classes: propTypes.shape({}).isRequired,
    game: propTypes.arrayOf(propTypes.shape({})).isRequired,
};

const styles = theme => ({
    root: {
        bottom: 0,
        height: 80,
        position: 'fixed',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        '& > button:disabled': {
            backgroundColor: theme.palette.primary.main,
            '& span h6': {
                color: '#9fdbf3',
            },
        },
    },
});

export default withStyles(styles)(Footer);
