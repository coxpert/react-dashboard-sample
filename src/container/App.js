/**
 * App.js Layout Start Here
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';

// rct theme provider
import RctThemeProvider from './RctThemeProvider';


//Agency Layout
import AgencyLayout from './AgencyLayout';


//Auth0
import Auth from '../Auth/Auth';

import  AuthLayout  from './AuthLayout'

//Auth0 Handle Authentication
const auth = new Auth();

const handleAuthentication = ({ location }) => {
   if (/access_token|id_token|error/.test(location.hash)) {
      auth.handleAuthentication();
   }
}


class App extends Component {
   render() {
      const { location, user } = this.props;
      if (location.pathname === '/') {
         if (user !== null) {
            return (<Redirect to={'/customer'} />);
         } 
      }
      return (
         <RctThemeProvider>
            <NotificationContainer />
            <Switch>
               <Route path="/customer" component={AgencyLayout} />
               <Route path="/" component={AuthLayout} />
            </Switch>
         </RctThemeProvider>
      );
   }
}

// map state to props
const mapStateToProps = ({ authUser }) => {
   const { user } = authUser;
   return { user };
};

export default connect(mapStateToProps)(App);
