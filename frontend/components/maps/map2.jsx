import React from 'react';
import { withRouter } from 'react-router-dom';

const icon = {
    url: "https://cdn-icons-png.flaticon.com/512/3313/3313260.png",
    scaledSize: new google.maps.Size(60,60)
};

let mark

class Map2 extends React.Component{
    constructor(props){
        super(props)
        this.state = {markers: []}
    }


    componentDidUpdate() {
        let zoom
        let center
        if (this.props.options === "south") {
            center = { lat: 33.57070691351962, lng: -90.10589479407274};
            zoom = 6;
        } else if (this.props.options === "northeast") {
            center = { lat: 42.421371, lng: -74.053522};
            zoom = 8;
        } else if (this.props.options === "west") {
            center = { lat: 45.201273044982266, lng: -116.640543515399};
            zoom = 6;
        } else {
            center = { lat: 39.201273044982266, lng: -97.640543515399};
            zoom = 5;
        }

        // debugger
        this.map.setZoom(zoom)
        this.map.setCenter(center) 
        this.state.markers.forEach(mark => mark.setMap(null))

        // debugger
        
        const mapOptions = {
            center: center,
            zoom: zoom,
            mapTypeId: 'terrain',
          };
      
        // this.map = new google.maps.Map(this.mapNode, mapOptions);

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
                    this.state.markers.push(mark)
            })
        }; 
    }

    componentDidMount() {
        // debugger

        // debugger
        let zoom
        let center
        if (this.props.spots.length === 1) {
            center = {lat: this.props.spots[0].latitude, lng: this.props.spots[0].longitude,}
        } else if (this.options === "south") {
            center = { lat: 33.57070691351962, lng: -90.10589479407274};
            zoom = 6;
        } else if (this.options === "northeast") {
            center = { lat: 42.421371, lng: -74.053522};
            zoom = 8;
        } else if (this.options === "west") {
            center = { lat: 45.201273044982266, lng: -116.640543515399};
            zoom = 6;
        } else {
            center = { lat: 39.201273044982266, lng: -97.640543515399};
            zoom = 5;
        }
        
        const mapOptions = {
            center: center,
            zoom: zoom,
            mapTypeId: 'terrain',
          };
      
        this.map = new google.maps.Map(this.mapNode, mapOptions);

        const icon = {
            url: "https://cdn-icons-png.flaticon.com/512/3313/3313260.png",
            scaledSize: new google.maps.Size(50, 50)
        };
        let options = {position: {lat: 42.06, lng: -73.76242}, icon: icon}
        let mark

        // if (this.props.spots.length !== 0) {
        //     this.props.spots.forEach(spot => {
        //             options = { position: new google.maps.LatLng(spot.latitude, spot.longitude),
        //                         icon: icon },
        //             mark = new google.maps.Marker(options),
        //             mark.setMap(this.map);
        //             this.state.markers.push(mark)
        //     })
        // }; 
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
                this.state.markers.push(mark)
            })
        }; 
    
        return(
            <div className='map-container'>
                <div className='google-map' ref={ map => this.mapNode = map }>Map</div> 
            </div>
        )
    }
}

export default withRouter(Map2);