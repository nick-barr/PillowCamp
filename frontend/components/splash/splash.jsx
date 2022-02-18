import React from 'react';
import { Link } from "react-router-dom";
import SplashListContainer from './splashList_container';
import SearchBarContainer from '../searchBar/searchBar_container';
import SearchBarContainer2 from '../searchBar/searchBar_container2';
import DateRange from '../searchBar/rangeBar';

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
                                Find your next adventure.
                            </h1>
                        </div>
                        <div className="splash-description">
                            <h2>Immerse yourself in unique experiences</h2>
                            <h2>and discover local natural wonders.</h2>
                        </div>
                    </div>
                </div>

                <div className="splash-container">
                    <img src={window.tentf} className="splash-hero"/>
                    
                    {/* <SearchBarContainer /> */}
                    {/* <DateRange /> */}
                    <SearchBarContainer2 />


                </div>

                <div className="splash-spot-list">
                    <SplashListContainer />
                </div>

            </div>


        )
    }
};

export default Splash;