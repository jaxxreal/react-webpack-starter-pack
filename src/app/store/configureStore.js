import { createStore, compose, applyMiddleware } from 'redux';
import browserHistory from 'react-router/lib/browserHistory';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

const configureStore = () => (
    compose(applyMiddleware(
        routerMiddleware(browserHistory),
        thunk
    ))(createStore)(rootReducer)
);

export default configureStore;
