import React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { goBack } from 'connected-react-router';

const styles = {
    progress: {
        width: '100%',
        position: 'fixed',
        zIndex: 100000,
        top: 0,
    },
};

const PrimaryAppBar = (props) => {
    const {
        children,
        classes,
        general,
    } = props;
    return (
        <>
            {general && <LinearProgress className={classes.progress} />}
            {children}
        </>
    );
};

PrimaryAppBar.propTypes = {
    children: PropTypes.node.isRequired,
    classes: PropTypes.shape({}).isRequired,
    general: PropTypes.bool,
};

PrimaryAppBar.defaultProps = {
    general: false,
};

const StyledPrimaryAppBar = withStyles(styles)(PrimaryAppBar);
const mapStateToProps = () => ({});

export default connect(mapStateToProps, {
    goBackAction: goBack,
})(StyledPrimaryAppBar);
