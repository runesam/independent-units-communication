import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { connectRouter } from 'connected-react-router';

import game from './game.reducer';
import user from './user.reducer';
import invite from './invite.reducer';
import players from './players.reducer';
import invitation from './invitation.reducer';

const allReducers = history => combineReducers({
    form,
    user,
    game,
    invite,
    players,
    invitation,
    router: connectRouter(history),
});

export default history => (state, action) => {
    let newState = { ...state };
    if (action.type === 'LOGOUT_SUCCESS') {
        newState = undefined;
    }
    return allReducers(history)(newState, action);
};
