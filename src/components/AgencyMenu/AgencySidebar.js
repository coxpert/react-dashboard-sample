/**
 * Sidebar Content
 */
import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


import AgencySidebarMenuItem from './AgencySidebarMenuItem';

import { Typography } from '@material-ui/core';

class AgencySidebar extends Component {

   render() {
      const { agencySidebarMenu } = this.props.sidebar;
      return (
         <div className="rct-sidebar-nav">
            <nav className="navigation">
               <List
                  className="rct-mainMenu p-0 m-0 list-unstyled"
                  subheader={
                     <ListSubheader className="side-title" component="li">
                        <Typography>Earn Faevaa Cash</Typography>
                     </ListSubheader>}
               >
                  {agencySidebarMenu.earmFaevaaCash.map((menu, key) => (
                     <AgencySidebarMenuItem
                        menu={menu}
                        key={key}
                     />
                  ))}
               </List>
               <List
                  className="rct-mainMenu p-0 m-0 list-unstyled"
                  subheader={<ListSubheader className="side-title" component="li">
                        <Typography>Faevaa Rewards</Typography>
                     </ListSubheader>}
               >
                  {agencySidebarMenu.faevaaRewards.map((menu, key) => (
                     <AgencySidebarMenuItem
                        menu={menu}
                        key={key}
                     />
                  ))}
               </List>
               <List
                  className="rct-mainMenu p-0 m-0 list-unstyled"
                  subheader={<ListSubheader className="side-title" component="li">
                     <Typography>Test Your Luck</Typography>
                     </ListSubheader>}
               >
                  {agencySidebarMenu.testYourLuck.map((menu, key) => (
                     <AgencySidebarMenuItem
                        menu={menu}
                        key={key}
                     />
                  ))}
               </List>
               <List
                  className="rct-mainMenu p-0 m-0 list-unstyled"
                  subheader={<ListSubheader className="side-title" component="li">
                     <Typography>Teferral Zone</Typography>
                     </ListSubheader>}
               >
                  {agencySidebarMenu.refferalZone.map((menu, key) => (
                     <AgencySidebarMenuItem
                        menu={menu}
                        key={key}
                     />
                  ))}
               </List>
            </nav>
         </div>
      );
   }
}

// map state to props
const mapStateToProps = ({ sidebar }) => {
   return { sidebar };
};

export default withRouter(connect(mapStateToProps)(AgencySidebar));
