
import  React  from "react";

import { Box } from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';


const useStyle = makeStyles(()=>({
    root:{
        width: '100%',
        display: 'flex',
        justifyContent:'center',
        alignItems:'cener',
        color:'white',
        lineHeight:'20px',
        verticalAlign:'middle',
    },

    line:{
        backgroundColor: 'white',
        height: 3,
        width: '45%',
        marginTop: 10,
    },

    text: {
        width: '10%',
        textAlign:'center',
        verticalAlign:'middle',
        lineHeight:'20px',
    }
}))


export const Divider = () => {

    const classes = useStyle();

    return (
        <Box className = {classes.root}>
            <Box className={classes.line}></Box>
            <Box className={classes.text}>OR</Box>
            <Box  className={classes.line}></Box>
        </Box>
    );
}