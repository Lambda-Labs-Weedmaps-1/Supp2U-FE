import React from 'react';
import Map from './comp/googleMap/Map'
import './App.css';
import LookupTest from './comp/LookupTest';
import BusinessAdd from './comp/Business/BusinessAdd';
import BasicRoute from "./BasicRoute";
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
