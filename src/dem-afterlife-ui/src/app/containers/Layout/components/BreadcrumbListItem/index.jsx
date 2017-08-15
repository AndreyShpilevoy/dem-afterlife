import React from 'react';
import {bool, shape} from 'prop-types';
import Link from 'components/Link';
import {sharedPropTypes} from 'utils';
import {css, withStyles} from 'styles';
import calculateStyles from './calculateStyles';

export const BreadcrumbListItemPure = ({breadcrumb, ellipsis, setActive, styles}) =>
    (<div className={styles.item}>
        {
            ellipsis ?
                <div className={styles.arrow}>{'...'}</div> :
                <Link className={styles.arrow} to={breadcrumb.path}>
                    <div>{breadcrumb.title}</div>
                </Link>
        }
    </div>);

BreadcrumbListItemPure.propTypes = {
    styles: shape().isRequired,
    breadcrumb: sharedPropTypes.breadcrumb.isRequired,
    setActive: bool,
    ellipsis: bool
};

BreadcrumbListItemPure.defaultProps = {
    setActive: false,
    ellipsis: false
};

export default withStyles(theme => calculateStyles(theme))(BreadcrumbListItemPure);

