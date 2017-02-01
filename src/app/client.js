import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import browserHistory from 'react-router/lib/browserHistory';
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from './store/configureStore';
import { Routes } from './routes';

import configureHttpService from './http';

// app styles
import '../assets/styles/index.less';

const store = configureStore();

configureHttpService(store);

const history = syncHistoryWithStore(browserHistory, store, {
    selectLocationState(state) {
        return state.get('routing').toJS();
    },
});

render((
    <Provider store={ store }>
        <Routes store={ store } history={ history }/>
    </Provider>
), document.getElementById('root'));
