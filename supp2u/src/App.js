import React from 'react';
import Map from './components/googleMap/Map'
import './App.sass';
import BusinessCreator from './components/Business/BusinessCreator';
import Navigation from "./components/Navigation/Navigation"
import BasicRoute from "./BasicRoute";
import LookupTest from './components/LookupTest';
import Auth0 from './components/Auth0';



function App() {
  return (
    <div className="App">
        <Navigation />
        <div className="Map_Holder">
          <Map /> {/* // TODO move to BasicRoute  if needed*/}
        </div>
        <div>
          <LookupTest /> {/* // TODO move to BasicRoute */}
        </div>
        <div>
          <BusinessCreator />
        </div>
        <BasicRoute />
        <Auth0 />
    </div>
  );
}

export default App;
