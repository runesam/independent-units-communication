import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { history } from 'middleware';
import rootReducer from 'reducers';

const defaultStore = createStore(
    rootReducer(history),
);

const TestProvider = ({ children, store }) => (
    <Provider history={history} store={store}>
        {children}
    </Provider>
);

TestProvider.propTypes = {
    children: PropTypes.node.isRequired,
    store: PropTypes.shape({}),
};

TestProvider.defaultProps = {
    store: defaultStore,
};

export default TestProvider;
