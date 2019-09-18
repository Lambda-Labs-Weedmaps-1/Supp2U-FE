import React from 'react';

import { makeStyles, MenuItem, TextField, Box, Button } from '@material-ui/core';
import { flexbox } from '@material-ui/system';


const useStyles = makeStyles(theme => ({
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 340,
    },
    searchBox: {
        height: 150,
    },
    button: {
        margin: theme.spacing(1),
    },
    form: {
        display: flexbox,
        flexDirection: "column",
    }
}))

const SearchForm = ( { handleChange, searchInput, handleSubmit } ) => {

    const classes = useStyles();

    return (
        <Box className={classes.searchBox} display='flex' justifyContent='center'>
            <form onSubmit={handleSubmit} className={classes.form}>
                <TextField value={searchInput} onChange={handleChange} id='standard-search' label='Search a User' type='search' margin='normal' className={classes.textField} />
                <Button type='submit' className={classes.button} variant='contained' color='primary'>Search</Button>
            </form>
        </Box>
    )
}

export default SearchForm;