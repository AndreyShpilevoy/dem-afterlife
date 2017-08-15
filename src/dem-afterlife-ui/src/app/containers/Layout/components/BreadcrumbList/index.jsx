import React from 'react';
import {sharedPropTypes} from 'utils';
import {withStyles} from 'styles';
import BreadcrumbListItem from '../BreadcrumbListItem';
import calculateStyles from './calculateStyles';

export const BreadcrumbListPure = ({breadcrumbArray}) =>
    (<div>
        {breadcrumbArray.map(item => <BreadcrumbListItem breadcrumb={item} key={item.path} />)}
    </div>);

BreadcrumbListPure.propTypes = {
    breadcrumbArray: sharedPropTypes.breadcrumbArray.isRequired
};

export default withStyles(theme => calculateStyles(theme))(BreadcrumbListPure);

