import React from 'react';
import {Redirect, useHistory, Link} from 'react-router-dom'
import Map from '../maps/maps'
import { FaThumbsUp } from 'react-icons/fa'

class SpotIndex extends React.Component{
    constructor(props){
        super(props)
        this.state = { redirect: null };
        // this.state = { redirect: null, loading: true };

    }

    componentDidMount(){   
        window.scrollTo(0, 0);
        this.props.fetchSpots()
        // .then(() => {this.setState({ loading: false})})
    }

    render(){
        // debugger
        // if (this.state.redirect) {
        //     return <Redirect to={this.state.redirect} />
        // }
debugger
        return(
            // <Maps className='map-test2' />
            <div className='spot-index-grand-container'>
            <div className='spot-index-container'>
                <br />
                <ul className='spot-index-box'>
                    {this.props.spots.map((spot, i)=>(
                    <div className='left-set'>    
                        <Link to={`/spot/${spot.id}`}>
                        <li>
                            {/* <img className='spot-index-image' src={spot.photoUrl}/> */}
                            <img src={window.defaultspot} className='spot-index-image'/>
                            <div className='spot-index-stuff'>
                                <div className='main-info'>
                                    <p className='rating'><FaThumbsUp /> 100% recommended</p>
                                    <p className='title'>{spot.title}</p>
                                    <div className='index-lodging'>{spot.lodging.map(item => (
                                        <p>{item} ·&nbsp;</p>
                                    ))}</div>
                                </div>
                                <div className='cost'>
                                    <p className='price'>$ {spot.price}</p>
                                    <p className='night'> / night</p>
                                </div>
                            </div>
                        </li>
                        </Link>
                        <hr className='spotIndex-hr' />
                    </div>
                    ))}
                </ul>
                <Map spots={this.props.spots}/>
            </div>
            </div>
        )
    }
}

export default SpotIndex;