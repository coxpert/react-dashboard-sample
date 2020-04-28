
import  React  from "react";

import { Box , Container, Grid, Typography} from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';
import CheckIcon from '@material-ui/icons/Check';

const useStyle = makeStyles(()=>({
    root:{
        width: '100%',
        display: 'flex',
        minHeight: 400,
        position:'relative',
        justifyContent:'center',
        alignItems:'center',
        paddingTop: 50,
        paddingBottom: 50,
        marginBottom: 40,
        // backgroundImage:'linear-gradient(white, #d8ecff)',
        flexDirection:'column','@media (max-width: 780px)' : {
            paddingTop: 50,
            paddingBottom: 80,
        }
    },
    backgroundContainer:{
        display: 'flex',
        width: '100%',
        position: 'absolute',
        justifyContent:'space-between',
        paddingLeft: '6%',
        paddingRight: '6%',
        zIndex: 1,
    },
    container:{
        zIndex: 2,
        maxWidth: 1000,
    },
    shirtWrapper:{
        display: 'flex',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: 'white'
    },
    shirt: {
        width: '100%',
        maxWidth: 300,
    },
    triangle1:{
        width: '15%',
        animation: 'triangle1 10s linear infinite',
    },
    triangle2:{
        width: '15%',
        animation: 'triangle2 10s linear infinite',
    },
    secure:{
        marginTop: 60,
        width: '80%',
        position: 'relative',
    },
    secureImage:{
        width: '100%',
    },
    lockImage:{
        position: 'absolute',
        top: '0',
        transform: 'translateY(-28px)',
        animation: 'lockmove 10s linear infinite',
        '@media (max-width: 580px)' : {
            transform: 'translateY(-32px)',
        }
    },
    infoContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    typo1:{
        margin: 30,
        fontFamily:'Anton',
        fontSize: 60,
        textAlign:'left',
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
            textAlign:'center',
            marginTop: 50,
        }
    },
    typo2:{
        fontFamily:'Anton',
        textAlign:'left',
        lineHeight: '40px',
        fontSize: 24,
        color: 'white',
        
        '@media (max-width: 580px)' : {
            fontSize: 20,
            textAlign:'center',
            lineHeight: '40px',
        }
    },
    advantageContainer:{
        width: '90%',
        margin: '20px auto',
        padding: 20,
        borderRadius: 10,
        border: '2px dashed #f3831e',
        position: 'relative',
        transition: '0.5s',
        '&:hover':{
            border: '2px solid #f3831e',
            background: 'rgba(0,0,0,.5)',
        }
    },
    advantageHeader: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 20,
    },
    advantageItem: {
        marginLeft: 20,
        display: "flex",
        alignItems: "center",
        marginBottom: 10,
    },
    advantageItemContent: {
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 10,
    },
    evenBottomImage: {
        position:'absolute',
        left: 0,
        bottom: 0,
        width: '100%',
        maxWidth: 2000,
        zIndex: 1,
        '@media (max-width: 960px)' : {
            width: '200%',
            fontSize: 24,
            textAlign:'center',
            maxWidth: 1650,
        }
    }
}))


export const Section1 = () => {

    const classes = useStyle();

    return (
        <Box className = {classes.root}>
            <Box className={classes.backgroundContainer}>
                    <img className={classes.triangle1} src={require("Assets/images/triangle.png")} alt="Right Triangle"/>
                    <img  className={classes.triangle2}  src={require("Assets/images/triangle.png")} alt="Left Triangle"/>
            </Box>
            <Container className={classes.container}>
                <Grid container>
                    <Grid item container xs={12} justify="center">
                        <Typography className={classes.typo1}>HOT SIGN UP OFFER</Typography>
                    </Grid>
                    <Grid item container xs={12} md={5} justify="center">
                        <div id="shirt_container">
                        </div>
                    </Grid>
                    <Grid item container xs={12} md={7} alignItems="center">
                        <Box >
                            <Typography className={classes.typo2}>Earn $50.00 Faevaa Cash when you signup &amp; purchase your Faevaa Pay Tee</Typography>
                            <Box className={classes.infoContainer}>
                                <Box className={classes.advantageContainer}>
                                    <Typography className={classes.advantageHeader}>When you purchase your Faevaa Pay Tee you become an Elite VIP Member which gives you the following perks</Typography>
                                    <Box className={classes.advantageItem}>
                                        <CheckIcon style={{color:'white'}}/>
                                        <Typography className={classes.advantageItemContent}>Instant Payouts</Typography>
                                    </Box>
                                    <Box className={classes.advantageItem}>
                                        <CheckIcon style={{color:'white'}}/>
                                        <Typography className={classes.advantageItemContent}>10% more Faevaa Cash on Offers</Typography>
                                    </Box>
                                    <Box className={classes.advantageItem}>
                                        <CheckIcon style={{color:'white'}}/>
                                        <Typography className={classes.advantageItemContent}>Daily Spin the Wheel</Typography>
                                    </Box>
                                    <Box className={classes.advantageItem}>
                                        <CheckIcon style={{color:'white'}}/>
                                        <Typography className={classes.advantageItemContent}>Chances to win Cash App bonuses</Typography>
                                    </Box>
                                    <Box className={classes.advantageItem}>
                                        <CheckIcon style={{color:'white'}}/>
                                        <Typography className={classes.advantageItemContent}>And many more incentives</Typography>
                                    </Box>
                                </Box>
                                <Box className={classes.secure}>
                                    <img className={classes.secureImage}  src={require("Assets/images/secure.png" )} alt="Card Box"/>
                                    <img className={classes.lockImage} src={require("Assets/images/lock.png")} alt="Lock"/>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <img className={classes.evenBottomImage} src={require("Assets/images/home-even-bottom.png")} alt="Bottom Image"/>
        </Box>
    );
}