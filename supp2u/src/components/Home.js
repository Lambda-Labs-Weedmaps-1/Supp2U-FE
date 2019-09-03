import React, { useState } from 'react';
import {
	pingApiServer,
	fetchProfilesWithAuth,
	fetchProfilesNoAuth
} from '../utils/API';

import { auth } from '../utils/init';

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
  
  const _fetchProfilesNoAuth = () => {
		setStatus('Fetching')
		fetchProfilesNoAuth().then(data => {
			setStatus('Fetch completed')
      setPingData(data)
		});
  };
  
  const _fetchProfilesWithAuth = () => {
		setStatus('Fetching')
		fetchProfilesWithAuth(this.props.token).then(data => {
			setStatus('Fetch completed')
      setPingData(data)
		});
  };
  
  const renderSignInUp = () => {
		return (
			<Button color="primary" onClick={auth.login}>
				Sign In / Sign Up
			</Button>
		);
  };
  
  const renderLogOut = () => {
		return (
			<div>
				<Row>
					<Col>
						<Button color="primary" onClick={auth.logout}>
							Sign out
						</Button>
						<Button color="secondary" onClick={pingApi}>
							Ping API Server
						</Button>
					</Col>
				</Row>
				<Row>
					<Col xs="12" sm="6">
						<Button color="danger" onClick={_fetchProfilesNoAuth}>
							Fetch Profile without Authentication
						</Button>
					</Col>
					<Col xs="12" sm="6">
						<Button color="success" onClick={_fetchProfilesWithAuth}>
							Fetch Profile with Authentication
						</Button>
					</Col>
				</Row>
				<Row>
					<Col>
						<Button outline color="danger" size="sm" onClick={resetStates}>
							Reset
						</Button>
					</Col>
				</Row>
			</div>
		);
	};


  return (
    
			<Container>
				<div className="buttons">
					<ButtonGroup vertical>
						{auth.loggedIn()
							? renderLogOut()
							: renderSignInUp()}
					</ButtonGroup>
				</div>
				{renderLoading()}

			</Container>
		);
  
}
  
	export default Home;
