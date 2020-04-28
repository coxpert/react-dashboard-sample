/**
 * Ecommerce Dashboard
 */

import React, { Component } from 'react'
import { Helmet } from "react-helmet";
// page title bar
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';


export default class CustomerSearchWeb extends Component {
	render() {
		const { match } = this.props;
		return (
			<div>
				<Helmet>
					<title>Search the Web</title>
					<meta name="description" content="Reactify Ecommerce Dashboard" />
				</Helmet>
				<PageTitleBar title={'Search the Web'} match={match} />
			</div>
		)
	}
}
