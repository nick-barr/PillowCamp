import React from 'react';
import { withRouter, NavLink, Link } from 'react-router-dom';

class FilterBar extends React.Component{
    constructor(props){
        super(props)
        this.changeURL = this.changeURL.bind(this)
    }

    changeURL(url){
        // debugger
        // e.preventDefault();
        this.props.history.push(url);
    }

    render(){
    
        return(
            <div className='filter-bar-container'>
                <ul className='filter-bar-options'>
                    <li onClick={() => this.changeURL('/filter/all')}>
                        <p>All</p>
                    </li>

                    <li onClick={() => this.changeURL('/filter/south')}>
                        <p>South</p>
                    </li>

                    <li onClick={() => this.changeURL('/filter/northeast')}>
                        <p>Northeast</p>
                    </li>
    
                    <li onClick={() => this.changeURL('/filter/west')}>
                        <p>West</p>
                    </li>   

                    <li onClick={() => this.changeURL('/filter/campsite')}>
                        <p>Campgrounds</p>
                    </li>

                    <li onClick={() => this.changeURL('/filter/openfield')}>
                        <p>Wilderness</p>
                    </li>

                    <li onClick={() => this.changeURL('/filter/luxury')}>
                        <p>Fancy</p>
                    </li>

                </ul>
            </div>
        )
    }
}

export default withRouter(FilterBar);