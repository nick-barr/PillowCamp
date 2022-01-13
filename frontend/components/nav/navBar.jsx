import React from 'react';
import {withRouter, NavLink} from 'react-router-dom';
import SearchBarContainer from '../searchBar/searchBar_container';
import AuthBarContainer from '../userAuth/authbar_container';

class NavBar extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        if (this.props.location.pathname === '/') {
            return(
                <div className='super-nav'>
                    <div className="nav-bar">
                        <div className='logo'>
                            <NavLink to='/'><img src={window.logo} className="logo" /></NavLink>
                        </div>
                        
                        <div className='auth-bar'>
                            <AuthBarContainer />
                        </div>
                    </div>
                </div>
                )

        } else {
            return(
            // <div class='super-nav'>
            <div className="nav-bar">
                <div className='logo'>  
                    <NavLink to='/'><img src={window.logo} className="logo" /></NavLink>
                </div>
                
                <div className='search-bar-2'>
                    {/* <SearchBarContainer /> */}
                    {/* Add a new search bar */}
                </div>
                
                <div className='auth-bar'>
                    <AuthBarContainer />
                </div>
            </div>
            // </div>
            )
        }
    }
}

export default withRouter(NavBar);