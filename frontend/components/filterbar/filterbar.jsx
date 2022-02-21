import React from 'react';
import { withRouter, NavLink, Link } from 'react-router-dom';

class FilterBar extends React.Component{
    constructor(props){
        super(props)
        // this.changeURL = this.changeURL.bind(this)
    }

    // changeURL(url){
        // debugger
        // e.preventDefault();
        // this.props.history.push(url);
    // }

    render(){
    
        return(
            <div className='filter-bar-container'>
                <ul className='filter-bar-options'>
                    <li><NavLink activeClassName='filterBar-active'to='/filter/all'>
                        All
                    </NavLink></li>

                    <li><NavLink activeClassName='filterBar-active'to='/filter/south'>
                        South
                    </NavLink></li>

                    <li><NavLink activeClassName='filterBar-active'to='/filter/northeast'>
                        Northeast
                    </NavLink></li>
    
                    <li><NavLink activeClassName='filterBar-active'to='/filter/west'>
                        West
                    </NavLink></li>

                    <li><NavLink activeClassName='filterBar-active'to='/filter/campsite'>
                        Campgrounds
                    </NavLink></li>

                    <li><NavLink activeClassName='filterBar-active'to='/filter/openfield'>
                        Wilderness
                    </NavLink></li>

                    <li><NavLink activeClassName='filterBar-active'to='/filter/luxury'>
                        Fancy
                    </NavLink></li>

                    <li><NavLink activeClassName='filterBar-active'to='/filter/search'>
                        Search
                    </NavLink></li>

                </ul>
            </div>
        )
    }
}

export default withRouter(FilterBar);