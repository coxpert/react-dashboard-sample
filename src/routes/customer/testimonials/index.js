/**
 * Ecommerce Dashboard
 */

import React, { Component } from 'react'

// page title bar
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';
import { withStyles } from '@material-ui/styles'
import {styles} from './style'
import {Box, Avatar, Typography, Button} from '@material-ui/core';
import {testimonials} from './data';
import Slider from "react-slick";
import StarRatingComponent from 'react-star-rating-component';

class CustomerTestimonials extends Component {

	constructor(props){
		super(props)
		this.state= {
			testimonials: testimonials,
			showNumberPerPage:6,
			currentPage:1,
		}
		this.showMore = this.showMore.bind(this);
	}

	

	showMore = () => {
		this.setState({showNumberPerPage:this.state.showNumberPerPage+6})
	}
	

	render() {

		const settings = {
			dots: false,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			arrows: false,
			rtl: false,
		};


		const {classes} = this.props;
		const {testimonials,currentPage,showNumberPerPage}= this.state;
		return (
			<div className={classes.totalWrapper}>
				<PageTitleBar title={'Testimonials'}/>
				<Box className={classes.mainContainer}>
					<Box className={classes.recentFeedbackBox}>
						<Typography variant="h2" className={classes.title} > Recent Reviews </Typography>
						<Slider ref={c => (this.slider = c)}  {...settings}>
							{testimonials && testimonials.map((testimonial, key) => (
								<div key={key} >
									<Box className={classes.recentBox}>
										<Avatar 
											alt={`${testimonial.firstName}  ${testimonial.lastName}`} 
											src={testimonial.image} 
											className={classes.avatar}
										/>
										<Box>
											<h3>{`${testimonial.firstName}  ${testimonial.lastName}`}</h3>
											<h4>{`${testimonial.email}`}</h4>
										</Box>
									</Box>
									<Typography style={{textAlign:'center'}}> {testimonial.feedBack} </Typography>
									<Box className={classes.ratingBox}>
										<StarRatingComponent
											name="rate2"
											editing={true}
											starCount={5}
											value={testimonial.rating}
											starColor={'#ffb400'}
											emptyStarColor={'#aaa'} 
										/>
									</Box>
									<Typography style={{textAlign:'center'}}> {testimonial.date} </Typography>
								</div>
							))}
						</Slider>
					</Box>
					<Box className={classes.allFeedbackBox}>
						<div className="row">
							{
								testimonials.slice(0, currentPage*showNumberPerPage).map((testimonial, key) => (
								<div key={key} className="col-lg-4 col-md-6">
									<Box className={classes.testimonialItem}>
										<Box className={classes.recentBox1}>
											<Avatar 
												alt={`${testimonial.firstName}  ${testimonial.lastName}`} 
												src={testimonial.image} 
												className={classes.avatar}
											/>
											<Box>
												<h3 style={{width:'100%', textAlign:'center'}}>{`${testimonial.firstName}  ${testimonial.lastName}`}</h3>
												<h4 style={{width:'100%', textAlign:'center'}}>{`${testimonial.email}`}</h4>
											</Box>
										</Box>
										<Typography style={{textAlign:'center'}}> {testimonial.feedBack} </Typography>
										<Box className={classes.ratingBox}>
											<StarRatingComponent
												name="rate2"
												editing={true}
												starCount={5}
												value={testimonial.rating}
												starColor={'#ffb400'}
												emptyStarColor={'#aaa'} 
											/>
										</Box>
										<Typography style={{textAlign:'center'}}> {testimonial.date} </Typography>
									</Box>
								</div>
								))
							}
						</div>
						<Box className={classes.showMoreContainer}>
							<Button variant="contained" color="primary"  onClick={()=>{this.showMore()}}>
								Show More
							</Button>
						</Box>
					</Box>
				</Box>
			</div>
		)
	}
}

export default withStyles(styles)(CustomerTestimonials)