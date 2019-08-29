import React, {createRef,} from 'react';
import "./style.sass"
import { mapStyle } from "./MapStyles";
import axios from "axios"

class GoogleMaps extends React.Component{

  mapRef = createRef();
  // googleMapDiv = ()=> {return document.getElementById("google-map")};
  createGoogleMap = () =>{
    let map = new window.google.maps.Map(this.mapRef.current, {
      zoom: 16,
      center:{
        lat: 23.118813,
        lng: -82.329933
      },
      styles: mapStyle
    });
    this.creatMarker(map);
  };
  creatMarker =(map)=>{
    let marker = new window.google.maps.Marker({
      position: {
        lat: 23.118813,
        lng: -82.329933
      },
      map: map,
    });
    marker.addListener("click", props=> console.log("marker clicked", props));
  };
  componentDidMount() {
    const googleMapScript = document.createElement('script');
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAP_API_KEY}&v=3.exp&libraries=geometry,drawing,places`;
    window.document.body.appendChild(googleMapScript);
    googleMapScript.addEventListener("load", ()=>{
      this.googleMap = this.createGoogleMap();
    })
  
  }

  render(){
    return <div id={"google-map"} className={"map"} ref={this.mapRef}/>
  }
}

export default GoogleMaps;