import React from 'react'
import {makeStyles} from '@material-ui/styles';
import {Box} from '@material-ui/core';

const useStyles = makeStyles(()=>({
    root:{
        width: '100%',
    }
}))

export const CBox = (props) => {

    const classes = useStyles();

    return(<Box className={classes.root}>

    </Box>)
}