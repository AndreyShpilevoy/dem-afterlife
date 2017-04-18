import React from 'react';
import {arrayOf, string, shape, number} from 'prop-types';
import R from 'ramda';
import {ClassNamesPropType} from 'aesthetic';
import NavigationLinkItem from 'components/NavigationLinkItem';
import styler from 'styles/styler';
import calculateStyles from './calculateStyles';

const mapNavigationLinks = navigationLinkArray => R.map(
    navigationLinkItem => <NavigationLinkItem key={navigationLinkItem.id} navigationLinkItem = {navigationLinkItem} />,
    R.sortBy(R.prop('order'), navigationLinkArray));

export const NavigationLinkArrayPure = ({classNames, navigationLinkArray}) =>
    <ul>
        {mapNavigationLinks(navigationLinkArray || [])}
    </ul>;

NavigationLinkArrayPure.propTypes = {
    classNames: ClassNamesPropType,
    navigationLinkArray: arrayOf(
        shape({
            id: number.isRequired,
            title: string.isRequired,
            href: string.isRequired,
            order: number.isRequired
        })).isRequired
};

export default styler(theme => calculateStyles(theme))(NavigationLinkArrayPure);