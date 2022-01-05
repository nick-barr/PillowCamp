import React from 'react';
import { Link } from "react-router-dom";
import SpotListContainer from '../spotLists/spotList_container';
import SearchBarContainer from '../searchBar/searchBar_container';

class Splash extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div className="splash-page">

                <div className="splash-content">
                    <div className="splash-col">
                        <div className="splash-title">
                            <h1>
                                Inspirational quote.
                            </h1>
                        </div>
                        <div className="splash-description">
                            <h2>
                                Outdoors nature amazing views wow 
                            </h2>
                            
                            <h2>
                                Camp glamp cabin airbnb hotel resort.
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="splash-container">
                    <img src={window.tentf} className="splash-hero"/>
                    
                    <SearchBarContainer />
                </div>

                <div className="splash-spot-list">
                    <SpotListContainer />
                </div>
                
            </div>
        )
    }
};

export default Splash;