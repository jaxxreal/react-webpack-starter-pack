import * as ActionTypes from './actionTypes';
import { currency } from '../../resources';

export const setRate = (payload) => ({
    type: ActionTypes.SET_RATE,
    payload,
});

export const loadRate = (base) => async (dispatch) => {
    const { data } = await (base ? currency.getCustomBase(base) : currency.getUSDBase());
    dispatch(setRate(data));
};
