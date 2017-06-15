import React from 'react';
import {node, string, func, object} from 'prop-types';
import {css, withStyles} from 'styles';
import calculateStyles from './calculateStyles';

const constructClassNames = (sizesArray, styles) =>
    sizesArray.filter(size => size.direction === 'up' || size.direction === 'down' || size.direction === 'exact')
        .map(size => `hidden-${size.direction}-${size.name}`)
        .reduce((previouse, current) => `${previouse} ${css(styles[current])}`, '');

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

    return (
        <span className={`${classes} ${className || ''}`} onClick={onClick}>
            {children}
        </span>
    );
};

HiddenPure.propTypes = {
    onClick: func,
    className: string,
    styles: object,
    children: node,
    xs: string,
    sm: string,
    md: string,
    lg: string,
    xl: string
};

export default withStyles(theme => calculateStyles(theme))(HiddenPure);