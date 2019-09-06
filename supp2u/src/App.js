import React from 'react';
import Navigation from './components/Navigation/Navigation'
import './App.sass';
import BasicRoute from "./BasicRoute";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
toast.configure();


function App() {
  return (
    <div className="App">
        <Navigation />
        <BasicRoute />
    </div>
  );
}

export default App;
