import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Icon from '../../components/Icon';

// icons
import upArrow from '../../../assets/icons/up-arrow.svg';
import downArrow from '../../../assets/icons/down-arrow.svg';

import { increment, decrement } from './actions';

function CounterPage({ value, doIncrement, doDecrement }) {
    return (
        <div>
            <h1>Check that counter: { value }</h1>
            <button
                onClick={ doIncrement }
            >
                <Icon glyph={ upArrow }/> increment
            </button>
            {' '}
            <button
                onClick={ doDecrement }
            >
                <Icon glyph={ downArrow }/> decrement
            </button>
        </div>
    );
}

CounterPage.propTypes = {
    value: PropTypes.number.isRequired,
    doIncrement: PropTypes.func.isRequired,
    doDecrement: PropTypes.func.isRequired,
};

export default connect(
    // mapStateToProps
    state => ({
        value: state.getIn(['counter', 'value']),
    }),
    // mapDispatchToProps
    dispatch => ({
        doIncrement: () => dispatch(increment()),
        doDecrement: () => dispatch(decrement()),
    }),
)(CounterPage);
