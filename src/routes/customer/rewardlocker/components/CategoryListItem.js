import React,{Fragment} from 'react'

import { makeStyles } from '@material-ui/styles';

import {Box, Typography} from '@material-ui/core';

const useStyle = makeStyles(()=>({
    root:{
        display:'flex',
        justifyContent:'flex-start',
        alignItems:'center',
        marginBottom: 10,
        borderBottom: 'solid 1px #8080807f',
        padding:5,
        cursor: 'pointer',
        '&:hover':{
            backgroundColor:'#80808033',
        }
    },
    icon:{
        width: 30,
        height: 30,
        borderRadius: 5,
    },
    text:{
        fontSize: 20,
        color: 'black',
        paddingLeft: 10,
    }
}))
export const CategoryListItem = (props) =>{

    const {icon, text, ClassName } = props;
    const classes = useStyle();


    return(
        <Fragment>
            <Box className={classes.root}>
                <img className={classes.icon} src={icon}/>
                <Box>
                    <Typography className={classes.text}>{text}</Typography>
                </Box>
            </Box>
        </Fragment>
    )

}