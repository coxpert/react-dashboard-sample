/**
 * Ecommerce Dashboard
 */

import React, { Component } from 'react'
import { Helmet } from "react-helmet";
// page title bar
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';
import { withStyles } from '@material-ui/styles'
import { useStyle } from './style';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';


import { CategoryListItem } from './components/CategoryListItem'
import PageSubtitleBar from 'Components/PageSubtitleBar';
import {
	Panel,
} from 'react-instantsearch-dom';

import SearchBox from 'Components/SearchBox'
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import {
	CashApp,
	PayPal,
	AmazonGift
} from 'Components/RewardCard';

// Card Component
import { RctCard, RctCardContent } from 'Components/RctCard';
import { Hidden } from '@material-ui/core';

const BootstrapInput = withStyles((theme) => ({
	root: {
	  'label + &': {
		marginTop: theme.spacing(3),
	  },
	},
	input: {
	  borderRadius: 4,
	  outline: 'none',
	  height: 20,
	  position: 'relative',
	  backgroundColor: theme.palette.background.paper,
	  border: '1px solid #ced4da',
	  fontSize: 16,
	  padding: '10px 26px 10px 12px',
	  transition: theme.transitions.create(['border-color', 'box-shadow']),
	  width: 100,
	  fontFamily: [
		'-apple-system',
		'BlinkMacSystemFont',
		'"Segoe UI"',
		'Roboto',
		'"Helvetica Neue"',
		'Arial',
		'sans-serif',
		'"Apple Color Emoji"',
		'"Segoe UI Emoji"',
		'"Segoe UI Symbol"',
	  ].join(','),
	  '&:focus': {
		borderRadius: 4,
		borderColor: '#80bdff',
		boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
	  },
	},
  }))(InputBase);

class CustomerRewardLocker extends Component {

	constructor(props){
		super(props)
		this.state={
			sortBy: 'Price',
		}
		this.handleSortBy = this.handleSortBy.bind(this);
	}

	handleSortBy = (event) => {
		this.setState({sortBy: event.target.value});
	};

	render() {
		const { match } = this.props;
		return (
			<div  className="p-lg-3 p-md-2 p-sm-1 p-0">
				<Helmet>
					<title>Reward Locker</title>
					<meta name="description" content="Reactify Ecommerce Dashboard" />
				</Helmet>
				<PageTitleBar title={'Reward Locker'} match={match} />

				<div className="shop-wrapper">
					<div className="ais-InstantSearch">
						
							<div className="mb-30 filter-sm-wrap d-block d-md-none">
								<ExpansionPanel>
									<ExpansionPanelSummary className="filter-icon" expandIcon={<i className="zmdi zmdi-tune"></i>}>
										<span className="p-0">Filters</span>
									</ExpansionPanelSummary>
									<ExpansionPanelDetails>
										<div className="d-sm-flex justify-content-between w-100">
											<Panel
												className="mx-10 mb-20 mb-sm-0"
												header="Search"
											>
												<SearchBox/>
											</Panel>
											<Panel
												className="mx-10 mb-20 mb-sm-0"
												header="Category"
											>
												<div className="app-selectbox-sm">
													<CategoryListItem
														icon = {require('Assets/images/cache-icon.png')}
														text = {"Cash App"}
													/>
													<CategoryListItem
														icon = {require('Assets/images/paypal-icon.png')}
														text = {"PayPal Money"}
													/>
													<CategoryListItem
														icon = {require('Assets/images/amazon.png')}
														text = {"Amazon Gift Card"}
													/>
												</div>
											</Panel>
										</div>
									</ExpansionPanelDetails>
								</ExpansionPanel>
							</div>
							<div className="row">
								<div className="col-lg-3 col-md-4 d-none d-md-block">
									<div className="filters-wrapper">
										<RctCard>
											<RctCardContent>
												<div className="d-flex">
													<SearchBox/>
												</div>
											</RctCardContent>
										</RctCard>
										<RctCard className="brand">
											<RctCardContent>
												<Panel header="Category">
											<CategoryListItem
												icon = {require('Assets/images/cache-icon.png')}
												text = {"Cash App"}
											/>
											<CategoryListItem
												icon = {require('Assets/images/paypal-icon.png')}
												text = {"PayPal Money"}
											/>
											<CategoryListItem
												icon = {require('Assets/images/amazon.png')}
												text = {"Amazon Gift Card"}
											/>
												</Panel>
											</RctCardContent>
										</RctCard>
									</div>
								</div>
								<div className="col-lg-9 col-md-8 col-sm-12">
									<div className="shop-content">
										<div className="stats-info d-flex mb-30 justify-content-between align-items-center">
											<div className="pt-30">
												<PageSubtitleBar title={'Search Reward'}/>
											</div>
											<Hidden xsDown>
												<div>
													<NativeSelect
														value={this.state.sortBy}
														input={<BootstrapInput />}
														onChange={this.handleSortBy}
													>
														<option value={"Price"}>Price</option>
														<option value={"Name"}>Name</option>
													</NativeSelect>
												</div>
											</Hidden>
										</div>
										<div className="row">
											<div className="col-12 col-lg-4 col-sm-6 col-md-12"><CashApp/></div>
											<div className="col-12 col-lg-4 col-sm-6 col-md-12"><PayPal/></div>
											<div className="col-12 col-lg-4 col-sm-6 col-md-12"><AmazonGift/></div>
										</div>
									</div>
								</div>
							</div>
					</div>
				</div>
			</div>
		)
	}
}

export default withStyles(useStyle)(CustomerRewardLocker)