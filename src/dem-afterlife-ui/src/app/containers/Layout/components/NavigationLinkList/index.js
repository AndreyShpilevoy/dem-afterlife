import React from 'react';
import {string, shape} from 'prop-types';
import {sharedPropTypes, defaults} from 'utils';
import {withStyles} from 'styles';
import NavigationLinkListItem from '../NavigationLinkListItem';
import calculateStyles from './calculateStyles';

const mapNavigationLinks = (navigationLinkArray, separatorClassName) =>
    navigationLinkArray.map((item, key) =>
        <div key={key}>
            <NavigationLinkListItem navigationLinkItem = {item} />
            <div className={separatorClassName}/>
        </div>);

export const NavigationLinkListPure = ({styles, className, navigationLinkArray}) => {
    const {list, separator} = styles;
    const localeClassName = `${list} ${className || defaults.emptyString}`;
    return (
        <ul className={localeClassName}>
            {mapNavigationLinks(navigationLinkArray || defaults.emptyArray, separator)}
        </ul>
    );
};

NavigationLinkListPure.propTypes = {
    styles: shape().isRequired,
    className: string,
    navigationLinkArray: sharedPropTypes.navigationLinkArray
};

export default withStyles(theme => calculateStyles(theme))(NavigationLinkListPure);