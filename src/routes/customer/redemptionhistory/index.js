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
import LeftPanel from './LeftPanel'

class CustomerRedemptionHistory extends Component {
	render() {
		const { classes } = this.props;
		return (
			<div>
				<UserBlock />

				<Box className={classes.wrapper}>
					<Hidden smDown>
						<Box className={classes.leftBox}>
							<LeftPanel />
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
													<th>Date</th>
													<th>Reward</th>
													<th>Cost</th>
													<th>Status</th>
													<th>Cancel?</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>2020-04-29</td>
													<td>Reward</td>
													<td>$34.56</td>
													<td>Active</td>
													<td>
														<button className="btn btn-danger btn-sm">Cancel</button>
													</td>
												</tr>
												<tr>
													<td>2020-04-29</td>
													<td>Reward</td>
													<td>$34.56</td>
													<td>Active</td>
													<td>
														<button className="btn btn-danger btn-sm">Cancel</button>
													</td>
												</tr>
												<tr>
													<td>2020-04-29</td>
													<td>Reward</td>
													<td>$34.56</td>
													<td>Active</td>
													<td>
														<button className="btn btn-danger btn-sm">Cancel</button>
													</td>
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

export default withStyles(styles)(CustomerRedemptionHistory);
