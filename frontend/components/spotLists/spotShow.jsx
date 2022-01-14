import React from 'react';
import ReservationForm from '../reservation/reservation_container'
import Reviews from '../reviews/reviews'
import Map from '../maps/maps'
import {FaCampground, FaPeopleCarry, FaWalking,
    FaFire, FaToiletPaper, FaDog,
    FaFaucet, FaToilet, FaShower } from 'react-icons/fa'


class SpotShow extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            loading: true
        }
    }

    componentDidMount(){
        this.props.fetchSpot(this.props.match.params.spotId)
        .then(() => {this.setState({ loading: false})})
        // debugger
    }
    
    render() {
        // debugger
        if (this.state.loading) return (<h1> Loading </h1>);

        return(
            <div>
                    
                <div className='show-page'>
                    <div className='show-photos'>
                        {/* <img src={window.defaultspot} className='spot-show-image'/>
                        <img src={window.defaultspot} className='spot-show-image'/>
                        <img src={window.defaultspot} className='spot-show-image'/> */}

                        <img src={this.props.spot.photoUrl} className='spot-show-image'/>
                    </div>

                    <div className='show-box'>
                        <div className='show-container'>
                            <div className='show-details'>
                                <p>{this.props.spot.details}</p>
                                <p className='title'>{this.props.spot.title}</p>
                                <hr />
                                <p className='description'>{this.props.spot.description}</p>
                                <div className='show-offers'>
                                    <div className='show-offers-boxes'>
                                        <h1>Campsite Area</h1>
                                            <p><FaCampground/> &nbsp; Nature home</p>
                                            <p><FaPeopleCarry/> &nbsp; Up to 4 guests</p>
                                            <p><FaWalking /> &nbsp; Short Hike</p>
                                    </div>
                                    <div className='show-offers-boxes'>
                                        <h1>Essentials</h1>
                                            <p><FaFire/> &nbsp; Campfires allowed</p>
                                            <p><FaToiletPaper/> &nbsp; Toilet available</p>
                                            <p><FaDog/> &nbsp; Pets allowed</p>
                                    </div>
                                    <div className='show-offers-boxes'>
                                        <h1>Amenities</h1>
                                            <p><FaFaucet/> &nbsp; Potable water available</p>
                                            <p><FaToilet/> &nbsp; Bathrooms available</p>
                                            <p><FaShower/> &nbsp; Showers available</p>
                                    </div>
                                    {/* <p>{this.props.spot.lodging}</p>
                                    <p>{this.props.spot.essentials}</p>
                                    <p>{this.props.spot.amenities}</p> */}
                                </div>
                                <hr />
                                <div className='show-details2'>
                                    <div><h1>Details</h1></div>
                                    <div>
                                        <p>
                                        <b>Check in:</b> After 1PM <br />
                                        <b>Check out:</b> Before 11AM <br />
                                        <b>Cancellation policy:</b> Relaxed
                                        </p>
                                    </div>
                                    <div>
                                        <p>
                                        <b>On arrival:</b> Have existential crisis <br />
                                        <b>Check out:</b> These views <br />
                                        </p>
                                    </div>
                                </div>
                                <hr />
                            </div>
                            <Reviews reviews={this.props.spot.reviews}/>
                        </div>
                        <div className='res-form-container'>
                            <ReservationForm price={this.props.spot.price}/>
                        </div>
                    </div>
                </div>


                
                <div className='show-map-container'>
                    {/* <Map className='show-map' spot={this.props.spot}/> */}
                    <Map className='show-map' spots={[this.props.spot]}/>
                </div>
                
            </div>
        )
    }
}

export default SpotShow;