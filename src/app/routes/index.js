import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { APP_ROOT } from '../config';

import { Counter } from '../containers/Counter';
import { Exchanger } from '../containers/Exchanger';
import AppWrapper from '../components/AppWrapper';
import MainPage from '../components/MainPage';

export const Routes = ({ history }) => (
    <Router key={ Math.random() } history={ history }>
        <Route path={ APP_ROOT } component={ AppWrapper }>
            <IndexRoute component={ MainPage }/>
            <Route path="counter" component={ Counter }/>
            <Route path="exchanger" component={ Exchanger }/>
        </Route>
    </Router>
);

Routes.propTypes = {
    history: PropTypes.shape({}).isRequired
};
