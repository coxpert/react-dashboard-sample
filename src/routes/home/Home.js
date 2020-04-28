
import React ,{Component} from 'react';
import { Box, Container, Grid, Typography, Hidden } from '@material-ui/core';
import {useStyle } from './style';
import {Link} from 'react-router-dom'
import { AppButton, Footer} from 'Components';
import {withStyles} from '@material-ui/styles';
import {IconTextGroup, FaceBookSigninButton, Divider, IconInput, Section1, Section2,Section4,Section5} from './components';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import FaceIcon from '@material-ui/icons/Face';
import DirectionsIcon from '@material-ui/icons/Directions';

import {makeImageAnimation, DollarAnimation} from 'Util';

import AOS from 'aos';
import 'aos/dist/aos.css';

class Home  extends Component{

    constructor(props){
        super(props)
        this.state={
            firstName:'',
            lastName: '',
            username: '',
            email:'',
            password: '',
            confirmPassword:'',
            referalCode: '',
        }

        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount(){
        makeImageAnimation();
        DollarAnimation();
        AOS.init({
            offset: 100,
            delay: 50,
            duration: 1000,
            easing: "ease-in-out",
            mirror: true,
            once: true,
            anchorPlacement: "top-center",
        });
    }

    handleChange = (value) => {
        this.setState({
            ...this.state,
            ...value
        })
    }

    render(){
        const { classes} = this.props
        
        return (
        <Box className={classes.root}>
            <Box className = {classes.header}>
                <Container children className = {classes.container}>
                    <Box className = {classes.logoContainer}>
                        <Hidden smUp>
                            <Box  className={classes.signinSm} >
                                <Link to ={'/sign-in'} style={{width:'100%'}}> <AppButton title={"Sign In"} /> </Link>
                            </Box>
                        </Hidden>

                        <Hidden xsDown>
                            <Box  className={classes.signin} >
                                <Link to ={'/sign-in'}> <AppButton ClassName={classes.signin} title={"Sign In"} /> </Link>
                            </Box>
                        </Hidden>
                    </Box>
                    <Box className={classes.bannerGridBox}>
                        <Grid item = {true} lg={12} className={classes.wrapper}>
                        <Grid item={true} md={5} sm={12}  className={classes.leftBox} >
                            <Box>
                                <div data-aos="slide-right">
                                    <Typography className = {classes.title}>Earn Real Cash By</Typography>
                                </div>
                                <div data-aos="slide-right">
                                    <Box>
                                        <IconTextGroup  even={true}  icon = {require('Assets/icons/list.png')} label = { "Completing Offers" }/>
                                        <IconTextGroup icon = {require('Assets/icons/list.png')} label = { "Taking Surveys" }/>
                                        <IconTextGroup even={true}  icon = {require('Assets/icons/game.png')} label = { "Playing Games" }/>
                                        <IconTextGroup icon = {require('Assets/icons/earth.png')} label = { "Searching The Web" }/>
                                        <IconTextGroup even={true}  last = {true} icon = {require('Assets/icons/cart.png')} label = { "Shopping Online & More" }/>
                                    </Box>
                                </div>
                            </Box>
                        </Grid>

                        <Grid item={true} md={7} sm={12}  className={classes.rightBox} >
                            <div data-aos="fade">
                                <Box className={classes.rightBoxContent}>
                                    <Box className={classes.topRightBox}>
                                        <img src={require("Assets/images/bonus.png" )} alt="Bonus" className={classes.badgeImage}/>
                                    </Box>
                                    <Typography className={classes.rightTitle}>It's FREE! It's EASY!</Typography>
                                    <Typography  className={classes.rightSubTitle}>Join FAEVAA PAY Today!</Typography>
                                    <FaceBookSigninButton ClassName = {classes.facebookbutton}/>
                                    <Divider />

                                    <Grid container spacing={1}>
                                        <Grid item xs  >
                                            <IconInput icon = {<PersonIcon/>}  placeholder= {'First Name'} name="firstName" value={this.state.firstName} setValue = {this.handleChange} />
                                        </Grid>

                                        <Grid item  xs >
                                            <IconInput icon = {<PersonIcon/>}  placeholder= {'Last Name'} name="lastName" value={this.state.lastName} setValue = {this.handleChange} />
                                        </Grid>
                                    </Grid>

                                    <Grid container  spacing={2}  style={{marginTop:0}}>
                                        <Grid item  xs >
                                            <IconInput icon = {<EmailIcon/>}  placeholder= {'Enter your Email'} name={"email"} value={this.state.email} setValue = {this.handleChange} type={"email"}/>
                                        </Grid>
                                    </Grid>

                                    <Grid container  spacing={2}  style={{marginTop:0}} >
                                        <Grid item  xs >
                                            <IconInput icon = {<FaceIcon/>}  placeholder= {'Choose a Username'} name = "username" value={this.state.username} setValue = {this.handleChange} type={'text'}/>
                                        </Grid>
                                    </Grid>

                                    <Grid container  spacing={2}  style={{marginTop:0}} >
                                        <Grid item  xs >
                                            <IconInput icon = {<LockIcon/>}  placeholder= {'Choose a Password'} name={"password"} value={this.state.password} setValue = {this.handleChange} type={'password'}/>
                                        </Grid>
                                    </Grid>

                                    <Grid container  spacing={2}  style={{marginTop:0}} >
                                        <Grid item  xs >
                                            <IconInput icon = {<LockIcon/>}  placeholder= {'Comfirm Password'}  name={"confirmPassword"} value={this.state.confirmPassword} setValue = {this.handleChange} type={'password'}/>
                                        </Grid>
                                    </Grid>

                                    <Grid container  spacing={2}  style={{marginTop:0}} >
                                        <Grid item  xs >
                                            <IconInput icon = {<DirectionsIcon/>}  placeholder= {'Referral Code'} name={"referalCode"} value={this.state.referalCode} setValue = {this.handleChange} type={'text'}/>
                                        </Grid>
                                    </Grid>

                                    <AppButton title={"Join Faevaa Pay"} ClassName = {classes.joinButton} />
                                    <Typography className={classes.policyText}>
                                        By clicking 'Connect with Facebook' or 'Join Faevaa Pay' I verify that I read and agree to the Terms of Service and the <Link to='/'>Privacy Policy</Link> agreements.
                                        I agree to receive emails from FaevaaPay.com and understand that I can opt out at any time furthermore I agree that the introductory $50 signup bonus is credited upon successful account activation & purchase of a Faevaa Pay Tee.
                                        Lastly, you agree the merchants represented are not sponsors of the rewards or otherwise affiliated with FaevaaPay.
                                        The logos and other identifying marks attached are trademarks of and owned by each represented company and/or its affiliates. Please visit each company's website for additional terms and conditions.
                                    </Typography>
                                </Box>
                            </div>
                        </Grid>
                    </Grid>
                    </Box>
                </Container>
                <img className={classes.evenBottomImage} src = {require('Assets/images/home-odd-bottom.png')} alt="Home header bottom"/>
            </Box>
            <div data-aos="fade-up">
                <Box><Section1/></Box>
            </div>
            <div data-aos="slide-left">
                <Box><Section2/></Box>
            </div>
            <div data-aos="slide-right">
                <Box><Section4/></Box>
            </div>
            <div data-aos="fade-down">
                <Box><Section5/></Box>
            </div>

            <Box>
                <Footer/>
            </Box>
            <Box className= {classes.footer}>
            </Box>
        </Box>
        );
    }
   
}

export default withStyles(useStyle)(Home);