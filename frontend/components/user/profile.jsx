import React from 'react';
// import BookingItem from '../bookings/booking_index_container';

class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.dateFix = this.dateFix.bind(this);
        this.removeBooking = this.removeBooking.bind(this);
        // this.editBooking = this.editBooking.bind(this);
    }; 

    dateFix(rubyDate){
        const dateObject = new Date(Date.parse(rubyDate));
        return dateObject.toDateString()
    }

    removeBooking(bookingId){
        console.log(bookingId)
    }

    componentDidMount () {
        window.scrollTo(0, 0);

        const cUser = this.props.match.params.userId;
        this.props.fetchUserBookings(cUser);
    }

    // static getDerivedStateFromProps(nextProps, prevProps) {
    //     if (nextProps.bookings !== prevProps.bookings) {
    //         return { bookings: nextProps.bookings }
    //     } else {
    //         return null
    //     };
    // }

    render() {
        // debugger
        return (
          <div className="profile-background">
            <div className="profile-form-container">
                <ul>
                    {this.props.bookings.map(booking =>(
                        <li>
                            <div>
                                Booking ID: {booking.id} <br/>
                                User ID: {booking.user_id} <br/>
                                Spot ID: {booking.spot_id} <br/>
                                Check-In: {this.dateFix(booking.check_in)} <br/>
                                Check-Out: {this.dateFix(booking.check_out)} <br/>
                            </div>
                            <button onClick={() => this.removeBooking(booking.id)}>Cancel Booking</button>
                        </li>
                        )) 
                    } 
                </ul>
            </div>
          </div>
        )}

}


export default Profile;