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
        console.log("test");
    }

    render(){
    
        return(
            <div className='filter-bar-container'>
                <ul >
                    <li onClick={() => this.changeURL('/filter/all')}>
                        <p id='sun'>All</p>
                    </li>

                    <li onClick={() => this.changeURL('/filter/south')}>
                        <p id='sun'>South</p>
                    </li>

                    <li onClick={() => this.changeURL('/filter/northeast')}>
                        <p id='cozy'>Northeast</p>
                    </li>
    
                    <li onClick={() => this.changeURL('/filter/west')}>
                        <p id='water'>West</p>
                    </li>   

                    <li onClick={() => this.changeURL('/filter/campsite')}>
                        <p id='tweek'>Campgrounds</p>
                    </li>

                    <li onClick={() => this.changeURL('/filter/openfield')}>
                        <p id='nweek'>Wilderness</p>
                    </li>

                    <li onClick={() => this.changeURL('/filter/luxury')}>
                        <p id='tmonth'>Fancy</p>
                    </li>

                </ul>
            </div>
        )
    }
}

export default withRouter(FilterBar);