import React from 'react';
import {node, number, string, oneOfType} from 'prop-types';
import {ClassNamesPropType} from 'aesthetic';
import styler from 'styles/styler';
import calculateStyles from './calculateStyles';

const constructClassNames = (sizesArray, classNames) =>
    sizesArray.filter(size => size.count)
        .map(size => `col-${size.name}-${size.count}`)
        .reduce((previouse, current) =>
            classNames[current] ? `${previouse} ${classNames[current]}` : '', '');

export const ColumnPure = ({xs, sm, md, lg, xl, xsOffset, smOffset, mdOffset, lgOffset, xlOffset, children, classNames, className}) => {
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
        classNames);

    return (
        <div className={`${classes} ${className || ''}`}>
            {children}
        </div>
    );
};

ColumnPure.propTypes = {
    className: string,
    classNames: ClassNamesPropType,
    children: node,
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

export default styler(theme => calculateStyles(theme))(ColumnPure);