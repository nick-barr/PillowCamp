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
                        <NavLink to={'lists/widespaces'}>
                       
                            <p id='sun'>Sceneic Sunsets</p>
                            <img src={window.rvcamper} className="photo-list"/>
                        </NavLink>
                        </div>
                    </li>
                    <li>
                        <div className='spot-list-card'>
                        <NavLink to={'lists/cozycottages'}>
                            <p id='cozy'>Cozy Cottages</p>
                            <img src={window.treehousefancy} className="photo-list"/>
                        </NavLink>
                        </div>
                    </li>
                    <li>
                        <div className='spot-list-card'>
                        <NavLink to={'lists/bywater'}>
                            <p id='water'>Serenity by Water</p>
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
                       
                            <p id='tweek'>Weekend Getaway</p>
                            <img src={window.dog} className="photo-list"/>
                        </NavLink>
                        </div>
                    </li>
                    <li>
                        <div className='spot-list-card'>
                        <NavLink to={'/search'}>
                        {/* <NavLink to={'search/nextweek'}> */}
                            <p id='nweek'>Next Weekend</p>
                            <img src={window.mist} className="photo-list"/>
                        </NavLink>
                        </div>
                    </li>
                    <li>
                        <div className='spot-list-card'>
                        <NavLink to={'/search'}>
                        {/* <NavLink to={'search/nextmonth'}> */}
                            <p id='tmonth'>This Season</p>
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