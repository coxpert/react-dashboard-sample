
import React from 'react';


import {makeStyles} from '@material-ui/styles';
import {Box, Typography, Button} from '@material-ui/core'


const useStyles = makeStyles(()=>({
    root:{
        width:'100%',
        display: 'flex',
        justifyContent:'space-between',
        flexDirection:'column',
        marginLeft: 5,
        marginTop:5,
    },
    title:{
        width: '100%',
        color: 'black',
        fontSize: 14,
        fontWeight: 'bold',
    },
    offerImageContainer:{
        width: '100%',
        marginTop:5,
    },
    image:{
        width: '100%',
    },
    earningButton:{
        width: '100%',
        backgroundColor:'rgb(199, 51,147)',
        outline:'none',
        borderRadius:2,
        color:'white',
        padding: 5,
        marginTop: 5,
    }
}))


export const OfferCard = (props) =>{

    const {title, image, earnings } = props;

    const classes = useStyles();

    return (
        <Box className = {classes.root}>
            <Typography className={classes.title}>{title}</Typography>
            <Box className={classes.offerImageContainer}>
                <img className={classes.image} src={image} alt ="Offer Image"/>
            </Box>
            <Button className={classes.earningButton}>
                {`earn $${earnings.toFixed(2)}`}
            </Button>
        </Box>
    );
}