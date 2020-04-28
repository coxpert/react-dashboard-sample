
import  React  from "react";

import { Box, Container, Typography} from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles(()=>({
    root:{
        position:'relative',
        // backgroundImage: `url(${require("Assets/images/banner3-bg.png")})`,
        overflow: 'hidden',
        paddingTop: 100,
        // backgroundColor:'white',
    },
    image:{
        height:405,
        width: 2000,
    },
    content:{
        position:'relative',
        width: '100%',
        justifyContent:'center',
        alignItems:'center',
    },
    banner3Card:{
        width: '30%',
        minWidth: 400,
        '@media (max-width: 480px)' : {
            width: '100%',
            minWidth: 200,
        }
    },
    container:{
        display:'flex',
        height: '100%',
        alignItems:'center',
        justifyContent:'center',
    },
    wrapper:{
        width:'60%',
        margin: 'auto',
        '@media (max-width: 780px)' : {
            width:'100%',
        }
    },
    banner3CardContainer:{
        width: '100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
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
        textAlign:'center',
        lineHeight: '40px',
        fontSize: 24,
        color: 'white',
        paddingLeft:20,
        margin: '40px auto',
        '@media (max-width: 1280px)' : {
            textAlign: 'center',
        },
        '@media (max-width: 580px)' : {
            fontSize: 20,
            lineHeight: '24px',
            paddingLeft:0,
        }
    },
    dividerContainer:{
        width: '80%',
        margin: 'auto',
        marginTop: 60,
        position: "relative",
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


export const Section2 = () => {

    const classes = useStyle();

    return (
        <Box className = {classes.root}>
           {/*<img className={classes.image} src={require('Assets/images/banner3-overlay.png')} alt="Banner 3"/>*/}
           <Box className={classes.content}>
                <Container className={classes.container}>
                    <Box className={classes.wrapper}>
                        <Typography className={classes.typo1}>POPULAR FAEVAA PAY REWARDS</Typography>
                        <Typography className={classes.typo2}>FAEVAA PAY OFFERS OUR USERS HUNDREDS OF TOP BRAND NAME GIFT CARDS, CASH APP, PAYPAL, CHECK, AND VARIOUS OTHER PAYOUT AND REDEMPTION OPTIONS</Typography>
                        <Box className={classes.banner3CardContainer}>
                            <img className={classes.banner3Card} src={require("Assets/images/banner3-card.png")} alt="banner3-card"/>
                        </Box>
                    </Box>
                </Container>
               <Box className={classes.dividerContainer}>
                    <img className={classes.divider} src={require("Assets/images/divider.png")} alt="Divider"/>
                    <img className={classes.dividerDot} src={require("Assets/images/dot.png")} alt="Dot"/>
               </Box>
           </Box>
        </Box>
    );
}