import React from 'react';
import Modal from '../modal/modal_container';

class UserBookingShow extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            check_in: '',
            check_out: '',
            spot_id: this.props.spotId,
            user_id: this.props.userId,
            capacity: 1
        }

        this.dateFix = this.dateFix.bind(this);
        this.delete = this.delete.bind(this);
        this.update = this.update.bind(this);
    }

    dateFix(rubyDate){
        return (new Date((new Date(rubyDate)).getTime() + (new Date(rubyDate)).getTimezoneOffset() * 60000)).toLocaleString("en-us", {month: 'short', weekday: 'short', day: 'numeric', year: 'numeric'})
    }

    update(booking){
        this.props.getBooking(booking)
        this.props.activateModal("bookingUpdate")
    }
    
    delete(booking){
        this.props.getBooking(booking);
        this.props.activateModal("bookingDelete")
    }

    render(){
        let {booking} = this.props;

        return(
            <div>
                Booking ID: {booking.id} <br/>
                {/* <img src={booking.photoUrls} /> */}
                Spot ID: {booking.spot_id} <br/>
            
                Check-In: {this.dateFix(booking.check_in)} <br/>
                Check-Out: {this.dateFix(booking.check_out)} <br/>

            
                <button onClick={() => this.update(booking)}>Update Booking</button>
                <button onClick={() => this.delete(booking)}>Cancel Booking</button>
                <Modal />
            </div>
        )
    }
}

export default UserBookingShow;