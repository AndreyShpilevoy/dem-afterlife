import React from 'react';
import {func, node, number, string, oneOfType, shape} from 'prop-types';
import {withStyles} from 'styles';
import {defaults} from 'utils';
import calculateStyles from './calculateStyles';

const constructClassNames = (sizesArray, styles) =>
    sizesArray.filter(size => size.count || size.count === 0)
        .map(size => `col-${size.name}-${size.count}`)
        .reduce((previous, current) =>
            styles[current] ? `${previous} ${styles[current]}` : defaults.emptyString, defaults.emptyString);

export const ColumnPure = (
    {xs, sm, md, lg, xl, xsOffset, smOffset, mdOffset, lgOffset, xlOffset, children, styles, className, onClick}
) => {
    const classes = constructClassNames([
        {name: 'xs', count: xs},
        {name: 'sm', count: sm},
        {name: 'md', count: md},
        {name: 'lg', count: lg},
        {name: 'xl', count: xl},
        {name: 'xsOffset', count: xsOffset},
        {name: 'smOffset', count: smOffset},
        {name: 'mdOffset', count: mdOffset},
        {name: 'lgOffset', count: lgOffset},
        {name: 'xlOffset', count: xlOffset}],
    styles);

    const localeClassName = `${classes} ${className || defaults.emptyString}`;
    return (
        <div className={localeClassName} onClick={onClick}>
            {children}
        </div>
    );
};

ColumnPure.propTypes = {
    className: string,
    styles: shape().isRequired,
    children: node,
    onClick: func,
    xs: oneOfType([number, string]),
    sm: oneOfType([number, string]),
    md: oneOfType([number, string]),
    lg: oneOfType([number, string]),
    xl: oneOfType([number, string]),
    xsOffset: oneOfType([number, string]),
    smOffset: oneOfType([number, string]),
    mdOffset: oneOfType([number, string]),
    lgOffset: oneOfType([number, string]),
    xlOffset: oneOfType([number, string])
};

export default withStyles(theme => calculateStyles(theme))(ColumnPure);