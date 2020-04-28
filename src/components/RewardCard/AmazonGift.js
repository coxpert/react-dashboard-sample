
import React, {useState} from 'react';

import { Paper, Typography, Button, Box, Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(()=>({
    root:{
        display:'flex',
        width: '100%',
        justifyContent: 'space-between',
        flexDirection:'column',
        padding: 20,
        marginTop: 20,
    },
    image:{
        width: '100%',
        height: 170,
    },
    icon: {
        width: 40,
        height: 40,
        float:'right'
    },
    claimButton:{
        height: 26,
        padding: 0,
        width: 100,
        fontSize: 16,
    },
    title:{
        fontSize: 18,
        fontWeight: 'bold',
        padding: 5,
    },
    dialogTitlebar:{
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center',
        flexDirection:'row',
        width: '100%',
        marginBottom: 10,
    },
    dialogTitle:{
        fontSize: 30,
        fontWeight: 'bold',
        paddingLeft: 10,
        fontStyle:'italic',
        marginLeft: 10,
        color: '#334599',
    },
    dialog:{
        padding: 10,
        display:'flex',
        justifyContent:'center',
        alignItems: 'cener',
        flexDirection:'column',
        position: 'relative',
    },
    dialogContent:{
        padding: 10,
        border: 'solid 1px grey',
        borderRadius: 10,
        overflowY: 'scroll',
        maxHeight: 600,
        '&::-webkit-scrollbar':{
            width: 1,
        }
    },
    cashOutButton:{
        color: 'white',
        backgroundColor: '#2e56ba',
        display: 'flex',
        marginTop: 21,
        margin: 'auto',
        fontWeight: 'bold',
        fontSize: 18,
    },
    close:{
        position: 'absolute',
        top: 10, right: 10,
        zIndex: 10,
    },
    label:{
        marginTop:10,
    }
}))

export const AmazonGift = (props)=> {

    const classes = useStyles();

    const [ isOpenDialog, openDialog ] = useState(false);

    const handleClickOpen = () => {
        openDialog(true);
     };
  
    const handleClose = () => {
        openDialog(false);
     };

    return (
        <div>
            <Paper className={classes.root}>
                <img src={require('Assets/images/amazon.png')} className={classes.image} alt="RewardCard"/>
                <Typography className={classes.title}>Amazon Gift Card</Typography>
                <Button variant="contained" color="primary" className={ classes.claimButton } onClick={()=>{handleClickOpen()}}>Claim It</Button>
            </Paper>

            <Dialog 
                open={isOpenDialog} 
                onClose={()=>{handleClose()}} 
                maxWidth={'sm'}
                >
                <IconButton className={classes.close} onClick={handleClose}> <CloseIcon /> </IconButton>
                <Box className={classes.dialog}>
                    <Box className={classes.dialogTitlebar}>
                        <Box>
                            <img src={require('Assets/images/amazon.png')} className={classes.icon} alt="RewardCard"/>
                        </Box>
                        <Box>
                            <Typography  className={classes.dialogTitle}>Amazon Gift</Typography>
                        </Box>
                    </Box>
                    <Box className={classes.dialogContent}>
                        <Typography>
                        You are currently choosing to cash out your Faevaa Cash earnings through Check Method.  When using this method there are no maximum limit however all check request must be at least $100.00
Please fill out the required information to cash out through PayPal
                        </Typography>
                        <strong className={classes.label}>How much do you desire to cash out</strong>
                        <TextField autoFocus margin="dense" label="(Minimum $100.00)" type="number" fullWidth />
                        <TextField autoFocus margin="dense"  label="Make Check Payable First &amp; Last Name" type="text" fullWidth />

                        <Grid container spacing={2}>
                            <Grid item xs={12} md={7}>
                                <TextField autoFocus margin="dense" label="Mailing Adress" type="text" fullWidth />
                            </Grid>
                            <Grid item  xs={12}  md={5}>
                                <TextField autoFocus margin="dense" label="Mailing Adress" type="text" fullWidth />
                            </Grid>
                        </Grid>

                        <Grid container spacing={2}>
                            <Grid item xs={12}  md={4}>
                                <TextField autoFocus margin="dense" label="City" type="text" fullWidth />
                            </Grid>
                            <Grid item xs={12}  md={4}>
                                <TextField autoFocus margin="dense" label="State" type="text" fullWidth />
                            </Grid>
                            <Grid item xs={12}  md={4}>
                                <TextField autoFocus margin="dense" label="Zipcode" type="text" fullWidth />
                            </Grid>
                        </Grid>

                        <strong className={classes.label}>Adress Type</strong>
                        <TextField autoFocus margin="dense" label="Confirm your cash app name" type="text" fullWidth />

                        <h4 style={{fontStyle:'italic', marginTop:10,}}>Payout Speed : </h4>
                        <Typography  style={{fontStyle:'italic'}}>
                        Please note Elite Vip Members receive all cashout requests via check within 1-2 Business Days of redemption Monday-Friday. Standard members redemption requests by check are processed within 3-5 business days (Monday-Friday) excluding weekends. All check payout requests are sent via USPS certified mail with tracking and insurance to ensure safe delivery to all users.
                        </Typography>


                        <h4  style={{fontStyle:'italic', marginTop:10,}}>Terms and Conditions :</h4>
                        <Typography  style={{fontStyle:'italic'}}>
                        By cashing out your Faevaa cash you agree that redemption cash out requests is final and cannot be refunded unless we are unable to complete your request only then are refunds and exchanges are allowed. All members will receive an automated email and account notification once the cash-out request has been fulfilled. We reserve the right to cancel any requests that are deemed fraudulent or suspicious for the protection of our users.
                        </Typography>

                        <strong className={classes.label}>In order to coninue please confirm your account password</strong>
                        <TextField autoFocus margin="dense"  type="text" fullWidth />
                    </Box>
                    <Button variant="contained" onClick={()=>{handleClose()}} className={classes.cashOutButton}>
                        Cash Out
                    </Button>
                </Box>
            </Dialog>
        </div>
        
    )
}