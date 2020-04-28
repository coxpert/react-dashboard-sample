/**
 * Footer
 */
import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

// intl messages
import IntlMessages from 'Util/IntlMessages';

// app config
import AppConfig from 'Constants/AppConfig';

const Footer = () => (
	<div className="rct-footer d-flex justify-content-between align-items-center">
		<ul className="list-inline footer-menus mb-0">
			<li className="list-inline-item">
				<Button component={Link} to="/app/dashboard">Getting started</Button>
			</li>
			<li className="list-inline-item">
				<Button component={Link} to="/app/about-us">About us</Button>
			</li>
			<li className="list-inline-item">
				<Button component={Link} to="/app/pages/faq">FAQs</Button>
			</li>
			<li className="list-inline-item">
				<Button component={Link} to="/terms-condition">Terms &amp; Conditions</Button>
			</li>
			<li className="list-inline-item">
				<Button component={Link} to="/app/pages/feedback">facebook</Button>
			</li>
		</ul>
		<h5 className="mb-0">{AppConfig.copyRightText}</h5>
	</div>
);

export default Footer;
