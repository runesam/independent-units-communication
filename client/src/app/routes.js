import React from 'react';
import { Router, Switch } from 'react-router-dom';

import { history } from '../middleware';

import { Game, Players, Login } from '../pages';

import { PrivateRoute, PublicRoute } from '../containers';

export default () => (
    <Router history={history}>
        <Switch>
            <PublicRoute path="/login" component={Login} />
            <PrivateRoute exact path="/" component={Players} />
            <PrivateRoute exact path="/game" component={Game} />
        </Switch>
    </Router>
);
