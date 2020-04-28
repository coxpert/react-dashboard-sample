
import React, {Component} from  'react'

import {Box, Container, Grid, Switch, Typography, FormControlLabel} from '@material-ui/core';
import { AppButton, AppInput, Brand, Logo} from '../../../components'
import { withStyles } from '@material-ui/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import {useStyle} from './style';
import {Link}  from 'react-router-dom'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {signIn} from 'Actions';

import AOS from 'aos';
import 'aos/dist/aos.css';

const PurpleSwitch = withStyles ({
    root: {
        width: 44,
        height: 24,
        padding: 0,
        margin:0,
        borderRadius: 15,
        marginRight: 10,
    },
    thumb: {
        width: 20,
        height: 20,
      },
    switchBase: {
      color: 'white',
      padding: 2,
      '&$checked': {
      },
      '&$checked + $track': {
      },
    },
    checked: {
    },
    track: {
    },
})(Switch);


class SignIn extends Component{

    constructor(props){
        super(props)
        this.state = {
            email:'',
            password: '',
        }

        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
    }

    componentDidMount(){
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
    
    handleEmail = (email) =>{
        this.setState({...email})
    }
    
    handlePassword = (password) =>{
        this.setState({...password})
    }

    signin = ()=>{
        const user = {
            email: this.state.email,
            password: this.state.password,
        }
        console.log(user)
        this.props.signIn(user, this.props.history);
    }

    render(){
        const { classes } = this.props;
        return (
            <Container className={classes.container}>

                <Box  className={classes.wrapper} >
                    <div data-aos="flip-left">
                        <Box className = {classes.brandContainer}>
                            <Brand ClassName = {classes.brand}/>
                        </Box>
                        <Typography className={classes.text1}>Sign In</Typography>
                        <AppInput
                            ClassName = { classes.username}
                            icon = {<AccountCircleIcon/>}
                            placeholder = {'Username or Email'}
                            value = {this.state.email}
                            setValue = {this.handleEmail}
                            type = {"email"}
                            name = {"email"}
                        />
                        <AppInput
                            ClassName = { classes.password}
                            icon = {<LockIcon/>}
                            placeholder = {'Password'}
                            value = {this.state.password}
                            setValue = {this.handlePassword}
                            type ={ "password" }
                            name ={ "password" }
                        />
                        <Link
                            to = {'/forgot-password'}
                            style={{width:'100%'}}
                        >
                        <Typography className={classes.text2}>Forgot Password?</Typography>
                        </Link>

                        <Box className={classes.switchgroup}>
                            <FormControlLabel  control={<PurpleSwitch   name="checkedA"/> } />
                            <Typography className={classes.text3}>Remember Me</Typography>
                        </Box>

                        <AppButton
                            ClassName = { classes.button}
                            title = {'Sign In'}
                            onclick = { ()=>{this.signin()} }
                        />
                        <Typography className={classes.text4}>Not yet a member of Faevaa Pay?</Typography>
                        <Link to = {'/sign-up'} style={{width: '100%'}}>
                            <AppButton
                                ClassName = { classes.button2}
                                title = {'Join Faevaa Pay'}
                            />
                        </Link>
                        <Box className={classes.smallLogoWrapper}>
                            <img className={classes.smallLogo} src={require("Assets/images/small-logo.png")} alt="FAWVAA"/>
                        </Box>

                        <Box className={classes.typo3}>
                            faevaapay.com and its logos are a registered trademark and subsidiary of Faevaa Entreprises inc All Rights Reversed.
                        </Box>
                    </div>
                </Box>

            </Container>
        );
    }
}
    
export default withRouter(withStyles(useStyle)(connect(null, {
	signIn
})(SignIn)));
