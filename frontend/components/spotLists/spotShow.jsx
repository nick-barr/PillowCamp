import React from 'react';
import ReservationForm from '../reservation/reservation_container'
import Reviews from '../reviews/reviews'
import Map from '../maps/maps'


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
                    
                    {/* <img src={window.defaultspot} className='spot-index-image'/> */}
                    <img src={this.props.spot.photoUrl} className='spot-index-image'/>
                
                    <div className='show-container'>
                        
                        <div className='show-details'>
                            <p>{this.props.spot.details}</p>
                            <p className='title'>{this.props.spot.title}</p>
                            <p className='description'>{this.props.spot.description}</p>
                            <div className='show-offers'>
                                <p>{this.props.spot.lodging}</p>
                                <p>{this.props.spot.essentials}</p>
                                <p>{this.props.spot.amenities}</p>
                            </div>
                        </div>

                        <Reviews />
                
                    </div>

                    <div className='res-form-container'>
                        <ReservationForm />
                    </div>
                
                </div>
                
                <div className='show-map-container'>
                    <Map className='show-map'/>
                </div>
                
            </div>
        )
    }
}

export default SpotShow;