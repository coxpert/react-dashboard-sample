/**
 * Agency App
 */
import React, { Component } from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom';

// Agency layout
import RctAgencyLayout from 'Components/RctAgencyLayout';

// router service
import Customer from 'Routes/customer'

class RctAgencyApp extends Component {
   render() {
      const { match, location } = this.props;
      if (location.pathname === '/customer') {
         return (<Redirect to={'/customer/dashboard'} />);
      }
      return (
         <RctAgencyLayout>
				<Route  path={`${match.url}`} component={Customer} />
         </RctAgencyLayout>
      );
   }
}

export default withRouter(RctAgencyApp);
