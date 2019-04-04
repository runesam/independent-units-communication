import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { reduxForm } from 'redux-form';

import { FieldsListComponent } from '../../../components';
import loginFields from '../../../model/loginDefinition';

class LoginFormComponent extends PureComponent {
    render() {
        const {
            handleSubmit,
            error,
        } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <Typography variant="h6" align="center">
                    <span>Independent Units Login</span>
                </Typography>
                <FieldsListComponent fields={loginFields} xs={12} />
                <br />
                <Button
                    type="submit"
                    color="inherit"
                    variant="contained"
                    data-qa="login-submit"
                    onClick={handleSubmit}
                >
                    <span>Login</span>
                </Button>
                {Boolean(error) && (
                    <>
                        <br />
                        <br />
                        <Typography variant="button" data-qa="login-error-message" color="error" align="center">{error}</Typography>
                    </>
                )}
            </form>
        );
    }
}

LoginFormComponent.propTypes = {
    error: PropTypes.string,
    handleSubmit: PropTypes.func.isRequired,
};

LoginFormComponent.defaultProps = {
    error: '',
};

export default reduxForm({
    form: 'login',
    enableReinitialize: true,
})(LoginFormComponent);
