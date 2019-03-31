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
    };

    onClick = () => {
        const { value, nextMove } = this.props;
        nextMove(value);
    };

    render() {
        const { value } = this.props;
        return (
            <Fab onClick={this.onClick} color="primary" size="large">
                <Typography variant="h6">{value}</Typography>
            </Fab>
        );
    }
}

const Footer = ({ classes, nextMove }) => (
    <Grid
        container
        direction="row"
        alignItems="center"
        justify="space-around"
        className={classes.root}
    >
        {[-1, 0, 1].map(item => <Button key={item} value={item} nextMove={nextMove} />)}
    </Grid>
);

Footer.propTypes = {
    nextMove: propTypes.func.isRequired,
    classes: propTypes.shape({}).isRequired,
};

const styles = () => ({
    root: {
        bottom: 0,
        height: 80,
        position: 'fixed',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
    },
});

export default withStyles(styles)(Footer);
