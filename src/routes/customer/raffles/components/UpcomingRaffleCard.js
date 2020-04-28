import React from 'react'
import {makeStyles} from '@material-ui/styles';

import {Box} from '@material-ui/core';
// rct card box
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';
import { Table } from 'reactstrap';
import PanoramaIcon from '@material-ui/icons/Panorama';
import {IconText} from 'Components';
import ScheduleIcon from '@material-ui/icons/Schedule';
import {IBox, RemainingTime} from 'Components'

const useStyles = makeStyles(()=>({
    root:{
        width:'100%',
    },
    image:{
        width:'100px',
    }
}))

export const UpcomingRaffleCard = (props) => {
    const classes = useStyles();
    return(
    <Box className = {classes.root}>
        <RctCollapsibleCard heading="UPCOMING RAFFLE">
            <div className="responsive-table-wrapper">
                <div className="table-responsive">
                    <div>
                        <Table hover bordered striped>
                            <thead>
                                <tr className="bg-primary text-white">
                                    <th><IconText icon = {<PanoramaIcon />} text={"Image"} /></th>
                                    <th>NAME</th>
                                    <th><IconText icon = {<ScheduleIcon />} text={"STARTS"} /></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td >
                                        <Box className={classes.image}>
                                            <IBox src={require('Assets/images/amazon.png')} alt="image" />
                                        </Box>
                                    </td>
                                    <td>$5 Five Guys Gift Card - Emailed</td>
                                    <td>04/23/2020</td>
                                </tr>
                                <tr>
                                    <td >
                                        <Box className={classes.image}>
                                            <IBox src={require('Assets/images/amazon.png')} alt="image" />
                                        </Box>
                                    </td>
                                    <td>$5 Five Guys Gift Card - Emailed</td>
                                    <td>04/23/2020</td>
                                </tr>
                                <tr>
                                    <td >
                                        <Box className={classes.image}>
                                            <IBox src={require('Assets/images/amazon.png')} alt="image" />
                                        </Box>
                                    </td>
                                    <td>$5 Five Guys Gift Card - Emailed</td>
                                    <td>04/23/2020</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </RctCollapsibleCard>
    </Box>
    );
}