import React from 'react';
import Map from './comp/googleMap/Map'
import Navigation from './comp/Navigation/Navigation'
import './App.css';
import LookupTest from './comp/LookupTest';

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
    </div>
  );
}

export default App;
