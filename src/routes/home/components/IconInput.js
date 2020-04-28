import React from 'react';

import {Box} from '@material-ui/core';

import {makeStyles} from '@material-ui/styles';

const useStyle = makeStyles(()=>({
    root:{
        backgroundColor:'transparent',
        border:'solid 1px white',
        color:'white',
        width:'100%',
        display:'flex',
        alignItems:'center',
        padding: 10,
        borderRadius: 5,
        marginTop: 0,
    },

    input:{
        backgroundColor:'transparent',
        border: 'none',
        outline: 'none',
        fontSize: 16,
        paddingLeft: 10,
    }

}))


export const IconInput = (props) =>{

    const {icon, placeholder, value, setValue, type, name } = props;

    const classes = useStyle();

    const handleChange = (event)=>{
        setValue({[event.target.name]:event.target.value})
    }

    return (
        <Box className = {classes.root}>
            {icon}
            <input className={classes.input} value={value} onChange={handleChange} placeholder={placeholder} type={type} name={name} />
        </Box>
    )
}