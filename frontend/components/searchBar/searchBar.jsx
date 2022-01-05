import React from 'react';
// import SearchButton from '../../../app/assets/images/searchbutton'

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        // this.state = {guests: 0};
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    // handleSubmit(e){
    //     e.preventDefault()
    // }

    render(){
        return(
            <div className='search-bar'>
                <form className ='search-form' onSubmit={this.handleSubmit}>
                    <label className='search-dest'>WHERE TO?</label>
                    <input type="text" value=''/>
                    <label className='search-date-s'>START DATE</label>
                    <input type="date" value=''/>
                    <label className='search-dest-e'>END DATE</label>
                    <input type="date" value=''/>
                    <label className='search-guests'>GUESTS</label>
                    <select name="guests" id="guests">
                        <option value="1">   1   </option>
                        <option value="2">   2   </option>
                        <option value="3">   3   </option>
                        <option value="4">   4   </option>
                        <option value="5">   5   </option>
                        <option value="6">   6   </option>
                    </select>
                    <input type='image' src={searchbutton} alt="Search" className='searchbutton'/>
                </form>
            </div>
        )
    }
}

export default SearchBar;