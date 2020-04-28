/**
 * Ecommerce Dashboard
 */

import React, { Component } from 'react'
// page title bar
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';
import PageSubtitleBar from 'Components/PageSubtitleBar';
import { Hidden, Divider, Grid } from "@material-ui/core";
import { withStyles } from '@material-ui/styles';
import { styles } from './style';
import {
	FaevaaCashBalance,
	RefferralEarnings,
	LifeTimeEarnings,
	MyDealsWidget,
	UserLevel,
} from "Components/Widgets";

// widgets data
import {
	mydeals,
	mostPopularOffers,
	bestOffers,
	featuredDeals,
	recentOffers
} from './data';


import {OfferCard, PayementBar,MostPopularOffers, WhatsNew ,SpecialClubOffer, OffersList} from './components';
import  FeaturedDeals  from './components/FeaturedDeals';


class CustomerOverview extends Component {

	constructor(props){
		super(props)
		this.state = {
			greeting : '',
			initailSlide: 0,
			faevaaCash:876,
			refferralEarnings: 123,
			lifetimeEarnings: 345,
			userLevel: 4,
		}

		this.setInitailSlide = this.setInitailSlide.bind(this);
	}
	componentDidMount(){
		let myDate = new Date();
    	let hrs = myDate.getHours();
    	let greeting;
		if (hrs < 12)
		greeting = 'Good Morning, Mr. Morales';
		else if (hrs >= 12 && hrs <= 17)
		greeting = 'Good Afternoon, Mr. Morales';
		else if (hrs >= 17 && hrs <= 24)
		greeting = 'Good Evening, Mr. Morales';
		this.setState({greeting})
	}


	setInitailSlide = (i) =>{
		this.setState({initailSlide:i})
	}

	render() {
		const { classes } = this.props;
		return (
			<div className="p-lg-3 p-md-2 p-sm-1">
				<PageTitleBar title={this.state.greeting} />

				<div className="general-widgets-wrapper">
					<Hidden xsDown>
						<div className="dash-cards w-100">
							<div className="row">
								<Hidden smDown>
									<div className="col-sm-6 col-lg-2 w-xs-half-block">
									</div>
								</Hidden>
								
								<div className="col-sm-6 col-lg-2 w-xs-half-block">
									<FaevaaCashBalance value = {this.state.faevaaCash} />
								</div>
								<div className="col-sm-6 col-lg-2 w-xs-half-block">
									<RefferralEarnings  value = {this.state.refferralEarnings} />
								</div>
								<div className="col-sm-6 col-lg-2 w-xs-half-block">
									<LifeTimeEarnings  value = {this.state.lifetimeEarnings} />
								</div>
								<div className="col-sm-36 col-lg-2 w-xs-half-block">
									<UserLevel  level={this.state.userLevel}/>
								</div>
								<Hidden smDown>
									<div className="col-sm-6 col-lg-2 w-xs-half-block">
									</div>
								</Hidden>
							</div>
						</div>
					</Hidden>
					
					<PageSubtitleBar title={'My Info'}/>

					<div className={classes.mainContainer}>
						<div className={classes.leftContainer}>
							<div className="col-12 position-relative mt-3">
								<div className={classes.myDealsTitle}>My Deals</div>
								<div className={classes.myDeals}>
									<div className={classes.myDealsContent}>
										<MyDealsWidget data={mydeals} initailSlide={this.state.initailSlide} />
										<div className={classes.alsoLike}>
											Members Also Like
										</div>
										<div className="row p-2 overflow-x-scroll">
											{
												bestOffers.map(offer =>(
													<div key={offer.id} className="col-6 col-sm-3">
														<OfferCard
															title = {offer.title}
															image = {offer.image}
															earnings = {offer.earnings}
														/>
													</div>
												))
											}
										</div>
									</div>
								</div>
							</div>
							<Divider />
							<div className="col-12 position-relative mt-3">
								<OffersList   data={recentOffers} />
							</div>
						</div>
						<Divider orientation="vertical" flexItem/>
						<div className={classes.rightContainer}>
							<div className="mb-3">
								<PayementBar earnings={90}/>
							</div>
								<Divider  />
							<div className = {classes.whatsNew}>
								<WhatsNew  earnings={20}/>
							</div>	
							<Divider />
							<div className = {classes.whatsNew}>
								<SpecialClubOffer earnings={45} />
							</div>	
							<Divider />

							<div className = {classes.whatsNew}>
								<FeaturedDeals data={ featuredDeals} />
							</div>	
							<Divider />
						</div>
					</div>
					<Divider />
					<div className={classes.mostPopularOfferContainer}>
						<MostPopularOffers  data={mostPopularOffers} />
					</div>
				</div>
			
			</div>
		)
	}
}

export default  withStyles(styles)(CustomerOverview)