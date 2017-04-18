import React from 'react';
import {arrayOf, string, shape, number} from 'prop-types';
import R from 'ramda';
import {ClassNamesPropType} from 'aesthetic';
import NavigationLinkItem from 'components/NavigationLinkItem';
import styler from 'styles/styler';
import calculateStyles from './calculateStyles';

const mapNavigationLinks = (navigationLinkArray, classNames) =>
    R.sortBy(R.prop('order'), navigationLinkArray).map((item, key) =>
        <div key={key}>
            <NavigationLinkItem navigationLinkItem = {item} />
            <div className={classNames.separator}/>
        </div>);

export const NavigationLinkArrayPure = ({classNames, className, navigationLinkArray}) =>
    <ul className={`${classNames.list} ${className || ''}`}>
        {mapNavigationLinks(navigationLinkArray || [], classNames)}
    </ul>;

NavigationLinkArrayPure.propTypes = {
    classNames: ClassNamesPropType,
    className: string,
    navigationLinkArray: arrayOf(
        shape({
            id: number.isRequired,
            title: string.isRequired,
            href: string.isRequired,
            order: number.isRequired
        })).isRequired
};

export default styler(theme => calculateStyles(theme))(NavigationLinkArrayPure);