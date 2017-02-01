import { fromJS } from 'immutable';
import * as ActionTypes from './actionTypes';

const INITIAL_STATE = fromJS({
    base: 'USD',
    date: '',
    rates: {},
});

export default function reducer(state = INITIAL_STATE, action = { type: null, payload: null }) {
    switch (action.type) {
        case ActionTypes.SET_RATE: {
            const { base, date, rates } = action.payload;
            return state
                .set('base', base)
                .set('date', date)
                .set('rates', rates);
        }
        default:
            return state;
    }
}
