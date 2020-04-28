/**
 * Top Selling Widget
 */
import React, { Component } from "react";
import Slider from "react-slick";

import { Grid } from "@material-ui/core";
import { withStyles } from '@material-ui/styles'

const styles = {
	navControllbar:{
		display:'flex',
		justifyContent:'center',
		alignItems:'center',
		height:25,
		backgroundColor:'rgb(110, 111, 112)',
		marginLeft:20,
		marginRight:5,
	},
	navButton:{
        cursor:'pointer',
        width: 18,
        height: 15,
        backgroundColor:'rgb(104, 139, 96)',
        marginLeft: 10,
	},
	rightPanel:{
		padding: 20,
		color:'black',
		textAlign:'left',
	},
	earnButton:{
		backgroundColor: 'rgb(199,51,147)',
		color:'white',
		fontWeight:'bold',
		border:'none',
		outline:'none',
		padding:'5px 10px',
		borderRadius: 4,
		position:'absolute',
		bottom: 10,
		left: 10,
		cursor:'pointer'
	},
	navButtonActive:{
		backgroundColor: 'rgb(89,203,48)',
		cursor:'pointer',
        width: 18,
        height: 15,
        marginLeft: 10,
	}
}
class MyDealsWidget extends Component {

	constructor(props){
		super(props)
		this.state = {
			currentIndex: 0,
		}
		this.slider = React.createRef();
		this.next = this.next.bind(this);
		this.previous = this.previous.bind(this);
		this.beforeChange = this.beforeChange.bind(this);
		this.afterChange = this.afterChange.bind(this);
		this.gotoSlick = this.gotoSlick.bind(this);
	}

	next() {
		this.slider.slickNext();
	}

	previous() {
		this.slider.slickPrev();
	}

	beforeChange(current, next) {
		this.setState({currentIndex: next})
	}
	afterChange(current){

	}

	gotoSlick(index){
		this.slider.slickGoTo(index)
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
			beforeChange: (current, next) => { this.beforeChange(current, next)},
			afterChange: current =>{this.afterChange(current)}
		};

		const  products  = this.props.data;
		const {classes } = this.props;

		return (
			<div>
				<Grid container>
					<Grid item xs={12} sm={6}>
						<Slider ref={c => (this.slider = c)}  {...settings}>
							{products && products.map((product, key) => (
								<div key={key} className="m-2">
									<div className="top-selling">
										<div className="full-width p-3">
											<img src={product.thumbnail} alt="headphone device" className="img-fluid d-block  border" />
										</div>
									</div>
								</div>
							))}
						</Slider>
						<div className={classes.navControllbar}>
							<div style={{paddingTop:10,cursor:'pointer'}} onClick={this.previous}><h5><i className="ti-angle-left"></i>Prev</h5></div>
							{products && products.map((product, key) => (
								<div key={key} className={
									this.state.currentIndex===key?classes.navButtonActive:classes.navButton
								} onClick={()=>{this.gotoSlick(key)}}></div>
							))}
							<div style={{paddingTop:10, marginLeft:10,cursor:'pointer'}} onClick={this.next}><h5>Next<i className="ti-angle-right"></i></h5></div>
						</div>
					</Grid>

					<Grid item  xs={12} sm={6} style={{position:'relative'}}>
						<div className={classes.rightPanel}>
							<h2>{products[this.state.currentIndex].title}</h2>
							<p style={{paddingBottom:20}}>{products[this.state.currentIndex].description}</p>
						</div>
						<button className={classes.earnButton}>{products[this.state.currentIndex].buttonText}</button>
					</Grid>
				</Grid>
			</div>
		);
	}
}


export default  withStyles(styles)(MyDealsWidget)