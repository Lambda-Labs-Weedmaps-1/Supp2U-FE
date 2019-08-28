import React from 'react';
import Map from './comp/googleMap/Map'

import './App.css';
import LookupTest from './comp/LookupTest';

function App() {
  return (
    <div className="App"> 
        <p>
          Welcome to Supp2U
        </p>
        <div className="Map_Holder">
          <Map className="map" />
        </div>
        <div>
          <LookupTest />
        </div>
    </div>
  );
}

export default App;
