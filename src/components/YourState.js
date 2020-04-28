import React from 'react';

import clsx from 'clsx'
import {Box, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'

import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
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

const YourState = (props) => {

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
                                <Typography  className={classes.typo1}>Current Points balance</Typography>
                                <Typography  className={classes.typo2}>5.00</Typography>
                            </Box>
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <Box>
                                <Typography  className={classes.typo1}>Points Earned Today</Typography>
                                <Typography  className={classes.typo2}>5.00</Typography>
                            </Box>
                        </ListItem>
                        <Divider />
                        <ListItem >
                            <Box>
                                <Typography  className={classes.typo1}>Points Earned Yestoday</Typography>
                                <Typography  className={classes.typo2}>5.00</Typography>
                            </Box>
                        </ListItem>
                        <Divider />
                        <ListItem >
                            <Box>
                                <Typography  className={classes.typo1}>Points Earned This Month</Typography>
                                <Typography  className={classes.typo2}>5.00</Typography>
                            </Box>
                        </ListItem>
                        <Divider />
                        <ListItem >
                            <Box>
                                <Typography  className={classes.typo1}>Points Earned This Year</Typography>
                                <Typography  className={classes.typo2}>5.00</Typography>
                            </Box>
                        </ListItem>
                        <Divider />
                        <ListItem >
                            <Box>
                                <Typography  className={classes.typo1}>Lifetime Points</Typography>
                                <Typography  className={classes.typo2}>5.00</Typography>
                            </Box>
                        </ListItem>
                        <Divider />
                        <ListItem >
                            <Box>
                                <Typography  className={classes.typo1}>Rewards Clalmed</Typography>
                                <Typography  className={classes.typo2}>5.00</Typography>
                            </Box>
                        </ListItem>
                        <Divider />
                        <ListItem >
                            <Box>
                                <Typography  className={classes.typo1}>Total Referrals</Typography>
                                <Typography  className={classes.typo2}>5.00</Typography>
                            </Box>
                        </ListItem>
                        <Divider />
                        <ListItem >
                            <Box>
                                <Typography  className={classes.typo1}>Today's Referral Points</Typography>
                                <Typography  className={classes.typo2}>5.00</Typography>
                            </Box>
                        </ListItem>
                    </List>
			</RctCollapsibleCard>

        </Box>
    );
}

export default YourState;