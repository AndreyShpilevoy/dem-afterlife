/* eslint no-console:0, fp/no-unused-expression:0 */
import React from 'react';
import {shape, string} from 'prop-types';
import {Link as NativeLink} from 'react-router-dom';
import {injectSheet} from 'styles';
import calculateStyles from './calculateStyles';

const mapPropsNativeProps = props => Object.keys(NativeLink.propTypes).reduce((previous, current) =>
    props[current] ?
        {...{[current]: props[current]}, ...previous} :
        previous,
{
    children: props.children,
    style: props.style
}
);

export const LinkPure = props => {
    const localClassName = props.className ? `${props.classes.link} ${props.className}` : props.classes.link;
    return <NativeLink className={localClassName} {...mapPropsNativeProps(props)} />;
};


LinkPure.propTypes = {
    classes: shape().isRequired,
    className: string
};

LinkPure.defaultProps = {
    className: '',
    style: {},
    children: ''
};

export default injectSheet(calculateStyles, {componentName: 'Link'})(LinkPure);