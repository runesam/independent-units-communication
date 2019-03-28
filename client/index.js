import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import RootContainer from './src/app/index';

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('app'),
    );
};

render(RootContainer);

if (module.hot) {
    module.hot.accept('./src/app/index.js', () => {
        /* eslint-disable-next-line */
        const NextRootContainer = require('./src/app/index').default;
        render(NextRootContainer);
    });
}
