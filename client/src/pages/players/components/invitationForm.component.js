import React from 'react';
import propTypes from 'prop-types';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/icons/Send';
import { Field, reduxForm } from 'redux-form';
import { withStyles } from '@material-ui/core';

import { TextFieldComponent } from '.';

const validator = value => value > 18 ? undefined : 'value must be greater than 18';

const InvitationForm = (props) => {
    const { handleSubmit, error, classes } = props;
    return (
        <form onSubmit={handleSubmit} className={classes.container}>
            <Field
              autoFocus
              name="number"
              type="number"
              error={error}
              label="Number"
              component={TextFieldComponent}
              placeholder="Init Number"
              validate={validator}
            />
            <Fab variant="extended" aria-label="invite" type="submit">
                <Icon />
                Invite
            </Fab>
        </form>
    );
};

InvitationForm.propTypes = {
    handleSubmit: propTypes.func.isRequired,
    classes: propTypes.shape({}).isRequired,
    error: propTypes.bool,
};

InvitationForm.defaultProps = {
    error: false,
};

const styles = () => ({
    container: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});

const StyledForm = withStyles(styles)(InvitationForm);

export default reduxForm({
    form: 'invitation',
    enableReinitialize: true,
})(StyledForm);
