
import React, {Component} from 'react';


import {withStyles} from '@material-ui/styles';
import {Box, Typography} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import SendIcon from '@material-ui/icons/Send';

const useStyles = {
    root:{
        width:'calc(100% - 20)',
        display: 'flex',
        backgroundColor:'white',
        flexDirection:'column',
        margin:10,
    },
    titleBar:{
        width:'100%',
        background:'linear-gradient(to bottom, #6fbe44 , #4b8c3a)',
        height:30,
        color:'white',
        fontSize:16,
        fontWeight:'bold',
        paddingLeft:20,
        verticalAlign:'center',
    },
    contentBox:{
        display:'flex',
        justifyContent:''
    },
    warning:{
        fontSize: 24,
        textAlign: 'center',
        color: 'red',
        margin: 12,
        '@media (max-width: 480px)':{
            fontSize: 16,
        }
    },
    optionTitle:{
        paddingLeft: 20,
        fontSize: 18,
        fontWeight: 'bold',
    },
    methodImgWrapper:{
        paddingLeft: 20,
        overflowX: 'hidden',
    },
    methodInfoWrapper: {
        paddingLeft: 20,
        fontSize: 20,
    },
    methodList: {
        marginLeft: 30,
        fontSize: 18,
    }
}


class  RequestPayment extends Component {

    render(){

        const { classes, earnings } = this.props;

        return (
        <Box className = {classes.root}>
            <Box className={classes.titleBar}>Request Payment</Box>
            <Typography className={classes.warning}>
                Sorry, you must have $150.00 in your Faevaa Cash Balance before you can cash out.
            </Typography>
            <Grid container spacing = {3} mb={3}>
                <Grid item xs={12} spacing = {3}>
                    <Typography className={classes.optionTitle}>
                        Popular Payout Methods
                    </Typography>
                </Grid>
                <Grid item sm={12} md={4} spacing = {3}>
                    <Box className={classes.methodImgWrapper}>
                        <img src={require('Assets/images/PaypalPayouts.png')}/>
                    </Box>
                </Grid>
                <Grid item sm={12} md={8} spacing = {3}>
                    <Box className={classes.methodInfoWrapper}>
                        <SendIcon style={{fontSize: 18, marginRight: 5, color: 'green'}}/>
                        PayPal
                        <ul className={classes.methodList}>
                            <li>Receive your Faevaa Cash sent directly to your existing PayPal account</li>
                            <li>When you Cash out your Faevaa Cash via PayPal, we will ask you to confirm your PayPal email address</li>
                        </ul>
                    </Box>
                </Grid>
            </Grid>
            <Grid container spacing = {3}>
                <Grid item sm={12} md={4} spacing = {3}>
                    <Box className={classes.methodImgWrapper}>
                        <img src={require('Assets/images/cashapp.png')}/>
                    </Box>
                </Grid>
                <Grid item sm={12} md={8} spacing = {3}>
                    <Box className={classes.methodInfoWrapper}>
                        <SendIcon style={{fontSize: 18, marginRight: 5, color: 'green'}}/>
                        Cash App
                        <ul className={classes.methodList}>
                            <li>Receive your Faevaa Cash sent directly to your existing cash app account</li>
                            <li>If you do not have an existing cash app account, creating one is fast and simple by downloading the cash app from App or google play store and signing up for a new account in minutes.</li>
                            <li>Cash app is a popular payout option because users can receive their Faevaa cash in minutes without waiting on a traditional check to arrive.</li>
                        </ul>
                    </Box>
                </Grid>
            </Grid>
        </Box>
        );
    }  
}

export default withStyles(useStyles)(RequestPayment);