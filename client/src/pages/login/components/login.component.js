import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { LoginFormComponent, LoginFormWrapperComponent } from '.';

class LoginComponent extends PureComponent {
    handleSubmit = ({ username, password }) => {
        const { handleSubmit } = this.props;
        return handleSubmit(username, password);
    };

    render() {
        return (
            <LoginFormWrapperComponent>
                <LoginFormComponent
                    onSubmit={this.handleSubmit}
                />
            </LoginFormWrapperComponent>
        );
    }
}

LoginComponent.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
};

export default LoginComponent;
