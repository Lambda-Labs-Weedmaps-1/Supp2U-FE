import React from 'react';

import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles({
    box: {
       backgroundColor: '#24292E',
       color: '#fff', 
       padding: 25,
       paddingBottom: 15,
    },
    title: {
        color: '#fff',
    },
})

const TopBar = () => {
    const classes = useStyles();
    return (
        <Box className={classes.box} display='flex' justifyContent='center'>
            <h1 className={classes.title}>GitHub UserCards</h1>
        </Box>
    );
}

export default TopBar;