import React from 'react';
import Map from './components/googleMap/Map';
import {Route} from "react-router-dom";
import './App.sass';
import BasicRoute from "./BasicRoute";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

toast.configure();


function App() {
  return (
    <div className="App">


        <BasicRoute />
        <div className="Map_Holder">
          <Map />
        </div>

    </div>
  );
}

export default App;
