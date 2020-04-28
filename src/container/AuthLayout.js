
import React ,{Component, Suspense} from 'react';
import {makeCanvas} from 'Util' 
import { Box, Container, LinearProgress} from '@material-ui/core';
import {withStyles} from '@material-ui/styles';
import { Logo } from 'Components';
import { renderRoutes } from 'react-router-config';
import {SignIn, SignUp, ForgotPassword }from '../routes/auth'
import {Home} from '../routes/home';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/sign-in',
    exact: true,
    component: SignIn,
  },
  {
    path: '/sign-up',
    exact: true,
    component: SignUp,
  },
  {
    path: '/forgot-password',
    exact: true,
    component: ForgotPassword,
  },
];

const useStyle = ()=>({

    root:{
        background: `url(${require("Assets/images/back.png")})`,
        width: '100%',
        minHeight: '100vh',
        backgroundPosition:'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        color: 'white',
        position:'fixed',
        top:0,
    },

    logoContainer:{
        display: 'flex',
        width:'200px',
        justifyContent:'space-between',
        zIndex: 999999,
        position:'absolute',
        top: 40,
    },
    logo:{
        zIndex: 3,
    }, 
    container:{
    }
})



class AuthLayout  extends Component{

    constructor(props){
        super(props)
    }

    componentDidMount(){
        makeCanvas();
    }

    render(){
        const {classes} = this.props;
        return (
            <Box style={{position:'relative'}}>
                <Container>
                    <Box className={classes.logoContainer}> <Logo ClassName={ classes.logo }/></Box>
                </Container>
                <Box  className = {classes.root}>
                    <div id="canvas"></div>
                </Box>
                <Suspense  fallback={ <LinearProgress />}>
                  { renderRoutes(routes) } 
                </Suspense>
            </Box>
        );
    }
   
}

export default withStyles(useStyle)(AuthLayout);