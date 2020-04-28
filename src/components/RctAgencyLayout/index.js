/**
 * Rct Horizontal Menu Layout
 */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars';

// Components
import Header from 'Components/Header/Header';
import Footer from 'Components/Footer/Footer';
import AgencyMenu from '../AgencyMenu/AgencyMenu';

class RctAgencyLayout extends Component {

   renderPage() {
      const { children } = this.props;
      return (
         <Scrollbars
            className="rct-scroll"
            autoHide
            autoHideDuration={100}
            style={{ height: 'calc(100vh - 15.5rem)' }}
         >
            <div className="rct-page-content">
               {children}
            </div>
         </Scrollbars>
      );
   }

   render() {
      return (
         <div className={`app-boxed bg-main-custom-gradient`} >
            <div className="app-container">
               <div className="rct-page-wrapper">
                  <div className="rct-app-content">
                     <div className="app-header">
                        <Header agencyMenu />
                     </div>
                     <div className="rct-page">
                        <AgencyMenu />
                        {this.renderPage()}
                     </div>
                     <Footer />
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default (withRouter(RctAgencyLayout));
