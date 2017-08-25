import React from 'react';
import {shape} from 'prop-types';
import {sharedPropTypes} from 'utils';
import {injectSheet} from 'styles';
import BreadcrumbListItem from '../BreadcrumbListItem';
import calculateStyles from './calculateStyles';

export const BreadcrumbListPure = ({breadcrumbArray, classes}) =>
    (<div className={classes.list}>
        {
            breadcrumbArray.map((item, index) =>
                <BreadcrumbListItem breadcrumb={item} key={item.path} isActive={index + 1 === breadcrumbArray.length} />)
        }
    </div>);

BreadcrumbListPure.propTypes = {
    classes: shape().isRequired,
    breadcrumbArray: sharedPropTypes.breadcrumbArray.isRequired
};

export default injectSheet(calculateStyles, {componentName: 'BreadcrumbList'})(BreadcrumbListPure);