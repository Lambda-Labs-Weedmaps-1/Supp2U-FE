//src/components/Home.js
import React, { useState, useEffect } from 'react';
// import JSONDebugger from '../utils/JSONDebugger';
import {
	pingApiServer,
	fetchProfilesWithAuth,
	fetchProfilesNoAuth
} from '../utils/API';

import { Container, Row, Col, Button, ButtonGroup } from 'reactstrap';

import Loading from './Loading';

const Home = () => {
  const [status, setStatus] = useState('Idle');
  const [pingData, setPingData] = useState('No data from server yet')
  const [profileData, setProfileData] = useState('No data from server yet')

  const resetStates = () => {
    setStatus(status)
    setPingData(pingData)
    setProfileData(profileData)
  }

  const renderLoading = () => {
    switch (status) {
			case 'Fetching':
				return <Loading />;
			default:
				return null;
		}
  }

  const pingApi = () => {
    setStatus('Fetching')
		
		pingApiServer().then(data => {
      setStatus('Fetch completed')
      setPingData(data)
		});
  };
  
  _fetchProfilesNoAuth = () => {
		setStatus('Fetching')
		fetchProfilesNoAuth().then(data => {
			setStatus('Fetch completed')
      setPingData(data)
		});
  };
  
  _fetchProfilesWithAuth = () => {
		this.setState({ status: 'Fetching' });
		fetchProfilesWithAuth(this.props.token).then(data => {
			this.setState({ status: 'Fetch completed', profileData: data });
		});
	};


  return (
    
			<Container>
				<div className="buttons">
					<ButtonGroup vertical>
						{this.props.isLoggedIn
							? this.renderLogOut()
							: this.renderSignInUp()}
					</ButtonGroup>
				</div>
				{this.renderLoading()}
				{/* {<JSONDebugger json={this.state} />} */}
			</Container>
		);
  
}
  
	export default Home;
