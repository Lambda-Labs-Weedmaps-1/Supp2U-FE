import React from 'react';

import Map from './components/googleMap/Map'
import './App.css';
import BasicRoute from "./BasicRoute";
import LookupTest from './components/LookupTest';
import BusinessAdd from './components/Business/BusinessAdd';

function App() {
  return (
    <div className="App">
        <div className="Map_Holder">
          <Map /> {/* // TODO move to BasicRoute  if needed*/}
        </div>
        <div>
          <LookupTest /> {/* // TODO move to BasicRoute */}
        </div>
        <div>
          <BusinessAdd /> {/* // TODO move to BasicRoute */}
        </div>
        <BasicRoute />
    </div>
  );
}

export default App;
