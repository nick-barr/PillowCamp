import React from 'react';
import Modal from '../modal/modal_container';

class UserBookingShow extends React.Component{
    constructor(props){
        super(props)

        this.dateFix = this.dateFix.bind(this);
        this.delete = this.delete.bind(this);
        this.update = this.update.bind(this);
    }

    dateFix(rubyDate){
        return (new Date((new Date(rubyDate)).getTime() + (new Date(rubyDate)).getTimezoneOffset() * 60000)).toLocaleString("en-us", {month: 'short', weekday: 'short', day: 'numeric', year: 'numeric'})
    }

    totalPrice(){
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
        debugger
        let {booking} = this.props;

        return(
            <div className='UBS-container'>
                Booking picture here: {booking.id}
                {/* <img src={booking.photoUrls} /> */}
                
                <div className='UBS-container__details'>
                    <div className='UBS-container__info'>
                        {booking.title}
                        Check-In: {this.dateFix(booking.check_in)}
                        Check-Out: {this.dateFix(booking.check_out)}
                    </div>
                    
                    <div className='UBS-container__buttons'>
                        <button onClick={() => this.update(booking)}>Update Booking</button>
                        <button onClick={() => this.delete(booking)}>Cancel Booking</button>
                    </div>
                </div>
                <Modal />
            </div>
        )
    }
}

export default UserBookingShow;