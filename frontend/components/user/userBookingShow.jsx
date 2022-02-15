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
        const { check_in, check_out, cost} = this.props.booking;

        const timeDiff = (new Date(check_out)).getTime() - (new Date(check_in)).getTime();
        const daysDiff = timeDiff / (1000*60*60*24);
        const finalPrice = daysDiff * cost
        
        return finalPrice;
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
        const {booking} = this.props;

        return(
            <div className='UBS-container'>
                {/* Booking picture here: {booking.id} */}
                <img src={booking.photoUrls} />
                
                <div className='UBS-container__details'>
                    <div className='UBS-container__info'>
                        <h1>{booking.title}</h1>
                        <h2>
                            <span>Check-In: </span>{this.dateFix(booking.check_in)}
                        </h2>
                        <h2>
                            <span>Check-Out: </span>{this.dateFix(booking.check_out)}
                        </h2>
                        <h2>
                            <span>Total Cost: </span>${this.totalPrice()} (${booking.cost} / per night)
                        </h2>
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