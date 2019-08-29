import React from 'react';
import GoogleMaps from './components/googleMap/Map'
import Navigation from './components/Navigation/Navigation'
import './App.css';
import LookupTest from './components/LookupTest';
import BusinessAdd from './components/Business/BusinessAdd';
import { GoogleMap } from 'react-google-maps';


require('dotenv').config()

function App() {
  return (
    <div className="App"> 
        <Navigation />
        <div className="Map_Holder">
        <GoogleMaps
					isMarkerShown
					googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyA9vZYucirjbKCttIzPuBEbNelsYeCsAYg&v=3.exp&libraries=geometry,drawing,places`}
					loadingElement={<div style={{ height: `100%` }} />}
					containerElement={<div style={{ height: `400px` }} />}
					mapElement={<div style={{ height: `100%` }} />}
				/>
        </div>
        <div>
          <LookupTest />
        </div>
        <div>
          <BusinessAdd />
        </div>
    </div>
  );
}

export default App;
