import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as SessionAPI from './util/session_util'
import * as SessionActions from './actions/session_actions'

document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();
    const root = document.getElementById('root')
    window.store = store
    window.login = SessionAPI.login
    window.logout = SessionAPI.logout
    window.signup = SessionAPI.signup
    window.loginthunk = SessionActions.login
    window.logoutthunk = SessionActions.logout
    window.signupthunk = SessionActions.signup
    ReactDOM.render(<Root store={store} />, root)
})