/**
 * Nav Menu Item
 */
import React, { Fragment, Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

//Helper
import { Typography } from '@material-ui/core';

class NavMenuItem extends Component {

	componentDidMount() {
		this.updateDimensions();
		window.addEventListener("resize", this.updateDimensions);
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.updateDimensions);
	}

	updateDimensions = () => {
		this.setState({ windowWidth: window.innerWidth });
	}


	render() {
		const { menu, match } = this.props;

		return (
			<li className="nav-item">
				<NavLink to={`/customer${menu.path}`} className="nav-link no-arrow">
					<i className={menu.menu_icon}></i>
					<Typography>{menu.menu_title}</Typography>
				</NavLink>
			</li>
		);
	}
}

export default withRouter(NavMenuItem);
