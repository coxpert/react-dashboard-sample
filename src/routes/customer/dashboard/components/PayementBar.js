
import React from 'react';

import clsx from 'clsx';
import {makeStyles} from '@material-ui/styles';
import { Box } from '@material-ui/core'


const useStyles = {
    root:{
        width:'100%',
        padding:5,
        backgroundColor:'white',
        paddingTop:20,
        paddingBottom: 20,
        boxShadow:' 0 0 4px 2px #0000007f'
    },
    wrapper:{
        width: '100%',
        display: 'flex',
        justifyContent:'space-around',
        height: 40,
    },
    progressBarContainer:{
        width:'80%',
        padding: 5,
        background: '#00c55c',
        borderRadius: 5,
        textAlign:'center'
    },
    limitEarning:{
        width:'18%',
        borderRadius: 5,
        backgroundColor: '#525252',
        color: 'white',
        fontSize: 18,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign:'center',
        cursor:'pointer',
    },
    progressBar:{
        backgroundImage: `url(${require('Assets/images/progress.png')})`,
        backgroundSize: 'cover',
        '-webkit-box-shadow': 'inset 0 0px 10px -3px black',
        height: '100%',
        borderRadius: 5,
        display: 'flex',
        alignItems: 'center',
        fontSize: 20,
        color: 'white',
        textAlign:'center',
        justifyContent:'center'
    },
    infoText: {
        textAlign: 'center',
        color: '#096735',
    }
}


export const PayementBar = (props) =>{

    const { earnings } = props;

    const styles = makeStyles(()=>({...useStyles, progressBar: {...useStyles.progressBar,width:`${Math.ceil(earnings/150*100)}%`}}));
    const classes = styles();


    return (
        <Box className = {classes.root}>
            <Box className={classes.wrapper}>
                <Box className={classes.progressBarContainer}>
                    <div className={classes.progressBar}>
                        ${earnings}
                    </div>
                </Box>
                <Box className={classes.limitEarning}>$150</Box>
            </Box>
            {
                (earnings<150) &&
                <Box className={classes.infoText}>
                    You must earn $150 to request a payment
                </Box>
            }
            
        </Box>
    );
}