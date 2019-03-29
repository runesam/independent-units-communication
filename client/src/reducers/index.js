import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import players from './players.reducer';
// import promises from './promisesReducer';

const allReducers = history => combineReducers({
    form,
    players,
    // dashboardUser,
    router: connectRouter(history),
});

export default history => (state, action) => {
    let newState = { ...state };
    if (action.type === 'LOGOUT_SUCCESS') {
        newState = undefined;
    }
    return allReducers(history)(newState, action);
};
