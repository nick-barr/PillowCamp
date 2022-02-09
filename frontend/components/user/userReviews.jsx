import React from 'react';

class UserReviews extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>here are the reviews</div>
            <ul>
            {this.props.bookings.map(booking =>(
                <li key={booking.id}>
                    <div>
                        Booking ID: {booking.id} <br/>
                        User ID: {booking.user_id} <br/>
                        Spot ID: {booking.spot_id} <br/>
                        Check-In: {this.dateFix(booking.check_in)} <br/>
                        Check-Out: {this.dateFix(booking.check_out)} <br/>
                    </div>
                    <button onClick={() => this.ed(booking.id)}>Cancel Booking</button>
                    <button onClick={() => this.removeBooking(booking.id)}>Cancel Booking</button>
                </li>
                )) 
            } 
        </ul>
        )
    }
}

export default UserReviews;