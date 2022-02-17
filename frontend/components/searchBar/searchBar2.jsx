import React from 'react';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props.search
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDestination = this.handleDestination.bind(this);

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
    
    render(){
        return(
            <div className='search-bar'>
                <form className ='search-form' onSubmit={this.handleSubmit}>
                    
                    <div className='labels'>
                        <label className='search-dest'>WHERE TO?</label>
                    </div>
                    
                    <div className='inputs'>
                        <input 
                            type="text" 
                            value={this.state.destination} 
                            onChange={this.handleDestination} 
                            placeholder='Enter a destination' 
                        />
                    
                        <input 
                            type='image' 
                            src={searchbutton} 
                            alt="Search" 
                            className='search-button'
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;