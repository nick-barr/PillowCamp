import React from 'react';

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
        this.removeBooking = this.removeBooking.bind(this);
        this.updateBooking = this.updateBooking.bind(this);
    }

    dateFix(rubyDate){
        const dateObject = new Date(Date.parse(rubyDate));
        return dateObject.toDateString()
    }

    updateBooking(booking){
        console.log("did it work?")
        // debugger
        this.props.updateBooking(booking);
    }
    
    removeBooking(bookingId){
        this.props.deleteBooking(bookingId);
    }

    render(){
        let {booking} = this.props
        return(
            <div>
                Booking ID: {booking.id} <br/>
                User ID: {booking.user_id} <br/>
                Spot ID: {booking.spot_id} <br/>
                Check-In: {this.dateFix(booking.check_in)} <br/>
                Check-Out: {this.dateFix(booking.check_out)} <br/>
                <button onClick={() => this.updateBooking(booking)}>Update Booking</button>
                <button onClick={() => this.removeBooking(booking.id)}>Cancel Booking</button>
            </div>
        )
    }
}

export default UserBookingShow;