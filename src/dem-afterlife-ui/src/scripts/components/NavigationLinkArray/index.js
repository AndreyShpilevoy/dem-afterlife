import React from 'react';
import {string, object} from 'prop-types';
import {sharedPropTypes, defaults} from 'utils';
import NavigationLinkItem from 'components/NavigationLinkItem';
import {css, withStyles} from 'styles';
import calculateStyles from './calculateStyles';

const mapNavigationLinks = (navigationLinkArray, styles) =>
    navigationLinkArray.map((item, key) =>
        <div key={key}>
            <NavigationLinkItem navigationLinkItem = {item} />
            <div className={css(styles.separator)}/>
        </div>);

export const NavigationLinkArrayPure = ({styles, className, navigationLinkArray}) =>
    <ul className={`${css(styles.list)} ${className || ''}`}>
        {mapNavigationLinks(navigationLinkArray || defaults.emptyArray, styles)}
    </ul>;

NavigationLinkArrayPure.propTypes = {
    styles: object,
    className: string,
    navigationLinkArray: sharedPropTypes.navigationLinkArray
};

export default withStyles(theme => calculateStyles(theme))(NavigationLinkArrayPure);