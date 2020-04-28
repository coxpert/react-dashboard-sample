/**
 * Ecommerce Dashboard
 */

import React, { Component } from 'react'
import {UserBlock, YourState, MyBalence} from 'Components';
import {withStyles} from '@material-ui/styles';
import {styles} from './style';
import {Box, Hidden} from  '@material-ui/core';

// rct card box
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';
import { Table } from 'reactstrap';

class CustomerMyWins extends Component {

	render() {
		const { classes } = this.props;
		return (
			<div>
				<UserBlock />

				<Box className={classes.wrapper}>

					<Hidden smDown>
						<Box className={classes.leftBox}>
							<MyBalence />
						</Box>
					</Hidden>
					
					<Box className={classes.root}>
						<div className="responsive-table-wrapper">
							<RctCollapsibleCard heading="Redemption History">
								<div className="table-responsive">
									<div>
										<Table hover bordered striped>
											<thead>
												<tr className="bg-primary text-white">
													<th>Name</th>
													<th>Date Won</th>
													<th>Won</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>name</td>
													<td>2020-04-23</td>
													<td>$34.56</td>
												</tr>
												
												<tr>
													<td>name</td>
													<td>2020-04-23</td>
													<td>$34.56</td>
												</tr>
												
												<tr>
													<td>name</td>
													<td>2020-04-23</td>
													<td>$34.56</td>
												</tr>
												
												<tr>
													<td>name</td>
													<td>2020-04-23</td>
													<td>$34.56</td>
												</tr>
												
												<tr>
													<td>name</td>
													<td>2020-04-23</td>
													<td>$34.56</td>
												</tr>

												
												<tr>
													<td>name</td>
													<td>2020-04-23</td>
													<td>$34.56</td>
												</tr>
												
												<tr>
													<td>name</td>
													<td>2020-04-23</td>
													<td>$34.56</td>
												</tr>
											</tbody>
										</Table>
									</div>
								</div>
							</RctCollapsibleCard>
						</div>
					</Box>

					<Hidden smDown>
						<Box className={classes.stateBox}>
							<YourState />
						</Box>
					</Hidden>
				</Box>
			</div>
		)
	}
}

export default withStyles(styles)(CustomerMyWins)