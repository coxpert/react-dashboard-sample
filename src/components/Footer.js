import React from 'react';

import clsx from 'clsx'
import {Box, Container, Grid, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'
import { Link } from 'react-router-dom';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';
import PrintIcon from '@material-ui/icons/Print';

const useStyle = makeStyles(()=>({
    root:{
        width: '100%',
        height: '100%',
        display:'flex',
        justifyContent:'flex-start',
        flexDirection:'column',
        alignItems:'center',
        // backgroundImage: require('Assets/images/footer-bg.png'),
        backgroundSize: 'cover',
        position:'relative',
        backgroundImage: 'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.9))',
        borderTop: '1px solid white',
    },
    bottom:{
        width: '100%',
        fontSize: 12,
        color: 'white',
        lineHeight: '16px',
        // backgroundColor: '#1d1d3a',
        textAlign:'center',
        letterSpacing: 1,
        padding: '20px',
        borderTop: '1px dashed #999',
    },
    content:{
        marginTop: 50,
        marginBottom: 50,
    },
    typoTitle:{
        fontFamily: 'Anton',
        color: 'white',
        fontSize: 24,
        marginBottom: 30,
    },
    logoContainer:{
        marginTop: -15,
        marginBottom: 20,
    },
    menuItem:{
        width: '100%',
        color: 'white',
        lineHeight: '40px',
        fontSize: 14,
        display:'flex',
        alignItems:'center',
    },
    typoItem:{
        color: 'white',
        fontSize: 14,
        fontFamily:'Anton',
        maxWidth: 250,
        letterSpacing: 1,
        '@media (max-width: 780px)' : {
            maxWidth: 350,
        }
    },
    contactBox:{
        color: 'white',
        display:'flex',
        marginBottom: 10,
    },
    icon:{
        marginRight: 10,
    },
    wrapper:{
        display: 'flex',
        alignItems:'center',
    },
    typo2:{
        fontFamily:'Anton',
        color: 'white',
        lineHeight: '30px',
        fontSize: 14,
        display:'flex',
        alignItems:'center',
        paddingTop:-5,
    },
    typo3:{
        fontFamily:'Anton',
        color: '#cccccc',
        lineHeight: '30px',
        fontSize: 14,
        display:'flex',
        alignItems:'center',
    },
    icon2:{
        marginTop: 8,
        marginRight: 10,
    },
    fotterItem:{
        '@media (max-width: 1280px)' : {
            marginTop: 40,
        }
    }
}))

const Footer = (props) => {

    const {ClassName} = props;

    const classes = useStyle();

    return (
        <Box className = {clsx(classes.root, ClassName)}>
            <Container className={classes.content}>
                <Grid container>
                    <Grid item xs={12} sm={4} md={4} container direction="column" className={classes.fotterItem}>
                        <Typography className={classes.typoTitle}>Quick Links</Typography>
                        <Box><Link className={classes.menuItem} to={'/'}>Terms and Conditions</Link></Box>
                        <Box><Link className={classes.menuItem} to={'/'}>Privacy Policy</Link></Box>
                        <Box><Link className={classes.menuItem} to={'/'}>F.A.Q</Link></Box>
                        <Box><Link className={classes.menuItem} to={'/'}>Get in Touch</Link></Box>
                        <Box><Link className={classes.menuItem} to={'/'}>Advertisement Opportunities</Link></Box>
                        <Box><Link className={classes.menuItem} to={'/'}>Careers</Link></Box>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4} container direction="column" className={classes.fotterItem}>
                        <Typography className={classes.typoTitle}>Social Links</Typography>

                        <Box className={classes.wrapper}><Link className={classes.menuItem} to={'/'}><InstagramIcon className={classes.icon}/> Instagram</Link></Box>
                        <Box className={classes.wrapper}></Box><Link className={classes.menuItem} to={'/'}><TwitterIcon className={classes.icon}/>  Twitter</Link>
                        <Box className={classes.wrapper}><Link className={classes.menuItem} to={'/'}><YouTubeIcon className={classes.icon}/>  Youtube</Link></Box>
                        <Box className={classes.wrapper}><Link className={classes.menuItem} to={'/'}><FacebookIcon className={classes.icon}/>  Facebook</Link></Box>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4} container direction="column" className={classes.fotterItem}>
                        <Typography className={classes.typoTitle}>Contact Us</Typography>

                        <Box className={classes.contactBox}>
                            <RoomIcon className={classes.icon2}/>
                            <Box className={classes.typoItem2}>
                                <Typography className={classes.typo2}>Corporate Address</Typography>
                                <Typography className={classes.typo3}>10777 Westheimer Rd Suite 1100.</Typography>
                                <Typography className={classes.typo3}>Houseton, Texas, 77042</Typography>
                            </Box>
                        </Box>
                        <Box className={classes.contactBox}>
                            <PhoneIcon className={classes.icon2}/>
                            <Box className={classes.typoItem2}>
                                <Typography className={classes.typo2}>24/7 Phone Support</Typography>
                                <Typography className={classes.typo3}>832-680-4576</Typography>
                            </Box>
                        </Box>
                        <Box className={classes.contactBox}>
                            <PrintIcon className={classes.icon2}/>
                            <Box className={classes.typoItem2}>
                                <Typography className={classes.typo2}>24/7 Fax</Typography>
                                <Typography className={classes.typo3}>832-680-1990</Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Box className={classes.bottom}>
                Copyright&copy; 2020 Faevaa Pay is subsidiary of Faevaa Enterprises ,Inc. All Rights Reserved
            </Box>
        </Box>
    );
}

export default Footer;