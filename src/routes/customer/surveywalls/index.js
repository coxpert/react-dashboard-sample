/**
 * Ecommerce Dashboard
 */

import React, {Component, Suspense} from 'react'
import {withStyles} from '@material-ui/styles'
import {styles} from './style';
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import {SurveyItem} from "Routes/customer/surveywalls/SurveyItem";
import Divider from "@material-ui/core/Divider";
import {Grid} from "@material-ui/core";

const shops = [
	{
		icon: "https://www.prizerebel.com/assets/images/cash_surveys2/mysurveys_top.png",
		name: "YourSurveys",
		link: "https://www.prizerebel.com/external_networks.php?network=PEANUTLABS&uid=10280777",
		selected:false,
	},
	{
		icon: "https://www.prizerebel.com/assets/images/cash_surveys2/combined_top.png",
		name: "Gold",
		link: "https://wall.adgaterewards.com/",
		selected:false,
	},
	{
		icon: "https://www.prizerebel.com/assets/images/cash_surveys2/fedsamp_top.png",
		name: "Samp",
		link: "https://adscendmedia.com/",
		selected:false,
	},
	{
		icon: "https://www.prizerebel.com/assets/images/cash_surveys2/ssi_top.png",
		name: "OpWorld",
		link: "https://www.ayetstudios.com/offers/web_offerwall/1520/PrizeRebel?external_identifier=10280777",
		selected:false,
	},
	{
		icon: "https://www.prizerebel.com/assets/images/cash_surveys2/usamp_top.png",
		name: "Toluna",
		link: "https://www.offertoro.com/ifr/show/446/10280777/431",
		selected:false,
	},
	{
		icon: "https://www.prizerebel.com/assets/images/cash_surveys2/peanut_top.png",
		name: "PeanutLabs",
		link: "https://persona.ly/mobilewidget/?appid=9274099f74d93d67ff7dc5f159e19af9&userid=10280777&date_of_birth=0000-00-00&gender=",
		selected:false,
	},
	{
		icon: "https://www.prizerebel.com/assets/images/cash_surveys2/fedsamp_top.png",
		name: "Sampll",
		link: "https://publishers.revenueuniverse.com/mobile/105/offers?uid=10280777&widget=w1_1",
		selected:false,
	},
	{
		icon: "https://www.prizerebel.com/assets/images/cash_surveys2/cint_top.png",
		name: "Cint",
		link: "https://partners.pointclicktrack.com/gateway/offers/pid/681/wid/269/uid/10280777",
		selected:false,
	}
]

const surveys = [
	{
		name: "Your Survey Daily Survey",
		time: "",
		points: "75",
		link: "https://www.your-surveys.com/",
	},
	{
		name: "Survey #22971471",
		time: "10",
		points: "35",
		link: "https://www.prizerebel.com/go/surveyOut/yoursurveys/0f478292333f634713277b6a8887fcb15af9e4922a76f66fe97f093d765457980c71451e28f93387d68a2bca9bfd9abe/aHR0cHM6Ly93d3cueW91ci1zdXJ2ZXlzLmNvbT9zaT03NSZzc2k9NDk0NWJkNzBlNjlmZDg5YThjMjU2ZjI1MGFkMmQ2ODQ1ZjUyYWUyMzdmNjhiZDMxNjk0Mjc1ZWMwOGQxYjZkYSZ1bmlxdWVfdXNlcl9pZD0xMDI4MDc3NyZobWFjPWUyZjdjMThjODIxOWJkNWFhMDU2ZjNhMzU2NWNkZWU3Jm9mZmVyX2lkPTIyOTcxNDcx",
	},
	{
		name: "Survey #22822071",
		time: "22",
		points: "35",
		link: "https://www.prizerebel.com/go/surveyOut/yoursurveys/a0999cd7b6be6db4482bc103ad1229a108b9f87035b05734a7d0516f48528816bfe2f43ace6a465948594f3bb7a7a099/aHR0cHM6Ly93d3cueW91ci1zdXJ2ZXlzLmNvbT9zaT03NSZzc2k9ZTg3ODYzY2FlY2E1ODBhNmVmMjMwNjMyYTA3ZTZmNmM1ZjUyYWUyMzdmNjhiZDMxNjk0Mjc1ZWMwOGQxYjZkYSZ1bmlxdWVfdXNlcl9pZD0xMDI4MDc3NyZobWFjPWUyZjdjMThjODIxOWJkNWFhMDU2ZjNhMzU2NWNkZWU3Jm9mZmVyX2lkPTIyODIyMDcx",
	},
	{
		name: "Survey #22963586",
		time: "15",
		points: "55",
		link: "https://www.prizerebel.com/go/surveyOut/yoursurveys/e8a1f6d6846017abf44121797c5418438c769f25b23cb58acfa987f1901a7bf97b46343c1d1803102727633642b559d4/aHR0cHM6Ly93d3cueW91ci1zdXJ2ZXlzLmNvbT9zaT03NSZzc2k9NWI4ODcyYzU0ODdlOTcwM2Y2NWJkNjBmOTY2NDc3ZmU1ZjUyYWUyMzdmNjhiZDMxNjk0Mjc1ZWMwOGQxYjZkYSZ1bmlxdWVfdXNlcl9pZD0xMDI4MDc3NyZobWFjPWUyZjdjMThjODIxOWJkNWFhMDU2ZjNhMzU2NWNkZWU3Jm9mZmVyX2lkPTIyOTYzNTg2",
	},
	{
		name: "Survey #22966038",
		time: "15",
		points: "55",
		link: "https://www.prizerebel.com/go/surveyOut/yoursurveys/eebaba8173ae92ad2cefd1551f7bfa97868e793861ff8467b50f502bfcfbcfd5c2edb38917c4c00bc31aa2014c998845/aHR0cHM6Ly93d3cueW91ci1zdXJ2ZXlzLmNvbT9zaT03NSZzc2k9NWQ5OWRkNjk5MGE0NjBhYTQwMzY2NTljOTc0MDQ2YzM1ZjUyYWUyMzdmNjhiZDMxNjk0Mjc1ZWMwOGQxYjZkYSZ1bmlxdWVfdXNlcl9pZD0xMDI4MDc3NyZobWFjPWUyZjdjMThjODIxOWJkNWFhMDU2ZjNhMzU2NWNkZWU3Jm9mZmVyX2lkPTIyOTY2MDM4",
	},
	{
		name: "Survey #22972679",
		time: "15",
		points: "55",
		link: "https://www.prizerebel.com/go/surveyOut/yoursurveys/6f4ffdbf913f2779e5c221cec70125ce4ad10df7c6804b10ec78774965f49c4ae1e16bd7a8c555fccfed2575244a4b00/aHR0cHM6Ly93d3cueW91ci1zdXJ2ZXlzLmNvbT9zaT03NSZzc2k9ODY2Mzk2MzQ2YjE2YzIwNzM4ZDIxNTUzYjZjMDllZDQ1ZjUyYWUyMzdmNjhiZDMxNjk0Mjc1ZWMwOGQxYjZkYSZ1bmlxdWVfdXNlcl9pZD0xMDI4MDc3NyZobWFjPWUyZjdjMThjODIxOWJkNWFhMDU2ZjNhMzU2NWNkZWU3Jm9mZmVyX2lkPTIyOTcyNjc5",
	},
	{
		name: "Survey #22967124",
		time: "7",
		points: "35",
		link: "https://www.prizerebel.com/go/surveyOut/yoursurveys/8987135dc3cdfe72a90dd7f1fac5ec300dcc4674b10b618c9d2daf608a845919960a8990972a8d76a0134a754d72de02/aHR0cHM6Ly93d3cueW91ci1zdXJ2ZXlzLmNvbT9zaT03NSZzc2k9MWViNTViNmQ5NTRiMzBlNDcyMjY2MjEyMzBjOTQzODU1ZjUyYWUyMzdmNjhiZDMxNjk0Mjc1ZWMwOGQxYjZkYSZ1bmlxdWVfdXNlcl9pZD0xMDI4MDc3NyZobWFjPWUyZjdjMThjODIxOWJkNWFhMDU2ZjNhMzU2NWNkZWU3Jm9mZmVyX2lkPTIyOTY3MTI0",
	},
]

class CustomerSurveywall extends Component {
	constructor(props){
		super(props);
		this.state = {
			shops: shops,
			surveys: surveys,
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
				<Box className={classes.surveyHeader}>
					<Typography className={classes.surveyHeaderCaption}>
						{this.state.selectedShop.name}
					</Typography>
					Need Help?
				</Box>
				<Box className={classes.surveyListWrapper}>
					<Box className={classes.surveyListHeader}>
						<Typography className={classes.surveyListHeaderCategory}>
							Name
						</Typography>
						<Typography className={classes.surveyListHeaderCategory}>
							Time to Complete
						</Typography>
						<Typography className={classes.surveyListHeaderCategory}>
							Points
						</Typography>
					</Box>
					<Typography className={classes.surveyWarnging}>
						Please disable VPN programs. See our Quality Score guide. Please keep your Quality Score above 100.
					</Typography>
					{
						this.state.surveys.map((survey, i)=>(
							<SurveyItem key={i} name={survey.name} time={survey.time} points={survey.points} link={survey.link}/>
						))
					}
					<Divider variant="middle" style={{margin: '30px 10px 50px'}}/>
					<Box className={classes.faqContainer}>
						<Typography className={classes.faqCaption}>
							FAQ?
						</Typography>
						<Grid container className={classes.faqWrapper}>
							<Grid item xs={12} md={4} className={classes.faqItemWrapper}>
								<Typography className={classes.faqQuestion}>
									1. How do I know when I've completed a survey?
								</Typography>
								<Typography>
									You will know that you have successfully completed a survey when you reach the thank you page. You will generally receive credit within 24 hours.
								</Typography>
							</Grid>
							<Grid item xs={12} md={4} className={classes.faqItemWrapperCenter}>
								<Typography className={classes.faqQuestion}>
									2. What does it mean when a survey says Quota Full?
								</Typography>
								<Typography>
									You may receive this message when the survey has already reached the required number of respondents needed for a certain demographic profile.
								</Typography>
							</Grid>
							<Grid item xs={12} md={4} className={classes.faqItemWrapper}>
								<Typography className={classes.faqQuestion}>
									3. What does it mean when a survey says Disqualified
								</Typography>
								<Typography>
									You may receive this message if you work in a certain industry or if there is a difference between your answers on the profile questionnaire and what you provided on the survey.
								</Typography>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</div>
		)
	}
}
export default withStyles(styles)(CustomerSurveywall)
