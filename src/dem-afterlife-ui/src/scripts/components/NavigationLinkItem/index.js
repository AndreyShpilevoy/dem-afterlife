import React from 'react';
import {string, shape, number} from 'prop-types';
import Link from 'react-router-dom/Link';
import {ClassNamesPropType} from 'aesthetic';
import styler from 'styles/styler';
import calculateStyles from './calculateStyles';


export const NavigationLinkItemPure = ({classNames, navigationLinkItem}) =>
    <li>
        <Link className={classNames.link} to={navigationLinkItem.href}>
            {navigationLinkItem.title}
        </Link>
    </li>;

NavigationLinkItemPure.propTypes = {
    classNames: ClassNamesPropType,
    navigationLinkItem: shape({
        id: number.isRequired,
        title: string.isRequired,
        href: string.isRequired,
        order: number.isRequired
    }).isRequired
};

export default styler(theme => calculateStyles(theme))(NavigationLinkItemPure);