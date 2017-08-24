import React from 'react';
import {bool, shape} from 'prop-types';
import Link from 'components/Link';
import {sharedPropTypes} from 'utils';
import {injectSheet} from 'styles';
import calculateStyles from './calculateStyles';

export const BreadcrumbListItemPure = ({breadcrumb, ellipsis, setActive, classes}) =>
    (<div className={classes.item}>
        {
            ellipsis ?
                <div className={classes.arrow}>{'...'}</div> :
                <Link className={classes.arrow} to={breadcrumb.path}>
                    <div>{breadcrumb.title}</div>
                </Link>
        }
    </div>);

BreadcrumbListItemPure.propTypes = {
    classes: shape().isRequired,
    breadcrumb: sharedPropTypes.breadcrumb.isRequired,
    setActive: bool,
    ellipsis: bool
};

BreadcrumbListItemPure.defaultProps = {
    setActive: false,
    ellipsis: false
};

export default injectSheet(calculateStyles, {componentName: 'BreadcrumbListIte'})(BreadcrumbListItemPure);