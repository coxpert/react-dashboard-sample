/**
 * Ecommerce Dashboard
 */

import React, { Component, Suspense } from 'react'
import {withStyles} from '@material-ui/styles';
import {LinearProgress} from '@material-ui/core'
import {styles} from './style';
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const shops = [
	{
		icon: "https://www.prizerebel.com/assets/images/offerwalls/video.png",
		name: "Videos",
		link: "https://asmwall.com/adwall/publisher/3199/profile/10433?subid1=10280777",
		selected:false,
	},
	{
		icon: "https://www.prizerebel.com/assets/images/offerwalls/hyprmx.jpg",
		name: "HyprMX Dally",
		link: "https://hyprmx.com/media",
		selected:false,
	},
]

class CustomerVideos extends Component {

	constructor(props){
		super(props);
		this.state = {
			shops: shops,
			selectedShop: shops[0],
		}
		this.selectShop = this.selectShop.bind(this);
	}

	componentWillMount(){
		this.state.shops[0].selected = true;
	}

	selectShop = (shop) => {
		this.state.shops.find((item)=>{return item.selected}).selected=false;
		this.setState({selectedShop: shop});
		shop.selected = true;
	}

	render() {
		const { classes } = this.props;
		return (
			<div style={{overflowX: 'hidden'}}>
				<div className="row bg-white mt-1 d-flex justify-content-center px-1">
					{
						this.state.shops.map((shop, i)=>(
							<div key={i} className={shop.selected?classes.shopItemSelected:classes.shopItem} onClick={()=>{this.selectShop(shop)}}>
								<div className={classes.shopIconConainer}>
									<img src={shop.icon} alt="Shop Icon" className={classes.shopIcon}/>
								</div>
								<div  className={classes.shopName}>
									{shop.name}
								</div>
							</div>
						))
					}
				</div>
				<Box className={classes.videoHeader}>
					<Typography className={classes.videoHeaderCaption}>
						{this.state.selectedShop.name}
					</Typography>
					Need Help?
				</Box>
				<Box className={classes.videoListWrapper}>
					<Suspense  fallback={ <LinearProgress />}>
						<iframe src={this.state.selectedShop.link} className={classes.iframe}></iframe>
					</Suspense>
				</Box>
			</div>
		)
	}
}
export default withStyles(styles)(CustomerVideos)