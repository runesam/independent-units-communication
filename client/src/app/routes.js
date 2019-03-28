import React from 'react';
import {
    Switch,
    Router,
} from 'react-router-dom';

import { history } from '../middleware';

import Players from '../pages/players';

import {
    PrivateRoute,
    PublicRoute,
} from '../containers';

console.log(PrivateRoute);

export default () => (
    <Router history={history}>
        <Switch>
            {/* <PublicRoute path="/login" component={Login} /> */}
            <PublicRoute exact path="*" component={Players} />
        </Switch>
    </Router>
);
