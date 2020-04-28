


import React from 'react';
import { Button, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import FacebookIcon from '@material-ui/icons/Facebook';
import clsx from 'clsx';

const useStyle  = makeStyles (()=>({
    root:{
        width: '80%',
        maxWidth: 400,
        borderRadius:'9999px',
        background: 'linear-gradient(#004080ee, #1a8cffee)',
        color: 'white',
        height: 50,
        fontSize: 20,
        textTransform:'capitalize',
        fontWeight:'bold',
    },
    icon:{
        color:'white',
        backgroundColor:'tranparent',
        fontSize: 30,
        width: 50,
        height: 40,
    }
}))


export const FaceBookSigninButton = (props) =>{

    const {ClassName} = props;

    const classes = useStyle();

        return (
            <Button className = {clsx(classes.root, ClassName)}>
                <FacebookIcon className = {classes.icon} />
                Sign Up <Hidden smDown>With Facebook</Hidden>
            </Button>
        )
}