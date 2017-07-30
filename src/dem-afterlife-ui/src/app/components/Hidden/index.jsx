import React from 'react';
import {node, string, func, shape} from 'prop-types';
import {withStyles} from 'styles';
import calculateStyles from './calculateStyles';

const constructClassNames = (sizesArray, styles) =>
    sizesArray.filter(size => size.direction === 'up' || size.direction === 'down' || size.direction === 'exact')
        .map(size => `hidden-${size.direction}-${size.name}`)
        .reduce((previous, current) =>
            styles[current] ? `${previous} ${styles[current]}` : '', '');

export const HiddenPure = ({xs, sm, md, lg, xl, children, styles, className, onClick}) => {
    const classes = constructClassNames(
        [
            {name: 'xs', direction: xs},
            {name: 'sm', direction: sm},
            {name: 'md', direction: md},
            {name: 'lg', direction: lg},
            {name: 'xl', direction: xl}
        ],
        styles
    );

    const localClassName = `${classes} ${className}`;
    return onClick ?
        (
            <span className={localClassName} onClick={onClick} role={'button'} tabIndex={0}>
                {children}
            </span>
        ) : (
            <span className={localClassName}>
                {children}
            </span>
        );
};

HiddenPure.propTypes = {
    onClick: func, // eslint-disable-line react/require-default-props
    className: string,
    styles: shape().isRequired,
    children: node.isRequired,
    xs: string,
    sm: string,
    md: string,
    lg: string,
    xl: string
};

HiddenPure.defaultProps = {
    className: '',
    xs: '',
    sm: '',
    md: '',
    lg: '',
    xl: ''
};

export default withStyles(theme => calculateStyles(theme))(HiddenPure);