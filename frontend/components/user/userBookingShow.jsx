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
        this.removeBooking = this.removeBooking.bind(this);
        this.update = this.update.bind(this);
    }

    dateFix(rubyDate){
        const dateObject = new Date(Date.parse(rubyDate));
        const weekday = dateObject.toLocaleString('default', { weekday: 'short' });
        const month = dateObject.toLocaleString('default', { month: 'short' });
        const day = dateObject.toLocaleString('default', { day: 'numeric' });
        const year = dateObject.getFullYear();
        return `${weekday}, ${month} ${day}, ${year}` 
    }

    update(booking){
        // debugger
        console.log("did it work?")
        this.props.getBooking(booking)
        this.props.activateModal("bookingUpdate")
        //need to skim down the booking details to dates and capacity only.
        //:id, :photoUrls not needed
        // this.props.updateBooking(booking);
    }
    
    removeBooking(bookingId){
        this.props.deleteBooking(bookingId);
    }

    render(){
        let {booking} = this.props;
        // let modal;
        // if (booking) {
        //    modal =  
        // }
        debugger
        return(
            <div>
                Booking ID: {booking.id} <br/>
                {/* <img src={booking.photoUrls} /> */}
                Spot ID: {booking.spot_id} <br/>
                {/* Check-In: {this.dateFix(booking.check_in)} <br/>
                Check-Out: {this.dateFix(booking.check_out)} <br/> */}
                Check-In: 
                {(new Date(booking.check_in))
                    .toLocaleDateString("en-us", {month: 'short', weekday: 'short', day: 'numeric', year: 'numeric'})} 
                    <br/>
                Check-Out: 
                {(new Date(booking.check_out))
                    .toLocaleDateString("en-us", {month: 'short', weekday: 'short', day: 'numeric', year: 'numeric'})} 
                    <br/>
                <button onClick={() => this.update(booking)}>Update Booking</button>
                <button onClick={() => this.removeBooking(booking.id)}>Cancel Booking</button>
                {/* {booking ? <Modal booking={booking} updateBooking={updateBooking} /> : null} */}
                <Modal />
            </div>
        )
    }
}

export default UserBookingShow;