import { fromJS } from 'immutable';
import * as ActionTypes from './actionTypes';

const INITIAL_STATE = fromJS({
    value: 0,
});

export default function reducer(state = INITIAL_STATE, action = { type: null, payload: null }) {
    switch (action.type) {
        case ActionTypes.INCREMENT:
            return state.set('value', state.get('value') + 1);
        case ActionTypes.DECREMENT:
            return state.set('value', state.get('value') - 1);
        default:
            return state;
    }
}
