import React, { Component } from 'react';
// import logo from '../../assets/img/logo.svg';
import '../css/styles.styl';
import Home from './Home';
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
				<h2>Welcome to supp2u</h2>
				<Home
					auth={auth}
					isLoggedIn={this.state.isLoggedIn}
					token={auth.getToken()}
				/>
			</div>
		);
	}
}
export default Auth0;
