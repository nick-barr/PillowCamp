import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as SessionAPI from './util/session_util'
import * as SessionActions from './actions/session_actions'
import mSTP from './components/userAuth/authbar_container'

document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();
    const root = document.getElementById('root')
    
    // window.store = store
    // window.login = SessionAPI.login
    // window.logout = SessionAPI.logout
    // window.signup = SessionAPI.signup
    // window.login = SessionActions.login
    // window.logout = SessionActions.logout
    // window.signupthunk = SessionActions.signup
    // window.dispatch = store.dispatch
    // window.getState = store.getState
    // window.mSTP = mSTP

    ReactDOM.render(<Root store={store} />, root)
})