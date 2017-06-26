/* eslint no-console:0, fp/no-unused-expression:0 */
import React from 'react';
import {shape, string} from 'prop-types';
import {Link as NativeLink} from 'react-router-dom';
import {withStyles} from 'styles';
import {defaults} from 'utils';
import calculateStyles from './calculateStyles';

const mapPropsNativeProps = props => Object.keys(NativeLink.propTypes).reduce((previouse, current) =>
    props[current] ?
        {...{[current]: props[current]}, ...previouse} :
        previouse,
    {
        children: props.children || defaults.emptyString
    });

export const LinkPure = props => {
    const localeClassName = `${props.styles.link} ${props.className}`;
    return <NativeLink className={localeClassName} {...mapPropsNativeProps(props)}/>;
};


LinkPure.propTypes = {
    styles: shape().isRequired,
    className: string
};

export default withStyles(theme => calculateStyles(theme))(LinkPure);