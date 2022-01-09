import React from 'react';
import {Redirect, useHistory} from 'react-router-dom'
import Maps from '../maps/maps'

class SpotIndex extends React.Component{
    constructor(props){
        super(props)
        this.showSpotPage = this.showSpotPage.bind(this);
        this.state = { redirect: null };

    }

    componentDidMount(){   
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
            <div className='spot-index-container'>
                <br />
                <ul className='spot-index-box'>
                    {this.props.spots.map(spot=>(
                        <li onClick={() => this.setState({redirect: '/login'})}>
                            {/* <img className='spot-index-image' src={spot.photoUrl}/> */}
                            <img src={window.defaultspot} className='spot-index-image'/>
                            <div className='spot-index-stuff'>
                                <p>{spot.id}</p>
                                <p>{spot.title}</p>
                                <p><b>$ {spot.price}</b> / night</p>
                            </div>
                        </li>
                    ))}
                </ul>
                <Maps />
            </div>
        )
    }
}

export default SpotIndex;