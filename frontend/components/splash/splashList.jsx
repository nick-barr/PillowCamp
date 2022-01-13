import React from 'react';
import {Link, NavLink} from 'react-router-dom'

class SplashList extends React.Component{
    constructor(props){
        super(props);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

//maybe use div on click and href
    // <a href='#lists/widespaces'>
    //     <h2>Sceneic Sunsets</h2>
    //     <img src={window.rvcamper} className="photo-list" id='1'/>
    // </a>
    render(){
        return(
            <div className='spot-list-carousel'>
                <h5>Discover hidden gems</h5>
                <ul>
                    <li>
                        <div className='spot-list-card'>
                        <NavLink to={'lists/south-region'}>
                       
                            <p id='sun'>South</p>
                            <img src={window.rvcamper} className="photo-list"/>
                        </NavLink>
                        </div>
                    </li>
                    <li>
                        <div className='spot-list-card'>
                        <NavLink to={'lists/northeast-region'}>
                            <p id='cozy'>Northeast</p>
                            <img src={window.treehousefancy} className="photo-list"/>
                        </NavLink>
                        </div>
                    </li>
                    <li>
                        <div className='spot-list-card'>
                        <NavLink to={'lists/west-region'}>
                            <p id='water'>West</p>
                            <img src={window.lake} className="photo-list"/>
                        </NavLink>
                        </div>
                    </li>   
                </ul>

                <h5>Find your next getaway</h5>
                <ul>
                    <li>
                        <div className='spot-list-card'>
                        <NavLink to={'/search'}>
                        {/* <NavLink to={'search/weekend'}> */}
                       
                            <p id='tweek'>Campgrounds</p>
                            <img src={window.dog} className="photo-list"/>
                        </NavLink>
                        </div>
                    </li>
                    <li>
                        <div className='spot-list-card'>
                        <NavLink to={'/search'}>
                        {/* <NavLink to={'search/nextweek'}> */}
                            <p id='nweek'>Wilderness</p>
                            <img src={window.mist} className="photo-list"/>
                        </NavLink>
                        </div>
                    </li>
                    <li>
                        <div className='spot-list-card'>
                        <NavLink to={'/search'}>
                        {/* <NavLink to={'search/nextmonth'}> */}
                            <p id='tmonth'>Fancy</p>
                            <img src={window.tent} className="photo-list"/>
                        </NavLink>
                        </div>
                    </li>   
                </ul>
            </div>
        )
    }
}

export default SplashList;