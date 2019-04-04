import { applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

import mainMiddleware from './main.middleware';
import userMiddleware from './user.middleware';

export const history = createBrowserHistory();
const middleware = [
    mainMiddleware,
    userMiddleware,
    routerMiddleware(history),
];

export default applyMiddleware(...middleware);
