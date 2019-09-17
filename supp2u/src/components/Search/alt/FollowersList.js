import React from 'react';

import { Box } from '@material-ui/core';

import FollowerCard from './FollowerCard.js';

const FollowersList = ( { followers, handleClick } ) => {

    return (
        <Box display='flex' flexDirection='row' flexWrap='wrap' justifyContent='space-around' alignContent='space-between' >
            {followers.map(follower => <FollowerCard follower={follower} key={follower.id} handleClick={handleClick} />)}
        </Box>
    );
}

export default FollowersList;