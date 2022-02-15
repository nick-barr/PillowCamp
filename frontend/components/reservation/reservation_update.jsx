import React from 'react';

class ReservationUpdate extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            id: this.props.booking.id,
            check_in: this.props.booking.check_in,
            check_out: this.props.booking.check_out,
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
    
    formUpdates(field){
        return e => this.setState({[field]: e.currentTarget.value})
    }

    render(){
        return(
            <div className='reservation-update-container'>
                <div className='reservation-container'>
                <form className='reservation-form' onSubmit={this.handleSubmit}>
                    
                    {/* <div className='res-price'> */}
                        {/* <h1>${this.props.price}</h1>
                        <p>&nbsp;/ per night</p> */}
                    {/* </div> */}
                    <h1>Change Your Reservation</h1>
                    <hr />
                    <label >Check in</label>
                    <input type="date" min={this.dateMin()} value={this.dateFix(this.state.check_in)} onChange={this.formUpdates("check_in")}/>
                    <label >Check out</label>
                    <input type="date" min={this.dateMin(this.state.check_in)} value={this.dateFix(this.state.check_out)} onChange={this.formUpdates("check_out")}/>
                    
                    <label >Guests</label>
                    <select onChange={this.formUpdates("capacity")}>
                        <option value="none" selected disabled hidden>{this.props.booking.capacity} guests</option>
                        <option value="1">1 guest</option>
                        <option value="2">2 guests</option>
                        <option value="3">3 guests</option>
                        <option value="4">4 guests</option>
                        <option value="5">5 guests</option>
                    </select>
                    
                    <button>Modify Reservation</button>
                </form>
                </div>
            </div>
        )
    }
}


export default ReservationUpdate;