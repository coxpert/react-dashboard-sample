/**
 * Page Title Bar Component
 * Used To Display Page Title & Breadcrumbs
 */
import React from 'react';

const PageSubtitleBar = ({ title}) => {
   return (
      <div className="page-title d-flex justify-content-between align-items-center">
         {title &&
            <div className="page-title-wrap">
               <h3 className="">{title}</h3>
            </div>
         }
      </div>
   )
};

PageSubtitleBar.defaultProps = {
   enableBreadCrumb: true
}

export default PageSubtitleBar;
