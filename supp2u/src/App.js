import React from 'react';
import Map from './components/googleMap/Map'
import './App.sass';
import BusinessCreator from './components/Business/BusinessCreator';
import BasicRoute from "./BasicRoute";
import LookupTest from './components/LookupTest';



function App() {
  return (
    <div className="App">
        <BasicRoute />
        <div className="Map_Holder">
          <Map /> {/* // TODO move to BasicRoute  if needed*/}
        </div>
        <div>
          <LookupTest /> {/* // TODO move to BasicRoute */}
        </div>
    </div>
  );
}

export default App;
