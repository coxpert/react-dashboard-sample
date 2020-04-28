
import React from 'react';


import {makeStyles} from '@material-ui/styles';
import {Box} from '@material-ui/core'
import {OfferListItem} from './OfferListItem';

const useStyles = makeStyles(()=>({
    root:{
        width:'100%',
        display: 'flex',
        backgroundColor:'white',
        flexDirection:'column'
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
    },
    contentBox:{
        display:'flex',
        justifyContent:''
    }
}))


export const MostPopularOffers = (props) =>{
    const classes = useStyles();

    const {data} = props;

    console.log(data)

    return (
        <Box className = {classes.root}>
            <Box className={classes.titleBar}>Most Popular Offers</Box>
            <div className="row p-2">

                {
                    data.map((offer, i)=>(
                        <div key = {i} className="col-12 col-md-6 col-lg-3">
                            <OfferListItem offer={offer} vertical={true}/>
                        </div>
                    ))
                }
            </div>
        </Box>
    );
}