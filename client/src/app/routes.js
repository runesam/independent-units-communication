import React from 'react';
import {
    Switch,
    Router,
} from 'react-router-dom';

import { history } from '../middleware';

import {
    Players,
    Game,
} from '../pages';

import {
    // PrivateRoute,
    PublicRoute,
} from '../containers';

export default () => (
    <Router history={history}>
        <Switch>
            {/* <PublicRoute path="/login" component={Login} /> */}
            <PublicRoute exact path="/" component={Players} />
            <PublicRoute exact path="/game" component={Game} />
        </Switch>
    </Router>
);
