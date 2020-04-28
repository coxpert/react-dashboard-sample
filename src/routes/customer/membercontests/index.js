/**
 * Ecommerce Dashboard
 */

import React, { Component } from 'react'
import { Helmet } from "react-helmet";
import {widthStyles, withStyles} from '@material-ui/styles';
import {Box, Hidden} from '@material-ui/core';
import {styles} from './style';
import {IBox} from 'Components';


class CustomerMemberContests extends Component {
	render() {
		const {classes} = this.props;
		const { match } = this.props;
		return (
			<div>
				<Helmet>
					<title>Member Contests</title>
					<meta name="description" content="Reactify Ecommerce Dashboard" />
				</Helmet>
				<Box className={classes.root}>
					<Box  className={classes.headerBox}>
						<Hidden xsDown>
							<Box className={classes.overText}>Great</Box>
						</Hidden>
						<img  src={require('Assets/images/contests-header-bg.png')} alt="contests-heading"/>
						<Hidden xsDown><Box className={classes.overText}>Contests</Box></Hidden>
						<Hidden smUp>
							<Box className={classes.overText}>Great Contests</Box>
						</Hidden>
					</Box>
					
				</Box>
			</div>
		)
	}
}

export default withStyles(styles)(CustomerMemberContests);