import React, { PureComponent } from 'react';
import propTypes from 'prop-types';
import Cookies from 'js-cookie';

import { ConnectedRouter } from 'connected-react-router';
import { Provider as StateManagerProvider } from 'react-redux';

import { loginSuccess } from '../actions';
import Theme from './theme';

class Provider extends PureComponent {
    componentWillMount() {
        const auth = Cookies.getJSON('auth');
        const { store } = this.props;
        if (auth && auth.token) {
            store.dispatch(loginSuccess({ data: auth }));
        }
    }

    render() {
        const { children, store, history } = this.props;
        return (
            <StateManagerProvider store={store}>
                <Theme>
                    <ConnectedRouter history={history}>
                        {children}
                    </ConnectedRouter>
                </Theme>
            </StateManagerProvider>
        );
    }
}

Provider.propTypes = {
    children: propTypes.node,
    store: propTypes.shape({}).isRequired,
    history: propTypes.shape({}).isRequired,
};

Provider.defaultProps = {
    children: propTypes.node,
};

export default Provider;
