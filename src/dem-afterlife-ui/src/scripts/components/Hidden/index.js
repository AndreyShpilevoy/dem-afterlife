import React, { PropTypes } from 'react';
import { ClassNamesPropType } from 'aesthetic';
import styler from 'styles/styler';
import calculateStyles from './calculateStyles';

export const constructClassNames = (sizesArray, className, classNames) => {
    let result = sizesArray.filter(size => size.direction === 'up' || size.direction === 'down' || size.direction === 'exact')
        .map((size) => `hidden-${size.direction}-${size.name}`)
        .reduce((previouse, current) => `${previouse} ${classNames[current]}`, '');
    result = className ? `${result} ${className}` : result;
    return result;
};

const Hidden = ({ xs, sm, md, lg, xl, children, className, classNames }) => {
    const classes = constructClassNames([
        { name: 'xs', direction: xs },
        { name: 'sm', direction: sm },
        { name: 'md', direction: md },
        { name: 'lg', direction: lg },
        { name: 'xl', direction: xl }],
        className, classNames);

    return (
        <div className={classes}>
            {children}
        </div>
    );
};

const {node, string} = PropTypes;
Hidden.propTypes = {
    className: string,
    classNames: ClassNamesPropType,
    children: node,
    xs: string,
    sm: string,
    md: string,
    lg: string,
    xl: string
};

export default styler((theme) => (calculateStyles(theme)))(Hidden);