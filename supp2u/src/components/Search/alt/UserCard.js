import React from 'react';

import { makeStyles, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, Box } from '@material-ui/core';

const useStyles = makeStyles({
    cardVisible: {
        maxWidth: 345,
    },
    cardHidden: {
        display: 'none'
    },
    media: {
        height: 140,
    },
});

const UserCard = ( { user, contributionsOn, toggleContributions } ) => {
    const classes = useStyles();
    return (
        <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
            <Card className='c'>
                <CardActionArea>
                    <CardMedia component='img' image={user.avatar_url} alt='current user profile' title='current user profile' />
                    <CardContent>
                        <Typography gutterBottom variant='h5' component='h2'>{user.name}</Typography>
                        <Typography variant='body2' color='textSecondary' component='p'>{user.bio}</Typography>
                    </CardContent>
                    <CardContent>
                        <Typography variant='subtitle1' component='sub'>Followed by {user.followers} people</Typography>
                        <Typography variant='subtitle1' component='sub'>Following {user.following} people</Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size='small' color='primary'><a href={user.html_url}>Github &rarr;</a></Button>
                </CardActions>          
            </Card>
        </Box>
    );
}

export default UserCard;