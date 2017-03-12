import React, { PropTypes } from 'react';
import { ClassNamesPropType } from 'aesthetic';
import styler from 'styles/styler';
import calculateStyles from './calculateStyles';

const constructClassNames = (sizesArray, className, classNames) => {
    let result = sizesArray.filter(size => size.count)
        .map((size) => `col-${size.name}-${size.count}`)
        .reduce((previouse, current) =>
            classNames[current] ? `${previouse} ${classNames[current]}` : '', '');
    result = className ? `${result} ${className}` : result;
    return result;
};

const Column = ({xs, sm, md, lg, xl, xsOffset, smOffset, mdOffset, lgOffset, xlOffset, children, className, classNames }) => {
    const classes = constructClassNames([
        { name: 'xs', count: xs },
        { name: 'sm', count: sm },
        { name: 'md', count: md },
        { name: 'lg', count: lg },
        { name: 'xl', count: xl },
        { name: 'xsOffset', count: xsOffset },
        { name: 'smOffset', count: smOffset },
        { name: 'mdOffset', count: mdOffset },
        { name: 'lgOffset', count: lgOffset },
        { name: 'xlOffset', count: xlOffset }],
        className, classNames);

    return (
        <div className={classes}>
            {children}
        </div>
    );
};

const {node, number, string} = PropTypes;
Column.propTypes = {
    className: string,
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

export default styler((theme) => (calculateStyles(theme)))(Column);