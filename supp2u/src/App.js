import React from 'react';
import Map from './components/googleMap/Map';
import {Route} from "react-router-dom";
import './App.sass';
import BusinessCreator from './components/Business/BusinessCreator';
import BasicRoute from "./BasicRoute";
import LookupTest from './components/LookupTest';


function App(props) {
  return (
    <div className="App">
        <Route path={"/"} component={BasicRoute} />
        <div className="Map_Holder">
          <Map /> {/* // TODO move to BasicRoute  if needed*/}
        </div>
        <div>
          <LookupTest /> {/* // TODO move to BasicRoute */}
        </div>
        <div>
          <BusinessCreator />
        </div>
    </div>
  );
}

export default App;
