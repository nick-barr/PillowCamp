import React from 'react';
// import 'react-dates/initialize';
// import { DateRangePicker } from 'react-dates';
import DateRange from './rangeBar';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props.search
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDestination = this.handleDestination.bind(this);
        this.handleDateS = this.handleDateS.bind(this);
        this.handleDateE = this.handleDateE.bind(this);
        this.handleGuests = this.handleGuests.bind(this);

        this.toggleClass= this.toggleClass.bind(this);
        this.state = {
            active: false,
        };
    }

    toggleClass() {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    };
    
    handleSubmit(e){
        e.preventDefault()
    }
    
    handleDestination(e){
        this.setState({search: e.target.value})
    }
    handleDateS(e){
        this.setState({dateS: e.target.value})
    }
    handleDateE(e){
        this.setState({dateE: e.target.value})
    }
    handleGuests(e){
        this.setState({guests: e.target.value})
    }
    
    render(){

        return(
            // <div className={this.state.active ? 'search-bar animated intensifies': 'search-bar'} onClick={this.toggleClass}>
            <div className='search-bar'>
                        {/* <div>
                        <DateRange />
                        </div> */}
                <form className ='search-form' onSubmit={this.handleSubmit}>
                    
                    <div className='labels'>
                        <label className='search-dest'>WHERE TO?</label>
                        <label className='search-date-s'>START DATE</label>
                        <label className='search-date-e'>END DATE</label>
                        <label className='search-guests'>GUESTS</label>
                    </div>
                    
                    <div className='inputs'>
                        <input type="text" value={this.state.destination} onChange={this.handleDestination} placeholder='Enter a destination' />
                        <input type="date" value={this.state.dateS} onChange={this.handleDateS}/>
                        <input type="date" value={this.state.dateE} onChange={this.handleDateE}/>
                        <select name="guests" id="guests" value={this.state.guests} onChange={this.handleGuests} placeholder='Add Guests'>
                            <option value="1">   1   </option>
                            <option value="2">   2   </option>
                            <option value="3">   3   </option>
                            <option value="4">   4   </option>
                            <option value="5">   5   </option>
                            <option value="6">   6   </option>
                        </select>
                    
                        <input type='image' src={searchbutton} alt="Search" className='search-button'/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;