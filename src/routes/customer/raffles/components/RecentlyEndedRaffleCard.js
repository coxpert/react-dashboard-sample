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

export const RecentlyEndedRaffleCard = (props) => {
    const classes = useStyles();
    return(
    <Box className = {classes.root}>
        <RctCollapsibleCard heading="RECENTLY ENDED RAFFLE">
            <div className="responsive-table-wrapper">
                <div className="table-responsive">
                    <div>
                        <Table hover bordered striped>
                            <thead>
                                <tr className="bg-primary text-white">
                                    <th>WINER</th>
                                    <th>NAME OF ITEM WON</th>
                                    <th><IconText icon = {<PanoramaIcon />} text={"Image"} /></th>
                                    <th>END DATE</th>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </RctCollapsibleCard>
    </Box>
    );
}