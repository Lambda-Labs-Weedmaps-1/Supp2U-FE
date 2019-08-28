import React from 'react'
import { GoogleMap, Marker, withGoogleMap,withScriptjs } from "react-google-maps"


const GoogleMaps = withScriptjs(withGoogleMap((props) =>

  <GoogleMap
  className="map"
    defaultZoom={8}
    defaultCenter={{ lat: 23.118813, lng: -82.329933  }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 23.118813, lng: -82.329933 }} />}
  </GoogleMap>))


export default GoogleMaps;