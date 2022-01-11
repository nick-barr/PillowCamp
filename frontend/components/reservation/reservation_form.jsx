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
                    <label >Check in</label>
                    <input type="date" />
                    <label >Check out</label>
                    <input type="date" />
                    <label >Guests</label>
                        <select>
                            <option value="1">1 guest</option>
                            <option value="2">2 guests</option>
                        </select>
                    <h1>Price</h1>
                    <button>Book Reservation</button>
                </form>
            </div>
        )
    }
}


export default ReservationForm;