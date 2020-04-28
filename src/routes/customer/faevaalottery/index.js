/**
 * Ecommerce Dashboard
 */

import React, { Component } from 'react'
import { Helmet } from "react-helmet";
// page title bar
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';



export default class CustomerFaevaaLottery extends Component {
	render() {
		const { match } = this.props;
		return (
			<div>
				<Helmet>
					<title>Faevaa Lottery</title>
					<meta name="description" content="Reactify Ecommerce Dashboard" />
				</Helmet>
				<PageTitleBar title={'Faevaa Lottery'} match={match} />
			</div>
		)
	}
}
