import React from 'react';

class Maps extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='map-container'>
                <img className='google-map' src={window.defaultmap} />
            </div>
        )
    }
}

export default Maps;