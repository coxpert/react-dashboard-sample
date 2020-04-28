
import React from  'react'
import clsx from 'clsx';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(()=>({
    button:{
        background: 'linear-gradient( #f2c601, #f3831e)',
        width: '100%',
        textTransform: 'capitalize',
        borderRadius: '9999px',
        color: 'white',
        fontWeight:'bold',
        fontFamily:'Anton',
        position:'relative',
        zIndex:99999999,
    }
}))


const AppButton = (props) =>{

    const {title, ClassName, onclick } = props;

    const classes = useStyles();

    return (
        <Button className = {clsx(classes.button, ClassName)}  onClick={onclick}>
            {title}
        </Button>
    );
}
    
export default AppButton;