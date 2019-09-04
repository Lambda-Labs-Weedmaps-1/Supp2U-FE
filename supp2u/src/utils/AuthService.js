import Auth0Lock from 'auth0-lock';
import {fetchProfilesWithAuth} from "./API";
// import logo from './../../assets/img/logo.svg';

export default class AuthService {
	constructor(clientId, domain) {
		// Configure Auth0
		this.history={};
		this.lock = new Auth0Lock(clientId, domain, {
			auth: {
				redirectUrl: `${window.location.origin}`,
				// redirectUrl: 'https://supp2u.netlify.com/',
				responseType: 'id_token',
				// responseMode: 'form_post'
		  	},
			theme: {
				// logo: logo,
				primaryColor: '#7FDBFF'
			},
			autoclose: true,
			languageDictionary: {
				title: 'React + Auth0 + Rails API'
			}
		});
		// Add callback for lock `authenticated` event
		this.lock.on('authenticated', this._doAuthentication.bind(this));
		// binds login functions to keep this context
		this.login = this.login.bind(this);
	}

	// Todo use arrow functions remove binding in constructor
	_doAuthentication(authResult) {
		fetchProfilesWithAuth(authResult.idTokenPayload.email, this.history);
		return authResult;
	}
	login = (history) =>{
		// Call the show method to display the widget.
		this.lock.show();
		this.history = history;
	};
	loggedIn() {
		// Checks if there is a saved token and it's still valid
		return !!this.getToken();
	}

	getToken() {
		// Retrieves the user token from local storage
		return localStorage.getItem('user_id');
	}
	logout() {
		// Clear user token and profile data from local storage
		localStorage.removeItem('user_id');
		localStorage.removeItem('customer_id');
		localStorage.removeItem('business_id');
		localStorage.removeItem('id_token');
		window.location.replace('/');
	}
}
