import React from 'react';
import './App.css';
import GoogleMaps from './comp/GoogleMap'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Welcome to 
        </p>
        <h1>Supp2U</h1>

        <GoogleMaps
        isMarkerShown
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyA9vZYucirjbKCttIzPuBEbNelsYeCsAYg&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}/>
        
      </header>
    </div>
  );
}

export default App;
