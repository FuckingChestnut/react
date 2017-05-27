/* eslint-disable no-console */
import React from 'react';

import { Router, Route, hashHistory } from 'react-router';

import Frame from './Frame';
// import Main from '../pages/main/';
// import Login from '../pages/login/';

const handleChange = (...args) => {
    console.log(args);
};

const mainCreator = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../pages/main/index').default);
    }, 'main');
};

const loginCreator = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../pages/login/index').default);
    }, 'login');
};

const Routers = () => (
    <Router history={hashHistory}>
        <Route path="/" component={Frame} onChange={handleChange}>
            <Route path="main" getComponent={mainCreator} />
            <Route path="login" getComponent={loginCreator} />
        </Route>
    </Router>
);

export default Routers;
