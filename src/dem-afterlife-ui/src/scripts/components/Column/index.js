import React from 'react';
import {node, number} from 'prop-types';
import {ClassNamesPropType} from 'aesthetic';
import styler from 'styles/styler';
import calculateStyles from './calculateStyles';

const constructClassNames = (sizesArray, classNames) =>
    sizesArray.filter(size => size.count)
        .map(size => `col-${size.name}-${size.count}`)
        .reduce((previouse, current) =>
            classNames[current] ? `${previouse} ${classNames[current]}` : '', '');

export const ColumnPure = ({xs, sm, md, lg, xl, xsOffset, smOffset, mdOffset, lgOffset, xlOffset, children, classNames}) => {
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
        <div className={classes}>
            {children}
        </div>
    );
};

ColumnPure.propTypes = {
    classNames: ClassNamesPropType,
    children: node,
    xs: number,
    sm: number,
    md: number,
    lg: number,
    xl: number,
    xsOffset: number,
    smOffset: number,
    mdOffset: number,
    lgOffset: number,
    xlOffset: number
};

export default styler(theme => calculateStyles(theme))(ColumnPure);