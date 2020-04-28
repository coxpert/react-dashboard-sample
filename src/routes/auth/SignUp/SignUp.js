
import React, { Component } from  'react'
import {Link} from 'react-router-dom'
import {Box, Container, Grid, Divider,Hidden } from '@material-ui/core';
import {useStyle} from './style';
import {Brand, AppInput, AppButton} from '../../../components'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {withStyles} from '@material-ui/styles';
import PersonIcon from '@material-ui/icons/Person';
import TodayIcon from '@material-ui/icons/Today';
import EmailIcon from '@material-ui/icons/Email';
import RoomIcon from '@material-ui/icons/Room';
import PostAddIcon from '@material-ui/icons/PostAdd';
import LockIcon from '@material-ui/icons/Lock';
import ReCAPTCHA from "react-google-recaptcha";

import AOS from 'aos';
import 'aos/dist/aos.css';
import {makeImageAnimation} from "Util/DressAnimation";
import {DollarAnimation} from "Util/DollarAnimation";

const TEST_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

const StyledFormControlLabel = withStyles({
    root: {
        color: 'white',
    },
    label: {
      color: 'white',
      fontSize: 18,
      fontWeight:'bold',
      verticalAlign:'middle',
    },
  })(FormControlLabel);

class SignUp  extends Component{

    constructor(props){
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            birthDay: '',
            email: '',
            address: '',
            addressType: '',
            city: '',
            zipCode: '',
            state: '',
            referralCode: '',
            username:'',
            password:'',
            confirmPassword: '',
            isAgreeConditions: false,
            isAgreePolicy: false,

            callback: "not fired",
            value: "[empty]",
            load: true,
            expired: "false"
        }

        this.handlePerson = this.handlePerson.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this._reCaptchaRef = React.createRef();

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

    
      handleChange = value => {
        console.log("Captcha value:", value);
        this.setState({ value });
        // if value is null recaptcha expired
        if (value === null) this.setState({ expired: "true" });
      };
    
      asyncScriptOnLoad = () => {
        this.setState({ callback: "called!" });
        console.log("scriptLoad - reCaptcha Ref-", this._reCaptchaRef);
      };


    handlePerson = (value) =>{
        this.setState({
            ...this.state,
            ...value
        })
    }

    handleChange = (event) => {
        this.setState({ ...this.state, [event.target.name]: event.target.checked });
      };

      render(){
        const { classes } = this.props;
        const { load } = this.state || {};
        return (
            <Box className={classes.root}>
                <Container className= {classes.container}>
                    <div data-aos="fade">
                        <Box><Brand ClassName={classes.brand}/></Box>

                        <Grid container className={classes.signUpBox} >
                            <Box className={classes.leftBox}>
                                <Grid item container>
                                    <Box className={classes.typo1}>Sign Up For FAEVAA PAY </Box>
                                    <Grid item container xs={12}>
                                        <Grid item xs={12}  md={6}>
                                            <AppInput
                                                icon={<PersonIcon/> }
                                                placeholder = {"First Name"}
                                                value = {this.state.firstName}
                                                name = {'firstName'}
                                                setValue = {this.handlePerson}
                                                description = {"Required*"}
                                            />
                                        </Grid>
                                        <Grid item  xs={12}  md={6}>
                                            <AppInput
                                                icon={<PersonIcon/> }
                                                placeholder = {"Last Name"}
                                                value = {this.state.lastName}
                                                name = {'lastName'}
                                                setValue = {this.handlePerson}
                                                description = {"Required*"}
                                            />
                                        </Grid>
                                    </Grid>

                                    <Grid item container xs={12}>
                                        <AppInput
                                            icon={<TodayIcon/> }
                                            placeholder = {"Date of Birth"}
                                            value = {this.state.birthDay}
                                            name = {'birthDay'}
                                            setValue = {this.handlePerson}
                                            description = {"Required*"}
                                        />
                                    </Grid>

                                    <Grid item container xs={12}>
                                        <AppInput
                                            icon={<EmailIcon/> }
                                            placeholder = {"Email Address"}
                                            value = {this.state.email}
                                            name = {'email'}
                                            type = {"email"}
                                            setValue = {this.handlePerson}
                                            description = {"Required*"}
                                        />
                                    </Grid>

                                    <Grid item container xs={12}>
                                        <Grid item xs={12}  md={6}>
                                            <AppInput
                                                icon={<RoomIcon/> }
                                                placeholder = {"Address"}
                                                value = {this.state.address}
                                                name = {'address'}
                                                setValue = {this.handlePerson}
                                                description = {"Required*"}
                                            />
                                        </Grid>
                                        <Grid item xs={12}  md={6}>
                                            <AppInput
                                                icon={<RoomIcon/> }
                                                placeholder = {"Address Type"}
                                                value = {this.state.addressType}
                                                name = {'addressType'}
                                                setValue = {this.handlePerson}
                                                description = {"Optional"}
                                            />
                                        </Grid>
                                    </Grid>

                                    <Grid item container xs={12} >
                                        <Grid item  xs={12}  md={6} >
                                            <AppInput
                                                icon={<RoomIcon/> }
                                                placeholder = {"City"}
                                                value = {this.state.city}
                                                name = {'city'}
                                                setValue = {this.handlePerson}
                                                description = {"Required*"}
                                            />
                                        </Grid>
                                        <Grid item  xs={12}  md={6}>
                                            <AppInput
                                                icon={<RoomIcon/> }
                                                placeholder = {"State"}
                                                value = {this.state.state}
                                                name = {'state'}
                                                setValue = {this.handlePerson}
                                                description = {"Required*"}
                                            />
                                        </Grid>
                                    </Grid>

                                    <Grid item container xs={12} >
                                        <Grid item  xs={12}  md={6}>
                                            <AppInput
                                                icon={<PostAddIcon/> }
                                                placeholder = {"zipcode"}
                                                value = {this.state.zipCode}
                                                name = {'zipCode'}
                                                setValue = {this.handlePerson}
                                                description = {"Required*"}
                                            />
                                        </Grid>
                                        <Grid item xs={12}  md={6}>
                                            <AppInput
                                                icon={<PersonIcon/> }
                                                placeholder = {"Referral Code"}
                                                value = {this.state.referralCode}
                                                name = {'referralCode'}
                                                setValue = {this.handlePerson}
                                                description = {"Optional"}
                                            />
                                        </Grid>

                                    </Grid>
                                </Grid>
                            </Box>
                            <Hidden xsDown>
                                <Divider orientation="vertical" flexItem style={{backgroundColor:'white'}}/>
                            </Hidden>
                            <Box className= {classes.rightBox}>
                                <Link to={'/sign-in'} style={{width:'100%'}}><Box className={classes.typo2}> Already have an account? </Box></Link>
                                <Grid item  xs={12} container>

                                    <Grid item container xs={12}  justify="flex-end">
                                        <AppInput
                                            icon={<PersonIcon/> }
                                            placeholder = {"Create a Username"}
                                            value = {this.state.username}
                                            name = {'username'}
                                            setValue = {this.handlePerson}
                                            description = {"Required*"}
                                        />
                                    </Grid>

                                    <Grid item container xs={12}  justify="flex-end">
                                        <AppInput
                                            icon={<LockIcon/> }
                                            placeholder = {"Create a Password"}
                                            value = {this.state.password}
                                            type = {"text"}
                                            name = {'password'}
                                            setValue = {this.handlePerson}
                                            description = {"Required*"}
                                        />
                                    </Grid>

                                    <Grid item container xs={12}  justify="flex-end">
                                        <AppInput
                                            icon={<LockIcon/> }
                                            placeholder = {"Confirm Password"}
                                            value = {this.state.confirmPassword}
                                            name = {'confirmPassword'}
                                            type = {"text"}
                                            setValue = {this.handlePerson}
                                            description = {"Required*"}
                                        />
                                    </Grid>

                                    <Grid item container xs={12}  justify="flex-start">
                                        <StyledFormControlLabel
                                            style = {{marginTop: 10,}}
                                            control={
                                            <Checkbox
                                                checked={this.state.isAgreeConditions}
                                                onChange={this.handleChange}
                                                name="isAgreeConditions"
                                                className = {classes.isAgreeConditions}
                                            />
                                            }
                                            label="Agree to Terms and Conditions (Required)"
                                        />
                                        <StyledFormControlLabel
                                            control={
                                            <Checkbox
                                                checked={this.state.isAgreePolicy}
                                                onChange={this.handleChange}
                                                name="isAgreePolicy"
                                                className = {classes.isAgreePolicy}
                                            />
                                            }
                                            label="Agree to privacy policy (Required)"
                                        />
                                    </Grid>
                                    <Grid item container xs={12}  justify="center">
                                        {load && (
                                            <ReCAPTCHA
                                                style={{ display: "inline-block" }}
                                                theme="dark"
                                                ref={this._reCaptchaRef}
                                                sitekey={TEST_SITE_KEY}
                                                onChange={this.handleChange}
                                                asyncScriptOnLoad={this.asyncScriptOnLoad}
                                            />
                                        )}
                                    </Grid>
                                    <Grid item container xs={12}  justify="center">
                                        <AppButton
                                            title = {"Activate My FAEVAA PAY Account"}
                                            ClassName = {classes.activateButton}
                                        />
                                    </Grid>

                                </Grid>
                            </Box>
                        </Grid>

                        <Box className={classes.smallLogoWrapper}>
                            <img className={classes.smallLogo} src={require("Assets/images/small-logo.png")} alt="FAWVAA"/>
                        </Box>

                        <Box className={classes.typo3}>
                            faevaapay.com and its logos are a registered trademark and subsidiary of Faevaa Entreprises inc All Rights Reversed.
                        </Box>
                    </div>
                </Container>
            </Box>
        );

      }
}
    
export default withStyles(useStyle)(SignUp);