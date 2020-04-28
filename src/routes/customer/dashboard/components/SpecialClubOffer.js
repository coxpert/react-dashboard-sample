
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
        flexDirection:'column',
    },
    title:{
        fontSize:30,
        color: '#428544',
        paddingBottom:10,
    },
    earnButton:{
        color: 'white',
        border:'none',
        borderRadius: 3,
        outline:'none',
        backgroundColor: '#c73393',
        fontWeight:'bold',
        padding:'4px 30px',
    },
    buttonContainer:{
        width: '100%',
        backgroundColor:'white',
        padding: 20,
    }
})


export const SpecialClubOffer = (props) =>{

    const { earnings } = props || 4;

    const classes = useStyles();

    return (
        <Box className = {classes.root}>
            <Typography className={classes.title}>Special Club Offer</Typography>
            <Box className={classes.wrapper}>
                <img src={'https://www.inboxdollars.com/graphics/advertisers/offers/StashInboxDollars300x250.png'} />
            </Box>
            <Box className={classes.buttonContainer}>
                <button className={classes.earnButton}>{`earn $${earnings.toFixed(2)}`}</button>
            </Box>
        </Box>
    );
}