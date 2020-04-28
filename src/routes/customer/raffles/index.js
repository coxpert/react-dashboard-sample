/**
 * Ecommerce Dashboard
 */

import React, { Component } from 'react'
import { Helmet } from "react-helmet";
import {withStyles} from '@material-ui/styles';
import {styles} from './style';
import {Box} from '@material-ui/core';
import {
	CurrentRaffleCard,
	UpcomingRaffleCard,
	RecentlyEndedRaffleCard,
} from './components';


class CustomerRaffles extends Component {
	render() {
		const {classes} = this.props;
		return (
			<div>
				<Helmet>
					<title>Raffles</title>
					<meta name="description" content="Reactify Ecommerce Dashboard" />
				</Helmet>

				<Box className={classes.root} >
					<Box className={classes.cardBox}>
						<CurrentRaffleCard />
						<UpcomingRaffleCard />
						<RecentlyEndedRaffleCard />
					</Box>
					
				</Box>

			</div>
		)
	}
}

export default  withStyles(styles)(CustomerRaffles);