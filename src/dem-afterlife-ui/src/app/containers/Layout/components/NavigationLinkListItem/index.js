import React from 'react';
import {string, shape, number} from 'prop-types';
import Link from 'components/Link';
import {withStyles} from 'styles';
import calculateStyles from './calculateStyles';


export const NavigationLinkListItemPure = ({styles, navigationLinkItem}) =>
    <li>
        <Link className={styles.link} to={navigationLinkItem.href}>
            {navigationLinkItem.title}
        </Link>
    </li>;

NavigationLinkListItemPure.propTypes = {
    styles: shape().isRequired,
    navigationLinkItem: shape({
        id: number.isRequired,
        title: string.isRequired,
        href: string.isRequired,
        order: number.isRequired
    }).isRequired
};

export default withStyles(theme => calculateStyles(theme))(NavigationLinkListItemPure);