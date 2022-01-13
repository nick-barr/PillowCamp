import React from 'react';
import {Redirect, useHistory, Link} from 'react-router-dom'
import Map from '../maps/maps'
import Map2 from '../maps/map2'
import { FaThumbsUp } from 'react-icons/fa'
import Filterbar from '../filterbar/filterbar';



class SpotIndex extends React.Component{
    constructor(props){
        super(props)
        this.state = { redirect: null };
        this.state = { redirect: null, loading: true };
    }
    

    componentDidUpdate(){
        this.setState = {loading: false}
    }

    componentDidMount(){   
        window.scrollTo(0, 0);
        this.props.fetchSpots()
        // .then(() => {this.setState({ loading: false})})
    }

    render(){
        // if (this.state.redirect) {
        //     return <Redirect to={this.state.redirect} />
        // }
        let filteredSpots = []
        let options = this.props.match.params.filter
        if (options === 'all') {
            filteredSpots = this.props.spots
        } else if (this.props.spots.length !== 0) {        
            filteredSpots = this.props.spots.filter(spot => 
                spot.region === options ||
                spot.sitetype === options)
        }

        options = this.props.match.params.filter
            
        return(
            // <Maps className='map-test2' />
            <div className='spot-index-grand-container'>
                <Filterbar />
            <div className='spot-index-container'>
                <br />
                <ul className='spot-index-box'>
                    {filteredSpots.map((spot)=>(
                    <div className='left-set'>    
                        <Link to={`/spot/${spot.id}`}>
                        <li>
                            {/* <img className='spot-index-image' src={spot.photoUrl}/> */}
                            <img src={window.defaultspot} className='spot-index-image'/>
                            <div className='spot-index-stuff'>
                                <div className='main-info'>
                                    <p className='rating'><FaThumbsUp /> 100% recommended</p>
                                    <p className='title'>{spot.title}</p>
                                    <p className='index-lodging'>{spot.details}</p>
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
                {/* <Map spots={filteredSpots} options={options}/> */}
                <Map2 spots={filteredSpots} options={options}/>
            </div>
            </div>
        )
    }
}

export default SpotIndex;