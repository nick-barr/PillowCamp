import React from 'react';
import { withRouter } from 'react-router-dom';

class ReservationUpdate extends React.Component{
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
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.updateBooking(this.state);
        this.props.history.push(`/profile/${this.props.userId}`);
        //need withRouter
        
    }
    
    formUpdates(field){
        return e => this.setState({[field]: e.currentTarget.value})
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
                    <input type="date" onChange={this.formUpdates("check_in")}/>
                    
                    <label >Check out</label>
                    <input type="date" onChange={this.formUpdates("check_out")}/>
                    
                    <label >Guests</label>
                    <select onChange={this.formUpdates("capacity")}>
                        <option value="1">1 guest</option>
                        <option value="2">2 guests</option>
                    </select>
                    
                    <button>Book Reservation</button>
                </form>
            </div>
        )
    }
}


export default withRouter(ReservationUpdate);