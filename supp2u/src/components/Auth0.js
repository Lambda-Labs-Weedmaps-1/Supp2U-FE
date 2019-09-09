import React, { Component } from 'react';
// import logo from '../../assets/img/logo.svg';
import '../css/styles.styl';
import Home from './Home'
import { auth } from '../utils/init';

class Auth0 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoggedIn: auth.loggedIn()
		};
	}
	render() {
		return (
			<div className="App">
			
					{/* <img src={logo} className="App-logo" alt="logo" /> */}
					<h2>Welcome to React + Auth0 + Rails API</h2>
		
				<Home
					auth={auth}
					isLoggedIn={this.state.isLoggedIn}
					token={auth.getToken()}
					history={this.props.history}
				/>
			</div>
		);
	}
}
export default Auth0;
