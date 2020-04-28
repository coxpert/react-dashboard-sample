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
        justifyContent:'center',
        alignItems:'center',
    },
    brand: {
        height: 50,
        width: 50,
        borderRadius:'50%',
    }
}))

const Brand = (props) => {

    const {ClassName} = props;

    const classes = useStyle();

    return (
        <Box className = {clsx(classes.root)}>
            <Link to={"/"}>
                <img className={clsx(classes.brand, ClassName)} src={require("Assets/images/brand.png")} alt="Logo"/>
            </Link>
        </Box>
    );
}

export default Brand;