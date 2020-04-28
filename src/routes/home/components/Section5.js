
import  React  from "react";

import { Box, Container, Typography, Grid} from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles(()=>({
    root:{
        position:'relative',
        // background: `url(${require("Assets/images/banner5.png")})`,
        backgroundSize:'cover',
        paddingBottom: 200,
        maxWidth: 1000,
        margin: 'auto',
        // backgroundColor:'white',
        '@media (max-width: 1280px)' : {
            paddingBottom: 50,
        }
    },
    cellWrapper: {
        width: '100%',
        position: 'relative',
    },
    typo1:{
        fontFamily:'Anton',
        textAlign:'center',
        lineHeight: '30px',
        fontSize: 20,
        color: 'white',
        paddingLeft:20,
        marginTop: 20,
        marginBottom: 10,
        
        '@media (max-width: 960px)' : {
            fontSize: 20,
            textAlign:'center',
            lineHeight: '24px',
            paddingLeft:0,
        }
    },
    cellContainer:{
        position: 'relative',
        display: 'flex',
        height: 300,
        marginTop: 50,
        justifyContent:'center',
        alignItems:'flex-end',
        overflow:'hidden',
        '@media (max-width: 1280px)' : {
            minHeight: 160,
        }
    },
    cellImage:{
        maxWidth: '100%',
        maxHeight: '100%',
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        animation: 'popup 3s ease-out infinite',
    },
    cellMaskImage:{
        position: 'absolute',
        top: '100px',
        left: '50%',
        width: '80%',
        animation: 'mask 10s linear infinite',
    }
}))


export const Section5 = () => {

    const classes = useStyle();

    return (
        <Box className = {classes.root}>
            <Container>
                <Grid container spacing ={3}>
                    <Grid item xs= {12}  md={4}>
                        <Box className={classes.cellWrapper}>
                            <img className={classes.cellMaskImage} src={require("Assets/images/cell-bg1.png")} alt = "cell1"/>
                            <Box className={classes.cellContainer}>
                                <img className={classes.cellImage} src={require("Assets/images/cell1.png")} alt = "cell1"/>
                            </Box>
                            <Typography className={classes.typo1}>Faevaa Pay is looking for members &amp; survey takers!</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs= {12}  md={4}>
                        <Box className={classes.cellWrapper}>
                            <img className={classes.cellMaskImage} src={require("Assets/images/cell-bg2.png")} alt = "cell1"/>
                            <Box className={classes.cellContainer}>
                                <img className={classes.cellImage}  src={require("Assets/images/cell2.png")} alt = "cell1"/>
                            </Box>
                            <Typography className={classes.typo1}>Give your opinions on market research surveys and earn Faevaa Cash</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs= {12}  md={4}>
                        <Box className={classes.cellWrapper}>
                            <img className={classes.cellMaskImage} src={require("Assets/images/cell-bg3.png")} alt = "cell1"/>
                            <Box className={classes.cellContainer}>
                                <img className={classes.cellImage}  src={require("Assets/images/cell3.png")} alt = "cell1"/>
                            </Box>
                            <Typography className={classes.typo1}>Cash out your Faevaa Cash for tons of Rewards</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}