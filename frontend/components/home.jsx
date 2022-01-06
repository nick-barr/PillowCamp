import React from 'react';
import {Route, Switch, Link, NavLink} from 'react-router-dom';

import AuthBarContainer from './userAuth/authbar_container'
import loginContainer from './userAuth/login_container'
import signupContainer from './userAuth/signup_container'
import {AuthRoute, ProtectedRoute} from '../util/route_util'
import SearchBarContainer from './searchBar/searchBar_container';
import SpotListContainer from './spotLists/spotList_container';
import SpotDetail from './spotLists/spotDetail';
import splashContainer from './splash/splash_container'
import NavBar from './nav/navBar_container'

const Home = () => {
    return(
        <div>   
            <header>
                <Route path="/" component={NavBar} />
            </header>
                <Switch>
                    <AuthRoute exact path="/login" component={loginContainer} />
                    <AuthRoute exact path="/signup" component={signupContainer} />
                    <Route path="/lists/starryskies" component={SpotDetail} />
                    <Route path="/lists/cozycottages" component={SpotDetail} />
                    <Route path="/lists/bywater" component={SpotDetail} />
                    <Route exact path="/" component={splashContainer} />
                </Switch>

        </div>
    )
}

export default Home;