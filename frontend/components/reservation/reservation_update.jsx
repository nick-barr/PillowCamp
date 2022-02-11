import React from 'react';
import { withRouter } from 'react-router-dom';

class ReservationUpdate extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            id: this.props.booking.id,
            check_in: this.props.booking.check_in,
            check_out: this.props.booking.check_out,
            // spot_id: this.props.spotId,
            // user_id: this.props.userId,
            capacity: this.props.booking.capacity
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.dateFix = this.dateFix.bind(this);
        
    }
    
    handleSubmit(e){
        e.preventDefault();
        this.props.updateBooking(this.state);
        this.props.inactiveModal();        
    }
    
    dateFix(rubyDate){
        const newDate = (new Date((new Date(rubyDate)).getTime() + (new Date(rubyDate)).getTimezoneOffset() * 60000)).toLocaleDateString('en-GB').split('/').reverse().join('-');
        return newDate
    }
    
    formUpdates(field){
        return e => this.setState({[field]: e.currentTarget.value})
    }
    

    render(){
        return(
            <div className='reservation-update-container'>
                <div className='reservation-container'>
                <form className='reservation-form' onSubmit={this.handleSubmit}>
                    
                    <div className='res-price'>
                        {/* <h1>${this.props.price}</h1>
                        <p>&nbsp;/ per night</p> */}
                        Change Your Reservation
                    </div>
                    
                    <label >Check in</label>
                    <input type="date" value={this.dateFix(this.state.check_in)} onChange={this.formUpdates("check_in")}/>
                    
                    <label >Check out</label>
                    <input type="date" value={this.dateFix(this.state.check_out)} onChange={this.formUpdates("check_out")}/>
                    
                    <label >Guests</label>
                    <select onChange={this.formUpdates("capacity")}>
                        <option value="1">1 guest</option>
                        <option value="2">2 guests</option>
                    </select>
                    
                    <button>Modify Reservation</button>
                </form>
                </div>
            </div>
        )
    }
}


export default withRouter(ReservationUpdate);