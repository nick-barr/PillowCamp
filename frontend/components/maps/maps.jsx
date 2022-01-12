import React from 'react';
import {GiGoblinCamp} from 'react-icons/gi'
import {FaCampground} from 'react-icons/fa'

class Maps extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount() {
        // debugger

        // let pos
        // let mark
        debugger
        let center
        if (this.props.spots.length === 1) {
            center = {lat: this.props.spots[0].latitude, lng: this.props.spots[0].longitude,}
        } else {
            center = { lat: 42.06, lng: -73.76242 }
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
            debugger
            this.props.spots.forEach(spot => {
                    options = { position: new google.maps.LatLng(spot.latitude, spot.longitude),
                                icon: icon },
                    mark = new google.maps.Marker(options),
                    mark.setMap(this.map);
            })
        }; 
        
          
        //   if (!this.props.spots === null) {
        //       this.props.spots.each(spot => 
        //         pos = {position: new google.maps.LatLng(spot.latitude, spot.longitude)},
        //         mark = new google.maps.Marker(pos),
        //         mark.setMap(this.map)
        //         )
        //   } 
          
          
        //   let m1 = {position: new google.maps.LatLng(41.475, -73.858)}
        //   let marker1 = new google.maps.Marker(m1)          
        //   marker1.setMap(this.map)
 
        }
    
    render(){
    // debugger

        const icon = {
            url: "https://cdn-icons-png.flaticon.com/512/3313/3313260.png",
            scaledSize: new google.maps.Size(50, 50)
        };
        let options = {position: {lat: 42.06, lng: -73.76242}, icon: icon}
        let mark

        if (this.props.spots.length !== 0) {
            debugger
            this.props.spots.forEach(spot => {
                    options = { position: new google.maps.LatLng(spot.latitude, spot.longitude),
                                icon: icon },
                    mark = new google.maps.Marker(options),
                    mark.setMap(this.map);
            })
        }; 
            
            // else if (this.props.spot !== null) {
            // pos = { position: new google.maps.LatLng(this.props.spot.latitude, this.props.spot.longitude) },
            // mark = new google.maps.Marker(pos),
            // mark.setMap(this.map);
            // }            
        
        
        return(
            <div className='map-container'>
                        <div className='google-map' ref={ map => this.mapNode = map }>Map</div> 
                    </div>
        )
    }
}

export default Maps;