
import React, {useState} from  'react'

import {Box, Container, Grid, Typography} from '@material-ui/core';

import {Brand, AppInput, AppButton } from '../../../components';
import {useStyle}  from './style';

const ForgotPassword = () =>{

    const classes = useStyle();

    const [password, setPassword] = useState('');

    const handlePassword = (value) =>{
        setPassword(value.password);
    }

    return (
        <Container className={classes.container}>
            <Box className ={classes.wrapper}>
                <Box className= {classes.brandContainer}><Brand ClassName = { classes.brand }/></Box>
                <Typography className = {classes.text}>
                    Seems Like you forgot Your Password for Your Faevaa Pay Account
                </Typography>
                <AppInput 
                    placeholder = {'Enter Email to Reset Password'}
                    ClassName = {classes.input}
                    InputClass = {classes.textCenter}
                    value = { password }
                    setValue = { handlePassword }
                    name={"password"}
                    type= {'text'}
                />
                <AppButton
                    title = {'Reset Password'}
                    ClassName = {classes.button}
                />
                <Box className={classes.smallLogoWrapper}>
                    <img className={classes.smallLogo} src={require("Assets/images/small-logo.png")} alt="FAWVAA"/>
                </Box>

                <Box className={classes.typo3}>
                    faevaapay.com and its logos are a registered trademark and subsidiary of Faevaa Entreprises inc All Rights Reversed.
                </Box>
            </Box>
        </Container>
    );
}
    
export default ForgotPassword;