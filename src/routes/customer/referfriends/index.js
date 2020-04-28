/**
 * Ecommerce Dashboard
 */

import React, { Component } from 'react'
import { Helmet } from "react-helmet";
// page title bar
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';


export default class CustomerReferFriends extends Component {
	render() {
		const { match } = this.props;
		return (
			<div>
				<Helmet>
					<title>Refer Friends</title>
					<meta name="description" content="Reactify Ecommerce Dashboard" />
				</Helmet>
				<PageTitleBar title={'Refer Friends'} match={match} />
			</div>
		)
	}
}
