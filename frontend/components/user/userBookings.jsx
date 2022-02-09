import React from 'react';
import UserBookingShow from './userBookingShow';

class UserBookings extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <ul>
                {this.props.bookings.map(booking =>(
                    <li key={booking.id}>
                        <UserBookingShow 
                            booking={booking} 
                            updateBooking={this.props.updateBooking}
                            deleteBooking={this.props.deleteBooking}
                            /> 
                    </li>
                    )) 
                } 
            </ul>
        )
    }
}

export default UserBookings;