/**
 * Today Orders Stats
 */
import React from 'react';
import CountUp from 'react-countup';

// rct card box
import { RctCardContent } from 'Components/RctCard';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';


const UserLevel = (props) => {
    const {level} = props;
    return (
    <div className="current-widget bg-primary">
        <RctCardContent>
            <div className="d-flex justify-content-between">
                <div className="align-items-start">
                    <h5 className="mb-0">User Level</h5>
                    <h4 className="mb-0">{level}</h4>
                </div>
                <div className="align-items-end">
                    <AttachMoneyIcon />
                </div>
            </div>
        </RctCardContent>
    </div>
);}

export default UserLevel;
