import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';

import AuthBarContainer from './userAuth/authbar_container'
import loginContainer from './userAuth/login_container'
import signupContainer from './userAuth/signup_container'
import {AuthRoute, ProtectedRoute} from '../util/route_util'
import SearchBarContainer from './searchBar/searchBar_container';
import SpotListContainer from './spotLists/spotList_container';

const Home = () => {
    return(
        <div>
            <header>
                <Link to='/'>PILLOWCAMP</Link>
                <AuthBarContainer />  
                <SearchBarContainer />  
                <SpotListContainer />  
            </header>

                <Switch>
                    <AuthRoute exact path="/login" component={loginContainer} />
                    <AuthRoute exact path="/signup" component={signupContainer} />
                </Switch>


            <div>
                <p>Splash text</p>    
                <p>Recommended lists</p>    
                <p>Recommended searches</p>    
            </div>
        </div>
    )
}

export default Home;