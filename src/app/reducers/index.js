import { combineReducers } from 'redux-immutable';

import routing from './routeReducer';
import { reducer as counter } from '../containers/Counter';
import { reducer as exchanger } from '../containers/Exchanger';

const rootReducer = combineReducers({
    routing,
    counter,
    exchanger
    // add here other reducers
});

export default rootReducer;
