import React from 'react';

class ReservationCancel extends React.Component{
    constructor(props){
        super(props)

        this.deleteBooking = this.deleteBooking.bind(this);
    }
    
    deleteBooking(){
        this.props.deleteBooking(this.props.booking.id);
        this.props.inactiveModal();        
    }
    
    render(){
        return(
            <div className='reservation-delete-container'>
                <div className='reservation-container'>
                    Are you sure you want to cancel your reservation?
                    <div className='reservation-form'>    
                        <button onClick={()=> this.deleteBooking()}>Cancel Reservation</button>
                        <button onClick={() => this.props.inactiveModal()}>Keep Reservation</button>
                    </div>
                </div>
            </div>
        )
    }
}


export default (ReservationCancel);