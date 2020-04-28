import React, {useState} from 'react';

import clsx from 'clsx'
import {Box, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'

import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';

const useStyle = makeStyles(()=>({
    root:{
        width: '100%',
    },
    typo1:{
        // fontWeight:'bold',
        // fontSize: 14,
    },
    typo2:{
        fontWeight:'bold',
        fontSize: 14,
        color:'gold'
    }
}))

const LeftPanel = (props) => {

    const { ClassName } = props;

    const classes = useStyle();


    return (
        <Box className = {clsx(classes.root, ClassName)}>
           <RctCollapsibleCard
						colClasses="full-width"
						heading={"Your State"}
						collapsible
						reloadable
						closeable
					>
					<List className="p-0">
                        <ListItem>
                            <Box>
                                <Typography  className={classes.typo1}>Total redeemed this year </Typography>
                                <Typography  className={classes.typo2}>$5.00</Typography>
                            </Box>
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <Box>
                                <Typography  className={classes.typo1}>Total redeemed last year</Typography>
                                <Typography  className={classes.typo2}>$5.00</Typography>
                            </Box>
                        </ListItem>
                    </List>
			</RctCollapsibleCard>

        </Box>
    );
}

export default LeftPanel;