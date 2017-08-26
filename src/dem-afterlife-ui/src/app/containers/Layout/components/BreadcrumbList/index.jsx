import React from 'react';
import {shape} from 'prop-types';
import {sharedPropTypes} from 'utils';
import {injectSheet} from 'styles';
import BreadcrumbListItem from '../BreadcrumbListItem';
import calculateStyles from './calculateStyles';

const mapArrayToComponents = array =>
    array.reduce((previous, current, index) => {
        if (array.length > 4 && index > 1 && index < array.length - 3) {
            return previous;
        }
        return [
            ...previous,
            <BreadcrumbListItem
                breadcrumb={current}
                key={current.path}
                isActive={index + 1 === array.length}
                ellipsis={array.length > 4 && index === 1} />
        ];
    }, []);

export const BreadcrumbListPure = ({breadcrumbArray, classes}) =>
    (<div className={classes.list}>
        {mapArrayToComponents(breadcrumbArray)}
    </div>);

BreadcrumbListPure.propTypes = {
    classes: shape().isRequired,
    breadcrumbArray: sharedPropTypes.breadcrumbArray.isRequired
};

export default injectSheet(calculateStyles, {componentName: 'BreadcrumbList'})(BreadcrumbListPure);