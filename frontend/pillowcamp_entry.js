import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as SessionAPI from './util/session_util'
import * as SessionActions from './actions/session_actions'
import * as SpotActions from './actions/spot_actions'

document.addEventListener("DOMContentLoaded", () => {
    
    window.login = SessionAPI.login
    window.logout = SessionAPI.logout
    window.signup = SessionAPI.signup
    
    window.login = SessionActions.login
    window.logout = SessionActions.logout
    window.signupthunk = SessionActions.signup
    
    window.spots = SpotActions.fetchSpots
    window.spot = SpotActions.fetchSpot
    
    
    // window.mSTP = mSTP
    
    const root = document.getElementById('root')
    
    let store;
    
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    };
    
    window.dispatch = store.dispatch
    window.getState = store.getState
    
    ReactDOM.render(<Root store={store} />, root)
});