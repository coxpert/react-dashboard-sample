
import React from 'react';


import {makeStyles} from '@material-ui/styles';
import {Box, Typography, Button} from '@material-ui/core'


const useStyles = makeStyles(()=>({
    rootVertical:{
        width:'100%',
        display: 'flex',
        justifyContent:'space-between',
        flexDirection:'column',
        padding: 10,
        boxShadow:'inset 0 0 4px 2px #0000007f',
    },
    root:{
        width:'calc(100% - 10px)',
        display: 'flex',
        justifyContent:'space-between',
        flexDirection:'row',
        margin: 5,
        padding: 5,
        borderBottom: 'solid 1px grey',
        '@media (max-width:600px)': {
            flexDirection: 'column',
        }
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
        '@media (max-width:600px)': {
            paddingLeft:`calc((100% - 200px) / 2)`,
            paddingRight:`calc((100% - 200px) / 2)`,
        }
    },
    image:{
        width: '100%',
    },
    earningButtonVertical:{
        width: '100%',
        backgroundColor:'rgb(199, 51,147)',
        outline:'none',
        borderRadius:2,
        color:'white',
        padding: 5,
        marginTop: 5,
    },
    earningButton:{
        width: '100%',
        backgroundColor:'rgb(199, 51,147)',
        outline:'none',
        borderRadius:2,
        color:'white',
        padding: 5,
        marginTop: 20,
    },
    descriptionVertical: {
        color: 'black',
        height: 220,
        marginTop:10,
        marginBottom:10,
    },
    leftBox:{
        width: 180,
        '@media (max-width:600px)': {
            width: '100%',
        }
    },
    rightBox:{
        width: 'calc(100% - 180px)',
        paddingLeft: 20,
        '@media (max-width:600px)': {
            width: '100%',
        }
    },
    description:{
        color: 'black',
        fontSize: 14,
    }
}))


export const OfferListItem = (props) =>{

    const {offer, vertical } = props;

    const classes = useStyles();

    return (
    <div>
        {
            vertical?
            <Box className = {classes.rootVertical}>
                <Box className={classes.verticalWrapper}>
                    <Typography className={classes.title}>{offer.title}</Typography>
                    <Box className={classes.offerImageContainer}>
                        <img className={classes.image} src={offer.image} alt ="Offer Image"/>
                    </Box>
                    <Box className={classes.descriptionVertical}>
                        {offer.description}
                    </Box>
                    <Button className={classes.earningButtonVertical}>
                        {`earn $${offer.earnings.toFixed(2)}`}
                    </Button>
                </Box>
            </Box>:
            <Box className = {classes.root}>
                <Box className={classes.leftBox}>
                    <Box className={classes.offerImageContainer}>
                        <img className={classes.image} src={offer.image} alt ="Offer Image"/>
                    </Box>
                    <Button className={classes.earningButton}>
                        {`earn $${offer.earnings.toFixed(2)}`}
                    </Button>
                </Box>
                <Box  className={classes.rightBox}>
                    <Typography className={classes.title}>{offer.title}</Typography>
                    <Typography className={classes.description}>{offer.description}</Typography>
                </Box>
            </Box>
        }
    </div>
        
        
    );
}