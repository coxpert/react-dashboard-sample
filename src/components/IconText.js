import React from 'react'
import {makeStyles} from '@material-ui/styles';
import {Box, Typography} from '@material-ui/core';

const useStyles = makeStyles(()=>({
    root:{
        width:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'cetner',
    },
    text:{
        paddingLeft: 10,
    }
}))

const IconText = (props) => {

    const {icon, text, ClassName} = props;
    const classes = useStyles();

    return(
        <Box className={classes.root}>
            {icon}
            <Typography className={classes.text}>{text}</Typography>
        </Box>
    )
}

export default  IconText;