import React from 'react';
import {Link, NavLink} from 'react-router-dom'

class SpotList extends React.Component{
    constructor(props){
        super(props);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }


    render(){
        return(
            <div className='spot-list-carousel'>
                <ul>
                    <li>
                        <NavLink to={'lists/widespaces'}>
                            <h2>Sceneic Sunsets</h2>
                            <img src={window.rvcamper} className="photo" id='3'/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'lists/cozycottages'}>
                            <h3>Cozy Cottages</h3>
                            <img src={window.treehousefancy} className="photo" id='1'/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'lists/bywater'}>
                            <h5>Serenity by Water</h5>
                            <img src={window.lake} className="photo" id='4'/>
                        </NavLink>
                    </li>   
                    {/* <li><Link to={'lists/starryskies'}>Starry Skies</Link></li>
                    <li><Link to={'lists/cozycottages'}>Cozy Cottages</Link></li>
                    <li><Link to={'lists/bywater'}>Serenity by Water</Link></li> */}
                </ul>
            </div>
        )
    }
}

export default SpotList;