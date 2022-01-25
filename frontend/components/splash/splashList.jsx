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
                <h5>Discover hidden gems by region</h5>
                <ul>
                    <li>
                        <div className='spot-list-card'>
                        <NavLink activeClassName="active" to={'filter/south'}>
                       
                            <p id='sun'>South</p>
                            <img src={window.rvcamper} className="photo-list"/>
                        </NavLink>
                        </div>
                    </li>
                    <li>
                        <div className='spot-list-card'>
                        <NavLink activeClassName="active" to={'filter/northeast'}>
                            <p id='cozy'>Northeast</p>
                            <img src={window.treehousefancy} className="photo-list"/>
                        </NavLink>
                        </div>
                    </li>
                    <li>
                        <div className='spot-list-card'>
                        <NavLink activeClassName="active" to={'filter/west'}>
                            <p id='water'>West</p>
                            <img src={window.lake} className="photo-list"/>
                        </NavLink>
                        </div>
                    </li>   
                </ul>

                <h5>Find experiences right for you</h5>
                <ul>
                    <li>
                        <div className='spot-list-card'>
                        <NavLink activeClassName="active" to={'filter/campsite'}>
                        {/* <NavLink to={'search/weekend'}> */}
                       
                            <p id='tweek'>Campgrounds</p>
                            <img src={window.dog} className="photo-list"/>
                        </NavLink>
                        </div>
                    </li>
                    <li>
                        <div className='spot-list-card'>
                        <NavLink activeClassName="active" to={'filter/openfield'}>
                        {/* <NavLink to={'search/nextweek'}> */}
                            <p id='nweek'>Wilderness</p>
                            <img src={window.mist} className="photo-list"/>
                        </NavLink>
                        </div>
                    </li>
                    <li>
                        <div className='spot-list-card'>
                        <NavLink activeClassName="active" to={'filter/luxury'}>
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