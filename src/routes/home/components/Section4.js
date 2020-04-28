
import  React  from "react";

import { Box, Container, Typography, Grid, Hidden} from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';
import CheckIcon from '@material-ui/icons/Check';

const useStyle = makeStyles(()=>({
    root:{
        position:'relative',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        minHeight: 400,
        paddingTop: 60,
        // backgroundImage:'linear-gradient(#d8ecff, white)',
        zIndex: 3,
    },
    wrapper:{
        width:'100%',
        maxWidth: 1000,
        margin: '40px auto',
        marginBottom: 100,
        position: 'relative',
        zIndex: 5,
    },
    image:{
        width:'100%',
        height: 'auto',
        minHeight: 300,
    },
    typo1:{
        margin: 30,
        fontFamily:'Anton',
        fontSize: 60,
        textAlign:'center',
        textShadow: '0 0 80px rgba(255, 255, 255, .5)',
        color:'#f3831e',
        lineHeight: '70px',
        WebkitTextStroke: '1px white',
        textTransform:'uppercase',
        display: 'block',
        backgroundImage: `url(${require("Assets/images/letter-bg.png")})`,
        backgroundRepeatY: 'repeat',
        backgroundSize: 'cover',
        WebkitBackgroundClip: 'text',
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
        WebkitAnimation: "aitf 60s linear infinite",
        WebkitTransform: "translate3d(0, 0, 0)",
        WebkitBackfaceVisibility: "hidden",
        '@media (max-width: 580px)' : {
            fontSize: 44,
            marginTop: 50,
        }
    },
    typo2:{
        fontFamily:'Anton',
        textAlign:'left',
        lineHeight: '30px',
        fontSize: 20,
        color: 'white',
        marginTop: 10,
        width: '100%',
        marginBottom: 10,
        letterSpacing: 1,
        '@media (max-width: 960px)' : {
            fontSize: 20,
            lineHeight: '25px',
            paddingLeft:0,
            letterSpacing: 0,
            textAlign: 'center',
        }
    },
    referImage:{
        width:'100%',
        maxWidth: 400,
        height:'fit-content',
        '@media (max-width: 960px)': {
            'margin': 'auto',
        }
    },
    referralStepsContainer:{
        padding: 20,
        borderRadius: 10,
        border: '2px dashed #f3831e',
        transition: '0.5s',
        '&:hover':{
            border: '2px solid #f3831e',
            background: 'rgba(0,0,0,.5)',
        }
    },
    referralStemsItemContainer:{
        display: 'flex',
        width: '100%',
        justifyContent: 'left',
        alignItems: 'center',
    },
    referralStepsItem: {
        fontSize: 16,
        color: 'white',
        margin: '10px 10px',
    },
    referImageContainer:{
        display: 'flex',
        alignItems: 'center',
    },
    dividerContainer:{
        width: '80%',
        margin: 'auto',
        position: "absolute",
        bottom: 0,
        transform: 'translateY(50%)',
    },
    divider:{
        width: '100%',
    },
    dividerDot:{
        position: 'absolute',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        animation: 'dividermove 10s linear infinite',
    },
}))


export const Section4 = () => {

    const classes = useStyle();

    return (
        <Box className = {classes.root}>
            <div id="dollar_animation"></div>
            <Container>
                <Box className={classes.wrapper}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} justify="center">
                            <Typography className={classes.typo1}>
                                EARN BIG BUCKS FOR REFERRALS
                            </Typography>
                        </Grid>
                        <Grid item container xs={12} md={6} justify="flex-start">
                            <Typography className={classes.typo2}>
                                Referring friends &amp; family to Faevaa Pay is simple and earns you $5.00 Faevaa Cash per referral that successfully completes the following
                            </Typography>
                            <Box className={classes.referralStepsContainer}>
                                <Box className={classes.referralStemsItemContainer}>
                                    <CheckIcon style={{color: 'white', borderRadius: '100%', border: '1px solid white',}}/>
                                    <Typography className={classes.referralStepsItem}>
                                        Signup by entering your referral code during signup
                                    </Typography>
                                </Box>
                                <Box className={classes.referralStemsItemContainer}>
                                    <CheckIcon style={{color: 'white', borderRadius: '100%', border: '1px solid white',}}/>
                                    <Typography className={classes.referralStepsItem}>
                                        Activates their account by confirming their email address
                                    </Typography>
                                </Box>
                                <Box className={classes.referralStemsItemContainer}>
                                    <CheckIcon style={{color: 'white', borderRadius: '100%', border: '1px solid white',}}/>
                                    <Typography className={classes.referralStepsItem}>
                                        If your referral purchases their Faevaa Pay tee and becomes a Elite VIP member you earn $5.00
                                    </Typography>
                                </Box>
                            </Box>
                            <Typography className={classes.typo2}>
                                There are no limits to the amount of Faevaa Cash you can earn by referring people to Faevaa Pay
                            </Typography>
                        </Grid>
                        <Grid item container className={classes.referImageContainer} xs={12} md={6} justify="flex-end">
                            <img className={classes.referImage} src={require("Assets/images/refer.png")} alt="Refer"/>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            <Box className={classes.dividerContainer}>
                <img className={classes.divider} src={require("Assets/images/divider.png")} alt="Divider"/>
                <img className={classes.dividerDot} src={require("Assets/images/dot.png")} alt="Dot"/>
            </Box>
        </Box>
    );
}