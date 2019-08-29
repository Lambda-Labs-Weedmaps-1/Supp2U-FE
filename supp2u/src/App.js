import React from 'react';
import Map from './comp/googleMap/Map'
import Navigation from './comp/Navigation/Navigation'
import './App.css';
<<<<<<< HEAD
import LookupTest from './comp/LookupTest';
import BusinessAdd from './comp/Business/BusinessAdd';


require('dotenv').config()

function App() {
  return (
    <div className="App"> 
        <Navigation />
        <div className="Map_Holder">
          <Map />
        </div>
        <div>
          <LookupTest />
        </div>
        <div>
          <BusinessAdd />
        </div>
    </div>
  );
=======
import GoogleMaps from './comp/GoogleMap';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<p>Welcome to</p>
				<h1>Supp2U</h1>

				<GoogleMaps
					isMarkerShown
					googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyA9vZYucirjbKCttIzPuBEbNelsYeCsAYg&v=3.exp&libraries=geometry,drawing,places`}
					loadingElement={<div style={{ height: `100%` }} />}
					containerElement={<div style={{ height: `400px` }} />}
					mapElement={<div style={{ height: `100%` }} />}
				/>
			</header>
		</div>
	);
>>>>>>> 3343566fe8d6a217a9b1b9e3d4343c46eb56703f
}

// export default App;
