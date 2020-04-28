import React, { Fragment } from 'react'

import {Box, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles(()=>({

    root:{
        width: '100%',
        display:'flex',
        alignItems:'center',
        marginTop:30,
        position:'relative',
    },
    rootEven:{
        width: '100%',
        display:'flex',
        alignItems:'center',
        marginTop:20,
        position:'relative',
        paddingLeft: 60,
    },
    icon:{
        width: 50,
        height: 50,
        borderRadius: '50%',
        padding: 5,
        border: 'solid 2px white',
        marginLeft: 30,
    },

    image:{
        width: '100%',
        height:'100%',
        objectFit:'cover',
    },


    text :{
        fontSize: 26,
        letterSpacing: 1,
        fontFamily: 'Anton',
        color:'white',
        paddingLeft: 70,
        '@media (max-width: 780px)' : {
            fontSize: 20,
        }
    },
    textEven :{
        fontSize: 26,
        letterSpacing: 1,
        fontFamily: 'Anton',
        color:'white',
        paddingLeft: 10,
        '@media (max-width: 780px)' : {
            fontSize: 20,
        }
    },
    line:{
        position:'absolute',
        top: 60,
        left: 60,
        width: 48,
        height: 3,
        backgroundColor: 'white',
        transform: 'rotate(45deg)',
    },
    lineEven:{
        position:'absolute',
        top: 65,
        width: 55,
        height: 3,
        backgroundColor: 'white',
        transform: 'rotate(-45deg)',
    }
}))

export const IconTextGroup = (props)=>{

    const { icon, label, even , last} = props;
    const classes = useStyle();

    return (
        <Fragment>
            {
                even ?
                (<Box className={classes.root}>
                    <Box className = {classes.icon}>
                        <img className={classes.image} src={icon} alt="Icon"/>
                    </Box>
                    {!last && <Box className={classes.line}></Box>}
                    <Box className={classes.label}>
                        <Typography className={classes.text}>{label}</Typography>
                    </Box>
                </Box>):
                (<Box className={classes.rootEven}>
                    <Box className = {classes.icon}>
                        <img className={classes.image} src={icon} alt="Icon"/>
                    </Box>
                    {!last && <Box className={classes.lineEven}></Box>}
                    <Box className={classes.label}>
                        <Typography className={classes.textEven}>{label}</Typography>
                    </Box>
                </Box>)
            }
        </Fragment>
    );
}
