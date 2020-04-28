import React from 'react';

import clsx from 'clsx'
import {Box, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'

import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem'
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

const MyBalence = (props) => {

    const { ClassName } = props;

    const classes = useStyle();

    return (
        <Box className = {clsx(classes.root, ClassName)}>
           <RctCollapsibleCard
						colClasses="full-width"
						heading={"My Balence"}
						collapsible
						reloadable
						closeable
					>
					<List className="p-0">
                        <ListItem>
                            <Box>
                                <Typography  className={classes.typo1}>User Level</Typography>
                                <Typography  className={classes.typo2}>4</Typography>
                            </Box>
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <Box>
                                <Typography  className={classes.typo1}>Faevaa Cash Balance</Typography>
                                <Typography  className={classes.typo2}>873.00</Typography>
                            </Box>
                        </ListItem>
                        <Divider />
                        <ListItem >
                            <Box>
                                <Typography  className={classes.typo1}>Refferral Earnings Balance</Typography>
                                <Typography  className={classes.typo2}>54.45</Typography>
                            </Box>
                        </ListItem>
                        <Divider />
                        <ListItem >
                            <Box>
                                <Typography  className={classes.typo1}>Lifetime Earnings</Typography>
                                <Typography  className={classes.typo2}>45.33</Typography>
                            </Box>
                        </ListItem>
                    </List>
			</RctCollapsibleCard>

        </Box>
    );
}

export default MyBalence;