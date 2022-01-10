import React from 'react';

class ReservationForm extends React.Component{
    constructor(props){
        super(props)

        this.handleSubmit.bind = this.handleSubmit.bind(this)
    }

    handleSubmit(){
        console.log('submitted')
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>Price</h1>
                    <label >Check in</label>
                    <input type="date" />
                    <label >Check out</label>
                    <input type="date" />
                    <label >Guest</label>
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