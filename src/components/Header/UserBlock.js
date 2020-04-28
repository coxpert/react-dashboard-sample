
import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import { Link } from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';

import { withStyles } from '@material-ui/styles';
import { Divider } from '@material-ui/core';

import {signOut} from 'Actions'

const useStyle = {
	menuPanel:{
		width: 200,
		padding: 10,
		listStyleType: 'none',
	},
	profile:{
		color:'black',
		display:'flex',
		width:'180px',
		alignItems:'center',
		marginBottom: 5,
		cursor:'point',
		'&:hover':{
			backgroundColor:'#30303033'
		}
	},
	logout:{
		color:'red',
		display:'flex',
		cursor:'point',
		width:'180px',
		alignItems:'center',
		marginTop: 5,
		'&:hover':{
			backgroundColor:'#30303033'
		}
		
	}
}

class UserBlock extends Component {

	state = {
		userDropdownMenu: false,
	}

	logoutUser(e) {
		this.props.signOut(this.props.history);
	}

	toggleUserDropdownMenu() {
		this.setState({ userDropdownMenu: !this.state.userDropdownMenu });
	}

	render() {

		const {classes} = this.props;

		return (
			<div className="top-sidebar">
				<div className="sidebar-user-block">
					<Dropdown
						isOpen={this.state.userDropdownMenu}
						toggle={() => this.toggleUserDropdownMenu()}
						className="rct-dropdown"
					>
							<DropdownToggle
								tag="div"
								className="d-flex align-items-center"
							>
									<div className="user-profile">
										<img
											src={require('Assets/avatars/user-15.jpg')}
											alt="user profile"
											className="img-fluid rounded-circle"
											width="50"
											height="100"
										/>
									</div>
									<div className="user-info mouse-cursor">
										<span className="user-name ml-2">Lucile Beck</span>
										<i className="zmdi zmdi-chevron-down dropdown-icon mx-4"></i>
									</div>
							</DropdownToggle>
						<DropdownMenu>
							<ul className={classes.menuPanel}>
								<li>
									<Link to={{
										pathname: '/customer/profile',
										state: { activeTab: 0 }
									}}>
										<div className={classes.profile}>
											<PersonIcon className={classes.userIcon}/>
											<span className="ml-5 text-black">Account Info</span>
										</div>
										
									</Link>
								</li>
								<Divider />
								<li>
									<a href="#" onClick={(e) => this.logoutUser(e)}>
										<div className={classes.logout}>
											<PowerSettingsNewIcon  className={classes.powerIcon} />
											<span className="ml-5 text-black"> Log out </span>
										</div>
									</a>
								</li>
							</ul>
						</DropdownMenu>
					</Dropdown>
				</div>
			</div>
		);
	}
}


export default  connect(null,{signOut})(withRouter(withStyles(useStyle)(UserBlock)));
