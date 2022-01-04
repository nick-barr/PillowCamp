import React from 'react';
import {Link} from 'react-router-dom'

class SpotList extends React.Component{
    constructor(props){
        super(props);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }


    render(){
        return(
            <div className='spot-list-carousel'>
                <ul>
                    <li><Link to={'lists/starryskies'}>Starry Skies</Link></li>
                    <li><Link to={'lists/cozycottages'}>Cozy Cottages</Link></li>
                    <li value={'lists/starryskies'}>Whateva</li>
                </ul>
            </div>
        )
    }
}

export default SpotList;