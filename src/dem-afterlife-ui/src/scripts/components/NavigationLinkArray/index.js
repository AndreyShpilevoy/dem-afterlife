import React from 'react';
import {string} from 'prop-types';
import {sharedPropTypes, defaults} from 'utils';
import {ClassNamesPropType} from 'aesthetic';
import NavigationLinkItem from 'components/NavigationLinkItem';
import styler from 'styles/styler';
import calculateStyles from './calculateStyles';

const mapNavigationLinks = (navigationLinkArray, classNames) =>
    navigationLinkArray.map((item, key) =>
        <div key={key}>
            <NavigationLinkItem navigationLinkItem = {item} />
            <div className={classNames.separator}/>
        </div>);

export const NavigationLinkArrayPure = ({classNames, className, navigationLinkArray}) =>
    <ul className={`${classNames.list} ${className || ''}`}>
        {mapNavigationLinks(navigationLinkArray || defaults.emptyArray, classNames)}
    </ul>;

NavigationLinkArrayPure.propTypes = {
    classNames: ClassNamesPropType,
    className: string,
    navigationLinkArray: sharedPropTypes.navigationLinkArray
};

export default styler(theme => calculateStyles(theme))(NavigationLinkArrayPure);