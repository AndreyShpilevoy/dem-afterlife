import React from 'react';
import {string, shape} from 'prop-types';
import {sharedPropTypes, defaults} from 'utils';
import NavigationLinkItem from 'components/NavigationLinkItem';
import {withStyles} from 'styles';
import calculateStyles from './calculateStyles';

const mapNavigationLinks = (navigationLinkArray, separatorClassName) =>
    navigationLinkArray.map((item, key) =>
        <div key={key}>
            <NavigationLinkItem navigationLinkItem = {item} />
            <div className={separatorClassName}/>
        </div>);

export const NavigationLinkArrayPure = ({styles, className, navigationLinkArray}) => {
    const {list, separator} = styles;
    const localeClassName = `${list} ${className || ''}`;
    return (
        <ul className={localeClassName}>
            {mapNavigationLinks(navigationLinkArray || defaults.emptyArray, separator)}
        </ul>
    );
};

NavigationLinkArrayPure.propTypes = {
    styles: shape().isRequired,
    className: string,
    navigationLinkArray: sharedPropTypes.navigationLinkArray
};

export default withStyles(theme => calculateStyles(theme))(NavigationLinkArrayPure);