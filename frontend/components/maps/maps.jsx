import React from 'react';
import { withRouter } from 'react-router-dom';

const icon = {
    url: "https://cdn-icons-png.flaticon.com/512/3313/3313260.png",
    scaledSize: new google.maps.Size(70,70)

};

let mark

class Maps extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount() {
        // debugger

        // debugger
        let center
        if (this.props.spots.length === 1) {
            center = {lat: this.props.spots[0].latitude, lng: this.props.spots[0].longitude,}
        } else {
            center = { lat: 42.421371, lng: -74.053522}
        }
        
        const mapOptions = {
            center: center,
            zoom: 8,
            mapTypeId: 'terrain',
          };
      
        this.map = new google.maps.Map(this.mapNode, mapOptions);

        const icon = {
            url: "https://cdn-icons-png.flaticon.com/512/3313/3313260.png",
            scaledSize: new google.maps.Size(50, 50)
        };
        let options = {position: {lat: 42.06, lng: -73.76242}, icon: icon}
        let mark

        if (this.props.spots.length !== 0) {
            // debugger
            this.props.spots.forEach(spot => {
                    options = { position: new google.maps.LatLng(spot.latitude, spot.longitude),
                                icon: icon },
                    mark = new google.maps.Marker(options),
                    mark.setMap(this.map);
            })
        }; 
    }
    
    render(){
        // debugger

        let options = {position: {lat: 42.06, lng: -73.76242}, icon: icon}

        if (this.props.spots.length !== 0) {
            // debugger
            this.props.spots.forEach(spot => {
                options = { position: new google.maps.LatLng(spot.latitude, spot.longitude),
                            icon: icon },
                mark = new google.maps.Marker(options),
                mark.setMap(this.map);
            })
        }; 
    
        return(
            <div className='map-container'>
                <div className='google-map' ref={ map => this.mapNode = map }>Map</div> 
            </div>
        )
    }
}

export default withRouter(Maps);