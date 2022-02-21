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
        this.tempSpots = this.tempSpots.bind(this);

    }

    componentDidMount(){
        this.props.fetchAllSpots();        
    }

    handleSubmit(e){
        e.preventDefault()
        if (this.state.tempSpots) {
            this.props.history.push(`/spot/${this.state.tempSpots[0].id}`);
        } else {
            this.props.history.push(`/spot/${this.props.spots[0].id}`)
        }
    }
    
    
    handleHidden() {
        this.setState({visibility: this.state.visibility === "hidden" ? "show" : "hidden"});
    }
    
    timeoutHidden(e){
        setTimeout(this.handleHidden, 100);
    }
    
    update(e) {
        this.setState({search: e.target.value})
        this.tempSpots();
    }
    
    tempSpots() {
        const { search } = this.state; 
        let tempSpots = this.props.spots.filter((spot) => 
            spot.title.toLowerCase().includes(search.toLowerCase()) ||
            spot.region.toLowerCase().includes(search.toLowerCase()) ||
            spot.details.toLowerCase().includes(search.toLowerCase())
        )
        return(
            this.setState({tempSpots: tempSpots})
        )
    }
    
    render(){
        const { spots } = this.props;
        
        if (spots.length === 0) return null;
        
        let { tempSpots } = this.state
        if (!tempSpots) tempSpots = spots;
        return(
            <div className='search-bar2'>
                <form className ='search-form' onSubmit={this.handleSubmit}>
                    <div className='labels'>
                        <label className='search-dest2'>WHERE TO?</label>
                    </div>
                    <div className='inputs'>
                        <input 
                            className={this.state.visibility === "hidden" ? "search-dest-bar" : "search-dest-bar round"}
                            type="text" 
                            onChange={this.update} 
                            placeholder='What are you looking for?'
                            onFocus={this.handleHidden}
                            onBlur={this.timeoutHidden}
                        />
                        
                        {/* <input 
                            type='image' 
                            src={searchbutton} 
                            alt="Search" 
                            className='search-button'
                        /> */}
                    </div>
                </form>

                <div className="search-results-container">
                <div className="search-results-container2">
                <div className={this.state.visibility === "hidden" ? "search-results hidden" : "search-results"}>
                    {tempSpots.map((spot, idx) =>{

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
                        })
                    }
                </div>
                </div>
                </div>
            </div>
        )
    }
}

export default withRouter(SearchBar2);