import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import { login } from '../../actions';

import { LoginComponent } from './components';

class Login extends PureComponent {
    static propTypes = {
        loginAction: propTypes.func.isRequired,
    };

    handleSubmit = (username, password) => {
        const { loginAction } = this.props;
        loginAction(username, password);
    };

    render() {
        return <LoginComponent handleSubmit={this.handleSubmit} />;
    }
}

const mapStateToProps = ({ user, promises }) => ({ user, promises });

export default connect(mapStateToProps, {
    loginAction: login,
})(Login);
