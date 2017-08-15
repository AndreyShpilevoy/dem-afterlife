import React from 'react';
import {shape} from 'prop-types';
import {sharedPropTypes} from 'utils';
import {withStyles} from 'styles';
import BreadcrumbListItem from '../BreadcrumbListItem';
import calculateStyles from './calculateStyles';

export const BreadcrumbListPure = ({breadcrumbArray, styles}) =>
    (<div className={styles.list}>
        {breadcrumbArray.map(item => <BreadcrumbListItem breadcrumb={item} key={item.path} />)}
    </div>);

BreadcrumbListPure.propTypes = {
    styles: shape().isRequired,
    breadcrumbArray: sharedPropTypes.breadcrumbArray.isRequired
};

export default withStyles(theme => calculateStyles(theme))(BreadcrumbListPure);

