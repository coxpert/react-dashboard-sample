
import React, { Fragment } from  'react'
import clsx from 'clsx';
import {Box, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(()=>({
    textfield:{
        background: '#434b80',
        width: 'calc(100% - 10px)',
        textTransform: 'capitalize',
        borderRadius: '9999px',
        color: 'white',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        marginTop: 8,
        paddingLeft:'15px',
    },
    input : {
        backgroundColor:'transparent',
        border: 'none',
        outline: 'none',
        height: 40, 
        width: 'calc(100% - 30px)',
        marginLeft:'15px',
        fontSize: 18,
        color: 'white',
        fontFamily:'quicksand'
    },
    description: {
        color: 'white',
        paddingLeft: 20,
        paddingTop: 2,
        textAlign:'left',
        width: '100%',
    }
}))


const AppButton = (props) =>{

    const {icon, placeholder,value, setValue, ClassName , InputClass , description, name, type } = props;

    const classes = useStyles();

    const handleChange = (event) => {
        setValue({[event.target.name]:event.target.value})
    }

    return (
        <Fragment>
            <Box className = {clsx(classes.textfield, ClassName)} >
                {icon}
                <input className = {clsx(classes.input, InputClass )} value = { value } name={name} placeholder={placeholder} onChange = {handleChange} type = {type}/>
            </Box>
            <Typography className={classes.description}>{description}</Typography>
        </Fragment>
    );
}
    
export default AppButton;