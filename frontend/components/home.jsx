import React from 'react';
import {Route, Switch, Link, NavLink} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util'

import NavBar from './nav/navBar_container'

import loginContainer from './userAuth/login_container'
import signupContainer from './userAuth/signup_container'
import SpotDetail from './spotLists/spotDetail';
import spotIndex_container from './spotLists/spotIndex_container';
import spotShow_container from './spotLists/spotShow_container'
import splashContainer from './splash/splash_container'
import testmap from './maps/testmap';

import Footer from './footer/footer'

import SpotListContainer from './splash/splashList_container';

const Home = () => {
    return(
        <div>   
            <header>
                <Route path="/" component={NavBar} />
            </header>
                <Switch>
                    <AuthRoute exact path="/login" component={loginContainer} />
                    <AuthRoute exact path="/signup" component={signupContainer} />
                    <Route path="/lists/widespaces" component={SpotDetail} />
                    <Route path="/lists/cozycottages" component={SpotDetail} />
                    <Route path="/lists/bywater" component={SpotDetail} />
                    <Route path="/search" component={spotIndex_container} />
                    <Route path="/spot/:spotId" component={spotShow_container} />
                    <Route path="/tm" component={testmap} />
                    <Route exact path="/" component={splashContainer} />
                </Switch>

            <footer>
                <Footer />
            </footer>

        </div>
    )
}

export default Home;