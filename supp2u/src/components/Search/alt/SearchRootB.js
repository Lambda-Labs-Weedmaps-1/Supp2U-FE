import React from 'react';

import axios from 'axios';

import UserCard from './UserCard.js';
import FollowersBar from './FollowersBar.js';
import FollowersList from './FollowersList.js';
import SearchForm from './SearchForm.js';

import styled from 'styled-components';
import { Divider, Box } from '@material-ui/core';

const FollowersSection = styled.section`
  margin-top: 50px;
`;

class SearchRootB extends React.Component {
  state = {
    userName: 'LarynaB', 
    user: [],
    followers: [],
    searchInput: '',
    contributionsOn: false
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/${this.state.userName}`)
      .then(res => {
        this.setState({user: res.data})
        return res.data.followers_url; 
      })
      .then(followersURL => {
        axios.get(followersURL)
          .then(res => this.setState({followers: res.data})) 
      })
      .catch(err => alert(err));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.userName !== this.state.userName) {
      axios.get(`https://api.github.com/users/${this.state.userName}`)
        .then(res => {
          this.setState({user: res.data})
          return res.data.followers_url;
        })
        .then(followersURL => {
          axios.get(followersURL)
            .then(res => this.setState({followers: res.data}))
        })
        .catch(err => alert(err));
    }
  };

  handleClick = (follower) => {
    this.setState({
      userName: follower.login
    })
  }

  handleChange = (event) => {
    this.setState({
      searchInput: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      userName: (this.state.searchInput === '' ? 'MicahJank' : this.state.searchInput)
    })
  }

  render() {
    return (
      <Box>
        <SearchForm handleSubmit={this.handleSubmit} searchInput={this.state.searchInput} handleChange={this.handleChange} />
        <UserCard user={this.state.user} />
        <FollowersSection>
          <Divider />
          <FollowersBar />
          <FollowersList followers={this.state.followers} handleClick={this.handleClick} />
        </FollowersSection>
      </Box>
    );
  }
}

export default SearchRootB;
