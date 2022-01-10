import React from 'react';
import {Redirect, useHistory} from 'react-router-dom'
import Maps from '../maps/maps'
import { FaThumbsUp } from 'react-icons/fa'
// import { FaArrowAltCircleRight } from 'react-icons/fa'
import { FaSwimmer } from 'react-icons/fa'

class SpotIndex extends React.Component{
    constructor(props){
        super(props)
        this.showSpotPage = this.showSpotPage.bind(this);
        this.state = { redirect: null };

    }

    componentDidMount(){   
        window.scrollTo(0, 0);
        this.props.fetchSpots()
    }

    showSpotPage() {
        // console.log("hello")
        // return <Redirect to="/" />
        // <Redirect to="/login" />
        // this.props.history.push("/")
        history.push('/')
    }



    render(){
        // debugger
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
// debugger
        return(
            <div className='spot-index-grand-container'>
            <div className='spot-index-container'>
                <br />
                <ul className='spot-index-box'>
                    {this.props.spots.map(spot=>(
                        <div>
                        
                        <li onClick={() => this.setState({redirect: `/spot/${spot.id}`})}>
                            {/* <img className='spot-index-image' src={spot.photoUrl}/> */}
                            <img src={window.defaultspot} className='spot-index-image'/>
                            <div className='spot-index-stuff'>
                                <div className='main-info'>
                                    <p className='rating'><FaThumbsUp /> 100% recommended</p>
                                    <p className='title'>{spot.title}</p>
                                </div>
                                <div className='cost'>
                                    <p className='price'>$ {spot.price}</p>
                                    <p className='night'> / night</p>
                                </div>
                            </div>
                        </li>
                        
                        <hr className='spotIndex-hr' />
                        </div>
                    ))}
                </ul>
                <Maps />
            </div>
            </div>
        )
    }
}

export default SpotIndex;