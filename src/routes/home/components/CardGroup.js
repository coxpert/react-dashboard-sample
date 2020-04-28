
import  React  from "react";

import { Box , Grid, Typography} from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';


const useStyle = makeStyles(()=>({
    root:{
        width: '100%',
        display: 'flex',
        justifyContent:'center',
        alignItems:'cener',
        flexDirection:'column',
        color:'grey',
        lineHeight:'20px',
        verticalAlign:'middle',
    },
    image:{
        width: 75,
        height: 'auto',
        objectFit: 'cover'
    },
    text:{
        color: 'white',
        WebkitTextStroke:'1px black',
        fontSize: 26,
        fontWeight: 600,
        textShadow: '2px 2px 2px black',

    },
    strip: {
        width: '100%',
        height: 50,
        borderRadius: '10px',
        background:'white',
        marginBottom: 5,
        display:'flex',
        alignItems:'center',
        fontFamily:'Archivo Black',
        fontSize: 32,
        color: 'rgb(110, 99, 157)',        

    },
    pwerdby: {
        color: 'black',
        fontSize: 20,
        paddingRight: 8,
        paddingLeft: 5,
        fontWeight: 'bold',
    },
    container: {
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}))


export const CardGroup = () => {

    const classes = useStyle();

    return (
        <Box className = {classes.root}>
            <Grid container className={classes.container}>
                <Grid item xs={3}>
                    <img className={classes.image} src="./images/lock.png" alt="Maaster"/>
                </Grid>
                <Grid item xs={9}>
                    <Typography  className={classes.text} >Secure Payments</Typography>
                    <Box className= {classes.strip}>
                    <Typography className={classes.pwerdby}>Pawered By </Typography> stripe
                    </Box>
                </Grid>
            </Grid>
            <Grid container  spacing={1}>
                <Grid item xs={3}>
                    <img className={classes.image} src="./images/mastercard.png" alt="Maaster"/>
                </Grid>
                <Grid item xs={3}>
                    <img className={classes.image} src="./images/visa.png" alt="Maaster"/>
                </Grid>
                <Grid item xs={3}>
                <img className={classes.image} src="./images/discover.png" alt="Maaster"/>
                </Grid>
                <Grid item xs={3}>
                <img className={classes.image} src="./images/american.png" alt="Maaster"/>
                </Grid>
            </Grid>
        </Box>
    );
}