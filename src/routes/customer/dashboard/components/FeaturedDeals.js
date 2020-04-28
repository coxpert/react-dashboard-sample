
import React, { Component } from "react";

import { withStyles } from '@material-ui/styles'
import { Box, Typography } from '@material-ui/core'
import Slider from "react-slick";

const useStyles = {
    root:{
        width:'100%',
        padding:5,
        paddingTop:10,
        paddingBottom: 20,
    },
    wrapper:{
        width: '100%',
        display: 'flex',
        justifyContent:'space-around',
        border:'solid 2px white',
        flexDirection:'column',
        backgroundColor:'white',
    },
    title:{
        fontSize:30,
        color: '#428544',
        paddingBottom:10,
    },
    navControllbar:{
		display:'flex',
		justifyContent:'center',
		alignItems:'center',
		height:25,
        backgroundColor:'rgb(110, 111, 112)',
        color:'white',
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
		padding:'5px 30px',
        borderRadius: 4,
        marginTop:10,
        marginBottom:10,
        marginLeft:10,
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


class FeaturedDeals extends Component{

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

   render(){
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

    const  data  = this.props.data;
    const { classes } = this.props;
    
    return (
        <Box className = {classes.root}>
            <Typography className={classes.title}>Featured Deals</Typography>
            <Box className={classes.wrapper}>
                <Box>
                    <Slider ref={c => (this.slider = c)}  {...settings}>
                        {data && data.map((product, key) => (
                            <div key={key} >
                                <div className="top-selling">
                                    <div className="full-width">
                                        <img src={product.thumbnail} alt="headphone device" className="img-fluid d-block  border" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </Box>
                <Box>
                    <button className={classes.earnButton}>{`earn $${data[this.state.currentIndex].earnings.toFixed(2)}`}</button>
                </Box>
                <div className={classes.navControllbar}>
                    <div style={{ paddingTop:10,cursor:'pointer'}} onClick={this.previous}><h5><i className="ti-angle-left"></i>Prev</h5></div>
                    {data && data.map((product, key) => (
                        <div key={key} className={
                            this.state.currentIndex===key?classes.navButtonActive:classes.navButton
                        } onClick={()=>{this.gotoSlick(key)}}></div>
                    ))}
                    <div style={{ paddingTop:10, marginLeft:10, cursor:'pointer' }} onClick={this.next}><h5>Next<i className="ti-angle-right"></i></h5></div>
                </div>
            </Box>
        </Box>
    );
   }
}

export default withStyles(useStyles)(FeaturedDeals)