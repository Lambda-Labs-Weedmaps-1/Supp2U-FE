import React from 'react';
<<<<<<< HEAD
import Map from './components/googleMap/Map';
// import { Route } from 'react-router-dom';
=======
import Navigation from './components/Navigation/Navigation'
>>>>>>> 8c57698cf03e84fa277a1867baec5405dd3c60f1
import './App.sass';
import BasicRoute from './BasicRoute';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
toast.configure();

function App() {
<<<<<<< HEAD
	return (
		<div className="App">
			<BasicRoute />
			<div className="Map_Holder">
				<Map />
			</div>
		</div>
	);
=======
  return (
    <div className="App">
        <Navigation />
        <BasicRoute />
    </div>
  );
>>>>>>> 8c57698cf03e84fa277a1867baec5405dd3c60f1
}

export default App;
