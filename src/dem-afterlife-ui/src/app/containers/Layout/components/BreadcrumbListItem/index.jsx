import React from 'react';
import {sharedPropTypes} from 'utils';
import {withStyles} from 'styles';
import calculateStyles from './calculateStyles';

export const BreadcrumbListItemPure = ({breadcrumb}) => <div>{breadcrumb.title}</div>;
BreadcrumbListItemPure.propTypes = {
    breadcrumb: sharedPropTypes.breadcrumb.isRequired
};

export default withStyles(theme => calculateStyles(theme))(BreadcrumbListItemPure);

