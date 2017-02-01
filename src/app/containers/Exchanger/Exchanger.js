import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ExchangeActionCreators from './actions';

export function Exchanger(props) {
    return (
        <div>
            Current base { props.base }
            <ul>
                { Object.keys(props.rates).map((base) => (
                    <li key={ base }>{base} - {props.rates[base]}</li>
                ))}
            </ul>
            <button onClick={ () => props.loadRate() }>Load latest rate</button>
        </div>
    );
}

Exchanger.propTypes = {
    base: PropTypes.string.isRequired,
    rates: PropTypes.shape({}).isRequired,
    loadRate: PropTypes.func.isRequired,
};

export default connect(
    state => state.get('exchanger').toJS(),
    dispatch => bindActionCreators(ExchangeActionCreators, dispatch),
)(Exchanger);
