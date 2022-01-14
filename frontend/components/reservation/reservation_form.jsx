import React from 'react';

class ReservationForm extends React.Component{
    constructor(props){
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(){
        console.log('submitted')
    }

    render(){
        return(
            <div className='reservation-container'>
                <form className='reservation-form' onSubmit={this.handleSubmit}>
                    <h1>{this.props.price}</h1>
                    <label >Check in</label>
                    <input type="date" />
                    <label >Check out</label>
                    <input type="date" />
                    <label >Guests</label>
                        <select>
                            <option value="1">1 guest</option>
                            <option value="2">2 guests</option>
                        </select>
                    <button>Book Reservation</button>
                </form>
            </div>
        )
    }
}


export default ReservationForm;