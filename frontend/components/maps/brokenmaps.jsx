import React from 'react';

class Maps extends React.Component{
    constructor(props){
        super(props)
        this.state = this.props.spots.length
        // this.cent = this.props.spot.
    }

    componentDidMount() {
        debugger
        // let center = {}
        let pos
        let mark
        
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
        //   let m2 = {position: new google.maps.LatLng(42.193, -74.069)}
        //   let mark2 = new google.maps.Marker(m2)          
        //   mark2.setMap(this.map)
        //   let m3 = {position: new google.maps.LatLng(43.240, -74.541)}
        //   let mar3 = new google.maps.Marker(m3)          
        //   mar3.setMap(this.map)
        //   let m4 = {position: new google.maps.LatLng(42.729, -74.381)}
        //   let mar4 = new google.maps.Marker(m4)          
        //   mar4.setMap(this.map)
        //   let m5 = {position: new google.maps.LatLng(42.114, -74.135)}
        //   let mark5 = new google.maps.Marker(m5)          
        //   mark5.setMap(this.map)

        }
    
    render(){
    debugger
    // if (!this.mapRef) return null;

        let pos
        let mark

        if (!this.props.spots.length === 0) {

            this.props.spots.forEach(spot => {
                    pos = { position: new google.maps.LatLng(spot.latitude, spot.longitude) },
                    mark = new google.maps.Marker(pos),
                    mark.setMap(this.map);
            })            
        };

            //   if (!this.props.spots === null) {
            //       } 
            


        return(
            <div className='map-container'>
                        <div className='google-map' ref={ map => this.mapNode = map }>Map</div> 
                    </div>
                )
                debugger
            }
}

export default Maps;