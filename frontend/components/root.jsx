import React from 'react';
import {Provider} from 'react-redux';
import {HashRouter} from 'react-router-dom';

import Home from './home'

const Root = ({store}) => (
    <Provider store={store}>
        <HashRouter>
            <Home store={store}/>
        </HashRouter>
    </Provider>
);

export default Root;