
import React from 'react';

import clsx from 'clsx';
import {makeStyles} from '@material-ui/styles';
import { Box, Typography } from '@material-ui/core'


const useStyles =makeStyles( {
    root:{
        width:'100%',
        padding:5,
        paddingTop:10,
        paddingBottom: 20,
    },
    wrapper:{
        width: '100%',
        display: 'flex',
        justifyContent:'space-around',
        border:'solid 2px white',
        backgroundColor: '#6ebe44',
        flexDirection:'column',
        padding: 10,
    },
    title:{
        fontSize:30,
        color: '#428544',
        paddingBottom:10,
    },
    contentBox:{
        display:'flex',
    },
    leftBox:{
        width: '30%',
        background: 'linear-gradient(to bottom left, #f15e14, #f4ad14)',
    },
    rightBox:{
        width: '70%',
        background:'white',
        display:'flex',
        justifyContent:'center',
        alignItems: 'center',
        flexDirection:'column',
    },
    typo1:{
        color: 'white',
        textAlign:'center',
        paddingBottom: 4,
    },
    typo2:{
        color: '#2c6d74',
        fontWeight:'bold',
    },
    
    typo3:{
        fontSize: 10,
        textAlign:'center',
    },
    earnButton:{
        color: 'white',
        border:'none',
        borderRadius: 3,
        outline:'none',
        backgroundColor: '#c73393',
        fontWeight:'bold',
        padding:'4px 20px',
    }
})


export const WhatsNew = (props) =>{

    const { earnings } = props;

    const classes = useStyles();

    return (
        <Box className = {classes.root}>
            <Typography className={classes.title}>What's New</Typography>
            <Box className={classes.wrapper}>
                <Typography className={classes.typo1}>Get the Billy Button &amp; <span  className={classes.typo2}> Earn $0.25</span></Typography>
                <Box className={classes.contentBox}>
                    <Box className={classes.leftBox}>
                        <img src={require('Assets/images/billy-button-icon.png')} />
                    </Box>
                    <Box className={classes.rightBox}>
                        <button className={classes.earnButton}>{`earn ${earnings.toFixed(2)}`}</button>
                        <Typography  className={classes.typo3}>Save time and earn faster</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}