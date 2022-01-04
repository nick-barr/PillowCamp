import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as SessionAPI from './util/session_util'
import * as SessionActions from './actions/session_actions'
import mSTP from './components/userAuth/authbar_container'

document.addEventListener("DOMContentLoaded", () => {
    
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

    ReactDOM.render(<Root store={store} />, root)
});