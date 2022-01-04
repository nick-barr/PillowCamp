import React from 'react';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {guests: 0};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault()
    }

    render(){
        return(
            <div className='search-bar'>
                <h1>Test</h1>
                <form className ='search-form' onSubmit={this.handleSubmit}>
                    <label>Where to?</label>
                    <input type="text" value=''/>
                    <label>Dates</label>
                    <input type="date" value=''/>
                    <label>Guests</label>
                    <select name="cars" id="cars">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                    <button className='search-button' type='image'>O</button>
                </form>
            </div>
        )
    }
}

export default SearchBar;