import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';

import LoginSignup from './userAuth/login_signup'

const Home = () => {
    return(
        <div>
            <header>
                <Link to='/'>PILLOWCAMP</Link>
                <LoginSignup />    
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

