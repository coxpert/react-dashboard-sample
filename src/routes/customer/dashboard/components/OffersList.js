
import React from 'react';


import {makeStyles} from '@material-ui/styles';
import {Box} from '@material-ui/core'
import {OfferListItem} from './OfferListItem';

const useStyles = makeStyles(()=>({
    root:{
        width:'100%',
        display: 'flex',
        backgroundColor:'white',
        flexDirection:'column',
        boxShadow:'0 0 4px 2px #0000007f',
        borderRadius:'4px 4px 0 0'
    },
    titleBar:{
        width:'100%',
        background:'linear-gradient(to bottom, #6fbe44 , #4b8c3a)',
        height:30,
        color:'white',
        fontSize:16,
        fontWeight:'bold',
        paddingLeft:20,
        verticalAlign:'center',
        paddingTop: 5,
    },
    contentBox:{
        display:'flex',
        justifyContent:''
    }
}))


export const OffersList = (props) =>{
    const classes = useStyles();

    const {data} = props;

    console.log(data)

    return (
        <Box className = {classes.root}>
            <Box className={classes.titleBar}>Latest Offers</Box>
            <div className="row p-2">

                {
                    data.map((offer, i)=>(
                        <div key = {i} className="col-12">
                            <OfferListItem offer={offer}/>
                        </div>
                    ))
                }
            </div>
        </Box>
    );
}