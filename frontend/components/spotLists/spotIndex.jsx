import React from 'react';
import {Redirect, useHistory} from 'react-router-dom'

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
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }

        return(
            <div>
                <br />
                <ul className='spot-index-box'>
                    {this.props.spots.map(spot=>(
                        <li onClick={() => this.setState({redirect: '/login'})}>
                            <img className='spot-index-image' src={spot.photoUrl}/>
                            <p>{spot.title}</p>
                            <p>{spot.description}</p>
                            <p>{spot.details}</p>
                            <p>{spot.latitude}</p>
                            <p>{spot.longitude}</p>
                            <p>{spot.lodging}</p>
                            <p>{spot.essentials}</p>
                            <p>{spot.amenities}</p>
                            <p>{spot.latitude}</p>
                            <p>{spot.longitude}</p>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default SpotIndex;