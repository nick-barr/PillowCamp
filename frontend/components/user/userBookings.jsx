import React from 'react';

class UserBookings extends React.Component{
    constructor(props){
        super(props)

        this.dateFix = this.dateFix.bind(this);
        this.removeBooking = this.removeBooking.bind(this);
        // this.editBooking = this.editBooking.bind(this);
    }

    componentDidMount () {
    }

    dateFix(rubyDate){
        const dateObject = new Date(Date.parse(rubyDate));
        return dateObject.toDateString()
    }

    removeBooking(bookingId){
        this.props.deleteBooking(bookingId);
        // location.reload();
    }

    render(){
        return(
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

export default UserBookings;