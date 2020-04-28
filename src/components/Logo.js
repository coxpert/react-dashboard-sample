import React from 'react';

import clsx from 'clsx'
import {Box} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'
import { Link } from 'react-router-dom';

const useStyle = makeStyles(()=>({
    root:{
        width: '100%',
        height: '100%',
        display:'flex',
        justifyContent:'flex-start',
        alignItems:'center',
    },
    brand: {
        height: 50,
        width: 'auto',
    }
}))

const Logo = (props) => {

    const {ClassName} = props;

    const classes = useStyle();

    return (
        <Box className = {clsx(classes.root, ClassName)}>
            <Link to={"/"}>
            <img className={clsx(classes.brand, ClassName)} src={require('Assets/images/logo.png')} alt="Logo"/>
            </Link>
        </Box>
    );
}

export default Logo;