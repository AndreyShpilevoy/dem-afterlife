import React from 'react';
import {string, shape, number, object} from 'prop-types';
import Link from 'components/Link';
import {withStyles} from 'styles';
import calculateStyles from './calculateStyles';


export const NavigationLinkItemPure = ({styles, navigationLinkItem}) =>
    <li>
        <Link className={styles.link} to={navigationLinkItem.href}>
            {navigationLinkItem.title}
        </Link>
    </li>;

NavigationLinkItemPure.propTypes = {
    styles: object,
    navigationLinkItem: shape({
        id: number.isRequired,
        title: string.isRequired,
        href: string.isRequired,
        order: number.isRequired
    }).isRequired
};

export default withStyles(theme => calculateStyles(theme))(NavigationLinkItemPure);