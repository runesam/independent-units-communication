import { applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

import dashboardUserMiddleware from './main.middleware';

export const history = createBrowserHistory();
const middleware = [
    routerMiddleware(history),
    dashboardUserMiddleware,
];

export default applyMiddleware(...middleware);
