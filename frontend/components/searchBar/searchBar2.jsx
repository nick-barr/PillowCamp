import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SearchBar2 extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            search: "",
            visibility: "hidden"
        };
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.handleHidden = this.handleHidden.bind(this);
        this.timeoutHidden = this.timeoutHidden.bind(this);
        // this.goToSpot = this.goToSpot.bind(this);

    }

    componentDidMount(){
        this.props.fetchAllSpots();
    }

    handleSubmit(e){
        e.preventDefault()
    }
    
    update(e) {
        this.setState({search: e.target.value})
    }

    handleHidden() {
        this.setState({visibility: this.state.visibility === "hidden" ? "show" : "hidden"});
    }

    timeoutHidden(){
        setTimeout(this.handleHidden, 150);
    }

    // goToSpot() {
    //     this
    // }
    
    render(){
        const { spots } = this.props;
        
        if (!spots) return null;

        return(
            <div className='search-bar2'>
                <form className ='search-form' onSubmit={this.handleSubmit}>
                    <div className='labels'>
                        <label className='search-dest2'>WHERE TO?</label>
                    </div>
                    <div className='inputs'>
                        <input 
                            type="text" 
                            onChange={this.update} 
                            placeholder='Enter a destination'
                            onFocus={this.handleHidden}
                            onBlur={this.timeoutHidden}
                        />
                        
                        <input 
                            type='image' 
                            src={searchbutton} 
                            alt="Search" 
                            className='search-button'
                        />
                    </div>
                </form>

                <div className={this.state.visibility === "hidden" ? "search-results hidden" : "search-results"}>
                    {spots.map((spot, idx) =>{
                        if (spot.title.toLowerCase().includes(this.state.search.toLowerCase()) ||
                         spot.region.toLowerCase().includes(this.state.search.toLowerCase()) ||
                         spot.details.toLowerCase().includes(this.state.search.toLowerCase())) {
                             return (
                                 <li className='search-results__li' key={idx}>
                                    <Link to={`/spot/${spot.id}`}>
                                    <div className='search-results__details'>
                                        <p className="search-title">{spot.title}</p>
                                        <p className="search-location">{spot.details}</p>
                                    </div>
                                    </Link>
                                 </li>
                             )
                         }

                    })}
                </div>
            </div>
        )
    }
}

export default withRouter(SearchBar2);