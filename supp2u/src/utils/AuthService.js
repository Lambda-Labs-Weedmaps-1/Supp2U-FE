import Auth0Lock from 'auth0-lock';
// Todo import supp2u logo
// import logo from './../../assets/img/logo.svg';

export default class AuthService {
	constructor(clientId, domain) {
		// Configure Auth0
		this.lock = new Auth0Lock(clientId, domain, {
			auth: {
        redirectUrl: `${window.location.origin}`,        
        // responseType: 'token',
        responseType: 'id_token'
      },
      
			theme: {
        // Todo add supp2u logo when available
				// logo: logo,
				primaryColor: '#7FDBFF'
			},
			languageDictionary: {
				title: 'Welcome to supp2u'
			}
		});
		// Add callback for lock `authenticated` event
		this.lock.on('authenticated', this._doAuthentication.bind(this));
		// binds login functions to keep this context
		this.login = this.login.bind(this);
	}

	// Todo use arrow functions remove binding in constructor
	_doAuthentication(authResult) {
		// Saves the user token
		this.setToken(authResult.idToken);
    // navigate to the home route
    // Todo reroute to profile page of user
    console.log(authResult)
		window.location.replace('/');
	}
	login() {
		// Call the show method to display the widget.
		this.lock.show();
	}
	loggedIn() {
		// Checks if there is a saved token and it's still valid
		return !!this.getToken();
	}
  // 
  setToken(idToken) {
    // Saves user token to local storage
		localStorage.setItem('id_token', idToken);
	}

	getToken() {
		// Retrieves the user token from local storage
		return localStorage.getItem('id_token');
	}
	logout() {
		// Clear user token and profile data from local storage
		localStorage.removeItem('id_token');
		window.location.replace('/');
	}
}
