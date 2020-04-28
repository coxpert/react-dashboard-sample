/**
 * App Header
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';
import screenfull from 'screenfull';
import Tooltip from '@material-ui/core/Tooltip';
import { withRouter } from 'react-router-dom';
// actions
import { signOut } from 'Actions';

// components
import Notifications from './Notifications';
import ChatSidebar from './ChatSidebar';
import { Hidden } from '@material-ui/core';

import UserBlock from './UserBlock'


class Header extends Component {

	state = {
		customizer: false,
	}


	// toggle screen full
	toggleScreenFull() {
		screenfull.toggle();
	}

	logout = () => {
		this.props.signOut(this.props.history);
	}

	render() {
		
		return (
			<AppBar position="static" className="rct-header">
				
				<Toolbar className="d-flex justify-content-between w-100 pl-0">
					<div className="d-inline-flex align-items-center">
						<div className="site-logo">
							<Link to="/" className="logo-mini">
								<img src={require('Assets/images/logo.png')} className="mr-15" alt="site logo" width="150" height="35" />
							</Link>
						</div>
					</div>
					<ul className="navbar-right list-inline mb-0">
						
						<Notifications />

						<li className="list-inline-item setting-icon">
							<Tooltip title="Chat" placement="bottom">
								<IconButton aria-label="settings" onClick={() => this.setState({ customizer: true })}>
									<i className="zmdi zmdi-comment"></i>
								</IconButton>
							</Tooltip>
						</li>
						
						
						<Hidden mdDown>

							<li className="list-inline-item">
								<UserBlock />
							</li>

						</Hidden>

						<li className="list-inline-item">
							<Tooltip title="Full Screen" placement="bottom">
								<IconButton aria-label="settings" onClick={() => this.toggleScreenFull()}>
									<i className="zmdi zmdi-crop-free"></i>
								</IconButton>
							</Tooltip>
						</li>
					</ul>
					<Drawer
						anchor={'right'}
						open={this.state.customizer}
						onClose={() => this.setState({ customizer: false })}
					>
						<ChatSidebar />
					</Drawer>
				</Toolbar>
			
			</AppBar>
		);
	}
}



export default connect(null, {signOut})(withRouter(Header));
