import React from 'react';

class Maps extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount() {
        // debugger

        // let pos
        // let mark
        
        const mapOptions = {
            center: { lat: 42.06, lng: -73.76242 },
            zoom: 8,
            mapTypeId: 'terrain'
          };
      
        this.map = new google.maps.Map(this.mapNode, mapOptions);
          
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

        let pos
        let mark

        if (this.props.spots.length !== 0) {
            debugger
            this.props.spots.forEach(spot => {
                    pos = { position: new google.maps.LatLng(spot.latitude, spot.longitude) },
                    mark = new google.maps.Marker(pos),
                    mark.setMap(this.map);
            })} 
            
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