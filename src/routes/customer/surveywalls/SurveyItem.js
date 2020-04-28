import React from 'react';
import {makeStyles} from "@material-ui/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import {Link} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';

const useStyle = makeStyles(()=>({
    surveyItemWrapper:{
        width: '100%',
        borderRadius: 5,
        boxShadow: '0px 1px 4px rgba(0,0,0,.3)',
        border: '1px solid #b3b3b3',
        padding: 10,
        display: 'grid',
        gridTemplateColumns: '6fr 3fr 1.5fr 1.5fr',
        margin: '5px 0px',
    },
    surveyItemInfo:{
        fontSize: 18,
        display: 'flex',
        alignItems: 'center',
        '@media (max-width: 480px)': {
            fontSize: 14,
        },
    },
    surveyItemLink:{
        fontSize: 18,
        '@media (max-width: 480px)': {
            fontSize: 14,
        },
    },
    surveyItemLinkWrapper:{
        width: '100%',
        fontSize: 24,
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        background: '#25a54c',
        padding: 5,
        '@media (max-width: 480px)': {
            fontSize: 14,
        },
    },
    surveyItemSpan: {
        color: '#0f61b3',
        fontSize: 20,
        '@media (max-width: 480px)': {
            fontSize: 14,
        },
    },
}));

export const SurveyItem = (props) =>{
    const {name, time, points, link} = props;
    const  classes = useStyle();
    return(
        <Box className={classes.surveyItemWrapper}>
            <Box className={classes.surveyItemInfo}>
                {name}
            </Box>
            <Box className={classes.surveyItemInfo}>
                <Typography className={classes.surveyItemSpan}>
                    {time}
                </Typography>
                {time?'min':''}
            </Box>
            <Box className={classes.surveyItemInfo}>
                <Typography className={classes.surveyItemSpan}>
                    {points}
                </Typography>
                pt
            </Box>
            <Link href={link} className={classes.surveyItemLink}>
                <Box className={classes.surveyItemLinkWrapper}>
                    <SearchIcon/>GO
                </Box>
            </Link>
        </Box>
    )
}