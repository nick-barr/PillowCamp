import React from 'react';
import Modal from '../modal/modal_container';
import { withRouter } from 'react-router-dom';

class ReservationForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            check_in: '',
            check_out: '',
            spot_id: this.props.spotId,
            user_id: this.props.userId,
            capacity: 1
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.dateFix = this.dateFix.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();

        if (!this.props.userId) {
            this.props.activateModal('login');
        } else {
            this.props.createBooking(this.state);
            this.props.history.push(`/profile/${this.props.userId}/bookings`);
        }
    }
    
    formUpdates(field){
        return e => this.setState({[field]: e.currentTarget.value})
    }

    dateFix(rubyDate){
        const newDate = (new Date((new Date(rubyDate)).getTime() + (new Date(rubyDate)).getTimezoneOffset() * 60000)).toLocaleDateString('en-GB').split('/').reverse().join('-');
        return newDate
    }

    dateMin(checkIn){
        let today;

        if (!checkIn) {
            today = new Date();
        } else {
            today = new Date(checkIn)
        }

        const tomorrow = this.dateFix(today.setDate(today.getDate() + 1))
        return tomorrow;
    }


    render(){
        return(
            <div className='reservation-container'>
                <form className='reservation-form' onSubmit={this.handleSubmit}>
                    
                    <div className='res-price'>
                        <h1>${this.props.price}</h1>
                        <p>&nbsp;/ per night</p>
                    </div>
                    
                    <label >Check in</label>
                    <input type="date" min={this.dateMin()} onChange={this.formUpdates("check_in")} required/>
                    
                    <label >Check out</label>
                    <input type="date" min={this.dateMin(this.state.check_in)} onChange={this.formUpdates("check_out")} required/>
                    
                    <label >Guests</label>
                    <select defaultValue={2} onChange={this.formUpdates("capacity")}>
                        <option value="1">1 guest</option>
                        <option value ="2" >2 guests</option>
                        <option value="3">3 guests</option>
                        <option value="4">4 guests</option>
                        <option value="5">5 guests</option>
                    </select>
                    
                    <button>Book Reservation</button>
                    <Modal />
                </form>
            </div>
        )
    }
}


export default withRouter(ReservationForm);