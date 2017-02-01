import { LOCATION_CHANGE } from 'react-router-redux';
import { fromJS } from 'immutable';

const INITIAL_STATE = fromJS({
    locationBeforeTransitions: null,
});

const RouteReducer = (state = INITIAL_STATE, action = { type: null, payload: null }) => {
    switch (action.type) {
        case LOCATION_CHANGE:
            return state.set('locationBeforeTransitions', action.payload);
        default:
            return state;
    }
};

export default RouteReducer;
