import React from 'react';
import propTypes from 'prop-types';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/icons/Send';
import { Field, reduxForm } from 'redux-form';
import { withStyles } from '@material-ui/core';

import { TextFieldComponent } from '.';

const validator = value => value > 18 ? undefined : 'value must be greater than 18';

const InvitationForm = (props) => {
    const {
        error,
        classes,
        pending,
        handleSubmit,
    } = props;
    return (
        <form onSubmit={handleSubmit} className={classes.container}>
            <Field
              autoFocus
              name="number"
              type="number"
              error={error}
              label="Number"
              disabled={pending}
              validate={validator}
              placeholder="Init Number"
              component={TextFieldComponent}
            />
            <Fab variant="extended" aria-label="invite" type="submit" disabled={pending}>
                {pending ? 'Pending' : 'Invite'}
                &nbsp;
                <Icon />
            </Fab>
        </form>
    );
};

InvitationForm.propTypes = {
    error: propTypes.bool,
    pending: propTypes.bool.isRequired,
    handleSubmit: propTypes.func.isRequired,
    classes: propTypes.shape({}).isRequired,
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
