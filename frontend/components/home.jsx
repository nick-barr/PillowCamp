import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';

import AuthBar from './userAuth/authbar'
import loginContainer from './userAuth/login_container'
import signupContainer from './userAuth/signup_container'

const Home = () => {
    return(
        <div>
            <header>
                <Link to='/'>PILLOWCAMP</Link>
                <AuthBar />    
            </header>

            <div>
                <p>Search component</p>    
                <p>Splash text</p>    
                <p>Recommended lists</p>    
                <p>Recommended searches</p>    
            </div>
        </div>
    )
}

export default Home; 

//there's a home header, a head nav  (login signupbar,
//motivational text in the middle. A picture.
//a search bar
//3 pre determined searches by category
//3 pre determined searched by time

