import React from 'react'
import GoogleMaps from './GoogleMap'
let position = [{lat: 23.118813,lng: -82.329933}, {lat: 23.118813,lng: -81.329936}]; // position should be an array of obj that hold info about {lng, lat}

function Map() {
    return (<GoogleMaps positions={position}/>  )
}

export default Map
