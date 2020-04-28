import React from 'react'
import {makeStyles} from '@material-ui/styles';
import {Box} from '@material-ui/core';
import clsx from 'clsx'


export const IBox = (props) => {

    const {src, alt, bordered, ClassName} = props;

    const classes = makeStyles(()=>({
        root:{
            width: '100%',
            border: bordered?'solid 1px #808080':'none',
        },
        image:{
            width: '100%',
            height: '100%',
            objectFit:'cover'
        }
    }))();

    return(
    <Box className={clsx(classes.root, ClassName)} >
        <img className={classes.image} src={src} alt={alt}/>
    </Box>)
}