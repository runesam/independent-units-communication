import React, { PureComponent } from 'react';
import propTypes from 'prop-types';

import { ConnectedRouter } from 'connected-react-router';
import { Provider as StateManagerProvider } from 'react-redux';

import { loginSuccess } from '../actions';
import Layout from './layout';
import Theme from './theme';

const { getJSON } = require('js-cookie');

class Provider extends PureComponent {
    componentWillMount() {
        const auth = getJSON('auth');
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
                        <Layout>
                            {children}
                        </Layout>
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
