import React from 'react';
import Map from './components/googleMap/Map';
import {Route} from "react-router-dom";
import './App.sass';
import BasicRoute from "./BasicRoute";
import LookupTest from './components/LookupTest';
import Auth0 from './components/Auth0';


function App() {
  return (
    <div className="App">
        <Route path={"/"} component={BasicRoute} />
      <Auth0 />
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
