import React from 'react';

import { makeStyles, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, Box } from '@material-ui/core';

const useStyles = makeStyles({
    card: {
        marginTop: 25,
        maxWidth: 245,
    },
    media: {
        height: 140,
    },
});

const FollowerCard = ( { follower, handleClick } ) => {
    const classes = useStyles();
    return (
        <Card onClick={() => handleClick(follower)} className={classes.card}>
            <CardActionArea>
                <CardMedia component='img' image={follower.avatar_url} alt='current follower profile' title='current follower profile' />
                <CardContent>
                    <Typography gutterBottom variant='h5' component='h2'>{`@${follower.login}`}</Typography>
                </CardContent>
            </CardActionArea>         
        </Card>
    );
}

export default FollowerCard;