import React from 'react';
import {bool, shape} from 'prop-types';
import Link from 'components/Link';
import {sharedPropTypes} from 'utils';
import {injectSheet, concatStyleNames} from 'styles';
import calculateStyles from './calculateStyles';

const getEllipsis = classes => {
    const ellipsisClasses = concatStyleNames([classes.arrow, classes.ellipsis]);
    return <div className={ellipsisClasses}>{'...'}</div>;
};
const getButton = (breadcrumb, classes, isActive) => {
    const activeClasses = concatStyleNames([classes.arrow, classes.active]);
    return isActive ?
        <span className={activeClasses}>
            <div>{breadcrumb.title}</div>
        </span> :
        <Link className={classes.arrow} to={breadcrumb.path}>
            <div>{breadcrumb.title}</div>
        </Link>;
};

export const BreadcrumbListItemPure = ({breadcrumb, ellipsis, isActive, classes}) =>
    (<div className={classes.item}>
        { ellipsis ? getEllipsis(classes) : getButton(breadcrumb, classes, isActive) }
    </div>);

BreadcrumbListItemPure.propTypes = {
    classes: shape().isRequired,
    breadcrumb: sharedPropTypes.breadcrumb.isRequired,
    isActive: bool,
    ellipsis: bool
};

BreadcrumbListItemPure.defaultProps = {
    isActive: false,
    ellipsis: false
};

export default injectSheet(calculateStyles, {componentName: 'BreadcrumbListItem'})(BreadcrumbListItemPure);