/**
 * Page Title Bar Component
 * Used To Display Page Title & Breadcrumbs
 */
import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

// get url string
const getUrlString = (path, sub, index) => {
   if (index === 0) {
      return '/';
   } else {
      return '/' + path.split(sub)[0] + sub;
   }
};

const PageSubtitleBar = ({ title }) => {
   return (
      <div className="page-title d-flex justify-content-between align-items-center">
         {title &&
            <div className="page-title-wrap">
               <h2 className="ml-4 mt-1">{title}</h2>
            </div>
         }
      </div>
   )
};

// default props value
PageSubtitleBar.defaultProps = {
   enableBreadCrumb: true
}

export default PageSubtitleBar;
