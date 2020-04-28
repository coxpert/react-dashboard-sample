/**
 * Ecommerce Dashboard
 */

import React, { Component } from 'react'
import { Helmet } from "react-helmet";
// page title bar
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';


export default class CustomerEzCashOffers extends Component {
	render() {
		const { match } = this.props;
		return (
			<div>
				<Helmet>
					<title>Ez Cash Offers</title>
					<meta name="description" content="Reactify Ecommerce Dashboard" />
				</Helmet>
				<PageTitleBar title={'Ez Cash Offers'} match={match} />

			</div>
		)
	}
}
