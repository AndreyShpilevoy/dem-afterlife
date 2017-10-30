import React from 'react';
import {string, shape, number} from 'prop-types';
import Link from 'components/Link';
import {injectSheet} from 'styles';
import calculateStyles from './calculateStyles';


export const NavigationLinkListItemPure = ({classes, navigationLinkItem}) => (
    <li>
        <Link className={classes.link} to={navigationLinkItem.href}>
            {navigationLinkItem.title}
        </Link>
    </li>
);

NavigationLinkListItemPure.propTypes = {
    classes: shape().isRequired,
    navigationLinkItem: shape({
        id: number.isRequired,
        title: string.isRequired,
        href: string.isRequired,
        order: number.isRequired
    }).isRequired
};

export default injectSheet(calculateStyles, {componentName: 'NavigationLinkListItem'})(NavigationLinkListItemPure);