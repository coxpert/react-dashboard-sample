
import React, { Fragment } from  'react'
import clsx from 'clsx';
import {Box, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import SearchIcon from '@material-ui/icons/Search';
import { RGBA_PVRTC_2BPPV1_Format } from 'three';
const useStyles = makeStyles(()=>({
    textfield:{
        width: '100%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        border: 'solid 1px #8080807f',
        borderRadius: 5,
        padding: 2,
        paddingLeft: 5,
    },
    input : {
        border: 'none',
        outline: 'none',
        height: 40, 
        width: 'calc(100% - 30px)',
        marginLeft: 10,
        color:'black',
        '&::placeholder': {
            color: 'grey'
        }
    },
}))


const SearchBox = (props) =>{

    const {value, setValue , InputClass, name, type } = props;

    const classes = useStyles();

    const handleChange = (event) => {
        setValue({[event.target.name]:event.target.value})
    }

    return (
        <Box className = {classes.textfield} >
            <SearchIcon className={classes.icon}/>
            <input className = {clsx(classes.input, InputClass )} value = { value } name={name} placeholder={"Search..."} onChange = {handleChange} type = {type}/>
        </Box>
    );
}
    
export default SearchBox;