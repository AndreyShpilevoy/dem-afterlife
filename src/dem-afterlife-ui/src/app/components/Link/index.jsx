/* eslint no-console:0, fp/no-unused-expression:0 */
import React from 'react';
import {shape, string} from 'prop-types';
import {Link as NativeLink} from 'react-router-dom';
import {withStyles} from 'styles';
import {defaults} from 'utils';
import calculateStyles from './calculateStyles';

const mapPropsNativeProps = props => Object.keys(NativeLink.propTypes).reduce((previous, current) =>
    props[current] ?
        {...{[current]: props[current]}, ...previous} :
        previous,
{
    children: props.children || defaults.emptyString,
    style: props.style || defaults.emptyObject
}
);

export const LinkPure = props => {
    const localeClassName = `${props.styles.link} ${props.className || defaults.emptyString}`;
    return <NativeLink className={localeClassName} {...mapPropsNativeProps(props)} />;
};


LinkPure.propTypes = {
    styles: shape().isRequired,
    className: string
};

LinkPure.defaultProps = {
    className: defaults.emptyString
};

export default withStyles(theme => calculateStyles(theme))(LinkPure);