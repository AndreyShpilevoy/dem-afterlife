import React from 'react';
import {sharedPropTypes} from 'utils';

const Breadcrumbs = ({breadcrumbArray}) => <div>{breadcrumbArray.length}</div>;

Breadcrumbs.propTypes = {
    breadcrumbArray: sharedPropTypes.breadcrumbArray.isRequired
};

export default Breadcrumbs;

