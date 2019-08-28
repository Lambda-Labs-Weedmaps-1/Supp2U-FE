import React from 'react';
import Map from './comp/googleMap/Map'
import Navigation from './comp/Navigation/Navigation'
import './App.sass';
import LookupTest from './comp/LookupTest';
import BusinessCreator from './comp/Business/BusinessCreator';


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
          <BusinessCreator />
        </div>
    </div>
  );
}

export default App;
