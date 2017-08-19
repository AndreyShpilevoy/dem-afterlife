import React from 'react';
import {string, shape} from 'prop-types';
import {sharedPropTypes} from 'utils';
import {injectSheet} from 'styles';
import NavigationLinkListItem from '../NavigationLinkListItem';
import calculateStyles from './calculateStyles';

const mapNavigationLinks = (navigationLinkArray = [], separatorClassName) =>
    navigationLinkArray.map(item =>
        (<div key={item.id}>
            <NavigationLinkListItem navigationLinkItem={item} />
            <div className={separatorClassName} />
        </div>));

export const NavigationLinkListPure = ({classes, className, navigationLinkArray}) => {
    const {list, separator} = classes;
    const localClassName = `${list} ${className || ''}`;
    return (
        <ul className={localClassName}>
            {mapNavigationLinks(navigationLinkArray, separator)}
        </ul>
    );
};

NavigationLinkListPure.propTypes = {
    classes: shape().isRequired,
    className: string,
    navigationLinkArray: sharedPropTypes.navigationLinkArray.isRequired
};

NavigationLinkListPure.defaultProps = {
    className: ''
};

export default injectSheet(calculateStyles, {componentName: 'NavigationLinkList'})(NavigationLinkListPure);