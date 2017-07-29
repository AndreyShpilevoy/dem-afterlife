import React from 'react';
import {string, shape} from 'prop-types';
import {sharedPropTypes} from 'utils';
import {withStyles} from 'styles';
import NavigationLinkListItem from '../NavigationLinkListItem';
import calculateStyles from './calculateStyles';

const mapNavigationLinks = (navigationLinkArray = [], separatorClassName) =>
    navigationLinkArray.map(item =>
        (<div key={item.id}>
            <NavigationLinkListItem navigationLinkItem={item} />
            <div className={separatorClassName} />
        </div>));

export const NavigationLinkListPure = ({styles, className, navigationLinkArray}) => {
    const {list, separator} = styles;
    const localClassName = `${list} ${className || ''}`;
    return (
        <ul className={localClassName}>
            {mapNavigationLinks(navigationLinkArray, separator)}
        </ul>
    );
};

NavigationLinkListPure.propTypes = {
    styles: shape().isRequired,
    className: string,
    navigationLinkArray: sharedPropTypes.navigationLinkArray.isRequired
};

NavigationLinkListPure.defaultProps = {
    className: ''
};

export default withStyles(theme => calculateStyles(theme))(NavigationLinkListPure);