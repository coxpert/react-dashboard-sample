/**
 * Ecommerce Dashboard
 */

import React, { Component, Suspense } from 'react'
import {withStyles} from '@material-ui/styles'
import {styles} from './style';
import {LinearProgress} from '@material-ui/core'
import { tr } from 'date-fns/locale';

const shops = [
	{
		icon: require('Assets/images/shops/peanutlabs.png'),
		name: "PeanutLabs",
		link: "https://www.prizerebel.com/external_networks.php?network=PEANUTLABS&uid=10280777",
		selected:false,
	},
	{
		icon: require('Assets/images/shops/adgate.png'),
		name: "AdGate",
		link: "https://wall.adgaterewards.com/",
		selected:false,
	},
	{
		icon: require('Assets/images/shops/adscend.png'),
		name: "Adscend",
		link: "https://adscendmedia.com/",
		selected:false,
	},
	{
		icon: require('Assets/images/shops/ayet.png'),
		name: "ayeT StudIos",
		link: "https://www.ayetstudios.com/offers/web_offerwall/1520/PrizeRebel?external_identifier=10280777",
		selected:false,
	},
	{
		icon: require('Assets/images/shops/offertoro.png'),
		name: "OfferToro",
		link: "https://www.offertoro.com/ifr/show/446/10280777/431",
		selected:false,
	},
	{
		icon: require('Assets/images/shops/personaly.jpg'),
		name: "Persona.ly",
		link: "https://persona.ly/mobilewidget/?appid=9274099f74d93d67ff7dc5f159e19af9&userid=10280777&date_of_birth=0000-00-00&gender=",
		selected:false,
	},
	{
		icon: require('Assets/images/shops/revenueuniverse.png'),
		name: "RevenueUniverse",
		link: "https://publishers.revenueuniverse.com/mobile/105/offers?uid=10280777&widget=w1_1",
		selected:false,
	},
	{
		icon: require('Assets/images/shops/pointclick.png'),
		name: "PoIntClickTrack",
		link: "https://partners.pointclicktrack.com/gateway/offers/pid/681/wid/269/uid/10280777",
		selected:false,
	}
]
 class CustomerOfferWalls extends Component {

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
			<div>
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
				<div>
					<Suspense  fallback={ <LinearProgress />}>
						<iframe src={this.state.selectedShop.link} className={classes.iframe}></iframe>
					</Suspense>
				</div>
			</div>
		)
	}
}
export default withStyles(styles)(CustomerOfferWalls)