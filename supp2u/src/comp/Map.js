import React from 'react'
import GoogleMaps from './GoogleMap'
function Map() {
    return (
     
                    <GoogleMaps
        isMarkerShown
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyA9vZYucirjbKCttIzPuBEbNelsYeCsAYg&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: '780px' , overflow:"hidden", marginTop:"5%" }} />}
        mapElement={<div style={{ height: `100%` }} />}/>
       
    )
}

export default Map
