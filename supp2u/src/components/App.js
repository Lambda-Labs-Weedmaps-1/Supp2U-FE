import React, { Component, useState } from 'react';
// import logo from '../../assets/img/logo.svg';
import '../css/styles.styl';
import Home from './Home';
import { auth } from '../utils/init';

// * Hooks Implementation
const App = () => {
  // maybe status, isLoggedIn ???
  // const [isLoggedIn, logInUser] = useState(auth.loggedIn())
  // const [isLoggedIn, logInUser] = useState(auth.loggedIn())

  return (
    <div className="App">
      <div className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h2>Welcome to React + Auth0 + Rails API</h2>
      </div>
      <Home
        auth={auth}
        // isLoggedIn={logInUser}
        // isLoggedIn={logInUser(sisLoggedIn)}
        token={auth.getToken()}
      />
    </div>
  );
}


// class App extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			isLoggedIn: auth.loggedIn()
// 		};
// 	}
// 	render() {
// 		return (
// 			<div className="App">
// 				<div className="App-header">
// 					{/* <img src={logo} className="App-logo" alt="logo" /> */}
// 					<h2>Welcome to React + Auth0 + Rails API</h2>
// 				</div>
// 				<Home
// 					auth={auth}
// 					isLoggedIn={this.state.isLoggedIn}
// 					token={auth.getToken()}
// 				/>
// 			</div>
// 		);
// 	}
// }
export default App;
