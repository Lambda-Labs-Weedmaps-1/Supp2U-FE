import React from 'react';
import GoogleMaps from './components/googleMap/Map'
import Navigation from './components/Navigation/Navigation'
import './App.css';
import LookupTest from './components/LookupTest';
import BusinessAdd from './components/Business/BusinessAdd';

require('dotenv').config()

function App() {
  return (
    <div className="App"> 
        <Navigation />
        <div className="Map_Holder">
        <GoogleMaps />
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
