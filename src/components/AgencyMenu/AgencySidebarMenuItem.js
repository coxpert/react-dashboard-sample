/**
 * Nav Menu Item
 */
import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { NavLink, withRouter } from 'react-router-dom';

//Helper
import { getAppLayout } from "Helpers/helpers";

class AgencySidebarMenuItem extends Component {

   /**
    * GetlayoutHandler
    */
   getLayoutHandler() {
      return getAppLayout(this.props.location);
   }

   render() {
      const { menu } = this.props;
      return (
         <ListItem button component="li">
            <NavLink activeClassName="item-active" to={!menu.exact ? `/${this.getLayoutHandler() + menu.path}` : menu.path}>
               <ListItemIcon className="menu-icon">
                  <i className={menu.menu_icon}></i>
               </ListItemIcon>
               <span className="menu">
                  {menu.menu_title}
               </span>
            </NavLink>
         </ListItem>
      );
   }
}

export default withRouter(AgencySidebarMenuItem);
